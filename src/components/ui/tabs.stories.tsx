import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"
import type { Meta, StoryObj } from "@storybook/react"
import {
	Calendar,
	Code,
	CreditCard,
	FileCode,
	Home,
	Image,
	Mail,
	MessageSquare,
	Phone,
	Settings,
	User,
	Video,
} from "lucide-react"

const meta: Meta<typeof Tabs> = {
	title: "shadcn/Tabs",
	component: Tabs,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Tabs>

/**
 * Basic tabs with text triggers
 */
export const Default: Story = {
	render: () => (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<div className="space-y-4 p-4">
					<div className="space-y-2">
						<h4 className="font-medium">Account</h4>
						<p className="text-sm text-muted-foreground">
							Update your account settings.
						</p>
					</div>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="name">Name</Label>
							<Input id="name" defaultValue="John Doe" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" defaultValue="john.doe@example.com" />
						</div>
						<Button>Save changes</Button>
					</div>
				</div>
			</TabsContent>
			<TabsContent value="password">
				<div className="space-y-4 p-4">
					<div className="space-y-2">
						<h4 className="font-medium">Password</h4>
						<p className="text-sm text-muted-foreground">
							Change your password here.
						</p>
					</div>
					<div className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="current-password">Current password</Label>
							<Input id="current-password" type="password" />
						</div>
						<div className="space-y-2">
							<Label htmlFor="new-password">New password</Label>
							<Input id="new-password" type="password" />
						</div>
						<Button>Update password</Button>
					</div>
				</div>
			</TabsContent>
		</Tabs>
	),
}

/**
 * Tabs with icons
 */
export const WithIcons: Story = {
	render: () => (
		<Tabs defaultValue="account" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="account">
					<User className="h-4 w-4 mr-2" />
					Account
				</TabsTrigger>
				<TabsTrigger value="password">
					<Settings className="h-4 w-4 mr-2" />
					Settings
				</TabsTrigger>
				<TabsTrigger value="billing">
					<CreditCard className="h-4 w-4 mr-2" />
					Billing
				</TabsTrigger>
			</TabsList>
			<TabsContent value="account" className="p-4">
				<h3 className="text-lg font-medium">Account</h3>
				<p className="text-sm text-muted-foreground">
					Manage your account information.
				</p>
			</TabsContent>
			<TabsContent value="password" className="p-4">
				<h3 className="text-lg font-medium">Settings</h3>
				<p className="text-sm text-muted-foreground">
					Configure your application settings.
				</p>
			</TabsContent>
			<TabsContent value="billing" className="p-4">
				<h3 className="text-lg font-medium">Billing</h3>
				<p className="text-sm text-muted-foreground">
					Manage your billing information and view invoices.
				</p>
			</TabsContent>
		</Tabs>
	),
}

/**
 * Tabs for navigation-like interfaces
 */
export const NavigationTabs: Story = {
	render: () => (
		<Tabs defaultValue="home" className="w-[600px]">
			<TabsList className="w-full justify-start">
				<TabsTrigger value="home">
					<Home className="h-4 w-4 mr-2" />
					Home
				</TabsTrigger>
				<TabsTrigger value="messages">
					<MessageSquare className="h-4 w-4 mr-2" />
					Messages
				</TabsTrigger>
				<TabsTrigger value="contact">
					<Phone className="h-4 w-4 mr-2" />
					Contact
				</TabsTrigger>
			</TabsList>
			<TabsContent value="home" className="p-4 border rounded-md mt-2">
				<h3 className="text-lg font-medium">Home Dashboard</h3>
				<p className="text-sm text-muted-foreground mt-2">
					Welcome to your dashboard. Here you can see an overview of your
					activity.
				</p>
			</TabsContent>
			<TabsContent value="messages" className="p-4 border rounded-md mt-2">
				<h3 className="text-lg font-medium">Messages</h3>
				<p className="text-sm text-muted-foreground mt-2">
					You have no new messages. When you receive messages, they will appear
					here.
				</p>
			</TabsContent>
			<TabsContent value="contact" className="p-4 border rounded-md mt-2">
				<h3 className="text-lg font-medium">Contact</h3>
				<p className="text-sm text-muted-foreground mt-2">
					You can reach us at support@example.com or by phone at (555) 123-4567.
				</p>
			</TabsContent>
		</Tabs>
	),
}

/**
 * Tabs with contact form example
 */
export const ContactForm: Story = {
	render: () => (
		<Tabs defaultValue="email" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="email">
					<Mail className="h-4 w-4 mr-2" />
					Email
				</TabsTrigger>
				<TabsTrigger value="phone">
					<Phone className="h-4 w-4 mr-2" />
					Phone
				</TabsTrigger>
				<TabsTrigger value="message">
					<MessageSquare className="h-4 w-4 mr-2" />
					Message
				</TabsTrigger>
			</TabsList>
			<TabsContent value="email" className="space-y-4 p-4">
				<div className="space-y-2">
					<Label htmlFor="email">Email address</Label>
					<Input id="email" placeholder="example@email.com" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="subject">Subject</Label>
					<Input id="subject" placeholder="Subject of your email" />
				</div>
				<Button className="w-full">Send Email</Button>
			</TabsContent>
			<TabsContent value="phone" className="space-y-4 p-4">
				<div className="space-y-2">
					<Label htmlFor="phone">Phone number</Label>
					<Input id="phone" placeholder="(123) 456-7890" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="time">Best time to call</Label>
					<Input id="time" placeholder="2:00 PM - 4:00 PM" />
				</div>
				<Button className="w-full">Request Call</Button>
			</TabsContent>
			<TabsContent value="message" className="space-y-4 p-4">
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input id="name" placeholder="Your name" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="message">Message</Label>
					<textarea
						id="message"
						placeholder="Your message"
						className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
					/>
				</div>
				<Button className="w-full">Send Message</Button>
			</TabsContent>
		</Tabs>
	),
}

/**
 * Code editor tabs example
 */
export const CodeEditorTabs: Story = {
	render: () => (
		<Tabs defaultValue="html" className="w-[500px]">
			<TabsList>
				<TabsTrigger value="html">
					<Code className="h-4 w-4 mr-2" />
					HTML
				</TabsTrigger>
				<TabsTrigger value="css">
					<FileCode className="h-4 w-4 mr-2" />
					CSS
				</TabsTrigger>
				<TabsTrigger value="js">
					<FileCode className="h-4 w-4 mr-2" />
					JavaScript
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value="html"
				className="p-4 border-2 border-dashed rounded-md mt-2 font-mono text-sm"
			>
				&lt;div class="container"&gt;
				<br />
				&nbsp;&nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;
				<br />
				&nbsp;&nbsp;&lt;p&gt;This is a paragraph.&lt;/p&gt;
				<br />
				&lt;/div&gt;
			</TabsContent>
			<TabsContent
				value="css"
				className="p-4 border-2 border-dashed rounded-md mt-2 font-mono text-sm"
			>
				.container &#123;
				<br />
				&nbsp;&nbsp;max-width: 800px;
				<br />
				&nbsp;&nbsp;margin: 0 auto;
				<br />
				&nbsp;&nbsp;padding: 2rem;
				<br />
				&#125;
				<br />
				<br />
				h1 &#123;
				<br />
				&nbsp;&nbsp;color: blue;
				<br />
				&#125;
			</TabsContent>
			<TabsContent
				value="js"
				className="p-4 border-2 border-dashed rounded-md mt-2 font-mono text-sm"
			>
				document.addEventListener('DOMContentLoaded', () =&gt; &#123;
				<br />
				&nbsp;&nbsp;const heading = document.querySelector('h1');
				<br />
				&nbsp;&nbsp;heading.addEventListener('click', () =&gt; &#123;
				<br />
				&nbsp;&nbsp;&nbsp;&nbsp;alert('Hello World!');
				<br />
				&nbsp;&nbsp;&#125;);
				<br />
				&#125;);
			</TabsContent>
		</Tabs>
	),
}

/**
 * Media tabs example
 */
export const MediaTabs: Story = {
	render: () => (
		<Tabs defaultValue="photos" className="w-[400px]">
			<TabsList className="grid w-full grid-cols-3">
				<TabsTrigger value="photos">
					<Image className="h-4 w-4 mr-2" />
					Photos
				</TabsTrigger>
				<TabsTrigger value="videos">
					<Video className="h-4 w-4 mr-2" />
					Videos
				</TabsTrigger>
				<TabsTrigger value="events">
					<Calendar className="h-4 w-4 mr-2" />
					Events
				</TabsTrigger>
			</TabsList>
			<TabsContent value="photos" className="mt-2">
				<div className="grid grid-cols-3 gap-2">
					{Array.from({ length: 6 }).map((_, i) => (
						<div
							key={`photo-${i}`}
							className="aspect-square bg-muted rounded-md flex items-center justify-center"
						>
							<Image className="h-8 w-8 text-muted-foreground" />
						</div>
					))}
				</div>
			</TabsContent>
			<TabsContent value="videos" className="mt-2">
				<div className="grid grid-cols-2 gap-2">
					{Array.from({ length: 4 }).map((_, i) => (
						<div
							key={`video-${i}`}
							className="aspect-video bg-muted rounded-md flex items-center justify-center"
						>
							<Video className="h-8 w-8 text-muted-foreground" />
						</div>
					))}
				</div>
			</TabsContent>
			<TabsContent value="events" className="mt-2 space-y-2">
				{Array.from({ length: 3 }).map((_, i) => (
					<div
						key={`event-${i}`}
						className="flex items-center p-2 rounded-md border"
					>
						<Calendar className="h-10 w-10 mr-2 text-muted-foreground" />
						<div>
							<h3 className="font-medium">Event {i + 1}</h3>
							<p className="text-sm text-muted-foreground">
								{new Date(Date.now() + 86400000 * (i + 1)).toLocaleDateString()}
							</p>
						</div>
					</div>
				))}
			</TabsContent>
		</Tabs>
	),
}

/**
 * Custom styled tabs
 */
export const CustomStyled: Story = {
	render: () => (
		<Tabs defaultValue="tab1" className="w-[400px]">
			<TabsList className="bg-blue-50 p-1 dark:bg-blue-950">
				<TabsTrigger
					value="tab1"
					className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-700 dark:text-blue-300"
				>
					Tab 1
				</TabsTrigger>
				<TabsTrigger
					value="tab2"
					className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-700 dark:text-blue-300"
				>
					Tab 2
				</TabsTrigger>
				<TabsTrigger
					value="tab3"
					className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-blue-700 dark:text-blue-300"
				>
					Tab 3
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value="tab1"
				className="p-4 mt-2 border border-blue-200 rounded-md"
			>
				<h3 className="text-blue-700 font-medium">Tab 1 Content</h3>
				<p className="text-blue-600 mt-2">
					This tab has custom styling with blue accents.
				</p>
			</TabsContent>
			<TabsContent
				value="tab2"
				className="p-4 mt-2 border border-blue-200 rounded-md"
			>
				<h3 className="text-blue-700 font-medium">Tab 2 Content</h3>
				<p className="text-blue-600 mt-2">
					This is the content for the second tab.
				</p>
			</TabsContent>
			<TabsContent
				value="tab3"
				className="p-4 mt-2 border border-blue-200 rounded-md"
			>
				<h3 className="text-blue-700 font-medium">Tab 3 Content</h3>
				<p className="text-blue-600 mt-2">
					And here's the content for the third tab.
				</p>
			</TabsContent>
		</Tabs>
	),
}
