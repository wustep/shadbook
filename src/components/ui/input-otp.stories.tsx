import type { Meta, StoryObj } from "@storybook/react"
import {
	AlertCircle,
	Check,
	Copy,
	Loader2,
	LockKeyhole,
	Mail,
	ShieldCheck,
	Smartphone,
} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { Toaster } from "@/components/ui/sonner"

/**
 * The InputOTP component provides a way for users to enter one-time passcodes or other
 * segmented inputs. It supports validation, states, copy/paste functionality, and custom styling.
 *
 * This component is ideal for verification flows, secure authentication, and any scenario
 * where users need to enter codes received via SMS, email, or authenticator apps.
 */
const meta = {
	title: "Components/InputOTP",
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
	decorators: [
		Story => (
			<>
				<Toaster />
				<Story />
			</>
		),
	],
} satisfies Meta<typeof InputOTP>

export default meta
type Story = StoryObj<typeof InputOTP>

/**
 * The basic usage of the InputOTP component with a 4-digit code.
 * This is the most common configuration for SMS verification codes.
 */
export const Basic: Story = {
	render: function BasicExample() {
		const [value, setValue] = useState("")

		return (
			<div className="w-full max-w-sm space-y-2">
				<Label htmlFor="basic-otp">Enter verification code</Label>
				<InputOTP
					id="basic-otp"
					maxLength={4}
					value={value}
					onChange={val => setValue(val)}
				>
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
						<InputOTPSlot index={3} />
					</InputOTPGroup>
				</InputOTP>
				<p className="text-xs text-muted-foreground">
					A 4-digit code was sent to your device
				</p>
			</div>
		)
	},
}

/**
 * InputOTP components can be configured with different lengths to accommodate
 * various security requirements. This example demonstrates both 4-digit and 6-digit variants.
 */
export const DifferentLengths: Story = {
	render: function DifferentLengthsExample() {
		const [fourDigit, setFourDigit] = useState("")
		const [sixDigit, setSixDigit] = useState("")

		return (
			<div className="flex w-full max-w-sm flex-col gap-6">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="text-base">OTP Code Lengths</CardTitle>
						<CardDescription>
							Different code lengths for various security needs
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="grid w-full gap-1.5">
							<div className="flex items-center justify-between">
								<Label htmlFor="four-digit">4-digit code</Label>
								<span className="text-xs text-muted-foreground">
									Standard security
								</span>
							</div>
							<InputOTP
								id="four-digit"
								maxLength={4}
								value={fourDigit}
								onChange={val => setFourDigit(val)}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
						</div>

						<div className="grid w-full gap-1.5">
							<div className="flex items-center justify-between">
								<Label htmlFor="six-digit">6-digit code</Label>
								<span className="text-xs text-muted-foreground">
									Enhanced security
								</span>
							</div>
							<InputOTP
								id="six-digit"
								maxLength={6}
								value={sixDigit}
								onChange={val => setSixDigit(val)}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
						</div>
					</CardContent>
				</Card>
			</div>
		)
	},
}

/**
 * For longer codes, separators can be added to improve readability.
 * This pattern is common for credit card numbers, product keys, and longer authentication codes.
 */
export const WithSeparators: Story = {
	render: function WithSeparatorsExample() {
		const [value, setValue] = useState("")

		return (
			<div className="w-full max-w-sm space-y-4">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="text-base">Grouped Input</CardTitle>
						<CardDescription>
							Using separators to improve readability
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="space-y-2">
							<Label htmlFor="with-separators">Authentication code</Label>
							<InputOTP
								id="with-separators"
								maxLength={6}
								value={value}
								onChange={val => setValue(val)}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
							<div className="flex items-center text-xs text-muted-foreground pt-2">
								<Smartphone className="h-3.5 w-3.5 mr-1" />
								Code format: XX-XX-XX
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		)
	},
}

/**
 * InputOTP components can display different validation states.
 * This example demonstrates valid and invalid states with contextual styling and feedback.
 */
export const ValidationStates: Story = {
	render: function ValidationStatesExample() {
		const [validValue, setValidValue] = useState("1234")
		const [invalidValue, setInvalidValue] = useState("5678")

		return (
			<div className="w-full max-w-sm space-y-6">
				<Card className="border-green-100 dark:border-green-900/40">
					<CardHeader className="pb-3">
						<CardTitle className="text-base text-green-700 dark:text-green-400">
							Valid Input
						</CardTitle>
						<CardDescription>
							When the code has been verified successfully
						</CardDescription>
					</CardHeader>
					<CardContent>
						<InputOTP
							id="valid-otp"
							maxLength={4}
							value={validValue}
							onChange={val => setValidValue(val)}
						>
							<InputOTPGroup>
								<InputOTPSlot
									index={0}
									className="border-green-500 focus-visible:ring-green-300/50"
								/>
								<InputOTPSlot
									index={1}
									className="border-green-500 focus-visible:ring-green-300/50"
								/>
								<InputOTPSlot
									index={2}
									className="border-green-500 focus-visible:ring-green-300/50"
								/>
								<InputOTPSlot
									index={3}
									className="border-green-500 focus-visible:ring-green-300/50"
								/>
							</InputOTPGroup>
						</InputOTP>
						<div className="flex items-center text-xs text-green-500 mt-2">
							<Check className="mr-1 h-3.5 w-3.5" />
							Verification code is correct
						</div>
					</CardContent>
				</Card>

				<Card className="border-red-100 dark:border-red-900/40">
					<CardHeader className="pb-3">
						<CardTitle className="text-base text-red-700 dark:text-red-400">
							Invalid Input
						</CardTitle>
						<CardDescription>
							When the code entered is incorrect
						</CardDescription>
					</CardHeader>
					<CardContent>
						<InputOTP
							id="invalid-otp"
							maxLength={4}
							value={invalidValue}
							onChange={val => setInvalidValue(val)}
						>
							<InputOTPGroup>
								<InputOTPSlot
									index={0}
									className="border-red-500 focus-visible:ring-red-300/50"
								/>
								<InputOTPSlot
									index={1}
									className="border-red-500 focus-visible:ring-red-300/50"
								/>
								<InputOTPSlot
									index={2}
									className="border-red-500 focus-visible:ring-red-300/50"
								/>
								<InputOTPSlot
									index={3}
									className="border-red-500 focus-visible:ring-red-300/50"
								/>
							</InputOTPGroup>
						</InputOTP>
						<div className="flex items-center text-xs text-red-500 mt-2">
							<AlertCircle className="mr-1 h-3.5 w-3.5" />
							Invalid verification code. Please try again.
						</div>
					</CardContent>
				</Card>
			</div>
		)
	},
}

/**
 * The InputOTP component can be used in different states including disabled and loading.
 * These variants provide contextual feedback to users during the verification process.
 */
export const States: Story = {
	render: function StatesExample() {
		const [value, setValue] = useState("")
		const [loadingValue, setLoadingValue] = useState("1234")
		const [isLoading, setIsLoading] = useState(false)

		const handleVerify = () => {
			setIsLoading(true)
			// Simulate verification
			setTimeout(() => {
				setIsLoading(false)
				toast.success("Code verified successfully")
			}, 2000)
		}

		return (
			<div className="w-full max-w-sm space-y-6">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="text-base">Component States</CardTitle>
						<CardDescription>
							Disabled and loading variants for different interaction phases
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="disabled-otp" className="text-muted-foreground">
								Disabled State
							</Label>
							<InputOTP
								id="disabled-otp"
								maxLength={4}
								value={value}
								onChange={val => setValue(val)}
								disabled
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
							<p className="text-xs text-muted-foreground">
								Input is disabled until prerequisites are met
							</p>
						</div>

						<div className="space-y-2">
							<Label htmlFor="loading-otp">Verification State</Label>
							<div className="flex flex-row items-center w-full justify-between">
								<InputOTP
									id="loading-otp"
									maxLength={4}
									value={loadingValue}
									onChange={val => setLoadingValue(val)}
								>
									<InputOTPGroup>
										<InputOTPSlot index={0} />
										<InputOTPSlot index={1} />
										<InputOTPSlot index={2} />
										<InputOTPSlot index={3} />
									</InputOTPGroup>
								</InputOTP>
								{isLoading ? (
									<div className="w-8">
										<Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
									</div>
								) : (
									<Button
										variant="ghost"
										size="sm"
										disabled={loadingValue.length !== 4 || isLoading}
										onClick={handleVerify}
									>
										Verify
									</Button>
								)}
							</div>
							<div className="flex justify-between">
								<p className="text-xs text-muted-foreground">
									{isLoading
										? "Verifying code..."
										: "Enter the code sent to your device"}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		)
	},
}

/**
 * Implementing copy/paste functionality improves user experience with OTP inputs.
 * This example demonstrates a complete pattern for copying from a source and pasting into the input.
 */
export const CopyPaste: Story = {
	render: function CopyPasteExample() {
		const [value, setValue] = useState("")
		const code = "752901"

		const copyCode = () => {
			navigator.clipboard.writeText(code)
			toast(`Code ${code} copied to clipboard`)
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
			<div className="w-full max-w-sm">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle className="text-base">
							Copy & Paste Functionality
						</CardTitle>
						<CardDescription>
							Enhanced UX with clipboard support
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center justify-between p-2 bg-muted rounded-md">
							<code className="text-sm font-mono">{code}</code>
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

						<div className="space-y-2">
							<Label htmlFor="paste-otp">Enter authentication code</Label>
							<InputOTP
								id="paste-otp"
								maxLength={6}
								value={value}
								onChange={val => setValue(val)}
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
								</InputOTPGroup>
								<InputOTPSeparator />
								<InputOTPGroup>
									<InputOTPSlot index={3} />
									<InputOTPSlot index={4} />
									<InputOTPSlot index={5} />
								</InputOTPGroup>
							</InputOTP>
							<div className="flex justify-between pt-1">
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
					</CardContent>
					<CardFooter className="border-t pt-3 pb-0">
						<div className="flex items-center text-xs text-muted-foreground w-full">
							<Mail className="h-3.5 w-3.5 mr-1.5" />
							Code sent to j***@example.com
						</div>
					</CardFooter>
				</Card>
			</div>
		)
	},
}

/**
 * A complete verification form example showing how the InputOTP component
 * can be used in a real application flow with appropriate UI feedback.
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
				<Card className="w-full max-w-sm border-green-100 dark:border-green-900/40">
					<CardContent className="pt-6 flex flex-col items-center justify-center space-y-4">
						<div className="rounded-full bg-green-100 p-3 dark:bg-green-900/50">
							<ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
						</div>
						<div className="space-y-2 text-center">
							<h3 className="text-xl font-medium">Verification Successful</h3>
							<p className="text-center text-sm text-muted-foreground">
								Your account has been successfully verified and secured.
							</p>
						</div>
						<Button className="w-full">Continue to Account</Button>
					</CardContent>
				</Card>
			)
		}

		return (
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<LockKeyhole className="h-5 w-5" />
						Account Verification
					</CardTitle>
					<CardDescription>
						Enter the verification code sent to your device to continue
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<InputOTP
							maxLength={4}
							value={value}
							onChange={val => setValue(val)}
						>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
								<InputOTPSlot index={3} />
							</InputOTPGroup>
						</InputOTP>
						<div className="text-xs text-muted-foreground">
							The code expires in{" "}
							<span className="text-foreground font-medium">10:00</span> minutes
						</div>
					</div>

					<div className="flex justify-center">
						<Button variant="link" className="text-xs text-muted-foreground">
							Didn't receive a code? Resend
						</Button>
					</div>
				</CardContent>
				<CardFooter className="border-t pt-4">
					<Button
						className="w-full relative"
						disabled={value.length !== 4 || isVerifying}
						onClick={handleVerify}
					>
						{isVerifying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						{isVerifying ? "Verifying..." : "Verify Account"}
					</Button>
				</CardFooter>
			</Card>
		)
	},
}
