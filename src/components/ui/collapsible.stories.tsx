import { Button } from "./button"
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "./collapsible"
import type { Meta, StoryObj } from "@storybook/react"
import {
	Bell,
	ChevronDown,
	ChevronsUpDown,
	ChevronUp,
	Cloud,
	Plus,
	Settings,
	User,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Collapsible> = {
	title: "shadcn/Collapsible",
	component: Collapsible,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Collapsible>

/**
 * Basic collapsible component with a trigger and content
 */
export const Default: Story = {
	render: () => (
		<Collapsible className="w-[350px] space-y-2">
			<div className="flex items-center justify-between space-x-4 px-4">
				<h4 className="text-sm font-semibold">
					What&apos;s included in the PRO plan?
				</h4>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" size="sm" className="w-9 p-0">
						<ChevronsUpDown className="h-4 w-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="rounded-md border px-4 py-3 font-mono text-sm">
				Current plan: Free
			</div>
			<CollapsibleContent className="space-y-2">
				<div className="rounded-md border px-4 py-3 font-mono text-sm">
					<ul className="list-disc pl-5 space-y-2">
						<li>Additional storage: 50GB</li>
						<li>Premium support</li>
						<li>Custom domain</li>
						<li>Analytics dashboard</li>
					</ul>
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
}

/**
 * Collapsible with animated content transitions
 */
export const Animated: Story = {
	render: () => (
		<Collapsible className="w-[350px]">
			<div className="flex items-center justify-between space-x-4 px-4">
				<h4 className="text-sm font-semibold">Settings</h4>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" size="sm" className="w-9 p-0">
						<ChevronDown className="h-4 w-4 transition-transform duration-200 [&[data-state=open]>svg]:rotate-180" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
				<div className="space-y-2 px-4 py-3">
					<div className="rounded-md border px-4 py-2 text-sm flex items-center gap-2">
						<Settings className="h-4 w-4" />
						<span>App Settings</span>
					</div>
					<div className="rounded-md border px-4 py-2 text-sm flex items-center gap-2">
						<User className="h-4 w-4" />
						<span>User Settings</span>
					</div>
					<div className="rounded-md border px-4 py-2 text-sm flex items-center gap-2">
						<Bell className="h-4 w-4" />
						<span>Notifications</span>
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
}

/**
 * Controlled collapsible where the state is managed externally
 */
export const Controlled: Story = {
	render: function ControlledCollapsible() {
		const [isOpen, setIsOpen] = useState(false)

		return (
			<Collapsible
				open={isOpen}
				onOpenChange={setIsOpen}
				className="w-[350px] space-y-2"
			>
				<div className="flex items-center justify-between space-x-4 px-4">
					<h4 className="text-sm font-semibold">Server Status</h4>
					<div className="flex items-center gap-2">
						<span className="text-xs text-muted-foreground">
							{isOpen ? "Hide details" : "Show details"}
						</span>
						<CollapsibleTrigger asChild>
							<Button variant="ghost" size="sm" className="w-9 p-0">
								{isOpen ? (
									<ChevronUp className="h-4 w-4" />
								) : (
									<ChevronDown className="h-4 w-4" />
								)}
								<span className="sr-only">Toggle</span>
							</Button>
						</CollapsibleTrigger>
					</div>
				</div>
				<div className="rounded-md border px-4 py-3 flex items-center gap-2">
					<div className="h-2 w-2 rounded-full bg-green-500" />
					<span className="text-sm">All systems operational</span>
				</div>
				<CollapsibleContent className="space-y-2">
					<div className="rounded-md border px-4 py-3 font-mono text-sm">
						<div className="flex justify-between items-center border-b pb-2 mb-2">
							<span>API</span>
							<span className="text-green-500">Operational</span>
						</div>
						<div className="flex justify-between items-center border-b pb-2 mb-2">
							<span>Database</span>
							<span className="text-green-500">Operational</span>
						</div>
						<div className="flex justify-between items-center">
							<span>Storage</span>
							<span className="text-green-500">Operational</span>
						</div>
					</div>
				</CollapsibleContent>
			</Collapsible>
		)
	},
}

/**
 * Collapsible used for FAQ sections
 */
export const FAQ: Story = {
	render: () => (
		<div className="w-[350px] space-y-2">
			<Collapsible className="space-y-2 border rounded-md p-2">
				<div className="flex items-center justify-between px-2">
					<h4 className="text-sm font-medium">How do I reset my password?</h4>
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm" className="p-1 h-7 w-7">
							<Plus className="h-4 w-4 transition-transform [&[data-state=open]>svg]:rotate-45" />
							<span className="sr-only">Toggle</span>
						</Button>
					</CollapsibleTrigger>
				</div>
				<CollapsibleContent className="px-2 text-sm text-muted-foreground">
					You can reset your password by clicking on the "Forgot password" link
					on the login page and following the instructions sent to your email.
				</CollapsibleContent>
			</Collapsible>

			<Collapsible className="space-y-2 border rounded-md p-2">
				<div className="flex items-center justify-between px-2">
					<h4 className="text-sm font-medium">Can I cancel my subscription?</h4>
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm" className="p-1 h-7 w-7">
							<Plus className="h-4 w-4 transition-transform [&[data-state=open]>svg]:rotate-45" />
							<span className="sr-only">Toggle</span>
						</Button>
					</CollapsibleTrigger>
				</div>
				<CollapsibleContent className="px-2 text-sm text-muted-foreground">
					Yes, you can cancel your subscription at any time from your account
					settings. Refunds are processed according to our refund policy.
				</CollapsibleContent>
			</Collapsible>

			<Collapsible className="space-y-2 border rounded-md p-2">
				<div className="flex items-center justify-between px-2">
					<h4 className="text-sm font-medium">
						Where can I find documentation?
					</h4>
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm" className="p-1 h-7 w-7">
							<Plus className="h-4 w-4 transition-transform [&[data-state=open]>svg]:rotate-45" />
							<span className="sr-only">Toggle</span>
						</Button>
					</CollapsibleTrigger>
				</div>
				<CollapsibleContent className="px-2 text-sm text-muted-foreground">
					Our documentation is available at docs.example.com. You can also find
					tutorials and guides in our knowledge base.
				</CollapsibleContent>
			</Collapsible>
		</div>
	),
}

/**
 * Accordion-like collapsible group
 */
export const AccordionStyle: Story = {
	render: function AccordionStyleCollapsible() {
		const [openItem, setOpenItem] = useState<string | null>("item-1")

		const handleItemClick = (itemId: string) => {
			setOpenItem(prev => (prev === itemId ? null : itemId))
		}

		return (
			<div className="w-[350px] space-y-2 border rounded-md">
				<Collapsible
					open={openItem === "item-1"}
					onOpenChange={() => handleItemClick("item-1")}
				>
					<div className="flex items-center justify-between p-4 border-b">
						<h4 className="text-sm font-medium flex items-center gap-2">
							<Cloud className="h-4 w-4" />
							Cloud Storage
						</h4>
						<CollapsibleTrigger asChild>
							<Button variant="ghost" size="sm" className="p-1 h-7 w-7">
								<ChevronDown
									className={`h-4 w-4 transition-transform duration-200 ${
										openItem === "item-1" ? "rotate-180" : ""
									}`}
								/>
								<span className="sr-only">Toggle</span>
							</Button>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent className="p-4 text-sm">
						Configure your cloud storage settings, manage quotas, and view usage
						statistics.
					</CollapsibleContent>
				</Collapsible>

				<Collapsible
					open={openItem === "item-2"}
					onOpenChange={() => handleItemClick("item-2")}
				>
					<div className="flex items-center justify-between p-4 border-b">
						<h4 className="text-sm font-medium flex items-center gap-2">
							<User className="h-4 w-4" />
							User Permissions
						</h4>
						<CollapsibleTrigger asChild>
							<Button variant="ghost" size="sm" className="p-1 h-7 w-7">
								<ChevronDown
									className={`h-4 w-4 transition-transform duration-200 ${
										openItem === "item-2" ? "rotate-180" : ""
									}`}
								/>
								<span className="sr-only">Toggle</span>
							</Button>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent className="p-4 text-sm">
						Manage user roles, permissions, and access levels for your
						organization.
					</CollapsibleContent>
				</Collapsible>

				<Collapsible
					open={openItem === "item-3"}
					onOpenChange={() => handleItemClick("item-3")}
				>
					<div className="flex items-center justify-between p-4">
						<h4 className="text-sm font-medium flex items-center gap-2">
							<Settings className="h-4 w-4" />
							Advanced Settings
						</h4>
						<CollapsibleTrigger asChild>
							<Button variant="ghost" size="sm" className="p-1 h-7 w-7">
								<ChevronDown
									className={`h-4 w-4 transition-transform duration-200 ${
										openItem === "item-3" ? "rotate-180" : ""
									}`}
								/>
								<span className="sr-only">Toggle</span>
							</Button>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent className="p-4 text-sm">
						Configure advanced system settings, integrations, and developer
						options.
					</CollapsibleContent>
				</Collapsible>
			</div>
		)
	},
}

/**
 * Collapsible with custom styling and animations
 */
export const CustomStyling: Story = {
	render: () => (
		<Collapsible className="w-[350px] rounded-lg border shadow-sm">
			<div className="p-4 bg-primary text-primary-foreground rounded-t-lg flex items-center justify-between">
				<h4 className="text-sm font-semibold">Project Settings</h4>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="p-1 h-7 w-7 text-primary-foreground hover:bg-primary-foreground/20"
					>
						<ChevronsUpDown className="h-4 w-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="p-4 border-b">
				<div className="flex items-center gap-2">
					<div className="h-2 w-2 rounded-full bg-green-500" />
					<span className="text-sm font-medium">Active Project</span>
				</div>
				<p className="text-sm text-muted-foreground mt-1">
					Last updated: 2 hours ago
				</p>
			</div>
			<CollapsibleContent>
				<div className="p-4 space-y-3">
					<div className="flex justify-between items-center">
						<span className="text-sm">Storage Usage</span>
						<span className="text-sm font-medium">45%</span>
					</div>
					<div className="h-2 w-full bg-muted rounded-full">
						<div className="h-2 w-[45%] bg-primary rounded-full" />
					</div>
					<div className="flex justify-between items-center pt-2">
						<span className="text-sm">Members</span>
						<span className="text-sm font-medium">4/10</span>
					</div>
					<div className="flex justify-end pt-2">
						<Button size="sm" variant="outline">
							Manage Settings
						</Button>
					</div>
				</div>
			</CollapsibleContent>
		</Collapsible>
	),
}
