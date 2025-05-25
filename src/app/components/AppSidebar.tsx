import { Link, useLocation } from "@tanstack/react-router"
import {
	AudioWaveform,
	Command,
	GalleryVerticalEnd,
	Gamepad2,
	Search,
	Sparkles,
	Zap,
} from "lucide-react"
import * as React from "react"

import { ColorThemeSelector } from "@/app/components/ColorThemeSelector"
import { ThemeToggle } from "@/app/components/ThemeToggle"
import { UserNav } from "@/app/components/UserNav"
import { pageConfig, type PagePath } from "@/app/config/pages"
import { Label } from "@/components/ui/label"
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
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar"
import { Index } from "@/storybook/app/__registry__"
import { TeamSwitcher } from "@/storybook/app/registry/blocks/sidebar-07/components/team-switcher"

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: GalleryVerticalEnd,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioWaveform,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: Command,
			plan: "Free",
		},
	],
	components: Object.values(Index)
		.filter(item => item.type === "registry:ui")
		.concat([
			{
				name: "combobox",
			},
		])
		.sort((a, b) => a.name.localeCompare(b.name)),
	experiments: [
		{
			id: "physics-playground",
			name: "Physics Playground",
			description: "Throw shadcn components around in a physics simulation",
			icon: Gamepad2,
			path: "/experiments/physics-playground",
		},
		{
			id: "animated-cards",
			name: "Animated Cards",
			description: "Cards with hover animations and micro-interactions",
			icon: Sparkles,
			path: "/experiments/animated-cards",
			disabled: true,
		},
		{
			id: "advanced-forms",
			name: "Advanced Forms",
			description: "Multi-step forms with validation",
			icon: Zap,
			path: "/experiments/advanced-forms",
			disabled: true,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const location = useLocation()
	const currentPath = location.pathname

	// Map actual pathnames to layout route keys
	const getLayoutPath = (path: string): PagePath => {
		if (path === "/") return "/_layout"
		return `/_layout${path}` as PagePath
	}

	const currentLayoutPath = getLayoutPath(currentPath)

	return (
		<Sidebar collapsible="icon" variant="inset" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
				<SidebarGroup className="py-0 px-0 group-data-[collapsible=icon]:hidden">
					<SidebarGroupContent>
						<form className="relative">
							<Label htmlFor="search" className="sr-only">
								Search
							</Label>
							<SidebarInput
								id="search"
								placeholder="Search the docs..."
								className="pl-8"
							/>
							<Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
						</form>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu>
						{Object.entries(pageConfig).map(([path, config]) => {
							const IconComponent = config.icon
							const isActive = currentLayoutPath === path
							// Convert layout paths to actual navigation paths
							const navigationPath =
								path === "/_layout" ? "/" : path.replace("/_layout", "")
							return (
								<SidebarMenuItem key={path}>
									<SidebarMenuButton asChild isActive={isActive}>
										<Link to={navigationPath}>
											<IconComponent className="size-4" />
											<span>{config.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							)
						})}
					</SidebarMenu>
				</SidebarGroup>
				{currentLayoutPath === "/_layout/components" && (
					<SidebarGroup className="group-data-[collapsible=icon]:hidden">
						<SidebarGroupLabel>Components</SidebarGroupLabel>
						<SidebarMenu>
							{data.components.map(item => (
								<SidebarMenuItem key={item.name}>
									<SidebarMenuButton asChild>
										<a href={`/components#${item.name}`}>
											<span>{getComponentName(item.name)}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				)}
				{(currentLayoutPath === "/_layout/experiments" ||
					currentPath.startsWith("/experiments/")) && (
					<SidebarGroup className="group-data-[collapsible=icon]:hidden">
						<SidebarGroupLabel>Experiments</SidebarGroupLabel>
						<SidebarMenu>
							{data.experiments.map(experiment => {
								const IconComponent = experiment.icon
								const isActive = currentPath === experiment.path
								return (
									<SidebarMenuItem key={experiment.id}>
										<SidebarMenuButton
											asChild
											disabled={experiment.disabled}
											isActive={isActive}
										>
											<Link to={experiment.path}>
												<IconComponent className="size-4" />
												<span>{experiment.name}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								)
							})}
						</SidebarMenu>
					</SidebarGroup>
				)}
			</SidebarContent>
			<SidebarFooter>
				<div className="flex flex-col gap-2 p-0 pb-2">
					<ThemeToggle />
					<ColorThemeSelector />
				</div>
				<UserNav user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}

function getComponentName(name: string) {
	// convert kebab-case to title case
	return name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
}
