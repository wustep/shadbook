import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import type { Meta, StoryObj } from "@storybook/react"
import { Bell, Calendar, Plus, Settings, User } from "lucide-react"

const meta: Meta<typeof Popover> = {
	title: "shadcn/Popover",
	component: Popover,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<div className="flex items-center justify-center min-h-[350px]">
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Popover>

/**
 * Basic popover with default settings
 */
export const Default: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline">Open Popover</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Dimensions</h4>
						<p className="text-sm text-muted-foreground">
							Set the dimensions for the layer.
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="width">Width</Label>
							<Input
								id="width"
								defaultValue="100%"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="maxWidth">Max. width</Label>
							<Input
								id="maxWidth"
								defaultValue="300px"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="height">Height</Label>
							<Input
								id="height"
								defaultValue="25px"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-3 items-center gap-4">
							<Label htmlFor="maxHeight">Max. height</Label>
							<Input
								id="maxHeight"
								defaultValue="none"
								className="col-span-2 h-8"
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
}

/**
 * Popover with different alignment options
 */
export const Alignment: Story = {
	render: () => (
		<div className="flex items-center justify-center gap-8">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Align Start</Button>
				</PopoverTrigger>
				<PopoverContent align="start" className="w-60">
					<div className="space-y-2">
						<h4 className="font-medium">Alignment: Start</h4>
						<p className="text-sm text-muted-foreground">
							This popover is aligned to the start.
						</p>
					</div>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Align Center</Button>
				</PopoverTrigger>
				<PopoverContent align="center" className="w-60">
					<div className="space-y-2">
						<h4 className="font-medium">Alignment: Center</h4>
						<p className="text-sm text-muted-foreground">
							This popover is aligned to the center.
						</p>
					</div>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Align End</Button>
				</PopoverTrigger>
				<PopoverContent align="end" className="w-60">
					<div className="space-y-2">
						<h4 className="font-medium">Alignment: End</h4>
						<p className="text-sm text-muted-foreground">
							This popover is aligned to the end.
						</p>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	),
}

/**
 * Popover with variable side offset
 */
export const SideOffset: Story = {
	render: () => (
		<div className="flex flex-col gap-8 items-center">
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Small Offset</Button>
				</PopoverTrigger>
				<PopoverContent sideOffset={4} className="w-60">
					<div className="space-y-2">
						<h4 className="font-medium">Small Offset (4px)</h4>
						<p className="text-sm text-muted-foreground">
							This popover has a small offset from the trigger.
						</p>
					</div>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Medium Offset</Button>
				</PopoverTrigger>
				<PopoverContent sideOffset={10} className="w-60">
					<div className="space-y-2">
						<h4 className="font-medium">Medium Offset (10px)</h4>
						<p className="text-sm text-muted-foreground">
							This popover has a medium offset from the trigger.
						</p>
					</div>
				</PopoverContent>
			</Popover>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="outline">Large Offset</Button>
				</PopoverTrigger>
				<PopoverContent sideOffset={20} className="w-60">
					<div className="space-y-2">
						<h4 className="font-medium">Large Offset (20px)</h4>
						<p className="text-sm text-muted-foreground">
							This popover has a large offset from the trigger.
						</p>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	),
}

/**
 * Popover with an icon button
 */
export const WithIconButton: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="icon">
					<Settings className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Settings</h4>
						<p className="text-sm text-muted-foreground">
							Manage your application settings.
						</p>
					</div>
					<div className="grid gap-2">
						<div className="grid grid-cols-2 items-center gap-4">
							<Label htmlFor="theme">Theme</Label>
							<select
								id="theme"
								className="w-full rounded-md border border-input px-3 py-1 text-sm"
								defaultValue="system"
							>
								<option value="light">Light</option>
								<option value="dark">Dark</option>
								<option value="system">System</option>
							</select>
						</div>
						<div className="grid grid-cols-2 items-center gap-4">
							<Label htmlFor="notifications">Notifications</Label>
							<div className="flex items-center space-x-1">
								<input type="checkbox" id="notifications" defaultChecked />
								<Label
									htmlFor="notifications"
									className="text-sm font-normal ml-1.5"
								>
									Enabled
								</Label>
							</div>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
}

/**
 * Calendar picker using popover
 */
export const CalendarPicker: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="w-[240px] justify-start text-left font-normal"
				>
					<Calendar className="mr-2 h-4 w-4" />
					Pick a date
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<div className="p-4 bg-muted/50 rounded-md space-y-2">
					<div className="text-sm font-medium">January 2023</div>
					<div className="grid grid-cols-7 gap-2">
						{Array.from({ length: 31 }, (_, i) => (
							<div
								key={i + 1}
								className="h-8 w-8 rounded-md flex items-center justify-center hover:bg-primary/10 cursor-pointer text-sm"
							>
								{i + 1}
							</div>
						))}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
}

/**
 * Popover used for a user card preview
 */
export const UserPreview: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost" className="flex items-center gap-2">
					<User className="h-4 w-4" />
					johndoe
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="flex justify-between items-start">
					<div className="flex gap-4">
						<div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
							<User className="h-6 w-6 text-muted-foreground" />
						</div>
						<div>
							<h4 className="font-medium">John Doe</h4>
							<p className="text-sm text-muted-foreground">@johndoe</p>
							<p className="text-sm mt-2">
								Full-stack developer, open source enthusiast.
							</p>
						</div>
					</div>
				</div>
				<div className="border-t mt-4 pt-4">
					<div className="flex gap-2">
						<Button size="sm" variant="outline" className="text-xs px-2">
							Follow
						</Button>
						<Button size="sm" variant="outline" className="text-xs px-2">
							Message
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	),
}

/**
 * Notification preview using popover
 */
export const NotificationPreview: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" size="icon" className="relative">
					<Bell className="h-4 w-4" />
					<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white flex items-center justify-center">
						3
					</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80 p-0">
				<div className="p-2 font-medium border-b">Notifications</div>
				<div className="max-h-80 overflow-auto">
					{[1, 2, 3].map(notification => (
						<div
							key={notification}
							className="p-4 border-b last:border-0 hover:bg-muted/50"
						>
							<div className="flex items-start gap-2">
								<div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
									<User className="h-4 w-4 text-primary" />
								</div>
								<div>
									<p className="text-sm">
										<span className="font-medium">User{notification}</span>{" "}
										mentioned you in a comment
									</p>
									<p className="text-xs text-muted-foreground mt-1">
										2 hour{notification > 1 ? "s" : ""} ago
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="p-2 border-t text-center">
					<button className="text-xs text-primary hover:underline">
						View all notifications
					</button>
				</div>
			</PopoverContent>
		</Popover>
	),
}

/**
 * Create button with popover form
 */
export const CreateForm: Story = {
	render: () => (
		<Popover>
			<PopoverTrigger asChild>
				<Button>
					<Plus className="h-4 w-4 mr-2" />
					Create New
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<form className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Create new item</h4>
						<p className="text-sm text-muted-foreground">
							Fill in the details to create a new item.
						</p>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="Enter name" />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="description">Description</Label>
						<textarea
							id="description"
							placeholder="Enter description"
							className="min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
						/>
					</div>
					<Button className="w-full">Create</Button>
				</form>
			</PopoverContent>
		</Popover>
	),
}
