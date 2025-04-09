import type { Meta, StoryObj } from "@storybook/react"
import {
	Book,
	Code,
	Component,
	Github,
	LifeBuoy,
	Settings,
	Terminal,
	Users,
} from "lucide-react"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const meta: Meta<typeof NavigationMenu> = {
	title: "Components/NavigationMenu",
	component: NavigationMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

/**
 * Basic navigation menu with multiple items
 */
export const Default: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<Component className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">
											shadcn/ui
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Beautifully designed components built with Radix UI and
											Tailwind CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<div className="text-sm font-medium leading-none">
											Introduction
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<div className="text-sm font-medium leading-none">
											Installation
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											How to install dependencies and structure your app.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<div className="text-sm font-medium leading-none">
											Theming
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											How to customize and create your own theme.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map(component => (
								<li key={component.title}>
									<NavigationMenuLink asChild>
										<a
											className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
											href="/"
										>
											<div className="text-sm font-medium leading-none">
												{component.title}
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												{component.description}
											</p>
										</a>
									</NavigationMenuLink>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
}

/**
 * Navigation menu with icons
 */
export const WithIcons: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<Book className="mr-2 h-4 w-4" />
						Learn
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 w-[400px]">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<Book className="h-4 w-4" />
										<div>
											<div className="text-sm font-medium leading-none">
												Documentation
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Learn how to use our components and APIs.
											</p>
										</div>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<Code className="h-4 w-4" />
										<div>
											<div className="text-sm font-medium leading-none">
												API Reference
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												In-depth information about component props and APIs.
											</p>
										</div>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<Users className="h-4 w-4" />
										<div>
											<div className="text-sm font-medium leading-none">
												Community
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Join the community and get help from other developers.
											</p>
										</div>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						<LifeBuoy className="mr-2 h-4 w-4" />
						Support
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 w-[400px]">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<Settings className="h-4 w-4" />
										<div>
											<div className="text-sm font-medium leading-none">
												Help Center
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Get help with common issues and questions.
											</p>
										</div>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="flex items-center gap-2 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<Github className="h-4 w-4" />
										<div>
											<div className="text-sm font-medium leading-none">
												GitHub
											</div>
											<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
												Report issues and contribute on GitHub.
											</p>
										</div>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						<Terminal className="mr-2 h-4 w-4" />
						CLI
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
}

/**
 * Horizontal navigation menu
 */
export const SimpleHorizontal: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Home
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Features
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Pricing
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						About
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Contact
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
}

/**
 * Navigation menu with active state
 */
export const ActiveStates: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink
						href="/"
						className={navigationMenuTriggerStyle()}
						active
					>
						Home
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Products
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Services</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<div className="text-sm font-medium leading-none">
											Consulting
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											Professional consulting services for your business.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild active>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<div className="text-sm font-medium leading-none">
											Development
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											Custom software development for your needs.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/"
									>
										<div className="text-sm font-medium leading-none">
											Design
										</div>
										<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
											UI/UX design services for your projects.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						About
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
}

/**
 * Viewportless navigation menu (dropdown style)
 */
export const DropdownStyle: Story = {
	render: () => (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>File</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-1 p-2 w-48">
							<li>
								<NavigationMenuLink className="cursor-pointer">
									New File
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									New Window
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Open...
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Save
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Save As...
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Exit
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Edit</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-1 p-2 w-48">
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Undo
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Redo
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Cut
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Copy
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Paste
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>View</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-1 p-2 w-48">
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Zoom In
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Zoom Out
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Reset Zoom
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Help</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-1 p-2 w-48">
							<li>
								<NavigationMenuLink className="cursor-pointer">
									Documentation
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink className="cursor-pointer">
									About
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
}

const components = [
	{
		title: "Alert Dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Accordion",
		description:
			"A vertically stacked set of interactive headings that each reveal a section of content.",
	},
	{
		title: "Button",
		description: "Displays a button or a component that looks like a button.",
	},
	{
		title: "Carousel",
		description: "A carousel component for cycling through items.",
	},
	{
		title: "Checkbox",
		description:
			"A control that allows the user to toggle between checked and unchecked states.",
	},
	{
		title: "Dropdown Menu",
		description: "Displays a menu to the user triggered by a button.",
	},
]
