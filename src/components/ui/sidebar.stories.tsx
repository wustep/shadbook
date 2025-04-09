import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "./sidebar"
import type { Meta, StoryObj } from "@storybook/react"
import {
	BookIcon,
	CogIcon,
	FileIcon,
	HomeIcon,
	MessageSquareIcon,
	SearchIcon,
	UserIcon,
} from "lucide-react"
import * as React from "react"

const meta: Meta<typeof SidebarProvider> = {
	title: "Components/Sidebar",
	component: SidebarProvider,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<div className="h-[600px] w-full">
				<Story />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof SidebarProvider>

// Sample navigation data for the sidebar
const sampleNavData = [
	{
		title: "Getting Started",
		items: [
			{
				title: "Introduction",
				url: "#",
				icon: <BookIcon className="size-4" />,
			},
			{
				title: "Installation",
				url: "#",
				icon: <FileIcon className="size-4" />,
			},
			{
				title: "Configuration",
				url: "#",
				icon: <FileIcon className="size-4" />,
			},
		],
	},
	{
		title: "Components",
		items: [
			{ title: "Button", url: "#", icon: <FileIcon className="size-4" /> },
			{ title: "Card", url: "#", icon: <FileIcon className="size-4" /> },
			{ title: "Dialog", url: "#", icon: <FileIcon className="size-4" /> },
		],
	},
]

/**
 * Basic sidebar with navigation items
 */
export const Default: Story = {
	render: () => (
		<SidebarProvider defaultOpen={true}>
			<Sidebar>
				<SidebarHeader>
					<div className="flex items-center gap-2 px-4 py-2">
						<BookIcon className="size-6" />
						<h2 className="font-semibold">Documentation</h2>
					</div>
				</SidebarHeader>
				<SidebarContent className="px-2">
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild isActive>
								<a href="#" className="px-2">
									<HomeIcon className="size-4 mr-2" />
									Home
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="#" className="px-2">
									<FileIcon className="size-4 mr-2" />
									Documents
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="#" className="px-2">
									<MessageSquareIcon className="size-4 mr-2" />
									Messages
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarContent>
				<SidebarFooter>
					<div className="flex items-center gap-2 px-4 py-2">
						<CogIcon className="size-4" />
						<span>Settings</span>
					</div>
				</SidebarFooter>
			</Sidebar>
		</SidebarProvider>
	),
}

/**
 * Sidebar with navigation groups and items
 */
export const WithGroups: Story = {
	render: () => (
		<SidebarProvider defaultOpen={true}>
			<Sidebar>
				<SidebarHeader>
					<div className="flex items-center gap-2 px-4 py-2">
						<BookIcon className="size-6" />
						<h2 className="font-semibold">Documentation</h2>
					</div>
				</SidebarHeader>
				<SidebarContent className="px-2">
					{sampleNavData.map(group => (
						<SidebarGroup key={group.title}>
							<SidebarGroupLabel className="px-2">
								{group.title}
							</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									{group.items.map(item => (
										<SidebarMenuItem key={item.title}>
											<SidebarMenuButton asChild>
												<a href={item.url} className="px-2">
													{item.icon}
													<span className="ml-2">{item.title}</span>
												</a>
											</SidebarMenuButton>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					))}
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	),
}

/**
 * Sidebar with active item and notification badges
 */
export const WithBadges: Story = {
	render: () => (
		<SidebarProvider defaultOpen={true}>
			<Sidebar>
				<SidebarHeader>
					<div className="flex items-center gap-2 px-4 py-2">
						<BookIcon className="size-6" />
						<h2 className="font-semibold">Documentation</h2>
					</div>
					<div className="px-4 py-2">
						<SidebarInput placeholder="Search..." />
					</div>
				</SidebarHeader>
				<SidebarContent className="px-2">
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild isActive>
								<a href="#" className="px-2">
									<HomeIcon className="size-4 mr-2" />
									Home
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="#" className="px-2">
									<FileIcon className="size-4 mr-2" />
									Documents
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a
									href="#"
									className="flex items-center justify-between w-full px-2"
								>
									<div className="flex items-center">
										<MessageSquareIcon className="size-4 mr-2" />
										Messages
									</div>
									<SidebarMenuBadge className="bg-primary text-primary-foreground rounded-full text-xs px-2">
										5
									</SidebarMenuBadge>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a
									href="#"
									className="flex items-center justify-between w-full px-2"
								>
									<div className="flex items-center">
										<UserIcon className="size-4 mr-2" />
										Profile
									</div>
									<SidebarMenuBadge className="bg-destructive text-destructive-foreground rounded-full text-xs px-2">
										New
									</SidebarMenuBadge>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	),
}

/**
 * Sidebar with loading state skeletons
 */
export const WithLoadingState: Story = {
	render: () => (
		<SidebarProvider defaultOpen={true}>
			<Sidebar>
				<SidebarHeader>
					<div className="flex items-center gap-2 px-4 py-2">
						<BookIcon className="size-6" />
						<h2 className="font-semibold">Documentation</h2>
					</div>
					<SidebarInput placeholder="Search..." />
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>Files</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenuSkeleton showIcon />
							<SidebarMenuSkeleton showIcon />
							<SidebarMenuSkeleton showIcon />
							<SidebarMenuSkeleton showIcon />
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
			</Sidebar>
		</SidebarProvider>
	),
}

/**
 * Collapsible sidebar that can be toggled
 */
export const Collapsible: Story = {
	render: function CollapsibleStory() {
		const [isOpen, setIsOpen] = React.useState(true)

		return (
			<SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
				<Sidebar collapsible="offcanvas">
					<SidebarHeader>
						<div className="flex items-center gap-2 px-4 py-2">
							<BookIcon className="size-6" />
							<h2 className="font-semibold">Documentation</h2>
						</div>
					</SidebarHeader>
					<SidebarContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#">
										<HomeIcon className="size-4 mr-2" />
										Home
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#">
										<FileIcon className="size-4 mr-2" />
										Documents
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<a href="#">
										<MessageSquareIcon className="size-4 mr-2" />
										Messages
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarContent>
					<SidebarFooter>
						<div className="flex items-center gap-2 px-4 py-2">
							<CogIcon className="size-4" />
							<span>Settings</span>
						</div>
					</SidebarFooter>
				</Sidebar>
				<SidebarTrigger onClick={() => setIsOpen(!isOpen)} />
				<div className="p-4 ml-4">
					<h1 className="text-2xl font-bold mb-4">Main Content</h1>
					<p>Content area next to the sidebar</p>
				</div>
			</SidebarProvider>
		)
	},
}

/**
 * Icon-only sidebar when collapsed
 */
export const IconCollapsible: Story = {
	render: function IconCollapsibleStory() {
		const [isOpen, setIsOpen] = React.useState(true)

		return (
			<SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
				<Sidebar collapsible="icon">
					<SidebarHeader>
						<div className="flex items-center gap-2 px-4 py-2">
							<BookIcon className="size-6" />
							<h2 className="font-semibold">Documentation</h2>
						</div>
					</SidebarHeader>
					<SidebarContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild tooltip="Home">
									<a href="#">
										<HomeIcon className="size-4 mr-2" />
										Home
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild tooltip="Documents">
									<a href="#">
										<FileIcon className="size-4 mr-2" />
										Documents
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild tooltip="Messages">
									<a href="#">
										<MessageSquareIcon className="size-4 mr-2" />
										Messages
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarContent>
					<SidebarFooter>
						<div className="flex items-center gap-2 px-4 py-2">
							<CogIcon className="size-4" />
							<span>Settings</span>
						</div>
					</SidebarFooter>
				</Sidebar>
				<SidebarTrigger onClick={() => setIsOpen(!isOpen)} />
				<div className="p-4 ml-4">
					<h1 className="text-2xl font-bold mb-4">Main Content</h1>
					<p>Toggle the sidebar to see icon-only view</p>
				</div>
			</SidebarProvider>
		)
	},
}

/**
 * Floating style sidebar with rail
 */
export const FloatingVariant: Story = {
	render: () => (
		<SidebarProvider defaultOpen={true}>
			<Sidebar variant="floating">
				<SidebarHeader>
					<div className="flex items-center gap-2 px-4 py-2">
						<BookIcon className="size-6" />
						<h2 className="font-semibold">Documentation</h2>
					</div>
					<div className="px-4 py-2">
						<div className="relative">
							<SearchIcon className="absolute left-3 top-1/2 size-4 text-muted-foreground -translate-y-1/2" />
							<input
								className="h-9 w-full rounded-md border bg-background pl-9 pr-3"
								placeholder="Search..."
							/>
						</div>
					</div>
				</SidebarHeader>
				<SidebarContent className="px-2">
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton asChild isActive>
								<a href="#" className="px-2">
									<HomeIcon className="size-4 mr-2" />
									Home
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="#" className="px-2">
									<FileIcon className="size-4 mr-2" />
									Documents
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="#" className="px-2">
									<MessageSquareIcon className="size-4 mr-2" />
									Messages
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarContent>
				<SidebarRail />
			</Sidebar>
			<div className="p-4 ml-4 bg-muted/30 h-full">
				<h1 className="text-2xl font-bold mb-4">Content Area</h1>
				<p>Floating sidebar variant with rail</p>
			</div>
		</SidebarProvider>
	),
}
