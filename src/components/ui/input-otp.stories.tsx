import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import { AlertCircle, Check, Copy, Loader2 } from "lucide-react"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp"

/**
 * Mock toast implementation for storybook
 * This simulates the functionality of the toast component
 * without requiring actual toast implementation
 */
const useToast = () => ({
	toast: ({ title, description }: { title: string; description: string }) => {
		console.log(`Toast: ${title} - ${description}`)
		// In a real implementation, this would display a toast notification
	},
})

const meta = {
	title: "shadcn/InputOTP",
	component: InputOTP,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		maxLength: {
			control: { type: "number" },
			description: "Maximum length of the OTP input",
			defaultValue: 4,
		},
		value: {
			control: "text",
			description: "Current value of the OTP input",
		},
		disabled: {
			control: "boolean",
			description: "Whether the input is disabled",
			defaultValue: false,
		},
	},
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof InputOTP>

/**
 * The InputOTP component allows users to enter one-time passcodes
 * or other segmented numerical inputs. This is the most basic usage
 * with 4 digits.
 */
export const Basic: Story = {
	render: function BasicExample() {
		const [value, setValue] = useState("")

		return (
			<div className="w-full max-w-sm space-y-2">
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
			</div>
		)
	},
}

/**
 * OTP inputs can be configured with different lengths.
 * This example shows both 4-digit and 6-digit variants.
 */
export const DifferentLengths: Story = {
	render: function DifferentLengthsExample() {
		const [fourDigit, setFourDigit] = useState("")
		const [sixDigit, setSixDigit] = useState("")

		return (
			<div className="flex w-full max-w-sm flex-col gap-6">
				<div className="grid w-full gap-1.5">
					<Label htmlFor="four-digit">4-digit code</Label>
					<InputOTP
						id="four-digit"
						maxLength={4}
						value={fourDigit}
						onChange={val => setFourDigit(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot key={i} index={i} {...slot} />
								))}
							</InputOTPGroup>
						)}
					/>
				</div>

				<div className="grid w-full gap-1.5">
					<Label htmlFor="six-digit">6-digit code</Label>
					<InputOTP
						id="six-digit"
						maxLength={6}
						value={sixDigit}
						onChange={val => setSixDigit(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot key={i} index={i} {...slot} />
								))}
							</InputOTPGroup>
						)}
					/>
				</div>
			</div>
		)
	},
}

/**
 * For longer codes, you can add separators to improve readability.
 * This example shows a 6-digit code with separators after every 2 digits.
 */
export const WithSeparators: Story = {
	render: function WithSeparatorsExample() {
		const [value, setValue] = useState("")

		return (
			<div className="w-full max-w-sm space-y-2">
				<Label htmlFor="with-separators">With separators</Label>
				<InputOTP
					id="with-separators"
					maxLength={6}
					value={value}
					onChange={val => setValue(val)}
					render={({ slots }) => (
						<InputOTPGroup>
							{Array.from({ length: 6 }).map((_, i) => {
								// Add separators after positions 1 and 3
								const insertSeparator = i === 2 || i === 4

								return (
									<React.Fragment key={i}>
										{insertSeparator && <InputOTPSeparator />}
										<InputOTPSlot index={i} {...(slots?.[i] || {})} />
									</React.Fragment>
								)
							})}
						</InputOTPGroup>
					)}
				/>
				<p className="text-xs text-muted-foreground">Grouped with separators</p>
			</div>
		)
	},
}

/**
 * Input OTP components can display different validation states.
 * This example demonstrates valid and invalid states with appropriate styling.
 */
export const ValidationStates: Story = {
	render: function ValidationStatesExample() {
		const [validValue, setValidValue] = useState("1234")
		const [invalidValue, setInvalidValue] = useState("5678")

		return (
			<div className="flex w-full max-w-sm flex-col gap-6">
				<div className="grid w-full gap-1.5">
					<Label htmlFor="valid-otp">Valid input</Label>
					<InputOTP
						id="valid-otp"
						maxLength={4}
						value={validValue}
						onChange={val => setValidValue(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot
										key={i}
										index={i}
										{...slot}
										className="border-green-500 focus-visible:ring-green-300/50"
									/>
								))}
							</InputOTPGroup>
						)}
					/>
					<div className="flex items-center text-xs text-green-500">
						<Check className="mr-1 h-3 w-3" />
						Verification code is correct
					</div>
				</div>

				<div className="grid w-full gap-1.5">
					<Label htmlFor="invalid-otp">Invalid input</Label>
					<InputOTP
						id="invalid-otp"
						maxLength={4}
						value={invalidValue}
						onChange={val => setInvalidValue(val)}
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot
										key={i}
										index={i}
										{...slot}
										className="border-red-500 focus-visible:ring-red-300/50"
									/>
								))}
							</InputOTPGroup>
						)}
					/>
					<div className="flex items-center text-xs text-red-500">
						<AlertCircle className="mr-1 h-3 w-3" />
						Invalid verification code
					</div>
				</div>
			</div>
		)
	},
}

/**
 * OTP inputs can be disabled or display loading states.
 * This example demonstrates both disabled and loading variants.
 */
export const States: Story = {
	render: function StatesExample() {
		const [value, setValue] = useState("")
		const [loadingValue, setLoadingValue] = useState("1234")
		const [isLoading, setIsLoading] = useState(false)

		const handleVerify = () => {
			setIsLoading(true)
			// Simulate verification
			setTimeout(() => setIsLoading(false), 2000)
		}

		return (
			<div className="flex w-full max-w-sm flex-col gap-6">
				<div className="grid w-full gap-1.5">
					<Label htmlFor="disabled-otp" className="text-muted-foreground">
						Disabled
					</Label>
					<InputOTP
						id="disabled-otp"
						maxLength={4}
						value={value}
						onChange={val => setValue(val)}
						disabled
						render={({ slots }) => (
							<InputOTPGroup>
								{slots.map((slot, i) => (
									<InputOTPSlot key={i} index={i} {...slot} />
								))}
							</InputOTPGroup>
						)}
					/>
				</div>

				<div className="grid w-full gap-1.5">
					<Label htmlFor="loading-otp">Loading state</Label>
					<div className="relative">
						<InputOTP
							id="loading-otp"
							maxLength={4}
							value={loadingValue}
							onChange={val => setLoadingValue(val)}
							render={({ slots }) => (
								<InputOTPGroup>
									{slots.map((slot, i) => (
										<InputOTPSlot key={i} index={i} {...slot} />
									))}
								</InputOTPGroup>
							)}
						/>
						{isLoading && (
							<div className="absolute right-0 top-0 flex h-full items-center pr-4">
								<Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
							</div>
						)}
					</div>
					<div className="flex justify-between">
						<p className="text-xs text-muted-foreground">
							{isLoading ? "Verifying..." : "Enter verification code"}
						</p>
						<Button
							variant="ghost"
							size="sm"
							disabled={loadingValue.length !== 4 || isLoading}
							onClick={handleVerify}
						>
							Verify
						</Button>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * OTP inputs often need to support copy/paste functionality for better UX.
 * This example shows how to implement copy/paste with the InputOTP component.
 */
export const CopyPaste: Story = {
	render: function CopyPasteExample() {
		const [value, setValue] = useState("")
		const { toast } = useToast()
		const code = "752901"

		const copyCode = () => {
			navigator.clipboard.writeText(code)
			toast({
				title: "Copied",
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
				<div className="flex items-center justify-between">
					<code className="relative rounded bg-muted px-[0.5rem] py-[0.3rem] font-mono text-sm">
						{code}
					</code>
					<Button
						variant="outline"
						size="sm"
						className="gap-1 h-8"
						onClick={copyCode}
					>
						<Copy className="h-3.5 w-3.5" />
						Copy
					</Button>
				</div>

				<div className="grid w-full gap-1.5">
					<Label htmlFor="paste-otp">Enter code</Label>
					<InputOTP
						id="paste-otp"
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
							size="sm"
							className="h-auto p-0 text-xs text-muted-foreground"
							onClick={pasteCode}
						>
							Paste from clipboard
						</Button>
						<Button
							variant="link"
							size="sm"
							className="h-auto p-0 text-xs text-muted-foreground"
							onClick={() => setValue("")}
						>
							Clear
						</Button>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * A complete verification form example showing how the InputOTP
 * component can be used in a real application flow.
 */
export const VerificationForm: Story = {
	render: function VerificationFormExample() {
		const [value, setValue] = useState("")
		const [isVerifying, setIsVerifying] = useState(false)
		const [isVerified, setIsVerified] = useState(false)

		const handleVerify = () => {
			setIsVerifying(true)
			// Simulate verification process
			setTimeout(() => {
				setIsVerifying(false)
				setIsVerified(true)
			}, 1500)
		}

		if (isVerified) {
			return (
				<div className="flex flex-col items-center justify-center space-y-4 w-full max-w-sm">
					<div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
						<Check className="h-6 w-6 text-green-600 dark:text-green-400" />
					</div>
					<h3 className="text-xl font-medium">Verification Successful</h3>
					<p className="text-center text-sm text-muted-foreground">
						Your account has been successfully verified.
					</p>
					<Button className="w-full">Continue</Button>
				</div>
			)
		}

		return (
			<div className="w-full max-w-sm space-y-4">
				<div className="space-y-2 text-center">
					<h3 className="text-lg font-medium">Verify Your Account</h3>
					<p className="text-sm text-muted-foreground">
						Enter the verification code sent to your device
					</p>
				</div>

				<div className="space-y-4">
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

					<Button
						className="w-full relative"
						disabled={value.length !== 4 || isVerifying}
						onClick={handleVerify}
					>
						{isVerifying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						{isVerifying ? "Verifying..." : "Verify Account"}
					</Button>
				</div>
			</div>
		)
	},
}
