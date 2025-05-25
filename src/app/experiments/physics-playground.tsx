import { Circle, Sparkles, Square, Star } from "lucide-react"
import Matter from "matter-js"
import { useEffect, useRef, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

// Component types that can be spawned
const COMPONENT_TYPES = [
	{ id: "button", name: "Button", icon: Square },
	{ id: "badge", name: "Badge", icon: Circle },
	{ id: "card", name: "Card", icon: Square },
	{ id: "avatar", name: "Avatar", icon: Circle },
	{ id: "switch", name: "Switch", icon: Circle },
	{ id: "icon", name: "Icon", icon: Star },
] as const

type ComponentType = (typeof COMPONENT_TYPES)[number]["id"]

export function PhysicsPlayground() {
	const sceneRef = useRef<HTMLDivElement>(null)
	const engineRef = useRef<Matter.Engine | undefined>(undefined)
	const renderRef = useRef<Matter.Render | undefined>(undefined)
	const runnerRef = useRef<Matter.Runner | undefined>(undefined)
	const bodiesRef = useRef<Map<number, HTMLElement>>(new Map())

	const [selectedComponent, setSelectedComponent] =
		useState<ComponentType>("button")
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

		// Create renderer (we'll use DOM elements, so this is just for physics)
		const render = Matter.Render.create({
			element: sceneRef.current,
			engine: engine,
			options: {
				width: sceneRef.current.clientWidth,
				height: sceneRef.current.clientHeight,
				wireframes: true,
				background: "transparent",
				showVelocity: false,
				showAngleIndicator: false,
			},
		})
		renderRef.current = render

		// Create runner
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
				bounds.height + 25,
				bounds.width,
				50,
				{
					isStatic: true,
					label: "floor",
				},
			),
			// Left
			Matter.Bodies.rectangle(-25, bounds.height / 2, 50, bounds.height, {
				isStatic: true,
				label: "wall-left",
			}),
			// Right
			Matter.Bodies.rectangle(
				bounds.width + 25,
				bounds.height / 2,
				50,
				bounds.height,
				{
					isStatic: true,
					label: "wall-right",
				},
			),
			// Top
			Matter.Bodies.rectangle(bounds.width / 2, -25, bounds.width, 50, {
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
					const x =
						body.position.x - body.bounds.max.x / 2 + body.bounds.min.x / 2
					const y =
						body.position.y - body.bounds.max.y / 2 + body.bounds.min.y / 2
					const angle = body.angle

					element.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`
				}
			})

			requestAnimationFrame(updateLoop)
		}
		updateLoop()

		// Handle window resize
		const handleResize = () => {
			if (!sceneRef.current || !renderRef.current) return

			const newBounds = {
				width: sceneRef.current.clientWidth,
				height: sceneRef.current.clientHeight,
			}

			render.canvas.width = newBounds.width
			render.canvas.height = newBounds.height
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
	}, [gravity])

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
	const createComponentElement = (type: ComponentType) => {
		const element = document.createElement("div")
		element.className = "absolute pointer-events-none select-none"
		element.style.transformOrigin = "center"

		switch (type) {
			case "button":
				element.innerHTML = `
					<button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
						Button ${componentCount + 1}
					</button>
				`
				break
			case "badge":
				element.innerHTML = `
					<div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
						Badge ${componentCount + 1}
					</div>
				`
				break
			case "card":
				element.innerHTML = `
					<div class="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
						<h3 class="font-semibold">Card ${componentCount + 1}</h3>
						<p class="text-sm text-muted-foreground">Physics!</p>
					</div>
				`
				break
			case "avatar":
				element.innerHTML = `
					<span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
						<span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
							${componentCount + 1}
						</span>
					</span>
				`
				break
			case "switch":
				element.innerHTML = `
					<button type="button" role="switch" aria-checked="false" data-state="unchecked" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input">
						<span data-state="unchecked" class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"></span>
					</button>
				`
				break
			case "icon": {
				const iconElement = document.createElement("div")
				iconElement.className = "text-primary w-8 h-8"
				// Create a temporary container to render the React icon
				const tempDiv = document.createElement("div")
				// Use a random icon from the available ones
				const icons = [
					"sparkles",
					"heart",
					"star",
					"zap",
					"moon",
					"sun",
					"cloud",
					"triangle",
					"gamepad2",
				]
				const randomIcon = icons[Math.floor(Math.random() * icons.length)]
				// Create different SVG paths based on the icon
				let svgPath = ""
				switch (randomIcon) {
					case "heart":
						svgPath =
							"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
						break
					case "zap":
						svgPath = "M13 2L3 14h9l-1 8 10-12h-9l1-8z"
						break
					case "moon":
						svgPath = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
						break
					case "sun":
						svgPath =
							"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
						break
					case "cloud":
						svgPath = "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
						break
					case "triangle":
						svgPath = "M12 2l10 20H2L12 2z"
						break
					case "gamepad2":
						svgPath =
							"M6 11h4m4 0h4m-7-4v4m0 0v4m-9-1h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5"
						break
					default: // star
						svgPath =
							"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
				}
				tempDiv.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="${svgPath}"/>
				</svg>`
				iconElement.appendChild(tempDiv.firstChild!)
				element.appendChild(iconElement)
				break
			}
		}

		return element
	}

	// Spawn a component
	const spawnComponent = (componentType?: ComponentType) => {
		if (!sceneRef.current || !engineRef.current) return

		const type = componentType || selectedComponent
		const element = createComponentElement(type)
		sceneRef.current.appendChild(element)

		// Get element dimensions
		const rect = element.getBoundingClientRect()
		const sceneRect = sceneRef.current.getBoundingClientRect()

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
		Matter.World.add(engineRef.current.world, body)
		bodiesRef.current.set(body.id, element)

		setComponentCount(prev => prev + 1)

		// Add mouse interaction
		element.addEventListener("mousedown", e => {
			e.preventDefault()
			const startX = e.clientX
			const startY = e.clientY

			const handleMouseMove = (e: MouseEvent) => {
				const dx = e.clientX - startX
				const dy = e.clientY - startY
				Matter.Body.setVelocity(body, { x: dx * 0.5, y: dy * 0.5 })
			}

			const handleMouseUp = () => {
				document.removeEventListener("mousemove", handleMouseMove)
				document.removeEventListener("mouseup", handleMouseUp)
			}

			document.addEventListener("mousemove", handleMouseMove)
			document.addEventListener("mouseup", handleMouseUp)
		})
	}

	// Spawn random component
	const spawnRandom = () => {
		const randomType =
			COMPONENT_TYPES[Math.floor(Math.random() * COMPONENT_TYPES.length)].id
		spawnComponent(randomType)
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
		<div className="h-full flex flex-col">
			{/* Controls */}
			<div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
				<div className="flex flex-wrap gap-4 items-center">
					<div className="flex gap-2">
						<Button onClick={() => spawnComponent()} size="sm">
							<Sparkles className="mr-2 h-4 w-4" />
							Spawn Component
						</Button>
						<Button onClick={spawnRandom} variant="outline" size="sm">
							Random
						</Button>
						<Button onClick={clearAll} variant="destructive" size="sm">
							Clear All
						</Button>
					</div>

					<Select
						value={selectedComponent}
						onValueChange={v => setSelectedComponent(v as ComponentType)}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue />
						</SelectTrigger>
						<SelectContent>
							{COMPONENT_TYPES.map(type => (
								<SelectItem key={type.id} value={type.id}>
									<div className="flex items-center gap-2">
										<type.icon className="h-4 w-4" />
										{type.name}
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
				}}
			>
				{/* Components will be rendered here */}
			</div>
		</div>
	)
}
