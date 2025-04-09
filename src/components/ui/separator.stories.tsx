import { Separator } from "./separator"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Separator> = {
	title: "Components/Separator",
	component: Separator,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "radio",
			options: ["horizontal", "vertical"],
			description: "The orientation of the separator",
		},
		decorative: {
			control: "boolean",
			description:
				"Whether the separator is decorative or semantically meaningful",
		},
	},
}

export default meta
type Story = StoryObj<typeof Separator>

/**
 * Basic horizontal separator with default styling
 */
export const Default: Story = {
	render: () => (
		<div className="w-80">
			<div className="space-y-1">
				<h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
				<p className="text-sm text-muted-foreground">
					An open-source UI component library.
				</p>
			</div>
			<Separator className="my-4" />
			<div className="flex h-5 items-center space-x-4 text-sm">
				<div>Blog</div>
				<Separator orientation="vertical" />
				<div>Docs</div>
				<Separator orientation="vertical" />
				<div>Source</div>
			</div>
		</div>
	),
}

/**
 * Horizontal separator with custom styling
 */
export const HorizontalCustom: Story = {
	render: () => (
		<div className="w-80">
			<div className="space-y-1">
				<h4 className="text-sm font-medium leading-none">Section Title</h4>
				<p className="text-sm text-muted-foreground">
					Section description goes here.
				</p>
			</div>
			<Separator className="my-4 bg-primary/50 h-0.5" />
			<div className="space-y-1">
				<p className="text-sm">Content below the separator.</p>
			</div>
		</div>
	),
}

/**
 * Vertical separator used between elements
 */
export const Vertical: Story = {
	render: () => (
		<div className="flex h-20 items-center space-x-4">
			<div className="text-sm">Account</div>
			<Separator orientation="vertical" className="h-10" />
			<div className="text-sm">Settings</div>
			<Separator orientation="vertical" className="h-10" />
			<div className="text-sm">Logout</div>
		</div>
	),
}

/**
 * Multiple separators used in a list
 */
export const ListDividers: Story = {
	render: () => (
		<div className="w-80 rounded-md border p-4">
			<h3 className="font-medium">Project Tasks</h3>
			<div className="mt-4 space-y-4">
				<div>
					<div className="text-sm font-medium">Task 1</div>
					<div className="text-sm text-muted-foreground">
						Design user interface
					</div>
				</div>
				<Separator />
				<div>
					<div className="text-sm font-medium">Task 2</div>
					<div className="text-sm text-muted-foreground">
						Implement frontend components
					</div>
				</div>
				<Separator />
				<div>
					<div className="text-sm font-medium">Task 3</div>
					<div className="text-sm text-muted-foreground">
						Connect to backend API
					</div>
				</div>
			</div>
		</div>
	),
}

/**
 * Separators in a card header/content/footer layout
 */
export const CardLayout: Story = {
	render: () => (
		<div className="w-80 rounded-md border">
			<div className="p-4">
				<h3 className="font-medium">Card Title</h3>
				<p className="text-sm text-muted-foreground">Card description text</p>
			</div>
			<Separator />
			<div className="p-4">
				<p className="text-sm">This is the main content area of the card.</p>
				<p className="text-sm mt-2">
					It can contain various elements and information.
				</p>
			</div>
			<Separator />
			<div className="p-4 flex justify-end">
				<button className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground">
					Action
				</button>
			</div>
		</div>
	),
}

/**
 * Different separator styles
 */
export const Styles: Story = {
	render: () => (
		<div className="w-80 space-y-8">
			<div>
				<p className="text-sm mb-2">Default</p>
				<Separator />
			</div>

			<div>
				<p className="text-sm mb-2">Thick</p>
				<Separator className="h-0.5" />
			</div>

			<div>
				<p className="text-sm mb-2">Dashed</p>
				<div className="h-px w-full border-t border-dashed border-border" />
			</div>

			<div>
				<p className="text-sm mb-2">Dotted</p>
				<div className="h-px w-full border-t border-dotted border-border" />
			</div>

			<div>
				<p className="text-sm mb-2">With gradient</p>
				<Separator className="bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
			</div>

			<div>
				<p className="text-sm mb-2">With shadow</p>
				<Separator className="h-px shadow-sm" />
			</div>
		</div>
	),
}

/**
 * Separator with content in the middle
 */
export const WithContent: Story = {
	render: () => (
		<div className="w-80 space-y-4">
			<div className="relative flex items-center">
				<Separator className="flex-grow" />
				<span className="mx-2 text-xs text-muted-foreground">OR</span>
				<Separator className="flex-grow" />
			</div>

			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<Separator className="w-full" />
				</div>
				<div className="relative flex justify-center">
					<span className="bg-background px-2 text-xs text-muted-foreground">
						Section divider
					</span>
				</div>
			</div>
		</div>
	),
}

/**
 * Responsive separator example
 */
export const Responsive: Story = {
	render: () => (
		<div className="w-80">
			<div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
				<div className="text-sm">Home</div>
				<Separator className="my-2 sm:hidden" />
				<Separator orientation="vertical" className="hidden h-10 sm:block" />
				<div className="text-sm">Products</div>
				<Separator className="my-2 sm:hidden" />
				<Separator orientation="vertical" className="hidden h-10 sm:block" />
				<div className="text-sm">About</div>
			</div>
		</div>
	),
}
