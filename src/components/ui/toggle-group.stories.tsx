import { ToggleGroup, ToggleGroupItem } from "./toggle-group"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AlignCenter,
	AlignJustify,
	AlignLeft,
	AlignRight,
	Bold,
	Grid2X2,
	Italic,
	LayoutList,
	Rows3,
	Underline,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof ToggleGroup> = {
	title: "Components/ToggleGroup",
	component: ToggleGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["single", "multiple"],
		},
		variant: {
			control: "select",
			options: ["default", "outline"],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg"],
		},
	},
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

/**
 * Basic toggle group with single selection
 */
export const Default: Story = {
	render: () => (
		<ToggleGroup type="single" defaultValue="center">
			<ToggleGroupItem value="left">Left</ToggleGroupItem>
			<ToggleGroupItem value="center">Center</ToggleGroupItem>
			<ToggleGroupItem value="right">Right</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Toggle group with outline variant
 */
export const Outline: Story = {
	render: () => (
		<ToggleGroup type="single" variant="outline" defaultValue="center">
			<ToggleGroupItem value="left">Left</ToggleGroupItem>
			<ToggleGroupItem value="center">Center</ToggleGroupItem>
			<ToggleGroupItem value="right">Right</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Toggle group with multiple selection
 */
export const Multiple: Story = {
	render: () => (
		<ToggleGroup type="multiple" defaultValue={["bold"]}>
			<ToggleGroupItem value="bold">Bold</ToggleGroupItem>
			<ToggleGroupItem value="italic">Italic</ToggleGroupItem>
			<ToggleGroupItem value="underline">Underline</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Toggle group with icons
 */
export const WithIcons: Story = {
	render: () => (
		<ToggleGroup type="single" defaultValue="center">
			<ToggleGroupItem value="left" aria-label="Align left">
				<AlignLeft className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<AlignCenter className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<AlignRight className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="justify" aria-label="Align justify">
				<AlignJustify className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Toggle group with icons and labels
 */
export const WithIconsAndLabels: Story = {
	render: () => (
		<ToggleGroup type="multiple" defaultValue={["bold"]}>
			<ToggleGroupItem value="bold">
				<Bold className="h-4 w-4 mr-1" />
				Bold
			</ToggleGroupItem>
			<ToggleGroupItem value="italic">
				<Italic className="h-4 w-4 mr-1" />
				Italic
			</ToggleGroupItem>
			<ToggleGroupItem value="underline">
				<Underline className="h-4 w-4 mr-1" />
				Underline
			</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Different sizes of toggle groups
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<ToggleGroup type="single" size="sm" defaultValue="center">
				<ToggleGroupItem value="left">
					<AlignLeft className="h-3 w-3" />
				</ToggleGroupItem>
				<ToggleGroupItem value="center">
					<AlignCenter className="h-3 w-3" />
				</ToggleGroupItem>
				<ToggleGroupItem value="right">
					<AlignRight className="h-3 w-3" />
				</ToggleGroupItem>
			</ToggleGroup>

			<ToggleGroup type="single" size="default" defaultValue="center">
				<ToggleGroupItem value="left">
					<AlignLeft className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="center">
					<AlignCenter className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="right">
					<AlignRight className="h-4 w-4" />
				</ToggleGroupItem>
			</ToggleGroup>

			<ToggleGroup type="single" size="lg" defaultValue="center">
				<ToggleGroupItem value="left">
					<AlignLeft className="h-5 w-5" />
				</ToggleGroupItem>
				<ToggleGroupItem value="center">
					<AlignCenter className="h-5 w-5" />
				</ToggleGroupItem>
				<ToggleGroupItem value="right">
					<AlignRight className="h-5 w-5" />
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	),
}

/**
 * Disabled state
 */
export const Disabled: Story = {
	render: () => (
		<ToggleGroup type="single" defaultValue="center">
			<ToggleGroupItem value="left">Left</ToggleGroupItem>
			<ToggleGroupItem value="center">Center</ToggleGroupItem>
			<ToggleGroupItem value="right" disabled>
				Right
			</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Common use case: view options for a list
 */
export const ViewOptions: Story = {
	render: () => (
		<ToggleGroup type="single" variant="outline" defaultValue="grid">
			<ToggleGroupItem value="grid" aria-label="Grid view">
				<Grid2X2 className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="list" aria-label="List view">
				<LayoutList className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="columns" aria-label="Columns view">
				<Rows3 className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Common use case: text alignment
 */
export const TextAlignment: Story = {
	render: () => (
		<ToggleGroup type="single" variant="outline" defaultValue="left">
			<ToggleGroupItem value="left" aria-label="Align text left">
				<AlignLeft className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align text center">
				<AlignCenter className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align text right">
				<AlignRight className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	),
}

/**
 * Interactive demo with controlled state
 */
export const ControlledState: Story = {
	render: function Render() {
		const [value, setValue] = useState("center")

		return (
			<div className="space-y-4">
				<ToggleGroup
					type="single"
					value={value}
					onValueChange={value => {
						if (value) setValue(value)
					}}
				>
					<ToggleGroupItem value="left" aria-label="Align left">
						<AlignLeft className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="center" aria-label="Align center">
						<AlignCenter className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="right" aria-label="Align right">
						<AlignRight className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>

				<div className="text-sm">Selected value: {value}</div>
			</div>
		)
	},
}

/**
 * Custom styled toggle group
 */
export const CustomStyled: Story = {
	render: () => (
		<ToggleGroup
			type="single"
			defaultValue="center"
			className="bg-blue-50 p-1 rounded-lg"
		>
			<ToggleGroupItem
				value="left"
				className="data-[state=on]:bg-blue-600 data-[state=on]:text-white text-blue-700"
			>
				Left
			</ToggleGroupItem>
			<ToggleGroupItem
				value="center"
				className="data-[state=on]:bg-blue-600 data-[state=on]:text-white text-blue-700"
			>
				Center
			</ToggleGroupItem>
			<ToggleGroupItem
				value="right"
				className="data-[state=on]:bg-blue-600 data-[state=on]:text-white text-blue-700"
			>
				Right
			</ToggleGroupItem>
		</ToggleGroup>
	),
}
