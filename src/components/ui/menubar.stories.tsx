import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "./menubar"
import type { Meta, StoryObj } from "@storybook/react"
import {
	CalendarIcon,
	ImageIcon,
	MicIcon,
	SquarePenIcon,
	Users2Icon,
	VideoIcon,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Menubar> = {
	title: "Components/Menubar",
	component: Menubar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Menubar>

/**
 * Basic menubar with File, Edit, View, and Help menus
 */
export const Default: Story = {
	render: () => (
		<Menubar className="w-[500px]">
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						New Tab <MenubarShortcut>⌘T</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						New Window <MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled>New Incognito Window</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Share</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Email Link</MenubarItem>
							<MenubarItem>Messages</MenubarItem>
							<MenubarItem>Notes</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						Print... <MenubarShortcut>⌘P</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Edit</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						Undo <MenubarShortcut>⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Cut <MenubarShortcut>⌘X</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Copy <MenubarShortcut>⌘C</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						Paste <MenubarShortcut>⌘V</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						Select All <MenubarShortcut>⌘A</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent>
					<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
					<MenubarCheckboxItem checked>
						Always Show Full URLs
					</MenubarCheckboxItem>
					<MenubarSeparator />
					<MenubarItem inset>
						Reload <MenubarShortcut>⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled inset>
						Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Toggle Fullscreen</MenubarItem>
					<MenubarSeparator />
					<MenubarItem inset>Hide Sidebar</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Help</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Documentation</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>Keyboard Shortcuts</MenubarItem>
					<MenubarItem>Report an Issue</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>About</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
}

/**
 * Menubar with checkboxes and radio groups
 */
export const WithSelectionControls: Story = {
	render: () => (
		<Menubar className="w-[400px]">
			<MenubarMenu>
				<MenubarTrigger>Preferences</MenubarTrigger>
				<MenubarContent>
					<MenubarLabel>Appearance</MenubarLabel>
					<MenubarSeparator />
					<MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
					<MenubarCheckboxItem>Show Activity Bar</MenubarCheckboxItem>
					<MenubarCheckboxItem>Show Panel</MenubarCheckboxItem>
					<MenubarSeparator />
					<MenubarLabel>Panel Position</MenubarLabel>
					<MenubarRadioGroup value="bottom">
						<MenubarRadioItem value="top">Top</MenubarRadioItem>
						<MenubarRadioItem value="right">Right</MenubarRadioItem>
						<MenubarRadioItem value="bottom">Bottom</MenubarRadioItem>
						<MenubarRadioItem value="left">Left</MenubarRadioItem>
					</MenubarRadioGroup>
					<MenubarSeparator />
					<MenubarLabel>Theme</MenubarLabel>
					<MenubarRadioGroup value="system">
						<MenubarRadioItem value="light">Light</MenubarRadioItem>
						<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
						<MenubarRadioItem value="system">System</MenubarRadioItem>
					</MenubarRadioGroup>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Format</MenubarTrigger>
				<MenubarContent>
					<MenubarSub>
						<MenubarSubTrigger>Text</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarRadioGroup value="normal">
								<MenubarRadioItem value="normal">Normal</MenubarRadioItem>
								<MenubarRadioItem value="bold">Bold</MenubarRadioItem>
								<MenubarRadioItem value="italic">Italic</MenubarRadioItem>
								<MenubarRadioItem value="underline">Underline</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem inset>Increase Font Size</MenubarItem>
					<MenubarItem inset>Decrease Font Size</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>Align</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarRadioGroup value="left">
								<MenubarRadioItem value="left">Left</MenubarRadioItem>
								<MenubarRadioItem value="center">Center</MenubarRadioItem>
								<MenubarRadioItem value="right">Right</MenubarRadioItem>
								<MenubarRadioItem value="justify">Justify</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarSubContent>
					</MenubarSub>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
}

/**
 * Menubar with icons and destructive items
 */
export const WithIcons: Story = {
	render: () => (
		<Menubar className="w-[450px]">
			<MenubarMenu>
				<MenubarTrigger>
					<SquarePenIcon className="mr-2 h-4 w-4" />
					Create
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<CalendarIcon className="mr-2 h-4 w-4" />
						Event
					</MenubarItem>
					<MenubarItem>
						<VideoIcon className="mr-2 h-4 w-4" />
						Meeting
					</MenubarItem>
					<MenubarItem>
						<MicIcon className="mr-2 h-4 w-4" />
						Audio Call
					</MenubarItem>
					<MenubarSeparator />
					<MenubarSub>
						<MenubarSubTrigger>
							<ImageIcon className="mr-2 h-4 w-4" />
							Media
						</MenubarSubTrigger>
						<MenubarSubContent>
							<MenubarItem>Photo Album</MenubarItem>
							<MenubarItem>Slideshow</MenubarItem>
							<MenubarItem>Collage</MenubarItem>
						</MenubarSubContent>
					</MenubarSub>
					<MenubarSeparator />
					<MenubarItem>
						<Users2Icon className="mr-2 h-4 w-4" />
						Team
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Actions</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>Rename</MenubarItem>
					<MenubarItem>Duplicate</MenubarItem>
					<MenubarSeparator />
					<MenubarItem variant="destructive">Delete</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
}

/**
 * Menubar with groups
 */
export const WithGroups: Story = {
	render: () => (
		<Menubar className="w-[500px]">
			<MenubarMenu>
				<MenubarTrigger>Insert</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarLabel>Basic Elements</MenubarLabel>
						<MenubarItem>Text Box</MenubarItem>
						<MenubarItem>Image</MenubarItem>
						<MenubarItem>Shape</MenubarItem>
					</MenubarGroup>
					<MenubarSeparator />
					<MenubarGroup>
						<MenubarLabel>Advanced</MenubarLabel>
						<MenubarItem>Chart</MenubarItem>
						<MenubarItem>Table</MenubarItem>
						<MenubarItem>Code Block</MenubarItem>
					</MenubarGroup>
					<MenubarSeparator />
					<MenubarGroup>
						<MenubarLabel>Special</MenubarLabel>
						<MenubarItem>Date</MenubarItem>
						<MenubarItem>Symbol</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Tools</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarLabel>Analysis</MenubarLabel>
						<MenubarItem>Spell Check</MenubarItem>
						<MenubarItem>Word Count</MenubarItem>
					</MenubarGroup>
					<MenubarSeparator />
					<MenubarGroup>
						<MenubarLabel>Enhance</MenubarLabel>
						<MenubarItem>AI Assistant</MenubarItem>
						<MenubarItem>Translation</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
}

/**
 * Controlled menubar with state
 */
export const Controlled: Story = {
	render: function ControlledExample() {
		const [showBookmarks, setShowBookmarks] = useState(true)
		const [panelPosition, setPanelPosition] = useState("bottom")
		const [theme, setTheme] = useState("system")

		return (
			<div className="flex flex-col gap-6">
				<Menubar className="w-[500px]">
					<MenubarMenu>
						<MenubarTrigger>Settings</MenubarTrigger>
						<MenubarContent>
							<MenubarCheckboxItem
								checked={showBookmarks}
								onCheckedChange={setShowBookmarks}
							>
								Show Bookmarks
							</MenubarCheckboxItem>
							<MenubarSeparator />
							<MenubarLabel>Panel Position</MenubarLabel>
							<MenubarRadioGroup
								value={panelPosition}
								onValueChange={setPanelPosition}
							>
								<MenubarRadioItem value="top">Top</MenubarRadioItem>
								<MenubarRadioItem value="right">Right</MenubarRadioItem>
								<MenubarRadioItem value="bottom">Bottom</MenubarRadioItem>
								<MenubarRadioItem value="left">Left</MenubarRadioItem>
							</MenubarRadioGroup>
							<MenubarSeparator />
							<MenubarLabel>Theme</MenubarLabel>
							<MenubarRadioGroup value={theme} onValueChange={setTheme}>
								<MenubarRadioItem value="light">Light</MenubarRadioItem>
								<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
								<MenubarRadioItem value="system">System</MenubarRadioItem>
							</MenubarRadioGroup>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>

				<div className="text-sm">
					<div>
						Bookmarks:{" "}
						<span className="font-medium">
							{showBookmarks ? "Visible" : "Hidden"}
						</span>
					</div>
					<div>
						Panel Position: <span className="font-medium">{panelPosition}</span>
					</div>
					<div>
						Theme: <span className="font-medium">{theme}</span>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * Custom styled menubar
 */
export const CustomStyling: Story = {
	render: () => (
		<Menubar className="w-[500px] rounded-xl bg-primary text-primary-foreground border-primary/50 shadow-md">
			<MenubarMenu>
				<MenubarTrigger className="text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/20">
					File
				</MenubarTrigger>
				<MenubarContent className="rounded-xl border-primary/20">
					<MenubarItem>New File</MenubarItem>
					<MenubarItem>Open</MenubarItem>
					<MenubarSeparator className="bg-primary/20" />
					<MenubarItem>Save</MenubarItem>
					<MenubarItem>Save As</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger className="text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/20">
					Edit
				</MenubarTrigger>
				<MenubarContent className="rounded-xl border-primary/20">
					<MenubarItem>Undo</MenubarItem>
					<MenubarItem>Redo</MenubarItem>
					<MenubarSeparator className="bg-primary/20" />
					<MenubarItem>Cut</MenubarItem>
					<MenubarItem>Copy</MenubarItem>
					<MenubarItem>Paste</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger className="text-primary-foreground hover:bg-primary-foreground/10 data-[state=open]:bg-primary-foreground/20">
					Help
				</MenubarTrigger>
				<MenubarContent className="rounded-xl border-primary/20">
					<MenubarItem>About</MenubarItem>
					<MenubarItem>Documentation</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	),
}
