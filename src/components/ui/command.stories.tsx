import { Button } from "./button"
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "./command"
import type { Meta, StoryObj } from "@storybook/react"
import {
	CalendarIcon,
	CreditCardIcon,
	SettingsIcon,
	SmileIcon,
	UserIcon,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Command> = {
	title: "Components/Command",
	component: Command,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Command>

/**
 * Basic command menu
 */
export const Default: Story = {
	render: () => (
		<Command className="rounded-lg border shadow-md w-[400px]">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<CalendarIcon className="mr-2 h-4 w-4" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<SmileIcon className="mr-2 h-4 w-4" />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<SettingsIcon className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<UserIcon className="mr-2 h-4 w-4" />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCardIcon className="mr-2 h-4 w-4" />
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<SettingsIcon className="mr-2 h-4 w-4" />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
}

/**
 * Command dialog (modal)
 */
export const Dialog: Story = {
	render: function Render() {
		const [open, setOpen] = useState(false)

		return (
			<>
				<Button onClick={() => setOpen(true)}>Open Command Menu</Button>
				<CommandDialog open={open} onOpenChange={setOpen}>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>
								<CalendarIcon className="mr-2 h-4 w-4" />
								<span>Calendar</span>
							</CommandItem>
							<CommandItem>
								<SmileIcon className="mr-2 h-4 w-4" />
								<span>Search Emoji</span>
							</CommandItem>
							<CommandItem>
								<SettingsIcon className="mr-2 h-4 w-4" />
								<span>Settings</span>
							</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>
								<UserIcon className="mr-2 h-4 w-4" />
								<span>Profile</span>
								<CommandShortcut>⌘P</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<CreditCardIcon className="mr-2 h-4 w-4" />
								<span>Billing</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<SettingsIcon className="mr-2 h-4 w-4" />
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</CommandDialog>
			</>
		)
	},
}

/**
 * Interactive command with filtering
 */
export const WithFiltering: Story = {
	render: function Render() {
		const [value, setValue] = useState("")

		const frameworks = [
			{
				value: "next.js",
				label: "Next.js",
			},
			{
				value: "sveltekit",
				label: "SvelteKit",
			},
			{
				value: "nuxt",
				label: "Nuxt",
			},
			{
				value: "remix",
				label: "Remix",
			},
			{
				value: "astro",
				label: "Astro",
			},
		]

		return (
			<Command className="rounded-lg border shadow-md w-[400px]">
				<CommandInput
					placeholder="Search frameworks..."
					value={value}
					onValueChange={setValue}
				/>
				<CommandList>
					<CommandEmpty>No framework found.</CommandEmpty>
					<CommandGroup heading="Frameworks">
						{frameworks
							.filter(framework =>
								framework.label.toLowerCase().includes(value.toLowerCase()),
							)
							.map(framework => (
								<CommandItem
									key={framework.value}
									onSelect={() => {
										setValue(framework.label)
									}}
								>
									{framework.label}
								</CommandItem>
							))}
					</CommandGroup>
				</CommandList>
			</Command>
		)
	},
}

/**
 * Command with multiple groups and separators
 */
export const MultipleGroups: Story = {
	render: () => (
		<Command className="rounded-lg border shadow-md w-[400px]">
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Recently Used">
					<CommandItem>
						<CalendarIcon className="mr-2 h-4 w-4" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<SettingsIcon className="mr-2 h-4 w-4" />
						<span>Settings</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Tools">
					<CommandItem>
						<span>Calculator</span>
						<CommandShortcut>⌘C</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<span>Notes</span>
						<CommandShortcut>⌘N</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<span>Timer</span>
						<CommandShortcut>⌘T</CommandShortcut>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Help">
					<CommandItem>
						<span>Documentation</span>
					</CommandItem>
					<CommandItem>
						<span>Support</span>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
}

/**
 * Custom styled command
 */
export const CustomStyled: Story = {
	render: () => (
		<Command className="rounded-xl border-2 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800 shadow-md w-[400px]">
			<CommandInput
				placeholder="Search..."
				className="border-b-2 border-blue-200 dark:border-blue-800"
			/>
			<CommandList>
				<CommandEmpty className="text-blue-500">No results found.</CommandEmpty>
				<CommandGroup heading="Actions" className="text-blue-700">
					<CommandItem className="hover:bg-blue-100 dark:hover:bg-blue-900">
						<CalendarIcon className="mr-2 h-4 w-4 text-blue-500" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem className="hover:bg-blue-100 dark:hover:bg-blue-900">
						<SettingsIcon className="mr-2 h-4 w-4 text-blue-500" />
						<span>Settings</span>
					</CommandItem>
					<CommandItem className="hover:bg-blue-100 dark:hover:bg-blue-900">
						<UserIcon className="mr-2 h-4 w-4 text-blue-500" />
						<span>Profile</span>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	),
}
