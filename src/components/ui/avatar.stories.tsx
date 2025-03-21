import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Badge } from "./badge"
import { Button } from "./button"
import { Card, CardContent, CardFooter, CardHeader } from "./card"
import { Skeleton } from "./skeleton"
import type { Meta, StoryObj } from "@storybook/react"
import {
	Bell,
	Check,
	ChevronDown,
	Crown,
	ImageIcon,
	MoreHorizontal,
	Settings,
	User,
	UserPlus,
} from "lucide-react"

const meta: Meta<typeof Avatar> = {
	title: "shadcn/Avatar",
	component: Avatar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Avatar>

/**
 * Default avatar with image
 */
export const Default: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
}

/**
 * Avatar with fallback (when image fails to load)
 */
export const WithFallback: Story = {
	render: () => (
		<div className="flex flex-col items-center gap-6">
			<div className="space-y-2 text-center">
				<div className="text-sm font-medium">Initials Fallback</div>
				<Avatar>
					<AvatarImage src="https://invalid-image-url.png" alt="@invalid" />
					<AvatarFallback>JD</AvatarFallback>
				</Avatar>
			</div>

			<div className="space-y-2 text-center">
				<div className="text-sm font-medium">Icon Fallback</div>
				<Avatar>
					<AvatarImage src="https://invalid-image-url.png" alt="@icon" />
					<AvatarFallback>
						<User className="h-4 w-4" />
					</AvatarFallback>
				</Avatar>
			</div>
		</div>
	),
}

/**
 * Avatar size variations from extra small to extra large
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div className="flex items-end gap-4">
				<div className="flex flex-col items-center gap-2">
					<Avatar className="h-6 w-6">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">XS</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="h-8 w-8">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">SM</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">MD</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="h-12 w-12">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">LG</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="h-16 w-16">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">XL</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="h-24 w-24">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback className="text-lg">CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">2XL</span>
				</div>
			</div>

			<div className="text-sm text-muted-foreground">
				Avatar sizes are controlled through the <code>h-*</code> and{" "}
				<code>w-*</code> utility classes.
			</div>
		</div>
	),
}

/**
 * Avatars with different styles, shapes, and decorations
 */
export const Styled: Story = {
	render: () => (
		<div className="w-[450px]">
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-end">
				<div className="flex flex-col items-center gap-2">
					<Avatar className="border-2 border-green-500">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">Bordered</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="bg-blue-100">
						<AvatarFallback className="bg-blue-500 text-white">
							JD
						</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">Colored</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="rounded-md">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">Square</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="rounded-sm">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">Rectangle</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<Avatar className="ring-2 ring-red-500 ring-offset-2">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<span className="text-xs text-muted-foreground">Ring</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<div className="relative">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
					</div>
					<span className="text-xs text-muted-foreground">Status</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<div className="relative">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
							<Crown className="h-3 w-3" />
						</div>
					</div>
					<span className="text-xs text-muted-foreground">Badge</span>
				</div>

				<div className="flex flex-col items-center gap-2">
					<div className="group relative">
						<Avatar className="opacity-75 transition-opacity group-hover:opacity-100">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 rounded-full">
							<ImageIcon className="h-4 w-4 text-white" />
						</div>
					</div>
					<span className="text-xs text-muted-foreground">Hover</span>
				</div>
			</div>
		</div>
	),
}

/**
 * Avatar groups with different arrangements and styles
 */
export const Groups: Story = {
	render: () => (
		<div className="space-y-8 w-[450px]">
			<div className="space-y-2">
				<div className="text-sm font-medium">Overlapping Group</div>
				<div className="flex -space-x-2">
					<Avatar className="border-2 border-background">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<Avatar className="border-2 border-background">
						<AvatarImage
							src="https://avatars.githubusercontent.com/u/124599?v=4"
							alt="@another"
						/>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<Avatar className="border-2 border-background">
						<AvatarFallback>WK</AvatarFallback>
					</Avatar>
					<Avatar className="border-2 border-background">
						<AvatarFallback>+2</AvatarFallback>
					</Avatar>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Team Members</div>
				<div className="flex items-center justify-between">
					<div className="flex -space-x-1.5">
						<Avatar className="border-2 border-background h-6 w-6">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="border-2 border-background h-6 w-6">
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/124599?v=4"
								alt="@another"
							/>
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<Avatar className="border-2 border-background h-6 w-6">
							<AvatarFallback>WK</AvatarFallback>
						</Avatar>
					</div>
					<Button size="sm" variant="ghost">
						<UserPlus className="h-3.5 w-3.5 mr-1" />
						Invite
					</Button>
				</div>
			</div>

			<div className="space-y-2">
				<div className="text-sm font-medium">Stacked Group</div>
				<div className="space-y-1.5">
					<div className="flex items-center space-x-2">
						<Avatar className="h-7 w-7">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="text-sm font-medium">Cristina Nevarez</div>
					</div>
					<div className="flex items-center space-x-2">
						<Avatar className="h-7 w-7">
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/124599?v=4"
								alt="@another"
							/>
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<div className="text-sm font-medium">Jackson Davis</div>
					</div>
					<div className="flex items-center space-x-2">
						<Avatar className="h-7 w-7">
							<AvatarFallback>WK</AvatarFallback>
						</Avatar>
						<div className="text-sm font-medium">Wilson Kumar</div>
					</div>
				</div>
			</div>
		</div>
	),
}

/**
 * Avatars as part of user interface components
 */
export const InContext: Story = {
	render: () => (
		<div className="space-y-6 w-[450px]">
			{/* Header User Menu */}
			<div className="bg-background p-2 border rounded-lg shadow-sm">
				<div className="flex items-center justify-end">
					<div className="flex items-center space-x-1">
						<Button size="icon" variant="ghost" className="rounded-full">
							<Bell className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="sm" className="gap-1 font-normal">
							<Avatar className="h-6 w-6">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							Cristina
							<ChevronDown className="h-4 w-4 opacity-50" />
						</Button>
					</div>
				</div>
			</div>

			{/* Comment */}
			<div className="flex items-start space-x-3">
				<Avatar className="mt-1">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className="space-y-1">
					<div className="flex items-center space-x-2">
						<div className="font-medium">Cristina Nevarez</div>
						<div className="text-xs text-muted-foreground">2 days ago</div>
					</div>
					<div className="text-sm">
						This looks great! I think we're ready to move forward with the
						project.
					</div>
					<div className="flex items-center space-x-2">
						<Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
							Reply
						</Button>
						<Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
							Like
						</Button>
					</div>
				</div>
			</div>

			{/* User Card */}
			<Card className="w-full">
				<CardHeader className="pb-2">
					<div className="flex justify-between items-start">
						<div className="flex items-center space-x-3">
							<Avatar className="h-10 w-10">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<div>
								<div className="font-medium">Cristina Nevarez</div>
								<div className="text-xs text-muted-foreground">
									Product Designer
								</div>
							</div>
						</div>
						<Button size="icon" variant="ghost" className="h-7 w-7">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</div>
				</CardHeader>
				<CardContent className="text-xs text-muted-foreground">
					<p>
						Designing user interfaces and experiences for web and mobile
						applications.
					</p>
				</CardContent>
				<CardFooter className="pt-1">
					<div className="flex items-center space-x-2">
						<Badge variant="secondary" className="text-xs">
							<Check className="h-3 w-3 mr-1" />
							Pro Member
						</Badge>
						<Button size="sm" variant="outline" className="h-7 text-xs">
							<Settings className="h-3 w-3 mr-1" />
							Edit
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	),
}

/**
 * Avatar and skeleton loading states
 */
export const LoadingStates: Story = {
	render: () => (
		<div className="space-y-8 w-[450px]">
			<div className="flex flex-col gap-4">
				<div className="text-sm font-medium">User Profile Loading</div>
				<div className="flex items-center space-x-4">
					<Skeleton className="h-12 w-12 rounded-full" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[120px]" />
						<Skeleton className="h-4 w-[80px]" />
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="text-sm font-medium">Comment Loading</div>
				<div className="flex items-start space-x-3">
					<Skeleton className="h-10 w-10 rounded-full" />
					<div className="space-y-2 flex-1">
						<div className="flex items-center space-x-2">
							<Skeleton className="h-4 w-[100px]" />
							<Skeleton className="h-3 w-[60px]" />
						</div>
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-[90%]" />
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="text-sm font-medium">Avatar Group Loading</div>
				<div className="flex -space-x-2">
					<Skeleton className="h-10 w-10 rounded-full border-2 border-background" />
					<Skeleton className="h-10 w-10 rounded-full border-2 border-background" />
					<Skeleton className="h-10 w-10 rounded-full border-2 border-background" />
					<Skeleton className="h-10 w-10 rounded-full border-2 border-background" />
				</div>
			</div>
		</div>
	),
}
