import { Button } from "./button"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "./input-otp"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import { Check, Copy, RefreshCw } from "lucide-react"
import React, { useState } from "react"

// Remove useToast import and replace with mock implementation
const useToast = () => ({
	toast: ({ title, description }: { title: string; description: string }) => {
		console.log(title, description)
	},
})

const meta: Meta<typeof InputOTP> = {
	title: "shadcn/InputOTP",
	component: InputOTP,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof InputOTP>

/**
 * Default four-digit OTP code
 */
export const Default: Story = {
	render: function DefaultStory() {
		const [value, setValue] = useState("")

		return (
			<div className="flex flex-col items-center space-y-6">
				<div className="w-full max-w-sm space-y-2 text-center">
					<h3 className="text-lg font-medium">Verification</h3>
					<p className="text-sm text-muted-foreground">
						Enter the 4-digit code sent to your device
					</p>
				</div>
				<div className="w-full max-w-sm space-y-4">
					<InputOTP
						maxLength={4}
						value={value}
						onChange={val => setValue(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot key={i} index={i} {...slot} />
								))}
							</InputOTPGroup>
						)}
					/>
					<div className="flex justify-center">
						<Button variant="link" className="text-xs text-muted-foreground">
							Didn't receive a code? Resend
						</Button>
					</div>
					<Button className="w-full" disabled={value.length !== 4}>
						Verify Account
					</Button>
				</div>
			</div>
		)
	},
}

/**
 * With separators between groups
 */
export const WithSeparators: Story = {
	render: function SeparatorsStory() {
		const [value, setValue] = useState("")

		return (
			<div className="flex flex-col items-center space-y-6">
				<div className="w-full max-w-sm space-y-2 text-center">
					<h3 className="text-lg font-medium">Enter Code</h3>
					<p className="text-sm text-muted-foreground">
						Enter the 6-digit code with separators
					</p>
				</div>
				<div className="w-full max-w-sm space-y-4">
					<InputOTP
						maxLength={6}
						value={value}
						onChange={val => setValue(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								<InputOTPSlot index={0} {...slots[0]} />
								<InputOTPSlot index={1} {...slots[1]} />
								<InputOTPSeparator />
								<InputOTPSlot index={2} {...slots[2]} />
								<InputOTPSlot index={3} {...slots[3]} />
								<InputOTPSeparator />
								<InputOTPSlot index={4} {...slots[4]} />
								<InputOTPSlot index={5} {...slots[5]} />
							</InputOTPGroup>
						)}
					/>
					<Button className="w-full" disabled={value.length !== 6}>
						Continue
					</Button>
				</div>
			</div>
		)
	},
}

/**
 * With label and validation
 */
export const WithLabel: Story = {
	render: function LabelStory() {
		const [value, setValue] = useState("")
		const [error, setError] = useState<string | null>(null)

		const handleChange = (val: string) => {
			setValue(val)
			setError(null)
		}

		const handleVerify = () => {
			if (value !== "1234") {
				setError("Invalid code. Please try again.")
			} else {
				setError(null)
				alert("Verification successful!")
			}
		}

		return (
			<div className="w-full max-w-sm space-y-4">
				<div className="space-y-2">
					<Label htmlFor="otp">One-Time Password</Label>
					<InputOTP
						id="otp"
						maxLength={4}
						value={value}
						onChange={handleChange}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot
										key={i}
										index={i}
										{...slot}
										className={
											error ? "border-destructive ring-1 ring-destructive" : ""
										}
									/>
								))}
							</InputOTPGroup>
						)}
					/>
					{error && <p className="text-sm text-destructive">{error}</p>}
					<p className="text-xs text-muted-foreground">
						Enter code "1234" for successful verification
					</p>
				</div>
				<Button
					className="w-full"
					disabled={value.length !== 4}
					onClick={handleVerify}
				>
					Verify Code
				</Button>
			</div>
		)
	},
}

/**
 * Copied code pattern
 */
export const CopyPattern: Story = {
	render: function CopyStory() {
		const [value, setValue] = useState("")
		const { toast } = useToast()
		const code = "752901"

		const copyCode = () => {
			navigator.clipboard.writeText(code)
			toast({
				title: "Copied to clipboard",
				description: `Code ${code} copied to clipboard`,
			})
		}

		const pasteCode = async () => {
			try {
				const text = await navigator.clipboard.readText()
				// Only set if it looks like a numeric code
				if (/^\d+$/.test(text) && text.length <= 6) {
					setValue(text)
				}
			} catch (error) {
				console.error("Failed to read clipboard:", error)
			}
		}

		return (
			<div className="w-full max-w-sm space-y-4">
				<div className="flex flex-col items-center space-y-2 text-center">
					<h3 className="text-lg font-medium">Your Verification Code</h3>
					<div className="flex items-center space-x-2">
						<code className="relative rounded bg-muted px-[0.5rem] py-[0.3rem] font-mono text-lg font-semibold">
							{code}
						</code>
						<Button
							variant="outline"
							size="icon"
							className="h-8 w-8"
							onClick={copyCode}
						>
							<Copy className="h-4 w-4" />
							<span className="sr-only">Copy code</span>
						</Button>
					</div>
				</div>
				<div className="space-y-2">
					<Label>Enter code</Label>
					<InputOTP
						maxLength={6}
						value={value}
						onChange={val => setValue(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot key={i} index={i} {...slot} />
								))}
							</InputOTPGroup>
						)}
					/>
					<div className="flex justify-between">
						<Button
							variant="link"
							className="text-xs text-muted-foreground"
							onClick={pasteCode}
						>
							Paste from clipboard
						</Button>
						<Button
							variant="link"
							className="text-xs text-muted-foreground"
							onClick={() => setValue("")}
						>
							Clear
						</Button>
					</div>
				</div>
				<Button className="w-full" disabled={value.length !== 6}>
					Verify
				</Button>
			</div>
		)
	},
}

/**
 * Confirmation code pattern
 */
export const Confirmation: Story = {
	render: function ConfirmationStory() {
		const [value, setValue] = useState("")
		const [isVerified, setIsVerified] = useState(false)

		const handleVerify = () => {
			// Simulate verification process
			setTimeout(() => {
				setIsVerified(true)
			}, 1000)
		}

		if (isVerified) {
			return (
				<div className="flex flex-col items-center justify-center space-y-4">
					<div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
						<Check className="h-8 w-8 text-green-600 dark:text-green-400" />
					</div>
					<h3 className="text-xl font-medium">Verification Successful</h3>
					<p className="text-center text-sm text-muted-foreground">
						Your account has been successfully verified. You can now continue to
						your account.
					</p>
					<Button className="mt-4 w-full">Continue to Account</Button>
				</div>
			)
		}

		return (
			<div className="flex flex-col items-center space-y-6">
				<div className="w-full max-w-sm space-y-2 text-center">
					<h3 className="text-lg font-medium">Confirm Your Account</h3>
					<p className="text-sm text-muted-foreground">
						Please enter the confirmation code sent to your phone
					</p>
				</div>
				<div className="w-full max-w-sm space-y-4">
					<InputOTP
						maxLength={4}
						value={value}
						onChange={val => setValue(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot key={i} index={i} {...slot} />
								))}
							</InputOTPGroup>
						)}
					/>
					<div className="flex justify-between">
						<Button variant="ghost" size="sm" className="gap-1 text-xs">
							<RefreshCw className="h-3 w-3" />
							Resend Code
						</Button>
						<p className="text-xs text-muted-foreground pt-2">
							Code expires in 10:00
						</p>
					</div>
					<Button
						className="w-full"
						disabled={value.length !== 4}
						onClick={handleVerify}
					>
						Confirm Account
					</Button>
				</div>
			</div>
		)
	},
}
