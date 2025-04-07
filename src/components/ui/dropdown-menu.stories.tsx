import { Button } from "./button"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "./dropdown-menu"
import type { Meta, StoryObj } from "@storybook/react"
import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof DropdownMenu> = {
	title: "shadcn/DropdownMenu",
	component: DropdownMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

/**
 * Basic dropdown menu with items
 */
export const Default: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="h-4 w-4" />
						<span>Profile</span>
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCard className="h-4 w-4" />
						<span>Billing</span>
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="h-4 w-4" />
						<span>Settings</span>
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Keyboard className="h-4 w-4" />
						<span>Keyboard shortcuts</span>
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="h-4 w-4" />
					<span>Log out</span>
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
}

/**
 * Dropdown with checkbox items
 */
export const WithCheckboxes: Story = {
	render: function Render() {
		const [showStatusBar, setShowStatusBar] = useState(true)
		const [showActivityBar, setShowActivityBar] = useState(false)
		const [showPanel, setShowPanel] = useState(false)

		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Open Settings</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>Appearance</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem
						checked={showStatusBar}
						onCheckedChange={setShowStatusBar}
					>
						Status Bar
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={showActivityBar}
						onCheckedChange={setShowActivityBar}
					>
						Activity Bar
					</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem
						checked={showPanel}
						onCheckedChange={setShowPanel}
					>
						Panel
					</DropdownMenuCheckboxItem>
					<DropdownMenuSeparator />
					<div className="p-2 text-xs text-muted-foreground">
						{showStatusBar && <div>Status Bar: Visible</div>}
						{showActivityBar && <div>Activity Bar: Visible</div>}
						{showPanel && <div>Panel: Visible</div>}
						{!showStatusBar && !showActivityBar && !showPanel && (
							<div>No elements visible</div>
						)}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
}

/**
 * Dropdown with radio items
 */
export const WithRadioGroups: Story = {
	render: function Render() {
		const [position, setPosition] = useState("bottom")

		return (
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Position Options</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuLabel>Panel Position</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
						<DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
					<DropdownMenuSeparator />
					<div className="p-2 text-xs text-muted-foreground">
						Current position: {position}
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		)
	},
}

/**
 * Dropdown with sub-menus
 */
export const WithSubmenus: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<Users className="mr-2 h-4 w-4 text-muted-foreground" />
							<span>Team</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<UserPlus className="h-4 w-4" />
									<span>Add Member</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Mail className="h-4 w-4" />
									<span>Invite Member</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Users className="h-4 w-4" />
									<span>View Team</span>
								</DropdownMenuItem>
								<DropdownMenuSub>
									<DropdownMenuSubTrigger>
										<Plus className="mr-2 h-4 w-4 text-muted-foreground" />
										<span>New Team</span>
									</DropdownMenuSubTrigger>
									<DropdownMenuPortal>
										<DropdownMenuSubContent>
											<DropdownMenuItem>
												<PlusCircle className="h-4 w-4" />
												<span>Create Team</span>
											</DropdownMenuItem>
											<DropdownMenuItem>
												<Cloud className="h-4 w-4" />
												<span>Join Team</span>
											</DropdownMenuItem>
										</DropdownMenuSubContent>
									</DropdownMenuPortal>
								</DropdownMenuSub>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuSeparator />
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<Settings className="mr-2 h-4 w-4 text-muted-foreground" />
							<span>Settings</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<User className="h-4 w-4" />
									<span>Profile Settings</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<CreditCard className="h-4 w-4" />
									<span>Billing Settings</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LifeBuoy className="h-4 w-4" />
					<span>Support</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Github className="h-4 w-4" />
					<span>GitHub</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="h-4 w-4" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
}

/**
 * Dropdown with destructive items
 */
export const WithDestructiveItems: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Actions</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<MessageSquare className="h-4 w-4" />
					<span>Comment</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Users className="h-4 w-4" />
					<span>Share</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">
					<LogOut className="h-4 w-4" />
					<span>Remove</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
}

/**
 * Custom styled dropdown
 */
export const CustomStyled: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className="bg-blue-500 hover:bg-blue-600">Menu</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
				<DropdownMenuLabel className="text-blue-700 dark:text-blue-300">
					My Account
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="bg-blue-200 dark:bg-blue-800" />
				<DropdownMenuGroup>
					<DropdownMenuItem className="focus:bg-blue-100 dark:focus:bg-blue-900 focus:text-blue-700 dark:focus:text-blue-300">
						<User className="h-4 w-4 text-blue-500" />
						<span>Profile</span>
					</DropdownMenuItem>
					<DropdownMenuItem className="focus:bg-blue-100 dark:focus:bg-blue-900 focus:text-blue-700 dark:focus:text-blue-300">
						<Settings className="h-4 w-4 text-blue-500" />
						<span>Settings</span>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator className="bg-blue-200 dark:bg-blue-800" />
				<DropdownMenuItem className="focus:bg-blue-100 dark:focus:bg-blue-900 focus:text-blue-700 dark:focus:text-blue-300">
					<LogOut className="h-4 w-4 text-blue-500" />
					<span>Log out</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
}
