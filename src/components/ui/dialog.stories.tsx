import { Button } from "./button"
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./dialog"
import { Input } from "./input"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Dialog> = {
	title: "Components/Dialog",
	component: Dialog,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Dialog>

/**
 * Basic dialog with title and description
 */
export const Default: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Open Dialog</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" defaultValue="John Doe" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input
							id="username"
							defaultValue="@johndoe"
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}

/**
 * Dialog with form
 */
export const WithForm: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Create New Project</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create project</DialogTitle>
					<DialogDescription>
						Add a new project to your workspace.
					</DialogDescription>
				</DialogHeader>
				<form className="grid gap-4 py-4">
					<div className="grid gap-2">
						<Label htmlFor="project-name">Project name</Label>
						<Input id="project-name" placeholder="My awesome project" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Description</Label>
						<Input
							id="description"
							placeholder="Optional project description"
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="team">Team</Label>
						<select
							id="team"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
						>
							<option value="personal">Personal</option>
							<option value="team-1">Team 1</option>
							<option value="team-2">Team 2</option>
						</select>
					</div>
				</form>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button type="submit">Create</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}

/**
 * Controlled dialog (programmatically open/close)
 */
export const Controlled: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false)

		return (
			<div className="flex flex-col items-center gap-4">
				<Button onClick={() => setOpen(true)}>Show Dialog</Button>
				<p className="text-sm text-muted-foreground">
					Dialog is {open ? "open" : "closed"}
				</p>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Controlled Dialog</DialogTitle>
							<DialogDescription>
								This dialog is controlled programmatically.
							</DialogDescription>
						</DialogHeader>
						<p className="py-4">
							You can control this dialog from outside using state.
						</p>
						<DialogFooter>
							<Button onClick={() => setOpen(false)}>Close</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		)
	},
}

/**
 * Custom styled dialog
 */
export const CustomStyled: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Custom Dialog</Button>
			</DialogTrigger>
			<DialogContent className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800 rounded-xl">
				<DialogHeader>
					<DialogTitle className="text-blue-700 dark:text-blue-300">
						Custom Styled Dialog
					</DialogTitle>
					<DialogDescription className="text-blue-600 dark:text-blue-400">
						This dialog uses custom colors and styling.
					</DialogDescription>
				</DialogHeader>
				<div className="py-4">
					<p className="text-blue-700 dark:text-blue-300">
						You can customize dialogs to match your brand or theme.
					</p>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button
							variant="outline"
							className="border-blue-300 dark:border-blue-700"
						>
							Cancel
						</Button>
					</DialogClose>
					<Button className="bg-blue-600 hover:bg-blue-700">Continue</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}

/**
 * Dialog with destructive action
 */
export const Destructive: Story = {
	render: () => (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="destructive">Delete Account</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Account</DialogTitle>
					<DialogDescription>
						Are you sure you want to delete your account? This action cannot be
						undone.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button variant="destructive">Delete Account</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	),
}
