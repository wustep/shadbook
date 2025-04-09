import { Button } from "./button"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AlertCircle,
	FileQuestion,
	HelpCircle,
	InfoIcon,
	Settings,
} from "lucide-react"

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<TooltipProvider>
				<Story />
			</TooltipProvider>
		),
	],
}

export default meta
type Story = StoryObj<typeof Tooltip>

/**
 * Basic tooltip with default styling
 */
export const Default: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">Hover me</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This is a tooltip</p>
			</TooltipContent>
		</Tooltip>
	),
}

/**
 * Tooltip with an icon as the trigger
 */
export const WithIcon: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<HelpCircle className="h-5 w-5 cursor-pointer text-muted-foreground" />
			</TooltipTrigger>
			<TooltipContent>
				<p>Help information</p>
			</TooltipContent>
		</Tooltip>
	),
}

/**
 * Multiple tooltips in a row
 */
export const MultipleTooltips: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon">
						<HelpCircle className="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Help</p>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon">
						<Settings className="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Settings</p>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon">
						<InfoIcon className="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Information</p>
				</TooltipContent>
			</Tooltip>
		</div>
	),
}

/**
 * Tooltip with side positioning
 */
export const Positioning: Story = {
	render: () => (
		<div className="flex flex-col gap-8 items-center">
			<div className="flex gap-8 items-center">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Top</Button>
					</TooltipTrigger>
					<TooltipContent side="top">
						<p>Tooltip on top</p>
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Right</Button>
					</TooltipTrigger>
					<TooltipContent side="right">
						<p>Tooltip on right</p>
					</TooltipContent>
				</Tooltip>
			</div>

			<div className="flex gap-8 items-center">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Bottom</Button>
					</TooltipTrigger>
					<TooltipContent side="bottom">
						<p>Tooltip on bottom</p>
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Left</Button>
					</TooltipTrigger>
					<TooltipContent side="left">
						<p>Tooltip on left</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</div>
	),
}

/**
 * Tooltip with custom delay duration
 */
export const DelayDuration: Story = {
	render: () => (
		<TooltipProvider delayDuration={1000}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Delayed Tooltip</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>This tooltip has a 1 second delay</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	),
}

/**
 * Form input with tooltip for extra explanation
 */
export const FormField: Story = {
	render: () => (
		<div className="w-full max-w-sm">
			<div className="grid gap-2">
				<div className="flex items-center gap-2">
					<label htmlFor="email" className="text-sm font-medium">
						Email
					</label>
					<Tooltip>
						<TooltipTrigger asChild>
							<HelpCircle className="h-4 w-4 text-muted-foreground" />
						</TooltipTrigger>
						<TooltipContent side="right" className="max-w-xs">
							<p>
								We'll only use your email for account-related communications. We
								won't sell your email to third parties.
							</p>
						</TooltipContent>
					</Tooltip>
				</div>
				<input
					id="email"
					type="email"
					placeholder="example@email.com"
					className="w-full rounded-md border border-input p-2 text-sm"
				/>
			</div>
		</div>
	),
}

/**
 * Different tooltip appearances
 */
export const CustomAppearances: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon">
						<InfoIcon className="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent className="bg-blue-500">
					<p>Info tooltip</p>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon">
						<AlertCircle className="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent className="bg-red-500">
					<p>Alert tooltip</p>
				</TooltipContent>
			</Tooltip>

			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline" size="icon">
						<FileQuestion className="h-4 w-4" />
					</Button>
				</TooltipTrigger>
				<TooltipContent className="bg-green-500">
					<p>Help tooltip</p>
				</TooltipContent>
			</Tooltip>
		</div>
	),
}

/**
 * Tooltip with rich content
 */
export const RichContent: Story = {
	render: () => (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="outline">Advanced Usage</Button>
			</TooltipTrigger>
			<TooltipContent className="w-80 p-2">
				<div className="flex flex-col gap-1">
					<h3 className="font-medium">Keyboard Shortcuts</h3>
					<div className="grid grid-cols-2 gap-2 text-xs">
						<div>New File</div>
						<div className="font-mono">⌘+N</div>
						<div>Save</div>
						<div className="font-mono">⌘+S</div>
						<div>Save As</div>
						<div className="font-mono">⇧+⌘+S</div>
						<div>Close</div>
						<div className="font-mono">⌘+W</div>
					</div>
				</div>
			</TooltipContent>
		</Tooltip>
	),
}
