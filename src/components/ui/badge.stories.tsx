import type { Meta, StoryObj } from "@storybook/react"
import { CheckCircle, Clock, Info, XCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const meta: Meta<typeof Badge> = {
	title: "shadcn/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "destructive", "outline"],
		},
	},
}

export default meta
type Story = StoryObj<typeof Badge>

/**
 * Default badge styling
 */
export const Default: Story = {
	args: {
		children: "Badge",
	},
}

/**
 * All badge variants
 */
export const Variants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Badge variant="default">Default</Badge>
			<Badge variant="secondary">Secondary</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
		</div>
	),
}

/**
 * Badges with icons
 */
export const WithIcons: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Badge variant="default">
				<CheckCircle className="h-3 w-3" />
				Completed
			</Badge>
			<Badge variant="destructive">
				<XCircle className="h-3 w-3" />
				Failed
			</Badge>
			<Badge variant="secondary">
				<Clock className="h-3 w-3" />
				Pending
			</Badge>
			<Badge variant="outline">
				<Info className="h-3 w-3" />
				Information
			</Badge>
		</div>
	),
}

/**
 * Badge use cases
 */
export const UseCases: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2">
				<span className="text-sm font-medium">Status:</span>
				<Badge variant="default">Active</Badge>
			</div>
			<div className="rounded-md border p-4">
				<div className="mb-2 flex items-center justify-between">
					<h3 className="text-sm font-medium">Project Overview</h3>
					<Badge variant="secondary">In Progress</Badge>
				</div>
				<p className="text-sm text-muted-foreground">
					Project details and description...
				</p>
			</div>
			<div className="flex flex-wrap gap-2">
				<Badge variant="outline">React</Badge>
				<Badge variant="outline">Tailwind CSS</Badge>
				<Badge variant="outline">TypeScript</Badge>
				<Badge variant="outline">shadcn/ui</Badge>
			</div>
		</div>
	),
}

/**
 * Custom styled badges
 */
export const CustomStyling: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>
			<Badge className="bg-green-500 hover:bg-green-600">Green</Badge>
			<Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
			<Badge className="bg-amber-500 hover:bg-amber-600">Amber</Badge>
			<Badge className="bg-rose-500 hover:bg-rose-600">Rose</Badge>
		</div>
	),
}

/**
 * Different size badges
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Badge className="px-1 py-0 text-[0.6rem]">Tiny</Badge>
			<Badge>Default</Badge>
			<Badge className="px-2.5 py-1 text-sm">Medium</Badge>
			<Badge className="px-3 py-1.5 text-base">Large</Badge>
		</div>
	),
}
