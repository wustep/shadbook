import { Button } from "./button"
import type { Meta, StoryObj } from "@storybook/react"
import {
	ArrowRight,
	Cloud,
	CreditCard,
	Download,
	Github,
	Loader2,
	LogIn,
	LogOut,
	Mail,
	Plus,
	RotateCcw,
	Save,
	Settings,
	Trash,
	Upload,
	User,
} from "lucide-react"

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
			<div className="flex gap-2">
				<Button size="icon" variant="outline">
					<Mail className="h-4 w-4" />
				</Button>
				<Button size="icon" variant="default">
					<Plus className="h-4 w-4" />
				</Button>
				<Button size="icon" variant="secondary">
					<Settings className="h-4 w-4" />
				</Button>
			</div>
		</div>
	),
}

/**
 * Buttons with icons in different positions (leading and trailing)
 */
export const WithIcons: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-[450px]">
			<div className="flex flex-wrap gap-4">
				<Button>
					<Mail className="mr-2 h-4 w-4" />
					Login with Email
				</Button>
				<Button variant="outline">
					<Mail className="mr-2 h-4 w-4" />
					Login with Email
				</Button>
				<Button variant="secondary">
					<Github className="mr-2 h-4 w-4" />
					GitHub
				</Button>
			</div>

			<div className="flex flex-wrap gap-4">
				<Button>
					Next Step
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
				<Button variant="outline">
					Download
					<Download className="ml-2 h-4 w-4" />
				</Button>
				<Button variant="secondary">
					Upload
					<Upload className="ml-2 h-4 w-4" />
				</Button>
			</div>
		</div>
	),
}

/**
 * Disabled state for all button variants
 */
export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[450px]">
			<div className="flex flex-wrap gap-4">
				<Button disabled>Default</Button>
				<Button disabled variant="destructive">
					Destructive
				</Button>
				<Button disabled variant="outline">
					Outline
				</Button>
			</div>
			<div className="flex flex-wrap gap-4">
				<Button disabled variant="secondary">
					Secondary
				</Button>
				<Button disabled variant="ghost">
					Ghost
				</Button>
				<Button disabled variant="link">
					Link
				</Button>
			</div>
		</div>
	),
}

/**
 * Loading states with spinner for different variants
 */
export const Loading: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button disabled>
				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				Please wait
			</Button>
			<Button disabled variant="outline">
				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				Processing
			</Button>
			<Button disabled variant="secondary">
				<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				Loading
			</Button>
		</div>
	),
}

/**
 * Common UI patterns for button usage in forms
 */
export const FormButtons: Story = {
	render: () => (
		<div className="w-[450px] space-y-8">
			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Login Form Actions</div>
				<div className="flex flex-wrap gap-2">
					<Button>
						<LogIn className="mr-2 h-4 w-4" />
						Log In
					</Button>
					<Button variant="outline">Create Account</Button>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Form Submit Actions</div>
				<div className="flex justify-between">
					<Button variant="ghost">Cancel</Button>
					<div className="flex gap-2">
						<Button variant="outline">
							<RotateCcw className="mr-2 h-4 w-4" />
							Reset
						</Button>
						<Button>
							<Save className="mr-2 h-4 w-4" />
							Save
						</Button>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Checkout Actions</div>
				<div className="flex flex-wrap gap-2">
					<Button variant="outline">Continue Shopping</Button>
					<Button>
						<CreditCard className="mr-2 h-4 w-4" />
						Checkout
					</Button>
				</div>
			</div>
		</div>
	),
}

/**
 * Action buttons commonly used for destructive or critical operations
 */
export const ActionButtons: Story = {
	render: () => (
		<div className="w-[450px] space-y-8">
			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Danger Zone</div>
				<div className="border border-red-200 rounded-md p-4 bg-red-50 dark:bg-red-950/20 dark:border-red-900/50">
					<div className="text-sm text-red-600 dark:text-red-400 mb-4">
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</div>
					<Button variant="destructive">
						<Trash className="mr-2 h-4 w-4" />
						Delete Account
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Account Actions</div>
				<div className="flex flex-wrap gap-2">
					<Button variant="outline">
						<Settings className="mr-2 h-4 w-4" />
						Settings
					</Button>
					<Button variant="ghost">
						<User className="mr-2 h-4 w-4" />
						Profile
					</Button>
					<Button variant="secondary">
						<LogOut className="mr-2 h-4 w-4" />
						Logout
					</Button>
				</div>
			</div>
		</div>
	),
}

/**
 * Button group patterns for related actions
 */
export const ButtonGroups: Story = {
	render: () => (
		<div className="w-[450px] space-y-8">
			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Segmented Control</div>
				<div className="inline-flex rounded-md shadow-sm">
					<Button variant="outline" className="rounded-r-none border-r-0">
						Day
					</Button>
					<Button variant="outline" className="rounded-none border-x-0">
						Week
					</Button>
					<Button variant="outline" className="rounded-l-none border-l-0">
						Month
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Cloud Actions</div>
				<div className="inline-flex rounded-md shadow-sm">
					<Button variant="secondary" className="rounded-r-none">
						<Download className="mr-2 h-4 w-4" />
						Download
					</Button>
					<Button
						variant="secondary"
						className="rounded-l-none border-l border-l-border"
					>
						<Cloud className="mr-2 h-4 w-4" />
						Sync
					</Button>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-sm font-medium mb-2">Mobile Button Bar</div>
				<div className="w-full bg-muted p-2 rounded-md flex justify-between">
					<Button size="sm" variant="ghost">
						<ArrowRight className="h-4 w-4" />
					</Button>
					<Button size="sm">Action</Button>
					<Button size="sm" variant="ghost">
						<Settings className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</div>
	),
}

/**
 * Examples of more advanced button styling
 */
export const CustomStyling: Story = {
	render: () => (
		<div className="w-[450px] space-y-4">
			<div className="flex flex-wrap gap-4">
				<Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
					Gradient
				</Button>

				<Button className="rounded-full">Rounded</Button>

				<Button className="bg-blue-500 hover:bg-blue-600 text-white">
					Custom Color
				</Button>
			</div>

			<div className="flex flex-wrap gap-4">
				<Button className="animate-pulse bg-green-500 hover:bg-green-600 text-white">
					Animated
				</Button>

				<Button className="border-2 border-dashed border-orange-500 bg-transparent text-orange-500 hover:bg-orange-50">
					Dashed Border
				</Button>

				<Button className="shadow-lg shadow-indigo-500/30 bg-indigo-500 hover:bg-indigo-600 text-white">
					With Shadow
				</Button>
			</div>
		</div>
	),
}
