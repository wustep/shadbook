import { Avatar, AvatarFallback } from "./avatar"
import { Badge } from "./badge"
import { Card, CardContent, CardFooter, CardHeader } from "./card"
import { Skeleton } from "./skeleton"
import type { Meta, StoryObj } from "@storybook/react"
import { Clock, MessageSquare, ThumbsUp, User } from "lucide-react"

const meta: Meta<typeof Skeleton> = {
	title: "Components/Skeleton",
	component: Skeleton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

/**
 * Basic skeleton components with various shapes and sizes
 */
export const Basic: Story = {
	render: () => (
		<div className="space-y-8 w-[450px]">
			<div className="space-y-4">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[80%]" />
				<Skeleton className="h-4 w-[60%]" />
				<Skeleton className="h-10 w-full" />
			</div>

			<div className="flex flex-wrap gap-6">
				<div className="flex flex-col items-center gap-2">
					<Skeleton className="h-12 w-12 rounded-full" />
					<span className="text-xs text-muted-foreground">Avatar</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Skeleton className="h-6 w-24 rounded-full" />
					<span className="text-xs text-muted-foreground">Badge</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Skeleton className="h-10 w-20 rounded-md" />
					<span className="text-xs text-muted-foreground">Button</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Skeleton className="h-5 w-5 rounded-full" />
					<span className="text-xs text-muted-foreground">Icon</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Skeleton className="h-20 w-20 rounded-lg" />
					<span className="text-xs text-muted-foreground">Image</span>
				</div>
			</div>
		</div>
	),
}

/**
 * Card skeleton loading state with realistic content structure
 */
export const CardSkeletons: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[600px]">
			{/* Simple card skeleton */}
			<Card>
				<CardHeader className="pb-2">
					<Skeleton className="h-5 w-[180px]" />
				</CardHeader>
				<CardContent className="space-y-4">
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-[80%]" />
				</CardContent>
				<CardFooter>
					<Skeleton className="h-10 w-[120px]" />
				</CardFooter>
			</Card>

			{/* Product card skeleton */}
			<Card>
				<CardHeader className="p-0">
					<Skeleton className="h-[200px] w-full rounded-t-lg" />
				</CardHeader>
				<CardContent className="pt-6 space-y-4">
					<Skeleton className="h-5 w-[70%]" />
					<div className="flex items-center justify-between">
						<Skeleton className="h-6 w-[100px]" />
						<Skeleton className="h-4 w-[60px]" />
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Skeleton className="h-10 w-[100px]" />
					<Skeleton className="h-10 w-[100px]" />
				</CardFooter>
			</Card>
		</div>
	),
}

/**
 * Profile and user content loading states
 */
export const ProfileSkeletons: Story = {
	render: () => (
		<div className="space-y-6 w-[450px]">
			{/* User profile header skeleton */}
			<div className="flex items-center space-x-4">
				<Skeleton className="h-12 w-12 rounded-full" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[150px]" />
					<Skeleton className="h-4 w-[100px]" />
				</div>
			</div>

			{/* User stats skeleton */}
			<div className="grid grid-cols-3 gap-4 border rounded-lg p-4">
				<div className="flex flex-col items-center justify-center">
					<Skeleton className="h-4 w-[60px] mb-2" />
					<Skeleton className="h-6 w-[40px]" />
				</div>
				<div className="flex flex-col items-center justify-center">
					<Skeleton className="h-4 w-[60px] mb-2" />
					<Skeleton className="h-6 w-[40px]" />
				</div>
				<div className="flex flex-col items-center justify-center">
					<Skeleton className="h-4 w-[60px] mb-2" />
					<Skeleton className="h-6 w-[40px]" />
				</div>
			</div>

			{/* Activity feed skeleton */}
			<div className="space-y-4">
				<div className="flex items-start space-x-4">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="flex-1 space-y-2">
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-20 w-full rounded-md" />
						<div className="flex items-center space-x-6">
							<Skeleton className="h-5 w-20" />
							<Skeleton className="h-5 w-20" />
						</div>
					</div>
				</div>
				<div className="flex items-start space-x-4">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="flex-1 space-y-2">
						<Skeleton className="h-4 w-[180px]" />
						<Skeleton className="h-16 w-full rounded-md" />
						<div className="flex items-center space-x-6">
							<Skeleton className="h-5 w-20" />
							<Skeleton className="h-5 w-20" />
						</div>
					</div>
				</div>
			</div>
		</div>
	),
}

/**
 * Realistic dashboard layout with skeleton loading states
 */
export const DashboardSkeleton: Story = {
	render: () => (
		<div className="w-[800px]">
			{/* Stats cards */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
				{[...Array(4)].map((_, i) => (
					<Card key={i}>
						<CardContent className="p-4">
							<div className="flex justify-between items-center">
								<div className="space-y-2">
									<Skeleton className="h-4 w-[80px]" />
									<Skeleton className="h-6 w-[60px]" />
								</div>
								<Skeleton className="h-10 w-10 rounded-full" />
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Main content area */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card className="md:col-span-2">
					<CardHeader>
						<Skeleton className="h-5 w-[180px]" />
					</CardHeader>
					<CardContent className="space-y-2">
						<Skeleton className="h-[200px] w-full rounded-md" />
						<div className="flex justify-between items-center pt-4">
							<Skeleton className="h-4 w-[100px]" />
							<Skeleton className="h-4 w-[120px]" />
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<Skeleton className="h-5 w-[150px]" />
					</CardHeader>
					<CardContent className="space-y-4">
						{[...Array(5)].map((_, i) => (
							<div key={i} className="flex items-center justify-between">
								<div className="flex items-center space-x-3">
									<Skeleton className="h-8 w-8 rounded-full" />
									<Skeleton className="h-4 w-[120px]" />
								</div>
								<Skeleton className="h-4 w-[60px]" />
							</div>
						))}
					</CardContent>
				</Card>
			</div>
		</div>
	),
}

/**
 * Chat and message interfaces with skeleton loading states
 */
export const ChatSkeleton: Story = {
	render: () => (
		<div className="space-y-4 w-[350px]">
			{/* Message bubbles */}
			<div className="flex justify-start">
				<div className="flex items-start space-x-2">
					<Skeleton className="h-8 w-8 rounded-full" />
					<div>
						<Skeleton className="h-3 w-20 mb-2" />
						<Skeleton className="h-14 w-[200px] rounded-2xl rounded-tl-none" />
					</div>
				</div>
			</div>

			<div className="flex justify-end">
				<div>
					<Skeleton className="h-3 w-16 mb-2 ml-auto" />
					<Skeleton className="h-10 w-[180px] rounded-2xl rounded-br-none" />
				</div>
			</div>

			<div className="flex justify-start">
				<div className="flex items-start space-x-2">
					<Skeleton className="h-8 w-8 rounded-full" />
					<div>
						<Skeleton className="h-3 w-20 mb-2" />
						<Skeleton className="h-20 w-[240px] rounded-2xl rounded-tl-none" />
					</div>
				</div>
			</div>

			<div className="flex justify-end">
				<div>
					<Skeleton className="h-3 w-16 mb-2 ml-auto" />
					<Skeleton className="h-12 w-[220px] rounded-2xl rounded-br-none" />
				</div>
			</div>

			{/* Message input */}
			<div className="mt-6 relative">
				<Skeleton className="h-12 w-full rounded-full" />
				<div className="absolute right-2 top-1/2 transform -translate-y-1/2">
					<Skeleton className="h-8 w-8 rounded-full" />
				</div>
			</div>
		</div>
	),
}

/**
 * Interactive example showing a post with real components alongside skeleton versions
 */
export const ComparisonExample: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[600px]">
			{/* Loaded state */}
			<div>
				<Card>
					<CardHeader className="pb-2 pt-4 px-4">
						<div className="flex items-center space-x-2">
							<Avatar>
								<AvatarFallback>
									<User className="h-4 w-4" />
								</AvatarFallback>
							</Avatar>
							<div>
								<p className="text-sm font-medium">Alex Johnson</p>
								<p className="text-xs text-muted-foreground flex items-center">
									<Clock className="h-3 w-3 mr-1" /> 2 hours ago
								</p>
							</div>
						</div>
					</CardHeader>
					<CardContent className="px-4 py-2">
						<p className="text-sm">
							Just launched my new portfolio website. Check it out and let me
							know your thoughts!
						</p>
						<div className="mt-2 rounded-md bg-muted h-[100px] flex items-center justify-center text-sm text-muted-foreground">
							Image Preview
						</div>
					</CardContent>
					<CardFooter className="px-4 py-2">
						<div className="flex items-center space-x-4 text-muted-foreground text-xs">
							<div className="flex items-center">
								<ThumbsUp className="h-3.5 w-3.5 mr-1" />
								<span>24 likes</span>
							</div>
							<div className="flex items-center">
								<MessageSquare className="h-3.5 w-3.5 mr-1" />
								<span>12 comments</span>
							</div>
						</div>
						<Badge variant="outline" className="ml-auto">
							Design
						</Badge>
					</CardFooter>
				</Card>
			</div>

			{/* Skeleton state */}
			<div>
				<Card>
					<CardHeader className="pb-2 pt-4 px-4">
						<div className="flex items-center space-x-2">
							<Skeleton className="h-8 w-8 rounded-full" />
							<div>
								<Skeleton className="h-4 w-24 mb-1" />
								<Skeleton className="h-3 w-32 mb-1" />
							</div>
						</div>
					</CardHeader>
					<CardContent className="px-4 py-2">
						<Skeleton className="h-4 w-full mb-2" />
						<Skeleton className="h-4 w-[90%] mb-2" />
						<Skeleton className="h-4 w-[60%] mb-1" />
						<Skeleton className="mt-2 rounded-md h-[100px] w-full" />
					</CardContent>
					<CardFooter className="px-4 py-2">
						<div className="flex items-center space-x-4">
							<Skeleton className="h-4 w-16" />
							<Skeleton className="h-4 w-20" />
						</div>
						<Skeleton className="h-5 w-16 ml-auto" />
					</CardFooter>
				</Card>
			</div>
		</div>
	),
}
