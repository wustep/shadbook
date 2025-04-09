import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "./context-menu"
import type { Meta, StoryObj } from "@storybook/react"
import {
	Copy,
	CreditCard,
	Download,
	FileEdit,
	FileText,
	Keyboard,
	MessageSquare,
	Save,
	Share,
	Trash,
	User,
} from "lucide-react"

const meta: Meta<typeof ContextMenu> = {
	title: "Components/ContextMenu",
	component: ContextMenu,
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
type Story = StoryObj<typeof ContextMenu>

/**
 * Basic context menu with items
 */
export const Default: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Reload
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					Save As...
					<ContextMenuShortcut>⌘S</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Print...
					<ContextMenuShortcut>⌘P</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
}

/**
 * Context menu with checkbox and radio items
 */
export const WithCheckboxAndRadio: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuCheckboxItem checked>
					Show Bookmarks Bar
					<ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
				</ContextMenuCheckboxItem>
				<ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
				<ContextMenuSeparator />
				<ContextMenuRadioGroup value="pedro">
					<ContextMenuLabel>People</ContextMenuLabel>
					<ContextMenuRadioItem value="pedro">
						Pedro Duarte
					</ContextMenuRadioItem>
					<ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
				</ContextMenuRadioGroup>
			</ContextMenuContent>
		</ContextMenu>
	),
}

/**
 * Context menu with submenu
 */
export const WithSubmenu: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				Right click here
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					Back
					<ContextMenuShortcut>⌘[</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Forward
					<ContextMenuShortcut>⌘]</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSub>
					<ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
					<ContextMenuSubContent className="w-48">
						<ContextMenuItem>
							Save Page As...
							<ContextMenuShortcut>⌘S</ContextMenuShortcut>
						</ContextMenuItem>
						<ContextMenuItem>Create Shortcut...</ContextMenuItem>
						<ContextMenuItem>Name Window...</ContextMenuItem>
						<ContextMenuSeparator />
						<ContextMenuItem>Developer Tools</ContextMenuItem>
					</ContextMenuSubContent>
				</ContextMenuSub>
				<ContextMenuSeparator />
				<ContextMenuItem>
					Print...
					<ContextMenuShortcut>⌘P</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
}

/**
 * File actions context menu
 */
export const FileActions: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm bg-muted/20">
				<FileText className="h-10 w-10 text-muted-foreground" />
				<span className="mt-2">document.txt</span>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					<FileEdit className="mr-2 h-4 w-4" />
					Edit
				</ContextMenuItem>
				<ContextMenuItem>
					<Copy className="mr-2 h-4 w-4" />
					Copy
					<ContextMenuShortcut>⌘C</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					<Share className="mr-2 h-4 w-4" />
					Share
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					<Download className="mr-2 h-4 w-4" />
					Download
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">
					<Trash className="mr-2 h-4 w-4" />
					Delete
					<ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
}

/**
 * Profile context menu
 */
export const ProfileActions: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex flex-col h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed">
				<div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
					<User className="h-8 w-8 text-muted-foreground" />
				</div>
				<p className="mt-2 font-medium">John Doe</p>
				<p className="text-sm text-muted-foreground">@johndoe</p>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem>
					<User className="mr-2 h-4 w-4" />
					View Profile
				</ContextMenuItem>
				<ContextMenuItem>
					<MessageSquare className="mr-2 h-4 w-4" />
					Send Message
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					<CreditCard className="mr-2 h-4 w-4" />
					Subscription
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem variant="destructive">Block User</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
}

/**
 * Multiple context menus in a grid
 */
export const MultipleContextMenus: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4">
			{[1, 2, 3, 4].map(item => (
				<ContextMenu key={item}>
					<ContextMenuTrigger className="flex h-[100px] w-[150px] items-center justify-center rounded-md border border-dashed text-sm">
						Item {item}
					</ContextMenuTrigger>
					<ContextMenuContent className="w-64">
						<ContextMenuLabel>Item {item}</ContextMenuLabel>
						<ContextMenuSeparator />
						<ContextMenuItem>
							<Copy className="mr-2 h-4 w-4" />
							Copy
						</ContextMenuItem>
						<ContextMenuItem>
							<Save className="mr-2 h-4 w-4" />
							Save
						</ContextMenuItem>
						<ContextMenuItem variant="destructive">
							<Trash className="mr-2 h-4 w-4" />
							Delete
						</ContextMenuItem>
					</ContextMenuContent>
				</ContextMenu>
			))}
		</div>
	),
}

/**
 * Context menu with keyboard shortcut reference
 */
export const KeyboardShortcutsMenu: Story = {
	render: () => (
		<ContextMenu>
			<ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
				<Keyboard className="h-10 w-10 text-muted-foreground mb-2" />
				<span>Keyboard Shortcuts</span>
			</ContextMenuTrigger>
			<ContextMenuContent className="w-72">
				<ContextMenuLabel>Keyboard Shortcuts</ContextMenuLabel>
				<ContextMenuSeparator />
				<ContextMenuItem disabled>
					Cut
					<ContextMenuShortcut>⌘X</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Copy
					<ContextMenuShortcut>⌘C</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Paste
					<ContextMenuShortcut>⌘V</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					Select All
					<ContextMenuShortcut>⌘A</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Find
					<ContextMenuShortcut>⌘F</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuItem>
					Replace
					<ContextMenuShortcut>⌘R</ContextMenuShortcut>
				</ContextMenuItem>
				<ContextMenuSeparator />
				<ContextMenuItem>
					Show All Commands
					<ContextMenuShortcut>⌘⇧P</ContextMenuShortcut>
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	),
}
