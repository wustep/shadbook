import { Button } from "./button"
import { Progress } from "./progress"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"

const meta: Meta<typeof Progress> = {
	title: "Components/Progress",
	component: Progress,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: { type: "range", min: 0, max: 100 },
			description: "The progress value from 0 to 100",
		},
	},
}

export default meta
type Story = StoryObj<typeof Progress>

/**
 * Basic progress bar with a fixed value
 */
export const Default: Story = {
	args: {
		value: 40,
		className: "w-[300px]",
	},
}

/**
 * Progress bar states at different completion levels
 */
export const States: Story = {
	render: () => (
		<div className="w-[300px] space-y-4">
			<div className="space-y-2">
				<div className="flex justify-between">
					<span className="text-sm font-medium">Not started</span>
					<span className="text-sm text-muted-foreground">0%</span>
				</div>
				<Progress value={0} />
			</div>

			<div className="space-y-2">
				<div className="flex justify-between">
					<span className="text-sm font-medium">In progress</span>
					<span className="text-sm text-muted-foreground">45%</span>
				</div>
				<Progress value={45} />
			</div>

			<div className="space-y-2">
				<div className="flex justify-between">
					<span className="text-sm font-medium">Almost complete</span>
					<span className="text-sm text-muted-foreground">80%</span>
				</div>
				<Progress value={80} />
			</div>

			<div className="space-y-2">
				<div className="flex justify-between">
					<span className="text-sm font-medium">Completed</span>
					<span className="text-sm text-muted-foreground">100%</span>
				</div>
				<Progress value={100} />
			</div>
		</div>
	),
}

/**
 * Interactive progress bar with animation
 */
export const Interactive: Story = {
	render: function InteractiveProgress() {
		const [progress, setProgress] = useState(40)

		const increment = () => {
			setProgress(prev => Math.min(prev + 10, 100))
		}

		const decrement = () => {
			setProgress(prev => Math.max(prev - 10, 0))
		}

		const reset = () => {
			setProgress(0)
		}

		return (
			<div className="w-[300px] space-y-4">
				<div className="space-y-2">
					<div className="flex justify-between">
						<span className="text-sm font-medium">Progress</span>
						<span className="text-sm text-muted-foreground">{progress}%</span>
					</div>
					<Progress value={progress} />
				</div>

				<div className="flex items-center justify-between gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={decrement}
						disabled={progress <= 0}
					>
						-10%
					</Button>
					<Button variant="outline" size="sm" onClick={reset}>
						Reset
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={increment}
						disabled={progress >= 100}
					>
						+10%
					</Button>
				</div>
			</div>
		)
	},
}

/**
 * Animated loading progress bar
 */
export const Animated: Story = {
	render: function AnimatedProgress() {
		const [progress, setProgress] = useState(0)

		useEffect(() => {
			const timer = setTimeout(() => {
				setProgress(progress >= 100 ? 0 : progress + 5)
			}, 300)

			return () => clearTimeout(timer)
		}, [progress])

		return (
			<div className="w-[300px] space-y-2">
				<div className="flex justify-between">
					<span className="text-sm font-medium">Loading</span>
					<span className="text-sm text-muted-foreground">
						{Math.round(progress)}%
					</span>
				</div>
				<Progress value={progress} />
				<p className="text-xs text-muted-foreground">
					Auto-resets when reaching 100%
				</p>
			</div>
		)
	},
}

/**
 * Progress with different sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="w-[300px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">Extra small (h-1)</div>
				<Progress value={60} className="h-1" />
			</div>
			<div className="space-y-2">
				<div className="text-sm font-medium">Small (h-2)</div>
				<Progress value={60} className="h-2" />
			</div>
			<div className="space-y-2">
				<div className="text-sm font-medium">Default (h-4)</div>
				<Progress value={60} />
			</div>
			<div className="space-y-2">
				<div className="text-sm font-medium">Large (h-6)</div>
				<Progress value={60} className="h-6" />
			</div>
			<div className="space-y-2">
				<div className="text-sm font-medium">Extra large (h-8)</div>
				<Progress value={60} className="h-8" />
			</div>
		</div>
	),
}

/**
 * Multiple progress bars showing different values
 */
export const TaskProgress: Story = {
	render: () => (
		<div className="w-[300px] space-y-6">
			<div className="rounded-lg border p-4">
				<h4 className="text-sm font-semibold mb-4">Project Status</h4>

				<div className="space-y-4">
					<div className="space-y-2">
						<div className="flex justify-between">
							<div className="text-sm">Research</div>
							<div className="text-sm text-muted-foreground">100%</div>
						</div>
						<Progress value={100} />
					</div>

					<div className="space-y-2">
						<div className="flex justify-between">
							<div className="text-sm">Design</div>
							<div className="text-sm text-muted-foreground">80%</div>
						</div>
						<Progress value={80} />
					</div>

					<div className="space-y-2">
						<div className="flex justify-between">
							<div className="text-sm">Development</div>
							<div className="text-sm text-muted-foreground">45%</div>
						</div>
						<Progress value={45} />
					</div>

					<div className="space-y-2">
						<div className="flex justify-between">
							<div className="text-sm">Testing</div>
							<div className="text-sm text-muted-foreground">10%</div>
						</div>
						<Progress value={10} />
					</div>
				</div>

				<div className="flex justify-between mt-6 pt-4 border-t">
					<div className="text-sm font-medium">Overall</div>
					<div className="text-sm text-muted-foreground">59%</div>
				</div>
				<Progress value={59} className="mt-2" />
			</div>
		</div>
	),
}

/**
 * Progress bars with custom colors
 */
export const CustomColors: Story = {
	render: () => (
		<div className="w-[300px] space-y-4">
			<div className="space-y-2">
				<div className="text-sm font-medium">Primary (Default)</div>
				<Progress value={60} />
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Success</div>
				<Progress value={60} className="bg-green-100 dark:bg-green-800/20">
					<div
						className="h-full bg-green-600 dark:bg-green-600 transition-all"
						style={{ width: "60%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Warning</div>
				<Progress value={60} className="bg-yellow-100 dark:bg-yellow-800/20">
					<div
						className="h-full bg-yellow-600 dark:bg-yellow-600 transition-all"
						style={{ width: "60%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Danger</div>
				<Progress value={60} className="bg-red-100 dark:bg-red-800/20">
					<div
						className="h-full bg-red-600 dark:bg-red-600 transition-all"
						style={{ width: "60%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Info</div>
				<Progress value={60} className="bg-blue-100 dark:bg-blue-800/20">
					<div
						className="h-full bg-blue-600 dark:bg-blue-600 transition-all"
						style={{ width: "60%" }}
					/>
				</Progress>
			</div>
		</div>
	),
}

/**
 * Progress indicators with custom styles
 */
export const CustomStyles: Story = {
	render: () => (
		<div className="w-[300px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">Rounded with shadow</div>
				<Progress value={75} className="h-3 rounded-full shadow-md" />
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Gradient</div>
				<Progress value={75} className="h-3">
					<div
						className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all rounded-full"
						style={{ width: "75%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Striped</div>
				<Progress value={75} className="h-3">
					<div
						className="h-full w-full bg-blue-600 bg-[size:16px_16px] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] transition-all"
						style={{ transform: `translateX(-${100 - 75}%)` }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Segmented</div>
				<div className="flex gap-1">
					{[1, 2, 3, 4, 5].map(segment => (
						<div
							key={segment}
							className={`h-3 flex-1 rounded-md transition-colors ${
								segment <= 3 ? "bg-primary" : "bg-primary/20"
							}`}
						/>
					))}
				</div>
				<div className="text-xs text-muted-foreground">3/5 steps completed</div>
			</div>
		</div>
	),
}

/**
 * Indeterminate loading progress
 */
export const Indeterminate: Story = {
	render: () => (
		<div className="w-[300px] space-y-3">
			<div className="text-sm font-medium">Indeterminate (loading state)</div>
			<style>
				{`
				@keyframes indeterminate {
					0% { transform: translateX(-100%) }
					100% { transform: translateX(100%) }
				}
				.animate-indeterminate-progress {
					animation: indeterminate 1.5s infinite cubic-bezier(0.65, 0.815, 0.735, 0.395);
					width: 75%;
				}
				`}
			</style>
			<Progress className="h-2">
				<div className="h-full bg-primary rounded-full animate-indeterminate-progress" />
			</Progress>
			<p className="text-xs text-muted-foreground">
				Use when loading progress is unknown
			</p>
		</div>
	),
}
