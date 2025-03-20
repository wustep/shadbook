import { Badge } from "./badge"
import { Button } from "./button"
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card"
import type { Meta, StoryObj } from "@storybook/react"
import {
	ArrowRight,
	Calendar,
	CreditCard,
	MoreHorizontal,
	Settings,
	User,
} from "lucide-react"

const meta: Meta<typeof Card> = {
	title: "shadcn/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

/**
 * Simple card with basic content
 */
export const Default: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	),
}

/**
 * Card with action button in header
 */
export const WithAction: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>You have 3 unread messages.</CardDescription>
				<CardAction>
					<Button variant="outline" size="icon">
						<Settings className="h-4 w-4" />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<div className="flex items-center justify-between rounded-md border p-2">
						<p className="text-sm">New message from John</p>
						<Badge>New</Badge>
					</div>
					<div className="flex items-center justify-between rounded-md border p-2">
						<p className="text-sm">Payment successful</p>
						<Badge variant="outline">Read</Badge>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" size="sm" className="w-full">
					Mark all as read
				</Button>
			</CardFooter>
		</Card>
	),
}

/**
 * Card with interactive elements
 */
export const Interactive: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Account Settings</CardTitle>
				<CardDescription>Manage your account preferences</CardDescription>
				<CardAction>
					<Button variant="ghost" size="icon">
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<User className="h-5 w-5 text-muted-foreground" />
						<div>
							<p className="text-sm font-medium">Personal Information</p>
							<p className="text-xs text-muted-foreground">
								Update your details
							</p>
						</div>
					</div>
					<Button variant="ghost" size="icon">
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<CreditCard className="h-5 w-5 text-muted-foreground" />
						<div>
							<p className="text-sm font-medium">Payment Methods</p>
							<p className="text-xs text-muted-foreground">Manage billing</p>
						</div>
					</div>
					<Button variant="ghost" size="icon">
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-4">
						<Calendar className="h-5 w-5 text-muted-foreground" />
						<div>
							<p className="text-sm font-medium">Subscription</p>
							<p className="text-xs text-muted-foreground">Manage plan</p>
						</div>
					</div>
					<Button variant="ghost" size="icon">
						<ArrowRight className="h-4 w-4" />
					</Button>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Save changes</Button>
			</CardFooter>
		</Card>
	),
}

/**
 * Card with borders between sections
 */
export const WithBorders: Story = {
	render: () => (
		<Card className="w-[350px]">
			<CardHeader className="border-b">
				<CardTitle>Team Members</CardTitle>
				<CardDescription>Invite and manage team members.</CardDescription>
			</CardHeader>
			<CardContent className="p-0">
				<div className="border-b p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium">John Doe</p>
							<p className="text-xs text-muted-foreground">john@example.com</p>
						</div>
						<Badge>Admin</Badge>
					</div>
				</div>
				<div className="border-b p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium">Jane Smith</p>
							<p className="text-xs text-muted-foreground">jane@example.com</p>
						</div>
						<Badge variant="outline">Member</Badge>
					</div>
				</div>
				<div className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm font-medium">Mark Johnson</p>
							<p className="text-xs text-muted-foreground">mark@example.com</p>
						</div>
						<Badge variant="outline">Member</Badge>
					</div>
				</div>
			</CardContent>
			<CardFooter className="border-t">
				<Button variant="outline" className="w-full">
					<User className="mr-2 h-4 w-4" />
					Invite New Member
				</Button>
			</CardFooter>
		</Card>
	),
}

/**
 * Custom styled card
 */
export const CustomStyle: Story = {
	render: () => (
		<Card className="w-[350px] border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
			<CardHeader>
				<CardTitle className="text-blue-700 dark:text-blue-300">
					Premium Plan
				</CardTitle>
				<CardDescription className="text-blue-600 dark:text-blue-400">
					Get access to all features
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2 text-blue-700 dark:text-blue-300">
					<li className="flex items-center">
						<ArrowRight className="mr-2 h-4 w-4" />
						Unlimited projects
					</li>
					<li className="flex items-center">
						<ArrowRight className="mr-2 h-4 w-4" />
						Advanced analytics
					</li>
					<li className="flex items-center">
						<ArrowRight className="mr-2 h-4 w-4" />
						Priority support
					</li>
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="w-full bg-blue-600 hover:bg-blue-700">
					Upgrade Now
				</Button>
			</CardFooter>
		</Card>
	),
}
