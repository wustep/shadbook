import type { Meta, StoryObj } from "@storybook/react"
import {
	ArrowUpDown,
	CheckCircle,
	Clock,
	CreditCard,
	FileText,
	Flame,
	Gift,
	Heart,
	Info,
	MessageSquare,
	Star,
	Tag,
	Trash,
	TrendingUp,
	XCircle,
	Zap,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

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
 * All badge variants with clear labels
 */
export const Variants: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-[450px]">
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col gap-2">
					<div className="text-sm font-medium text-muted-foreground">
						Default
					</div>
					<Badge variant="default">Default Badge</Badge>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-sm font-medium text-muted-foreground">
						Secondary
					</div>
					<Badge variant="secondary">Secondary Badge</Badge>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-sm font-medium text-muted-foreground">
						Destructive
					</div>
					<Badge variant="destructive">Destructive Badge</Badge>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-sm font-medium text-muted-foreground">
						Outline
					</div>
					<Badge variant="outline">Outline Badge</Badge>
				</div>
			</div>

			<div className="text-sm text-muted-foreground">
				Badges are used to highlight status, categories, or labels for content.
			</div>
		</div>
	),
}

/**
 * Badges with icons to enhance visual meaning
 */
export const WithIcons: Story = {
	render: () => (
		<div className="w-[450px] space-y-6">
			<div className="grid grid-cols-2 gap-4">
				<Badge variant="default" className="w-fit">
					<CheckCircle className="mr-1 h-3.5 w-3.5" />
					Completed
				</Badge>
				<Badge variant="destructive" className="w-fit">
					<XCircle className="mr-1 h-3.5 w-3.5" />
					Failed
				</Badge>
				<Badge variant="secondary" className="w-fit">
					<Clock className="mr-1 h-3.5 w-3.5" />
					Pending
				</Badge>
				<Badge variant="outline" className="w-fit">
					<Info className="mr-1 h-3.5 w-3.5" />
					Information
				</Badge>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Badge
					variant="default"
					className="w-fit bg-green-500 hover:bg-green-600"
				>
					<TrendingUp className="mr-1 h-3.5 w-3.5" />
					Trending
				</Badge>
				<Badge
					variant="default"
					className="w-fit bg-blue-500 hover:bg-blue-600"
				>
					<MessageSquare className="mr-1 h-3.5 w-3.5" />
					New Messages
				</Badge>
				<Badge
					variant="outline"
					className="w-fit text-orange-500 border-orange-200 bg-orange-100 dark:border-orange-800 dark:bg-orange-950/50"
				>
					<Flame className="mr-1 h-3.5 w-3.5" />
					Hot Deal
				</Badge>
				<Badge
					variant="outline"
					className="w-fit text-purple-500 border-purple-200 bg-purple-100 dark:border-purple-800 dark:bg-purple-950/50"
				>
					<Zap className="mr-1 h-3.5 w-3.5" />
					Popular
				</Badge>
			</div>
		</div>
	),
}

/**
 * Status badges to represent different states
 */
export const StatusBadges: Story = {
	render: () => (
		<div className="w-[450px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">System Status Indicators</div>
				<div className="flex flex-wrap gap-2">
					<Badge variant="default" className="bg-green-500 hover:bg-green-600">
						Active
					</Badge>
					<Badge variant="default" className="bg-amber-500 hover:bg-amber-600">
						Warning
					</Badge>
					<Badge variant="default" className="bg-red-500 hover:bg-red-600">
						Error
					</Badge>
					<Badge variant="default" className="bg-slate-500 hover:bg-slate-600">
						Disabled
					</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Task Status</div>
				<div className="flex flex-wrap gap-2">
					<Badge
						variant="outline"
						className="border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-400"
					>
						<Clock className="mr-1 h-3.5 w-3.5" />
						To Do
					</Badge>
					<Badge
						variant="outline"
						className="border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-400"
					>
						<ArrowUpDown className="mr-1 h-3.5 w-3.5" />
						In Progress
					</Badge>
					<Badge
						variant="outline"
						className="border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400"
					>
						<CheckCircle className="mr-1 h-3.5 w-3.5" />
						Done
					</Badge>
					<Badge
						variant="outline"
						className="border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400"
					>
						<XCircle className="mr-1 h-3.5 w-3.5" />
						Blocked
					</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Order Status</div>
				<div className="flex flex-wrap gap-2">
					<Badge variant="secondary">Processing</Badge>
					<Badge variant="secondary">Shipped</Badge>
					<Badge variant="default">Delivered</Badge>
					<Badge variant="destructive">Cancelled</Badge>
				</div>
			</div>
		</div>
	),
}

/**
 * Badge use cases in common UI patterns
 */
export const UseCases: Story = {
	render: () => (
		<div className="w-[450px] space-y-6">
			{/* Notification with badge */}
			<div className="space-y-2">
				<div className="text-sm font-medium">Notification Button</div>
				<div className="flex items-center">
					<Button variant="outline" size="icon" className="relative">
						<MessageSquare className="h-4 w-4" />
						<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] text-destructive-foreground">
							4
						</span>
					</Button>
					<span className="ml-2 text-sm text-muted-foreground">
						New messages
					</span>
				</div>
			</div>

			{/* Feature list with badges */}
			<div className="space-y-2">
				<div className="text-sm font-medium">Feature Highlights</div>
				<Card>
					<CardHeader className="pb-2 pt-4 px-4">
						<div className="flex items-center justify-between">
							<h3 className="text-sm font-medium">Premium Features</h3>
							<Badge
								variant="default"
								className="bg-gradient-to-r from-pink-500 to-violet-500"
							>
								Pro
							</Badge>
						</div>
					</CardHeader>
					<CardContent className="px-4 py-2 space-y-2">
						<div className="flex items-center">
							<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
							<span className="text-sm">Custom domains</span>
							<Badge className="ml-auto text-[10px] px-1 py-0">New</Badge>
						</div>
						<div className="flex items-center">
							<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
							<span className="text-sm">Advanced analytics</span>
						</div>
						<div className="flex items-center">
							<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
							<span className="text-sm">Team collaboration</span>
							<Badge
								variant="outline"
								className="ml-auto text-[10px] px-1 py-0"
							>
								Coming soon
							</Badge>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Product card with badge */}
			<div className="space-y-2">
				<div className="text-sm font-medium">Product Card</div>
				<Card>
					<CardHeader className="p-0 relative">
						<div className="h-[120px] bg-muted rounded-t-lg flex items-center justify-center">
							<CreditCard className="h-8 w-8 text-muted-foreground" />
						</div>
						<Badge className="absolute top-2 right-2 bg-red-500">25% OFF</Badge>
					</CardHeader>
					<CardContent className="p-4">
						<div className="flex justify-between items-start">
							<div>
								<h3 className="font-medium">Premium Plan</h3>
								<p className="text-sm text-muted-foreground">
									All features included
								</p>
							</div>
							<div className="text-lg font-bold">$49</div>
						</div>
					</CardContent>
					<CardFooter className="pt-0 px-4 pb-4">
						<div className="flex gap-2 text-xs">
							<Badge variant="outline" className="gap-1">
								<Star className="h-3 w-3" />
								4.9
							</Badge>
							<Badge variant="outline" className="gap-1">
								<Gift className="h-3 w-3" />
								Bonus
							</Badge>
						</div>
					</CardFooter>
				</Card>
			</div>
		</div>
	),
}

/**
 * User interface with categorization badges
 */
export const CategoryBadges: Story = {
	render: () => (
		<div className="w-[450px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">Content Categories</div>
				<div className="flex flex-wrap gap-2">
					<Badge variant="outline">Design</Badge>
					<Badge variant="outline">Development</Badge>
					<Badge variant="outline">Marketing</Badge>
					<Badge variant="outline">Business</Badge>
					<Badge variant="outline">Technology</Badge>
					<Badge variant="outline">Lifestyle</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Blog Post</div>
				<Card>
					<CardContent className="p-4">
						<h3 className="text-base font-medium mb-1">
							Getting Started with React
						</h3>
						<div className="flex gap-2 mb-3">
							<Badge variant="secondary" className="text-xs">
								React
							</Badge>
							<Badge variant="secondary" className="text-xs">
								Tutorial
							</Badge>
							<Badge variant="secondary" className="text-xs">
								Frontend
							</Badge>
						</div>
						<p className="text-sm text-muted-foreground">
							Learn the fundamentals of React and build your first
							application...
						</p>
						<div className="mt-4 flex justify-between items-center">
							<div className="flex items-center gap-2">
								<Avatar className="h-6 w-6">
									<AvatarImage
										src="https://github.com/shadcn.png"
										alt="@shadcn"
									/>
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<span className="text-xs text-muted-foreground">John Doe</span>
							</div>
							<div className="flex items-center gap-2">
								<Badge
									variant="outline"
									className="gap-1 h-5 text-xs border-muted-foreground/30"
								>
									<FileText className="h-3 w-3" />5 min read
								</Badge>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	),
}

/**
 * Badge styling variations and sizes
 */
export const CustomStyling: Story = {
	render: () => (
		<div className="w-[450px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">Custom Colors</div>
				<div className="flex flex-wrap gap-2">
					<Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>
					<Badge className="bg-green-500 hover:bg-green-600">Green</Badge>
					<Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
					<Badge className="bg-amber-500 hover:bg-amber-600">Amber</Badge>
					<Badge className="bg-rose-500 hover:bg-rose-600">Rose</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Gradient Badges</div>
				<div className="flex flex-wrap gap-2">
					<Badge className="bg-gradient-to-r from-pink-500 to-violet-500">
						Premium
					</Badge>
					<Badge className="bg-gradient-to-r from-cyan-500 to-blue-500">
						Pro
					</Badge>
					<Badge className="bg-gradient-to-r from-amber-500 to-orange-500">
						Hot
					</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Size Variations</div>
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center gap-1">
						<Badge className="px-1 py-0 text-[0.6rem]">Tiny</Badge>
						<span className="text-xs text-muted-foreground">XS</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Badge className="text-xs">Small</Badge>
						<span className="text-xs text-muted-foreground">SM</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Badge>Default</Badge>
						<span className="text-xs text-muted-foreground">MD</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Badge className="px-2.5 py-1 text-sm">Medium</Badge>
						<span className="text-xs text-muted-foreground">LG</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Badge className="px-3 py-1.5 text-base">Large</Badge>
						<span className="text-xs text-muted-foreground">XL</span>
					</div>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Shape Variations</div>
				<div className="flex flex-wrap gap-4">
					<Badge className="rounded-sm">Square</Badge>
					<Badge>Default</Badge>
					<Badge className="rounded-full px-3">Pill</Badge>
					<Badge variant="outline" className="border-dashed">
						Dashed
					</Badge>
					<Badge className="rounded-none">No Radius</Badge>
				</div>
			</div>
		</div>
	),
}

/**
 * Interactive badges with different states
 */
export const InteractiveBadges: Story = {
	render: () => (
		<div className="w-[450px] space-y-6">
			<div className="space-y-2">
				<div className="text-sm font-medium">Interactive Elements</div>
				<div className="flex flex-wrap gap-2">
					<Badge
						variant="outline"
						className="cursor-pointer border-dashed px-3 hover:border-solid hover:bg-secondary"
					>
						<Tag className="mr-1 h-3 w-3" />
						Add Tag
					</Badge>
					<Badge className="cursor-pointer gap-1 hover:bg-muted hover:text-muted-foreground">
						Technology
						<button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
							<XCircle className="h-3 w-3" />
							<span className="sr-only">Remove</span>
						</button>
					</Badge>
					<Badge className="cursor-pointer gap-1 hover:bg-muted hover:text-muted-foreground">
						Design
						<button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
							<XCircle className="h-3 w-3" />
							<span className="sr-only">Remove</span>
						</button>
					</Badge>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Item Selection</div>
				<div className="rounded-md border p-4">
					<div className="text-sm font-medium mb-2">Selected Filters:</div>
					<div className="flex flex-wrap gap-2">
						<Badge
							variant="secondary"
							className="cursor-pointer gap-1 hover:bg-muted/80"
						>
							Price: $0-$100
							<button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
								<XCircle className="h-3 w-3" />
								<span className="sr-only">Remove</span>
							</button>
						</Badge>
						<Badge
							variant="secondary"
							className="cursor-pointer gap-1 hover:bg-muted/80"
						>
							Color: Blue
							<button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
								<XCircle className="h-3 w-3" />
								<span className="sr-only">Remove</span>
							</button>
						</Badge>
						<Badge
							variant="secondary"
							className="cursor-pointer gap-1 hover:bg-muted/80"
						>
							Size: Medium
							<button className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
								<XCircle className="h-3 w-3" />
								<span className="sr-only">Remove</span>
							</button>
						</Badge>
						<Badge
							variant="outline"
							className="cursor-pointer hover:bg-secondary"
						>
							Clear All
						</Badge>
					</div>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Like/Save Buttons</div>
				<div className="flex gap-4">
					<Badge
						variant="outline"
						className="cursor-pointer gap-1 hover:bg-pink-100 hover:text-pink-500 hover:border-pink-200 dark:hover:bg-pink-950/30 dark:hover:border-pink-800"
					>
						<Heart className="h-3.5 w-3.5" />
						Like
					</Badge>
					<Badge
						variant="outline"
						className="cursor-pointer gap-1 hover:bg-yellow-100 hover:text-yellow-600 hover:border-yellow-200 dark:hover:bg-yellow-950/30 dark:hover:border-yellow-800"
					>
						<Star className="h-3.5 w-3.5" />
						Favorite
					</Badge>
					<Badge
						variant="outline"
						className="cursor-pointer gap-1 hover:bg-red-100 hover:text-red-500 hover:border-red-200 dark:hover:bg-red-950/30 dark:hover:border-red-800"
					>
						<Trash className="h-3.5 w-3.5" />
						Delete
					</Badge>
				</div>
			</div>
		</div>
	),
}
