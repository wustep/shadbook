import { Toggle } from "./toggle"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AlignCenter,
	AlignJustify,
	AlignLeft,
	AlignRight,
	Bold,
	Italic,
	Moon,
	Sun,
	Underline,
} from "lucide-react"

const meta: Meta<typeof Toggle> = {
	title: "Components/Toggle",
	component: Toggle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "outline"],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg"],
		},
	},
}

export default meta
type Story = StoryObj<typeof Toggle>

/**
 * Basic toggle button with default styling
 */
export const Default: Story = {
	args: {
		children: "Toggle",
	},
}

/**
 * Toggle button in its pressed state
 */
export const Pressed: Story = {
	args: {
		children: "Toggle",
		pressed: true,
	},
}

/**
 * Disabled toggle button
 */
export const Disabled: Story = {
	args: {
		children: "Toggle",
		disabled: true,
	},
}

/**
 * Toggle button with outline variant
 */
export const Outline: Story = {
	args: {
		children: "Toggle",
		variant: "outline",
	},
}

/**
 * Toggle button displaying an icon
 */
export const WithIcon: Story = {
	render: () => (
		<Toggle aria-label="Toggle bold">
			<Bold className="h-4 w-4" />
		</Toggle>
	),
}

/**
 * Toggle button with text and icon
 */
export const WithTextAndIcon: Story = {
	render: () => (
		<Toggle aria-label="Toggle bold">
			<Bold className="h-4 w-4" />
			Bold
		</Toggle>
	),
}

/**
 * Different sizes of toggle buttons
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Toggle size="sm">
				<Bold className="h-3 w-3" />
				Small
			</Toggle>
			<Toggle size="default">
				<Bold className="h-4 w-4" />
				Default
			</Toggle>
			<Toggle size="lg">
				<Bold className="h-5 w-5" />
				Large
			</Toggle>
		</div>
	),
}

/**
 * Common use case: text formatting toolbar
 */
export const TextFormatting: Story = {
	render: () => (
		<div className="flex items-center gap-1">
			<Toggle aria-label="Toggle bold">
				<Bold className="h-4 w-4" />
			</Toggle>
			<Toggle aria-label="Toggle italic">
				<Italic className="h-4 w-4" />
			</Toggle>
			<Toggle aria-label="Toggle underline">
				<Underline className="h-4 w-4" />
			</Toggle>
		</div>
	),
}

/**
 * Common use case: text alignment toolbar
 */
export const TextAlignment: Story = {
	render: () => (
		<div className="flex items-center gap-1">
			<Toggle variant="outline" aria-label="Align left">
				<AlignLeft className="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Align center">
				<AlignCenter className="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Align right">
				<AlignRight className="h-4 w-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Align justify">
				<AlignJustify className="h-4 w-4" />
			</Toggle>
		</div>
	),
}

/**
 * Theme toggle example
 */
export const ThemeToggle: Story = {
	render: function Render() {
		return (
			<div className="flex flex-col items-center gap-4">
				<Toggle aria-label="Toggle theme" variant="outline">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Toggle>
				<span className="text-sm text-muted-foreground">
					Click to toggle between light and dark theme
				</span>
			</div>
		)
	},
}

/**
 * Custom styled toggle
 */
export const CustomStyled: Story = {
	render: () => (
		<div className="space-y-4">
			<Toggle className="bg-blue-100 text-blue-700 hover:bg-blue-200 data-[state=on]:bg-blue-500 data-[state=on]:text-white">
				Blue Toggle
			</Toggle>

			<Toggle className="bg-green-100 text-green-700 hover:bg-green-200 data-[state=on]:bg-green-500 data-[state=on]:text-white">
				Green Toggle
			</Toggle>

			<Toggle className="bg-red-100 text-red-700 hover:bg-red-200 data-[state=on]:bg-red-500 data-[state=on]:text-white">
				Red Toggle
			</Toggle>
		</div>
	),
}

/**
 * Interactive demo with stateful functionality
 */
export const InteractiveDemo: Story = {
	render: function Render() {
		return (
			<div className="space-y-6">
				<div className="space-y-2">
					<p className="text-sm font-medium">Text Formatting</p>
					<div className="flex items-center gap-1">
						<Toggle aria-label="Toggle bold">
							<Bold className="h-4 w-4" />
						</Toggle>
						<Toggle aria-label="Toggle italic">
							<Italic className="h-4 w-4" />
						</Toggle>
						<Toggle aria-label="Toggle underline">
							<Underline className="h-4 w-4" />
						</Toggle>
					</div>
				</div>

				<div className="space-y-2">
					<p className="text-sm font-medium">Text Alignment</p>
					<div className="flex items-center gap-1">
						<Toggle variant="outline" aria-label="Align left">
							<AlignLeft className="h-4 w-4" />
						</Toggle>
						<Toggle variant="outline" aria-label="Align center">
							<AlignCenter className="h-4 w-4" />
						</Toggle>
						<Toggle variant="outline" aria-label="Align right">
							<AlignRight className="h-4 w-4" />
						</Toggle>
						<Toggle variant="outline" aria-label="Align justify">
							<AlignJustify className="h-4 w-4" />
						</Toggle>
					</div>
				</div>

				<div className="rounded-md border p-4">
					<p className="text-sm">
						This is an example text that would be formatted based on the toggle
						buttons above.
					</p>
				</div>
			</div>
		)
	},
}
