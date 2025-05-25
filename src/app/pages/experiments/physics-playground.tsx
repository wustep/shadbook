import {
	AlertCircle,
	Bell,
	Bookmark,
	Calendar,
	Camera,
	Check,
	ChevronRight,
	Circle,
	Clock,
	Cloud,
	Coffee,
	Copy,
	Download,
	Edit,
	Feather,
	FileText,
	Gamepad2,
	Gift,
	Heart,
	HelpCircle,
	Home,
	Info,
	Lightbulb,
	Mail,
	Moon,
	Music,
	Rocket,
	Search,
	Settings,
	Sparkles,
	Square,
	Star,
	Sun,
	Trash,
	Trophy,
	Upload,
	User,
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

// Component categories
const COMPONENT_CATEGORIES = [
	{ id: "random", name: "Random", icon: Sparkles },
	{ id: "mixed", name: "Mixed", icon: Circle },
	{ id: "buttons", name: "Buttons", icon: Square },
	{ id: "badges", name: "Badges", icon: Circle },
	{ id: "cards", name: "Cards", icon: Square },
	{ id: "icons", name: "Icons", icon: Star },
	{ id: "inputs", name: "Inputs", icon: Square },
	{ id: "toggles", name: "Toggles", icon: Circle },
	{ id: "complex", name: "Complex", icon: Zap },
] as const

type ComponentCategory = (typeof COMPONENT_CATEGORIES)[number]["id"]

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

export function PhysicsPlayground() {
	const sceneRef = useRef<HTMLDivElement>(null)
	const engineRef = useRef<Matter.Engine | undefined>(undefined)
	const runnerRef = useRef<Matter.Runner | undefined>(undefined)
	const bodiesRef = useRef<Map<number, HTMLElement>>(new Map())

	const [selectedCategory, setSelectedCategory] =
		useState<ComponentCategory>("mixed")
	const [gravity, setGravity] = useState(1)
	const [bounce, setBounce] = useState(0.8)
	const [isPaused, setIsPaused] = useState(false)
	const [componentCount, setComponentCount] = useState(0)

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
	const createComponentElement = (category: ComponentCategory) => {
		const element = document.createElement("div")
		element.className = "absolute"
		element.style.transformOrigin = "center"
		element.style.zIndex = "10"

		// Create a root for React to render into
		const root = createRoot(element)

		// Helper to get random item from array
		const getRandom = <T,>(arr: readonly T[]): T =>
			arr[Math.floor(Math.random() * arr.length)]

		// Determine what component to create based on category
		let component: React.ReactElement

		// Handle random category
		if (category === "random") {
			const allCategories = COMPONENT_CATEGORIES.filter(
				c => c.id !== "random",
			).map(c => c.id)
			category = getRandom(allCategories)
		}

		if (
			category === "buttons" ||
			(category === "mixed" && Math.random() < 0.2)
		) {
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
			]

			// Sometimes add icons to buttons
			if (Math.random() > 0.5) {
				const ButtonIcon = getRandom([
					Check,
					X,
					Download,
					Upload,
					Edit,
					Trash,
					Mail,
					Settings,
				])
				const iconPosition = getRandom(["left", "right", "icon-only"])

				if (iconPosition === "icon-only") {
					component = (
						<Button variant={variant} size="icon">
							<ButtonIcon className="h-4 w-4" />
						</Button>
					)
				} else if (iconPosition === "left") {
					component = (
						<Button variant={variant} size={size}>
							<ButtonIcon className="mr-2 h-4 w-4" />
							{getRandom(texts)}
						</Button>
					)
				} else {
					component = (
						<Button variant={variant} size={size}>
							{getRandom(texts)}
							<ButtonIcon className="ml-2 h-4 w-4" />
						</Button>
					)
				}
			} else {
				component = (
					<Button variant={variant} size={size}>
						{variant === "link" ? "Link" : getRandom(texts)}
					</Button>
				)
			}
		} else if (
			category === "badges" ||
			(category === "mixed" && Math.random() < 0.2)
		) {
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
			]
			const text = getRandom(texts)

			// Sometimes add icons to badges
			if (Math.random() > 0.6) {
				const BadgeIcon = getRandom([Star, Zap, Trophy, Gift, Rocket])
				component = (
					<Badge variant={variant}>
						<BadgeIcon className="mr-1 h-3 w-3" />
						{text}
					</Badge>
				)
			} else {
				component = <Badge variant={variant}>{text}</Badge>
			}
		} else if (
			category === "cards" ||
			(category === "mixed" && Math.random() < 0.15)
		) {
			const cardTypes = ["simple", "with-content", "hover-card"] as const
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
					component = (
						<Card className="w-48">
							<CardHeader className="p-4">
								<CardTitle className="text-sm">
									{getRandom(cardTitles)}
								</CardTitle>
								<CardDescription className="text-xs">
									{getRandom(cardDescs)}
								</CardDescription>
							</CardHeader>
						</Card>
					)
					break
				}
				case "with-content": {
					const contentTypes = ["stats", "action", "info"] as const
					const contentType = getRandom(contentTypes)

					if (contentType === "stats") {
						component = (
							<Card className="w-56">
								<CardHeader className="p-3">
									<CardTitle className="text-sm">Statistics</CardTitle>
								</CardHeader>
								<CardContent className="p-3 pt-0">
									<div className="flex items-center justify-between text-xs">
										<span className="text-muted-foreground">Progress</span>
										<span className="font-semibold">
											{Math.floor(Math.random() * 100)}%
										</span>
									</div>
									<Progress value={Math.random() * 100} className="mt-2 h-1" />
								</CardContent>
							</Card>
						)
					} else if (contentType === "action") {
						component = (
							<Card className="w-48">
								<CardHeader className="p-3">
									<CardTitle className="text-sm">Quick Action</CardTitle>
								</CardHeader>
								<CardContent className="p-3 pt-0">
									<Button size="sm" className="w-full">
										Execute
									</Button>
								</CardContent>
							</Card>
						)
					} else {
						component = (
							<Card className="w-56">
								<CardHeader className="p-3">
									<CardTitle className="text-sm">Information</CardTitle>
								</CardHeader>
								<CardContent className="p-3 pt-0">
									<p className="text-xs text-muted-foreground">
										This card contains important details.
									</p>
								</CardContent>
							</Card>
						)
					}
					break
				}
				case "hover-card":
					component = (
						<HoverCard>
							<HoverCardTrigger asChild>
								<Button variant="link">Hover me!</Button>
							</HoverCardTrigger>
							<HoverCardContent className="w-40 p-2">
								<p className="text-xs">Hidden content!</p>
							</HoverCardContent>
						</HoverCard>
					)
					break
			}
		} else if (
			category === "icons" ||
			(category === "mixed" && Math.random() < 0.2)
		) {
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
			const color = getRandom(colors)
			const sizes = ["h-6 w-6", "h-8 w-8", "h-10 w-10", "h-12 w-12"]
			const size = getRandom(sizes)
			component = (
				<div className={`${color} ${size}`}>
					<IconComponent />
				</div>
			)
		} else if (
			category === "toggles" ||
			(category === "mixed" && Math.random() < 0.15)
		) {
			const toggleTypes = [
				"switch",
				"checkbox",
				"toggle",
				"toggle-group",
				"radio",
			] as const
			const type = getRandom(toggleTypes)

			switch (type) {
				case "switch":
					component = <Switch defaultChecked={Math.random() > 0.5} />
					break
				case "checkbox":
					component = <Checkbox defaultChecked={Math.random() > 0.5} />
					break
				case "toggle": {
					const toggleVariants = ["default", "outline"] as const
					component = (
						<Toggle
							variant={getRandom(toggleVariants)}
							defaultPressed={Math.random() > 0.5}
						>
							<Star className="h-4 w-4" />
						</Toggle>
					)
					break
				}
				case "toggle-group":
					component = (
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
					break
				case "radio":
					component = (
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
					break
			}
		} else if (
			category === "inputs" ||
			(category === "mixed" && Math.random() < 0.15)
		) {
			const inputTypes = ["input", "avatar", "slider", "progress"] as const
			const type = getRandom(inputTypes)

			switch (type) {
				case "avatar": {
					const initials = ["AB", "CD", "EF", "GH", "JK", "LM", "NP", "QR"]
					const sizes = ["", "w-8 h-8", "w-12 h-12"] as const
					component = (
						<Avatar className={getRandom(sizes)}>
							<AvatarFallback>{getRandom(initials)}</AvatarFallback>
						</Avatar>
					)
					break
				}
				case "input": {
					const placeholders = [
						"Type here...",
						"Search...",
						"Enter text...",
						"Name",
						"Email",
					]
					component = (
						<Input
							className="w-32 h-8"
							placeholder={getRandom(placeholders)}
							defaultValue=""
						/>
					)
					break
				}
				case "slider":
					component = (
						<Slider defaultValue={[50]} max={100} step={1} className="w-32" />
					)
					break
				case "progress":
					component = (
						<Progress value={Math.random() * 100} className="w-32 h-2" />
					)
					break
			}
		} else if (category === "complex") {
			const complexTypes = [
				"tabs",
				"alert",
				"skeleton",
				"separator",
				"accordion",
				"breadcrumb",
				"tooltip",
				"compound-card",
			] as const
			const type = getRandom(complexTypes)

			switch (type) {
				case "tabs":
					component = (
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
					break
				case "alert": {
					const alertVariants = ["default", "destructive"] as const
					const variant = getRandom(alertVariants)
					const IconComponent = variant === "destructive" ? AlertCircle : Info
					component = (
						<Alert variant={variant} className="w-56 p-3">
							<IconComponent className="h-4 w-4" />
							<AlertTitle className="text-sm">Alert!</AlertTitle>
							<AlertDescription className="text-xs">
								This is a physics-enabled alert.
							</AlertDescription>
						</Alert>
					)
					break
				}
				case "skeleton": {
					const skeletonTypes = ["line", "circle", "card"] as const
					const skelType = getRandom(skeletonTypes)
					if (skelType === "line") {
						component = <Skeleton className="h-4 w-32" />
					} else if (skelType === "circle") {
						component = <Skeleton className="h-12 w-12 rounded-full" />
					} else {
						component = (
							<div className="space-y-2">
								<Skeleton className="h-4 w-32" />
								<Skeleton className="h-4 w-24" />
							</div>
						)
					}
					break
				}
				case "separator": {
					const orientations = ["horizontal", "vertical"] as const
					const orientation = getRandom(orientations)
					component = (
						<Separator
							orientation={orientation}
							className={orientation === "horizontal" ? "w-20" : "h-20"}
						/>
					)
					break
				}
				case "accordion": {
					component = (
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
					break
				}
				case "breadcrumb": {
					component = (
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
					break
				}
				case "tooltip": {
					const tooltipTexts = [
						"Helpful tip!",
						"Click me!",
						"More info",
						"Hover for details",
					]
					component = (
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
					break
				}
				case "compound-card": {
					const IconCard = getRandom([User, Settings, Mail, Calendar])
					component = (
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
					break
				}
			}
		} else {
			// Default fallback - icon button
			const IconBtn = getRandom(ICON_COMPONENTS)
			component = (
				<Button variant="outline" size="icon">
					<IconBtn className="h-4 w-4" />
				</Button>
			)
		}

		// Render the component
		root.render(component)

		// Store the root for cleanup
		element.setAttribute("data-react-root", "true")

		return element
	}

	// Spawn a component
	const spawnComponent = (componentType?: ComponentCategory) => {
		if (!sceneRef.current || !engineRef.current) return

		const type = componentType || selectedCategory
		const element = createComponentElement(type)

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

			// Create physics body
			const body = Matter.Bodies.rectangle(x, y, rect.width, rect.height, {
				restitution: bounce,
				friction: 0.3,
				density: 0.001,
				angle: Math.random() * Math.PI * 2,
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
			}px)`

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
				<div className="flex flex-wrap gap-4 items-center">
					<div className="flex gap-2">
						<Button onClick={() => spawnComponent()} size="sm">
							<Sparkles className="mr-2 h-4 w-4" />
							Spawn Component
						</Button>
						<Button onClick={clearAll} variant="destructive" size="sm">
							Clear All
						</Button>
					</div>

					<Select
						value={selectedCategory}
						onValueChange={v => setSelectedCategory(v as ComponentCategory)}
					>
						<SelectTrigger className="w-[180px]">
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
						<Switch
							id="pause"
							checked={isPaused}
							onCheckedChange={setIsPaused}
						/>
						<Label htmlFor="pause">Pause</Label>
					</div>

					<Badge variant="secondary">Components: {componentCount}</Badge>
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
					<div className="absolute top-[48px] left-[48px] w-4 h-4 border-l-2 border-t-2 border-border/50 rounded-tl-sm" />
					<div className="absolute top-[48px] right-[48px] w-4 h-4 border-r-2 border-t-2 border-border/50 rounded-tr-sm" />
					<div className="absolute bottom-[48px] left-[48px] w-4 h-4 border-l-2 border-b-2 border-border/50 rounded-bl-sm" />
					<div className="absolute bottom-[48px] right-[48px] w-4 h-4 border-r-2 border-b-2 border-border/50 rounded-br-sm" />
				</div>

				{/* Components will be rendered here */}
			</div>
		</div>
	)
}
