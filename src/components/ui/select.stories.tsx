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
import {
	Check,
	ChevronsUpDown,
	CircleUser,
	Globe,
	Mail,
	MapPin,
	MessageSquare,
	MoreHorizontal,
	Phone,
	Users,
} from "lucide-react"
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
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="blueberry">Blueberry</SelectItem>
				<SelectItem value="grapes">Grapes</SelectItem>
				<SelectItem value="pineapple">Pineapple</SelectItem>
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
				<SelectItem value="apple">Apple</SelectItem>
				<SelectItem value="banana">Banana</SelectItem>
				<SelectItem value="blueberry">Blueberry</SelectItem>
				<SelectItem value="grapes">Grapes</SelectItem>
				<SelectItem value="pineapple">Pineapple</SelectItem>
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
 * Select with icons for items
 */
export const WithIcons: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[200px]">
				<SelectValue placeholder="Select a contact method" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="email" className="flex items-center">
					<Mail className="mr-2 h-4 w-4 text-muted-foreground" />
					<span>Email</span>
				</SelectItem>
				<SelectItem value="phone" className="flex items-center">
					<Phone className="mr-2 h-4 w-4 text-muted-foreground" />
					<span>Phone</span>
				</SelectItem>
				<SelectItem value="chat" className="flex items-center">
					<MessageSquare className="mr-2 h-4 w-4 text-muted-foreground" />
					<span>Chat</span>
				</SelectItem>
				<SelectItem value="meet" className="flex items-center">
					<Users className="mr-2 h-4 w-4 text-muted-foreground" />
					<span>In Person</span>
				</SelectItem>
			</SelectContent>
		</Select>
	),
}

/**
 * Different states of select component
 */
export const States: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Default state" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="option1">Option 1</SelectItem>
						<SelectItem value="option2">Option 2</SelectItem>
						<SelectItem value="option3">Option 3</SelectItem>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">Default</span>
			</div>

			<div className="flex items-center gap-4">
				<Select>
					<SelectTrigger className="w-[180px] focus:ring-2">
						<SelectValue placeholder="Focus state (click)" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="option1">Option 1</SelectItem>
						<SelectItem value="option2">Option 2</SelectItem>
						<SelectItem value="option3">Option 3</SelectItem>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">
					Focus (click to see)
				</span>
			</div>

			<div className="flex items-center gap-4">
				<Select defaultValue="option1">
					<SelectTrigger className="w-[180px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="option1">Selected state</SelectItem>
						<SelectItem value="option2">Option 2</SelectItem>
						<SelectItem value="option3">Option 3</SelectItem>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">With selection</span>
			</div>

			<div className="flex items-center gap-4">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Item disabled" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="option1">Option 1</SelectItem>
						<SelectItem value="option2" disabled>
							Option 2 (Disabled)
						</SelectItem>
						<SelectItem value="option3">Option 3</SelectItem>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">
					With disabled item
				</span>
			</div>

			<div className="flex items-center gap-4">
				<Select disabled>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Disabled select" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="option1">Option 1</SelectItem>
						<SelectItem value="option2">Option 2</SelectItem>
						<SelectItem value="option3">Option 3</SelectItem>
					</SelectContent>
				</Select>
				<span className="text-sm text-muted-foreground">Entirely disabled</span>
			</div>
		</div>
	),
}

/**
 * Select sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<div className="flex items-end gap-4">
				<div className="flex flex-col gap-2">
					<Label htmlFor="fruit-sm">Small</Label>
					<Select>
						<SelectTrigger
							id="fruit-sm"
							className="w-[180px] h-8 text-xs rounded-md"
							size="sm"
						>
							<SelectValue placeholder="Small select" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="fruit-default">Default</Label>
					<Select>
						<SelectTrigger id="fruit-default" className="w-[180px]">
							<SelectValue placeholder="Default select" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="flex flex-col gap-2">
					<Label htmlFor="fruit-lg">Large</Label>
					<Select>
						<SelectTrigger
							id="fruit-lg"
							className="w-[180px] h-11 text-base rounded-md"
						>
							<SelectValue placeholder="Large select" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="apple">Apple</SelectItem>
							<SelectItem value="banana">Banana</SelectItem>
							<SelectItem value="blueberry">Blueberry</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<Label htmlFor="fruit-full">Full width</Label>
				<Select>
					<SelectTrigger id="fruit-full" className="w-full">
						<SelectValue placeholder="Full width select" />
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

		const countries = [
			{
				value: "us",
				label: "United States",
				icon: <CircleUser className="mr-2 h-4 w-4 text-blue-500" />,
			},
			{
				value: "uk",
				label: "United Kingdom",
				icon: <CircleUser className="mr-2 h-4 w-4 text-red-500" />,
			},
			{
				value: "fr",
				label: "France",
				icon: <CircleUser className="mr-2 h-4 w-4 text-indigo-500" />,
			},
			{
				value: "de",
				label: "Germany",
				icon: <CircleUser className="mr-2 h-4 w-4 text-yellow-500" />,
			},
			{
				value: "jp",
				label: "Japan",
				icon: <CircleUser className="mr-2 h-4 w-4 text-pink-500" />,
			},
		]

		return (
			<div className="flex flex-col gap-4 w-[300px]">
				<Select value={value} onValueChange={setValue}>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Select a country" />
					</SelectTrigger>
					<SelectContent>
						{countries.map(country => (
							<SelectItem
								key={country.value}
								value={country.value}
								className="flex items-center"
							>
								{country.icon}
								<span>{country.label}</span>
								{value === country.value && (
									<Check className="ml-auto h-4 w-4" />
								)}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				{value && (
					<div className="flex items-center p-3 border rounded-md text-sm gap-2">
						{countries.find(c => c.value === value)?.icon}
						<span>
							Selected:{" "}
							<span className="font-semibold">
								{countries.find(c => c.value === value)?.label}
							</span>
						</span>
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
								<Globe className="mr-2 h-4 w-4 text-muted-foreground" />
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
								<SelectItem value="jp">Japanese</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="timezone">Timezone</Label>
					<Select defaultValue="est">
						<SelectTrigger id="timezone" className="w-full">
							<MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="pst">Pacific Time (UTC-8)</SelectItem>
							<SelectItem value="mst">Mountain Time (UTC-7)</SelectItem>
							<SelectItem value="cst">Central Time (UTC-6)</SelectItem>
							<SelectItem value="est">Eastern Time (UTC-5)</SelectItem>
							<SelectItem value="utc">Universal Time (UTC)</SelectItem>
							<SelectItem value="cet">Central European Time (UTC+1)</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="flex justify-end">
				<button
					type="submit"
					className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium"
				>
					Save Profile
				</button>
			</div>
		</form>
	),
}

/**
 * Custom styled selects
 */
export const CustomStyled: Story = {
	render: () => (
		<div className="flex flex-col gap-4 w-[250px]">
			<Select>
				<SelectTrigger className="bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100 focus:ring-blue-500 rounded-xl">
					<SelectValue placeholder="Blue styled select" />
					<ChevronsUpDown className="h-4 w-4 opacity-50" />
				</SelectTrigger>
				<SelectContent className="bg-blue-50 border-blue-200 text-blue-800">
					<SelectItem value="option1" className="focus:bg-blue-100">
						Option 1
					</SelectItem>
					<SelectItem value="option2" className="focus:bg-blue-100">
						Option 2
					</SelectItem>
					<SelectItem value="option3" className="focus:bg-blue-100">
						Option 3
					</SelectItem>
				</SelectContent>
			</Select>

			<Select>
				<SelectTrigger className="bg-green-50 border-green-200 text-green-600 hover:bg-green-100 focus:ring-green-500 rounded-full pr-3">
					<SelectValue placeholder="Success select" />
					<Check className="h-4 w-4 ml-2" />
				</SelectTrigger>
				<SelectContent className="bg-green-50 border-green-200 text-green-800 rounded-lg">
					<SelectItem value="completed" className="focus:bg-green-100">
						Completed
					</SelectItem>
					<SelectItem value="in-progress" className="focus:bg-green-100">
						In Progress
					</SelectItem>
					<SelectItem value="backlog" className="focus:bg-green-100">
						Backlog
					</SelectItem>
				</SelectContent>
			</Select>

			<Select>
				<SelectTrigger className="border-0 bg-gray-100 hover:bg-gray-200 focus:ring-0 rounded-md shadow-sm">
					<SelectValue placeholder="Minimal select" />
					<MoreHorizontal className="h-4 w-4" />
				</SelectTrigger>
				<SelectContent className="bg-gray-100 border-0 shadow-md">
					<SelectItem value="option1">Option 1</SelectItem>
					<SelectItem value="option2">Option 2</SelectItem>
					<SelectItem value="option3">Option 3</SelectItem>
				</SelectContent>
			</Select>
		</div>
	),
}
