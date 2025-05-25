import { ChevronRight, Pause, Play } from "lucide-react"
import Matter from "matter-js"
import { useCallback, useEffect, useRef, useState } from "react"
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
	const [gravity, setGravity] = useState(1000) // Better default gravity
	const [bounce, setBounce] = useState(0.3) // Lower default bounce for more realistic feel
	const [isPaused, setIsPaused] = useState(false)
	const [componentCount, setComponentCount] = useState(0)
	const [controlsVisible, setControlsVisible] = useState(true)

	// Initialize Matter.js
	useEffect(() => {
		if (!sceneRef.current) return

		// Create engine with optimized settings for stability
		const engine = Matter.Engine.create({
			enableSleeping: true, // Enable sleeping for better performance, but with constraints
			gravity: {
				x: 0,
				y: gravity * 0.000005, // Scaled gravity for reasonable physics
				scale: 1, // Keep scale at 1, handle scaling in the value
			},
			// Add constraint solver iterations for better stability
			constraintIterations: 2,
			positionIterations: 6,
			velocityIterations: 4,
		})

		// Configure world bounds to prevent objects from escaping
		engine.world.bounds = {
			min: { x: 0, y: 0 },
			max: {
				x: sceneRef.current.clientWidth,
				y: sceneRef.current.clientHeight,
			},
		}

		engineRef.current = engine

		// Create runner with more stable timestep
		const runner = Matter.Runner.create({
			isFixed: true,
			delta: 1000 / 60, // 60 FPS
		})
		runnerRef.current = runner

		// Run the engine
		Matter.Runner.run(runner, engine)

		// Add collision detection and anti-sticking system
		let updateCounter = 0
		Matter.Events.on(engine, "beforeUpdate", () => {
			const bodies = Matter.Composite.allBodies(engine.world)
			const bounds = engine.world.bounds
			updateCounter++

			bodies.forEach(body => {
				if (body.isStatic) return

				// Check if body is out of bounds and correct position
				const margin = 15 // Smaller margin for tighter bounds
				if (body.position.x < bounds.min.x + margin) {
					Matter.Body.setPosition(body, {
						x: bounds.min.x + margin,
						y: body.position.y,
					})
					Matter.Body.setVelocity(body, {
						x: Math.abs(body.velocity.x) * 0.8,
						y: body.velocity.y,
					})
				}
				if (body.position.x > bounds.max.x - margin) {
					Matter.Body.setPosition(body, {
						x: bounds.max.x - margin,
						y: body.position.y,
					})
					Matter.Body.setVelocity(body, {
						x: -Math.abs(body.velocity.x) * 0.8,
						y: body.velocity.y,
					})
				}
				if (body.position.y < bounds.min.y + margin) {
					Matter.Body.setPosition(body, {
						x: body.position.x,
						y: bounds.min.y + margin,
					})
					Matter.Body.setVelocity(body, {
						x: body.velocity.x,
						y: Math.abs(body.velocity.y) * 0.8,
					})
				}
				if (body.position.y > bounds.max.y - margin) {
					Matter.Body.setPosition(body, {
						x: body.position.x,
						y: bounds.max.y - margin,
					})
					Matter.Body.setVelocity(body, {
						x: body.velocity.x,
						y: -Math.abs(body.velocity.y) * 0.8,
					})
				}

				// Anti-sticking system: wake up and nudge sleeping bodies near edges
				if (body.isSleeping) {
					const isNearEdge =
						body.position.y < 100 ||
						body.position.x < 100 ||
						body.position.x > bounds.max.x - 100

					if (isNearEdge) {
						Matter.Sleeping.set(body, false)
						// Give a stronger nudge to unstick
						Matter.Body.applyForce(body, body.position, {
							x: (Math.random() - 0.5) * 0.002,
							y: 0.002,
						})
					}
				}

				// Periodic gentle shake every 5 seconds to prevent permanent sticking
				if (updateCounter % (60 * 5) === 0) {
					// Every 5 seconds at 60fps
					const velocity = Math.sqrt(
						body.velocity.x ** 2 + body.velocity.y ** 2,
					)
					if (velocity < 0.1) {
						// If nearly stationary
						Matter.Body.applyForce(body, body.position, {
							x: (Math.random() - 0.5) * 0.001,
							y: (Math.random() - 0.5) * 0.001,
						})
					}
				}
			})
		})

		// Update DOM elements positions
		const updateLoop = () => {
			const bodies = Matter.Composite.allBodies(engine.world)

			bodies.forEach(body => {
				if (body.isStatic) return

				const element = bodiesRef.current.get(body.id)
				if (element) {
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

			const newBounds = {
				width: sceneRef.current.clientWidth,
				height: sceneRef.current.clientHeight,
			}

			// Update engine world bounds
			engineRef.current.world.bounds = {
				min: { x: 0, y: 0 },
				max: { x: newBounds.width, y: newBounds.height },
			}

			// Remove old walls
			const oldWalls = Matter.Composite.allBodies(
				engineRef.current.world,
			).filter(body => body.isStatic)
			Matter.Composite.remove(engineRef.current.world, oldWalls)

			// Create thicker, more reliable walls with better positioning
			const wallThickness = 30
			const newWalls = [
				// Floor - positioned at the very bottom
				Matter.Bodies.rectangle(
					newBounds.width / 2,
					newBounds.height - wallThickness / 2,
					newBounds.width + wallThickness * 2, // Extend beyond sides
					wallThickness,
					{
						isStatic: true,
						label: "floor",
						friction: 0.3,
						restitution: 0.2,
						render: { fillStyle: "transparent" },
					},
				),
				// Left wall - positioned at the very left
				Matter.Bodies.rectangle(
					wallThickness / 2,
					newBounds.height / 2,
					wallThickness,
					newBounds.height + wallThickness * 2, // Extend beyond top/bottom
					{
						isStatic: true,
						label: "wall-left",
						friction: 0.3,
						restitution: 0.2,
						render: { fillStyle: "transparent" },
					},
				),
				// Right wall - positioned at the very right
				Matter.Bodies.rectangle(
					newBounds.width - wallThickness / 2,
					newBounds.height / 2,
					wallThickness,
					newBounds.height + wallThickness * 2, // Extend beyond top/bottom
					{
						isStatic: true,
						label: "wall-right",
						friction: 0.3,
						restitution: 0.2,
						render: { fillStyle: "transparent" },
					},
				),
				// Ceiling - positioned at the very top
				Matter.Bodies.rectangle(
					newBounds.width / 2,
					wallThickness / 2,
					newBounds.width + wallThickness * 2, // Extend beyond sides
					wallThickness,
					{
						isStatic: true,
						label: "ceiling",
						friction: 0.3,
						restitution: 0.2,
						render: { fillStyle: "transparent" },
					},
				),
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
			Matter.Events.off(engine, "beforeUpdate")
			Matter.Runner.stop(runner)
			Matter.Composite.clear(engine.world, false)
			Matter.Engine.clear(engine)
			bodiesRef.current.clear()
		}
	}, [gravity])

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
			// Apply the same scaling as in engine creation
			engineRef.current.world.gravity.y = gravity * 0.000005
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
	const createComponentElement = useCallback(
		(category: ComponentCategory, subcategory?: ComponentSubcategory) => {
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
		},
		[], // No dependencies since it only uses imported functions
	)

	// Spawn a component
	const spawnComponent = useCallback(
		(componentType?: ComponentCategory, subcategory?: ComponentSubcategory) => {
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

				// Improved spawn positioning with better distribution
				const wallMargin = 50 // Safe distance from walls
				const topMargin = 80 // Increased safe distance from ceiling

				// Calculate safe spawn area with more horizontal spread
				const minX = wallMargin + rect.width / 2
				const maxX = sceneRect.width - wallMargin - rect.width / 2
				const x = Math.random() * (maxX - minX) + minX

				// Add some vertical variation to prevent stacking
				const baseY = topMargin + rect.height / 2
				const yVariation = Math.random() * 40 // Add up to 40px vertical variation
				const y = baseY + yVariation

				// Minimal initial rotation to prevent getting stuck
				const initialAngle = (Math.random() - 0.5) * Math.PI * 0.1 // ±9 degrees only

				// Create physics body with optimized settings
				const body = Matter.Bodies.rectangle(x, y, rect.width, rect.height, {
					restitution: bounce,
					friction: 0.4, // Higher friction for more realistic movement
					frictionAir: 0.01, // Higher air resistance to prevent floating
					density: 0.001, // Lower density for lighter feel
					angle: initialAngle,
					angularVelocity: (Math.random() - 0.5) * 0.05, // Minimal initial spin
					sleepThreshold: 60, // Allow sleeping after 1 second of low activity
					// Enable sleeping but with reasonable threshold
				})

				// Add to world
				Matter.World.add(engineRef.current!.world, body)
				bodiesRef.current.set(body.id, element)

				// Give initial velocity based on gravity setting
				const initialVelocity = {
					x: (Math.random() - 0.5) * 1.5, // Random horizontal velocity
					y:
						gravity > 0 ? Math.random() * 1.5 + 0.5 : (Math.random() - 0.5) * 1, // Downward if gravity, random if no gravity
				}
				Matter.Body.setVelocity(body, initialVelocity)

				// Set initial position
				element.style.left = "0px"
				element.style.top = "0px"
				element.style.transform = `translate(${x - rect.width / 2}px, ${
					y - rect.height / 2
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
		},
		[
			selectedCategory,
			selectedSubcategory,
			bounce,
			gravity,
			createComponentElement,
		],
	)

	// Clear all components
	const clearAll = useCallback(() => {
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
	}, [])

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
						}, 100) // Spawn every 100ms (10 per second) when shift is held - slower to prevent sticking
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
	}, [spawnComponent, clearAll])

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
						<div className="flex flex-wrap gap-x-1 gap-y-3 items-center">
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
									max={3000}
									step={50}
									className="w-[100px]"
								/>
								<span className="text-xs text-muted-foreground min-w-[40px]">
									{gravity === 0 ? "None" : (gravity / 1000).toFixed(1)}
								</span>
							</div>

							<div className="flex items-center gap-2">
								<Label htmlFor="bounce">Bounce</Label>
								<Slider
									id="bounce"
									value={[bounce]}
									onValueChange={([v]) => setBounce(v)}
									min={0}
									max={0.9}
									step={0.05}
									className="w-[100px]"
								/>
								<span className="text-xs text-muted-foreground min-w-[40px]">
									{bounce.toFixed(2)}
								</span>
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
					<div className="absolute top-0 left-0 right-0 h-[30px] border-b-2 border-border/50 bg-gradient-to-b from-background/80 to-transparent" />
					{/* Bottom wall */}
					<div className="absolute bottom-0 left-0 right-0 h-[30px] border-t-2 border-border/50 bg-gradient-to-t from-background/80 to-transparent" />
					{/* Left wall */}
					<div className="absolute top-0 left-0 bottom-0 w-[30px] border-r-2 border-border/50 bg-gradient-to-r from-background/80 to-transparent" />
					{/* Right wall */}
					<div className="absolute top-0 right-0 bottom-0 w-[30px] border-l-2 border-border/50 bg-gradient-to-l from-background/80 to-transparent" />

					{/* Corner indicators */}
					<div className="absolute top-[28px] left-[28px] w-4 h-4 border-l-2 border-t-2 border-border/50" />
					<div className="absolute top-[28px] right-[28px] w-4 h-4 border-r-2 border-t-2 border-border/50" />
					<div className="absolute bottom-[28px] left-[28px] w-4 h-4 border-l-2 border-b-2 border-border/50" />
					<div className="absolute bottom-[28px] right-[28px] w-4 h-4 border-r-2 border-b-2 border-border/50" />
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
