import { Alert, AlertDescription, AlertTitle } from "./alert"
import type { Meta, StoryObj } from "@storybook/react"
import { AlertTriangle, Info, Terminal } from "lucide-react"

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
 * Alert with an icon
 */
export const WithIcon: Story = {
	render: () => (
		<Alert className="w-[450px]">
			<Info />
			<AlertTitle>Information</AlertTitle>
			<AlertDescription>
				This alert includes an icon to draw more attention.
			</AlertDescription>
		</Alert>
	),
}

/**
 * Destructive variant for warnings or errors
 */
export const Destructive: Story = {
	render: () => (
		<Alert variant="destructive" className="w-[450px]">
			<AlertTriangle />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>
				Your session has expired. Please log in again.
			</AlertDescription>
		</Alert>
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
 * Alert with long content
 */
export const LongContent: Story = {
	render: () => (
		<Alert className="w-[450px]">
			<Info />
			<AlertTitle>Important Information</AlertTitle>
			<AlertDescription>
				<p>
					This alert contains a longer description to demonstrate how alerts
					handle extended content. The description wraps naturally and maintains
					proper spacing.
				</p>
				<p className="mt-2">
					Multiple paragraphs are supported, and the alert will expand to fit
					the content while maintaining its styling and layout.
				</p>
			</AlertDescription>
		</Alert>
	),
}
