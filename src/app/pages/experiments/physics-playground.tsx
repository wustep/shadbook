import { ChevronRight, Pause, Play } from "lucide-react"
import Matter from "matter-js"
import { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"

import {
	COMPONENT_CATEGORIES,
	ComponentCategory,
	ComponentSubcategory,
	createBadgeComponent,
	createButtonComponent,
	createCardComponent,
	createComplexComponent,
	createIconComponent,
	createInputComponent,
	createToggleComponent,
	createUpsellComponent,
} from "@/app/pages/experiments/physics-playground-components"
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
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Slider } from "@/components/ui/slider"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export function PhysicsPlayground() {
	const { state } = useSidebar()
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
	const [bounce, setBounce] = useState(0.4) // Balanced bounce for good physics feel
	const [isPaused, setIsPaused] = useState(false)
	const [componentCount, setComponentCount] = useState(0)
	const [controlsVisible, setControlsVisible] = useState(true)

	// Keyboard shortcuts
	useEffect(() => {
		let spawnInterval: NodeJS.Timeout | null = null
		let isSpacePressed = false

		const handleKeyDown = (e: KeyboardEvent) => {
			// Prevent space from scrolling the page
			if (e.key === " ") {
				// Check if the target is within a Select component
				const target = e.target as HTMLElement
				const isInSelect =
					target.closest('[role="combobox"]') ||
					target.closest("[data-radix-collection-item]") ||
					target.closest('[role="listbox"]')

				if (isInSelect) {
					e.stopPropagation()
					return
				}

				// Prevent default scrolling behavior
				e.preventDefault()
			}

			// Check if user is typing in any form control
			if (
				e.target instanceof HTMLInputElement ||
				e.target instanceof HTMLTextAreaElement ||
				e.target instanceof HTMLSelectElement ||
				e.target instanceof HTMLButtonElement ||
				(e.target instanceof HTMLElement && e.target.isContentEditable)
			) {
				return
			}

			// Space key to spawn
			if (e.key === " ") {
				// Only set up interval on first press, not on repeats
				if (!isSpacePressed) {
					isSpacePressed = true
					// Spawn immediately on first press
					setTimeout(() => spawnComponent(), 0)

					// If shift is held, start rapid spawning
					if (e.shiftKey && !spawnInterval) {
						spawnInterval = setInterval(() => {
							// Only continue spawning if space is still pressed
							if (isSpacePressed) {
								spawnComponent()
							} else {
								// Clean up interval if space was released
								if (spawnInterval) {
									clearInterval(spawnInterval)
									spawnInterval = null
								}
							}
						}, 100) // Spawn every 100ms (10 per second) when shift is held
					} else if (!e.shiftKey && !spawnInterval) {
						// For normal space holding (without shift), spawn at a slower rate
						spawnInterval = setInterval(() => {
							if (isSpacePressed) {
								spawnComponent()
							} else {
								if (spawnInterval) {
									clearInterval(spawnInterval)
									spawnInterval = null
								}
							}
						}, 200) // Spawn every 200ms (5 per second) when just holding space
					}
				}
			}
			// 'c' key to clear
			else if (e.key === "c" || e.key === "C") {
				e.preventDefault()
				setTimeout(() => clearAll(), 0)
			}
			// 'p' key to pause/unpause
			else if (e.key === "p" || e.key === "P") {
				e.preventDefault()
				setIsPaused(prev => !prev)
			}
		}

		const handleKeyUp = (e: KeyboardEvent) => {
			// Stop rapid spawning when space is released
			if (e.key === " ") {
				isSpacePressed = false
				if (spawnInterval) {
					clearInterval(spawnInterval)
					spawnInterval = null
				}
			}
		}

		// Use keydown for all handling
		window.addEventListener("keydown", handleKeyDown)
		window.addEventListener("keyup", handleKeyUp)

		// Also handle blur event in case the window loses focus
		const handleBlur = () => {
			isSpacePressed = false
			if (spawnInterval) {
				clearInterval(spawnInterval)
				spawnInterval = null
			}
		}
		window.addEventListener("blur", handleBlur)

		return () => {
			window.removeEventListener("keydown", handleKeyDown)
			window.removeEventListener("keyup", handleKeyUp)
			window.removeEventListener("blur", handleBlur)
			if (spawnInterval) {
				clearInterval(spawnInterval)
			}
		}
	}, [selectedCategory, selectedSubcategory])

	// Initialize Matter.js
	useEffect(() => {
		if (!sceneRef.current) return

		// Create engine with improved settings
		const engine = Matter.Engine.create({
			enableSleeping: false, // Disable sleeping to prevent components from getting stuck
			gravity: {
				x: 0,
				y: gravity * 0.001, // Scale the initial gravity
				scale: 1, // Keep scale at 1 and handle scaling in the value instead
			},
		})
		engineRef.current = engine

		// We don't need a renderer since we're using DOM elements
		// Just create the runner with fixed timestep
		const runner = Matter.Runner.create({
			isFixed: true,
			delta: 1000 / 60, // 60 FPS
		})
		runnerRef.current = runner

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

		const updateBounds = () => {
			if (!sceneRef.current || !engineRef.current) return

			// Update wall positions on resize
			const newBounds = {
				width: sceneRef.current.clientWidth,
				height: sceneRef.current.clientHeight,
			}

			// Remove old walls
			const oldWalls = Matter.Composite.allBodies(
				engineRef.current.world,
			).filter(body => body.isStatic)
			Matter.Composite.remove(engineRef.current.world, oldWalls)

			// Add new walls with updated positions
			const newWalls = [
				Matter.Bodies.rectangle(
					newBounds.width / 2,
					newBounds.height - 25,
					newBounds.width,
					50,
					{
						isStatic: true,
						label: "floor",
						friction: 0.1,
						restitution: 0.3,
					},
				),
				Matter.Bodies.rectangle(
					25,
					newBounds.height / 2,
					50,
					newBounds.height,
					{
						isStatic: true,
						label: "wall-left",
						friction: 0.1,
						restitution: 0.3,
					},
				),
				Matter.Bodies.rectangle(
					newBounds.width - 25,
					newBounds.height / 2,
					50,
					newBounds.height,
					{
						isStatic: true,
						label: "wall-right",
						friction: 0.1,
						restitution: 0.3,
					},
				),
				Matter.Bodies.rectangle(newBounds.width / 2, 25, newBounds.width, 50, {
					isStatic: true,
					label: "ceiling",
					friction: 0.1,
					restitution: 0.3, // Match other walls for consistent physics
				}),
			]

			Matter.World.add(engineRef.current.world, newWalls)
		}

		// Initial setup
		updateBounds()

		// Handle window resize and sidebar state changes
		window.addEventListener("resize", updateBounds)

		// Cleanup
		return () => {
			window.removeEventListener("resize", updateBounds)
			Matter.Runner.stop(runner)
			Matter.Composite.clear(engine.world, false)
			Matter.Engine.clear(engine)
			bodiesRef.current.clear()
		}
	}, [gravity]) // Add gravity back to dependencies

	// Update bounds when sidebar state changes
	useEffect(() => {
		const handleResize = () => {
			if (!sceneRef.current) return
			const resizeEvent = new Event("resize")
			window.dispatchEvent(resizeEvent)
		}

		// Small delay to let the transition complete
		const timer = setTimeout(handleResize, 200)
		return () => clearTimeout(timer)
	}, [state])

	// Update gravity when slider changes
	useEffect(() => {
		if (engineRef.current) {
			engineRef.current.world.gravity.y = gravity * 0.001 // Scale the gravity value directly
		}
	}, [gravity])

	// Update bounce (restitution) for all existing bodies when slider changes
	useEffect(() => {
		if (!engineRef.current) return

		const bodies = Matter.Composite.allBodies(engineRef.current.world)
		bodies.forEach(body => {
			if (!body.isStatic) {
				// Update the restitution of non-static bodies
				Matter.Body.set(body, { restitution: bounce })
			}
		})
	}, [bounce])

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
					// Fallback - simple button
					component = createButtonComponent()
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

			// Random spawn position at top with proper margin calculation
			const margin = 60 // Margin from walls
			const availableWidth = sceneRect.width - margin * 2 - rect.width
			const x =
				Math.random() * Math.max(availableWidth, 0) + margin + rect.width / 2

			// Reduce initial angle to prevent getting stuck - smaller angles are safer
			const initialAngle = (Math.random() - 0.5) * Math.PI * 0.25 // Random angle within ±22.5 degrees (reduced from ±45)

			// Calculate safe Y position accounting for rotation
			// When rotated, the component takes up more vertical space
			const rotatedHeight =
				Math.abs(rect.width * Math.sin(initialAngle)) +
				Math.abs(rect.height * Math.cos(initialAngle))
			const safeMargin = Math.max(margin, rotatedHeight / 2 + 20) // Increased buffer from 10px to 20px
			const y = safeMargin + rect.height / 2

			// Ensure minimum distance from ceiling (extra safety check)
			const minYFromCeiling = 80 // Minimum 80px from top
			const finalY = Math.max(y, minYFromCeiling)

			// Create physics body with improved settings
			const body = Matter.Bodies.rectangle(x, finalY, rect.width, rect.height, {
				restitution: bounce,
				friction: 0.1, // Reduced friction for better movement
				frictionAir: 0.001, // Increased air friction to prevent floating/sticking (was 0.0001)
				density: 0.01, // Increased density for more stable physics (was 0.001)
				angle: initialAngle,
				angularVelocity: (Math.random() - 0.5) * 0.1, // Restored initial spin
				// Removed inertia: Infinity to allow natural rotation
			})

			// Add to world
			Matter.World.add(engineRef.current!.world, body)
			bodiesRef.current.set(body.id, element)

			// Give a small downward velocity to help prevent getting stuck
			Matter.Body.setVelocity(body, {
				x: (Math.random() - 0.5) * 0.5, // Small random horizontal velocity
				y: Math.random() * 0.5 + 0.2, // Small downward velocity (0.2 to 0.7)
			})

			// Set initial position
			element.style.left = "0px"
			element.style.top = "0px"
			element.style.transform = `translate(${x - rect.width / 2}px, ${
				finalY - rect.height / 2
			}px) rotate(${initialAngle}rad)`

			// Make element draggable with mobile-friendly styling
			element.style.cursor = "grab"
			element.style.touchAction = "none" // Prevent default touch behaviors
			element.style.userSelect = "none" // Prevent text selection on drag

			// Add mouse and touch interaction
			const handlePointerStart = (clientX: number, clientY: number) => {
				element.style.cursor = "grabbing"
				element.style.transform = element.style.transform + " scale(1.05)" // Slight scale feedback
				const startX = clientX
				const startY = clientY
				const startBodyX = body.position.x
				const startBodyY = body.position.y
				let lastX = startX
				let lastY = startY
				let lastTime = Date.now()

				const handlePointerMove = (currentX: number, currentY: number) => {
					const currentTime = Date.now()
					const dt = Math.max(currentTime - lastTime, 1) // Prevent division by zero

					const dx = currentX - startX
					const dy = currentY - startY

					// Calculate velocity based on pointer movement
					const velocityX = ((currentX - lastX) / dt) * 50 // Scale factor for responsiveness
					const velocityY = ((currentY - lastY) / dt) * 50

					// Set position and apply velocity for smooth throwing
					Matter.Body.setPosition(body, {
						x: startBodyX + dx,
						y: startBodyY + dy,
					})
					Matter.Body.setVelocity(body, { x: velocityX, y: velocityY })

					lastX = currentX
					lastY = currentY
					lastTime = currentTime
				}

				const handleMouseMove = (e: MouseEvent) => {
					e.preventDefault()
					handlePointerMove(e.clientX, e.clientY)
				}

				const handleTouchMove = (e: TouchEvent) => {
					e.preventDefault()
					if (e.touches.length > 0) {
						handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)
					}
				}

				const handlePointerEnd = () => {
					element.style.cursor = "grab"
					// Remove scale feedback by recalculating transform without scale
					const x = body.position.x
					const y = body.position.y
					const angle = body.angle
					element.style.transform = `translate(${
						x - element.offsetWidth / 2
					}px, ${y - element.offsetHeight / 2}px) rotate(${angle}rad)`
					document.removeEventListener("mousemove", handleMouseMove)
					document.removeEventListener("mouseup", handlePointerEnd)
					document.removeEventListener("touchmove", handleTouchMove)
					document.removeEventListener("touchend", handlePointerEnd)
					document.removeEventListener("touchcancel", handlePointerEnd)
				}

				document.addEventListener("mousemove", handleMouseMove, {
					passive: false,
				})
				document.addEventListener("mouseup", handlePointerEnd)
				document.addEventListener("touchmove", handleTouchMove, {
					passive: false,
				})
				document.addEventListener("touchend", handlePointerEnd)
				document.addEventListener("touchcancel", handlePointerEnd)

				return handlePointerEnd
			}

			// Mouse events
			element.addEventListener("mousedown", e => {
				e.preventDefault()
				handlePointerStart(e.clientX, e.clientY)
			})

			// Touch events
			element.addEventListener(
				"touchstart",
				e => {
					e.preventDefault()
					if (e.touches.length > 0) {
						handlePointerStart(e.touches[0].clientX, e.touches[0].clientY)
					}
				},
				{ passive: false },
			)
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
		<div
			data-sidebar-state={state}
			className="h-[calc(100vh-var(--header-height))] flex flex-col transition-[width,margin] duration-200 ease-linear data-[sidebar-state=collapsed]:ml-0"
		>
			{/* Controls */}
			<div className="relative">
				{/* Small hover target for toggle button */}
				<div className="absolute top-2 right-2 w-8 h-8 group z-10">
					{/* Toggle button - only visible on hover of the small area */}
					<Button
						size="sm"
						variant="ghost"
						onClick={() => setControlsVisible(!controlsVisible)}
						className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-auto px-2"
					>
						{controlsVisible ? (
							<>
								<ChevronRight className="h-4 w-4 mr-1" />
								Hide
							</>
						) : (
							<>
								<ChevronRight className="h-4 w-4 mr-1 rotate-180" />
								Show
							</>
						)}
					</Button>
				</div>

				{/* Controls panel */}
				{controlsVisible && (
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
											<p className="text-xs text-muted-foreground">
												Hold Shift+Space for rapid spawn
											</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>

								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button
												onClick={clearAll}
												variant="destructive"
												size="sm"
											>
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

							{/* Play/Pause button next to dropdowns */}
							<div className="flex items-center gap-2 pl-1">
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button
												size="icon"
												variant="outline"
												onClick={() => setIsPaused(prev => !prev)}
											>
												{isPaused ? (
													<Play className="h-4 w-4" />
												) : (
													<Pause className="h-4 w-4" />
												)}
											</Button>
										</TooltipTrigger>
										<TooltipContent>
											<p className="text-sm">Press 'P' to toggle</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>

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
									step={0.05}
									className="w-[100px]"
								/>
							</div>

							<div className="ml-auto max-[1024px]:hidden">
								<Badge variant="secondary">Components: {componentCount}</Badge>
							</div>
						</div>
					</div>
				)}
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
					touchAction: "none", // Prevent scrolling/zooming on touch
					userSelect: "none", // Prevent text selection
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
						<p className="text-2xl text-muted-foreground/30 select-none max-[1024px]:hidden">
							Press space to spawn components
						</p>
					</div>
				)}
			</div>
		</div>
	)
}
