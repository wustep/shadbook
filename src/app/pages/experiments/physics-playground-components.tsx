import {
	AlertCircle,
	ArrowRight,
	Bell,
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
	Layers,
	Lightbulb,
	Mail,
	Moon,
	MoreHorizontal,
	Music,
	Palette,
	Pause,
	Play,
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
	Upload,
	User,
	Users,
	X,
	Zap,
} from "lucide-react"
import React from "react"

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

export type ComponentCategory = (typeof COMPONENT_CATEGORIES)[number]["id"]
export type ComponentSubcategory = {
	[K in keyof typeof COMPONENT_SUBCATEGORIES]: (typeof COMPONENT_SUBCATEGORIES)[K][number]["id"]
}[keyof typeof COMPONENT_SUBCATEGORIES]

// Component subcategories
export const COMPONENT_SUBCATEGORIES = {
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
export const COMPONENT_CATEGORIES = [
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

// Helper function to get random item from array
export const getRandom = <T,>(arr: readonly T[]): T =>
	arr[Math.floor(Math.random() * arr.length)]

// Component creation functions
export const createButtonComponent = (
	subcategory?: string,
): React.ReactElement => {
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
		"View Details",
		"Contact Us",
		"Subscribe",
		"Buy Now",
		"Add to Cart",
		"Checkout",
		"Confirm",
		"Dismiss",
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
			Save,
			Filter,
			Grid3x3,
			Calendar,
			Clock,
			Camera,
			Zap,
			Shield,
		])
		// Sometimes add interesting styles
		if (Math.random() > 0.7) {
			const styles = [
				"shadow-lg hover:shadow-xl transition-all",
				"rounded-full",
				"bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0",
			]
			return (
				<Button variant={variant} size="icon" className={getRandom(styles)}>
					<ButtonIcon className="h-4 w-4" />
				</Button>
			)
		}
		return (
			<Button variant={variant} size="icon">
				<ButtonIcon className="h-4 w-4" />
			</Button>
		)
	} else if (subcategory === "text") {
		// Sometimes add gradient or custom styling
		if (Math.random() > 0.7) {
			const gradients = [
				"bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600",
				"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600",
				"bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600",
				"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
				"bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600",
			]
			return (
				<Button className={getRandom(gradients)} size={size}>
					{getRandom(texts)}
				</Button>
			)
		}
		// Sometimes add shadow effects
		if (Math.random() > 0.8) {
			return (
				<Button
					variant={variant}
					size={size}
					className="shadow-lg hover:shadow-xl transition-all"
				>
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
			Play,
			Pause,
			Heart,
			Star,
			Bell,
			Shield,
			TrendingUp,
			Coffee,
			Sparkles,
		])
		const iconPosition = getRandom(["left", "right"])
		// Sometimes use more creative button styles
		if (Math.random() > 0.7) {
			const creativeStyles = [
				"group",
				"rounded-full",
				"shadow-md hover:shadow-lg transition-all",
			]
			if (iconPosition === "left") {
				return (
					<Button
						variant={variant}
						size={size}
						className={getRandom(creativeStyles)}
					>
						<ButtonIcon className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
						{getRandom(texts)}
					</Button>
				)
			} else {
				return (
					<Button
						variant={variant}
						size={size}
						className={getRandom(creativeStyles)}
					>
						{getRandom(texts)}
						<ButtonIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
					</Button>
				)
			}
		}
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
					"See all features",
					"Browse gallery",
					"API Reference",
				])}
			</Button>
		)
	}

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.buttons).id
	return createButtonComponent(randomSubcategory)
}

export const createBadgeComponent = (
	subcategory?: string,
): React.ReactElement => {
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
		"Alpha",
		"Preview",
		"Experimental",
		"Latest",
		"Special",
		"VIP",
		"Plus",
		"Elite",
		"2024",
	]
	const text = getRandom(texts)

	// Handle specific subcategories
	if (subcategory === "simple") {
		// Sometimes use different sizes
		if (Math.random() > 0.7) {
			const sizes = [
				"px-1.5 py-0.5 text-[0.65rem]",
				"px-3 py-1 text-sm",
				"px-2 py-0.5 text-xs",
			]
			return (
				<Badge variant={variant} className={getRandom(sizes)}>
					{text}
				</Badge>
			)
		}
		// Sometimes add subtle animations
		if (Math.random() > 0.8) {
			return (
				<Badge variant={variant} className="animate-pulse">
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
			Shield,
			Clock,
			Bell,
			Lightbulb,
			Coffee,
			Music,
			Camera,
			Gamepad2,
		])
		// Sometimes put icon on the right
		if (Math.random() > 0.5) {
			return (
				<Badge variant={variant}>
					{text}
					<BadgeIcon className="ml-1 h-3 w-3" />
				</Badge>
			)
		}
		return (
			<Badge variant={variant}>
				<BadgeIcon className="mr-1 h-3 w-3" />
				{text}
			</Badge>
		)
	} else if (subcategory === "colored") {
		const colorClasses = [
			"bg-blue-500 hover:bg-blue-600 text-white border-blue-600",
			"bg-green-500 hover:bg-green-600 text-white border-green-600",
			"bg-purple-500 hover:bg-purple-600 text-white border-purple-600",
			"bg-amber-500 hover:bg-amber-600 text-white border-amber-600",
			"bg-rose-500 hover:bg-rose-600 text-white border-rose-600",
			"bg-red-500 hover:bg-red-600 text-white border-red-600",
			"bg-orange-500 hover:bg-orange-600 text-white border-orange-600",
			"bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-600",
			"bg-lime-500 hover:bg-lime-600 text-white border-lime-600",
			"bg-teal-500 hover:bg-teal-600 text-white border-teal-600",
			"bg-indigo-500 hover:bg-indigo-600 text-white border-indigo-600",
			"bg-violet-500 hover:bg-violet-600 text-white border-violet-600",
			"bg-gradient-to-r from-pink-500 to-violet-500 text-white",
			"bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
			"bg-gradient-to-r from-amber-500 to-orange-500 text-white",
			"bg-gradient-to-r from-green-500 to-emerald-500 text-white",
			"bg-gradient-to-r from-red-500 to-orange-500 text-white",
			"bg-gradient-to-r from-purple-500 to-pink-500 text-white",
		]
		return <Badge className={getRandom(colorClasses)}>{text}</Badge>
	}

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.badges).id
	return createBadgeComponent(randomSubcategory)
}

export const createIconComponent = (
	subcategory?: string,
): React.ReactElement => {
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

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.icons).id
	return createIconComponent(randomSubcategory)
}

export const createCardComponent = (
	subcategory?: string,
): React.ReactElement => {
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
			{
				label: "Users",
				value: "2.4k",
				change: "+12%",
				positive: true,
				icon: Users,
			},
			{
				label: "Revenue",
				value: "$45k",
				change: "+8%",
				positive: true,
				icon: TrendingUp,
			},
			{
				label: "Orders",
				value: "89",
				change: "-3%",
				positive: false,
				icon: ShoppingCart,
			},
			{
				label: "Views",
				value: "12.5k",
				change: "+24%",
				positive: true,
				icon: FileText,
			},
			{
				label: "Clicks",
				value: "3.2k",
				change: "+5%",
				positive: true,
				icon: Zap,
			},
			{
				label: "Sales",
				value: "$12.5k",
				change: "+18%",
				positive: true,
				icon: CreditCard,
			},
			{
				label: "Active",
				value: "573",
				change: "+7%",
				positive: true,
				icon: Users,
			},
			{
				label: "Downloads",
				value: "8.9k",
				change: "-2%",
				positive: false,
				icon: Download,
			},
		]
		const stat = getRandom(stats)
		const StatIcon = stat.icon
		// Sometimes show with icon
		if (Math.random() > 0.5) {
			return (
				<Card className="w-56">
					<CardContent className="p-4">
						<div className="flex items-center justify-between mb-2">
							<StatIcon className="h-8 w-8 text-muted-foreground" />
							<Badge
								variant={stat.positive ? "default" : "destructive"}
								className="text-xs"
							>
								{stat.change}
							</Badge>
						</div>
						<p className="text-2xl font-bold">{stat.value}</p>
						<p className="text-xs text-muted-foreground">{stat.label}</p>
						<Progress value={Math.random() * 100} className="mt-2 h-1" />
					</CardContent>
				</Card>
			)
		}
		// Classic stats card
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
			<Card className="w-72 hover:shadow-md hover:bg-accent/30 transition-all duration-200 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/20">
				<CardContent className="px-4">
					<div className="flex items-center space-x-3">
						<Avatar className="h-12 w-12 ring-2 ring-background shadow-sm">
							<AvatarFallback
								className={getRandom([
									"bg-gradient-to-br from-blue-500 to-blue-600 text-white",
									"bg-gradient-to-br from-green-500 to-green-600 text-white",
									"bg-gradient-to-br from-purple-500 to-purple-600 text-white",
									"bg-gradient-to-br from-orange-500 to-orange-600 text-white",
									"bg-gradient-to-br from-pink-500 to-pink-600 text-white",
									"bg-gradient-to-br from-indigo-500 to-indigo-600 text-white",
								])}
							>
								{names[idx]
									.split(" ")
									.map(n => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1 min-w-0">
							<div className="flex items-center gap-2 mb-1">
								<p className="text-sm font-semibold text-foreground truncate">
									{names[idx]}
								</p>
								<div
									className={`h-2 w-2 rounded-full ${
										status === "online"
											? "bg-green-500 shadow-sm shadow-green-500/50"
											: status === "away"
											? "bg-yellow-500 shadow-sm shadow-yellow-500/50"
											: "bg-gray-400"
									}`}
								/>
							</div>
							<p className="text-xs text-muted-foreground truncate">
								{emails[idx]}
							</p>
							<div className="flex items-center justify-between mt-2">
								<Badge
									variant={idx === 0 ? "default" : "secondary"}
									className="text-xs px-2 py-0.5 font-medium"
								>
									{roles[idx]}
								</Badge>
								<ChevronRight className="h-4 w-4 text-muted-foreground/50" />
							</div>
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
			<Card className="w-72 py-3">
				<CardContent className="px-3">
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
			<Card className="w-72 py-3 hover:bg-accent/50 transition-colors cursor-pointer">
				<CardContent className="px-3">
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
			<HoverCard openDelay={300}>
				<HoverCardTrigger asChild>
					<Button variant="link">{hover.trigger}</Button>
				</HoverCardTrigger>
				<HoverCardContent className="w-48 p-3">
					<p className="text-sm">{hover.content}</p>
				</HoverCardContent>
			</HoverCard>
		)
	}

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.cards).id
	return createCardComponent(randomSubcategory)
}

export const createToggleComponent = (
	subcategory?: string,
): React.ReactElement => {
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
							<FileText className="h-4 w-4" />
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
							<Star className="h-3 w-3" />
						</ToggleGroupItem>
						<ToggleGroupItem value="italic" aria-label="Italic">
							<Heart className="h-3 w-3" />
						</ToggleGroupItem>
						<ToggleGroupItem value="underline" aria-label="Underline">
							<Zap className="h-3 w-3" />
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

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.toggles).id
	return createToggleComponent(randomSubcategory)
}

export const createInputComponent = (
	subcategory?: string,
): React.ReactElement => {
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
				className="w-48 h-8"
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

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.inputs).id
	return createInputComponent(randomSubcategory)
}

export const createComplexComponent = (
	subcategory?: string,
): React.ReactElement => {
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
	}

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.complex).id
	return createComplexComponent(randomSubcategory)
}

export const createUpsellComponent = (
	subcategory?: string,
): React.ReactElement => {
	// Handle specific subcategories
	if (subcategory === "premium-popup") {
		const colorSchemes = [
			{
				border: "border-yellow-500",
				bg: "bg-gradient-to-r from-yellow-400 to-orange-500",
				hover: "hover:from-yellow-500 hover:to-orange-600",
				accent: "bg-red-500",
				text: "text-white",
			},
			{
				border: "border-purple-500",
				bg: "bg-gradient-to-r from-purple-500 to-pink-500",
				hover: "hover:from-purple-600 hover:to-pink-600",
				accent: "bg-blue-500",
				text: "text-white",
			},
			{
				border: "border-blue-500",
				bg: "bg-gradient-to-r from-blue-500 to-cyan-500",
				hover: "hover:from-blue-600 hover:to-cyan-600",
				accent: "bg-green-500",
				text: "text-white",
			},
			{
				border: "border-green-500",
				bg: "bg-gradient-to-r from-green-500 to-emerald-500",
				hover: "hover:from-green-600 hover:to-emerald-600",
				accent: "bg-orange-500",
				text: "text-white",
			},
			{
				border: "border-rose-500",
				bg: "bg-gradient-to-r from-rose-500 to-red-500",
				hover: "hover:from-rose-600 hover:to-red-600",
				accent: "bg-yellow-500",
				text: "text-white",
			},
		]
		const scheme = getRandom(colorSchemes)

		return (
			<Card
				className={`w-64 border-2 ${scheme.border} shadow-2xl relative overflow-hidden`}
			>
				<div
					className={`absolute top-0 right-0 ${scheme.accent} text-white text-xs px-2 py-1 rounded-bl-lg font-bold`}
				>
					LIMITED TIME
				</div>
				<CardHeader className={`${scheme.bg} ${scheme.text} p-3`}>
					<CardTitle className="text-lg flex items-center gap-2">
						<Zap className="h-5 w-5 animate-pulse" />
						GO PREMIUM NOW!
					</CardTitle>
				</CardHeader>
				<CardContent className="p-4">
					<p className="text-sm font-bold mb-2">🔥 FLASH SALE ENDING SOON!</p>
					<p className="text-xs text-muted-foreground mb-3">
						Unlock 1000+ features you'll never use!
					</p>
					<div className="space-y-2">
						<Button
							className={`w-full p-6 ${scheme.bg} ${scheme.hover} shadow-lg animate-pulse`}
						>
							UPGRADE NOW - 90% OFF
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="w-full text-xs opacity-70"
						>
							Maybe later
						</Button>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "countdown-timer") {
		const minutes = Math.floor(Math.random() * 5) + 1
		const seconds = Math.floor(Math.random() * 60)
		const colorVariants = [
			{
				border: "border-red-500",
				bg: "bg-red-50 dark:bg-red-950",
				icon: "text-red-600",
				title: "text-red-700 dark:text-red-400",
				timer: "text-red-600 dark:text-red-500",
			},
			{
				border: "border-orange-500",
				bg: "bg-orange-50 dark:bg-orange-950",
				icon: "text-orange-600",
				title: "text-orange-700 dark:text-orange-400",
				timer: "text-orange-600 dark:text-orange-500",
			},
			{
				border: "border-purple-500",
				bg: "bg-purple-50 dark:bg-purple-950",
				icon: "text-purple-600",
				title: "text-purple-700 dark:text-purple-400",
				timer: "text-purple-600 dark:text-purple-500",
			},
			{
				border: "border-blue-500",
				bg: "bg-blue-50 dark:bg-blue-950",
				icon: "text-blue-600",
				title: "text-blue-700 dark:text-blue-400",
				timer: "text-blue-600 dark:text-blue-500",
			},
			{
				border: "border-pink-500",
				bg: "bg-pink-50 dark:bg-pink-950",
				icon: "text-pink-600",
				title: "text-pink-700 dark:text-pink-400",
				timer: "text-pink-600 dark:text-pink-500",
			},
		]
		const variant = getRandom(colorVariants)

		return (
			<Alert className={`w-56 ${variant.border} ${variant.bg}`}>
				<AlertCircle className={`h-4 w-4 ${variant.icon}`} />
				<AlertTitle className={variant.title}>OFFER EXPIRES IN:</AlertTitle>
				<AlertDescription className={`text-2xl font-bold ${variant.timer}`}>
					{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
				</AlertDescription>
			</Alert>
		)
	} else if (subcategory === "exit-intent") {
		const exitVariants = [
			{
				border: "border-purple-500",
				badge: "bg-purple-500 text-white",
				button: "bg-purple-600 hover:bg-purple-700 text-white",
			},
			{
				border: "border-blue-500",
				badge: "bg-blue-500 text-white",
				button: "bg-blue-600 hover:bg-blue-700 text-white",
			},
			{
				border: "border-green-500",
				badge: "bg-green-500 text-white",
				button: "bg-green-600 hover:bg-green-700 text-white",
			},
			{
				border: "border-orange-500",
				badge: "bg-orange-500 text-white",
				button: "bg-orange-600 hover:bg-orange-700 text-white",
			},
			{
				border: "border-pink-500",
				badge: "bg-pink-500 text-white",
				button: "bg-pink-600 hover:bg-pink-700 text-white",
			},
		]
		const variant = getRandom(exitVariants)

		return (
			<Card className={`w-64 border-2 ${variant.border}`}>
				<CardHeader className="p-3">
					<CardTitle className="text-lg">WAIT! DON'T GO!</CardTitle>
				</CardHeader>
				<CardContent className="p-3 pt-0">
					<p className="text-sm mb-3">
						Here's a special offer just for you! 🎁
					</p>
					<Badge className={`mb-3 ${variant.badge}`}>EXCLUSIVE 50% OFF</Badge>
					<Button className={`w-full ${variant.button}`}>
						I CHANGED MY MIND
					</Button>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "fake-discount") {
		const originalPrice = Math.floor(Math.random() * 200) + 100
		const fakePrice = Math.floor(originalPrice * 0.3)
		const discountVariants = [
			{
				price: "text-green-600",
				badge: "bg-green-500 text-white",
				border: "border-green-200",
			},
			{
				price: "text-blue-600",
				badge: "bg-blue-500 text-white",
				border: "border-blue-200",
			},
			{
				price: "text-purple-600",
				badge: "bg-purple-500 text-white",
				border: "border-purple-200",
			},
			{
				price: "text-orange-600",
				badge: "bg-orange-500 text-white",
				border: "border-orange-200",
			},
			{
				price: "text-red-600",
				badge: "bg-red-500 text-white",
				border: "border-red-200",
			},
		]
		const variant = getRandom(discountVariants)

		return (
			<Card className={`w-48 ${variant.border}`}>
				<CardContent className="p-3">
					<div className="text-center">
						<p className="text-xs text-muted-foreground line-through">
							Was ${originalPrice}
						</p>
						<p className={`text-2xl font-bold ${variant.price}`}>
							NOW ${fakePrice}
						</p>
						<Badge className={`mt-2 ${variant.badge}`}>
							SAVE {Math.floor((1 - fakePrice / originalPrice) * 100)}%
						</Badge>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "social-proof") {
		const names = ["John", "Sarah", "Mike", "Emma", "David", "Lisa"]
		const actions = ["just purchased", "is viewing", "added to cart", "saved"]
		const products = [
			"Premium Plan",
			"Pro License",
			"Ultimate Bundle",
			"VIP Access",
		]
		const locations = ["New York", "London", "Tokyo", "Paris", "Sydney"]

		const proofVariants = [
			{
				bg: "bg-green-50 dark:bg-green-950",
				border: "border-green-200 dark:border-green-800",
				icon: "text-green-600",
			},
			{
				bg: "bg-blue-50 dark:bg-blue-950",
				border: "border-blue-200 dark:border-blue-800",
				icon: "text-blue-600",
			},
			{
				bg: "bg-purple-50 dark:bg-purple-950",
				border: "border-purple-200 dark:border-purple-800",
				icon: "text-purple-600",
			},
			{
				bg: "bg-orange-50 dark:bg-orange-950",
				border: "border-orange-200 dark:border-orange-800",
				icon: "text-orange-600",
			},
			{
				bg: "bg-background",
				border: "border-border",
				icon: "text-muted-foreground",
			},
		]
		const variant = getRandom(proofVariants)

		return (
			<Alert className={`w-64 ${variant.bg} ${variant.border}`}>
				<Users className={`h-4 w-4 ${variant.icon}`} />
				<AlertTitle className="text-sm">
					{getRandom(names)} from {getRandom(locations)}
				</AlertTitle>
				<AlertDescription className="text-xs">
					{getRandom(actions)} {getRandom(products)} •{" "}
					{Math.floor(Math.random() * 10) + 1} mins ago
				</AlertDescription>
			</Alert>
		)
	} else if (subcategory === "limited-spots") {
		const spots = Math.floor(Math.random() * 5) + 1
		const limitedVariants = [
			{
				border: "border-orange-500",
				bg: "bg-orange-50 dark:bg-orange-950",
				icon: "text-orange-600",
				text: "text-orange-700 dark:text-orange-400",
				progress: "[&>div]:bg-orange-500",
			},
			{
				border: "border-red-500",
				bg: "bg-red-50 dark:bg-red-950",
				icon: "text-red-600",
				text: "text-red-700 dark:text-red-400",
				progress: "[&>div]:bg-red-500",
			},
			{
				border: "border-yellow-500",
				bg: "bg-yellow-50 dark:bg-yellow-950",
				icon: "text-yellow-600",
				text: "text-yellow-700 dark:text-yellow-400",
				progress: "[&>div]:bg-yellow-500",
			},
			{
				border: "border-purple-500",
				bg: "bg-purple-50 dark:bg-purple-950",
				icon: "text-purple-600",
				text: "text-purple-700 dark:text-purple-400",
				progress: "[&>div]:bg-purple-500",
			},
			{
				border: "border-pink-500",
				bg: "bg-pink-50 dark:bg-pink-950",
				icon: "text-pink-600",
				text: "text-pink-700 dark:text-pink-400",
				progress: "[&>div]:bg-pink-500",
			},
		]
		const variant = getRandom(limitedVariants)

		return (
			<Card className={`w-56 ${variant.border} ${variant.bg}`}>
				<CardContent className="p-3">
					<div className="flex items-center gap-2 mb-2">
						<AlertCircle className={`h-5 w-5 ${variant.icon}`} />
						<p className={`font-bold ${variant.text}`}>ALMOST GONE!</p>
					</div>
					<p className="text-sm mb-2">Only {spots} spots remaining!</p>
					<Progress value={95} className={`h-2 mb-2 ${variant.progress}`} />
					<p className="text-xs text-muted-foreground">
						{287 - spots} people have claimed this offer
					</p>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "cookie-monster") {
		const cookieVariants = [
			{
				bg: "bg-background",
				border: "border-border",
				button: "bg-primary hover:bg-primary/90 text-primary-foreground",
			},
			{
				bg: "bg-blue-50 dark:bg-blue-950",
				border: "border-blue-200 dark:border-blue-800",
				button: "bg-blue-600 hover:bg-blue-700 text-white",
			},
			{
				bg: "bg-green-50 dark:bg-green-950",
				border: "border-green-200 dark:border-green-800",
				button: "bg-green-600 hover:bg-green-700 text-white",
			},
			{
				bg: "bg-purple-50 dark:bg-purple-950",
				border: "border-purple-200 dark:border-purple-800",
				button: "bg-purple-600 hover:bg-purple-700 text-white",
			},
			{
				bg: "bg-orange-50 dark:bg-orange-950",
				border: "border-orange-200 dark:border-orange-800",
				button: "bg-orange-600 hover:bg-orange-700 text-white",
			},
		]
		const variant = getRandom(cookieVariants)

		return (
			<Card className={`w-72 ${variant.bg} ${variant.border}`}>
				<CardHeader className="p-3">
					<CardTitle className="text-sm">🍪 We use cookies!</CardTitle>
				</CardHeader>
				<CardContent className="p-3 pt-0">
					<p className="text-xs text-muted-foreground mb-3">
						We use cookies to track everything you do, sell your data, and make
						your experience "better".
					</p>
					<div className="flex gap-2">
						<Button size="sm" className={`flex-1 ${variant.button}`}>
							Accept All
						</Button>
						<Button size="sm" variant="ghost" className="text-xs px-2 width-20">
							Manage
						</Button>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "newsletter-trap") {
		const newsletterVariants = [
			{
				bg: "bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950",
				border: "border-blue-300 dark:border-blue-700",
				button: "bg-blue-600 hover:bg-blue-700 text-white",
				accent: "text-blue-600",
			},
			{
				bg: "bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-950",
				border: "border-purple-300 dark:border-purple-700",
				button: "bg-purple-600 hover:bg-purple-700 text-white",
				accent: "text-purple-600",
			},
			{
				bg: "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950",
				border: "border-green-300 dark:border-green-700",
				button: "bg-green-600 hover:bg-green-700 text-white",
				accent: "text-green-600",
			},
		]
		const variant = getRandom(newsletterVariants)

		return (
			<Card className={`w-80 ${variant.bg} ${variant.border} shadow-xl`}>
				<CardHeader className="p-4 text-center">
					<div
						className={`mx-auto mb-2 h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center`}
					>
						<Mail className={`h-6 w-6 ${variant.accent}`} />
					</div>
					<CardTitle className="text-lg">Get Exclusive Updates! 📧</CardTitle>
					<p className="text-sm text-muted-foreground">
						Join 50,000+ subscribers for insider tips!
					</p>
				</CardHeader>
				<CardContent className="p-4 pt-0">
					<div className="space-y-3">
						<Input placeholder="Enter your email..." className="h-10" />
						<Button className={`w-full h-10 ${variant.button}`}>
							Subscribe Now - It's Free!
						</Button>
						<p className="text-xs text-center text-muted-foreground">
							No spam, unsubscribe anytime*
						</p>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "survey-blocker") {
		const surveyVariants = [
			{
				bg: "bg-yellow-50 dark:bg-yellow-950",
				border: "border-yellow-300 dark:border-yellow-700",
				button: "bg-yellow-600 hover:bg-yellow-700 text-white",
			},
			{
				bg: "bg-orange-50 dark:bg-orange-950",
				border: "border-orange-300 dark:border-orange-700",
				button: "bg-orange-600 hover:bg-orange-700 text-white",
			},
			{
				bg: "bg-red-50 dark:bg-red-950",
				border: "border-red-300 dark:border-red-700",
				button: "bg-red-600 hover:bg-red-700 text-white",
			},
		]
		const variant = getRandom(surveyVariants)

		return (
			<Card className={`w-72 ${variant.bg} ${variant.border}`}>
				<CardHeader className="p-3">
					<CardTitle className="text-sm flex items-center gap-2">
						<HelpCircle className="h-4 w-4" />
						Quick Survey (30 seconds)
					</CardTitle>
				</CardHeader>
				<CardContent className="p-3 pt-0">
					<p className="text-xs mb-3">Help us improve! Answer 1 question:</p>
					<p className="text-sm font-medium mb-3">How awesome are we?</p>
					<RadioGroup defaultValue="amazing" className="space-y-1 mb-3">
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="amazing" id="r1" />
							<Label htmlFor="r1" className="text-xs">
								Amazing
							</Label>
						</div>
						<div className="flex items-center space-x-2">
							<RadioGroupItem value="incredible" id="r2" />
							<Label htmlFor="r2" className="text-xs">
								Incredible
							</Label>
						</div>
					</RadioGroup>
					<Button className={`w-full ${variant.button}`} size="sm">
						Submit & Continue
					</Button>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "fake-loading") {
		const loadingVariants = [
			{
				bg: "bg-blue-50 dark:bg-blue-950",
				progress: "[&>div]:bg-blue-500",
				text: "text-blue-600",
			},
			{
				bg: "bg-green-50 dark:bg-green-950",
				progress: "[&>div]:bg-green-500",
				text: "text-green-600",
			},
			{
				bg: "bg-purple-50 dark:bg-purple-950",
				progress: "[&>div]:bg-purple-500",
				text: "text-purple-600",
			},
		]
		const variant = getRandom(loadingVariants)
		const progress = Math.floor(Math.random() * 30) + 70
		const messages = [
			"Analyzing your data...",
			"Finding best deals...",
			"Optimizing results...",
			"Almost ready...",
			"Personalizing content...",
		]

		return (
			<Card className={`w-64 ${variant.bg}`}>
				<CardContent className="p-4">
					<div className="text-center space-y-3">
						<div className="animate-spin mx-auto h-8 w-8 border-4 border-muted border-t-primary rounded-full"></div>
						<p className={`text-sm font-medium ${variant.text}`}>
							{getRandom(messages)}
						</p>
						<Progress value={progress} className={`h-2 ${variant.progress}`} />
						<p className="text-xs text-muted-foreground">
							{progress}% complete
						</p>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "notification-spam") {
		const notificationVariants = [
			{
				bg: "bg-red-50 dark:bg-red-950",
				border: "border-red-200 dark:border-red-800",
				icon: "text-red-600",
				button: "bg-red-600 hover:bg-red-700 text-white",
			},
			{
				bg: "bg-orange-50 dark:bg-orange-950",
				border: "border-orange-200 dark:border-orange-800",
				icon: "text-orange-600",
				button: "bg-orange-600 hover:bg-orange-700 text-white",
			},
			{
				bg: "bg-yellow-50 dark:bg-yellow-950",
				border: "border-yellow-200 dark:border-yellow-800",
				icon: "text-yellow-600",
				button: "bg-yellow-600 hover:bg-yellow-700 text-white",
			},
		]
		const variant = getRandom(notificationVariants)
		const urgentMessages = [
			"🚨 URGENT: Your account expires in 1 hour!",
			"⚠️ SECURITY ALERT: Suspicious activity detected!",
			"🔥 BREAKING: Limited offer ending NOW!",
			"💥 CRITICAL: Action required immediately!",
		]

		return (
			<Alert className={`w-72 ${variant.bg} ${variant.border} animate-pulse`}>
				<Bell className={`h-4 w-4 ${variant.icon} animate-bounce`} />
				<AlertTitle className="text-sm font-bold">
					{getRandom(urgentMessages)}
				</AlertTitle>
				<AlertDescription className="text-xs mt-2">
					<Button size="sm" className={`${variant.button} mr-2`}>
						Act Now!
					</Button>
					<Button size="sm" variant="ghost" className="text-xs">
						Dismiss
					</Button>
				</AlertDescription>
			</Alert>
		)
	} else if (subcategory === "paywall-tease") {
		const paywallVariants = [
			{
				bg: "bg-gradient-to-b from-background to-gray-100 dark:to-gray-900",
				button: "bg-blue-600 hover:bg-blue-700 text-white",
			},
			{
				bg: "bg-gradient-to-b from-background to-purple-100 dark:to-purple-900",
				button: "bg-purple-600 hover:bg-purple-700 text-white",
			},
			{
				bg: "bg-gradient-to-b from-background to-green-100 dark:to-green-900",
				button: "bg-green-600 hover:bg-green-700 text-white",
			},
		]
		const variant = getRandom(paywallVariants)

		return (
			<Card className="w-80 relative overflow-hidden">
				<CardContent className="p-4 pb-15">
					<div className="space-y-2">
						<div className="space-y-1 text-sm text-muted-foreground">
							<p className="blur-[3px] select-none">
								The secret to increasing your productivity by 300% lies in this
								revolutionary technique that top performers use daily.
							</p>
							<p className="blur-[3px] select-none">
								Industry experts have discovered that this method can transform
								your workflow and boost your results dramatically.
							</p>
							<p className="blur-[3px] select-none">
								Don't miss out on these insider strategies that could change
								everything for you.
							</p>
						</div>
					</div>
					<div
						className={`absolute inset-x-0 bottom-0 h-32 ${variant.bg} flex items-end justify-center pb-4`}
					>
						<div className="text-center space-y-2">
							<p className="text-sm font-medium">
								Continue reading with Premium
							</p>
							<Button className={`${variant.button}`} size="sm">
								Unlock Now - $9.99/mo
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "guilt-trip") {
		const guiltVariants = [
			{
				bg: "bg-gray-50 dark:bg-gray-950",
				border: "border-gray-300 dark:border-gray-700",
				sad: "😢",
				button: "bg-green-600 hover:bg-green-700 text-white",
			},
			{
				bg: "bg-blue-50 dark:bg-blue-950",
				border: "border-blue-300 dark:border-blue-700",
				sad: "🥺",
				button: "bg-blue-600 hover:bg-blue-700 text-white",
			},
			{
				bg: "bg-purple-50 dark:bg-purple-950",
				border: "border-purple-300 dark:border-purple-700",
				sad: "😔",
				button: "bg-purple-600 hover:bg-purple-700 text-white",
			},
		]
		const variant = getRandom(guiltVariants)
		const guiltMessages = [
			"We're a small team working hard...",
			"Your support keeps us going...",
			"We really need your help...",
			"Please don't leave us hanging...",
		]

		return (
			<Card className={`w-72 ${variant.bg} ${variant.border}`}>
				<CardContent className="p-4 text-center">
					<div className="text-4xl mb-2">{variant.sad}</div>
					<p className="text-sm font-medium mb-2">{getRandom(guiltMessages)}</p>
					<p className="text-xs text-muted-foreground mb-4">
						Just $3/month helps us survive
					</p>
					<div className="space-y-2">
						<Button className={`w-full ${variant.button}`} size="sm">
							I'll Help Out
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="w-full text-xs opacity-60"
						>
							Maybe later (we understand 😞)
						</Button>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "fake-chat") {
		const chatVariants = [
			{
				bg: "bg-green-50 dark:bg-green-950",
				border: "border-green-200 dark:border-green-800",
				bubble: "bg-green-500 text-white",
			},
			{
				bg: "bg-blue-50 dark:bg-blue-950",
				border: "border-blue-200 dark:border-blue-800",
				bubble: "bg-blue-500 text-white",
			},
			{
				bg: "bg-purple-50 dark:bg-purple-950",
				border: "border-purple-200 dark:border-purple-800",
				bubble: "bg-purple-500 text-white",
			},
		]
		const variant = getRandom(chatVariants)
		const agents = ["Sarah", "Mike", "Emma", "Alex"]
		const messages = [
			"Hi! I'm here to help 😊",
			"Need assistance with anything?",
			"Ready to upgrade your experience?",
			"Questions about our premium features?",
		]

		return (
			<Card className={`w-64 ${variant.bg} ${variant.border}`}>
				<CardHeader className="p-3 border-b">
					<div className="flex items-center gap-2">
						<div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
						<p className="text-sm font-medium">{getRandom(agents)} - Support</p>
					</div>
				</CardHeader>
				<CardContent className="p-3">
					<div className="space-y-2">
						<div
							className={`max-w-[80%] p-2 rounded-lg text-xs ${variant.bubble}`}
						>
							{getRandom(messages)}
						</div>
						<div className="flex items-center gap-1 text-xs text-muted-foreground">
							<div className="flex space-x-1">
								<div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
								<div
									className="w-1 h-1 bg-current rounded-full animate-bounce"
									style={{ animationDelay: "0.1s" }}
								></div>
								<div
									className="w-1 h-1 bg-current rounded-full animate-bounce"
									style={{ animationDelay: "0.2s" }}
								></div>
							</div>
							<span>typing...</span>
						</div>
					</div>
				</CardContent>
			</Card>
		)
	} else if (subcategory === "bait-switch") {
		const baitVariants = [
			{
				bg: "bg-green-50 dark:bg-green-950",
				border: "border-green-300 dark:border-green-700",
				fakeButton: "bg-green-600 hover:bg-green-700 text-white",
				realButton: "bg-red-600 hover:bg-red-700 text-white",
			},
			{
				bg: "bg-blue-50 dark:bg-blue-950",
				border: "border-blue-300 dark:border-blue-700",
				fakeButton: "bg-blue-600 hover:bg-blue-700 text-white",
				realButton: "bg-orange-600 hover:bg-orange-700 text-white",
			},
		]
		const variant = getRandom(baitVariants)
		const showReal = Math.random() > 0.7

		return (
			<Card className={`w-64 ${variant.bg} ${variant.border}`}>
				<CardContent className="p-4 text-center">
					<p className="text-lg font-bold mb-2">🎉 FREE DOWNLOAD!</p>
					<p className="text-sm text-muted-foreground mb-4">
						Get your free premium template now!
					</p>
					{showReal ? (
						<div className="space-y-2">
							<Button className={`w-full ${variant.realButton}`} size="sm">
								Actually Pay $29.99
							</Button>
							<p className="text-xs text-muted-foreground">
								*Free trial requires payment info
							</p>
						</div>
					) : (
						<Button className={`w-full ${variant.fakeButton}`} size="sm">
							Download Free Now!
						</Button>
					)}
				</CardContent>
			</Card>
		)
	} else if (subcategory === "dark-confirm") {
		const darkVariants = [
			{
				bg: "bg-red-50 dark:bg-red-950",
				border: "border-red-300 dark:border-red-700",
				confirm: "bg-gray-300 hover:bg-gray-400 text-gray-700 text-xs px-2",
				cancel: "bg-red-600 hover:bg-red-700 text-white",
			},
			{
				bg: "bg-orange-50 dark:bg-orange-950",
				border: "border-orange-300 dark:border-orange-700",
				confirm: "bg-gray-300 hover:bg-gray-400 text-gray-700 text-xs px-2",
				cancel: "bg-orange-600 hover:bg-orange-700 text-white",
			},
		]
		const variant = getRandom(darkVariants)

		return (
			<Card className={`w-72 ${variant.bg} ${variant.border}`}>
				<CardContent className="p-4">
					<p className="text-sm font-medium mb-3">
						Are you sure you want to cancel your subscription?
					</p>
					<p className="text-xs text-muted-foreground mb-4">
						You'll lose access to all premium features and your data will be
						deleted forever.
					</p>
					<div className="flex gap-2">
						<Button className={`flex-1 ${variant.cancel}`} size="sm">
							Keep My Subscription
						</Button>
						<Button className={`${variant.confirm}`} size="sm">
							Yes, Cancel
						</Button>
					</div>
				</CardContent>
			</Card>
		)
	}

	// Default random behavior - pick from existing subcategories
	const randomSubcategory = getRandom(COMPONENT_SUBCATEGORIES.upsells).id
	return createUpsellComponent(randomSubcategory)
}
