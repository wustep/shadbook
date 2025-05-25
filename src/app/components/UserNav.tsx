import { useNavigate } from "@tanstack/react-router"
import {
	BadgeCheck,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Settings,
	Sparkles,
} from "lucide-react"
import { useEffect, useState } from "react"

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
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

type SettingsTab = "account" | "billing" | "settings"

export function UserNav({
	user,
}: {
	user: {
		name: string
		email: string
		avatar: string
	}
}) {
	const { isMobile } = useSidebar()
	const navigate = useNavigate()
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
									// Clear any auth data and navigate to auth page
									window.localStorage.removeItem("auth")
									navigate({ to: "/auth" })
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
							<Label htmlFor="account-name">Name</Label>
							<Input id="account-name" defaultValue={user.name} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="account-email">Email</Label>
							<Input
								id="account-email"
								type="email"
								defaultValue={user.email}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="account-bio">Bio</Label>
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
							<Label className="has-[[data-state=checked]]:border-primary flex flex-col items-start gap-3 rounded-lg border p-4 cursor-pointer">
								<div className="flex items-center gap-2 w-full">
									<RadioGroupItem value="free" id="billing-free" />
									<span className="font-semibold flex-1">Free Plan</span>
									<span className="text-sm font-normal">$0/month</span>
								</div>
								<p className="text-muted-foreground text-sm pl-6">
									Basic features for individuals.
								</p>
							</Label>
							<Label className="has-[[data-state=checked]]:border-primary flex flex-col items-start gap-3 rounded-lg border p-4 cursor-pointer">
								<div className="flex items-center gap-2 w-full">
									<RadioGroupItem value="pro" id="billing-pro" />
									<span className="font-semibold flex-1">Pro Plan</span>
									<span className="text-sm font-normal">$20/month</span>
								</div>
								<p className="text-muted-foreground text-sm pl-6">
									Advanced features and priority support.
								</p>
							</Label>
						</RadioGroup>

						<Separator />

						<div className="space-y-2">
							<Label htmlFor="billing-card-name">Name on Card</Label>
							<Input id="billing-card-name" placeholder="Your Name" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="billing-card-number">Card Details</Label>
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
							<Label htmlFor="settings-language">Language</Label>
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
							<Label>Notifications</Label>
							<div className="flex items-center space-x-2">
								<Checkbox id="settings-email-notifications" defaultChecked />
								<Label
									htmlFor="settings-email-notifications"
									className="text-sm font-normal"
								>
									Receive email notifications for updates.
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<Checkbox id="settings-push-notifications" />
								<Label
									htmlFor="settings-push-notifications"
									className="text-sm font-normal"
								>
									Enable push notifications (if applicable).
								</Label>
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
