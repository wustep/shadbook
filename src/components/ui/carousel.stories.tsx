import { Button } from "./button"
import { Card, CardContent } from "./card"
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./carousel"
import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"

const meta: Meta<typeof Carousel> = {
	title: "shadcn/Carousel",
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
 * Basic carousel with cards
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
 * Carousel with multiple items per slide
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
 * Vertical carousel
 */
export const Vertical: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Carousel orientation="vertical" className="w-full h-[300px]">
				<CarouselContent className="h-[300px]">
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
 * Carousel with custom navigation
 */
export const CustomNavigation: Story = {
	render: function CustomNavigationCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)

		const slides = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"]

		useState(() => {
			if (!api) {
				return
			}

			setCurrent(api.selectedScrollSnap() + 1)

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap() + 1)
			})
		})

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
						>
							Previous
						</Button>
						<div className="flex-1 text-center text-sm text-muted-foreground">
							{current} / {slides.length}
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() => api?.scrollNext()}
						>
							Next
						</Button>
					</div>
				</Carousel>
			</div>
		)
	},
}

/**
 * Carousel with dot indicators
 */
export const WithDotIndicators: Story = {
	render: function DotIndicatorsCarousel() {
		const [api, setApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)

		useState(() => {
			if (!api) {
				return
			}

			setCurrent(api.selectedScrollSnap())

			api.on("select", () => {
				setCurrent(api.selectedScrollSnap())
			})
		})

		return (
			<div className="w-full max-w-xs">
				<Carousel setApi={setApi} className="w-full">
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
					<div className="flex items-center justify-center mt-4 gap-1">
						{Array.from({ length: 5 }).map((_, index) => (
							<Button
								key={index}
								variant="ghost"
								size="sm"
								className={`w-2 h-2 p-0 rounded-full ${
									current === index ? "bg-primary" : "bg-muted"
								}`}
								onClick={() => api?.scrollTo(index)}
							/>
						))}
					</div>
				</Carousel>
			</div>
		)
	},
}

/**
 * Auto-playing carousel
 */
export const Autoplay: Story = {
	render: () => (
		<div className="w-full max-w-xs">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				plugins={
					[
						// This would require the actual plugin to be imported
						// Autoplay({ delay: 2000, stopOnInteraction: false }),
					]
				}
				className="w-full"
			>
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
				<div className="flex justify-center mt-4">
					<p className="text-sm text-muted-foreground">
						Auto-playing carousel (simulated)
					</p>
				</div>
			</Carousel>
		</div>
	),
}

/**
 * Carousel with custom styling
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
								<Card className="border-none overflow-hidden">
									<CardContent className="flex aspect-square items-center justify-center p-0 bg-gradient-to-br from-purple-500 to-blue-500 text-white">
										<span className="text-4xl font-bold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="left-1 bg-white/30 hover:bg-white/50 border-none text-white" />
				<CarouselNext className="right-1 bg-white/30 hover:bg-white/50 border-none text-white" />
			</Carousel>
		</div>
	),
}

/**
 * Image carousel with thumbnails
 */
export const WithThumbnails: Story = {
	render: function ThumbnailsCarousel() {
		const [mainApi, setMainApi] = useState<CarouselApi>()
		const [thumbApi, setThumbApi] = useState<CarouselApi>()
		const [current, setCurrent] = useState(0)

		const images = [
			"https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1618588507085-c79565432917?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1546768292-fb12f6c92568?w=500&auto=format&fit=crop&q=60",
			"https://images.unsplash.com/photo-1620315808304-66597517f188?w=500&auto=format&fit=crop&q=60",
		]

		useState(() => {
			if (!mainApi || !thumbApi) {
				return
			}

			setCurrent(mainApi.selectedScrollSnap())

			mainApi.on("select", () => {
				const currentSlide = mainApi.selectedScrollSnap()
				setCurrent(currentSlide)
				thumbApi.scrollTo(currentSlide)
			})
		})

		return (
			<div className="w-full max-w-xs space-y-4">
				<Carousel setApi={setMainApi} className="w-full">
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem key={index}>
								<div className="p-1">
									<Card className="overflow-hidden">
										<CardContent className="p-0">
											<img
												src={image}
												alt={`Image ${index + 1}`}
												className="w-full aspect-video object-cover"
											/>
										</CardContent>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>

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
									className={`cursor-pointer overflow-hidden rounded ${
										current === index
											? "ring-2 ring-primary"
											: "ring-1 ring-muted"
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
