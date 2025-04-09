import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "./alert-dialog"
import { Button } from "./button"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AlertDialog> = {
	title: "Components/AlertDialog",
	component: AlertDialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof AlertDialog>

/**
 * Basic alert dialog with confirmation
 */
export const Default: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Delete Account</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Continue</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
}

/**
 * Alert dialog for dangerous action
 */
export const Destructive: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="destructive">Delete Files</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Delete Selected Files</AlertDialogTitle>
					<AlertDialogDescription>
						You are about to delete 5 files. This action cannot be undone and
						the files will be permanently removed from the server.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction className="bg-destructive hover:bg-destructive/90">
						Delete Files
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
}

/**
 * Custom styled alert dialog
 */
export const CustomStyling: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="outline">Open Custom Dialog</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-blue-700 dark:text-blue-300">
						Custom Styled Dialog
					</AlertDialogTitle>
					<AlertDialogDescription className="text-blue-600 dark:text-blue-400">
						This dialog uses custom colors and styling to match a specific theme
						or draw attention.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="border-blue-200 dark:border-blue-800">
						Dismiss
					</AlertDialogCancel>
					<AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
						Accept
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
}

/**
 * Alert dialog with additional content
 */
export const WithExtraContent: Story = {
	render: () => (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button>Terms & Conditions</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="max-w-2xl">
				<AlertDialogHeader>
					<AlertDialogTitle>Terms of Service</AlertDialogTitle>
					<AlertDialogDescription>
						Please read our terms and conditions carefully before accepting.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<div className="h-[200px] overflow-y-auto rounded border p-4 text-sm">
					<h3 className="font-medium">1. Introduction</h3>
					<p className="mt-2 text-muted-foreground">
						By using our service, you agree to these terms and conditions. Our
						service provides a platform for users to connect and share
						information.
					</p>
					<h3 className="mt-4 font-medium">2. User Responsibilities</h3>
					<p className="mt-2 text-muted-foreground">
						Users are responsible for maintaining the confidentiality of their
						account information and for all activities that occur under their
						account.
					</p>
					<h3 className="mt-4 font-medium">3. Privacy</h3>
					<p className="mt-2 text-muted-foreground">
						We collect and process personal data as described in our Privacy
						Policy. By using our service, you consent to such processing.
					</p>
					<h3 className="mt-4 font-medium">4. Limitations</h3>
					<p className="mt-2 text-muted-foreground">
						Our service is provided "as is" without any warranties, expressed or
						implied. We do not guarantee that our service will be uninterrupted
						or error-free.
					</p>
				</div>
				<AlertDialogFooter>
					<AlertDialogCancel>Decline</AlertDialogCancel>
					<AlertDialogAction>Accept Terms</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	),
}
