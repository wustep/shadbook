import { Slider } from "./slider"
import type { Meta, StoryObj } from "@storybook/react"
import { Music, Sun, Volume2, VolumeX, Zap } from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Slider> = {
	title: "shadcn/Slider",
	component: Slider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		defaultValue: {
			control: "object",
			description: "The default value of the slider",
		},
		min: {
			control: { type: "number" },
			description: "The minimum value of the slider",
			defaultValue: 0,
		},
		max: {
			control: { type: "number" },
			description: "The maximum value of the slider",
			defaultValue: 100,
		},
		step: {
			control: { type: "number" },
			description: "The step value of the slider",
			defaultValue: 1,
		},
		orientation: {
			control: { type: "radio", options: ["horizontal", "vertical"] },
			description: "The orientation of the slider",
			defaultValue: "horizontal",
		},
	},
}

export default meta
type Story = StoryObj<typeof Slider>

/**
 * Basic slider with a single handle
 */
export const Default: Story = {
	args: {
		defaultValue: [50],
		max: 100,
		step: 1,
	},
	render: ({ defaultValue, max, step }) => (
		<div className="w-[300px]">
			<Slider defaultValue={defaultValue} max={max} step={step} />
		</div>
	),
}

/**
 * Slider with a volume control example
 */
export const VolumeControl: Story = {
	render: function VolumeSlider() {
		const [volume, setVolume] = useState(50)

		return (
			<div className="w-[300px] space-y-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						{volume === 0 ? (
							<VolumeX className="h-5 w-5" />
						) : (
							<Volume2 className="h-5 w-5" />
						)}
						<span className="text-sm font-medium">Volume</span>
					</div>
					<span className="text-sm text-muted-foreground">{volume}%</span>
				</div>
				<Slider
					value={[volume]}
					onValueChange={value => setVolume(value[0])}
					max={100}
					step={1}
				/>
			</div>
		)
	},
}

/**
 * Slider with multiple handles for a range
 */
export const Range: Story = {
	render: function RangeSlider() {
		const [range, setRange] = useState<number[]>([25, 75])

		return (
			<div className="w-[300px] space-y-6">
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">Price Range</span>
					<div className="text-sm text-muted-foreground">
						${range[0]} - ${range[1]}
					</div>
				</div>
				<Slider value={range} onValueChange={setRange} max={100} step={1} />
			</div>
		)
	},
}

/**
 * Slider with custom styling
 */
export const CustomStyling: Story = {
	render: () => (
		<div className="w-[300px]">
			<Slider
				defaultValue={[40]}
				className="[&>span]:bg-primary [&>span]:h-2.5 [&>span]:rounded-full"
			/>
		</div>
	),
}

/**
 * Vertical orientation slider
 */
export const Vertical: Story = {
	render: () => (
		<div className="h-[200px]">
			<Slider defaultValue={[70]} orientation="vertical" />
		</div>
	),
}

/**
 * Slider with steps
 */
export const Steps: Story = {
	render: function StepsSlider() {
		const [value, setValue] = useState(40)
		const steps = [0, 25, 50, 75, 100]

		return (
			<div className="w-[300px] space-y-8">
				<Slider
					value={[value]}
					onValueChange={v => setValue(v[0])}
					max={100}
					step={25}
				/>
				<div className="flex justify-between">
					{steps.map(step => (
						<div
							key={step}
							className={`text-xs ${
								value >= step ? "text-primary" : "text-muted-foreground"
							}`}
						>
							{step}%
						</div>
					))}
				</div>
			</div>
		)
	},
}

/**
 * Disabled slider
 */
export const Disabled: Story = {
	render: () => (
		<div className="w-[300px]">
			<Slider defaultValue={[30]} disabled />
		</div>
	),
}

/**
 * Slider used for brightness control
 */
export const BrightnessControl: Story = {
	render: function BrightnessSlider() {
		const [brightness, setBrightness] = useState(80)

		return (
			<div className="w-[300px] space-y-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Sun className="h-5 w-5" />
						<span className="text-sm font-medium">Brightness</span>
					</div>
					<span className="text-sm text-muted-foreground">{brightness}%</span>
				</div>
				<Slider
					value={[brightness]}
					onValueChange={value => setBrightness(value[0])}
					max={100}
					step={1}
					className="[&>span]:bg-yellow-500 [&>span>span]:bg-yellow-500"
				/>
			</div>
		)
	},
}

/**
 * Multiple sliders for different controls
 */
export const MultipleControls: Story = {
	render: function MultipleControlsSlider() {
		const [volume, setVolume] = useState(50)
		const [brightness, setBrightness] = useState(75)
		const [power, setPower] = useState(30)

		return (
			<div className="w-[300px] space-y-8">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Volume2 className="h-4 w-4" />
							<span className="text-sm font-medium">Volume</span>
						</div>
						<span className="text-xs text-muted-foreground">{volume}%</span>
					</div>
					<Slider
						value={[volume]}
						onValueChange={value => setVolume(value[0])}
						max={100}
						step={1}
					/>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Sun className="h-4 w-4" />
							<span className="text-sm font-medium">Brightness</span>
						</div>
						<span className="text-xs text-muted-foreground">{brightness}%</span>
					</div>
					<Slider
						value={[brightness]}
						onValueChange={value => setBrightness(value[0])}
						max={100}
						step={1}
					/>
				</div>

				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Zap className="h-4 w-4" />
							<span className="text-sm font-medium">Power</span>
						</div>
						<span className="text-xs text-muted-foreground">{power}%</span>
					</div>
					<Slider
						value={[power]}
						onValueChange={value => setPower(value[0])}
						max={100}
						step={1}
					/>
				</div>
			</div>
		)
	},
}

/**
 * Slider with color stops
 */
export const ColorStops: Story = {
	render: () => (
		<div className="w-[300px] space-y-6">
			<Slider defaultValue={[60]} />
			<div className="h-2 w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
		</div>
	),
}

/**
 * Slider for audio playback
 */
export const AudioPlayback: Story = {
	render: function AudioPlaybackSlider() {
		const [position, setPosition] = useState(45)

		return (
			<div className="w-[300px] space-y-2">
				<Slider
					value={[position]}
					onValueChange={value => setPosition(value[0])}
					max={100}
					step={1}
				/>
				<div className="flex justify-between">
					<div className="text-xs text-muted-foreground">1:32</div>
					<div className="flex items-center text-xs text-muted-foreground">
						<Music className="mr-1 h-3 w-3" />
						<span>Song Title - Artist</span>
					</div>
					<div className="text-xs text-muted-foreground">3:45</div>
				</div>
			</div>
		)
	},
}
