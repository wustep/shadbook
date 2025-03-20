import { Checkbox } from "./checkbox"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Checkbox> = {
	title: "shadcn/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Checkbox>

/**
 * Default checkbox
 */
export const Default: Story = {
	render: () => <Checkbox />,
}

/**
 * Checked checkbox
 */
export const Checked: Story = {
	render: () => <Checkbox defaultChecked />,
}

/**
 * Checkbox with label
 */
export const WithLabel: Story = {
	render: () => (
		<div className="flex items-center space-x-2">
			<Checkbox id="terms" />
			<Label htmlFor="terms">Accept terms and conditions</Label>
		</div>
	),
}

/**
 * Disabled states
 */
export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center space-x-2">
				<Checkbox id="disabled" disabled />
				<Label htmlFor="disabled" className="text-muted-foreground">
					Disabled unchecked
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox id="disabled-checked" disabled defaultChecked />
				<Label htmlFor="disabled-checked" className="text-muted-foreground">
					Disabled checked
				</Label>
			</div>
		</div>
	),
}

/**
 * Checkbox group
 */
export const CheckboxGroup: Story = {
	render: function Render() {
		const [items, setItems] = useState({
			apple: false,
			banana: true,
			orange: false,
			pear: false,
		})

		return (
			<div className="space-y-4">
				<div className="text-sm font-medium">Select your favorite fruits:</div>
				<div className="space-y-2">
					{Object.entries(items).map(([item, checked]) => (
						<div key={item} className="flex items-center space-x-2">
							<Checkbox
								id={item}
								checked={checked}
								onCheckedChange={() =>
									setItems(prev => ({ ...prev, [item]: !prev[item] }))
								}
							/>
							<Label htmlFor={item} className="capitalize">
								{item}
							</Label>
						</div>
					))}
				</div>
			</div>
		)
	},
}

/**
 * Checkbox in a form
 */
export const InForm: Story = {
	render: () => (
		<form className="w-80 space-y-6 rounded-lg border p-4">
			<div className="space-y-2">
				<Label htmlFor="email">Email</Label>
				<input
					id="email"
					type="email"
					className="w-full rounded-md border px-3 py-2"
					placeholder="m@example.com"
				/>
			</div>
			<div className="space-y-4">
				<div className="flex items-center space-x-2">
					<Checkbox id="marketing" />
					<Label htmlFor="marketing">Receive marketing emails</Label>
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox id="newsletter" defaultChecked />
					<Label htmlFor="newsletter">Receive newsletter</Label>
				</div>
			</div>
			<button
				type="submit"
				className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
			>
				Subscribe
			</button>
		</form>
	),
}

/**
 * Custom styled checkbox
 */
export const CustomStyled: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex items-center space-x-2">
				<Checkbox
					id="custom1"
					className="border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 focus-visible:ring-blue-300/50"
					defaultChecked
				/>
				<Label htmlFor="custom1" className="text-blue-600">
					Blue checkbox
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox
					id="custom2"
					className="rounded-full border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
					defaultChecked
				/>
				<Label htmlFor="custom2" className="text-green-600">
					Round green checkbox
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox
					id="custom3"
					className="h-6 w-6 rounded-md border-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
					defaultChecked
				/>
				<Label htmlFor="custom3" className="text-purple-600">
					Large purple checkbox
				</Label>
			</div>
		</div>
	),
}
