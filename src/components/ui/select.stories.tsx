import { Label } from "./label"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "./select"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Select> = {
	title: "shadcn/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Select>

/**
 * Basic select dropdown
 */
export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="grapes">Grapes</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
}

/**
 * Select with default value
 */
export const WithDefaultValue: Story = {
	render: () => (
		<Select defaultValue="banana">
			<SelectTrigger className="w-[180px]">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="grapes">Grapes</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
}

/**
 * Select with groups and labels
 */
export const WithGroups: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a food" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>Vegetables</SelectLabel>
					<SelectItem value="carrot">Carrot</SelectItem>
					<SelectItem value="potato">Potato</SelectItem>
					<SelectItem value="broccoli">Broccoli</SelectItem>
				</SelectGroup>
				<SelectSeparator />
				<SelectGroup>
					<SelectLabel>Meats</SelectLabel>
					<SelectItem value="chicken">Chicken</SelectItem>
					<SelectItem value="beef">Beef</SelectItem>
					<SelectItem value="pork">Pork</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
}

/**
 * Disabled select or items
 */
export const Disabled: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana" disabled>
								Banana (Sold out)
							</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">
					Select with disabled item
				</span>
			</div>

			<div className="flex items-center gap-4">
				<Select disabled>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">
					Entirely disabled select
				</span>
			</div>
		</div>
	),
}

/**
 * Select sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex items-end gap-4">
			<div className="flex flex-col gap-2">
				<Label htmlFor="fruit-default">Default size</Label>
				<Select>
					<SelectTrigger id="fruit-default" className="w-[180px]">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="fruit-sm">Small size</Label>
				<Select>
					<SelectTrigger id="fruit-sm" className="w-[180px]" size="sm">
						<SelectValue placeholder="Select a fruit" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	),
}

/**
 * Controlled select with state
 */
export const Controlled: Story = {
	render: function Render() {
		const [value, setValue] = useState("")

		return (
			<div className="flex flex-col gap-4 w-[300px]">
				<Select value={value} onValueChange={setValue}>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a country" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="us">United States</SelectItem>
						<SelectItem value="uk">United Kingdom</SelectItem>
						<SelectItem value="fr">France</SelectItem>
						<SelectItem value="de">Germany</SelectItem>
						<SelectItem value="jp">Japan</SelectItem>
					</SelectContent>
				</Select>

				{value && (
					<div className="p-2 border rounded-md text-sm">
						Selected value: <span className="font-semibold">{value}</span>
					</div>
				)}
			</div>
		)
	},
}

/**
 * Form with multiple selects
 */
export const InForm: Story = {
	render: () => (
		<form className="w-[400px] space-y-6 rounded-lg border p-4">
			<div className="space-y-4">
				<h3 className="text-lg font-medium">Create your profile</h3>
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="country">Country</Label>
						<Select defaultValue="us">
							<SelectTrigger id="country" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="us">United States</SelectItem>
								<SelectItem value="uk">United Kingdom</SelectItem>
								<SelectItem value="ca">Canada</SelectItem>
								<SelectItem value="au">Australia</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="language">Language</Label>
						<Select defaultValue="en">
							<SelectTrigger id="language" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="en">English</SelectItem>
								<SelectItem value="es">Spanish</SelectItem>
								<SelectItem value="fr">French</SelectItem>
								<SelectItem value="de">German</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="timezone">Timezone</Label>
						<Select defaultValue="pst">
							<SelectTrigger id="timezone" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="pst">Pacific (PST)</SelectItem>
								<SelectItem value="mst">Mountain (MST)</SelectItem>
								<SelectItem value="cst">Central (CST)</SelectItem>
								<SelectItem value="est">Eastern (EST)</SelectItem>
								<SelectItem value="utc">UTC</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="space-y-2">
						<Label htmlFor="currency">Currency</Label>
						<Select defaultValue="usd">
							<SelectTrigger id="currency" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="usd">USD ($)</SelectItem>
								<SelectItem value="eur">EUR (€)</SelectItem>
								<SelectItem value="gbp">GBP (£)</SelectItem>
								<SelectItem value="jpy">JPY (¥)</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			<button
				type="submit"
				className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
			>
				Save Preferences
			</button>
		</form>
	),
}

/**
 * Custom styled select
 */
export const CustomStyled: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[200px] bg-blue-50 border-blue-200 text-blue-700 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-300">
				<SelectValue placeholder="Select a theme" />
			</SelectTrigger>
			<SelectContent className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
				<SelectGroup>
					<SelectItem
						value="light"
						className="text-blue-700 dark:text-blue-300 data-[highlighted]:bg-blue-100 dark:data-[highlighted]:bg-blue-900"
					>
						Light
					</SelectItem>
					<SelectItem
						value="dark"
						className="text-blue-700 dark:text-blue-300 data-[highlighted]:bg-blue-100 dark:data-[highlighted]:bg-blue-900"
					>
						Dark
					</SelectItem>
					<SelectItem
						value="system"
						className="text-blue-700 dark:text-blue-300 data-[highlighted]:bg-blue-100 dark:data-[highlighted]:bg-blue-900"
					>
						System
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
}
