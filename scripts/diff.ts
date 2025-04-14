#!/usr/bin/env node

import chalk from "chalk"
import { exec, execSync } from "child_process"
import dotenv from "dotenv"
import fs from "fs/promises"
import OpenAI from "openai"
import ora from "ora"
import path from "path"

dotenv.config()

const TEMPLATE_REPO = "https://github.com/shadcn-ui/ui.git"
const TEMPLATE_DIR = "temp/shadcn-ui"
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
				console.error(`Error executing command: ${command}\n${stderr}`)
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
	const prompt = `Summarize the following Git diff between two versions of the ${componentName} component from shadcn/ui. Use very concise and precise bullet points. Focus on user-facing changes, breaking changes, and any styling or behavior updates:\n\n${diff}`

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

// New function to get a summary of summaries
async function getOverallSummary(
	summaries: string[],
	openai: OpenAI,
): Promise<string> {
	if (summaries.length === 0) {
		return "No component summaries were generated to create an overall summary."
	}

	const combinedSummaries = summaries.join("\n\n---\n\n")
	const prompt = `The following are summaries of changes for individual UI components based on Git diffs. Please synthesize these into a single, high-level summary suitable for a report introduction. Focus on the most impactful changes, trends, or common themes across components. Be concise. Use bullet points.\n\nIndividual Summaries:\n${combinedSummaries}`

	try {
		const response = await openai.chat.completions.create({
			model: OPENAI_MODEL, // Or potentially a different model optimized for summarization?
			messages: [{ role: "user", content: prompt }],
			temperature: 0.5, // Slightly higher temp might be okay for summarization
		})
		return (
			response.choices[0]?.message?.content?.trim() ||
			"Error: Could not get overall summary."
		)
	} catch (error) {
		console.error("Error getting overall summary:", error)
		return "Error: Failed to fetch overall summary from OpenAI."
	}
}

// --- Main Script Logic ---

async function main() {
	const args = parseArgs()
	const localDirFullPath = path.resolve(args.localDir)
	const reportFilePath = path.resolve(args.outputFile)
	const cloneTarget = path.resolve(TEMPLATE_DIR)
	let spinner // Declare spinner variable
	const filesWithDiffs: { filename: string; added: number; removed: number }[] =
		[] // Track files with differences
	const fileDiffData: { [filename: string]: DiffResult } = {} // Store diff results

	// Declare summaryPromises here
	const summaryPromises: {
		filename: string
		componentBaseName: string
		diff: string
		promise: Promise<string>
	}[] = []
	// Declare fileReportContent here, can be initialized later
	let fileReportContent: string

	// Initialize OpenAI client once if API key is available
	const apiKey = process.env.OPENAI_API_KEY
	const openai = apiKey ? new OpenAI({ apiKey }) : null
	if (!apiKey) {
		ora("Skipping summaries: OPENAI_API_KEY not set.").warn()
	}

	try {
		// Add signal handlers
		const handleExit = (signal: string) => {
			console.log(`\nReceived ${signal}. Shutting down...`)
			if (spinner && spinner.isSpinning) {
				spinner.fail("Operation interrupted.")
			}
			// Clean up temp directory if it exists? (Optional)
			// fs.rm(path.resolve("temp"), { recursive: true, force: true }).catch(() => {});
			process.exit(1) // Force exit
		}
		process.on("SIGINT", () => handleExit("SIGINT"))
		process.on("SIGTERM", () => handleExit("SIGTERM"))

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

		// --- Generate Diffs (Phase 1: Local Processing) ---
		spinner = ora("Processing local files and generating diffs...").start()
		const localFiles = await fs.readdir(localDirFullPath)

		for (const filename of localFiles) {
			if (!filename.endsWith(".tsx") || !upstreamFileNames.has(filename)) {
				continue
			}

			spinner.text = `Generating diff for: ${filename}`
			const localFile = path.join(localDirFullPath, filename)
			const upstreamFile = path.join(templateDir, filename)

			try {
				// --- Generate and Store Diff ---
				const diffResult = await generateDiff(localFile, upstreamFile)
				fileDiffData[filename] = diffResult // Store diff result

				if (diffResult.diff && diffResult.diff.length > 0) {
					// Store filename and counts for summary output later
					filesWithDiffs.push({
						filename: filename,
						added: diffResult.added,
						removed: diffResult.removed,
					})

					// --- Prepare Summary Promise (if API key exists) ---
					if (openai) {
						const componentBaseName = filename.replace(".tsx", "")
						spinner.text = `Preparing summary request for ${filename}...`
						const promise = getGptSummary(
							diffResult.diff,
							componentBaseName,
							openai, // Use the single instance
						)
						summaryPromises.push({
							filename,
							componentBaseName,
							diff: diffResult.diff, // Keep diff for context if needed later
							promise,
						})
					}
				}
				// --- End Diff Processing & Summary Preparation ---
			} catch (error) {
				spinner.warn(
					`Error processing file ${filename}: ${(error as Error).message}`,
				)
				// Store null diff to indicate error during diff generation phase for this file
				fileDiffData[filename] = { diff: null, added: 0, removed: 0 }
				// Continue processing other files
			}
		}
		spinner.succeed(
			`Diff generation complete, found ${filesWithDiffs.length} files with diffs.`,
		)

		// --- Generate Summaries (Phase 2: Concurrent API Calls) ---
		const summariesMap: { [filename: string]: string } = {}
		let overallSummary = "No summaries generated."
		const rawSummaries: string[] = [] // Moved declaration here

		if (apiKey && summaryPromises.length > 0) {
			spinner = ora(
				`Fetching ${summaryPromises.length} summaries from OpenAI (${OPENAI_MODEL})...`,
			).start()
			try {
				const summaryResults = await Promise.all(
					summaryPromises.map(p => p.promise),
				)
				spinner.succeed(
					`Fetched ${summaryPromises.length} summaries successfully.`,
				)

				// Populate map and collect raw summaries for overall summary
				// const rawSummaries: string[] = [] // Removed from here
				summaryPromises.forEach((p, index) => {
					const summary = summaryResults[index]
					summariesMap[p.filename] = summary
					if (!summary.startsWith("Error:")) {
						rawSummaries.push(summary)
					}
				})

				// Generate the overall summary if we have raw summaries
				if (rawSummaries.length > 0 && openai) {
					spinner.start("Generating overall summary...") // Restart spinner for this step
					overallSummary = await getOverallSummary(rawSummaries, openai)
					spinner.succeed("Overall summary generated.")
				} else if (rawSummaries.length === 0) {
					overallSummary = "No valid individual summaries were generated."
					ora(overallSummary).warn()
				}
			} catch (error) {
				spinner.fail("Error during summary generation phase.")
				console.error(error)
				overallSummary = "Overall summary generation failed due to an error."
				// Note: Report will be generated without summaries if this fails
			}
		} else if (apiKey) {
			ora("No diffs found requiring summaries.").info()
		}

		// --- Construct Report (Phase 3: Assemble Content) ---
		spinner = ora("Constructing final report...").start()

		// Start with the overall summary
		let constructedReportContent = `# Summary\n\nGenerated on ${new Date().toString()}\n\n${overallSummary}\n\n---\n`

		// Iterate through the files we attempted to process (keys of fileDiffData)
		// Ensure consistent ordering perhaps by sorting keys if necessary, though fs.readdir order is usually sufficient
		const processedFiles = Object.keys(fileDiffData).sort()

		for (const filename of processedFiles) {
			constructedReportContent += `\n\n## ${filename}\n\n`
			const diffData = fileDiffData[filename]

			if (diffData.diff && diffData.diff.length > 0) {
				const summary = summariesMap[filename]
				if (summary) {
					constructedReportContent += `\n${summary}\n`
				}
				constructedReportContent += `\`\`\`diff\n${diffData.diff}\n\`\`\`\n`
			} else if (diffData.diff === "") {
				const noChangesMsg = `_No changes detected._\n`
				constructedReportContent += noChangesMsg
			} else {
				// Handle case where diff generation itself failed (diff is null)
				const errorMsg = `_Error generating diff for this file._\n`
				constructedReportContent += errorMsg
			}
		}
		fileReportContent = constructedReportContent // Use the newly constructed content directly
		spinner.succeed("Report content constructed.")

		// --- Finalize processing ---
		if (filesWithDiffs.length > 0) {
			spinner.succeed(
				`Processing complete. Found diffs in: ${filesWithDiffs
					.map(
						f =>
							`${chalk.yellow(f.filename)} (${chalk.green(
								`+${f.added}`,
							)}, ${chalk.red(`-${f.removed}`)})`,
					)
					.join(", ")}`,
			)
		} else {
			spinner.succeed("Processing complete. No diffs found.")
		}

		// --- Write FILE Report (Plain) ---
		spinner = ora(`Generating report file: ${reportFilePath}`).start()
		// No longer need replace as we use \n directly now
		// const finalFileReport = fileReportContent.replace(/\n/g, "\n")
		await fs.writeFile(reportFilePath, fileReportContent)
		spinner.succeed(`Report generated: ${reportFilePath}`)

		// Log the overall summary to the console
		console.log(chalk.bold.blue("-------- Overall Summary --------"))
		console.log(overallSummary)
		console.log(chalk.bold.blue("----------------------------"))
	} catch (error) {
		if (spinner) {
			spinner.fail("Script execution failed.")
		} else {
			console.error("Script execution failed before spinner initialization.")
		}
		console.error("An error occurred during script execution:", error)
		process.exitCode = 1
	} finally {
		// Delete the clone target directory
		await fs.rm(cloneTarget, { recursive: true, force: true })
	}
}

main()
