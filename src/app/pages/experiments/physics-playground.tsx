import {
	AlertCircle,
	AlertTriangle,
	ArrowRight,
	Bell,
	Bold,
	Bookmark,
	Calendar,
	Camera,
	Check,
	CheckCircle,
	ChevronRight,
	Circle,
	Clock,
	Cloud,
	Coffee,
	Copy,
	CreditCard,
	Download,
	Edit,
	Feather,
	FileText,
	Filter,
	Flame,
	Gamepad2,
	Gift,
	Grid3x3,
	Heart,
	HelpCircle,
	Home,
	Info,
	Italic,
	Layers,
	Lightbulb,
	List,
	Mail,
	Moon,
	MoreHorizontal,
	Music,
	Palette,
	Plus,
	Rocket,
	Save,
	Search,
	Settings,
	Share,
	Shield,
	ShoppingCart,
	Sparkles,
	Square,
	Star,
	Sun,
	ToggleLeft,
	Trash,
	TrendingUp,
	Trophy,
	Underline,
	Upload,
	User,
	Users,
	X,
	Zap,
} from "lucide-react"
import Matter from "matter-js"
import { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

// Component subcategories
const COMPONENT_SUBCATEGORIES = {
	buttons: [
		{ id: "text", name: "Text Button" },
		{ id: "icon", name: "Icon Button" },
		{ id: "icon-text", name: "Icon + Text" },
		{ id: "link", name: "Link Button" },
	],
	badges: [
		{ id: "simple", name: "Simple Badge" },
		{ id: "icon", name: "Icon Badge" },
		{ id: "colored", name: "Colored Badge" },
	],
	cards: [
		{ id: "simple", name: "Simple Card" },
		{ id: "stats", name: "Stats Card" },
		{ id: "user", name: "User Card" },
		{ id: "action", name: "Action Card" },
		{ id: "notification", name: "Notification Card" },
		{ id: "settings", name: "Settings Card" },
		{ id: "hover", name: "Hover Card" },
	],
	icons: [
		{ id: "single", name: "Single Icon" },
		{ id: "colored", name: "Colored Icon" },
		{ id: "sized", name: "Different Sizes" },
	],
	inputs: [
		{ id: "text", name: "Text Input" },
		{ id: "search", name: "Search Input" },
		{ id: "avatar", name: "Avatar" },
		{ id: "avatar-group", name: "Avatar Group" },
		{ id: "slider", name: "Slider" },
		{ id: "progress", name: "Progress Bar" },
	],
	toggles: [
		{ id: "switch", name: "Switch" },
		{ id: "checkbox", name: "Checkbox" },
		{ id: "toggle", name: "Toggle Button" },
		{ id: "toggle-group", name: "Toggle Group" },
		{ id: "radio", name: "Radio Group" },
		{ id: "labeled-switch", name: "Labeled Switch" },
	],
	complex: [
		{ id: "tabs", name: "Tabs" },
		{ id: "alert", name: "Alert" },
		{ id: "skeleton", name: "Skeleton" },
		{ id: "separator", name: "Separator" },
		{ id: "accordion", name: "Accordion" },
		{ id: "breadcrumb", name: "Breadcrumb" },
		{ id: "tooltip", name: "Tooltip" },
		{ id: "compound-card", name: "Compound Card" },
	],
	upsells: [
		{ id: "premium-popup", name: "Premium Popup" },
		{ id: "countdown-timer", name: "Countdown Timer" },
		{ id: "exit-intent", name: "Exit Intent" },
		{ id: "fake-discount", name: "Fake Discount" },
		{ id: "social-proof", name: "Social Proof" },
		{ id: "limited-spots", name: "Limited Spots" },
		{ id: "cookie-monster", name: "Cookie Monster" },
		{ id: "newsletter-trap", name: "Newsletter Trap" },
		{ id: "survey-blocker", name: "Survey Blocker" },
		{ id: "fake-loading", name: "Fake Loading" },
		{ id: "notification-spam", name: "Notification Spam" },
		{ id: "paywall-tease", name: "Paywall Tease" },
		{ id: "guilt-trip", name: "Guilt Trip" },
		{ id: "fake-chat", name: "Fake Chat" },
		{ id: "bait-switch", name: "Bait & Switch" },
		{ id: "dark-confirm", name: "Dark Confirm" },
	],
} as const

// Component categories
const COMPONENT_CATEGORIES = [
	{ id: "random", name: "Random", icon: Sparkles, subcategories: [] },
	{
		id: "buttons",
		name: "Buttons",
		icon: Square,
		subcategories: COMPONENT_SUBCATEGORIES.buttons,
	},
	{
		id: "badges",
		name: "Badges",
		icon: Circle,
		subcategories: COMPONENT_SUBCATEGORIES.badges,
	},
	{
		id: "cards",
		name: "Cards",
		icon: CreditCard,
		subcategories: COMPONENT_SUBCATEGORIES.cards,
	},
	{
		id: "icons",
		name: "Icons",
		icon: Palette,
		subcategories: COMPONENT_SUBCATEGORIES.icons,
	},
	{
		id: "inputs",
		name: "Inputs",
		icon: Edit,
		subcategories: COMPONENT_SUBCATEGORIES.inputs,
	},
	{
		id: "toggles",
		name: "Toggles",
		icon: ToggleLeft,
		subcategories: COMPONENT_SUBCATEGORIES.toggles,
	},
	{
		id: "complex",
		name: "Complex",
		icon: Layers,
		subcategories: COMPONENT_SUBCATEGORIES.complex,
	},
	{
		id: "upsells",
		name: "Upsells",
		icon: AlertCircle,
		subcategories: COMPONENT_SUBCATEGORIES.upsells,
	},
] as const

type ComponentCategory = (typeof COMPONENT_CATEGORIES)[number]["id"]
type ComponentSubcategory = {
	[K in keyof typeof COMPONENT_SUBCATEGORIES]: (typeof COMPONENT_SUBCATEGORIES)[K][number]["id"]
}[keyof typeof COMPONENT_SUBCATEGORIES]

// Available icons
const ICON_COMPONENTS = [
	Heart,
	Star,
	Zap,
	Moon,
	Sun,
	Cloud,
	Gamepad2,
	Music,
	Camera,
	Bell,
	Bookmark,
	Coffee,
	Feather,
	Gift,
	Lightbulb,
	Rocket,
	Trophy,
	Info,
	Home,
	Settings,
	User,
	Mail,
	Calendar,
	Clock,
	Search,
	Download,
	Upload,
	Trash,
	Edit,
	Copy,
	Check,
	X,
	AlertCircle,
	HelpCircle,
	FileText,
	ChevronRight,
]

// Button variants
const BUTTON_VARIANTS = [
	"default",
	"secondary",
	"destructive",
	"outline",
	"ghost",
	"link",
] as const

// Badge variants
const BADGE_VARIANTS = [
	"default",
	"secondary",
	"destructive",
	"outline",
] as const

// Helper function to get random item from array
const getRandom = <T,>(arr: readonly T[]): T =>
	arr[Math.floor(Math.random() * arr.length)]

// Component creation functions
const createButtonComponent = (subcategory?: string) => {
	const variant = getRandom(BUTTON_VARIANTS)
	const sizes = ["sm", "default", "lg"] as const
	const size = getRandom(sizes)
	const texts = [
		"Click me",
		"Submit",
		"Cancel",
		"Continue",
		"Save",
		"Delete",
		"Edit",
		"Share",
		"Learn more",
		"Get started",
		"Try it free",
		"Download",
		"Upload",
		"Sign up",
		"Log in",
		"Explore",
	]

	// Handle specific subcategories
	if (subcategory === "icon") {
		const ButtonIcon = getRandom([
			Check,
			X,
			Download,
			Upload,
			Edit,
			Trash,
			Mail,
			Settings,
			Heart,
			Star,
			Share,
			Copy,
			Plus,
			Search,
			Bell,
			User,
		])
		return (
			<Button variant={variant} size="icon">
				<ButtonIcon className="h-4 w-4" />
			</Button>
		)
	} else if (subcategory === "text") {
		// Sometimes add gradient or custom styling
		if (Math.random() > 0.8) {
			const gradients = [
				"bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600",
				"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
				"bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
			]
			return (
				<Button className={getRandom(gradients)} size={size}>
					{getRandom(texts)}
				</Button>
			)
		}
		return (
			<Button variant={variant} size={size}>
				{getRandom(texts)}
			</Button>
		)
	} else if (subcategory === "icon-text") {
		const ButtonIcon = getRandom([
			Check,
			X,
			Download,
			Upload,
			Edit,
			Trash,
			Mail,
			Settings,
			ArrowRight,
			ChevronRight,
			Plus,
			Save,
			Share,
			Zap,
			Rocket,
		])
		const iconPosition = getRandom(["left", "right"])
		if (iconPosition === "left") {
			return (
				<Button variant={variant} size={size}>
					<ButtonIcon className="mr-2 h-4 w-4" />
					{getRandom(texts)}
				</Button>
			)
		} else {
			return (
				<Button variant={variant} size={size}>
					{getRandom(texts)}
					<ButtonIcon className="ml-2 h-4 w-4" />
				</Button>
			)
		}
	} else if (subcategory === "link") {
		return (
			<Button variant="link" size={size}>
				{getRandom([
					"Learn more",
					"View details",
					"Read more",
					"Documentation",
					"Privacy Policy",
					"Terms of Service",
					"Contact us",
				])}
			</Button>
		)
	}

	// Default random behavior with more variety
	const buttonType = getRandom([
		"simple",
		"with-icon",
		"icon-only",
		"gradient",
		"rounded",
		"shadow",
	])

	switch (buttonType) {
		case "simple":
			return (
				<Button variant={variant} size={size}>
					{getRandom(texts)}
				</Button>
			)
		case "with-icon": {
			const ButtonIcon = getRandom([
				Check,
				X,
				Download,
				Upload,
				Edit,
				Trash,
				Mail,
				Settings,
				ArrowRight,
				ChevronRight,
				Plus,
				Save,
				Share,
			])
			const iconPosition = getRandom(["left", "right"])
			if (iconPosition === "left") {
				return (
					<Button variant={variant} size={size}>
						<ButtonIcon className="mr-2 h-4 w-4" />
						{getRandom(texts)}
					</Button>
				)
			} else {
				return (
					<Button variant={variant} size={size}>
						{getRandom(texts)}
						<ButtonIcon className="ml-2 h-4 w-4" />
					</Button>
				)
			}
		}
		case "icon-only": {
			const ButtonIcon = getRandom([
				Check,
				X,
				Download,
				Upload,
				Edit,
				Trash,
				Mail,
				Settings,
				Heart,
				Star,
				Share,
				Copy,
				Plus,
				Search,
				Bell,
				User,
			])
			return (
				<Button variant={variant} size="icon">
					<ButtonIcon className="h-4 w-4" />
				</Button>
			)
		}
		case "gradient": {
			const gradients = [
				"bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600",
				"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
				"bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
				"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
			]
			return (
				<Button className={getRandom(gradients)} size={size}>
					{getRandom(texts)}
				</Button>
			)
		}
		case "rounded":
			return (
				<Button variant={variant} size={size} className="rounded-full">
					{getRandom(texts)}
				</Button>
			)
		case "shadow":
			return (
				<Button
					variant={variant}
					size={size}
					className="shadow-lg shadow-primary/25"
				>
					{getRandom(texts)}
				</Button>
			)
		default:
			return (
				<Button variant={variant} size={size}>
					{getRandom(texts)}
				</Button>
			)
	}
}

const createBadgeComponent = (subcategory?: string) => {
	const variant = getRandom(BADGE_VARIANTS)
	const texts = [
		"New",
		"Hot",
		"Sale",
		"Pro",
		"Beta",
		"v2.0",
		"Premium",
		"Free",
		"Live",
		"Coming Soon",
		"Popular",
		"Trending",
		"Featured",
		"Limited",
		"Exclusive",
		"Updated",
		"AI",
		"Early Access",
	]
	const text = getRandom(texts)

	// Handle specific subcategories
	if (subcategory === "simple") {
		// Sometimes use different sizes
		if (Math.random() > 0.7) {
			const sizes = ["px-1.5 py-0.5 text-[0.65rem]", "px-3 py-1 text-sm"]
			return (
				<Badge variant={variant} className={getRandom(sizes)}>
					{text}
				</Badge>
			)
		}
		return <Badge variant={variant}>{text}</Badge>
	} else if (subcategory === "icon") {
		const BadgeIcon = getRandom([
			Star,
			Zap,
			Trophy,
			Gift,
			Rocket,
			Sparkles,
			Heart,
			Flame,
			TrendingUp,
			CheckCircle,
			Info,
			AlertCircle,
		])
		return (
			<Badge variant={variant}>
				<BadgeIcon className="mr-1 h-3 w-3" />
				{text}
			</Badge>
		)
	} else if (subcategory === "colored") {
		const colorClasses = [
			"bg-blue-500 hover:bg-blue-600",
			"bg-green-500 hover:bg-green-600",
			"bg-purple-500 hover:bg-purple-600",
			"bg-amber-500 hover:bg-amber-600",
			"bg-rose-500 hover:bg-rose-600",
			"bg-gradient-to-r from-pink-500 to-violet-500",
			"bg-gradient-to-r from-cyan-500 to-blue-500",
			"bg-gradient-to-r from-amber-500 to-orange-500",
		]
		return <Badge className={getRandom(colorClasses)}>{text}</Badge>
	}

	// Default random behavior with more variety
	const badgeType = getRandom([
		"simple",
		"with-icon",
		"colored",
		"gradient",
		"outlined-colored",
		"pill",
		"count",
	])

	switch (badgeType) {
		case "simple":
			return <Badge variant={variant}>{text}</Badge>
		case "with-icon": {
			const BadgeIcon = getRandom([
				Star,
				Zap,
				Trophy,
				Gift,
				Rocket,
				Sparkles,
				Heart,
				Flame,
				TrendingUp,
				CheckCircle,
			])
			return (
				<Badge variant={variant}>
					<BadgeIcon className="mr-1 h-3 w-3" />
					{text}
				</Badge>
			)
		}
		case "colored": {
			const colorClasses = [
				"bg-blue-500 hover:bg-blue-600",
				"bg-green-500 hover:bg-green-600",
				"bg-purple-500 hover:bg-purple-600",
				"bg-amber-500 hover:bg-amber-600",
				"bg-rose-500 hover:bg-rose-600",
			]
			return <Badge className={getRandom(colorClasses)}>{text}</Badge>
		}
		case "gradient": {
			const gradients = [
				"bg-gradient-to-r from-pink-500 to-violet-500",
				"bg-gradient-to-r from-cyan-500 to-blue-500",
				"bg-gradient-to-r from-amber-500 to-orange-500",
				"bg-gradient-to-r from-green-500 to-emerald-500",
			]
			return <Badge className={getRandom(gradients)}>{text}</Badge>
		}
		case "outlined-colored": {
			const coloredOutlines = [
				"text-orange-500 border-orange-200 bg-orange-100 dark:border-orange-800 dark:bg-orange-950/50",
				"text-purple-500 border-purple-200 bg-purple-100 dark:border-purple-800 dark:bg-purple-950/50",
				"text-blue-500 border-blue-200 bg-blue-100 dark:border-blue-800 dark:bg-blue-950/50",
				"text-green-500 border-green-200 bg-green-100 dark:border-green-800 dark:bg-green-950/50",
			]
			return (
				<Badge variant="outline" className={getRandom(coloredOutlines)}>
					{text}
				</Badge>
			)
		}
		case "pill":
			return (
				<Badge variant={variant} className="rounded-full px-3">
					{text}
				</Badge>
			)
		case "count": {
			const count = Math.floor(Math.random() * 99) + 1
			return <Badge variant={variant}>{count}</Badge>
		}
		default:
			return <Badge variant={variant}>{text}</Badge>
	}
}

const createIconComponent = (subcategory?: string) => {
	const IconComponent = getRandom(ICON_COMPONENTS)
	const colors = [
		"text-red-500",
		"text-blue-500",
		"text-green-500",
		"text-purple-500",
		"text-yellow-500",
		"text-orange-500",
		"text-pink-500",
	]
	const sizes = ["h-6 w-6", "h-8 w-8", "h-10 w-10", "h-12 w-12"]

	// Handle specific subcategories
	if (subcategory === "single") {
		return (
			<div className="h-8 w-8">
				<IconComponent />
			</div>
		)
	} else if (subcategory === "colored") {
		const color = getRandom(colors)
		return (
			<div className={`${color} h-8 w-8`}>
				<IconComponent />
			</div>
		)
	} else if (subcategory === "sized") {
		const size = getRandom(sizes)
		return (
			<div className={size}>
				<IconComponent />
			</div>
		)
	}

	// Default random behavior
	const color = getRandom(colors)
	const size = getRandom(sizes)
	return (
		<div className={`${color} ${size}`}>
			<IconComponent />
		</div>
	)
}

const createCardComponent = (subcategory?: string) => {
	// Handle specific subcategories
	if (subcategory === "simple") {
		const cardTitles = [
			"Feature",
			"Update",
			"News",
			"Alert",
			"Info",
			"Tip",
			"Guide",
		]
		const cardDescs = [
			"Click to learn more",
			"Physics enabled!",
			"Drag me around",
			"Interactive card",
			"New features available",
			"Check this out",
		]
		return (
			<Card className="w-48">
				<CardHeader className="p-4">
					<CardTitle className="text-sm">{getRandom(cardTitles)}</CardTitle>
					<CardDescription className="text-xs">
						{getRandom(cardDescs)}
					</CardDescription>
				</CardHeader>
			</Card>
		)
	} else if (subcategory === "stats") {
		const stats = [
			{ label: "Users", value: "2.4k", change: "+12%", positive: true },
			{ label: "Revenue", value: "$45k", change: "+8%", positive: true },
			{ label: "Orders", value: "89", change: "-3%", positive: false },
			{ label: "Views", value: "12.5k", change: "+24%", positive: true },
			{ label: "Clicks", value: "3.2k", change: "+5%", positive: true },
		]
		const stat = getRandom(stats)
		return (
			<Card className="w-56">
				<CardContent className="p-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-xs text-muted-foreground">{stat.label}</p>
							<p className="text-xl font-bold">{stat.value}</p>
						</div>
						<Badge
							variant={stat.positive ? "default" : "destructive"}
							className="text-xs"
						>
							{stat.change}
						</Badge>
					</div>
					<Progress value={Math.random() * 100} className="mt-3 h-1" />
				</CardContent>
			</Card>
		)
	} else if (subcategory === "user") {
		const names = [
			"John Doe",
			"Jane Smith",
			"Mark Johnson",
			"Sarah Wilson",
			"Alex Chen",
			"Emma Davis",
		]
		const emails = [
			"john@example.com",
			"jane@example.com",
			"mark@example.com",
			"sarah@example.com",
			"alex@example.com",
			"emma@example.com",
		]
		const roles = ["Admin", "Member", "Guest", "Owner", "Editor", "Viewer"]
		const statuses = ["online", "away", "offline"]
		const idx = Math.floor(Math.random() * names.length)
		const status = getRandom(statuses)
		return (
			<Card className="w-64">
				<CardContent className="p-4">
					<div className="flex items-center space-x-3">
						<Avatar className="h-10 w-10">
							<AvatarFallback
								className={getRandom([
									"bg-blue-500",
									"bg-green-500",
									"bg-purple-500",
								])}
							>
								{names[idx]
									.split(" ")
									.map(n => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<p className="text-sm font-medium">{names[idx]}</p>
							<p className="text-xs text-muted-foreground">{emails[idx]}</p>
						</div>
						<div className="flex flex-col items-end gap-1">
							<Badge
								variant={idx === 0 ? "default" : "outline"}
								className="text-xs"
							>
								{roles[idx]}
							</Badge>
							<div
								className={`h-2 w-2 rounded-full ${
									status === "online"
										? "bg-green-500"
										: status === "away"
										? "bg-yellow-500"
										: "bg-gray-300"
								}`}
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "action") {
		const actions = [
			{
				icon: Download,
				label: "Download",
				desc: "Get the file",
				color: "blue",
			},
			{ icon: Upload, label: "Upload", desc: "Add new file", color: "green" },
			{ icon: Share, label: "Share", desc: "Send to team", color: "purple" },
			{ icon: Rocket, label: "Deploy", desc: "Go live now", color: "orange" },
		]
		const action = getRandom(actions)
		const ActionIcon = action.icon
		return (
			<Card className="w-48 hover:shadow-lg transition-all cursor-pointer">
				<CardContent className="p-4 text-center">
					<ActionIcon
						className={`h-10 w-10 mx-auto mb-3 text-${action.color}-500`}
					/>
					<p className="text-sm font-semibold">{action.label}</p>
					<p className="text-xs text-muted-foreground mt-1">{action.desc}</p>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "notification") {
		const notifications = [
			{
				title: "New message",
				desc: "From John Doe",
				badge: "New",
				variant: "default" as const,
				icon: Mail,
			},
			{
				title: "Payment successful",
				desc: "$49.99 processed",
				badge: "Done",
				variant: "secondary" as const,
				icon: CreditCard,
			},
			{
				title: "Update available",
				desc: "Version 2.0 ready",
				badge: "Info",
				variant: "outline" as const,
				icon: Download,
			},
			{
				title: "Task completed",
				desc: "Project finished",
				badge: "Success",
				variant: "default" as const,
				icon: Check,
			},
		]
		const notif = getRandom(notifications)
		const NotifIcon = notif.icon
		return (
			<Card className="w-64">
				<CardContent className="p-3">
					<div className="flex items-start gap-3">
						<NotifIcon className="h-5 w-5 text-muted-foreground mt-0.5" />
						<div className="flex-1">
							<p className="text-sm font-medium">{notif.title}</p>
							<p className="text-xs text-muted-foreground">{notif.desc}</p>
						</div>
						<Badge variant={notif.variant} className="text-xs">
							{notif.badge}
						</Badge>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "settings") {
		const settingIcons = [
			User,
			CreditCard,
			Calendar,
			Settings,
			Mail,
			Bell,
			Shield,
			Palette,
		]
		const settingTitles = [
			"Profile",
			"Billing",
			"Schedule",
			"Preferences",
			"Messages",
			"Alerts",
			"Security",
			"Appearance",
		]
		const settingDescs = [
			"Manage your info",
			"Payment methods",
			"Set your hours",
			"Customize app",
			"View messages",
			"Notification settings",
			"Privacy & security",
			"Theme & colors",
		]
		const idx = Math.floor(Math.random() * settingIcons.length)
		const SettingIcon = settingIcons[idx]
		return (
			<Card className="w-64 hover:bg-accent/50 transition-colors cursor-pointer">
				<CardContent className="p-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
								<SettingIcon className="h-5 w-5 text-primary" />
							</div>
							<div>
								<p className="text-sm font-medium">{settingTitles[idx]}</p>
								<p className="text-xs text-muted-foreground">
									{settingDescs[idx]}
								</p>
							</div>
						</div>
						<ChevronRight className="h-4 w-4 text-muted-foreground" />
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "hover") {
		const hoverTexts = [
			{ trigger: "Hover me!", content: "Hidden content revealed!" },
			{ trigger: "What's this?", content: "A secret message!" },
			{ trigger: "Curious?", content: "Physics-powered tooltip!" },
			{ trigger: "Try me", content: "Interactive hover card" },
		]
		const hover = getRandom(hoverTexts)
		return (
			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="link">{hover.trigger}</Button>
				</HoverCardTrigger>
				<HoverCardContent className="w-48 p-3">
					<p className="text-sm">{hover.content}</p>
				</HoverCardContent>
			</HoverCard>
		)
	}

	// Default random behavior - more varied card types
	const cardTypes = [
		"simple",
		"stats",
		"user",
		"action",
		"notification",
		"settings",
		"hover-card",
		"feature",
		"pricing",
		"image-preview",
	] as const
	const type = getRandom(cardTypes)

	switch (type) {
		case "simple": {
			const cardTitles = ["Feature", "Update", "News", "Alert", "Info"]
			const cardDescs = [
				"Click to learn more",
				"Physics enabled!",
				"Drag me around",
				"Interactive card",
			]
			return (
				<Card className="w-48">
					<CardHeader className="p-4">
						<CardTitle className="text-sm">{getRandom(cardTitles)}</CardTitle>
						<CardDescription className="text-xs">
							{getRandom(cardDescs)}
						</CardDescription>
					</CardHeader>
				</Card>
			)
		}
		case "stats": {
			const stats = [
				{ label: "Users", value: "2.4k", change: "+12%", positive: true },
				{ label: "Revenue", value: "$45k", change: "+8%", positive: true },
				{ label: "Orders", value: "89", change: "-3%", positive: false },
			]
			const stat = getRandom(stats)
			return (
				<Card className="w-56">
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-xs text-muted-foreground">{stat.label}</p>
								<p className="text-xl font-bold">{stat.value}</p>
							</div>
							<Badge
								variant={stat.positive ? "default" : "destructive"}
								className="text-xs"
							>
								{stat.change}
							</Badge>
						</div>
						<Progress value={Math.random() * 100} className="mt-3 h-1" />
					</CardContent>
				</Card>
			)
		}
		case "user": {
			const names = ["John Doe", "Jane Smith", "Mark Johnson", "Sarah Wilson"]
			const emails = [
				"john@example.com",
				"jane@example.com",
				"mark@example.com",
				"sarah@example.com",
			]
			const roles = ["Admin", "Member", "Guest", "Owner"]
			const idx = Math.floor(Math.random() * names.length)
			return (
				<Card className="w-56">
					<CardContent className="p-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm font-medium">{names[idx]}</p>
								<p className="text-xs text-muted-foreground">{emails[idx]}</p>
							</div>
							<Badge
								variant={idx === 0 ? "default" : "outline"}
								className="text-xs"
							>
								{roles[idx]}
							</Badge>
						</div>
					</CardContent>
				</Card>
			)
		}
		case "action": {
			const actions = [
				{ icon: Download, label: "Download", desc: "Get the file" },
				{ icon: Upload, label: "Upload", desc: "Add new file" },
				{ icon: Share, label: "Share", desc: "Send to team" },
			]
			const action = getRandom(actions)
			const ActionIcon = action.icon
			return (
				<Card className="w-48 hover:shadow-md transition-shadow cursor-pointer">
					<CardContent className="p-4 text-center">
						<ActionIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
						<p className="text-sm font-medium">{action.label}</p>
						<p className="text-xs text-muted-foreground">{action.desc}</p>
					</CardContent>
				</Card>
			)
		}
		case "notification": {
			const notifications = [
				{ title: "New message", badge: "New", variant: "default" as const },
				{
					title: "Payment successful",
					badge: "Done",
					variant: "secondary" as const,
				},
				{
					title: "Update available",
					badge: "Info",
					variant: "outline" as const,
				},
			]
			const notif = getRandom(notifications)
			return (
				<Card className="w-56">
					<CardContent className="p-3">
						<div className="flex items-center justify-between">
							<p className="text-sm">{notif.title}</p>
							<Badge variant={notif.variant} className="text-xs">
								{notif.badge}
							</Badge>
						</div>
					</CardContent>
				</Card>
			)
		}
		case "settings": {
			const settingIcons = [User, CreditCard, Calendar, Settings, Mail, Bell]
			const settingTitles = [
				"Profile",
				"Billing",
				"Schedule",
				"Preferences",
				"Messages",
				"Alerts",
			]
			const idx = Math.floor(Math.random() * settingIcons.length)
			const SettingIcon = settingIcons[idx]
			return (
				<Card className="w-56">
					<CardContent className="p-3">
						<div className="flex items-center justify-between">
							<div className="flex items-center space-x-3">
								<SettingIcon className="h-4 w-4 text-muted-foreground" />
								<div>
									<p className="text-sm font-medium">{settingTitles[idx]}</p>
									<p className="text-xs text-muted-foreground">Manage</p>
								</div>
							</div>
							<ChevronRight className="h-4 w-4 text-muted-foreground" />
						</div>
					</CardContent>
				</Card>
			)
		}
		case "hover-card":
			return (
				<HoverCard>
					<HoverCardTrigger asChild>
						<Button variant="link">Hover me!</Button>
					</HoverCardTrigger>
					<HoverCardContent className="w-40 p-2">
						<p className="text-xs">Hidden content!</p>
					</HoverCardContent>
				</HoverCard>
			)
		case "feature": {
			const features = [
				{
					icon: Zap,
					title: "Fast",
					desc: "Lightning quick",
					progress: 66,
				},
				{
					icon: Shield,
					title: "Secure",
					desc: "Bank-level security",
					progress: 100,
				},
				{
					icon: Cloud,
					title: "Cloud",
					desc: "Always synced",
					progress: 75,
				},
				{
					icon: Sparkles,
					title: "Smart",
					desc: "AI-powered",
					progress: 90,
				},
			]
			const feature = getRandom(features)
			const FeatureIcon = feature.icon
			return (
				<Card className="w-48">
					<CardHeader className="p-3 pb-2">
						<div className="flex items-center justify-between">
							<CardTitle className="text-sm">{feature.title}</CardTitle>
							<FeatureIcon className="h-4 w-4 text-primary" />
						</div>
					</CardHeader>
					<CardContent className="p-3 pt-0">
						<p className="text-xs text-muted-foreground">{feature.desc}</p>
						<Progress value={feature.progress} className="mt-2 h-1" />
					</CardContent>
				</Card>
			)
		}
		case "pricing": {
			const plans = [
				{ name: "Free", price: "$0", features: "5 projects" },
				{ name: "Pro", price: "$19", features: "Unlimited" },
				{ name: "Team", price: "$49", features: "Everything" },
			]
			const plan = getRandom(plans)
			return (
				<Card className="w-48">
					<CardHeader className="p-3 text-center">
						<CardTitle className="text-sm">{plan.name}</CardTitle>
						<p className="text-2xl font-bold">{plan.price}</p>
					</CardHeader>
					<CardContent className="p-3 pt-0">
						<p className="text-xs text-center text-muted-foreground">
							{plan.features}
						</p>
						<Button size="sm" className="w-full mt-2">
							Choose
						</Button>
					</CardContent>
				</Card>
			)
		}
		case "image-preview": {
			const previews = [
				{ title: "Screenshot", size: "2.4 MB", type: "PNG" },
				{ title: "Document", size: "156 KB", type: "PDF" },
				{ title: "Presentation", size: "4.2 MB", type: "PPT" },
			]
			const preview = getRandom(previews)
			return (
				<Card className="w-56">
					<CardContent className="p-3">
						<div className="h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-md mb-3 flex items-center justify-center">
							<FileText className="h-8 w-8 text-primary/50" />
						</div>
						<p className="text-sm font-medium">{preview.title}</p>
						<div className="flex items-center justify-between mt-1">
							<p className="text-xs text-muted-foreground">{preview.size}</p>
							<Badge variant="outline" className="text-xs">
								{preview.type}
							</Badge>
						</div>
					</CardContent>
				</Card>
			)
		}
	}
}

const createToggleComponent = (subcategory?: string) => {
	// Handle specific subcategories
	if (subcategory === "switch") {
		// Sometimes add custom colors
		if (Math.random() > 0.7) {
			const colors = [
				"data-[state=checked]:bg-blue-500 dark:data-[state=checked]:bg-blue-600",
				"data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-600",
				"data-[state=checked]:bg-purple-500 dark:data-[state=checked]:bg-purple-600",
			]
			return (
				<Switch
					defaultChecked={Math.random() > 0.5}
					className={getRandom(colors)}
				/>
			)
		}
		return <Switch defaultChecked={Math.random() > 0.5} />
	} else if (subcategory === "checkbox") {
		// Sometimes style the checkbox
		if (Math.random() > 0.7) {
			const styles = [
				"data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600",
				"data-[state=checked]:border-green-600 data-[state=checked]:bg-green-600",
				"data-[state=checked]:border-purple-600 data-[state=checked]:bg-purple-600",
			]
			return (
				<Checkbox
					defaultChecked={Math.random() > 0.5}
					className={getRandom(styles)}
				/>
			)
		}
		return <Checkbox defaultChecked={Math.random() > 0.5} />
	} else if (subcategory === "toggle") {
		const toggleVariants = ["default", "outline"] as const
		const toggleIcons = [Star, Heart, Bell, Bookmark, Sun, Moon, Zap, Coffee]
		const ToggleIcon = getRandom(toggleIcons)
		// Sometimes add size variations
		const sizes = ["", "h-8 w-8", "h-10 w-10"]
		return (
			<Toggle
				variant={getRandom(toggleVariants)}
				defaultPressed={Math.random() > 0.5}
				className={getRandom(sizes)}
			>
				<ToggleIcon className="h-4 w-4" />
			</Toggle>
		)
	} else if (subcategory === "toggle-group") {
		const groupTypes = ["text", "icon", "mixed", "formatting", "view"] as const
		const type = getRandom(groupTypes)

		switch (type) {
			case "text":
				return (
					<ToggleGroup type="single" defaultValue="b" className="gap-0">
						<ToggleGroupItem value="a" className="h-8 px-3">
							Left
						</ToggleGroupItem>
						<ToggleGroupItem value="b" className="h-8 px-3">
							Center
						</ToggleGroupItem>
						<ToggleGroupItem value="c" className="h-8 px-3">
							Right
						</ToggleGroupItem>
					</ToggleGroup>
				)
			case "icon":
				return (
					<ToggleGroup type="single" defaultValue="grid">
						<ToggleGroupItem value="grid" aria-label="Grid view">
							<Grid3x3 className="h-4 w-4" />
						</ToggleGroupItem>
						<ToggleGroupItem value="list" aria-label="List view">
							<List className="h-4 w-4" />
						</ToggleGroupItem>
					</ToggleGroup>
				)
			case "mixed":
				return (
					<ToggleGroup type="single" defaultValue="all">
						<ToggleGroupItem value="all" className="px-3">
							All
						</ToggleGroupItem>
						<ToggleGroupItem value="active" className="px-3">
							Active
						</ToggleGroupItem>
						<ToggleGroupItem value="done" className="px-3">
							Done
						</ToggleGroupItem>
					</ToggleGroup>
				)
			case "formatting":
				return (
					<ToggleGroup type="multiple">
						<ToggleGroupItem value="bold" aria-label="Bold">
							<Bold className="h-3 w-3" />
						</ToggleGroupItem>
						<ToggleGroupItem value="italic" aria-label="Italic">
							<Italic className="h-3 w-3" />
						</ToggleGroupItem>
						<ToggleGroupItem value="underline" aria-label="Underline">
							<Underline className="h-3 w-3" />
						</ToggleGroupItem>
					</ToggleGroup>
				)
			case "view":
				return (
					<ToggleGroup type="single" defaultValue="day" size="sm">
						<ToggleGroupItem value="day" className="px-3">
							Day
						</ToggleGroupItem>
						<ToggleGroupItem value="week" className="px-3">
							Week
						</ToggleGroupItem>
						<ToggleGroupItem value="month" className="px-3">
							Month
						</ToggleGroupItem>
					</ToggleGroup>
				)
		}
	} else if (subcategory === "radio") {
		const radioTypes = ["simple", "cards", "inline"] as const
		const type = getRandom(radioTypes)

		switch (type) {
			case "simple":
				return (
					<RadioGroup defaultValue="option-1" className="flex gap-3">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-1" id="r1" />
							<Label htmlFor="r1" className="text-sm">
								Option A
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="option-2" id="r2" />
							<Label htmlFor="r2" className="text-sm">
								Option B
							</Label>
						</div>
					</RadioGroup>
				)
			case "cards":
				return (
					<RadioGroup defaultValue="free" className="grid gap-2">
						<Label className="flex items-center gap-2 rounded-md border p-2 hover:bg-accent cursor-pointer has-[[data-state=checked]]:border-primary">
							<RadioGroupItem value="free" />
							<div>
								<p className="text-sm font-medium">Free</p>
								<p className="text-xs text-muted-foreground">Basic features</p>
							</div>
						</Label>
						<Label className="flex items-center gap-2 rounded-md border p-2 hover:bg-accent cursor-pointer has-[[data-state=checked]]:border-primary">
							<RadioGroupItem value="pro" />
							<div>
								<p className="text-sm font-medium">Pro</p>
								<p className="text-xs text-muted-foreground">All features</p>
							</div>
						</Label>
					</RadioGroup>
				)
			case "inline":
				return (
					<RadioGroup defaultValue="1" className="flex gap-2">
						{[1, 2, 3, 4, 5].map(num => (
							<div key={num} className="flex items-center">
								<RadioGroupItem
									value={String(num)}
									id={`rating-${num}`}
									className="h-3 w-3"
								/>
								<Label htmlFor={`rating-${num}`} className="text-xs ml-1">
									{num}
								</Label>
							</div>
						))}
					</RadioGroup>
				)
		}
	} else if (subcategory === "labeled-switch") {
		const labels = [
			"Dark Mode",
			"Notifications",
			"Auto-save",
			"Public",
			"Analytics",
			"Newsletter",
		]
		const descriptions = [
			"Toggle dark theme",
			"Receive alerts",
			"Save automatically",
			"Make profile public",
			"Track usage data",
			"Weekly updates",
		]
		const idx = Math.floor(Math.random() * labels.length)

		// Sometimes show with description
		if (Math.random() > 0.5) {
			return (
				<Label className="flex items-center gap-3 rounded-lg border p-3 cursor-pointer hover:bg-accent/50">
					<div className="flex-1">
						<div className="font-medium text-sm">{labels[idx]}</div>
						<div className="text-xs text-muted-foreground">
							{descriptions[idx]}
						</div>
					</div>
					<Switch defaultChecked={Math.random() > 0.5} />
				</Label>
			)
		}

		return (
			<div className="flex items-center space-x-2">
				<Switch id="labeled" defaultChecked={Math.random() > 0.5} />
				<Label htmlFor="labeled" className="text-sm cursor-pointer">
					{labels[idx]}
				</Label>
			</div>
		)
	}

	// Default random behavior with more variety
	const toggleTypes = [
		"switch",
		"checkbox",
		"toggle",
		"toggle-group",
		"radio",
		"icon-toggles",
		"labeled-switch",
		"checkbox-card",
		"switch-card",
	] as const
	const type = getRandom(toggleTypes)

	switch (type) {
		case "switch":
			return <Switch defaultChecked={Math.random() > 0.5} />
		case "checkbox":
			return <Checkbox defaultChecked={Math.random() > 0.5} />
		case "toggle": {
			const toggleVariants = ["default", "outline"] as const
			const toggleIcons = [Star, Heart, Bell, Bookmark, Sun, Moon]
			const ToggleIcon = getRandom(toggleIcons)
			return (
				<Toggle
					variant={getRandom(toggleVariants)}
					defaultPressed={Math.random() > 0.5}
				>
					<ToggleIcon className="h-4 w-4" />
				</Toggle>
			)
		}
		case "toggle-group":
			return (
				<ToggleGroup type="single" defaultValue="a" className="gap-0">
					<ToggleGroupItem value="a" className="h-8 px-2">
						A
					</ToggleGroupItem>
					<ToggleGroupItem value="b" className="h-8 px-2">
						B
					</ToggleGroupItem>
					<ToggleGroupItem value="c" className="h-8 px-2">
						C
					</ToggleGroupItem>
				</ToggleGroup>
			)
		case "radio":
			return (
				<RadioGroup defaultValue="option-1" className="flex gap-2">
					<div className="flex items-center space-x-1">
						<RadioGroupItem value="option-1" id="option-1" />
						<Label htmlFor="option-1" className="text-xs">
							A
						</Label>
					</div>
					<div className="flex items-center space-x-1">
						<RadioGroupItem value="option-2" id="option-2" />
						<Label htmlFor="option-2" className="text-xs">
							B
						</Label>
					</div>
				</RadioGroup>
			)
		case "icon-toggles": {
			const iconSets = [
				[Sun, Moon],
				[Music, Bell],
				[User, Users],
				[Grid3x3, Square],
			] as const
			const icons = getRandom(iconSets)
			const Icon1 = icons[0]
			const Icon2 = icons[1]
			return (
				<ToggleGroup type="single" defaultValue="a" className="gap-1">
					<ToggleGroupItem value="a" className="h-8 w-8 p-0">
						<Icon1 className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="b" className="h-8 w-8 p-0">
						<Icon2 className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
			)
		}
		case "labeled-switch": {
			const labels = ["Dark Mode", "Notifications", "Auto-save", "Public"]
			return (
				<div className="flex items-center space-x-2">
					<Switch id="labeled" defaultChecked={Math.random() > 0.5} />
					<Label htmlFor="labeled" className="text-xs">
						{getRandom(labels)}
					</Label>
				</div>
			)
		}
		case "checkbox-card": {
			const options = [
				{ label: "Email", desc: "Get email notifications" },
				{ label: "SMS", desc: "Text message alerts" },
				{ label: "Push", desc: "Mobile notifications" },
			]
			const option = getRandom(options)
			return (
				<Label className="flex items-start gap-3 rounded-lg border p-3 cursor-pointer hover:bg-accent/50 has-[[aria-checked=true]]:border-primary">
					<Checkbox defaultChecked={Math.random() > 0.5} className="mt-0.5" />
					<div>
						<p className="text-sm font-medium">{option.label}</p>
						<p className="text-xs text-muted-foreground">{option.desc}</p>
					</div>
				</Label>
			)
		}
		case "switch-card": {
			const settings = [
				{ label: "Auto-update", desc: "Keep app updated" },
				{ label: "Analytics", desc: "Help us improve" },
				{ label: "Beta features", desc: "Try new features" },
			]
			const setting = getRandom(settings)
			return (
				<div className="flex items-center justify-between gap-3 rounded-lg border p-3">
					<div>
						<p className="text-sm font-medium">{setting.label}</p>
						<p className="text-xs text-muted-foreground">{setting.desc}</p>
					</div>
					<Switch defaultChecked={Math.random() > 0.5} />
				</div>
			)
		}
	}
}

const createInputComponent = (subcategory?: string) => {
	// Handle specific subcategories
	if (subcategory === "text") {
		const placeholders = [
			"Type here...",
			"Search...",
			"Enter text...",
			"Name",
			"Email",
			"Password",
			"Username",
			"Your message",
			"Add a comment",
		]
		const types = ["text", "email", "search", "password", "url"] as const

		// Sometimes add icons or special styling
		if (Math.random() > 0.7) {
			const inputWithIcon = getRandom(["left", "right", "both"])
			if (inputWithIcon === "left") {
				return (
					<div className="relative w-40">
						<User className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
						<Input
							className="h-8 pl-7 pr-2"
							placeholder="Username"
							defaultValue=""
						/>
					</div>
				)
			} else if (inputWithIcon === "right") {
				return (
					<div className="relative w-40">
						<Input className="h-8 pr-7" placeholder="Search" defaultValue="" />
						<Search className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
					</div>
				)
			}
		}

		return (
			<Input
				className="w-32 h-8"
				type={getRandom(types)}
				placeholder={getRandom(placeholders)}
				defaultValue=""
			/>
		)
	} else if (subcategory === "search") {
		const searchVariants = [
			"basic",
			"with-button",
			"rounded",
			"with-filter",
		] as const
		const variant = getRandom(searchVariants)

		switch (variant) {
			case "basic":
				return (
					<div className="relative w-40">
						<Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
						<Input
							className="h-8 pl-7 pr-2"
							placeholder="Search..."
							defaultValue=""
						/>
					</div>
				)
			case "with-button":
				return (
					<div className="flex w-48">
						<Input
							className="h-8 rounded-r-none"
							placeholder="Search..."
							defaultValue=""
						/>
						<Button size="sm" className="h-8 rounded-l-none px-3">
							<Search className="h-3 w-3" />
						</Button>
					</div>
				)
			case "rounded":
				return (
					<div className="relative w-40">
						<Search className="absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
						<Input
							className="h-8 pl-8 pr-3 rounded-full"
							placeholder="Search..."
							defaultValue=""
						/>
					</div>
				)
			case "with-filter":
				return (
					<div className="flex gap-1 w-48">
						<div className="relative flex-1">
							<Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
							<Input
								className="h-8 pl-7"
								placeholder="Search..."
								defaultValue=""
							/>
						</div>
						<Button size="sm" variant="outline" className="h-8 px-2">
							<Filter className="h-3 w-3" />
						</Button>
					</div>
				)
		}
	} else if (subcategory === "avatar") {
		const initials = [
			"AB",
			"CD",
			"EF",
			"GH",
			"JK",
			"LM",
			"NP",
			"QR",
			"ST",
			"UV",
		]
		const sizes = ["h-8 w-8", "h-10 w-10", "h-12 w-12"] as const
		const colors = [
			"bg-blue-500",
			"bg-green-500",
			"bg-purple-500",
			"bg-orange-500",
			"bg-pink-500",
			"bg-indigo-500",
		]

		// Sometimes add status indicator
		if (Math.random() > 0.6) {
			const statuses = ["online", "away", "busy", "offline"]
			const status = getRandom(statuses)
			const statusColors: Record<string, string> = {
				online: "bg-green-500",
				away: "bg-yellow-500",
				busy: "bg-red-500",
				offline: "bg-gray-400",
			}
			return (
				<div className="relative">
					<Avatar className={getRandom(sizes)}>
						<AvatarFallback className={getRandom(colors)}>
							{getRandom(initials)}
						</AvatarFallback>
					</Avatar>
					<div
						className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${statusColors[status]}`}
					/>
				</div>
			)
		}

		return (
			<Avatar className={getRandom(sizes)}>
				<AvatarFallback className={getRandom(colors)}>
					{getRandom(initials)}
				</AvatarFallback>
			</Avatar>
		)
	} else if (subcategory === "avatar-group") {
		const count = Math.floor(Math.random() * 3) + 2
		const showMore = Math.random() > 0.7
		return (
			<div className="flex -space-x-2">
				{Array.from({ length: count }).map((_, i) => (
					<Avatar key={i} className="h-8 w-8 border-2 border-background">
						<AvatarFallback
							className={getRandom([
								"bg-blue-500",
								"bg-green-500",
								"bg-purple-500",
								"bg-orange-500",
							])}
						>
							{getRandom(["AB", "CD", "EF", "GH", "JK"])}
						</AvatarFallback>
					</Avatar>
				))}
				{showMore && (
					<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
						+{Math.floor(Math.random() * 10) + 1}
					</div>
				)}
			</div>
		)
	} else if (subcategory === "slider") {
		const sliderTypes = ["simple", "with-label", "colored", "range"] as const
		const type = getRandom(sliderTypes)

		switch (type) {
			case "simple":
				return (
					<Slider
						defaultValue={[Math.floor(Math.random() * 100)]}
						max={100}
						step={1}
						className="w-32"
					/>
				)
			case "with-label": {
				const value = Math.floor(Math.random() * 100)
				const labels = ["Volume", "Brightness", "Speed", "Progress"]
				return (
					<div className="w-40 space-y-1">
						<div className="flex justify-between text-xs">
							<span className="text-muted-foreground">{getRandom(labels)}</span>
							<span>{value}%</span>
						</div>
						<Slider defaultValue={[value]} max={100} className="h-1" />
					</div>
				)
			}
			case "colored": {
				const colors = [
					"[&_[role=slider]]:bg-blue-500",
					"[&_[role=slider]]:bg-green-500",
					"[&_[role=slider]]:bg-purple-500",
				]
				return (
					<Slider
						defaultValue={[Math.floor(Math.random() * 100)]}
						max={100}
						className={`w-32 ${getRandom(colors)}`}
					/>
				)
			}
			case "range":
				return (
					<Slider defaultValue={[25, 75]} max={100} step={1} className="w-32" />
				)
		}
	} else if (subcategory === "progress") {
		const value = Math.random() * 100
		const progressTypes = [
			"simple",
			"with-label",
			"colored",
			"striped",
		] as const
		const type = getRandom(progressTypes)

		switch (type) {
			case "simple":
				return <Progress value={value} className="w-32 h-2" />
			case "with-label": {
				const labels = ["Loading", "Uploading", "Processing", "Downloading"]
				return (
					<div className="w-32 space-y-1">
						<div className="flex justify-between text-xs">
							<span className="text-muted-foreground">{getRandom(labels)}</span>
							<span>{Math.floor(value)}%</span>
						</div>
						<Progress value={value} className="h-2" />
					</div>
				)
			}
			case "colored": {
				const colors = [
					"[&>div]:bg-blue-500",
					"[&>div]:bg-green-500",
					"[&>div]:bg-purple-500",
					"[&>div]:bg-gradient-to-r [&>div]:from-pink-500 [&>div]:to-violet-500",
				]
				return (
					<Progress value={value} className={`w-32 h-2 ${getRandom(colors)}`} />
				)
			}
			case "striped":
				return (
					<Progress
						value={value}
						className="w-32 h-3 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary/80"
					/>
				)
		}
	}

	// Default random behavior with more variety
	const inputTypes = [
		"input",
		"avatar",
		"slider",
		"progress",
		"search-input",
		"avatar-group",
		"multi-slider",
		"input-group",
		"color-input",
	] as const
	const type = getRandom(inputTypes)

	switch (type) {
		case "avatar": {
			const initials = ["AB", "CD", "EF", "GH", "JK", "LM", "NP", "QR"]
			const sizes = ["", "w-8 h-8", "w-12 h-12"] as const
			const colors = [
				"",
				"bg-blue-500",
				"bg-green-500",
				"bg-purple-500",
				"bg-orange-500",
			]
			return (
				<Avatar className={getRandom(sizes)}>
					<AvatarFallback className={getRandom(colors)}>
						{getRandom(initials)}
					</AvatarFallback>
				</Avatar>
			)
		}
		case "input": {
			const placeholders = [
				"Type here...",
				"Search...",
				"Enter text...",
				"Name",
				"Email",
				"Password",
			]
			const types = ["text", "email", "search"] as const
			return (
				<Input
					className="w-32 h-8"
					type={getRandom(types)}
					placeholder={getRandom(placeholders)}
					defaultValue=""
				/>
			)
		}
		case "slider":
			return (
				<Slider
					defaultValue={[Math.floor(Math.random() * 100)]}
					max={100}
					step={1}
					className="w-32"
				/>
			)
		case "progress": {
			const value = Math.random() * 100
			return (
				<div className="w-32 space-y-1">
					<div className="flex justify-between text-xs">
						<span className="text-muted-foreground">Loading</span>
						<span>{Math.floor(value)}%</span>
					</div>
					<Progress value={value} className="h-2" />
				</div>
			)
		}
		case "search-input": {
			return (
				<div className="relative w-40">
					<Search className="absolute left-2 top-1/2 h-3 w-3 -translate-y-1/2 text-muted-foreground" />
					<Input
						className="h-8 pl-7 pr-2"
						placeholder="Search..."
						defaultValue=""
					/>
				</div>
			)
		}
		case "avatar-group": {
			const count = Math.floor(Math.random() * 3) + 2
			return (
				<div className="flex -space-x-2">
					{Array.from({ length: count }).map((_, i) => (
						<Avatar key={i} className="h-8 w-8 border-2 border-background">
							<AvatarFallback
								className={getRandom([
									"bg-blue-500",
									"bg-green-500",
									"bg-purple-500",
								])}
							>
								{getRandom(["AB", "CD", "EF", "GH"])}
							</AvatarFallback>
						</Avatar>
					))}
				</div>
			)
		}
		case "multi-slider": {
			return (
				<div className="w-40 space-y-2">
					<Slider defaultValue={[25]} max={100} className="h-1" />
					<Slider defaultValue={[50]} max={100} className="h-1" />
					<Slider defaultValue={[75]} max={100} className="h-1" />
				</div>
			)
		}
		case "input-group": {
			return (
				<div className="flex w-48">
					<Button
						size="sm"
						variant="outline"
						className="h-8 rounded-r-none px-3"
					>
						@
					</Button>
					<Input
						className="h-8 rounded-l-none"
						placeholder="username"
						defaultValue=""
					/>
				</div>
			)
		}
		case "color-input": {
			const colors = ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"]
			return (
				<div className="flex items-center gap-2">
					<div
						className="h-8 w-8 rounded-md border"
						style={{ backgroundColor: getRandom(colors) }}
					/>
					<Input className="w-24 h-8" value={getRandom(colors)} readOnly />
				</div>
			)
		}
	}
}

const createComplexComponent = (subcategory?: string) => {
	// Handle specific subcategories
	if (subcategory === "tabs") {
		const tabVariants = ["simple", "with-icons", "pills", "underline"] as const
		const variant = getRandom(tabVariants)

		switch (variant) {
			case "simple":
				return (
					<Tabs defaultValue="tab1" className="w-48">
						<TabsList className="grid w-full grid-cols-2 h-8">
							<TabsTrigger value="tab1" className="text-xs">
								Tab 1
							</TabsTrigger>
							<TabsTrigger value="tab2" className="text-xs">
								Tab 2
							</TabsTrigger>
						</TabsList>
						<TabsContent value="tab1" className="p-2">
							<p className="text-xs">Content 1</p>
						</TabsContent>
						<TabsContent value="tab2" className="p-2">
							<p className="text-xs">Content 2</p>
						</TabsContent>
					</Tabs>
				)
			case "with-icons":
				return (
					<Tabs defaultValue="profile" className="w-56">
						<TabsList className="grid w-full grid-cols-3 h-9">
							<TabsTrigger value="profile" className="text-xs gap-1">
								<User className="h-3 w-3" />
								Profile
							</TabsTrigger>
							<TabsTrigger value="settings" className="text-xs gap-1">
								<Settings className="h-3 w-3" />
								Settings
							</TabsTrigger>
							<TabsTrigger value="billing" className="text-xs gap-1">
								<CreditCard className="h-3 w-3" />
								Billing
							</TabsTrigger>
						</TabsList>
					</Tabs>
				)
			case "pills":
				return (
					<Tabs defaultValue="all" className="w-48">
						<TabsList className="h-8 bg-muted/50">
							<TabsTrigger
								value="all"
								className="text-xs rounded-full data-[state=active]:bg-background"
							>
								All
							</TabsTrigger>
							<TabsTrigger
								value="active"
								className="text-xs rounded-full data-[state=active]:bg-background"
							>
								Active
							</TabsTrigger>
							<TabsTrigger
								value="done"
								className="text-xs rounded-full data-[state=active]:bg-background"
							>
								Done
							</TabsTrigger>
						</TabsList>
					</Tabs>
				)
			case "underline":
				return (
					<div className="w-48 border-b">
						<Tabs defaultValue="overview" className="w-full">
							<TabsList className="h-auto bg-transparent p-0">
								<TabsTrigger
									value="overview"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
								>
									Overview
								</TabsTrigger>
								<TabsTrigger
									value="analytics"
									className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
								>
									Analytics
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
				)
		}
	} else if (subcategory === "alert") {
		const alertTypes = [
			{
				variant: "default" as const,
				icon: Info,
				title: "Info",
				desc: "This is an informational alert",
			},
			{
				variant: "default" as const,
				icon: CheckCircle,
				title: "Success!",
				desc: "Operation completed successfully",
			},
			{
				variant: "destructive" as const,
				icon: AlertCircle,
				title: "Error",
				desc: "Something went wrong",
			},
			{
				variant: "default" as const,
				icon: AlertTriangle,
				title: "Warning",
				desc: "Please be careful",
			},
		]
		const alert = getRandom(alertTypes)
		const AlertIcon = alert.icon

		// Compact alert without excessive padding
		return (
			<Alert variant={alert.variant} className="w-56 py-2 px-3">
				<AlertIcon className="h-4 w-4" />
				<AlertTitle className="text-sm">{alert.title}</AlertTitle>
				<AlertDescription className="text-xs">{alert.desc}</AlertDescription>
			</Alert>
		)
	} else if (subcategory === "skeleton") {
		const skeletonTypes = ["line", "circle", "card", "list", "avatar"] as const
		const skelType = getRandom(skeletonTypes)

		switch (skelType) {
			case "line":
				return <Skeleton className="h-4 w-32" />
			case "circle":
				return <Skeleton className="h-12 w-12 rounded-full" />
			case "card":
				return (
					<div className="space-y-2 w-48">
						<Skeleton className="h-4 w-3/4" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-1/2" />
					</div>
				)
			case "list":
				return (
					<div className="space-y-2 w-40">
						{[1, 2, 3].map(i => (
							<div key={i} className="flex items-center gap-2">
								<Skeleton className="h-3 w-3 rounded-full" />
								<Skeleton className="h-3 flex-1" />
							</div>
						))}
					</div>
				)
			case "avatar":
				return (
					<div className="flex items-center gap-3">
						<Skeleton className="h-10 w-10 rounded-full" />
						<div className="space-y-1">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-3 w-16" />
						</div>
					</div>
				)
		}
	} else if (subcategory === "separator") {
		const separatorTypes = [
			"simple",
			"with-text",
			"with-icon",
			"decorative",
		] as const
		const type = getRandom(separatorTypes)

		switch (type) {
			case "simple": {
				const orientations = ["horizontal", "vertical"] as const
				const orientation = getRandom(orientations)
				return (
					<Separator
						orientation={orientation}
						className={orientation === "horizontal" ? "w-20" : "h-20"}
					/>
				)
			}
			case "with-text":
				return (
					<div className="flex items-center gap-2 w-32">
						<Separator className="flex-1" />
						<span className="text-xs text-muted-foreground">OR</span>
						<Separator className="flex-1" />
					</div>
				)
			case "with-icon":
				return (
					<div className="flex items-center gap-2 w-32">
						<Separator className="flex-1" />
						<Sparkles className="h-3 w-3 text-muted-foreground" />
						<Separator className="flex-1" />
					</div>
				)
			case "decorative":
				return (
					<Separator className="w-20 bg-gradient-to-r from-transparent via-foreground/20 to-transparent h-[1px]" />
				)
		}
	} else if (subcategory === "accordion") {
		const accordionTypes = ["simple", "with-icon", "nested"] as const
		const type = getRandom(accordionTypes)

		switch (type) {
			case "simple":
				return (
					<Accordion type="single" collapsible className="w-48">
						<AccordionItem value="item-1" className="border-b-0">
							<AccordionTrigger className="text-xs py-2">
								Question?
							</AccordionTrigger>
							<AccordionContent className="text-xs pb-2">
								Answer here!
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				)
			case "with-icon":
				return (
					<Accordion type="single" collapsible className="w-56">
						<AccordionItem value="item-1" className="border-b-0">
							<AccordionTrigger className="text-xs py-2 gap-2">
								<div className="flex items-center gap-2">
									<HelpCircle className="h-3 w-3" />
									How does it work?
								</div>
							</AccordionTrigger>
							<AccordionContent className="text-xs pb-2">
								It's powered by physics!
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				)
			case "nested":
				return (
					<Accordion type="single" collapsible className="w-56">
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-sm py-2">
								Features
							</AccordionTrigger>
							<AccordionContent className="text-xs space-y-1 pb-2">
								<div>✓ Physics simulation</div>
								<div>✓ Drag and drop</div>
								<div>✓ Real-time updates</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				)
		}
	} else if (subcategory === "breadcrumb") {
		const breadcrumbTypes = ["simple", "with-icons", "with-dropdown"] as const
		const type = getRandom(breadcrumbTypes)

		switch (type) {
			case "simple":
				return (
					<Breadcrumb>
						<BreadcrumbList className="text-xs">
							<BreadcrumbItem>
								<BreadcrumbLink>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink>Products</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Details</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				)
			case "with-icons":
				return (
					<Breadcrumb>
						<BreadcrumbList className="text-xs">
							<BreadcrumbItem>
								<BreadcrumbLink className="flex items-center gap-1">
									<Home className="h-3 w-3" />
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage className="flex items-center gap-1">
									<FileText className="h-3 w-3" />
									Page
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				)
			case "with-dropdown":
				return (
					<Breadcrumb>
						<BreadcrumbList className="text-xs">
							<BreadcrumbItem>
								<BreadcrumbLink>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<MoreHorizontal className="h-3 w-3" />
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Current</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				)
		}
	} else if (subcategory === "tooltip") {
		const tooltipTypes = [
			"simple",
			"with-icon",
			"colored",
			"multi-line",
		] as const
		const type = getRandom(tooltipTypes)

		switch (type) {
			case "simple": {
				const tooltipTexts = [
					"Helpful tip!",
					"Click me!",
					"More info",
					"Hover for details",
				]
				return (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline" size="sm">
									Hover
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p className="text-xs">{getRandom(tooltipTexts)}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)
			}
			case "with-icon":
				return (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="ghost" size="icon" className="h-8 w-8">
									<Info className="h-4 w-4" />
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p className="text-xs">Information tooltip</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)
			case "colored":
				return (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Badge variant="outline" className="cursor-help">
									Pro
								</Badge>
							</TooltipTrigger>
							<TooltipContent className="bg-primary text-primary-foreground">
								<p className="text-xs">Premium feature</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)
			case "multi-line":
				return (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button variant="outline" size="sm">
									<HelpCircle className="h-3 w-3" />
								</Button>
							</TooltipTrigger>
							<TooltipContent className="max-w-xs">
								<p className="text-xs">This is a longer tooltip</p>
								<p className="text-xs text-muted-foreground">
									With multiple lines of text
								</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)
		}
	} else if (subcategory === "compound-card") {
		const cardTypes = [
			"stats",
			"user",
			"action",
			"feature",
			"metric",
			"task",
		] as const
		const cardType = getRandom(cardTypes)

		switch (cardType) {
			case "stats": {
				const stats = [
					{ label: "Users", value: "2.4k", change: "+12%", icon: Users },
					{ label: "Revenue", value: "$45k", change: "+8%", icon: TrendingUp },
					{ label: "Orders", value: "89", change: "-3%", icon: ShoppingCart },
				]
				const stat = getRandom(stats)
				const StatIcon = stat.icon
				return (
					<Card className="w-56">
						<CardContent className="p-4">
							<div className="flex items-center justify-between mb-2">
								<StatIcon className="h-8 w-8 text-muted-foreground" />
								<Badge
									variant={
										stat.change.startsWith("+") ? "default" : "destructive"
									}
									className="text-xs"
								>
									{stat.change}
								</Badge>
							</div>
							<p className="text-2xl font-bold">{stat.value}</p>
							<p className="text-xs text-muted-foreground">{stat.label}</p>
						</CardContent>
					</Card>
				)
			}
			case "user": {
				const users = [
					{
						name: "Alex Chen",
						role: "Designer",
						status: "online",
						avatar: "AC",
					},
					{
						name: "Sam Taylor",
						role: "Developer",
						status: "away",
						avatar: "ST",
					},
					{
						name: "Jordan Lee",
						role: "Manager",
						status: "offline",
						avatar: "JL",
					},
				]
				const user = getRandom(users)
				return (
					<Card className="w-64">
						<CardContent className="p-4">
							<div className="flex items-center space-x-4">
								<Avatar className="h-12 w-12">
									<AvatarFallback className="bg-primary text-primary-foreground">
										{user.avatar}
									</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<p className="text-sm font-semibold">{user.name}</p>
									<p className="text-xs text-muted-foreground">{user.role}</p>
									<div className="flex items-center gap-1 mt-1">
										<div
											className={`h-2 w-2 rounded-full ${
												user.status === "online"
													? "bg-green-500"
													: user.status === "away"
													? "bg-yellow-500"
													: "bg-gray-300"
											}`}
										/>
										<span className="text-xs text-muted-foreground">
											{user.status}
										</span>
									</div>
								</div>
								<Button size="sm" variant="outline">
									View
								</Button>
							</div>
						</CardContent>
					</Card>
				)
			}
			case "action": {
				const actions = [
					{
						icon: Download,
						label: "Download Report",
						desc: "PDF, 2.4MB",
						color: "blue",
					},
					{
						icon: Upload,
						label: "Upload Files",
						desc: "Drag or click",
						color: "green",
					},
					{
						icon: Share,
						label: "Share Project",
						desc: "Invite team",
						color: "purple",
					},
				]
				const action = getRandom(actions)
				const ActionIcon = action.icon
				return (
					<Card className="w-56 hover:shadow-lg transition-all cursor-pointer group">
						<CardContent className="p-4">
							<div className="flex items-start gap-3">
								<div
									className={`h-10 w-10 rounded-lg bg-${action.color}-100 dark:bg-${action.color}-950 flex items-center justify-center group-hover:scale-110 transition-transform`}
								>
									<ActionIcon
										className={`h-5 w-5 text-${action.color}-600 dark:text-${action.color}-400`}
									/>
								</div>
								<div className="flex-1">
									<p className="text-sm font-medium">{action.label}</p>
									<p className="text-xs text-muted-foreground">{action.desc}</p>
								</div>
								<ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
						</CardContent>
					</Card>
				)
			}
			case "feature": {
				const features = [
					{
						icon: Zap,
						title: "Fast",
						desc: "Lightning quick",
						progress: 66,
					},
					{
						icon: Shield,
						title: "Secure",
						desc: "Bank-level security",
						progress: 100,
					},
					{
						icon: Cloud,
						title: "Cloud",
						desc: "Always synced",
						progress: 75,
					},
					{
						icon: Sparkles,
						title: "Smart",
						desc: "AI-powered",
						progress: 90,
					},
				]
				const feature = getRandom(features)
				const FeatureIcon = feature.icon
				return (
					<Card className="w-48">
						<CardHeader className="p-3 pb-2">
							<div className="flex items-center justify-between">
								<CardTitle className="text-sm">{feature.title}</CardTitle>
								<FeatureIcon className="h-4 w-4 text-primary" />
							</div>
						</CardHeader>
						<CardContent className="p-3 pt-0">
							<p className="text-xs text-muted-foreground">{feature.desc}</p>
							<Progress value={feature.progress} className="mt-2 h-1" />
						</CardContent>
					</Card>
				)
			}
			case "metric": {
				const metrics = [
					{ label: "CPU Usage", value: 45, unit: "%", status: "normal" },
					{ label: "Memory", value: 8.2, unit: "GB", status: "warning" },
					{ label: "Storage", value: 124, unit: "GB", status: "critical" },
				]
				const metric = getRandom(metrics)
				const statusColors: Record<string, string> = {
					normal: "text-green-600",
					warning: "text-yellow-600",
					critical: "text-red-600",
				}
				return (
					<Card className="w-48">
						<CardContent className="p-3">
							<p className="text-xs text-muted-foreground">{metric.label}</p>
							<div className="flex items-baseline gap-1 mt-1">
								<span
									className={`text-2xl font-bold ${
										statusColors[metric.status]
									}`}
								>
									{metric.value}
								</span>
								<span className="text-sm text-muted-foreground">
									{metric.unit}
								</span>
							</div>
							<Progress value={metric.value} className="h-1 mt-2" />
						</CardContent>
					</Card>
				)
			}
			case "task": {
				const tasks = [
					{
						title: "Review PR",
						priority: "high",
						due: "2 hours",
						assigned: "JD",
					},
					{
						title: "Update docs",
						priority: "medium",
						due: "Tomorrow",
						assigned: "ST",
					},
					{
						title: "Fix bug",
						priority: "low",
						due: "Next week",
						assigned: "AC",
					},
				]
				const task = getRandom(tasks)
				const priorityColors = {
					high: "destructive" as const,
					medium: "default" as const,
					low: "secondary" as const,
				}
				return (
					<Card className="w-64">
						<CardContent className="p-3">
							<div className="flex items-start justify-between mb-2">
								<div className="flex-1">
									<p className="text-sm font-medium">{task.title}</p>
									<p className="text-xs text-muted-foreground">
										Due: {task.due}
									</p>
								</div>
								<Badge
									variant={
										priorityColors[task.priority as keyof typeof priorityColors]
									}
									className="text-xs"
								>
									{task.priority}
								</Badge>
							</div>
							<div className="flex items-center justify-between">
								<Avatar className="h-6 w-6">
									<AvatarFallback className="text-xs">
										{task.assigned}
									</AvatarFallback>
								</Avatar>
								<Button size="sm" variant="ghost" className="h-7 text-xs">
									View
								</Button>
							</div>
						</CardContent>
					</Card>
				)
			}
		}
	}

	// Default random behavior with more variety
	const complexTypes = [
		"tabs",
		"alert",
		"skeleton",
		"separator",
		"accordion",
		"breadcrumb",
		"tooltip",
		"compound-card",
		"mini-dashboard",
		"notification",
	] as const
	const type = getRandom(complexTypes)

	switch (type) {
		case "tabs":
			return (
				<Tabs defaultValue="tab1" className="w-48">
					<TabsList className="grid w-full grid-cols-2 h-8">
						<TabsTrigger value="tab1" className="text-xs">
							Tab 1
						</TabsTrigger>
						<TabsTrigger value="tab2" className="text-xs">
							Tab 2
						</TabsTrigger>
					</TabsList>
					<TabsContent value="tab1" className="p-2">
						<p className="text-xs">Content 1</p>
					</TabsContent>
					<TabsContent value="tab2" className="p-2">
						<p className="text-xs">Content 2</p>
					</TabsContent>
				</Tabs>
			)
		case "alert": {
			const alertVariants = ["default", "destructive"] as const
			const variant = getRandom(alertVariants)
			const IconComponent = variant === "destructive" ? AlertCircle : Info
			// Compact alert
			return (
				<Alert variant={variant} className="w-56 py-2 px-3">
					<IconComponent className="h-4 w-4" />
					<AlertTitle className="text-sm">Alert!</AlertTitle>
					<AlertDescription className="text-xs">
						This is a physics-enabled alert.
					</AlertDescription>
				</Alert>
			)
		}
		case "skeleton": {
			const skeletonTypes = ["line", "circle", "card"] as const
			const skelType = getRandom(skeletonTypes)
			if (skelType === "line") {
				return <Skeleton className="h-4 w-32" />
			} else if (skelType === "circle") {
				return <Skeleton className="h-12 w-12 rounded-full" />
			} else {
				return (
					<div className="space-y-2">
						<Skeleton className="h-4 w-32" />
						<Skeleton className="h-4 w-24" />
					</div>
				)
			}
		}
		case "separator": {
			const orientations = ["horizontal", "vertical"] as const
			const orientation = getRandom(orientations)
			return (
				<Separator
					orientation={orientation}
					className={orientation === "horizontal" ? "w-20" : "h-20"}
				/>
			)
		}
		case "accordion": {
			return (
				<Accordion type="single" collapsible className="w-48">
					<AccordionItem value="item-1" className="border-b-0">
						<AccordionTrigger className="text-xs py-2">
							Question?
						</AccordionTrigger>
						<AccordionContent className="text-xs pb-2">
							Answer here!
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			)
		}
		case "breadcrumb": {
			return (
				<Breadcrumb>
					<BreadcrumbList className="text-xs">
						<BreadcrumbItem>
							<BreadcrumbLink>Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Page</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			)
		}
		case "tooltip": {
			const tooltipTexts = [
				"Helpful tip!",
				"Click me!",
				"More info",
				"Hover for details",
			]
			return (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="outline" size="sm">
								<Info className="h-3 w-3 mr-1" />
								Hover
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p className="text-xs">{getRandom(tooltipTexts)}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			)
		}
		case "compound-card": {
			const cardTypes = ["stats", "user", "action", "feature"] as const
			const cardType = getRandom(cardTypes)

			if (cardType === "stats") {
				const stats = [
					{ label: "Users", value: "2.4k", change: "+12%" },
					{ label: "Revenue", value: "$45k", change: "+8%" },
					{ label: "Orders", value: "89", change: "-3%" },
				]
				const stat = getRandom(stats)
				return (
					<Card className="w-48">
						<CardContent className="p-3">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-xs text-muted-foreground">{stat.label}</p>
									<p className="text-lg font-semibold">{stat.value}</p>
								</div>
								<Badge
									variant={
										stat.change.startsWith("+") ? "default" : "destructive"
									}
									className="text-xs"
								>
									{stat.change}
								</Badge>
							</div>
						</CardContent>
					</Card>
				)
			} else if (cardType === "user") {
				const users = [
					{ name: "Alex Chen", role: "Designer", status: "online" },
					{ name: "Sam Taylor", role: "Developer", status: "away" },
					{ name: "Jordan Lee", role: "Manager", status: "offline" },
				]
				const user = getRandom(users)
				return (
					<Card className="w-56">
						<CardContent className="p-3">
							<div className="flex items-center space-x-3">
								<Avatar className="h-10 w-10">
									<AvatarFallback>
										{user.name
											.split(" ")
											.map(n => n[0])
											.join("")}
									</AvatarFallback>
								</Avatar>
								<div className="flex-1">
									<p className="text-sm font-medium">{user.name}</p>
									<p className="text-xs text-muted-foreground">{user.role}</p>
								</div>
								<div
									className={`h-2 w-2 rounded-full ${
										user.status === "online"
											? "bg-green-500"
											: user.status === "away"
											? "bg-yellow-500"
											: "bg-gray-300"
									}`}
								/>
							</div>
						</CardContent>
					</Card>
				)
			} else if (cardType === "action") {
				const actions = [
					{ icon: Download, label: "Download", desc: "Get the file" },
					{ icon: Upload, label: "Upload", desc: "Add new file" },
					{ icon: Share, label: "Share", desc: "Send to team" },
				]
				const action = getRandom(actions)
				const ActionIcon = action.icon
				return (
					<Card className="w-48 hover:shadow-md transition-shadow cursor-pointer">
						<CardContent className="p-4 text-center">
							<ActionIcon className="h-8 w-8 mx-auto mb-2 text-primary" />
							<p className="text-sm font-medium">{action.label}</p>
							<p className="text-xs text-muted-foreground">{action.desc}</p>
						</CardContent>
					</Card>
				)
			} else {
				const IconCard = getRandom([User, Settings, Mail, Calendar])
				return (
					<Card className="w-48">
						<CardHeader className="p-3 pb-2">
							<div className="flex items-center justify-between">
								<CardTitle className="text-sm">Feature</CardTitle>
								<IconCard className="h-4 w-4 text-muted-foreground" />
							</div>
						</CardHeader>
						<CardContent className="p-3 pt-0">
							<div className="flex items-center gap-2">
								<Badge variant="secondary" className="text-xs">
									New
								</Badge>
								<Progress value={66} className="flex-1 h-1" />
							</div>
						</CardContent>
					</Card>
				)
			}
		}
		case "mini-dashboard": {
			return (
				<Card className="w-64">
					<CardHeader className="p-3">
						<CardTitle className="text-sm flex items-center justify-between">
							Dashboard
							<Badge variant="outline" className="text-xs">
								Live
							</Badge>
						</CardTitle>
					</CardHeader>
					<CardContent className="p-3 pt-0 space-y-3">
						<div className="grid grid-cols-2 gap-3">
							<div>
								<p className="text-xs text-muted-foreground">Active</p>
								<p className="text-lg font-bold">24</p>
							</div>
							<div>
								<p className="text-xs text-muted-foreground">Pending</p>
								<p className="text-lg font-bold">12</p>
							</div>
						</div>
						<Progress value={66} className="h-1" />
					</CardContent>
				</Card>
			)
		}
		case "notification": {
			const notifications = [
				{ icon: Mail, title: "New message", time: "2m ago", unread: true },
				{ icon: Bell, title: "System update", time: "1h ago", unread: false },
				{ icon: User, title: "New follower", time: "3h ago", unread: true },
			]
			const notif = getRandom(notifications)
			const NotifIcon = notif.icon
			// Compact notification
			return (
				<Card className={`w-64 ${notif.unread ? "border-primary/50" : ""}`}>
					<CardContent className="p-3">
						<div className="flex items-start gap-3">
							<div
								className={`h-8 w-8 rounded-full ${
									notif.unread ? "bg-primary/20" : "bg-muted"
								} flex items-center justify-center`}
							>
								<NotifIcon
									className={`h-4 w-4 ${
										notif.unread ? "text-primary" : "text-muted-foreground"
									}`}
								/>
							</div>
							<div className="flex-1">
								<p className="text-sm font-medium">{notif.title}</p>
								<p className="text-xs text-muted-foreground">{notif.time}</p>
							</div>
							{notif.unread && (
								<div className="h-2 w-2 rounded-full bg-primary mt-1" />
							)}
						</div>
					</CardContent>
				</Card>
			)
		}
		case "notification-spam": {
			const notifications = [
				"🔔 Turn on notifications!",
				"🔔 Never miss an update!",
				"🔔 Get instant alerts!",
				"🔔 Enable push notifications!",
			]
			return (
				<Alert className="w-64 border-yellow-500 py-2 px-3">
					<Bell className="h-4 w-4 animate-pulse" />
					<AlertTitle className="text-sm">
						{getRandom(notifications)}
					</AlertTitle>
					<AlertDescription className="text-xs">
						<div className="flex gap-2 mt-2">
							<Button size="sm" className="h-6 text-xs">
								Allow
							</Button>
							<Button size="sm" variant="ghost" className="h-6 text-xs">
								Ask me 47 more times
							</Button>
						</div>
					</AlertDescription>
				</Alert>
			)
		}
	}
}

export function PhysicsPlayground() {
	const sceneRef = useRef<HTMLDivElement>(null)
	const engineRef = useRef<Matter.Engine | undefined>(undefined)
	const runnerRef = useRef<Matter.Runner | undefined>(undefined)
	const bodiesRef = useRef<Map<number, HTMLElement>>(new Map())

	const [selectedCategory, setSelectedCategory] =
		useState<ComponentCategory>("random")
	const [selectedSubcategory, setSelectedSubcategory] = useState<
		ComponentSubcategory | undefined
	>(undefined)
	const [gravity, setGravity] = useState(1)
	const [bounce, setBounce] = useState(0.8)
	const [isPaused, setIsPaused] = useState(false)
	const [componentCount, setComponentCount] = useState(0)

	// Keyboard shortcuts
	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			// Check if user is typing in an input
			if (
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement
			) {
				return
			}

			// Space key to spawn
			if (e.key === " ") {
				e.preventDefault()
				spawnComponent()
			}
			// 'c' key to clear
			else if (e.key === "c" || e.key === "C") {
				e.preventDefault()
				clearAll()
			}
			// 'p' key to pause/unpause
			else if (e.key === "p" || e.key === "P") {
				e.preventDefault()
				setIsPaused(prev => !prev)
			}
		}

		window.addEventListener("keydown", handleKeyPress)
		return () => window.removeEventListener("keydown", handleKeyPress)
	}, [selectedCategory, selectedSubcategory])

	// Initialize Matter.js
	useEffect(() => {
		if (!sceneRef.current) return

		// Create engine
		const engine = Matter.Engine.create()
		engineRef.current = engine

		// Set gravity
		engine.world.gravity.y = gravity

		// We don't need a renderer since we're using DOM elements
		// Just create the runner
		const runner = Matter.Runner.create()
		runnerRef.current = runner

		// Create boundaries
		const bounds = {
			width: sceneRef.current.clientWidth,
			height: sceneRef.current.clientHeight,
		}

		const walls = [
			// Bottom
			Matter.Bodies.rectangle(
				bounds.width / 2,
				bounds.height - 25,
				bounds.width,
				50,
				{
					isStatic: true,
					label: "floor",
				},
			),
			// Left
			Matter.Bodies.rectangle(25, bounds.height / 2, 50, bounds.height, {
				isStatic: true,
				label: "wall-left",
			}),
			// Right
			Matter.Bodies.rectangle(
				bounds.width - 25,
				bounds.height / 2,
				50,
				bounds.height,
				{
					isStatic: true,
					label: "wall-right",
				},
			),
			// Top
			Matter.Bodies.rectangle(bounds.width / 2, 25, bounds.width, 50, {
				isStatic: true,
				label: "ceiling",
			}),
		]

		Matter.World.add(engine.world, walls)

		// Run the engine
		Matter.Runner.run(runner, engine)

		// Update DOM elements positions
		const updateLoop = () => {
			const bodies = Matter.Composite.allBodies(engine.world)

			bodies.forEach(body => {
				if (body.isStatic) return

				const element = bodiesRef.current.get(body.id)
				if (element) {
					// Use the body's position directly
					const x = body.position.x
					const y = body.position.y
					const angle = body.angle

					// Apply transform with the center of the element as the origin
					element.style.left = "0px"
					element.style.top = "0px"
					element.style.transform = `translate(${
						x - element.offsetWidth / 2
					}px, ${y - element.offsetHeight / 2}px) rotate(${angle}rad)`
				}
			})

			requestAnimationFrame(updateLoop)
		}
		updateLoop()

		// Handle window resize
		const handleResize = () => {
			if (!sceneRef.current) return

			// Update wall positions on resize
			const newBounds = {
				width: sceneRef.current.clientWidth,
				height: sceneRef.current.clientHeight,
			}

			// Remove old walls
			const oldWalls = Matter.Composite.allBodies(engine.world).filter(
				body => body.isStatic,
			)
			Matter.Composite.remove(engine.world, oldWalls)

			// Add new walls with updated positions
			const newWalls = [
				Matter.Bodies.rectangle(
					newBounds.width / 2,
					newBounds.height - 25,
					newBounds.width,
					50,
					{ isStatic: true, label: "floor" },
				),
				Matter.Bodies.rectangle(
					25,
					newBounds.height / 2,
					50,
					newBounds.height,
					{ isStatic: true, label: "wall-left" },
				),
				Matter.Bodies.rectangle(
					newBounds.width - 25,
					newBounds.height / 2,
					50,
					newBounds.height,
					{ isStatic: true, label: "wall-right" },
				),
				Matter.Bodies.rectangle(newBounds.width / 2, 25, newBounds.width, 50, {
					isStatic: true,
					label: "ceiling",
				}),
			]

			Matter.World.add(engine.world, newWalls)
		}
		window.addEventListener("resize", handleResize)

		// Cleanup
		return () => {
			window.removeEventListener("resize", handleResize)
			Matter.Runner.stop(runner)
			Matter.Composite.clear(engine.world, false)
			Matter.Engine.clear(engine)
			bodiesRef.current.clear()
		}
	}, []) // Remove gravity from dependencies

	// Update gravity when slider changes
	useEffect(() => {
		if (engineRef.current) {
			engineRef.current.world.gravity.y = gravity
		}
	}, [gravity])

	// Pause/resume physics
	useEffect(() => {
		if (!runnerRef.current) return

		if (isPaused) {
			runnerRef.current.enabled = false
		} else {
			runnerRef.current.enabled = true
		}
	}, [isPaused])

	// Create a shadcn component element
	const createComponentElement = (
		category: ComponentCategory,
		subcategory?: ComponentSubcategory,
	) => {
		const element = document.createElement("div")
		element.className = "absolute"
		element.style.transformOrigin = "center"
		element.style.zIndex = "10"

		// Create a root for React to render into
		const root = createRoot(element)

		// Determine what component to create based on category
		let component: React.ReactElement

		// Handle random category - pick a random component type
		if (category === "random") {
			const componentTypes = [
				"buttons",
				"badges",
				"cards",
				"icons",
				"toggles",
				"inputs",
				"complex",
				// Note: upsells are excluded from random selection
			]
			const weights = [0.2, 0.2, 0.15, 0.2, 0.15, 0.15, 0.15] // Weighted distribution
			const random = Math.random()
			let cumulative = 0
			let selectedType = "buttons"

			for (let i = 0; i < componentTypes.length; i++) {
				cumulative += weights[i]
				if (random < cumulative) {
					selectedType = componentTypes[i]
					break
				}
			}

			// Create component based on selected type
			switch (selectedType) {
				case "buttons":
					component = createButtonComponent()
					break
				case "badges":
					component = createBadgeComponent()
					break
				case "cards":
					component = createCardComponent()
					break
				case "icons":
					component = createIconComponent()
					break
				case "toggles":
					component = createToggleComponent()
					break
				case "inputs":
					component = createInputComponent()
					break
				case "complex":
					component = createComplexComponent()
					break
				default:
					component = createButtonComponent()
			}
		} else {
			// Create specific component type
			switch (category) {
				case "buttons":
					component = createButtonComponent(subcategory)
					break
				case "badges":
					component = createBadgeComponent(subcategory)
					break
				case "cards":
					component = createCardComponent(subcategory)
					break
				case "icons":
					component = createIconComponent(subcategory)
					break
				case "toggles":
					component = createToggleComponent(subcategory)
					break
				case "inputs":
					component = createInputComponent(subcategory)
					break
				case "complex":
					component = createComplexComponent(subcategory)
					break
				case "upsells":
					component = createUpsellComponent(subcategory)
					break
				default: {
					// Fallback - icon button
					const IconBtn = getRandom(ICON_COMPONENTS)
					component = (
						<Button variant="outline" size="icon">
							<IconBtn className="h-4 w-4" />
						</Button>
					)
				}
			}
		}

		// Render the component
		root.render(component)

		// Store the root for cleanup
		element.setAttribute("data-react-root", "true")

		return element
	}

	// Spawn a component
	const spawnComponent = (
		componentType?: ComponentCategory,
		subcategory?: ComponentSubcategory,
	) => {
		if (!sceneRef.current || !engineRef.current) return

		const type = componentType || selectedCategory
		const subtype = subcategory || selectedSubcategory
		const element = createComponentElement(type, subtype)

		// Append to scene first
		sceneRef.current.appendChild(element)

		// Wait for next frame to ensure element is rendered
		requestAnimationFrame(() => {
			// Get element dimensions
			const rect = element.getBoundingClientRect()
			const sceneRect = sceneRef.current!.getBoundingClientRect()

			// Random spawn position at top
			const x = Math.random() * (sceneRect.width - rect.width) + rect.width / 2
			const y = 50

			// Smooth bias towards upright orientation
			// Using a power function to bias the distribution

			// Generate a random value between 0 and 1
			const randomValue = Math.random()

			// Apply a power function to bias towards 0 (upright)
			// Higher power = stronger bias towards upright
			// Using power of 3 gives a nice distribution
			const biasedValue = Math.pow(randomValue, 3)

			// Convert to angle: biased value determines how far from upright
			// Maximum deviation is π (180 degrees) in either direction
			const deviation = biasedValue * Math.PI

			// Randomly choose left or right deviation
			const initialAngle = Math.random() < 0.5 ? deviation : -deviation

			// Create physics body
			const body = Matter.Bodies.rectangle(x, y, rect.width, rect.height, {
				restitution: bounce,
				friction: 0.3,
				density: 0.001,
				angle: initialAngle,
				angularVelocity: (Math.random() - 0.5) * 0.1,
			})

			// Add to world
			Matter.World.add(engineRef.current!.world, body)
			bodiesRef.current.set(body.id, element)

			// Set initial position
			element.style.left = "0px"
			element.style.top = "0px"
			element.style.transform = `translate(${x - rect.width / 2}px, ${
				y - rect.height / 2
			}px) rotate(${initialAngle}rad)`

			// Make element draggable
			element.style.cursor = "grab"

			// Add mouse interaction
			element.addEventListener("mousedown", e => {
				e.preventDefault()
				element.style.cursor = "grabbing"
				const startX = e.clientX
				const startY = e.clientY

				const handleMouseMove = (e: MouseEvent) => {
					const dx = e.clientX - startX
					const dy = e.clientY - startY
					Matter.Body.setVelocity(body, { x: dx * 0.5, y: dy * 0.5 })
				}

				const handleMouseUp = () => {
					element.style.cursor = "grab"
					document.removeEventListener("mousemove", handleMouseMove)
					document.removeEventListener("mouseup", handleMouseUp)
				}

				document.addEventListener("mousemove", handleMouseMove)
				document.addEventListener("mouseup", handleMouseUp)
			})
		})

		setComponentCount(prev => prev + 1)
	}

	// Clear all components
	const clearAll = () => {
		if (!engineRef.current) return

		const bodies = Matter.Composite.allBodies(engineRef.current.world)
		bodies.forEach(body => {
			if (!body.isStatic) {
				const element = bodiesRef.current.get(body.id)
				if (element) {
					element.remove()
					bodiesRef.current.delete(body.id)
				}
				Matter.World.remove(engineRef.current!.world, body)
			}
		})

		setComponentCount(0)
	}

	return (
		<div className="h-[calc(100vh-var(--header-height))] flex flex-col">
			{/* Controls */}
			<div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
				<div className="flex flex-wrap gap-1 items-center">
					{/* Action buttons first */}
					<div className="flex gap-2">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button onClick={() => spawnComponent()} size="sm">
										Spawn
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p className="text-xs">Press Space to spawn</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>

						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<Button onClick={clearAll} variant="destructive" size="sm">
										Clear
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p className="text-xs">Press 'C' to clear</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>

					<Separator orientation="vertical" className="h-8" />

					{/* Component selection */}
					<Select
						value={selectedCategory}
						onValueChange={value => {
							setSelectedCategory(value as ComponentCategory)
							setSelectedSubcategory(undefined) // Reset subcategory when category changes
						}}
					>
						<SelectTrigger className="w-[140px]">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{COMPONENT_CATEGORIES.map(category => (
								<SelectItem key={category.id} value={category.id}>
									<div className="flex items-center gap-2">
										<category.icon className="h-4 w-4" />
										{category.name}
									</div>
								</SelectItem>
							))}
						</SelectContent>
					</Select>

					{/* Subcategory dropdown */}
					{selectedCategory !== "random" && (
						<Select
							value={selectedSubcategory || "random"}
							onValueChange={value => {
								setSelectedSubcategory(
									value === "random"
										? undefined
										: (value as ComponentSubcategory),
								)
							}}
						>
							<SelectTrigger className="w-[160px]">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="random">Random</SelectItem>
								<Separator className="my-1" />
								{COMPONENT_CATEGORIES.find(
									cat => cat.id === selectedCategory,
								)?.subcategories.map(sub => (
									<SelectItem key={sub.id} value={sub.id}>
										{sub.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					)}

					<Separator orientation="vertical" className="h-8" />

					{/* Physics controls */}
					<div className="flex items-center gap-2">
						<Label htmlFor="gravity">Gravity</Label>
						<Slider
							id="gravity"
							value={[gravity]}
							onValueChange={([v]) => setGravity(v)}
							min={0}
							max={2}
							step={0.1}
							className="w-[100px]"
						/>
					</div>

					<div className="flex items-center gap-2">
						<Label htmlFor="bounce">Bounce</Label>
						<Slider
							id="bounce"
							value={[bounce]}
							onValueChange={([v]) => setBounce(v)}
							min={0}
							max={1}
							step={0.1}
							className="w-[100px]"
						/>
					</div>

					<div className="flex items-center gap-2">
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger asChild>
									<div className="flex items-center gap-2">
										<Switch
											id="pause"
											checked={isPaused}
											onCheckedChange={setIsPaused}
										/>
										<Label htmlFor="pause">Pause</Label>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p className="text-xs">Press 'P' to toggle</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>

					<div className="ml-auto">
						<Badge variant="secondary">Components: {componentCount}</Badge>
					</div>
				</div>
			</div>

			{/* Physics Scene */}
			<div
				ref={sceneRef}
				className="flex-1 relative overflow-hidden bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]"
				style={{
					backgroundImage: `
						linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
						linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
					`,
					backgroundSize: "20px 20px",
					minHeight: "400px",
					position: "relative",
				}}
			>
				{/* Visual walls */}
				<div className="absolute inset-0 pointer-events-none">
					{/* Top wall */}
					<div className="absolute top-0 left-0 right-0 h-[50px] border-b-2 border-border/50 bg-gradient-to-b from-background/80 to-transparent" />
					{/* Bottom wall */}
					<div className="absolute bottom-0 left-0 right-0 h-[50px] border-t-2 border-border/50 bg-gradient-to-t from-background/80 to-transparent" />
					{/* Left wall */}
					<div className="absolute top-0 left-0 bottom-0 w-[50px] border-r-2 border-border/50 bg-gradient-to-r from-background/80 to-transparent" />
					{/* Right wall */}
					<div className="absolute top-0 right-0 bottom-0 w-[50px] border-l-2 border-border/50 bg-gradient-to-l from-background/80 to-transparent" />

					{/* Corner indicators */}
					<div className="absolute top-[48px] left-[48px] w-4 h-4 border-l-2 border-t-2 border-border/50" />
					<div className="absolute top-[48px] right-[48px] w-4 h-4 border-r-2 border-t-2 border-border/50" />
					<div className="absolute bottom-[48px] left-[48px] w-4 h-4 border-l-2 border-b-2 border-border/50" />
					<div className="absolute bottom-[48px] right-[48px] w-4 h-4 border-r-2 border-b-2 border-border/50" />
				</div>

				{/* Components will be rendered here */}

				{/* Placeholder text when no components */}
				{componentCount === 0 && (
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<p className="text-2xl text-muted-foreground/30 select-none">
							Press space to spawn components
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
