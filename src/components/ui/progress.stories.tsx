import { Progress } from "./progress"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useState } from "react"

const meta: Meta<typeof Progress> = {
	title: "shadcn/Progress",
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
 * Progress bar with zero value
 */
export const Zero: Story = {
	args: {
		value: 0,
		className: "w-[300px]",
	},
}

/**
 * Progress bar at 100% complete
 */
export const Complete: Story = {
	args: {
		value: 100,
		className: "w-[300px]",
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
				setProgress(progress >= 100 ? 0 : progress + 10)
			}, 500)

			return () => clearTimeout(timer)
		}, [progress])

		return (
			<div className="w-[300px] space-y-2">
				<Progress value={progress} />
				<div className="text-sm text-muted-foreground text-center">
					Loading: {Math.round(progress)}%
				</div>
			</div>
		)
	},
}

/**
 * Progress with different sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="w-[300px] space-y-4">
			<div className="space-y-2">
				<div className="text-sm">Thin</div>
				<Progress value={60} className="h-1" />
			</div>
			<div className="space-y-2">
				<div className="text-sm">Default</div>
				<Progress value={60} />
			</div>
			<div className="space-y-2">
				<div className="text-sm">Thick</div>
				<Progress value={60} className="h-3" />
			</div>
			<div className="space-y-2">
				<div className="text-sm">Extra Thick</div>
				<Progress value={60} className="h-4" />
			</div>
		</div>
	),
}

/**
 * Progress with a label
 */
export const WithLabel: Story = {
	render: function ProgressWithLabel() {
		const value = 66

		return (
			<div className="w-[300px] space-y-2">
				<div className="flex justify-between text-sm">
					<div>Progress</div>
					<div>{value}%</div>
				</div>
				<Progress value={value} />
			</div>
		)
	},
}

/**
 * Multiple progress bars showing different values
 */
export const MultipleValues: Story = {
	render: () => (
		<div className="w-[300px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm">Downloads</div>
				<Progress value={35} />
				<div className="text-xs text-muted-foreground">
					35% - 3.5 MB of 10 MB
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm">Uploads</div>
				<Progress value={89} />
				<div className="text-xs text-muted-foreground">
					89% - 8.9 MB of 10 MB
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm">Processing</div>
				<Progress value={52} />
				<div className="text-xs text-muted-foreground">52% - Please wait</div>
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
				<div className="text-sm">Primary (Default)</div>
				<Progress value={60} />
			</div>

			<div className="space-y-2">
				<div className="text-sm">Success</div>
				<Progress value={60} className="bg-green-100 dark:bg-green-800/20">
					<div
						className="h-full bg-green-600 dark:bg-green-600 transition-all"
						style={{ width: "60%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm">Warning</div>
				<Progress value={60} className="bg-yellow-100 dark:bg-yellow-800/20">
					<div
						className="h-full bg-yellow-600 dark:bg-yellow-600 transition-all"
						style={{ width: "60%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm">Danger</div>
				<Progress value={60} className="bg-red-100 dark:bg-red-800/20">
					<div
						className="h-full bg-red-600 dark:bg-red-600 transition-all"
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
				<div className="text-sm">Rounded with shadow</div>
				<Progress value={75} className="h-3 rounded-full shadow-lg" />
			</div>

			<div className="space-y-2">
				<div className="text-sm">Gradient</div>
				<Progress value={75} className="h-3">
					<div
						className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all rounded-full"
						style={{ width: "75%" }}
					/>
				</Progress>
			</div>

			<div className="space-y-2">
				<div className="text-sm">Striped</div>
				<Progress value={75} className="h-3">
					<div
						className="h-full w-full bg-blue-600 bg-[size:16px_16px] bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] transition-all"
						style={{ transform: `translateX(-${100 - 75}%)` }}
					/>
				</Progress>
			</div>
		</div>
	),
}

/**
 * Indeterminate loading progress
 */
export const Indeterminate: Story = {
	render: () => (
		<div className="w-[300px] space-y-2">
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
				<div className="h-full w-full animate-indeterminate-progress bg-primary rounded-full" />
			</Progress>
			<div className="text-sm text-muted-foreground text-center">
				Loading...
			</div>
		</div>
	),
}
