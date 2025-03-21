import { Checkbox } from "./checkbox"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import { useEffect, useRef, useState } from "react"

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
 * Various checkbox states
 */
export const States: Story = {
	render: () => {
		// Use a function component for indeterminate state
		const IndeterminateCheckbox = () => {
			const checkboxRef = useRef<HTMLButtonElement>(null)

			useEffect(() => {
				if (checkboxRef.current) {
					// Using DOM API directly
					const element = checkboxRef.current as unknown as HTMLInputElement
					element.indeterminate = true
				}
			}, [])

			return (
				<Checkbox
					id="indeterminate"
					ref={checkboxRef}
					className="data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary"
				/>
			)
		}

		return (
			<div className="flex flex-wrap gap-8">
				<div className="flex items-center space-x-2">
					<Checkbox id="default" />
					<Label htmlFor="default">Default</Label>
				</div>

				<div className="flex items-center space-x-2">
					<Checkbox id="checked" defaultChecked />
					<Label htmlFor="checked">Checked</Label>
				</div>

				<div className="flex items-center space-x-2">
					<Checkbox id="disabled" disabled />
					<Label htmlFor="disabled" className="text-muted-foreground">
						Disabled
					</Label>
				</div>

				<div className="flex items-center space-x-2">
					<Checkbox id="disabled-checked" disabled defaultChecked />
					<Label htmlFor="disabled-checked" className="text-muted-foreground">
						Disabled checked
					</Label>
				</div>

				<div className="flex items-center space-x-2">
					<IndeterminateCheckbox />
					<Label htmlFor="indeterminate">Indeterminate</Label>
				</div>
			</div>
		)
	},
}

/**
 * Checkbox group for multiple selections
 */
export const CheckboxGroup: Story = {
	render: function CheckboxGroupComponent() {
		type ItemsState = {
			apple: boolean
			banana: boolean
			orange: boolean
			pear: boolean
			mango: boolean
			strawberry: boolean
		}

		const [items, setItems] = useState<ItemsState>({
			apple: false,
			banana: true,
			orange: false,
			pear: false,
			mango: true,
			strawberry: false,
		})

		const selectAllRef = useRef<HTMLButtonElement>(null)
		const selectedCount = Object.values(items).filter(Boolean).length
		const totalCount = Object.keys(items).length
		const isIndeterminate = selectedCount > 0 && selectedCount < totalCount

		useEffect(() => {
			if (selectAllRef.current) {
				// Using DOM API directly
				const element = selectAllRef.current as unknown as HTMLInputElement
				element.indeterminate = isIndeterminate
			}
		}, [isIndeterminate])

		const handleSelectAll = () => {
			const allSelected = Object.values(items).every(v => v === true)
			const newValue = !allSelected
			setItems({
				apple: newValue,
				banana: newValue,
				orange: newValue,
				pear: newValue,
				mango: newValue,
				strawberry: newValue,
			})
		}

		return (
			<div className="space-y-4 w-[280px]">
				<div className="flex items-center justify-between">
					<div className="text-sm font-medium">
						Select your favorite fruits:
					</div>
					<div className="text-xs text-muted-foreground">
						{selectedCount} of {totalCount} selected
					</div>
				</div>

				<div className="flex items-center space-x-2 pb-2 border-b">
					<Checkbox
						id="select-all"
						ref={selectAllRef}
						checked={selectedCount === totalCount}
						onCheckedChange={handleSelectAll}
					/>
					<Label htmlFor="select-all" className="font-medium">
						{selectedCount === totalCount ? "Deselect all" : "Select all"}
					</Label>
				</div>

				<div className="space-y-2">
					{Object.entries(items).map(([item, checked]) => (
						<div key={item} className="flex items-center space-x-2">
							<Checkbox
								id={item}
								checked={checked}
								onCheckedChange={() =>
									setItems(prev => ({
										...prev,
										[item as keyof ItemsState]: !prev[item as keyof ItemsState],
									}))
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
				className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
			>
				Subscribe
			</button>
		</form>
	),
}

/**
 * Custom styled checkboxes
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
			<div className="flex items-center space-x-2">
				<Checkbox
					id="custom4"
					className="rounded-md border-amber-500 data-[state=checked]:bg-amber-500 data-[state=checked]:text-black"
					defaultChecked
				/>
				<Label htmlFor="custom4" className="text-amber-600">
					Amber checkbox with black check mark
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<Checkbox
					id="custom5"
					className="border-2 border-pink-500 data-[state=checked]:bg-white data-[state=checked]:border-pink-500 data-[state=checked]:text-pink-500"
					defaultChecked
				/>
				<Label htmlFor="custom5" className="text-pink-600">
					Outlined pink checkbox
				</Label>
			</div>
		</div>
	),
}
