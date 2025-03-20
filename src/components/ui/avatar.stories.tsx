import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import type { Meta, StoryObj } from "@storybook/react"
import { User } from "lucide-react"

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
		<Avatar>
			<AvatarImage src="https://invalid-image-url.png" alt="@invalid" />
			<AvatarFallback>JD</AvatarFallback>
		</Avatar>
	),
}

/**
 * Avatar with icon fallback
 */
export const WithIconFallback: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="https://invalid-image-url.png" alt="@icon" />
			<AvatarFallback>
				<User className="h-4 w-4" />
			</AvatarFallback>
		</Avatar>
	),
}

/**
 * Avatar size variations
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Avatar className="h-6 w-6">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="h-12 w-12">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="h-16 w-16">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	),
}

/**
 * Avatars with different styles
 */
export const Styled: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Avatar className="border-2 border-green-500">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="bg-blue-100">
				<AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
			</Avatar>
			<Avatar className="rounded-md">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="ring-2 ring-red-500 ring-offset-2">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</div>
	),
}

/**
 * Avatar group with overlapping
 */
export const Group: Story = {
	render: () => (
		<div className="flex -space-x-2">
			<Avatar className="border-2 border-background">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar className="border-2 border-background">
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>
			<Avatar className="border-2 border-background">
				<AvatarFallback>WK</AvatarFallback>
			</Avatar>
			<Avatar className="border-2 border-background">
				<AvatarFallback>+2</AvatarFallback>
			</Avatar>
		</div>
	),
}
