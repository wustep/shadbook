import { ThemeProvider, useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import {
	SidebarGroup,
	SidebarMenu,
	SidebarContent,
	SidebarFooter,
	Sidebar,
	SidebarInset,
	SidebarRail,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarGroupLabel,
	SidebarMenuSub,
	SidebarMenuSubItem,
	SidebarHeader,
	SidebarGroupContent,
	SidebarInput,
	SidebarMenuSubButton,
	SidebarTrigger,
} from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ChartAreaInteractive } from "@/storybook/app/charts/charts"
import { DataTable } from "@/storybook/app/registry/blocks/dashboard-01/components/data-table"
import { SectionCards } from "@/storybook/app/registry/blocks/dashboard-01/components/section-cards"
import { Page as ComponentsPage } from "@/storybook/app/components/page"

import data from "@/storybook/app/registry/blocks/dashboard-01/data.json"
import { NavUser } from "@/storybook/app/components/nav-user"
import { Index } from "@/storybook/app/__registry__"
import { TeamSwitcher } from "@/storybook/app/components/team-switcher"
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "@radix-ui/react-collapsible"
import {
	GalleryVerticalEnd,
	AudioWaveform,
	Command,
	BookOpen,
	Settings2,
	Search,
	ChevronRightIcon,
} from "lucide-react"
import { Label as UILabel } from "@/components/ui/label"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"

/**
 * Example app.
 *
 * This is largely lifted from: https://ui.shadcn.com/examples/dashboard
 */
function App() {
	return (
		<ThemeProvider>
			<SidebarProvider
				style={
					{
						"--sidebar-width": "calc(var(--spacing) * 72)",
						"--header-height": "calc(var(--spacing) * 12)",
					} as React.CSSProperties
				}
			>
				<AppSidebar />
				<SidebarInset>
					<AppContent />
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider>
	)
}

function AppContent() {
	return (
		<>
			<AppContentHeader />
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						<SectionCards />
						<div className="px-4 lg:px-6">
							<ChartAreaInteractive />
						</div>
						<DataTable data={data} />
						<ComponentsPage />
					</div>
				</div>
			</div>
		</>
	)
}

function AppContentHeader() {
	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<h1 className="text-base font-medium">Documents</h1>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" asChild size="sm" className="hidden sm:flex">
						<a
							href="https://github.com/wustep/shadbook"
							rel="noopener noreferrer"
							target="_blank"
							className="dark:text-foreground"
						>
							GitHub
						</a>
					</Button>
				</div>
			</div>
		</header>
	)
}

function AppSidebar() {
	const [searchQuery, setSearchQuery] = useState("")

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
		navMain: [
			{
				title: "Documentation",
				url: "#",
				icon: BookOpen,
			},
			{
				title: "Settings",
				url: "#",
				icon: Settings2,
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
	}

	// Filter components based on search query
	const filteredComponents = data.components.filter(component =>
		getComponentName(component.name)
			.toLowerCase()
			.includes(searchQuery.toLowerCase()),
	)

	// Filter navMain items based on search query
	const filteredNavMain = data.navMain.filter(item => {
		// Check if main nav title matches
		const titleMatches = item.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase())

		// Check if any subitems match
		const hasMatchingSubItems = item.items?.some(subItem =>
			subItem.title.toLowerCase().includes(searchQuery.toLowerCase()),
		)

		return titleMatches || hasMatchingSubItems
	})

	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
				<SidebarGroup className="py-0 group-data-[collapsible=icon]:hidden">
					<SidebarGroupContent>
						<form className="relative" onSubmit={e => e.preventDefault()}>
							<UILabel htmlFor="search" className="sr-only">
								Search
							</UILabel>
							<SidebarInput
								id="search"
								placeholder="Search the docs..."
								className="pl-8"
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
							/>
							<Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
						</form>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarHeader>
			<SidebarContent>
				{(filteredNavMain.length > 0 || searchQuery === "") && (
					<SidebarGroup>
						<SidebarGroupLabel>Platform</SidebarGroupLabel>
						<SidebarMenu>
							{filteredNavMain.map(item =>
								item?.items && item?.items.length > 0 ? (
									<Collapsible
										key={item.title}
										asChild
										defaultOpen={searchQuery !== ""}
										className="group/collapsible"
									>
										<SidebarMenuItem>
											<CollapsibleTrigger asChild>
												<SidebarMenuButton tooltip={item.title}>
													{item.icon && <item.icon />}
													<span>{item.title}</span>
													<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
												</SidebarMenuButton>
											</CollapsibleTrigger>
											<CollapsibleContent>
												<SidebarMenuSub>
													{item.items
														.filter(
															subItem =>
																searchQuery === "" ||
																subItem.title
																	.toLowerCase()
																	.includes(searchQuery.toLowerCase()),
														)
														.map(subItem => (
															<SidebarMenuSubItem key={subItem.title}>
																<SidebarMenuSubButton asChild>
																	<a href={subItem.url}>
																		<span>{subItem.title}</span>
																	</a>
																</SidebarMenuSubButton>
															</SidebarMenuSubItem>
														))}
												</SidebarMenuSub>
											</CollapsibleContent>
										</SidebarMenuItem>
									</Collapsible>
								) : (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild tooltip={item.title}>
											<a href={item.url}>
												{item.icon && <item.icon />}
												<span>{item.title}</span>
											</a>
										</SidebarMenuButton>
									</SidebarMenuItem>
								),
							)}
						</SidebarMenu>
					</SidebarGroup>
				)}
				{(filteredComponents.length > 0 || searchQuery === "") && (
					<SidebarGroup className="group-data-[collapsible=icon]:hidden">
						<SidebarGroupLabel>Components</SidebarGroupLabel>
						<SidebarMenu>
							{filteredComponents.map(item => (
								<SidebarMenuItem key={item.name}>
									<SidebarMenuButton asChild>
										<a href={`/#${item.name}`}>
											<span>{getComponentName(item.name)}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroup>
				)}
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}

function getComponentName(name: string) {
	return name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
}

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return <Button onClick={() => toggleTheme()}>Toggle theme: {theme}</Button>
}

export default App
