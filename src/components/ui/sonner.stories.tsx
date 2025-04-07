import { Button } from "./button"
import { Toaster } from "./sonner"
import type { Meta, StoryObj } from "@storybook/react"
import {
	AlertCircle,
	AlertTriangle,
	ArrowUpRight,
	BellRing,
	CheckCircle,
	Clock,
	Info,
	Loader2,
	Mail,
	RefreshCw,
	ThumbsUp,
	X,
} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

// Note: In a real Storybook setup, you would use a proper decorator
// to mock the useTheme hook from next-themes

const meta: Meta<typeof Toaster> = {
	title: "shadcn/Sonner",
	component: Toaster,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		Story => (
			<div>
				<Story />
				<Toaster />
			</div>
		),
	],
}

export default meta
type Story = StoryObj<typeof Toaster>

/**
 * Basic toast example showcasing various types of toasts
 */
export const Default: Story = {
	render: () => {
		return (
			<div className="flex flex-col items-center gap-4">
				<div className="grid grid-cols-2 gap-2">
					<Button
						variant="outline"
						onClick={() => toast("Event has been created")}
					>
						Default Toast
					</Button>
					<Button
						variant="outline"
						onClick={() => toast.success("Event has been created successfully")}
					>
						Success Toast
					</Button>
					<Button
						variant="outline"
						onClick={() => toast.error("Event creation failed")}
					>
						Error Toast
					</Button>
					<Button
						variant="outline"
						onClick={() => toast.warning("Your account is about to expire")}
					>
						Warning Toast
					</Button>
					<Button
						variant="outline"
						onClick={() => toast.info("We've updated our privacy policy")}
					>
						Info Toast
					</Button>
					<Button
						variant="outline"
						onClick={() =>
							toast.loading("Creating your account...", {
								duration: 5000,
							})
						}
					>
						Loading Toast
					</Button>
				</div>
				<p className="text-sm text-muted-foreground text-center mt-4">
					Click any button to trigger a toast notification
				</p>
			</div>
		)
	},
}

/**
 * Toast with custom styling and positioning
 */
export const CustomStyling: Story = {
	decorators: [
		Story => (
			<div>
				<Story />
				<Toaster
					position="bottom-right"
					toastOptions={{
						className: "border-primary",
						duration: 5000,
					}}
				/>
			</div>
		),
	],
	render: () => {
		return (
			<div className="flex flex-col gap-4">
				<Button
					onClick={() =>
						toast("Custom styled toast", {
							icon: <Info className="h-4 w-4 text-blue-500" />,
							description: "This toast has custom styling",
							style: {
								backgroundColor: "var(--background)",
								color: "var(--foreground)",
								border: "2px solid var(--primary)",
							},
						})
					}
				>
					Show Custom Toast
				</Button>
				<p className="text-sm text-muted-foreground">
					Positioned in the bottom-right corner with primary border
				</p>
			</div>
		)
	},
}

/**
 * Toast with interactive actions and close button
 */
export const InteractiveToast: Story = {
	render: () => {
		const showActionToast = () => {
			toast(
				<div className="flex flex-col gap-1">
					<div className="font-semibold">New comment</div>
					<div className="text-sm text-muted-foreground">
						Jane Smith commented on your post
					</div>
				</div>,
				{
					action: {
						label: "View",
						onClick: () => console.log("Action clicked"),
					},
					cancel: {
						label: "Dismiss",
						onClick: () => console.log("Cancel clicked"),
					},
					icon: <BellRing className="h-4 w-4" />,
					closeButton: true,
				},
			)
		}

		return (
			<div className="flex flex-col gap-4">
				<Button onClick={showActionToast}>Toast with Actions</Button>
				<p className="text-sm text-muted-foreground">
					Contains View/Dismiss actions and a close button
				</p>
			</div>
		)
	},
}

/**
 * Demonstrating promise-based toasts for async operations
 */
export const PromiseToast: Story = {
	render: function PromiseToastExample() {
		interface UserData {
			name: string
			email: string
		}

		const mockPromise = () => {
			return new Promise<UserData>((resolve, reject) => {
				setTimeout(() => {
					// Randomly resolve or reject to demonstrate both scenarios
					if (Math.random() > 0.5) {
						resolve({ name: "John Doe", email: "john@example.com" })
					} else {
						reject(new Error("Failed to fetch user data"))
					}
				}, 2000)
			})
		}

		const handlePromiseToast = () => {
			toast.promise(mockPromise(), {
				loading: "Fetching user data...",
				success: (data: UserData) => {
					return (
						<div className="flex flex-col gap-1">
							<div className="font-semibold">User data loaded</div>
							<div className="text-sm">
								Name: {data.name}
								<br />
								Email: {data.email}
							</div>
						</div>
					)
				},
				error: (err: Error) => {
					return `Error: ${err.message}`
				},
			})
		}

		return (
			<div className="flex flex-col gap-4">
				<Button onClick={handlePromiseToast}>Promise Toast</Button>
				<p className="text-sm text-muted-foreground">
					Shows loading/success/error states for async operations
				</p>
			</div>
		)
	},
}

/**
 * Custom styled success and error toast variants
 */
export const RichToasts: Story = {
	render: () => {
		const showSuccessToast = () => {
			toast.custom(id => (
				<div
					className={`max-w-md w-full animate-in fade-in-0 slide-in-from-top-4 bg-white dark:bg-zinc-900 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
				>
					<div className="flex-1 w-0 p-4">
						<div className="flex items-start">
							<div className="flex-shrink-0 pt-0.5">
								<CheckCircle className="h-10 w-10 text-green-500" />
							</div>
							<div className="ml-3 flex-1">
								<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
									Payment successful
								</p>
								<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
									Your payment of $99.00 USD has been processed successfully.
								</p>
								<div className="mt-3 flex gap-2">
									<Button size="sm" variant="outline" className="h-8">
										<ArrowUpRight className="mr-1 h-3 w-3" />
										View receipt
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex border-l border-gray-200 dark:border-gray-700">
						<button
							onClick={() => toast.dismiss(id)}
							className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
						>
							<X className="h-5 w-5" />
						</button>
					</div>
				</div>
			))
		}

		const showErrorToast = () => {
			toast.custom(id => (
				<div
					className={`max-w-md w-full animate-in fade-in-0 slide-in-from-top-4 bg-white dark:bg-zinc-900 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-red-500`}
				>
					<div className="flex-1 w-0 p-4">
						<div className="flex items-start">
							<div className="flex-shrink-0 pt-0.5">
								<AlertCircle className="h-10 w-10 text-red-500" />
							</div>
							<div className="ml-3 flex-1">
								<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
									Error Processing Payment
								</p>
								<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
									Your card was declined. Please try a different payment method.
								</p>
								<div className="mt-3 flex gap-2">
									<Button size="sm" variant="destructive" className="h-8">
										<RefreshCw className="mr-1 h-3 w-3" />
										Try again
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="flex border-l border-gray-200 dark:border-gray-700">
						<button
							onClick={() => toast.dismiss(id)}
							className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
						>
							<X className="h-5 w-5" />
						</button>
					</div>
				</div>
			))
		}

		return (
			<div className="flex gap-2">
				<Button
					variant="outline"
					className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
					onClick={showSuccessToast}
				>
					<CheckCircle className="mr-2 h-4 w-4" />
					Show Success
				</Button>
				<Button
					variant="outline"
					className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200"
					onClick={showErrorToast}
				>
					<AlertTriangle className="mr-2 h-4 w-4" />
					Show Error
				</Button>
			</div>
		)
	},
}

/**
 * Notification style toasts
 */
export const NotificationToasts: Story = {
	render: () => {
		const showIncomingCall = () => {
			toast.custom(
				id => (
					<div className="max-w-md w-full bg-white dark:bg-zinc-900 shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5">
						<div className="flex p-4 border-b border-gray-200 dark:border-gray-700">
							<div className="flex items-start">
								<div className="flex-shrink-0 pt-0.5">
									<div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
										<Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
									</div>
								</div>
								<div className="ml-3 flex-1">
									<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
										New Message
									</p>
									<p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
										Sarah Johnson sent you a message
									</p>
								</div>
							</div>
							<button
								onClick={() => toast.dismiss(id)}
								className="ml-4 flex-shrink-0 flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
							>
								<X className="h-5 w-5" />
							</button>
						</div>
						<div className="p-4">
							<p className="text-sm text-gray-600 dark:text-gray-300 italic">
								"Hi! I wanted to follow up on our meeting yesterday..."
							</p>
						</div>
						<div className="flex border-t border-gray-200 dark:border-gray-700">
							<button
								onClick={() => {
									toast.dismiss(id)
									toast.success("Opened message", { duration: 2000 })
								}}
								className="w-full border-transparent text-primary hover:text-primary-focus font-medium rounded-none rounded-bl-lg p-4 flex items-center justify-center text-sm focus:outline-none transition duration-150 ease-in-out"
							>
								Open
							</button>
							<button
								onClick={() => toast.dismiss(id)}
								className="w-full border-transparent text-gray-700 dark:text-gray-200 rounded-none rounded-br-lg p-4 flex items-center justify-center text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none transition duration-150 ease-in-out"
							>
								Dismiss
							</button>
						</div>
					</div>
				),
				{ duration: 10000 },
			)
		}

		return (
			<div className="flex flex-col gap-4">
				<Button onClick={showIncomingCall}>Show Message Notification</Button>
				<p className="text-sm text-muted-foreground">
					Shows a rich notification-style toast with actions
				</p>
			</div>
		)
	},
}

/**
 * Multiple toast variants in a single demo
 */
export const ToastGallery: Story = {
	render: function ToastGalleryExample() {
		const showDefaultToast = () => toast("Default toast message")

		const showDescriptionToast = () =>
			toast("Profile updated", {
				description: "Your profile has been updated successfully",
			})

		const showCustomIconToast = () =>
			toast("Thumbs up", {
				icon: <ThumbsUp className="h-4 w-4" />,
			})

		const showLoadingToast = () => {
			const toastId = toast.loading(
				<div className="flex items-center gap-2">
					<Loader2 className="h-4 w-4 animate-spin" />
					<span>Processing payment...</span>
				</div>,
				{ duration: 5000 },
			)

			// Simulate completion after 3 seconds
			setTimeout(() => {
				toast.success("Payment completed", { id: toastId })
			}, 3000)
		}

		const showTimerToast = () =>
			toast(
				<div className="flex items-center gap-2">
					<Clock className="h-4 w-4" />
					<span>Meeting in 5 minutes</span>
				</div>,
			)

		return (
			<div className="grid grid-cols-2 gap-2 min-w-[300px]">
				<Button variant="outline" onClick={showDefaultToast}>
					Default Toast
				</Button>
				<Button variant="outline" onClick={showDescriptionToast}>
					With Description
				</Button>
				<Button variant="outline" onClick={showCustomIconToast}>
					Custom Icon
				</Button>
				<Button variant="outline" onClick={showLoadingToast}>
					Loading → Success
				</Button>
				<Button variant="outline" onClick={showTimerToast}>
					With Icon Component
				</Button>
			</div>
		)
	},
}

/**
 * Showcase of different positioning options
 */
export const ToastPositions: Story = {
	render: function ToastPositionsExample() {
		const positions = [
			"top-left",
			"top-center",
			"top-right",
			"bottom-left",
			"bottom-center",
			"bottom-right",
		] as const

		const [position, setPosition] =
			useState<(typeof positions)[number]>("top-right")

		const showPositionedToast = () => {
			toast(`Toast position: ${position}`, {
				description: `This toast is displayed at the ${position} position`,
			})
		}

		return (
			<div className="w-full max-w-md space-y-6">
				<div className="space-y-2">
					<div className="flex justify-between">
						<h3 className="text-sm font-medium">Toast Position</h3>
						<span className="text-sm text-muted-foreground">{position}</span>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{positions.map(pos => (
							<Button
								key={pos}
								variant={position === pos ? "default" : "outline"}
								size="sm"
								onClick={() => setPosition(pos)}
								className="text-xs"
							>
								{pos}
							</Button>
						))}
					</div>
				</div>

				<Toaster position={position} />

				<Button onClick={showPositionedToast}>Show Toast</Button>
			</div>
		)
	},
}
