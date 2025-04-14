#!/usr/bin/env node

import chalk from "chalk"
import { exec, execSync } from "child_process"
import fs from "fs/promises"
import OpenAI from "openai"
import ora from "ora"
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

interface DiffResult {
	diff: string | null
	added: number
	removed: number
}

async function generateDiff(file1: string, file2: string): Promise<DiffResult> {
	let added = 0
	let removed = 0
	let diffOutput: string | null = null

	try {
		// Use execSync for diff on original files
		diffOutput = execSync(`diff -w -b --unified "${file1}" "${file2}"`, {
			encoding: "utf8",
		})
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
				diffOutput = execError.stdout.toString()
			} else {
				// For other errors, log stderr or message
				console.error(
					`Error generating diff for ${path.basename(
						file1,
					)} and ${path.basename(file2)}: ${
						execError.stderr?.toString() || execError.message || "Unknown error"
					}`,
				)
				diffOutput = null // Ensure diff is null on error
			}
		} else {
			// Handle cases where the error is not an object
			console.error(
				`Error generating diff for ${path.basename(file1)} and ${path.basename(
					file2,
				)}: ${String(error)}`,
			)
			diffOutput = null // Ensure diff is null on error
		}
	}

	// Count added/removed lines if diff exists
	if (diffOutput) {
		diffOutput.split("\n").forEach(line => {
			if (line.startsWith("+") && !line.startsWith("+++")) {
				added++
			} else if (line.startsWith("-") && !line.startsWith("---")) {
				removed++
			}
		})
	}

	return { diff: diffOutput, added, removed } // Return object
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
	const cloneTarget = path.resolve("temp")
	let spinner
	const filesWithDiffs: { filename: string; added: number; removed: number }[] =
		[]

	try {
		// --- Setup ---
		spinner = ora(`Preparing clone directory: ${cloneTarget}`).start()
		await fs.rm(cloneTarget, { recursive: true, force: true })
		await fs.mkdir(cloneTarget, { recursive: true })
		spinner.succeed(`Prepared clone directory: ${cloneTarget}`)

		// Update the path where upstream files are expected after cloning
		const templateDir = path.join(
			cloneTarget,
			"apps",
			"v4",
			"registry",
			"new-york-v4",
			"ui",
		)

		spinner = ora(
			`Cloning latest shadcn-ui templates into ${cloneTarget}...`,
		).start()
		await runCommand(`git clone --depth 1 "${TEMPLATE_REPO}" "${cloneTarget}"`)
		spinner.succeed(`Cloned latest shadcn-ui templates into ${cloneTarget}`)

		// Verify upstream directory exists
		try {
			await fs.access(templateDir)
		} catch (e) {
			spinner?.fail(
				`Error: Upstream directory not found after clone: ${templateDir}`,
			)
			throw e
		}

		// Check for prettier config files
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
			ora(`Using prettier config from: ${foundPrettierConfigPath}`).info()
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			try {
				await fs.access(prettierrcPath)
				foundPrettierConfigPath = prettierrcPath
				useLocalPrettierConfig = true
				ora(`Using prettier config from: ${foundPrettierConfigPath}`).info()
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e2) {
				ora(
					"No prettier.config.js or .prettierrc found in root directory. Using default discovery.",
				).warn()
			}
		}

		// Format the entire upstream directory once
		spinner = ora(
			`Formatting entire upstream directory: ${templateDir}...`,
		).start()
		try {
			let prettierCommand = `npx prettier --write "${templateDir}/**/*.tsx" --parser typescript --log-level warn`
			if (useLocalPrettierConfig && foundPrettierConfigPath) {
				prettierCommand += ` --config "${foundPrettierConfigPath}"`
			}
			await runCommand(prettierCommand)
			spinner.succeed(`Formatted upstream directory: ${templateDir}`)
		} catch (formatError) {
			spinner.warn(
				`Warning: Prettier command failed for upstream directory: ${templateDir}. Diffing against unformatted files.`,
			)
			console.warn(formatError)
		}

		// Get list of upstream files for filtering
		let upstreamFileNames = new Set<string>()
		spinner = ora(`Reading upstream directory: ${templateDir}`).start()
		try {
			const upstreamFiles = await fs.readdir(templateDir)
			upstreamFileNames = new Set(upstreamFiles.filter(f => f.endsWith(".tsx")))
			spinner.succeed(
				`Found ${upstreamFileNames.size} upstream .tsx files in: ${templateDir}`,
			)
		} catch (cloneError) {
			spinner.fail(
				`Error: Could not read upstream directory at ${templateDir}. Check clone step and path.`,
			)
			throw cloneError
		}

		// --- Initialize Report ---
		let fileReportContent = `# ShadCN Diff Report\\nGenerated on ${new Date().toString()}\\n`
		const globalSummaries: string[] = []

		// --- Generate Diffs ---
		spinner = ora("Processing local files and generating diffs...").start()
		const localFiles = await fs.readdir(localDirFullPath)

		const apiKey = process.env.OPENAI_API_KEY
		if (!apiKey) {
			spinner.info("Skipping summary: OPENAI_API_KEY not set.")
		}

		for (const filename of localFiles) {
			if (!filename.endsWith(".tsx") || !upstreamFileNames.has(filename)) {
				continue
			}

			spinner.text = `Processing: ${filename}`
			const localFile = path.join(localDirFullPath, filename)
			const upstreamFile = path.join(templateDir, filename)

			try {
				fileReportContent += `\\n\\n## ${filename}\\n\\n`
				const diffResult = await generateDiff(localFile, upstreamFile)

				if (diffResult.diff && diffResult.diff.length > 0) {
					// Store filename and counts
					filesWithDiffs.push({
						filename: filename,
						added: diffResult.added,
						removed: diffResult.removed,
					})

					fileReportContent += `\`\`\`diff\\n${diffResult.diff}\\n\`\`\`\\n`

					if (apiKey) {
						const openai = new OpenAI({ apiKey })
						const componentBaseName = filename.replace(".tsx", "")
						spinner.text = `Summarizing ${filename} with ${OPENAI_MODEL}...`
						const summary = await getGptSummary(
							diffResult.diff,
							componentBaseName,
							openai,
						)
						const summarySection = `### Summary: ${componentBaseName}\\n\\n${summary}\\n`
						fileReportContent += `\\n${summarySection}`
						globalSummaries.push(
							`### \`${componentBaseName}\`\\n\\n${summary}\\n`,
						)
					}
				} else {
					if (diffResult.diff === "") {
						const noChangesMsg = `_No changes detected._\\n`
						fileReportContent += noChangesMsg
					} else {
						const errorMsg = `_Error generating diff._\\n`
						fileReportContent += errorMsg
					}
				}
			} catch (error) {
				spinner.fail(`Error processing file ${filename}`)
				console.error(error)
				const errorMsg = `\\n_Error processing file: ${
					(error as Error).message
				}_\\n`
				fileReportContent += errorMsg
				spinner = ora("Continuing file processing...").start()
			}
		}

		// --- Finalize processing ---
		if (filesWithDiffs.length > 0) {
			spinner.succeed(
				`Processing complete. Found differences in: ${filesWithDiffs
					.map(
						f =>
							`${chalk.yellow(f.filename)} (${chalk.green(
								`+${f.added}`,
							)}, ${chalk.red(`-${f.removed}`)})`,
					)
					.join(", ")}`,
			)
		} else {
			spinner.succeed("Processing complete. No differences found.")
		}

		// --- Add Global Summary ---
		if (globalSummaries.length > 0) {
			const globalSummaryHeader = `\\n\\n---\\n\\n# Global Summary\\n\\n`
			const globalSummaryBody = globalSummaries.join("\\n")
			fileReportContent += globalSummaryHeader + globalSummaryBody
		}

		// --- Write FILE Report (Plain) ---
		spinner = ora(`Generating report file: ${reportFilePath}`).start()
		const finalFileReport = fileReportContent.replace(/\\n/g, "\\n")
		await fs.writeFile(reportFilePath, finalFileReport)
		spinner.succeed(`Report generated: ${reportFilePath}`)
	} catch (error) {
		if (spinner) {
			spinner.fail("Script execution failed.")
		} else {
			console.error("Script execution failed before spinner initialization.")
		}
		console.error("An error occurred during script execution:", error)
		process.exitCode = 1
	} finally {
		ora(`Cloned repository located at: ${cloneTarget}`).info()
	}
}

main()
