import type { Meta, StoryObj } from "@storybook/react"
import {
	ArrowLeft,
	ArrowRight,
	Check,
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	Circle,
	GripVertical,
	Menu,
	Minus,
	MoreHorizontal,
	PanelLeft,
	Search,
	X,
} from "lucide-react"

const meta: Meta = {
	title: "shadcn/Icons",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj

const IconGrid = () => {
	const icons = [
		{ Icon: ChevronDown, name: "ChevronDown" },
		{ Icon: ChevronRight, name: "ChevronRight" },
		{ Icon: ChevronLeft, name: "ChevronLeft" },
		{ Icon: MoreHorizontal, name: "MoreHorizontal" },
		{ Icon: ArrowLeft, name: "ArrowLeft" },
		{ Icon: ArrowRight, name: "ArrowRight" },
		{ Icon: Search, name: "Search" },
		{ Icon: X, name: "X" },
		{ Icon: Circle, name: "Circle" },
		{ Icon: Check, name: "Check" },
		{ Icon: Menu, name: "Menu" },
		{ Icon: Minus, name: "Minus" },
		{ Icon: GripVertical, name: "GripVertical" },
		{ Icon: PanelLeft, name: "PanelLeft" },
	]

	return (
		<div className="p-6">
			<h2 className="text-2xl font-bold mb-6">Lucide Icons in shadcn/ui</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{icons.map(({ Icon, name }) => (
					<div
						key={name}
						className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-slate-100 transition-colors"
					>
						<Icon className="h-6 w-6 mb-2" />
						<span className="text-sm text-gray-600">{name}</span>
					</div>
				))}
			</div>

			<div className="mt-8">
				<h3 className="text-xl font-semibold mb-4">Size Variations</h3>
				<div className="flex items-center gap-4">
					<div className="flex flex-col items-center">
						<ChevronDown className="h-4 w-4" />
						<span className="text-xs mt-1">Small</span>
					</div>
					<div className="flex flex-col items-center">
						<ChevronDown className="h-6 w-6" />
						<span className="text-xs mt-1">Medium</span>
					</div>
					<div className="flex flex-col items-center">
						<ChevronDown className="h-8 w-8" />
						<span className="text-xs mt-1">Large</span>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<h3 className="text-xl font-semibold mb-4">Common Use Cases</h3>
				<div className="space-y-4">
					<button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-slate-100">
						<Menu className="h-4 w-4" />
						<span>Menu Button</span>
					</button>

					<div className="flex items-center gap-2 px-4 py-2 border rounded-md">
						<Search className="h-4 w-4 text-gray-500" />
						<input
							type="text"
							placeholder="Search..."
							className="outline-none bg-transparent"
						/>
					</div>

					<button className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-slate-100">
						<ArrowLeft className="h-4 w-4" />
						<span>Back</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export const Default: Story = {
	render: () => <IconGrid />,
}

export const IconSizes: Story = {
	render: () => (
		<div className="p-6 space-y-4">
			<h3 className="text-lg font-semibold">Icon Sizes</h3>
			<div className="flex flex-wrap gap-8">
				{[ChevronDown, Search, Menu, X].map((Icon, index) => (
					<div key={index} className="flex items-end gap-4">
						<Icon className="h-4 w-4" />
						<Icon className="h-6 w-6" />
						<Icon className="h-8 w-8" />
					</div>
				))}
			</div>
		</div>
	),
}

export const InteractiveIcons: Story = {
	render: () => (
		<div className="p-6 space-y-6">
			<h3 className="text-lg font-semibold">Interactive Icons</h3>
			<div className="flex flex-wrap gap-4">
				<button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
					<ChevronLeft className="h-5 w-5" />
				</button>
				<button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
					<ChevronRight className="h-5 w-5" />
				</button>
				<button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
					<X className="h-5 w-5" />
				</button>
				<button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
					<Menu className="h-5 w-5" />
				</button>
			</div>
		</div>
	),
}
