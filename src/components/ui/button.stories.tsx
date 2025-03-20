import { Button } from "./button"
import type { Meta, StoryObj } from "@storybook/react"
import { Loader2, Mail } from "lucide-react"

const meta: Meta<typeof Button> = {
	title: "shadcn/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
		},
		asChild: {
			control: "boolean",
		},
	},
}

export default meta
type Story = StoryObj<typeof Button>

/**
 * The default button component
 */
export const Default: Story = {
	args: {
		children: "Button",
	},
}

/**
 * Button variants showcase
 */
export const Variants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button variant="default">Default</Button>
			<Button variant="destructive">Destructive</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="link">Link</Button>
		</div>
	),
}

/**
 * Button size variations
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-wrap items-center gap-4">
			<Button size="sm">Small</Button>
			<Button size="default">Default</Button>
			<Button size="lg">Large</Button>
			<Button size="icon">
				<Mail />
			</Button>
		</div>
	),
}

/**
 * Button with icon
 */
export const WithIcon: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button>
				<Mail className="mr-2" />
				Login with Email
			</Button>
			<Button variant="outline">
				<Mail />
				Login with Email
			</Button>
		</div>
	),
}

/**
 * Disabled state
 */
export const Disabled: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button disabled>Disabled</Button>
			<Button disabled variant="destructive">
				Disabled
			</Button>
			<Button disabled variant="outline">
				Disabled
			</Button>
		</div>
	),
}

/**
 * Loading state with spinner
 */
export const Loading: Story = {
	render: () => (
		<Button disabled>
			<Loader2 className="mr-2 animate-spin" />
			Please wait
		</Button>
	),
}
