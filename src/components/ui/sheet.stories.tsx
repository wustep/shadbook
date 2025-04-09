import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./sheet"
import type { Meta, StoryObj } from "@storybook/react"
import { Settings, User } from "lucide-react"

const meta: Meta<typeof Sheet> = {
	title: "Components/Sheet",
	component: Sheet,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Sheet>

/**
 * Basic sheet with right side position
 */
export const Default: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open Sheet</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you're done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Name
						</Label>
						<Input id="name" value="Pedro Duarte" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Username
						</Label>
						<Input id="username" value="@peduarte" className="col-span-3" />
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type="submit">Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
}

/**
 * Sheet positioned at the top
 */
export const TopPositioned: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Top Sheet</Button>
			</SheetTrigger>
			<SheetContent side="top" className="h-[40%]">
				<SheetHeader>
					<SheetTitle>Top Sheet</SheetTitle>
					<SheetDescription>
						This sheet slides in from the top of the screen.
					</SheetDescription>
				</SheetHeader>
				<div className="flex items-center justify-center py-4">
					<p>Sheet content goes here</p>
				</div>
			</SheetContent>
		</Sheet>
	),
}

/**
 * Sheet positioned at the bottom
 */
export const BottomPositioned: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Bottom Sheet</Button>
			</SheetTrigger>
			<SheetContent side="bottom" className="h-[40%]">
				<SheetHeader>
					<SheetTitle>Bottom Sheet</SheetTitle>
					<SheetDescription>
						This sheet slides in from the bottom of the screen.
					</SheetDescription>
				</SheetHeader>
				<div className="flex items-center justify-center py-4">
					<p>Sheet content goes here</p>
				</div>
			</SheetContent>
		</Sheet>
	),
}

/**
 * Sheet positioned on the left
 */
export const LeftPositioned: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Left Sheet</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Left Sheet</SheetTitle>
					<SheetDescription>
						This sheet slides in from the left of the screen.
					</SheetDescription>
				</SheetHeader>
				<div className="flex items-center justify-center py-4">
					<p>Sheet content goes here</p>
				</div>
			</SheetContent>
		</Sheet>
	),
}

/**
 * Sheet with a settings panel UI
 */
export const SettingsPanel: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<Settings className="mr-2 h-4 w-4" />
					Settings
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Application Settings</SheetTitle>
					<SheetDescription>
						Configure your app preferences. These settings will be applied to
						your account.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="space-y-2">
						<Label htmlFor="theme">Theme</Label>
						<div className="flex items-center space-x-2">
							<Button
								variant="outline"
								size="sm"
								className="w-full justify-start"
							>
								Light
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="w-full justify-start"
							>
								Dark
							</Button>
							<Button
								variant="outline"
								size="sm"
								className="w-full justify-start"
							>
								System
							</Button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="language">Language</Label>
						<div className="grid grid-cols-3 gap-2">
							<Button variant="outline" size="sm">
								English
							</Button>
							<Button variant="outline" size="sm">
								Spanish
							</Button>
							<Button variant="outline" size="sm">
								French
							</Button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="notifications">Notifications</Label>
						<div className="flex flex-col space-y-2">
							<Button variant="outline" size="sm" className="justify-between">
								Email notifications
								<span className="text-xs text-green-500">On</span>
							</Button>
							<Button variant="outline" size="sm" className="justify-between">
								Push notifications
								<span className="text-xs text-red-500">Off</span>
							</Button>
						</div>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Save Changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
}

/**
 * Sheet with a user profile UI
 */
export const UserProfile: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">
					<User className="mr-2 h-4 w-4" />
					Profile
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>User Profile</SheetTitle>
					<SheetDescription>
						View and edit your personal information.
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col items-center py-6">
					<div className="bg-muted mb-4 h-24 w-24 rounded-full" />
					<h3 className="text-lg font-medium">John Doe</h3>
					<p className="text-muted-foreground">john.doe@example.com</p>
				</div>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="display-name" className="text-right">
							Display Name
						</Label>
						<Input id="display-name" value="John Doe" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="email" className="text-right">
							Email
						</Label>
						<Input
							id="email"
							value="john.doe@example.com"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="bio" className="text-right">
							Bio
						</Label>
						<textarea
							id="bio"
							className="col-span-3 flex h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="Tell us about yourself"
						/>
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Update Profile</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
}

/**
 * Custom styled sheet
 */
export const CustomStyled: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					className="bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800"
				>
					Custom Styled Sheet
				</Button>
			</SheetTrigger>
			<SheetContent className="border-blue-200 bg-blue-50">
				<SheetHeader>
					<SheetTitle className="text-blue-700">Custom Styled Sheet</SheetTitle>
					<SheetDescription className="text-blue-500">
						This sheet has custom styling applied.
					</SheetDescription>
				</SheetHeader>
				<div className="flex items-center justify-center py-8">
					<p className="text-blue-600">Content with custom styling</p>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button className="bg-blue-600 hover:bg-blue-700">Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
}
