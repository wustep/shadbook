import type { Meta, StoryObj } from "@storybook/react"
import {
	ArrowLeft,
	ArrowRight,
	ArrowUp,
	BellRing,
	Check,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Circle,
	Copy,
	ExternalLink,
	GripVertical,
	Info,
	Loader2,
	Menu,
	Minus,
	Moon,
	MoreHorizontal,
	PanelLeft,
	Plus,
	Search,
	Settings,
	SunMedium,
	User,
	X,
} from "lucide-react"

import { cn } from "@/lib/utils"

const meta: Meta = {
	title: "shadcn/Icons",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj

/**
 * Common lucide icons used by shadcn/ui components
 */
export const IconGrid: Story = {
	render: () => {
		const icons = [
			{ Icon: ArrowLeft, name: "ArrowLeft" },
			{ Icon: ArrowRight, name: "ArrowRight" },
			{ Icon: BellRing, name: "BellRing" },
			{ Icon: Check, name: "Check" },
			{ Icon: ChevronDown, name: "ChevronDown" },
			{ Icon: ChevronLeft, name: "ChevronLeft" },
			{ Icon: ChevronRight, name: "ChevronRight" },
			{ Icon: Circle, name: "Circle" },
			{ Icon: Copy, name: "Copy" },
			{ Icon: ExternalLink, name: "ExternalLink" },
			{ Icon: GripVertical, name: "GripVertical" },
			{ Icon: Info, name: "Info" },
			{ Icon: Loader2, name: "Loader2" },
			{ Icon: Menu, name: "Menu" },
			{ Icon: Minus, name: "Minus" },
			{ Icon: Moon, name: "Moon" },
			{ Icon: MoreHorizontal, name: "MoreHorizontal" },
			{ Icon: PanelLeft, name: "PanelLeft" },
			{ Icon: Plus, name: "Plus" },
			{ Icon: Search, name: "Search" },
			{ Icon: Settings, name: "Settings" },
			{ Icon: SunMedium, name: "SunMedium" },
			{ Icon: User, name: "User" },
			{ Icon: X, name: "X" },
		]

		return (
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl">
				{icons.map(({ Icon, name }) => (
					<div
						key={name}
						className="flex flex-col items-center justify-center p-4 border rounded-lg bg-background transition-colors"
					>
						<Icon className="h-6 w-6 mb-2" />
						<span className="text-xs text-muted-foreground text-center">
							{name}
						</span>
					</div>
				))}
			</div>
		)
	},
}

/**
 * Icon size variations
 */
export const Sizes: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{[
				{ Icon: ChevronDown, name: "ChevronDown" },
				{ Icon: Search, name: "Search" },
				{ Icon: Menu, name: "Menu" },
				{ Icon: X, name: "X" },
			].map(({ Icon, name }) => (
				<div key={name} className="flex items-end gap-4">
					<div className="flex flex-col items-center">
						<Icon className="h-3 w-3 mb-2" />
						<span className="text-xs text-muted-foreground">3×3</span>
					</div>
					<div className="flex flex-col items-center">
						<Icon className="h-4 w-4 mb-2" />
						<span className="text-xs text-muted-foreground">4×4</span>
					</div>
					<div className="flex flex-col items-center">
						<Icon className="h-5 w-5 mb-2" />
						<span className="text-xs text-muted-foreground">5×5</span>
					</div>
					<div className="flex flex-col items-center">
						<Icon className="h-6 w-6 mb-2" />
						<span className="text-xs text-muted-foreground">6×6</span>
					</div>
					<div className="flex flex-col items-center">
						<Icon className="h-8 w-8 mb-2" />
						<span className="text-xs text-muted-foreground">8×8</span>
					</div>
				</div>
			))}
		</div>
	),
}

/**
 * Interactive icons in buttons
 */
export const InteractiveIcons: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<button className="p-2 bg-background hover:bg-accent rounded-full transition-colors">
				<ChevronLeft className="h-5 w-5" />
			</button>
			<button className="p-2 bg-background hover:bg-accent rounded-full transition-colors">
				<ChevronRight className="h-5 w-5" />
			</button>
			<button className="p-2 bg-background hover:bg-accent rounded-full transition-colors">
				<X className="h-5 w-5" />
			</button>
			<button className="p-2 bg-background hover:bg-accent rounded-full transition-colors">
				<Menu className="h-5 w-5" />
			</button>
			<button className="p-2 bg-background hover:bg-accent rounded-full transition-colors">
				<Settings className="h-5 w-5" />
			</button>
			<button className="p-2 bg-background hover:bg-accent rounded-full transition-colors">
				<User className="h-5 w-5" />
			</button>
		</div>
	),
}

/**
 * Icons with text in buttons
 */
export const WithText: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<button className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-accent transition-colors">
				<ArrowLeft className="h-4 w-4" />
				<span>Back</span>
			</button>
			<button className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-accent transition-colors">
				<span>Next</span>
				<ArrowRight className="h-4 w-4" />
			</button>
			<button className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-accent transition-colors">
				<Menu className="h-4 w-4" />
				<span>Menu</span>
			</button>
			<button className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-accent transition-colors">
				<Settings className="h-4 w-4" />
				<span>Settings</span>
			</button>
		</div>
	),
}

/**
 * Icons in form inputs
 */
export const InInputs: Story = {
	render: () => (
		<div className="space-y-4 max-w-sm">
			<div className="relative">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					type="text"
					placeholder="Search..."
					className="w-full pl-10 py-2 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
			<div className="relative">
				<User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
				<input
					type="text"
					placeholder="Username"
					className="w-full pl-10 py-2 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
				/>
			</div>
		</div>
	),
}

/**
 * Icons with different colors
 */
export const ColoredIcons: Story = {
	render: () => (
		<div className="flex flex-wrap gap-6">
			<div className="flex flex-col items-center">
				<Info className="h-8 w-8 text-blue-500" />
				<span className="text-xs mt-2">Information</span>
			</div>
			<div className="flex flex-col items-center">
				<Check className="h-8 w-8 text-green-500" />
				<span className="text-xs mt-2">Success</span>
			</div>
			<div className="flex flex-col items-center">
				<X className="h-8 w-8 text-red-500" />
				<span className="text-xs mt-2">Error</span>
			</div>
			<div className="flex flex-col items-center">
				<BellRing className="h-8 w-8 text-amber-500" />
				<span className="text-xs mt-2">Warning</span>
			</div>
			<div className="flex flex-col items-center">
				<Moon className="h-8 w-8 text-purple-500" />
				<span className="text-xs mt-2">Dark Mode</span>
			</div>
			<div className="flex flex-col items-center">
				<SunMedium className="h-8 w-8 text-yellow-500" />
				<span className="text-xs mt-2">Light Mode</span>
			</div>
		</div>
	),
}

/**
 * Icons with animated states
 */
export const AnimatedIcons: Story = {
	render: () => {
		const spinnerClasses = "animate-spin"
		const pulseClasses = "animate-pulse"
		const bounceClasses = "animate-bounce"

		return (
			<div className="flex flex-wrap gap-8 items-center">
				<div className="flex flex-col items-center">
					<Loader2 className={cn("h-8 w-8", spinnerClasses)} />
					<span className="text-xs mt-2">Spinner</span>
				</div>
				<div className="flex flex-col items-center">
					<BellRing className={cn("h-8 w-8", pulseClasses)} />
					<span className="text-xs mt-2">Pulse</span>
				</div>
				<div className="flex flex-col items-center">
					<ArrowUp className={cn("h-8 w-8", bounceClasses)} />
					<span className="text-xs mt-2">Bounce</span>
				</div>
			</div>
		)
	},
}
