import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card"
import type { Meta, StoryObj } from "@storybook/react"
import { CalendarDays, Github, Link, Twitter, User } from "lucide-react"

const meta: Meta<typeof HoverCard> = {
	title: "Components/HoverCard",
	component: HoverCard,
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
type Story = StoryObj<typeof HoverCard>

/**
 * Basic hover card with user information
 */
export const Default: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<Button variant="link">@nextjs</Button>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex justify-between space-x-4">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<h4 className="text-sm font-semibold">@nextjs</h4>
						<p className="text-sm">
							The React Framework – created and maintained by @vercel.
						</p>
						<div className="flex items-center pt-2">
							<CalendarDays className="mr-2 h-4 w-4 opacity-70" />
							<span className="text-xs text-muted-foreground">
								Joined December 2021
							</span>
						</div>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
}

/**
 * Hover card with a GitHub profile
 */
export const GitHubProfile: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<a
					href="https://github.com/shadcn"
					className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4"
				>
					<Github className="h-4 w-4" />
					@shadcn
				</a>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-4">
						<Avatar className="h-12 w-12">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						<div>
							<h4 className="text-sm font-bold">shadcn</h4>
							<div className="flex items-center gap-2">
								<span className="text-xs text-muted-foreground">
									Developer and designer
								</span>
							</div>
						</div>
					</div>
					<div className="text-sm">
						Building open source UI components. Maintainer of shadcn/ui.
					</div>
					<div className="flex gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-1">
							<User className="h-3 w-3" />
							<span>1.5k followers</span>
						</div>
						<div className="flex items-center gap-1">
							<Link className="h-3 w-3" />
							<span>shadcn.com</span>
						</div>
					</div>
					<div className="flex gap-2">
						<Button variant="secondary" size="sm" className="h-7 gap-1 text-xs">
							<Github className="h-3 w-3" /> Follow
						</Button>
						<Button variant="outline" size="sm" className="h-7 gap-1 text-xs">
							<Link className="h-3 w-3" /> Website
						</Button>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
}

/**
 * Hover card with social media information
 */
export const SocialMedia: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<a
					href="https://twitter.com/shadcn"
					className="inline-flex items-center gap-1 text-sm font-medium text-blue-500"
				>
					<Twitter className="h-4 w-4" />
					@shadcn
				</a>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-4">
						<Avatar className="h-12 w-12">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>SC</AvatarFallback>
						</Avatar>
						<div>
							<h4 className="text-sm font-bold">shadcn</h4>
							<div className="text-xs text-muted-foreground">@shadcn</div>
						</div>
					</div>
					<p className="text-sm">
						Designer and developer. Creator of @shadcn/ui.
					</p>
					<div className="flex gap-4 text-xs text-muted-foreground">
						<div className="flex items-center gap-1">
							<span>1.2K Posts</span>
						</div>
						<div className="flex items-center gap-1">
							<span>4.5K Followers</span>
						</div>
						<div className="flex items-center gap-1">
							<span>590 Following</span>
						</div>
					</div>
					<div className="flex gap-2">
						<Button size="sm" className="h-7 gap-1 text-xs">
							Follow
						</Button>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
}

/**
 * Hover card with different alignments
 */
export const Alignment: Story = {
	render: () => (
		<div className="flex flex-col items-center justify-center gap-8">
			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="outline">Align Start</Button>
				</HoverCardTrigger>
				<HoverCardContent align="start" className="w-60">
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Alignment: Start</h4>
						<p className="text-sm text-muted-foreground">
							This hover card is aligned to the start.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>

			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="outline">Align Center</Button>
				</HoverCardTrigger>
				<HoverCardContent align="center" className="w-60">
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Alignment: Center</h4>
						<p className="text-sm text-muted-foreground">
							This hover card is aligned to the center.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>

			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="outline">Align End</Button>
				</HoverCardTrigger>
				<HoverCardContent align="end" className="w-60">
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Alignment: End</h4>
						<p className="text-sm text-muted-foreground">
							This hover card is aligned to the end.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	),
}

/**
 * Hover card with image preview
 */
export const ImagePreview: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
					Mountain Landscape
				</span>
			</HoverCardTrigger>
			<HoverCardContent className="w-80 p-0">
				<div className="aspect-video w-full overflow-hidden rounded-t-md">
					<img
						src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
						alt="Mountain landscape"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="p-4">
					<h4 className="text-sm font-medium">Mountain Landscape</h4>
					<p className="text-sm text-muted-foreground mt-1">
						Beautiful mountain landscape with snow peaks and starry night sky.
					</p>
					<div className="mt-2 flex text-xs text-muted-foreground">
						<span>Photo by John Doe</span>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
}

/**
 * Hover card with product information
 */
export const ProductInfo: Story = {
	render: () => (
		<HoverCard>
			<HoverCardTrigger asChild>
				<span className="text-sm font-medium underline underline-offset-4 cursor-pointer">
					Premium Headphones
				</span>
			</HoverCardTrigger>
			<HoverCardContent className="w-80">
				<div className="flex gap-4">
					<div className="h-20 w-20 rounded-md bg-muted flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-10 w-10 text-muted-foreground"
						>
							<circle cx="6" cy="6" r="2" />
							<circle cx="18" cy="6" r="2" />
							<path d="M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" />
						</svg>
					</div>
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Premium Headphones</h4>
						<div className="text-sm">
							<div className="flex items-center text-sm">
								<span className="font-bold">$299.99</span>
								<span className="text-muted-foreground line-through ml-2">
									$399.99
								</span>
							</div>
							<div className="flex items-center mt-1">
								<div className="flex">
									{Array(5)
										.fill(null)
										.map((_, i) => (
											<svg
												key={i}
												className={`h-3 w-3 ${
													i < 4 ? "text-yellow-400" : "text-muted-foreground"
												}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
								</div>
								<span className="text-xs text-muted-foreground ml-2">
									(128 reviews)
								</span>
							</div>
						</div>
						<p className="text-xs text-muted-foreground">
							High-quality wireless headphones with noise cancellation.
						</p>
					</div>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
}

/**
 * Interactive tooltip-like hover card
 */
export const TooltipStyle: Story = {
	render: () => (
		<HoverCard openDelay={0} closeDelay={0}>
			<HoverCardTrigger asChild>
				<Button variant="link" className="text-blue-500 p-0 h-auto font-normal">
					Learn more
				</Button>
			</HoverCardTrigger>
			<HoverCardContent
				side="top"
				className="w-64 bg-primary text-primary-foreground shadow-xl"
			>
				<div className="space-y-2 text-xs">
					<p>
						This is a tooltip-style hover card with quick open/close behavior.
					</p>
					<p>
						It uses custom styling to look like a tooltip rather than a card.
					</p>
				</div>
			</HoverCardContent>
		</HoverCard>
	),
}
