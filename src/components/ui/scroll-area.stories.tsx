import { ScrollArea } from "./scroll-area"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof ScrollArea> = {
	title: "Components/ScrollArea",
	component: ScrollArea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ScrollArea>

/**
 * Basic scroll area with text content
 */
export const Default: Story = {
	render: () => (
		<ScrollArea className="h-72 w-48 rounded-md border">
			<div className="p-4">
				<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
				{Array.from({ length: 50 }).map((_, i) => (
					<div key={i} className="text-sm py-1.5">
						Tag {i + 1}
					</div>
				))}
			</div>
		</ScrollArea>
	),
}

/**
 * Scroll area with paragraphs of text
 */
export const TextContent: Story = {
	render: () => (
		<ScrollArea className="h-72 w-80 rounded-md border">
			<div className="p-4">
				<h4 className="mb-4 text-lg font-medium">Lorem Ipsum</h4>
				{Array.from({ length: 10 }).map((_, i) => (
					<p key={i} className="text-sm mb-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						auctor, nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget
						aliquet nisl nisl eget nisl. Nulla facilisi. Nulla facilisi. Nulla
						facilisi.
					</p>
				))}
			</div>
		</ScrollArea>
	),
}

/**
 * Scroll area with a list of items
 */
export const WithList: Story = {
	render: () => (
		<ScrollArea className="h-72 w-48 rounded-md border">
			<div className="p-4">
				<h4 className="mb-4 text-sm font-medium leading-none">Contacts</h4>
				<ul className="space-y-2">
					{contacts.map((contact, i) => (
						<li key={i}>
							<div className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent">
								<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
									{contact.name.charAt(0)}
								</div>
								<div>
									<p className="text-sm font-medium leading-none">
										{contact.name}
									</p>
									<p className="text-xs text-muted-foreground">
										{contact.email}
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</ScrollArea>
	),
}

/**
 * Horizontal scroll area
 */
export const Horizontal: Story = {
	render: () => (
		<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
			<div className="flex w-max p-4">
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={i}
						className="w-40 mx-2 shrink-0 rounded-md border p-4 flex items-center justify-center"
					>
						Item {i + 1}
					</div>
				))}
			</div>
		</ScrollArea>
	),
}

/**
 * Scroll area with a card-like container
 */
export const WithCards: Story = {
	render: () => (
		<ScrollArea className="h-96 w-80 rounded-md border">
			<div className="p-4 space-y-4">
				<h4 className="text-sm font-medium leading-none mb-4">
					Recent Articles
				</h4>
				{Array.from({ length: 10 }).map((_, i) => (
					<div key={i} className="rounded-md border p-4">
						<h5 className="text-sm font-medium leading-none mb-2">
							Article {i + 1}
						</h5>
						<p className="text-sm text-muted-foreground mb-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
						<div className="flex justify-between items-center text-xs">
							<span>5 min read</span>
							<span>Jun {i + 1}, 2023</span>
						</div>
					</div>
				))}
			</div>
		</ScrollArea>
	),
}

/**
 * Scroll area with a grid layout
 */
export const GridLayout: Story = {
	render: () => (
		<ScrollArea className="h-96 w-96 rounded-md border">
			<div className="p-4">
				<h4 className="text-sm font-medium leading-none mb-4">Grid Items</h4>
				<div className="grid grid-cols-2 gap-4">
					{Array.from({ length: 20 }).map((_, i) => (
						<div
							key={i}
							className="aspect-square rounded-md border flex items-center justify-center bg-accent/50"
						>
							<span className="text-sm">Item {i + 1}</span>
						</div>
					))}
				</div>
			</div>
		</ScrollArea>
	),
}

/**
 * Scroll area with a custom width and height
 */
export const CustomSizes: Story = {
	render: () => (
		<div className="space-y-4">
			<ScrollArea className="h-40 w-60 rounded-md border">
				<div className="p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">Small</h4>
					{Array.from({ length: 20 }).map((_, i) => (
						<div key={i} className="text-sm py-1.5">
							Item {i + 1}
						</div>
					))}
				</div>
			</ScrollArea>

			<ScrollArea className="h-60 w-96 rounded-md border">
				<div className="p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">Medium</h4>
					{Array.from({ length: 20 }).map((_, i) => (
						<div key={i} className="text-sm py-1.5">
							Item {i + 1}
						</div>
					))}
				</div>
			</ScrollArea>
		</div>
	),
}

/**
 * Styled scroll area
 */
export const StyledScrollArea: Story = {
	render: () => (
		<ScrollArea className="h-72 w-48 rounded-md border border-primary/50 bg-primary/5">
			<div className="p-4">
				<h4 className="mb-4 text-sm font-medium leading-none text-primary">
					Tags
				</h4>
				{Array.from({ length: 50 }).map((_, i) => (
					<div
						key={i}
						className="text-sm py-1.5 text-primary/80 hover:text-primary"
					>
						Tag {i + 1}
					</div>
				))}
			</div>
		</ScrollArea>
	),
}

// Sample data
const contacts = [
	{ name: "John Doe", email: "john@example.com" },
	{ name: "Jane Smith", email: "jane@example.com" },
	{ name: "Robert Johnson", email: "robert@example.com" },
	{ name: "Emily Davis", email: "emily@example.com" },
	{ name: "Michael Brown", email: "michael@example.com" },
	{ name: "Sarah Wilson", email: "sarah@example.com" },
	{ name: "David Taylor", email: "david@example.com" },
	{ name: "Lisa Anderson", email: "lisa@example.com" },
	{ name: "Thomas Jackson", email: "thomas@example.com" },
	{ name: "Jennifer White", email: "jennifer@example.com" },
	{ name: "Richard Harris", email: "richard@example.com" },
	{ name: "Jessica Martin", email: "jessica@example.com" },
	{ name: "Charles Thompson", email: "charles@example.com" },
	{ name: "Mary Garcia", email: "mary@example.com" },
	{ name: "James Martinez", email: "james@example.com" },
]
