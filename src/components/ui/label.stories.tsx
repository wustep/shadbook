import { Checkbox } from "./checkbox"
import { Input } from "./input"
import { Label } from "./label"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import { Switch } from "./switch"
import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircle, HelpCircle } from "lucide-react"

const meta: Meta<typeof Label> = {
	title: "shadcn/Label",
	component: Label,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Label>

/**
 * Basic label with default styling
 */
export const Default: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="email">Email</Label>
			<Input type="email" id="email" placeholder="Enter your email" />
		</div>
	),
}

/**
 * Label with required indicator
 */
export const Required: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label
				htmlFor="username"
				className="after:content-['*'] after:ml-0.5 after:text-red-500"
			>
				Username
			</Label>
			<Input type="text" id="username" placeholder="Enter your username" />
		</div>
	),
}

/**
 * Label with helper text
 */
export const WithHelperText: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="password">Password</Label>
			<Input type="password" id="password" />
			<p className="text-sm text-muted-foreground">
				Password must be at least 8 characters.
			</p>
		</div>
	),
}

/**
 * Label with different form controls
 */
export const WithDifferentControls: Story = {
	render: () => (
		<div className="space-y-6 w-full max-w-sm">
			<div className="grid gap-1.5">
				<Label htmlFor="terms">Terms and Conditions</Label>
				<div className="flex items-center gap-2">
					<Checkbox id="terms" />
					<label htmlFor="terms" className="text-sm text-muted-foreground">
						I agree to the terms and conditions
					</label>
				</div>
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="notifications">Notifications</Label>
				<div className="flex items-center gap-2">
					<Switch id="notifications" />
					<label
						htmlFor="notifications"
						className="text-sm text-muted-foreground"
					>
						Receive notifications
					</label>
				</div>
			</div>

			<div className="grid gap-1.5">
				<Label>Subscription Plan</Label>
				<RadioGroup defaultValue="monthly">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="monthly" id="monthly" />
						<label htmlFor="monthly" className="text-sm">
							Monthly
						</label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="yearly" id="yearly" />
						<label htmlFor="yearly" className="text-sm">
							Yearly
						</label>
					</div>
				</RadioGroup>
			</div>
		</div>
	),
}

/**
 * Disabled label
 */
export const Disabled: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="disabled-input" className="text-muted-foreground">
				Disabled Field
			</Label>
			<Input type="text" id="disabled-input" disabled />
		</div>
	),
}

/**
 * Label with tooltip
 */
export const WithTooltip: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="api-key" className="flex items-center gap-1">
				API Key
				<HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
			</Label>
			<Input type="text" id="api-key" placeholder="Enter your API key" />
		</div>
	),
}

/**
 * Label with error state
 */
export const WithError: Story = {
	render: () => (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<Label htmlFor="email-error" className="text-destructive">
				Email
			</Label>
			<Input
				type="email"
				id="email-error"
				placeholder="Enter your email"
				className="border-destructive focus-visible:ring-destructive"
			/>
			<div className="flex items-center gap-1 text-sm text-destructive">
				<AlertCircle className="h-3.5 w-3.5" />
				<span>Please enter a valid email address</span>
			</div>
		</div>
	),
}

/**
 * Multiple labels in a form layout
 */
export const FormLayout: Story = {
	render: () => (
		<div className="space-y-4 w-full max-w-sm border p-4 rounded-md">
			<div className="grid gap-1.5">
				<Label htmlFor="full-name">Full Name</Label>
				<Input id="full-name" placeholder="John Doe" />
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="email-address">Email Address</Label>
				<Input id="email-address" type="email" placeholder="john@example.com" />
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="message" className="flex items-center gap-1">
					Message
					<span className="text-xs text-muted-foreground">(optional)</span>
				</Label>
				<textarea
					id="message"
					placeholder="Your message here..."
					className="min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				/>
			</div>
		</div>
	),
}

/**
 * Responsive label layout
 */
export const ResponsiveLayout: Story = {
	render: () => (
		<div className="w-full max-w-lg space-y-4">
			<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
				<Label
					htmlFor="responsive-name"
					className="block text-sm font-medium leading-6 sm:pt-1.5"
				>
					Full Name
				</Label>
				<div className="mt-2 sm:col-span-2 sm:mt-0">
					<Input id="responsive-name" placeholder="John Doe" />
				</div>
			</div>

			<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
				<Label
					htmlFor="responsive-email"
					className="block text-sm font-medium leading-6 sm:pt-1.5"
				>
					Email
				</Label>
				<div className="mt-2 sm:col-span-2 sm:mt-0">
					<Input
						id="responsive-email"
						type="email"
						placeholder="john@example.com"
					/>
				</div>
			</div>

			<div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
				<Label
					htmlFor="responsive-country"
					className="block text-sm font-medium leading-6 sm:pt-1.5"
				>
					Country
				</Label>
				<div className="mt-2 sm:col-span-2 sm:mt-0">
					<select
						id="responsive-country"
						className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
					>
						<option>United States</option>
						<option>Canada</option>
						<option>Mexico</option>
					</select>
				</div>
			</div>
		</div>
	),
}
