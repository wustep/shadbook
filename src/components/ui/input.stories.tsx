import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AtSign,
	CheckCircle2,
	Copy,
	DollarSign,
	Eye as EyeIcon,
	EyeOff as EyeOffIcon,
	Loader2,
	Search,
	XCircle,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Input> = {
	title: "Components/Input",
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
 * Input states
 */
export const States: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="grid gap-1.5">
				<Label htmlFor="default-input">Default</Label>
				<Input id="default-input" placeholder="Default input" />
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="focus-input">Focus (click to see)</Label>
				<Input id="focus-input" placeholder="Click to focus" />
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="disabled-input" className="text-muted-foreground">
					Disabled
				</Label>
				<Input id="disabled-input" disabled placeholder="Disabled input" />
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="readonly-input">Read-only</Label>
				<Input id="readonly-input" readOnly value="Read-only value" />
			</div>
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
				<div className="relative">
					<Input
						id="valid-input"
						value="valid@example.com"
						className="pr-8 border-green-500 focus-visible:ring-green-300/50"
					/>
					<CheckCircle2 className="absolute right-2.5 top-2.5 h-4 w-4 text-green-500" />
				</div>
				<p className="text-xs text-green-500">This is a valid email address.</p>
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="invalid-input">Invalid input</Label>
				<div className="relative">
					<Input
						id="invalid-input"
						value="invalid-email"
						className="pr-8 border-red-500 focus-visible:ring-red-300/50"
						aria-invalid="true"
					/>
					<XCircle className="absolute right-2.5 top-2.5 h-4 w-4 text-red-500" />
				</div>
				<p className="text-xs text-red-500">
					Please enter a valid email address.
				</p>
			</div>
		</div>
	),
}

/**
 * Input with copy button
 */
export const WithCopyButton: Story = {
	render: function Render() {
		const [copied, setCopied] = useState(false)
		const value = "https://example.com/your-share-link"

		const handleCopy = () => {
			navigator.clipboard.writeText(value)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		}

		return (
			<div className="w-full max-w-sm">
				<div className="flex gap-2">
					<div className="relative flex-1">
						<Input value={value} readOnly className="pr-8" />
						<button
							type="button"
							onClick={handleCopy}
							className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground hover:text-foreground"
							aria-label="Copy to clipboard"
						>
							{copied ? (
								<CheckCircle2 className="h-4 w-4 text-green-500" />
							) : (
								<Copy className="h-4 w-4" />
							)}
						</button>
					</div>
					<Button onClick={handleCopy} variant="outline" size="sm">
						{copied ? "Copied!" : "Copy"}
					</Button>
				</div>
			</div>
		)
	},
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
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Search..."
							className={isLoading ? "pl-8 pr-8" : "pl-8"}
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
 * Input with button
 */
export const WithButton: Story = {
	render: () => (
		<>
			<div className="flex w-full max-w-sm items-center gap-2 mb-4">
				<Input placeholder="Email" type="email" />
				<Button type="submit">Subscribe</Button>
			</div>

			<div className="flex w-full max-w-sm flex-col sm:flex-row items-end gap-2">
				<div className="grid w-full gap-1.5">
					<Label htmlFor="email">Email</Label>
					<Input id="email" placeholder="name@example.com" type="email" />
				</div>
				<Button type="submit">Subscribe</Button>
			</div>
		</>
	),
}

/**
 * File input variants
 */
export const FileInput: Story = {
	render: () => (
		<div className="w-full max-w-sm space-y-6">
			<div className="grid w-full gap-1.5">
				<Label htmlFor="file">Basic file input</Label>
				<Input id="file" type="file" />
			</div>

			<div className="grid w-full gap-1.5">
				<Label htmlFor="styled-file">Styled file input</Label>
				<Input
					id="styled-file"
					type="file"
					className="file:mr-4 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
				/>
			</div>

			<div className="grid w-full gap-1.5">
				<Label htmlFor="image-upload">Image upload only</Label>
				<Input
					id="image-upload"
					type="file"
					accept="image/*"
					className="file:mr-4 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-secondary file:text-secondary-foreground hover:file:bg-secondary/90"
				/>
				<p className="text-xs text-muted-foreground">
					Accepts images only (.jpg, .png, etc.)
				</p>
			</div>
		</div>
	),
}

/**
 * Input sizes
 */
export const Sizes: Story = {
	render: () => (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="grid gap-1.5">
				<Label htmlFor="small" className="text-xs">
					Small
				</Label>
				<Input
					id="small"
					className="h-7 px-2 text-xs"
					placeholder="Small input"
				/>
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="default">Default</Label>
				<Input id="default" placeholder="Default input" />
			</div>

			<div className="grid gap-1.5">
				<Label htmlFor="large" className="text-lg">
					Large
				</Label>
				<Input
					id="large"
					className="h-11 px-4 text-lg"
					placeholder="Large input"
				/>
			</div>
		</div>
	),
}
