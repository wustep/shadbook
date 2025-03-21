import { Label } from "./label"
import { RadioGroup, RadioGroupItem } from "./radio-group"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof RadioGroup> = {
	title: "shadcn/RadioGroup",
	component: RadioGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof RadioGroup>

/**
 * Basic radio group with simple options
 */
export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="option-one" />
				<Label htmlFor="option-one">Option One</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="option-two" />
				<Label htmlFor="option-two">Option Two</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-three" id="option-three" />
				<Label htmlFor="option-three">Option Three</Label>
			</div>
		</RadioGroup>
	),
}

/**
 * Radio group with a disabled option
 */
export const WithDisabledOption: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="disabled-option-one" />
				<Label htmlFor="disabled-option-one">Option One</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="disabled-option-two" disabled />
				<Label htmlFor="disabled-option-two" className="text-muted-foreground">
					Option Two (Disabled)
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-three" id="disabled-option-three" />
				<Label htmlFor="disabled-option-three">Option Three</Label>
			</div>
		</RadioGroup>
	),
}

/**
 * Radio group with descriptions for each option
 */
export const WithDescriptions: Story = {
	render: () => (
		<RadioGroup defaultValue="comfortable">
			<div className="flex items-start space-x-2">
				<RadioGroupItem value="default" id="r1" className="mt-1" />
				<div className="grid gap-1.5">
					<Label htmlFor="r1">Default</Label>
					<p className="text-sm text-muted-foreground">
						The default system spacing.
					</p>
				</div>
			</div>
			<div className="flex items-start space-x-2">
				<RadioGroupItem value="comfortable" id="r2" className="mt-1" />
				<div className="grid gap-1.5">
					<Label htmlFor="r2">Comfortable</Label>
					<p className="text-sm text-muted-foreground">
						Increased spacing for a more comfortable view.
					</p>
				</div>
			</div>
			<div className="flex items-start space-x-2">
				<RadioGroupItem value="compact" id="r3" className="mt-1" />
				<div className="grid gap-1.5">
					<Label htmlFor="r3">Compact</Label>
					<p className="text-sm text-muted-foreground">
						Reduced spacing to show more content.
					</p>
				</div>
			</div>
		</RadioGroup>
	),
}

/**
 * Radio group with horizontal layout
 */
export const Horizontal: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one" className="flex space-x-6 space-y-0">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-one" id="h-option-one" />
				<Label htmlFor="h-option-one">Option One</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-two" id="h-option-two" />
				<Label htmlFor="h-option-two">Option Two</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-three" id="h-option-three" />
				<Label htmlFor="h-option-three">Option Three</Label>
			</div>
		</RadioGroup>
	),
}

/**
 * Radio group as a card selection
 */
export const CardSelection: Story = {
	render: () => (
		<RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
			<Label
				htmlFor="card-1"
				className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroupItem value="card" id="card-1" className="sr-only" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="mb-3 h-6 w-6"
				>
					<rect width="20" height="14" x="2" y="5" rx="2" />
					<path d="M2 10h20" />
				</svg>
				Card
			</Label>
			<Label
				htmlFor="card-2"
				className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroupItem value="paypal" id="card-2" className="sr-only" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="mb-3 h-6 w-6"
				>
					<path d="M7 15h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1" />
					<path d="M17 8h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-3" />
				</svg>
				PayPal
			</Label>
			<Label
				htmlFor="card-3"
				className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
			>
				<RadioGroupItem value="apple" id="card-3" className="sr-only" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					className="mb-3 h-6 w-6"
				>
					<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
					<path d="M10 2c1 .5 2 2 2 5" />
				</svg>
				Apple Pay
			</Label>
		</RadioGroup>
	),
}

/**
 * Controlled radio group with React state
 */
export const Controlled: Story = {
	render: function ControlledExample() {
		const [value, setValue] = useState("option-one")

		return (
			<div className="space-y-4">
				<RadioGroup value={value} onValueChange={setValue}>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-one" id="controlled-option-one" />
						<Label htmlFor="controlled-option-one">Option One</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-two" id="controlled-option-two" />
						<Label htmlFor="controlled-option-two">Option Two</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="option-three" id="controlled-option-three" />
						<Label htmlFor="controlled-option-three">Option Three</Label>
					</div>
				</RadioGroup>

				<div className="text-sm">
					Selected value: <span className="font-bold">{value}</span>
				</div>
			</div>
		)
	},
}

/**
 * Form field example with radio group
 */
export const FormField: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Notification Preferences</h3>
				<p className="text-sm text-muted-foreground">
					Configure how you receive notifications.
				</p>
			</div>

			<div className="space-y-4">
				<div>
					<h4 className="text-sm font-medium mb-3">Email Notifications</h4>
					<RadioGroup defaultValue="all">
						<div className="flex items-start space-x-2">
							<RadioGroupItem value="all" id="email-all" className="mt-1" />
							<div className="grid gap-1.5">
								<Label htmlFor="email-all">All notifications</Label>
								<p className="text-sm text-muted-foreground">
									Receive emails for all activity including comments, mentions,
									and updates.
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-2">
							<RadioGroupItem
								value="important"
								id="email-important"
								className="mt-1"
							/>
							<div className="grid gap-1.5">
								<Label htmlFor="email-important">Important only</Label>
								<p className="text-sm text-muted-foreground">
									Only receive emails for important activity like direct
									mentions.
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-2">
							<RadioGroupItem value="none" id="email-none" className="mt-1" />
							<div className="grid gap-1.5">
								<Label htmlFor="email-none">No emails</Label>
								<p className="text-sm text-muted-foreground">
									Never receive email notifications.
								</p>
							</div>
						</div>
					</RadioGroup>
				</div>
			</div>
		</div>
	),
}

/**
 * Custom styled radio group
 */
export const CustomStyling: Story = {
	render: () => (
		<RadioGroup defaultValue="option-one">
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="option-one"
					id="custom-one"
					className="border-blue-500 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-100"
				/>
				<Label htmlFor="custom-one" className="font-medium text-blue-700">
					Blue Option
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="option-two"
					id="custom-two"
					className="border-green-500 data-[state=checked]:border-green-600 data-[state=checked]:bg-green-100"
				/>
				<Label htmlFor="custom-two" className="font-medium text-green-700">
					Green Option
				</Label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem
					value="option-three"
					id="custom-three"
					className="border-purple-500 data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-100"
				/>
				<Label htmlFor="custom-three" className="font-medium text-purple-700">
					Purple Option
				</Label>
			</div>
		</RadioGroup>
	),
}
