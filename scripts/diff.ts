#!/usr/bin/env node

import { exec, execSync } from "child_process"
import fs from "fs/promises"
import OpenAI from "openai"
import path from "path"

const TEMPLATE_REPO = "https://github.com/shadcn-ui/ui.git"
const DEFAULT_LOCAL_DIR = "src/components/ui"
const DEFAULT_REPORT_FILE = "diff.md"
const OPENAI_MODEL = "gpt-4" // Or your preferred model

interface Args {
	localDir: string
	outputFile: string
}

function parseArgs(): Args {
	const args = process.argv.slice(2)
	const parsedArgs: Args = {
		localDir: DEFAULT_LOCAL_DIR,
		outputFile: DEFAULT_REPORT_FILE,
	}

	for (let i = 0; i < args.length; i++) {
		if (args[i] === "--local" && args[i + 1]) {
			parsedArgs.localDir = args[i + 1]
			i++
		} else if (args[i] === "--output" && args[i + 1]) {
			parsedArgs.outputFile = args[i + 1]
			i++
		} else {
			console.error(`Unknown option: ${args[i]}`)
			process.exit(1)
		}
	}
	return parsedArgs
}

async function runCommand(command: string): Promise<string> {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) {
				console.error(`Error executing command: ${command}\\n${stderr}`)
				reject(error)
			} else {
				resolve(stdout.trim())
			}
		})
	})
}

async function generateDiff(
	file1: string,
	file2: string,
): Promise<string | null> {
	try {
		// Use execSync for diff on original files
		const diffOutput = execSync(`diff -w -b --unified "${file1}" "${file2}"`, {
			encoding: "utf8",
		})
		return diffOutput
	} catch (error: unknown) {
		// Type guard to check properties
		if (error && typeof error === "object") {
			const execError = error as {
				status?: number
				stdout?: Buffer | string
				stderr?: Buffer | string
				message?: string
			}
			// If exit code is 1, it means files are different, which is expected
			if (execError.status === 1 && execError.stdout) {
				return execError.stdout.toString()
			}
			// For other errors, log stderr or message
			console.error(
				`Error generating diff for ${path.basename(file1)} and ${path.basename(
					file2,
				)}: ${
					execError.stderr?.toString() || execError.message || "Unknown error"
				}`,
			)
		} else {
			// Handle cases where the error is not an object
			console.error(
				`Error generating diff for ${path.basename(file1)} and ${path.basename(
					file2,
				)}: ${String(error)}`,
			)
		}
		return null
	}
}

async function getGptSummary(
	diff: string,
	componentName: string,
	openai: OpenAI,
): Promise<string> {
	const prompt = `Summarize the following Git diff between two versions of the ${componentName} component from shadcn/ui. Use bullet points. Focus on user-facing changes, breaking changes, and any styling or behavior updates:\\n\\n${diff}`

	try {
		const response = await openai.chat.completions.create({
			model: OPENAI_MODEL,
			messages: [{ role: "user", content: prompt }],
			temperature: 0.3,
		})
		return (
			response.choices[0]?.message?.content?.trim() ||
			"Error: Could not get summary."
		)
	} catch (error) {
		console.error(`Error getting summary for ${componentName}:`, error)
		return "Error: Failed to fetch summary from OpenAI."
	}
}

// --- Main Script Logic ---

async function main() {
	const args = parseArgs()
	const localDirFullPath = path.resolve(args.localDir)
	const reportFilePath = path.resolve(args.outputFile)

	// Define the fixed clone target directory relative to the project root
	const cloneTarget = path.resolve("temp")

	try {
		// --- Setup ---
		// Ensure the target directory exists and is empty
		console.log(`Preparing clone directory: ${cloneTarget}`)
		await fs.rm(cloneTarget, { recursive: true, force: true }) // Remove if exists
		await fs.mkdir(cloneTarget, { recursive: true }) // Create it

		// Update the path where upstream files are expected after cloning
		const templateDir = path.join(
			cloneTarget,
			"apps",
			"v4",
			"registry",
			"new-york-v4",
			"ui",
		)

		console.log(`Cloning latest shadcn-ui templates into ${cloneTarget}...`)
		await runCommand(`git clone --depth 1 "${TEMPLATE_REPO}" "${cloneTarget}"`)

		// Verify upstream directory exists
		try {
			await fs.access(templateDir)
		} catch (e) {
			console.error(
				`Error: Upstream directory not found after clone: ${templateDir}`,
			)
			throw e
		}

		// Check for prettier config files in the root directory
		const prettierConfigJsPath = path.resolve(
			process.cwd(),
			"prettier.config.js",
		)
		const prettierrcPath = path.resolve(process.cwd(), ".prettierrc")
		let foundPrettierConfigPath: string | null = null
		let useLocalPrettierConfig = false

		try {
			await fs.access(prettierConfigJsPath)
			foundPrettierConfigPath = prettierConfigJsPath
			useLocalPrettierConfig = true
			console.log(`Using prettier config from: ${foundPrettierConfigPath}`)
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			// prettier.config.js not found, try .prettierrc
			try {
				await fs.access(prettierrcPath)
				foundPrettierConfigPath = prettierrcPath
				useLocalPrettierConfig = true
				console.log(`Using prettier config from: ${foundPrettierConfigPath}`)
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e2) {
				// Neither config file found
				console.log(
					"No prettier.config.js or .prettierrc found in root directory. Using default discovery.",
				)
			}
		}

		// Format the entire upstream directory once
		try {
			console.log(`Formatting entire upstream directory: ${templateDir}...`)
			// Construct the prettier command
			let prettierCommand = `npx prettier --write "${templateDir}/**/*.tsx" --parser typescript --log-level warn`
			if (useLocalPrettierConfig && foundPrettierConfigPath) {
				prettierCommand += ` --config "${foundPrettierConfigPath}"`
			}
			// Use quotes around the glob pattern for shell compatibility
			await runCommand(prettierCommand)
			console.log("Upstream formatting complete.")
		} catch (formatError) {
			console.warn(
				"Warning: Prettier command failed for the upstream directory. Diffing against unformatted files.",
				formatError,
			)
		}

		// Get list of upstream files for filtering
		let upstreamFileNames = new Set<string>()
		try {
			const upstreamFiles = await fs.readdir(templateDir)
			upstreamFileNames = new Set(upstreamFiles.filter(f => f.endsWith(".tsx")))
			console.log(
				`Found ${upstreamFileNames.size} upstream .tsx files in: ${templateDir}`,
			)
		} catch (cloneError) {
			console.error(
				`Error: Could not read upstream directory at ${templateDir}. Check clone step and path.`,
			)
			throw cloneError // Stop execution if clone failed
		}

		// --- Initialize Report ---
		let fileReportContent = `# ShadCN Diff Report\\nGenerated on ${new Date().toString()}\\n`
		const globalSummaries: string[] = []

		// --- Generate Diffs ---
		console.log("Generating diffs and collecting summaries...")
		const localFiles = await fs.readdir(localDirFullPath)

		const apiKey = process.env.OPENAI_API_KEY
		if (!apiKey) {
			console.log("Skipping summary: OPENAI_API_KEY not set.")
		}

		// Process files only if they exist upstream
		for (const filename of localFiles) {
			// Skip if not a .tsx file OR if not present in the upstream directory
			if (!filename.endsWith(".tsx") || !upstreamFileNames.has(filename)) {
				continue
			}

			const localFile = path.join(localDirFullPath, filename)
			const upstreamFile = path.join(templateDir, filename)

			// We already know the upstream file exists from the Set check
			try {
				// Add the plain header to file report
				fileReportContent += `\\n\\n## ${filename}\\n\\n`

				// Pass the main tempDir to generateDiff for placing formatted files
				const diffOutput = await generateDiff(localFile, upstreamFile)

				if (diffOutput && diffOutput.length > 0) {
					// Add plain diff to file report
					fileReportContent += `\`\`\`diff\\n${diffOutput}\\n\`\`\`\\n`

					// --- LLM Summaries (if API key is available) ---
					if (apiKey) {
						const openai = new OpenAI({ apiKey })
						const componentBaseName = filename.replace(".tsx", "")
						console.log(`Summarizing ${filename} with ${OPENAI_MODEL}...`)
						const summary = await getGptSummary(
							diffOutput,
							componentBaseName,
							openai,
						)
						// Add plain summary to file report
						const summarySection = `### Summary: ${componentBaseName}\\n\\n${summary}\\n`
						fileReportContent += `\\n${summarySection}`
						// Add to global summaries (plain text)
						globalSummaries.push(
							`### \`${componentBaseName}\`\\n\\n${summary}\\n`,
						)
					}
				} else {
					// This block now correctly handles cases where the first if was false
					// (i.e., diffOutput is "" or null)
					if (diffOutput === "") {
						// Add plain message to file report for identical files
						const noChangesMsg = `_No changes detected._\\n`
						fileReportContent += noChangesMsg
					} else {
						// Add plain error message to file report (diffOutput must be null here)
						const errorMsg = `_Error generating diff._\\n`
						fileReportContent += errorMsg
					}
				}
			} catch (error) {
				// This catch block should now primarily handle errors from generateDiff or summary generation
				console.error(`Error processing file ${filename}:`, error)
				// Add plain error message to file report
				const errorMsg = `\\n_Error processing file: ${
					(error as Error).message
				}_\\n`
				fileReportContent += errorMsg
			}
		}

		// --- Add Global Summary ---
		if (globalSummaries.length > 0) {
			const globalSummaryHeader = `\\n\\n---\\n\\n# Global Summary\\n\\n`
			const globalSummaryBody = globalSummaries.join("\n")
			fileReportContent += globalSummaryHeader + globalSummaryBody
		}

		// --- Write FILE Report (Plain) ---
		const finalFileReport = fileReportContent.replace(/\\n/g, "\n") // Fix newlines for file
		await fs.writeFile(reportFilePath, finalFileReport)
		console.log(`Report generated: ${reportFilePath}`)
	} catch (error) {
		console.error("An error occurred during script execution:", error)
		process.exitCode = 1 // Indicate failure
	} finally {
		// --- Cleanup ---
		// No cleanup needed for the fixed 'temp' directory unless specifically required.
		// The old logic for the os.tmpdir() based directory is removed.
		console.log(`Cloned repository located at: ${cloneTarget}`)
	}
}

main()
