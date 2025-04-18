import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible"
import {
	AudioWaveform,
	BadgeCheck,
	BookOpen,
	Check,
	ChevronRightIcon,
	ChevronsUpDown,
	Command,
	ComponentIcon,
	CreditCard,
	GalleryVerticalEnd,
	LogOut,
	Moon,
	Paintbrush,
	Plus,
	Search,
	Settings,
	Sparkles,
	Sun,
	WalletCards,
} from "lucide-react"
import { useEffect, useState } from "react"

import { ThemeProvider, useTheme } from "@/components/ThemeProvider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label as UILabel } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
	useSidebar,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Index } from "@/storybook/app/__registry__"
import { ChartAreaInteractive } from "@/storybook/app/charts/charts"
import { CardsDemo } from "@/storybook/app/components/cards"
import { Page as ComponentsPage } from "@/storybook/app/components/page"
import { DataTable } from "@/storybook/app/registry/blocks/dashboard-01/components/data-table"
import { SectionCards } from "@/storybook/app/registry/blocks/dashboard-01/components/section-cards"
import data from "@/storybook/app/registry/blocks/dashboard-01/data.json"
import { Page as AuthPage } from "@/storybook/app/registry/blocks/login-02/page"

type Page = "dashboard" | "components" | "auth" | "cards"

// Define a Team interface without using the external types file
interface Team {
	name: string
	logo: React.ElementType
	plan: string
}

// Available theme colors
type ThemeColor = "neutral" | "gray" | "slate" | "stone" | "zinc"

// Define page configuration in one central place
const pageConfig: Record<
	Exclude<Page, "auth">,
	{
		title: string
		url: string
		icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
	}
> = {
	dashboard: {
		title: "Dashboard",
		url: "#",
		icon: BookOpen,
	},
	cards: {
		title: "Cards",
		url: "#",
		icon: WalletCards,
	},
	components: {
		title: "Components",
		url: "#",
		icon: ComponentIcon,
	},
}

// Team data
const teamsData: Team[] = [
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
]

/**
 * Example app.
 *
 * This is largely lifted from: https://ui.shadcn.com/examples/dashboard
 */
function App() {
	// You should probably use a real routing solution instead, like next.js,
	// React Router, or TanStack router.
	const [page, setPage] = useState<Page>("dashboard")
	const [selectedTeam, setSelectedTeam] = useState<Team>(teamsData[0])

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
				{page === "auth" ? (
					<AuthPage onClickLogin={() => setPage("dashboard")} />
				) : (
					<>
						<AppSidebar
							page={page}
							setPage={setPage}
							selectedTeam={selectedTeam}
							setSelectedTeam={setSelectedTeam}
						/>
						<SidebarInset>
							<AppContent page={page} />
						</SidebarInset>
					</>
				)}
			</SidebarProvider>
		</ThemeProvider>
	)
}

function AppContent({ page }: { page: Page }) {
	return (
		<>
			<AppContentHeader page={page} />
			<div className="flex flex-1 flex-col">
				<div className="@container/main flex flex-1 flex-col gap-2">
					<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
						{page === "dashboard" && (
							<>
								<SectionCards />
								<div className="px-4 lg:px-6">
									<ChartAreaInteractive />
								</div>
								<DataTable data={data} />
							</>
						)}
						{page === "components" && (
							<div className="px-6">
								<ComponentsPage />
							</div>
						)}
						{page === "cards" && (
							<div className="px-6">
								<CardsDemo />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

function AppContentHeader({ page }: { page: Page }) {
	const currentPage = pageConfig[page as keyof typeof pageConfig]
	const IconComponent = currentPage.icon

	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-2 data-[orientation=vertical]:h-4"
				/>
				<h1 className="text-base font-medium flex items-center">
					<IconComponent className="mr-2 size-4" />
					{currentPage.title}
				</h1>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" asChild size="sm" className="hidden sm:flex">
						<a
							href="https://shadbook.vercel.app"
							rel="noopener noreferrer"
							target="_blank"
							className="dark:text-foreground"
						>
							Storybook
						</a>
					</Button>
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

function AppSidebar({
	page,
	setPage,
	selectedTeam,
	setSelectedTeam,
}: {
	page: Page
	setPage: (page: Page) => void
	selectedTeam: Team
	setSelectedTeam: (team: Team) => void
}) {
	const [searchQuery, setSearchQuery] = useState("")

	// This is sample data.
	const data = {
		user: {
			name: "shadcn",
			email: "m@example.com",
			avatar: "/avatars/shadcn.jpg",
		},
		teams: teamsData,
		// Only include dashboard and components in navigation, not auth
		navMain: Object.entries(pageConfig).map(([id, config]) => ({
			title: config.title,
			url: config.url,
			icon: config.icon,
			pageId: id as Exclude<Page, "auth">,
		})) as Array<{
			title: string
			url: string
			icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
			pageId: Exclude<Page, "auth">
			items?: Array<{
				title: string
				url: string
				pageId?: Exclude<Page, "auth">
			}>
		}>,
		components: Object.values(Index)
			.filter(item => item.type === "registry:ui")
			.concat([
				{
					name: "combobox",
				},
			])
			.sort((a, b) => a.name.localeCompare(b.name)),
	}

	const filteredComponents = data.components.filter(component =>
		getComponentName(component.name)
			.toLowerCase()
			.includes(searchQuery.toLowerCase()),
	)

	const filteredNavMain = data.navMain.filter(item => {
		const titleMatches =
			item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			item.pageId.toLowerCase().includes(searchQuery.toLowerCase())

		const hasMatchingSubItems = item.items?.some(
			subItem =>
				subItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				(subItem.pageId &&
					subItem.pageId.toLowerCase().includes(searchQuery.toLowerCase())),
		)

		return titleMatches || hasMatchingSubItems
	})

	return (
		<Sidebar collapsible="icon" variant="inset">
			<SidebarHeader>
				<TeamSwitcher
					teams={data.teams}
					selectedTeam={selectedTeam}
					onTeamChange={setSelectedTeam}
				/>
				<SidebarGroup className="p-0 group-data-[collapsible=icon]:hidden">
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
															(subItem: {
																title: string
																url: string
																pageId?: Exclude<Page, "auth">
															}) =>
																searchQuery === "" ||
																subItem.title
																	.toLowerCase()
																	.includes(searchQuery.toLowerCase()),
														)
														.map(
															(subItem: {
																title: string
																url: string
																pageId?: Exclude<Page, "auth">
															}) => (
																<SidebarMenuSubItem key={subItem.title}>
																	<SidebarMenuSubButton
																		asChild
																		isActive={subItem.pageId === page}
																	>
																		<a
																			href={subItem.url}
																			onClick={e => {
																				e.preventDefault()
																				if (subItem.pageId) {
																					setPage(subItem.pageId)
																				}
																			}}
																		>
																			<span>{subItem.title}</span>
																		</a>
																	</SidebarMenuSubButton>
																</SidebarMenuSubItem>
															),
														)}
												</SidebarMenuSub>
											</CollapsibleContent>
										</SidebarMenuItem>
									</Collapsible>
								) : (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton
											asChild
											tooltip={item.title}
											isActive={item.pageId === page}
										>
											<a
												href={item.url}
												onClick={e => {
													e.preventDefault()
													setPage(item.pageId)
												}}
											>
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
				{page === "components" &&
					(filteredComponents.length > 0 || searchQuery === "") && (
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
				<div className="flex flex-col gap-2 p-0 pb-2">
					<ThemeToggle />
					<ColorThemeSelector />
				</div>
				<UserNav user={data.user} setPage={setPage} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}

function getComponentName(name: string) {
	return name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase())
}

function TeamSwitcher({
	teams,
	selectedTeam,
	onTeamChange,
}: {
	teams: Team[]
	selectedTeam: Team
	onTeamChange: (team: Team) => void
}) {
	if (!selectedTeam) {
		return null
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
								<selectedTeam.logo className="size-4" />
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">
									{selectedTeam.name}
								</span>
								<span className="truncate text-xs">{selectedTeam.plan}</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						align="start"
						side="bottom"
						sideOffset={4}
					>
						<DropdownMenuLabel className="text-muted-foreground text-xs">
							Teams
						</DropdownMenuLabel>
						{teams.map((team, index) => (
							<DropdownMenuItem
								key={team.name}
								onClick={() => onTeamChange(team)}
								className="gap-2 p-2"
							>
								<div className="flex size-6 items-center justify-center rounded-xs border">
									<team.logo className="size-4 shrink-0" />
								</div>
								{team.name}
								<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem className="gap-2 p-2">
							<div className="bg-background flex size-6 items-center justify-center rounded-md border">
								<Plus className="size-4" />
							</div>
							<div className="text-muted-foreground font-medium">Add team</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	)
}

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<SidebarMenuButton
			variant="outline"
			size="sm"
			className="w-full justify-start gap-2"
			onClick={() => toggleTheme()}
		>
			{theme === "dark" ? (
				<Moon className="size-4" />
			) : (
				<Sun className="size-4" />
			)}
			<span>{theme === "dark" ? "Dark" : "Light"} Mode</span>
		</SidebarMenuButton>
	)
}

function ColorThemeSelector() {
	const [color, setColor] = useState<ThemeColor>("neutral")

	// Update the document's HTML class when color changes
	useEffect(() => {
		// Remove existing theme colors
		document.documentElement.classList.remove(
			"theme-neutral",
			"theme-gray",
			"theme-slate",
			"theme-stone",
			"theme-zinc",
		)

		// Add the new theme color
		document.documentElement.classList.add(`theme-${color}`)

		// Store the preference
		localStorage.setItem("theme-color", color)
	}, [color])

	// Load the stored preference on component mount
	useEffect(() => {
		const storedColor = localStorage.getItem("theme-color") as ThemeColor
		if (storedColor) {
			setColor(storedColor)
		}
	}, [])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="sm"
					className="w-full justify-start gap-2"
				>
					<Paintbrush className="size-4" />
					<span className="capitalize">{color} Theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<div>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("neutral")}
					>
						<div className="size-4 rounded-full bg-neutral-600 dark:bg-neutral-200 border border-border" />
						Neutral
						{color === "neutral" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("gray")}
					>
						<div className="size-4 rounded-full bg-gray-400 dark:bg-gray-400 border border-border" />
						Gray
						{color === "gray" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("slate")}
					>
						<div className="size-4 rounded-full bg-slate-400 dark:bg-slate-400 border border-border" />
						Slate
						{color === "slate" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("stone")}
					>
						<div className="size-4 rounded-full bg-stone-400 dark:bg-stone-400 border border-border" />
						Stone
						{color === "stone" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("zinc")}
					>
						<div className="size-4 rounded-full bg-zinc-400 dark:bg-zinc-500 border border-border" />
						Zinc
						{color === "zinc" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

function UserNav({
	user,
	setPage,
}: {
	user: {
		name: string
		email: string
		avatar: string
	}
	setPage: (page: Page) => void
}) {
	const { isMobile } = useSidebar()
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)
	const [activeSettingsTab, setActiveSettingsTab] =
		useState<SettingsTab>("account")

	return (
		<>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage src={user.avatar} alt={user.name} />
									<AvatarFallback className="rounded-lg">CN</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
								<ChevronsUpDown className="ml-auto size-4" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
							side={isMobile ? "bottom" : "right"}
							align="end"
							sideOffset={4}
						>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage src={user.avatar} alt={user.name} />
										<AvatarFallback className="rounded-lg">CN</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">{user.name}</span>
										<span className="truncate text-xs">{user.email}</span>
									</div>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem
									onSelect={e => e.preventDefault()}
									onClick={() => {
										setActiveSettingsTab("billing")
										setIsSettingsOpen(true)
									}}
								>
									<Sparkles className="mr-2 h-4 w-4" />
									Upgrade to Pro
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem
									onSelect={e => e.preventDefault()}
									onClick={() => {
										setActiveSettingsTab("account")
										setIsSettingsOpen(true)
									}}
								>
									<BadgeCheck className="mr-2 h-4 w-4" />
									Account
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={e => e.preventDefault()}
									onClick={() => {
										setActiveSettingsTab("billing")
										setIsSettingsOpen(true)
									}}
								>
									<CreditCard className="mr-2 h-4 w-4" />
									Billing
								</DropdownMenuItem>
								<DropdownMenuItem
									onSelect={e => e.preventDefault()}
									onClick={() => {
										setActiveSettingsTab("settings")
										setIsSettingsOpen(true)
									}}
								>
									<Settings className="mr-2 h-4 w-4" />
									Preferences
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem
								onClick={() => {
									window.localStorage.removeItem("auth")
									window.location.href = "#auth"
									setPage("auth")
								}}
							>
								<LogOut className="mr-2 h-4 w-4" />
								Log out
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
			<SettingsModal
				isOpen={isSettingsOpen}
				onOpenChange={setIsSettingsOpen}
				initialTab={activeSettingsTab}
				user={user}
			/>
		</>
	)
}

// --- SettingsModal Component ---

type SettingsTab = "account" | "billing" | "settings"

function SettingsModal({
	isOpen,
	onOpenChange,
	initialTab,
	user,
}: {
	isOpen: boolean
	onOpenChange: (open: boolean) => void
	initialTab: SettingsTab
	user: { name: string; email: string; avatar: string }
}) {
	const [activeTab, setActiveTab] = useState<SettingsTab>(initialTab)

	// Update active tab if initialTab prop changes while modal is open
	useEffect(() => {
		if (isOpen) {
			setActiveTab(initialTab)
		}
	}, [initialTab, isOpen])

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-2xl">
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Manage your account settings, billing information, and application
						preferences.
					</DialogDescription>
				</DialogHeader>
				<Tabs
					value={activeTab}
					onValueChange={value => setActiveTab(value as SettingsTab)}
					className="pt-2"
				>
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="billing">Billing</TabsTrigger>
						<TabsTrigger value="settings">Preferences</TabsTrigger>
					</TabsList>

					<TabsContent value="account" className="mt-6 space-y-6">
						<div className="space-y-2">
							<UILabel htmlFor="account-name">Name</UILabel>
							<Input id="account-name" defaultValue={user.name} />
						</div>
						<div className="space-y-2">
							<UILabel htmlFor="account-email">Email</UILabel>
							<Input
								id="account-email"
								type="email"
								defaultValue={user.email}
							/>
						</div>
						<div className="space-y-2">
							<UILabel htmlFor="account-bio">Bio</UILabel>
							<Textarea
								id="account-bio"
								placeholder="Tell us a little bit about yourself"
								className="min-h-[100px]"
							/>
						</div>
						<DialogFooter>
							<Button variant="outline" onClick={() => onOpenChange(false)}>
								Cancel
							</Button>
							<Button onClick={() => onOpenChange(false)}>Save Changes</Button>
						</DialogFooter>
					</TabsContent>

					<TabsContent value="billing" className="mt-6 space-y-6">
						<RadioGroup
							defaultValue={initialTab === "billing" ? "pro" : "free"}
							className="grid gap-4 md:grid-cols-2"
						>
							<UILabel className="has-[[data-state=checked]]:border-primary flex flex-col items-start gap-3 rounded-lg border p-4 cursor-pointer">
								<div className="flex items-center gap-2 w-full">
									<RadioGroupItem value="free" id="billing-free" />
									<span className="font-semibold flex-1">Free Plan</span>
									<span className="text-sm font-normal">$0/month</span>
								</div>
								<p className="text-muted-foreground text-sm pl-6">
									Basic features for individuals.
								</p>
							</UILabel>
							<UILabel className="has-[[data-state=checked]]:border-primary flex flex-col items-start gap-3 rounded-lg border p-4 cursor-pointer">
								<div className="flex items-center gap-2 w-full">
									<RadioGroupItem value="pro" id="billing-pro" />
									<span className="font-semibold flex-1">Pro Plan</span>
									<span className="text-sm font-normal">$20/month</span>
								</div>
								<p className="text-muted-foreground text-sm pl-6">
									Advanced features and priority support.
								</p>
							</UILabel>
						</RadioGroup>

						<Separator />

						<div className="space-y-2">
							<UILabel htmlFor="billing-card-name">Name on Card</UILabel>
							<Input id="billing-card-name" placeholder="Your Name" />
						</div>
						<div className="space-y-2">
							<UILabel htmlFor="billing-card-number">Card Details</UILabel>
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_auto]">
								<Input
									id="billing-card-number"
									placeholder="Card Number"
									className="sm:col-span-1"
								/>
								<Input
									id="billing-card-expiry"
									placeholder="MM/YY"
									className="w-full sm:w-[100px]"
								/>
								<Input
									id="billing-card-cvc"
									placeholder="CVC"
									className="w-full sm:w-[80px]"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button variant="outline" onClick={() => onOpenChange(false)}>
								Cancel
							</Button>
							<Button onClick={() => onOpenChange(false)}>
								Update Payment
							</Button>
						</DialogFooter>
					</TabsContent>

					<TabsContent value="settings" className="mt-6 space-y-6">
						<div className="space-y-2">
							<UILabel htmlFor="settings-language">Language</UILabel>
							<Select defaultValue="en">
								<SelectTrigger id="settings-language" className="w-[180px]">
									<SelectValue placeholder="Select language" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="en">English</SelectItem>
									<SelectItem value="es">Español</SelectItem>
									<SelectItem value="fr">Français</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Separator />
						<div className="space-y-4">
							<UILabel>Notifications</UILabel>
							<div className="flex items-center space-x-2">
								<Checkbox id="settings-email-notifications" defaultChecked />
								<UILabel
									htmlFor="settings-email-notifications"
									className="text-sm font-normal"
								>
									Receive email notifications for updates.
								</UILabel>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="settings-push-notifications" />
								<UILabel
									htmlFor="settings-push-notifications"
									className="text-sm font-normal"
								>
									Enable push notifications (if applicable).
								</UILabel>
							</div>
						</div>
						<DialogFooter>
							<Button variant="outline" onClick={() => onOpenChange(false)}>
								Cancel
							</Button>
							<Button onClick={() => onOpenChange(false)}>
								Save Preferences
							</Button>
						</DialogFooter>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}

export default App
