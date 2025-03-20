import { Button } from "./button"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./drawer"
import { Input } from "./input"
import { Label } from "./label"
import type { Meta, StoryObj } from "@storybook/react"
import {
	CreditCard,
	LogOut,
	Minus,
	Plus,
	Settings,
	ShoppingBag,
	User,
	X,
} from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Drawer> = {
	title: "shadcn/Drawer",
	component: Drawer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		direction: {
			control: { type: "select" },
			options: ["top", "bottom", "left", "right"],
			description: "The direction of the drawer",
			defaultValue: "bottom",
		},
	},
}

export default meta
type Story = StoryObj<typeof Drawer>

/**
 * Basic drawer example
 */
export const Default: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Edit profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile here. Click save when you're done.
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4">
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Enter your name" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="Enter your email" />
							</div>
						</div>
					</div>
					<DrawerFooter>
						<Button>Save changes</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	),
}

/**
 * Shopping cart drawer
 */
export const ShoppingCart: Story = {
	render: function ShoppingCartDrawer() {
		const [items, setItems] = useState([
			{ id: 1, name: "Product 1", price: 29.99, quantity: 1 },
			{ id: 2, name: "Product 2", price: 49.99, quantity: 2 },
		])

		const addItem = (id: number) => {
			setItems(
				items.map(item =>
					item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
				),
			)
		}

		const removeItem = (id: number) => {
			setItems(
				items
					.map(item =>
						item.id === id && item.quantity > 0
							? { ...item, quantity: item.quantity - 1 }
							: item,
					)
					.filter(item => item.quantity > 0),
			)
		}

		const total = items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0,
		)

		return (
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="outline" className="flex items-center gap-2">
						<ShoppingBag className="h-4 w-4" />
						<span>
							Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
						</span>
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className="mx-auto w-full max-w-sm">
						<DrawerHeader>
							<DrawerTitle>Shopping Cart</DrawerTitle>
							<DrawerDescription>
								Review your items before checking out
							</DrawerDescription>
						</DrawerHeader>
						<div className="p-4">
							{items.length > 0 ? (
								<div className="divide-y">
									{items.map(item => (
										<div
											key={item.id}
											className="flex items-center justify-between py-4"
										>
											<div>
												<p className="font-medium">{item.name}</p>
												<p className="text-sm text-muted-foreground">
													${item.price.toFixed(2)}
												</p>
											</div>
											<div className="flex items-center gap-2">
												<Button
													variant="outline"
													size="icon"
													className="h-8 w-8"
													onClick={() => removeItem(item.id)}
												>
													<Minus className="h-3 w-3" />
												</Button>
												<span>{item.quantity}</span>
												<Button
													variant="outline"
													size="icon"
													className="h-8 w-8"
													onClick={() => addItem(item.id)}
												>
													<Plus className="h-3 w-3" />
												</Button>
											</div>
										</div>
									))}
								</div>
							) : (
								<div className="flex flex-col items-center justify-center py-8 text-center">
									<ShoppingBag className="h-12 w-12 text-muted-foreground mb-2" />
									<h3 className="text-lg font-medium">Your cart is empty</h3>
									<p className="text-sm text-muted-foreground mt-1">
										Add items to your cart to see them here
									</p>
								</div>
							)}
						</div>
						<DrawerFooter>
							<div className="flex items-center justify-between py-2">
								<span className="text-sm font-medium">Total</span>
								<span className="text-lg font-bold">${total.toFixed(2)}</span>
							</div>
							<Button>Checkout</Button>
							<DrawerClose asChild>
								<Button variant="outline">Continue Shopping</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer>
		)
	},
}

/**
 * Different directions example
 */
export const Directions: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4">
			<Drawer direction="top">
				<DrawerTrigger asChild>
					<Button variant="outline">Open Top</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className="mx-auto w-full max-w-sm">
						<DrawerHeader>
							<DrawerTitle>Top Drawer</DrawerTitle>
							<DrawerDescription>
								This drawer opens from the top of the screen
							</DrawerDescription>
						</DrawerHeader>
						<div className="p-4 flex justify-center">
							<DrawerClose asChild>
								<Button variant="outline">Close</Button>
							</DrawerClose>
						</div>
					</div>
				</DrawerContent>
			</Drawer>

			<Drawer direction="right">
				<DrawerTrigger asChild>
					<Button variant="outline">Open Right</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Right Drawer</DrawerTitle>
						<DrawerDescription>
							This drawer opens from the right of the screen
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 flex justify-center">
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</div>
				</DrawerContent>
			</Drawer>

			<Drawer direction="bottom">
				<DrawerTrigger asChild>
					<Button variant="outline">Open Bottom</Button>
				</DrawerTrigger>
				<DrawerContent>
					<div className="mx-auto w-full max-w-sm">
						<DrawerHeader>
							<DrawerTitle>Bottom Drawer</DrawerTitle>
							<DrawerDescription>
								This drawer opens from the bottom of the screen
							</DrawerDescription>
						</DrawerHeader>
						<div className="p-4 flex justify-center">
							<DrawerClose asChild>
								<Button variant="outline">Close</Button>
							</DrawerClose>
						</div>
					</div>
				</DrawerContent>
			</Drawer>

			<Drawer direction="left">
				<DrawerTrigger asChild>
					<Button variant="outline">Open Left</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Left Drawer</DrawerTitle>
						<DrawerDescription>
							This drawer opens from the left of the screen
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 flex justify-center">
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	),
}

/**
 * Settings panel drawer example
 */
export const SettingsPanel: Story = {
	render: () => (
		<Drawer direction="right">
			<DrawerTrigger asChild>
				<Button variant="outline" className="flex items-center gap-2">
					<Settings className="h-4 w-4" />
					<span>Settings</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent className="h-full sm:max-w-md">
				<DrawerHeader className="border-b p-4">
					<div className="flex items-center justify-between">
						<DrawerTitle>Settings</DrawerTitle>
						<DrawerClose asChild>
							<Button variant="ghost" size="icon">
								<X className="h-4 w-4" />
								<span className="sr-only">Close</span>
							</Button>
						</DrawerClose>
					</div>
				</DrawerHeader>
				<div className="p-6">
					<div className="grid gap-6">
						<div>
							<h3 className="mb-4 text-lg font-semibold">User Settings</h3>
							<div className="grid gap-4">
								<div className="flex items-center justify-between border-b pb-4">
									<div className="flex items-center gap-3">
										<User className="h-5 w-5" />
										<div>
											<p className="font-medium">Account</p>
											<p className="text-sm text-muted-foreground">
												Manage your account settings
											</p>
										</div>
									</div>
									<Button variant="ghost" size="sm">
										Edit
									</Button>
								</div>
								<div className="flex items-center justify-between border-b pb-4">
									<div className="flex items-center gap-3">
										<CreditCard className="h-5 w-5" />
										<div>
											<p className="font-medium">Billing</p>
											<p className="text-sm text-muted-foreground">
												Manage your billing information
											</p>
										</div>
									</div>
									<Button variant="ghost" size="sm">
										Edit
									</Button>
								</div>
							</div>
						</div>
						<div>
							<h3 className="mb-4 text-lg font-semibold">Preferences</h3>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<Label htmlFor="theme" className="flex-1">
										Theme
									</Label>
									<select
										id="theme"
										className="w-32 rounded-md border border-input bg-background px-3 py-1 text-sm"
									>
										<option>Light</option>
										<option>Dark</option>
										<option>System</option>
									</select>
								</div>
								<div className="flex items-center justify-between">
									<Label htmlFor="lang" className="flex-1">
										Language
									</Label>
									<select
										id="lang"
										className="w-32 rounded-md border border-input bg-background px-3 py-1 text-sm"
									>
										<option>English</option>
										<option>French</option>
										<option>German</option>
										<option>Spanish</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<DrawerFooter className="border-t mt-auto">
					<Button variant="destructive" className="flex items-center gap-2">
						<LogOut className="h-4 w-4" />
						<span>Log out</span>
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
}

/**
 * Form in drawer example
 */
export const FormDrawer: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button>Add New Contact</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Add Contact</DrawerTitle>
						<DrawerDescription>
							Add a new contact to your address book
						</DrawerDescription>
					</DrawerHeader>
					<form className="p-4">
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="first-name">First name</Label>
									<Input id="first-name" placeholder="First name" />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="last-name">Last name</Label>
									<Input id="last-name" placeholder="Last name" />
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input id="email" type="email" placeholder="Email address" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="phone">Phone</Label>
								<Input id="phone" type="tel" placeholder="Phone number" />
							</div>
						</div>
					</form>
					<DrawerFooter>
						<Button type="submit">Save contact</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	),
}
