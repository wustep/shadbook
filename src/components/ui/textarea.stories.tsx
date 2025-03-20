import { Label } from "./label"
import { Textarea } from "./textarea"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Textarea> = {
	title: "shadcn/Textarea",
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Textarea>

/**
 * Basic textarea with placeholder
 */
export const Default: Story = {
	render: () => <Textarea placeholder="Type your message here." />,
}

/**
 * Disabled textarea
 */
export const Disabled: Story = {
	render: () => <Textarea placeholder="This textarea is disabled" disabled />,
}

/**
 * Textarea with label
 */
export const WithLabel: Story = {
	render: () => (
		<div className="grid w-full gap-1.5">
			<Label htmlFor="message">Your message</Label>
			<Textarea placeholder="Type your message here." id="message" />
		</div>
	),
}

/**
 * Textarea with label and description
 */
export const WithDescription: Story = {
	render: () => (
		<div className="grid w-full gap-1.5">
			<Label htmlFor="message-with-description">Your message</Label>
			<Textarea
				placeholder="Type your message here."
				id="message-with-description"
			/>
			<p className="text-muted-foreground text-sm">
				Your message will be sent to the team and they will get back to you as
				soon as possible.
			</p>
		</div>
	),
}

/**
 * Textarea with different sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="grid w-full gap-1.5">
				<Label htmlFor="small">Small</Label>
				<Textarea id="small" placeholder="Small textarea" className="h-20" />
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="medium">Medium</Label>
				<Textarea id="medium" placeholder="Medium textarea" className="h-32" />
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="large">Large</Label>
				<Textarea id="large" placeholder="Large textarea" className="h-44" />
			</div>
		</div>
	),
}

/**
 * Textarea with validation states
 */
export const ValidationStates: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="grid w-full gap-1.5">
				<Label htmlFor="valid">Valid</Label>
				<Textarea
					id="valid"
					placeholder="This is valid"
					className="border-green-500 focus-visible:ring-green-500/50"
				/>
				<p className="text-green-500 text-sm">Your message looks good!</p>
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="invalid">Invalid</Label>
				<Textarea
					id="invalid"
					placeholder="This is invalid"
					aria-invalid="true"
				/>
				<p className="text-destructive text-sm">Please enter a valid message</p>
			</div>
		</div>
	),
}

/**
 * Textarea with character count
 */
export const WithCharacterCount: Story = {
	render: function Render() {
		const [value, setValue] = useState("")
		const maxLength = 280

		return (
			<div className="grid w-full gap-1.5">
				<div className="flex items-center justify-between">
					<Label htmlFor="tweet">Your tweet</Label>
					<span
						className={`text-sm ${
							value.length > maxLength
								? "text-destructive"
								: "text-muted-foreground"
						}`}
					>
						{value.length}/{maxLength}
					</span>
				</div>
				<Textarea
					id="tweet"
					placeholder="What's happening?"
					value={value}
					onChange={e => setValue(e.target.value)}
					className={value.length > maxLength ? "border-destructive" : ""}
				/>
			</div>
		)
	},
}

/**
 * Auto-resizing textarea
 */
export const AutoResizing: Story = {
	render: function Render() {
		const [value, setValue] = useState("")

		// Function to auto-resize textarea
		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			const textarea = e.target
			setValue(textarea.value)

			// Reset height to auto to get the right scrollHeight
			textarea.style.height = "auto"

			// Set the height based on scrollHeight (with a min height)
			textarea.style.height = `${Math.max(textarea.scrollHeight, 64)}px`
		}

		return (
			<div className="grid w-full gap-1.5">
				<Label htmlFor="auto-resize">Auto-resizing textarea</Label>
				<Textarea
					id="auto-resize"
					placeholder="Type your message here. The textarea will grow as you type..."
					value={value}
					onChange={handleChange}
					className="min-h-16 transition-none"
				/>
			</div>
		)
	},
}

/**
 * Custom styled textarea
 */
export const CustomStyled: Story = {
	render: () => (
		<div className="grid w-full gap-1.5">
			<Label htmlFor="custom" className="text-blue-500">
				Custom styled
			</Label>
			<Textarea
				id="custom"
				placeholder="This textarea has custom styling"
				className="border-blue-300 bg-blue-50 placeholder:text-blue-400 focus-visible:border-blue-500 focus-visible:ring-blue-500/50"
			/>
		</div>
	),
}
