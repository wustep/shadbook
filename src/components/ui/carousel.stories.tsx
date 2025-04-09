import { Badge } from "./badge"
import { Button } from "./button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./carousel"
import type { Meta, StoryObj } from "@storybook/react"
import {
	ChevronLeft,
	ChevronRight,
	Heart,
	Image as ImageIcon,
	Maximize2,
	Pause,
	Play,
	Share,
	Star,
	ThumbsUp,
} from "lucide-react"
import { useEffect, useState } from "react"

const meta: Meta<typeof Carousel> = {
	title: "Components/Carousel",
	component: Carousel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: { type: "radio", options: ["horizontal", "vertical"] },
			description: "The orientation of the carousel",
			defaultValue: "horizontal",
		},
	},
}

export default meta
type Story = StoryObj<typeof Carousel>

/**
 * Basic carousel with cards showing numbers
 */
export const Default: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Carousel className="w-full">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<span className="text-4xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
}

/**
 * Carousel with multiple items per slide, ideal for product showcases
 */
export const MultipleItemsPerView: Story = {
	render: () => (
		<div className="w-full max-w-sm">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-2 md:-ml-4">
					{Array.from({ length: 10 }).map((_, index) => (
						<CarouselItem
							key={index}
							className="basis-1/3 pl-2 md:basis-1/4 md:pl-4"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-2">
										<span className="text-2xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
}

/**
 * Vertical carousel, useful for space-constrained UIs
 */
export const Vertical: Story = {
	render: () => (
		<div className="w-full max-w-xs my-4">
			<Carousel orientation="vertical" className="w-full h-[160px]">
				<CarouselContent className="h-[160px]">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-video items-center justify-center p-6">
										<span className="text-4xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
}

/**
 * Carousel with custom navigation controls and slide counter
 */
export const CustomNavigation: Story = {
	render: function CustomNavigationCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)
		const [count, setCount] = useState(0)

		useEffect(() => {
			if (!api) {
				return
			}

			setCount(api.scrollSnapList().length)
			setCurrent(api.selectedScrollSnap() + 1)

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap() + 1)
			})
		}, [api])

		const slides = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"]

		return (
			<div className="w-full max-w-xs">
				<Carousel setApi={setApi} className="w-full">
					<CarouselContent>
						{slides.map((slide, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<span className="text-2xl font-semibold">{slide}</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="flex items-center justify-center mt-4 gap-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => api?.scrollPrev()}
							disabled={current === 1}
						>
							<ChevronLeft className="h-4 w-4 mr-1" />
							Previous
						</Button>
						<div className="flex-1 text-center text-sm">
							<span className="font-medium">{current}</span>
							<span className="text-muted-foreground"> / {count}</span>
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() => api?.scrollNext()}
							disabled={current === count}
						>
							Next
							<ChevronRight className="h-4 w-4 ml-1" />
						</Button>
					</div>
				</Carousel>
			</div>
		)
	},
}

/**
 * Carousel with dot indicators for navigation
 */
export const WithDotIndicators: Story = {
	render: function DotIndicatorsCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)
		const [count, setCount] = useState(0)

		useEffect(() => {
			if (!api) {
				return
			}

			setCount(api.scrollSnapList().length)
			setCurrent(api.selectedScrollSnap())

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap())
			})
		}, [api])

		return (
			<div className="w-full max-w-xs">
				<Carousel
					setApi={setApi}
					className="w-full"
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6">
											<span className="text-4xl font-semibold">
												{index + 1}
											</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="flex items-center justify-center py-2 mt-2">
						<div className="flex items-center gap-1">
							{Array.from({ length: count }).map((_, index) => (
								<button
									key={index}
									className={`w-2 h-2 rounded-full transition-colors ${
										current === index
											? "bg-primary"
											: "bg-muted hover:bg-muted-foreground/50"
									}`}
									onClick={() => api?.scrollTo(index)}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</Carousel>
			</div>
		)
	},
}

/**
 * Auto-playing carousel with controls to pause/resume
 */
export const Autoplay: Story = {
	render: function AutoplayCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)
		const [count, setCount] = useState(0)
		const [autoplay, setAutoplay] = useState(true)
		const [progress, setProgress] = useState(0)

		// Duration in milliseconds
		const autoplayDelay = 3000

		useEffect(() => {
			if (!api) return

			setCount(api.scrollSnapList().length)
			setCurrent(api.selectedScrollSnap())

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap())
				setProgress(0) // Reset progress when slide changes
			})
		}, [api])

		// Handle autoplay
		useEffect(() => {
			if (!api || !autoplay) return

			let interval: ReturnType<typeof setInterval>
			let animationFrame: number
			let startTime: number

			const runProgress = (timestamp: number) => {
				if (!startTime) startTime = timestamp
				const elapsed = timestamp - startTime
				const newProgress = Math.min(elapsed / autoplayDelay, 1)
				setProgress(newProgress)

				if (elapsed < autoplayDelay) {
					animationFrame = requestAnimationFrame(runProgress)
				}
			}

			const startAutoplay = () => {
				startTime = 0
				animationFrame = requestAnimationFrame(runProgress)

				interval = setInterval(() => {
					api.scrollNext()
				}, autoplayDelay)
			}

			startAutoplay()

			return () => {
				clearInterval(interval)
				cancelAnimationFrame(animationFrame)
			}
		}, [api, autoplay])

		const toggleAutoplay = () => {
			setAutoplay(prev => !prev)
		}

		return (
			<div className="w-full max-w-xs">
				<Carousel
					setApi={setApi}
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent>
						{Array.from({ length: 5 }).map((_, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card>
										<CardContent className="flex aspect-square items-center justify-center p-6 relative">
											<span className="text-4xl font-semibold">
												{index + 1}
											</span>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Progress bar */}
					<div className="h-1 w-full bg-muted mt-2 overflow-hidden rounded-full">
						<div
							className="h-full bg-primary transition-all duration-200"
							style={{ width: `${progress * 100}%` }}
						/>
					</div>

					<div className="flex items-center justify-between mt-2">
						<div className="text-sm font-medium">
							{current + 1} / {count}
						</div>
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleAutoplay}
							className="h-8 w-8 p-0"
							aria-label={autoplay ? "Pause" : "Play"}
						>
							{autoplay ? (
								<Pause className="h-4 w-4" />
							) : (
								<Play className="h-4 w-4" />
							)}
						</Button>
					</div>
				</Carousel>
			</div>
		)
	},
}

/**
 * Carousel with custom styling and gradient effects
 */
export const CustomStyling: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card className="border-none overflow-hidden shadow-md">
									<CardContent className="flex aspect-square items-center justify-center p-0 relative">
										<div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-90" />
										<div className="relative z-10 text-white text-center p-6">
											<span className="text-5xl font-bold block mb-2">
												{index + 1}
											</span>
											<span className="text-sm opacity-90">
												Slide {index + 1}
											</span>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-2 bg-white/20 hover:bg-white/40 border-none text-white shadow-md" />
				<CarouselNext className="right-2 bg-white/20 hover:bg-white/40 border-none text-white shadow-md" />
			</Carousel>
		</div>
	),
}

/**
 * Image carousel with thumbnails navigation
 */
export const WithThumbnails: Story = {
	render: function ThumbnailsCarousel() {
		const [mainApi, setMainApi] = useState<CarouselApi>()
		const [thumbApi, setThumbApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)
		const [fullscreen, setFullscreen] = useState(false)

		const images = [
			"https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1618588507085-c79565432917?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1546768292-fb12f6c92568?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1620315808304-66597517f188?w=500&auto=format&fit=crop&q=60",
		]

		useEffect(() => {
			if (!mainApi || !thumbApi) {
				return
			}

			setCurrent(mainApi.selectedScrollSnap())

			mainApi.on("select", () => {
				const currentSlide = mainApi.selectedScrollSnap()
				setCurrent(currentSlide)
				thumbApi.scrollTo(currentSlide)
			})
		}, [mainApi, thumbApi])

		return (
			<div
				className={`space-y-4 ${
					fullscreen ? "w-full max-w-2xl" : "w-full max-w-xs"
				}`}
			>
				<div className="relative">
					<Carousel setApi={setMainApi} className="w-full">
						<CarouselContent>
							{images.map((image, index) => (
								<CarouselItem key={index}>
									<div className="p-1">
										<Card className="overflow-hidden">
											<CardContent className="p-0 relative">
												<img
													src={image}
													alt={`Image ${index + 1}`}
													className="w-full aspect-video object-cover"
												/>
												<div className="absolute bottom-2 right-2 flex gap-1">
													<Button
														variant="secondary"
														size="icon"
														className="h-7 w-7 bg-black/40 text-white border-none hover:bg-black/60"
														onClick={() => setFullscreen(!fullscreen)}
													>
														<Maximize2 className="h-3.5 w-3.5" />
													</Button>
													<Button
														variant="secondary"
														size="icon"
														className="h-7 w-7 bg-black/40 text-white border-none hover:bg-black/60"
													>
														<Heart className="h-3.5 w-3.5" />
													</Button>
													<Button
														variant="secondary"
														size="icon"
														className="h-7 w-7 bg-black/40 text-white border-none hover:bg-black/60"
													>
														<Share className="h-3.5 w-3.5" />
													</Button>
												</div>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="left-2" />
						<CarouselNext className="right-2" />
					</Carousel>
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center z-10 gap-1 bg-black/40 text-white px-2 py-1 rounded-full text-xs">
						<ImageIcon className="h-3 w-3 mr-1" />
						{current + 1} / {images.length}
					</div>
				</div>

				<Carousel
					setApi={setThumbApi}
					opts={{
						align: "start",
						dragFree: true,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-2">
						{images.map((image, index) => (
							<CarouselItem key={index} className="basis-1/5 pl-2">
								<div
									role="button"
									onClick={() => mainApi?.scrollTo(index)}
									className={`cursor-pointer overflow-hidden rounded transition-all ${
										current === index
											? "ring-2 ring-primary scale-105"
											: "ring-1 ring-muted opacity-70 hover:opacity-100"
									}`}
								>
									<img
										src={image}
										alt={`Thumbnail ${index + 1}`}
										className="aspect-video object-cover w-full"
									/>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		)
	},
}

/**
 * Product showcase carousel with call-to-action
 */
export const ProductShowcase: Story = {
	render: function ProductShowcaseCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)
		const [count, setCount] = useState(0)

		useEffect(() => {
			if (!api) return

			setCount(api.scrollSnapList().length)
			setCurrent(api.selectedScrollSnap())

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap())
			})
		}, [api])

		const products = [
			{
				name: "Ergonomic Chair",
				price: "$199.99",
				rating: 4.8,
				reviewCount: 245,
				image:
					"https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60",
				color: "bg-amber-500",
			},
			{
				name: "Wireless Headphones",
				price: "$129.99",
				rating: 4.6,
				reviewCount: 189,
				image:
					"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
				color: "bg-blue-500",
			},
			{
				name: "Smart Watch",
				price: "$249.99",
				rating: 4.9,
				reviewCount: 312,
				image:
					"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60",
				color: "bg-green-500",
			},
			{
				name: "Coffee Maker",
				price: "$89.99",
				rating: 4.5,
				reviewCount: 156,
				image:
					"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&auto=format&fit=crop&q=60",
				color: "bg-rose-500",
			},
		]

		return (
			<div className="w-full max-w-md">
				<Carousel setApi={setApi} className="w-full">
					<CarouselContent>
						{products.map((product, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card className="overflow-hidden">
										<CardContent className="p-0">
											<div className="relative">
												<div
													className={`${product.color} absolute top-0 left-0 h-1 w-full`}
												/>
												<img
													src={product.image}
													alt={product.name}
													className="w-full aspect-[4/3] object-cover"
												/>
												<Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80">
													New Arrival
												</Badge>
											</div>
											<div className="p-4">
												<h3 className="font-medium text-lg">{product.name}</h3>
												<div className="flex items-center gap-2 my-2">
													<div className="flex items-center">
														{Array.from({ length: 5 }).map((_, i) => (
															<Star
																key={i}
																className={`h-4 w-4 ${
																	i < Math.floor(product.rating)
																		? "text-amber-500 fill-amber-500"
																		: "text-muted-foreground"
																}`}
															/>
														))}
													</div>
													<span className="text-sm text-muted-foreground">
														({product.reviewCount})
													</span>
												</div>
												<div className="text-xl font-bold mt-2">
													{product.price}
												</div>
											</div>
										</CardContent>
										<CardFooter className="px-4 py-3 pt-0 flex justify-between">
											<Button variant="outline" size="sm">
												Details
											</Button>
											<Button size="sm">Add to Cart</Button>
										</CardFooter>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-2" />
					<CarouselNext className="right-2" />
				</Carousel>

				<div className="flex items-center justify-center gap-1 mt-4">
					{Array.from({ length: count }).map((_, index) => (
						<button
							key={index}
							onClick={() => api?.scrollTo(index)}
							className={`w-8 h-1 rounded-full transition-colors ${
								current === index ? "bg-primary" : "bg-muted"
							}`}
							aria-label={`Go to product ${index + 1}`}
						/>
					))}
				</div>
			</div>
		)
	},
}

/**
 * Content carousel with testimonials
 */
export const TestimonialsCarousel: Story = {
	render: function TestimonialsCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)
		const [count, setCount] = useState(0)
		const [autoplay] = useState(true)

		const testimonials = [
			{
				name: "Alex Johnson",
				role: "Product Manager",
				content:
					"This product has transformed our workflow. The intuitive interface and powerful features have made our team much more productive.",
				avatar: "https://i.pravatar.cc/150?img=12",
			},
			{
				name: "Sarah Wilson",
				role: "UX Designer",
				content:
					"The attention to detail is impressive. As a designer, I appreciate the thoughtful implementation and beautiful aesthetics.",
				avatar: "https://i.pravatar.cc/150?img=1",
			},
			{
				name: "Michael Chen",
				role: "Software Engineer",
				content:
					"The API is really well designed. Integration was seamless and the documentation is comprehensive. Highly recommended!",
				avatar: "https://i.pravatar.cc/150?img=3",
			},
			{
				name: "Emily Rodriguez",
				role: "Marketing Director",
				content:
					"We've seen a significant increase in engagement since implementing this solution. The analytics tools are particularly valuable.",
				avatar: "https://i.pravatar.cc/150?img=5",
			},
		]

		useEffect(() => {
			if (!api) return

			setCount(api.scrollSnapList().length)
			setCurrent(api.selectedScrollSnap())

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap())
			})
		}, [api])

		// Handle autoplay
		useEffect(() => {
			if (!api || !autoplay) return

			const interval = setInterval(() => {
				api.scrollNext()
			}, 5000)

			return () => clearInterval(interval)
		}, [api, autoplay])

		return (
			<div className="w-full max-w-lg">
				<Card className="border-none shadow-md">
					<CardHeader>
						<CardTitle className="text-center">
							What Our Customers Say
						</CardTitle>
					</CardHeader>
					<Carousel
						setApi={setApi}
						opts={{
							align: "center",
							loop: true,
						}}
						className="w-full"
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index}>
									<div className="p-4">
										<div className="text-center space-y-4">
											<div className="mx-auto relative">
												<div className="size-16 rounded-full overflow-hidden mx-auto">
													<img
														src={testimonial.avatar}
														alt={testimonial.name}
														className="w-full h-full object-cover"
													/>
												</div>
												<div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground rounded-full p-1">
													<ThumbsUp className="h-3 w-3" />
												</div>
											</div>

											<div className="space-y-1">
												<h3 className="font-medium">{testimonial.name}</h3>
												<p className="text-sm text-muted-foreground">
													{testimonial.role}
												</p>
											</div>

											<p className="text-muted-foreground italic">
												"{testimonial.content}"
											</p>

											<div className="flex justify-center">
												<div className="flex items-center text-amber-500">
													{Array.from({ length: 5 }).map((_, i) => (
														<Star key={i} className="h-4 w-4 fill-amber-500" />
													))}
												</div>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					<CardFooter className="flex justify-center pb-4">
						<div className="flex items-center gap-2">
							{Array.from({ length: count }).map((_, index) => (
								<button
									key={index}
									onClick={() => api?.scrollTo(index)}
									className={`w-2 h-2 rounded-full transition-all ${
										current === index
											? "bg-primary scale-125"
											: "bg-muted hover:bg-primary/50"
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>
					</CardFooter>
				</Card>
			</div>
		)
	},
}
