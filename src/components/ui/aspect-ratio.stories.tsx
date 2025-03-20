import { AspectRatio } from "./aspect-ratio"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof AspectRatio> = {
	title: "shadcn/AspectRatio",
	component: AspectRatio,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		ratio: {
			control: { type: "number" },
			description: "The ratio of the width to height",
			defaultValue: 16 / 9,
		},
	},
}

export default meta
type Story = StoryObj<typeof AspectRatio>

/**
 * Standard 16:9 aspect ratio with an image
 */
export const Default: Story = {
	render: () => (
		<div className="w-[500px]">
			<AspectRatio ratio={16 / 9} className="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					alt="Photo by Drew Beamer"
					className="rounded-md object-cover w-full h-full"
				/>
			</AspectRatio>
		</div>
	),
}

/**
 * Square 1:1 aspect ratio
 */
export const Square: Story = {
	render: () => (
		<div className="w-[500px]">
			<AspectRatio ratio={1 / 1} className="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6?w=800&dpr=2&q=80"
					alt="Photo by Luca Bravo"
					className="rounded-md object-cover w-full h-full"
				/>
			</AspectRatio>
		</div>
	),
}

/**
 * Wider 21:9 aspect ratio for cinematic content
 */
export const Cinematic: Story = {
	render: () => (
		<div className="w-[500px]">
			<AspectRatio ratio={21 / 9} className="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1479030160180-b1860951d696?w=800&dpr=2&q=80"
					alt="Photo by Taiki Ishikawa"
					className="rounded-md object-cover w-full h-full"
				/>
			</AspectRatio>
		</div>
	),
}

/**
 * Vertical 3:4 aspect ratio
 */
export const Vertical: Story = {
	render: () => (
		<div className="w-[300px]">
			<AspectRatio ratio={3 / 4} className="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1576791442035-2d8a6d6e0bf7?w=800&dpr=2&q=80"
					alt="Photo by Milad Fakurian"
					className="rounded-md object-cover w-full h-full"
				/>
			</AspectRatio>
		</div>
	),
}

/**
 * Multiple aspect ratios compared
 */
export const Comparison: Story = {
	render: () => (
		<div className="grid grid-cols-2 gap-4 w-[600px]">
			<div className="space-y-2">
				<p className="text-sm text-center">16:9 (Widescreen)</p>
				<AspectRatio ratio={16 / 9} className="bg-muted rounded-md" />
			</div>
			<div className="space-y-2">
				<p className="text-sm text-center">1:1 (Square)</p>
				<AspectRatio ratio={1} className="bg-muted rounded-md" />
			</div>
			<div className="space-y-2">
				<p className="text-sm text-center">4:3 (Classic)</p>
				<AspectRatio ratio={4 / 3} className="bg-muted rounded-md" />
			</div>
			<div className="space-y-2">
				<p className="text-sm text-center">3:4 (Portrait)</p>
				<AspectRatio ratio={3 / 4} className="bg-muted rounded-md" />
			</div>
		</div>
	),
}

/**
 * Different content types in aspect ratio containers
 */
export const WithDifferentContent: Story = {
	render: () => (
		<div className="space-y-8 w-[500px]">
			<div className="space-y-2">
				<p className="text-sm">With image</p>
				<AspectRatio ratio={16 / 9} className="bg-muted">
					<img
						src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
						alt="Photo"
						className="rounded-md object-cover w-full h-full"
					/>
				</AspectRatio>
			</div>

			<div className="space-y-2">
				<p className="text-sm">With video</p>
				<AspectRatio ratio={16 / 9}>
					<iframe
						width="560"
						height="315"
						src="https://www.youtube.com/embed/dQw4w9WgXcQ"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="rounded-md object-cover w-full h-full"
					></iframe>
				</AspectRatio>
			</div>

			<div className="space-y-2">
				<p className="text-sm">With content</p>
				<AspectRatio
					ratio={16 / 9}
					className="bg-muted rounded-md flex items-center justify-center"
				>
					<div className="text-center p-4">
						<h3 className="text-xl font-bold">Content in Aspect Ratio</h3>
						<p className="text-muted-foreground">
							This container maintains a 16:9 ratio
						</p>
					</div>
				</AspectRatio>
			</div>
		</div>
	),
}

/**
 * Responsive aspect ratio container
 */
export const Responsive: Story = {
	render: () => (
		<div className="w-full max-w-[800px]">
			<AspectRatio ratio={16 / 9} className="bg-muted">
				<img
					src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
					alt="Photo by Drew Beamer"
					className="rounded-md object-cover w-full h-full"
				/>
			</AspectRatio>
			<p className="text-sm text-muted-foreground mt-2 text-center">
				This container resizes to fit its parent while maintaining a 16:9 aspect
				ratio
			</p>
		</div>
	),
}
