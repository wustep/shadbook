import { Alert, AlertDescription, AlertTitle } from "./alert"
import { Badge } from "./badge"
import { Button } from "./button"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AlertTriangle,
	BellRing,
	Check,
	FileWarning,
	HelpCircle,
	Info,
	ShieldAlert,
	Terminal,
	X,
} from "lucide-react"

import { cn } from "@/lib/utils"

const meta: Meta<typeof Alert> = {
	title: "shadcn/Alert",
	component: Alert,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "destructive"],
		},
	},
}

export default meta
type Story = StoryObj<typeof Alert>

/**
 * Default alert with title and description
 */
export const Default: Story = {
	render: () => (
		<Alert className="w-[450px]">
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components to your app using the cli.
			</AlertDescription>
		</Alert>
	),
}

/**
 * All alert variants
 */
export const Variants: Story = {
	render: () => (
		<div className="w-[450px] space-y-4">
			<Alert>
				<Info className="h-4 w-4" />
				<AlertTitle>Default Alert</AlertTitle>
				<AlertDescription>
					This is the default alert style with neutral styling.
				</AlertDescription>
			</Alert>

			<Alert variant="destructive">
				<AlertTriangle className="h-4 w-4" />
				<AlertTitle>Destructive Alert</AlertTitle>
				<AlertDescription>
					This alert uses a more attention-grabbing destructive style for
					warnings and errors.
				</AlertDescription>
			</Alert>
		</div>
	),
}

/**
 * Alerts with different icons that convey specific meanings
 */
export const WithIcons: Story = {
	render: () => (
		<div className="w-[450px] space-y-4">
			<Alert>
				<Info className="h-4 w-4" />
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>
					General information that is neutral in nature.
				</AlertDescription>
			</Alert>

			<Alert>
				<HelpCircle className="h-4 w-4" />
				<AlertTitle>Tip</AlertTitle>
				<AlertDescription>
					Helpful advice and tips for better experience.
				</AlertDescription>
			</Alert>

			<Alert>
				<Check className="h-4 w-4" />
				<AlertTitle>Success</AlertTitle>
				<AlertDescription>Operation completed successfully.</AlertDescription>
			</Alert>

			<Alert>
				<BellRing className="h-4 w-4" />
				<AlertTitle>Notification</AlertTitle>
				<AlertDescription>
					You have 3 unread messages in your inbox.
				</AlertDescription>
			</Alert>

			<Alert variant="destructive">
				<X className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>
					Something went wrong. Please try again.
				</AlertDescription>
			</Alert>

			<Alert variant="destructive">
				<AlertTriangle className="h-4 w-4" />
				<AlertTitle>Warning</AlertTitle>
				<AlertDescription>
					Your session is about to expire in 5 minutes.
				</AlertDescription>
			</Alert>
		</div>
	),
}

/**
 * Alert containing code block example
 */
export const WithCode: Story = {
	render: () => (
		<Alert className="w-[550px]">
			<Terminal className="h-4 w-4" />
			<AlertTitle>Tip</AlertTitle>
			<AlertDescription>
				<p>Use this command to install dependencies:</p>
				<pre className="mt-2 w-full rounded-md bg-slate-950 p-2 text-white">
					<code className="text-xs">npm install @shadcn/ui</code>
				</pre>
			</AlertDescription>
		</Alert>
	),
}

/**
 * Alerts with additional interactive elements
 */
export const WithActions: Story = {
	render: () => (
		<div className="w-[450px] space-y-4">
			<Alert>
				<FileWarning className="h-4 w-4" />
				<AlertTitle>Update Available</AlertTitle>
				<AlertDescription>
					<p className="mb-3">
						A new software update is available. Update now for the latest
						features and security improvements.
					</p>
					<div className="flex flex-wrap gap-2">
						<Button size="sm" className="h-8">
							Update Now
						</Button>
						<Button size="sm" variant="outline" className="h-8">
							Later
						</Button>
					</div>
				</AlertDescription>
			</Alert>

			<Alert variant="destructive">
				<ShieldAlert className="h-4 w-4" />
				<AlertTitle>Security Alert</AlertTitle>
				<AlertDescription>
					<p className="mb-3">
						Multiple login attempts detected from an unknown device. Verify it's
						you or secure your account.
					</p>
					<div className="flex flex-wrap gap-2">
						<Button size="sm" variant="destructive" className="h-8">
							Secure Account
						</Button>
						<Button size="sm" variant="outline" className="h-8">
							It's Me
						</Button>
					</div>
				</AlertDescription>
			</Alert>
		</div>
	),
}

/**
 * Custom styled alerts for specific use cases
 */
export const CustomStyled: Story = {
	render: () => (
		<div className="w-[450px] space-y-4">
			<Alert
				className={cn(
					"border-green-500/50 bg-green-500/10 text-green-600",
					"dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-400",
				)}
			>
				<Check className="h-4 w-4" />
				<AlertTitle>Success!</AlertTitle>
				<AlertDescription>
					Your payment has been successfully processed.
				</AlertDescription>
			</Alert>

			<Alert
				className={cn(
					"border-blue-500/50 bg-blue-500/10 text-blue-600",
					"dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400",
				)}
			>
				<Info className="h-4 w-4" />
				<AlertTitle>Information</AlertTitle>
				<AlertDescription>
					Your trial period will end in 7 days.
				</AlertDescription>
			</Alert>

			<Alert
				className={cn(
					"border-amber-500/50 bg-amber-500/10 text-amber-600",
					"dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400",
				)}
			>
				<AlertTriangle className="h-4 w-4" />
				<AlertTitle>Attention needed</AlertTitle>
				<AlertDescription>
					Please complete your profile to access all features.
				</AlertDescription>
			</Alert>
		</div>
	),
}

/**
 * Compact alerts for tight UI spaces
 */
export const Compact: Story = {
	render: () => (
		<div className="w-[450px] space-y-2">
			<Alert className="py-2 px-3">
				<Info className="h-3.5 w-3.5" />
				<AlertTitle className="text-sm leading-none">
					Your trial ends in 7 days
				</AlertTitle>
			</Alert>

			<Alert variant="destructive" className="py-2 px-3">
				<AlertTriangle className="h-3.5 w-3.5" />
				<AlertTitle className="text-sm leading-none">
					Disk space almost full
				</AlertTitle>
			</Alert>

			<Alert className="py-2 px-3 flex items-center justify-between">
				<div className="flex items-center">
					<Check className="h-3.5 w-3.5" />
					<AlertTitle className="text-sm leading-none">
						Profile updated
					</AlertTitle>
				</div>
				<Badge variant="outline" className="text-xs h-5 ml-2">
					New
				</Badge>
			</Alert>
		</div>
	),
}

/**
 * Alert with dismissible functionality
 */
export const Dismissible: Story = {
	render: function DismissibleAlert() {
		return (
			<div className="w-[450px] space-y-4">
				<Alert className="relative pr-10">
					<Info className="h-4 w-4" />
					<AlertTitle>Information Alert</AlertTitle>
					<AlertDescription>
						This alert can be dismissed using the close button.
					</AlertDescription>
					<Button
						variant="ghost"
						size="icon"
						className="absolute top-1 right-1 h-7 w-7 p-0 opacity-70 hover:opacity-100"
						onClick={() =>
							alert(
								"Close button clicked! In a real app, this would dismiss the alert.",
							)
						}
					>
						<X className="h-3 w-3" />
						<span className="sr-only">Close</span>
					</Button>
				</Alert>

				<Alert variant="destructive" className="relative pr-10">
					<AlertTriangle className="h-4 w-4" />
					<AlertTitle>Warning Alert</AlertTitle>
					<AlertDescription>
						This warning alert can also be dismissed.
					</AlertDescription>
					<Button
						variant="ghost"
						size="icon"
						className="absolute top-1 right-1 h-7 w-7 p-0 text-destructive-foreground/70 hover:text-destructive-foreground"
						onClick={() =>
							alert(
								"Close button clicked! In a real app, this would dismiss the alert.",
							)
						}
					>
						<X className="h-3 w-3" />
						<span className="sr-only">Close</span>
					</Button>
				</Alert>
			</div>
		)
	},
}
