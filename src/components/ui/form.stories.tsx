import { zodResolver } from "@hookform/resolvers/zod"
import type { Meta, StoryObj } from "@storybook/react"
import React, { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const meta: Meta<typeof Form> = {
	title: "Components/Form",
	component: Form,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Form>

/**
 * Basic login form example
 */
export const LoginForm: Story = {
	render: function LoginStory() {
		const formSchema = z.object({
			email: z.string().email({
				message: "Please enter a valid email address",
			}),
			password: z.string().min(8, {
				message: "Password must be at least 8 characters",
			}),
			remember: z.boolean().default(false),
		})

		const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				email: "",
				password: "",
				remember: false,
			},
		})

		function onSubmit(values: z.infer<typeof formSchema>) {
			console.log(values)
		}

		return (
			<div className="w-full max-w-md space-y-6 rounded-lg border p-6 shadow-sm">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">Login</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Enter your credentials to access your account
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="example@example.com" {...field} />
									</FormControl>
									<FormDescription>
										We'll never share your email with anyone else.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="remember"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel>Remember me</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Login
						</Button>
					</form>
				</Form>
			</div>
		)
	},
}

/**
 * Registration form with validation
 */
export const RegistrationForm: Story = {
	render: function RegistrationStory() {
		const formSchema = z
			.object({
				username: z.string().min(3, {
					message: "Username must be at least 3 characters.",
				}),
				email: z.string().email({
					message: "Please enter a valid email address.",
				}),
				password: z.string().min(8, {
					message: "Password must be at least 8 characters.",
				}),
				confirmPassword: z.string(),
				terms: z.boolean().refine(val => val === true, {
					message: "You must agree to the terms and conditions.",
				}),
			})
			.refine(data => data.password === data.confirmPassword, {
				message: "Passwords don't match.",
				path: ["confirmPassword"],
			})

		const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
				terms: false,
			},
		})

		function onSubmit(values: z.infer<typeof formSchema>) {
			console.log(values)
		}

		return (
			<div className="w-full max-w-md space-y-6 rounded-lg border p-6 shadow-sm">
				<div className="space-y-2 text-center">
					<h1 className="text-3xl font-bold">Create an account</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Enter your information to create an account
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="johndoe" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="john.doe@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="terms"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel>
											I agree to the{" "}
											<a href="#" className="text-primary underline">
												terms and conditions
											</a>
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							Create account
						</Button>
					</form>
				</Form>
			</div>
		)
	},
}

/**
 * Profile settings form
 */
export const ProfileSettingsForm: Story = {
	render: function ProfileSettingsStory() {
		const formSchema = z.object({
			name: z.string().min(2, {
				message: "Name must be at least 2 characters.",
			}),
			username: z.string().min(2, {
				message: "Username must be at least 2 characters.",
			}),
			bio: z.string().max(160, {
				message: "Bio must not be longer than 160 characters.",
			}),
			urls: z.object({
				twitter: z
					.string()
					.url({ message: "Please enter a valid URL." })
					.optional()
					.or(z.literal("")),
				github: z
					.string()
					.url({ message: "Please enter a valid URL." })
					.optional()
					.or(z.literal("")),
				website: z
					.string()
					.url({ message: "Please enter a valid URL." })
					.optional()
					.or(z.literal("")),
			}),
		})

		const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				name: "John Doe",
				username: "johndoe",
				bio: "Full-stack developer passionate about building great user experiences.",
				urls: {
					twitter: "https://twitter.com/johndoe",
					github: "https://github.com/johndoe",
					website: "https://johndoe.com",
				},
			},
		})

		function onSubmit(values: z.infer<typeof formSchema>) {
			console.log(values)
		}

		return (
			<div className="w-full max-w-4xl rounded-lg border p-6 shadow-sm">
				<div className="mb-4">
					<h1 className="text-2xl font-bold">Profile Settings</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Update your profile information
					</p>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is your public display name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is your public username.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="bio"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bio</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us a little bit about yourself"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										You can @mention other users and organizations.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							<h3 className="mb-4 text-lg font-medium">Social Links</h3>
							<div className="space-y-4">
								<FormField
									control={form.control}
									name="urls.twitter"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Twitter</FormLabel>
											<FormControl>
												<Input
													placeholder="https://twitter.com/username"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="urls.github"
									render={({ field }) => (
										<FormItem>
											<FormLabel>GitHub</FormLabel>
											<FormControl>
												<Input
													placeholder="https://github.com/username"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="urls.website"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Website</FormLabel>
											<FormControl>
												<Input
													placeholder="https://yourwebsite.com"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<Button type="submit">Save changes</Button>
					</form>
				</Form>
			</div>
		)
	},
}

/**
 * Multi-step form example
 */
export const MultiStepForm: Story = {
	render: function MultiStepStory() {
		const [step, setStep] = useState(1)
		const totalSteps = 3

		const formSchema = z.object({
			// Step 1: Personal Information
			firstName: z.string().min(2, { message: "First name is required" }),
			lastName: z.string().min(2, { message: "Last name is required" }),
			email: z.string().email({ message: "Invalid email address" }),

			// Step 2: Address Information
			address: z.string().min(5, { message: "Address is required" }),
			city: z.string().min(2, { message: "City is required" }),
			state: z.string().min(2, { message: "State is required" }),
			zipCode: z.string().min(5, { message: "Zip code is required" }),

			// Step 3: Account Preferences
			accountType: z.enum(["personal", "business"], {
				required_error: "Account type is required",
			}),
			notifications: z.boolean().default(true),
			marketingEmails: z.boolean().default(false),
		})

		const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				firstName: "",
				lastName: "",
				email: "",
				address: "",
				city: "",
				state: "",
				zipCode: "",
				accountType: "personal",
				notifications: true,
				marketingEmails: false,
			},
			mode: "onChange",
		})

		function nextStep() {
			if (step < totalSteps) {
				setStep(step + 1)
			}
		}

		function prevStep() {
			if (step > 1) {
				setStep(step - 1)
			}
		}

		function onSubmit(values: z.infer<typeof formSchema>) {
			console.log("Form submitted:", values)
		}

		return (
			<div className="w-full max-w-md rounded-lg border p-6 shadow-sm">
				<div className="mb-6 space-y-2">
					<h1 className="text-2xl font-bold">Create Your Account</h1>
					<div className="flex items-center space-x-1">
						{Array.from({ length: totalSteps }).map((_, index) => (
							<React.Fragment key={index}>
								<div
									className={cn(
										"h-2 w-12 rounded",
										step > index ? "bg-primary" : "bg-muted",
									)}
								/>
								{index < totalSteps - 1 && <div className="w-2" />}
							</React.Fragment>
						))}
					</div>
					<p className="text-sm text-muted-foreground">
						Step {step} of {totalSteps}:{" "}
						{step === 1
							? "Personal Information"
							: step === 2
							? "Address"
							: "Preferences"}
					</p>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						{step === 1 && (
							<>
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>First name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Last name</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Email</FormLabel>
											<FormControl>
												<Input type="email" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}

						{step === 2 && (
							<>
								<FormField
									control={form.control}
									name="address"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Address</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="city"
									render={({ field }) => (
										<FormItem>
											<FormLabel>City</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="grid grid-cols-2 gap-4">
									<FormField
										control={form.control}
										name="state"
										render={({ field }) => (
											<FormItem>
												<FormLabel>State</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="zipCode"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Zip Code</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							</>
						)}

						{step === 3 && (
							<>
								<FormField
									control={form.control}
									name="accountType"
									render={({ field }) => (
										<FormItem className="space-y-3">
											<FormLabel>Account Type</FormLabel>
											<FormControl>
												<RadioGroup
													onValueChange={field.onChange}
													defaultValue={field.value}
													className="flex flex-col space-y-1"
												>
													<FormItem className="flex items-center space-x-3 space-y-0">
														<FormControl>
															<RadioGroupItem value="personal" />
														</FormControl>
														<FormLabel className="font-normal">
															Personal
														</FormLabel>
													</FormItem>
													<FormItem className="flex items-center space-x-3 space-y-0">
														<FormControl>
															<RadioGroupItem value="business" />
														</FormControl>
														<FormLabel className="font-normal">
															Business
														</FormLabel>
													</FormItem>
												</RadioGroup>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="notifications"
									render={({ field }) => (
										<FormItem className="flex flex-row items-start space-x-3 space-y-0">
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<div className="space-y-1 leading-none">
												<FormLabel>Enable notifications</FormLabel>
												<FormDescription>
													Receive notifications about account activity.
												</FormDescription>
											</div>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="marketingEmails"
									render={({ field }) => (
										<FormItem className="flex flex-row items-start space-x-3 space-y-0">
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={field.onChange}
												/>
											</FormControl>
											<div className="space-y-1 leading-none">
												<FormLabel>Marketing emails</FormLabel>
												<FormDescription>
													Receive emails about new products and features.
												</FormDescription>
											</div>
										</FormItem>
									)}
								/>
							</>
						)}

						<div className="flex justify-between pt-4">
							<Button
								type="button"
								variant="outline"
								onClick={prevStep}
								disabled={step === 1}
							>
								Previous
							</Button>
							{step < totalSteps ? (
								<Button type="button" onClick={nextStep}>
									Next
								</Button>
							) : (
								<Button type="submit">Submit</Button>
							)}
						</div>
					</form>
				</Form>
			</div>
		)
	},
}

/**
 * Dynamic form fields
 */
export const DynamicForm: Story = {
	render: function DynamicFormStory() {
		const formSchema = z.object({
			skills: z
				.array(
					z.object({
						name: z.string().min(1, { message: "Skill name is required" }),
						proficiency: z
							.string()
							.min(1, { message: "Proficiency level is required" }),
					}),
				)
				.min(1, { message: "At least one skill is required" }),
		})

		type FormValues = z.infer<typeof formSchema>

		const form = useForm<FormValues>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				skills: [{ name: "", proficiency: "beginner" }],
			},
		})

		const { fields, append, remove } = useFieldArray({
			control: form.control,
			name: "skills",
		})

		function onSubmit(values: FormValues) {
			console.log(values)
		}

		return (
			<div className="w-full max-w-md rounded-lg border p-6 shadow-sm">
				<div className="mb-6 space-y-2">
					<h1 className="text-2xl font-bold">Skills Assessment</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Please list your skills and proficiency levels
					</p>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-4">
							{fields.map((field, index) => (
								<div key={field.id} className="rounded-md border p-4">
									<div className="flex justify-between mb-2">
										<h3 className="text-sm font-medium">Skill {index + 1}</h3>
										{index > 0 && (
											<Button
												type="button"
												variant="ghost"
												size="sm"
												onClick={() => remove(index)}
											>
												Remove
											</Button>
										)}
									</div>
									<div className="grid gap-4">
										<FormField
											control={form.control}
											name={`skills.${index}.name`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Skill name</FormLabel>
													<FormControl>
														<Input {...field} />
													</FormControl>
													<FormMessage />
												</FormItem>
											)}
										/>
										<FormField
											control={form.control}
											name={`skills.${index}.proficiency`}
											render={({ field }) => (
												<FormItem>
													<FormLabel>Proficiency</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select proficiency level" />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															<SelectItem value="beginner">Beginner</SelectItem>
															<SelectItem value="intermediate">
																Intermediate
															</SelectItem>
															<SelectItem value="advanced">Advanced</SelectItem>
															<SelectItem value="expert">Expert</SelectItem>
														</SelectContent>
													</Select>
													<FormMessage />
												</FormItem>
											)}
										/>
									</div>
								</div>
							))}
						</div>

						<Button
							type="button"
							variant="outline"
							className="w-full"
							onClick={() => append({ name: "", proficiency: "beginner" })}
						>
							Add another skill
						</Button>

						<Button type="submit" className="w-full">
							Submit
						</Button>
					</form>
				</Form>
			</div>
		)
	},
}
