import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AtSign,
	DollarSign,
	Eye as EyeIcon,
	EyeOff as EyeOffIcon,
	File as FileIcon,
	Loader2,
	Search,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Input> = {
	title: "shadcn/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Input>

/**
 * Default input field
 */
export const Default: Story = {
	render: () => <Input placeholder="Enter text here..." />,
}

/**
 * Different input types
 */
export const InputTypes: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="grid w-full gap-1.5">
				<Label htmlFor="text">Text</Label>
				<Input id="text" placeholder="Enter text..." />
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="email">Email</Label>
				<Input id="email" type="email" placeholder="name@example.com" />
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="password">Password</Label>
				<Input id="password" type="password" placeholder="Enter password..." />
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="date">Date</Label>
				<Input id="date" type="date" />
			</div>
			<div className="grid w-full gap-1.5">
				<Label htmlFor="number">Number</Label>
				<Input id="number" type="number" placeholder="0" />
			</div>
		</div>
	),
}

/**
 * Input with icon
 */
export const WithIcon: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="relative">
				<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input className="pl-8" placeholder="Search..." />
			</div>
			<div className="relative">
				<AtSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input className="pl-8" type="email" placeholder="Email" />
			</div>
			<div className="relative">
				<DollarSign className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
				<Input className="pl-8" type="number" placeholder="Amount" />
			</div>
			<div className="relative">
				<Input placeholder="Password" type="password" className="pr-8" />
				<EyeIcon className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
			</div>
		</div>
	),
}

/**
 * Password input with visibility toggle
 */
export const PasswordWithToggle: Story = {
	render: function Render() {
		const [showPassword, setShowPassword] = useState(false)

		return (
			<div className="relative w-full max-w-sm">
				<Input
					placeholder="Enter password"
					type={showPassword ? "text" : "password"}
					className="pr-8"
				/>
				<button
					type="button"
					onClick={() => setShowPassword(!showPassword)}
					className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground hover:text-foreground"
				>
					{showPassword ? (
						<EyeOffIcon className="h-4 w-4" />
					) : (
						<EyeIcon className="h-4 w-4" />
					)}
				</button>
			</div>
		)
	},
}

/**
 * Disabled input
 */
export const Disabled: Story = {
	render: () => <Input disabled placeholder="Disabled input" />,
}

/**
 * Input with label
 */
export const WithLabel: Story = {
	render: () => (
		<div className="grid w-full max-w-sm gap-1.5">
			<Label htmlFor="name">Name</Label>
			<Input id="name" placeholder="John Doe" />
			<p className="text-xs text-muted-foreground">Enter your full name.</p>
		</div>
	),
}

/**
 * Input sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<Input className="h-7 px-2 text-xs" placeholder="Small input" />
			<Input placeholder="Default input" />
			<Input className="h-11 px-4 text-lg" placeholder="Large input" />
		</div>
	),
}

/**
 * Input with validation states
 */
export const ValidationStates: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="grid gap-1.5">
				<Label htmlFor="valid-input">Valid input</Label>
				<Input
					id="valid-input"
					placeholder="Valid input"
					className="border-green-500 focus-visible:ring-green-300/50"
				/>
				<p className="text-xs text-green-500">This is a valid input.</p>
			</div>
			<div className="grid gap-1.5">
				<Label htmlFor="invalid-input">Invalid input</Label>
				<Input
					id="invalid-input"
					placeholder="Invalid input"
					aria-invalid="true"
				/>
				<p className="text-xs text-destructive">This is an invalid input.</p>
			</div>
		</div>
	),
}

/**
 * Input with button
 */
export const WithButton: Story = {
	render: () => (
		<div className="flex w-full max-w-sm items-center gap-2">
			<Input placeholder="Email" type="email" />
			<Button type="submit">Subscribe</Button>
		</div>
	),
}

/**
 * Input with loading state
 */
export const WithLoading: Story = {
	render: function Render() {
		const [isLoading, setIsLoading] = useState(false)

		return (
			<div className="w-full max-w-sm">
				<div className="flex gap-2">
					<div className="relative flex-1">
						<Input
							placeholder="Search..."
							className={isLoading ? "pr-8" : ""}
						/>
						{isLoading && (
							<Loader2 className="absolute right-2.5 top-2.5 h-4 w-4 animate-spin text-muted-foreground" />
						)}
					</div>
					<Button onClick={() => setIsLoading(!isLoading)} variant="outline">
						{isLoading ? "Stop" : "Search"}
					</Button>
				</div>
			</div>
		)
	},
}

/**
 * File input
 */
export const FileInput: Story = {
	render: () => (
		<div className="grid w-full max-w-sm gap-1.5">
			<Label htmlFor="file">Upload file</Label>
			<div className="flex items-center gap-2">
				<Input id="file" type="file" className="file:text-primary" />
			</div>
			<div className="grid w-full max-w-sm gap-1.5">
				<Label htmlFor="custom-file">Custom file input</Label>
				<div className="flex items-center gap-2">
					<Input
						id="custom-file"
						type="file"
						className="hidden"
						onChange={e => {
							// Handle file change
							const fileName = e.target.files?.[0]?.name
							const fileDisplay = document.getElementById("file-display")
							if (fileDisplay) {
								fileDisplay.textContent = fileName || "No file selected"
							}
						}}
					/>
					<Button
						variant="outline"
						onClick={() => document.getElementById("custom-file")?.click()}
						className="flex items-center gap-2"
					>
						<FileIcon className="h-4 w-4" />
						Choose File
					</Button>
					<span id="file-display" className="text-sm text-muted-foreground">
						No file selected
					</span>
				</div>
			</div>
		</div>
	),
}

/**
 * Input with custom styling
 */
export const CustomStyling: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<Input
				className="border-2 border-blue-300 focus-visible:border-blue-500 focus-visible:ring-blue-300/50 rounded-lg bg-blue-50 placeholder:text-blue-400"
				placeholder="Custom blue input"
			/>
			<Input
				className="border-none bg-slate-100 focus-visible:ring-slate-300/50 rounded-full px-4"
				placeholder="Rounded input"
			/>
			<Input
				className="border-b border-l-0 border-r-0 border-t-0 rounded-none focus-visible:ring-0 focus-visible:border-b-2 px-0 transition-all"
				placeholder="Borderless input"
			/>
		</div>
	),
}
