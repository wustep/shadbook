import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./accordion"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Accordion> = {
	title: "shadcn/Accordion",
	component: Accordion,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Accordion>

/**
 * Default accordion with single item open behavior
 */
export const Default: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-[400px]">
			<AccordionItem value="item-1">
				<AccordionTrigger>Is it accessible?</AccordionTrigger>
				<AccordionContent>
					Yes. It adheres to the WAI-ARIA design pattern.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Is it styled?</AccordionTrigger>
				<AccordionContent>
					Yes. It comes with default styles that match the other
					components&apos; aesthetic.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Is it animated?</AccordionTrigger>
				<AccordionContent>
					Yes. It&apos;s animated by default, but you can disable it if you
					prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
}

/**
 * Accordion with multiple items open behavior
 */
export const Multiple: Story = {
	render: () => (
		<Accordion type="multiple" className="w-[400px]">
			<AccordionItem value="item-1">
				<AccordionTrigger>First section</AccordionTrigger>
				<AccordionContent>
					This accordion allows multiple sections to be open at the same time.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Second section</AccordionTrigger>
				<AccordionContent>
					Try opening this while the first section is already open.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Third section</AccordionTrigger>
				<AccordionContent>
					All sections can be open simultaneously.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
}

/**
 * Disabled accordion items
 */
export const Disabled: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-[400px]">
			<AccordionItem value="item-1">
				<AccordionTrigger>Available section</AccordionTrigger>
				<AccordionContent>
					This section can be opened and closed.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger disabled>Disabled section</AccordionTrigger>
				<AccordionContent>
					This content won't be accessible because the trigger is disabled.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>Another available section</AccordionTrigger>
				<AccordionContent>
					This section can also be opened and closed.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
}

/**
 * Custom styled accordion
 */
export const CustomStyling: Story = {
	render: () => (
		<Accordion type="single" collapsible className="w-[400px]">
			<AccordionItem value="item-1" className="border-b border-blue-200">
				<AccordionTrigger className="hover:text-blue-500">
					Custom styled accordion
				</AccordionTrigger>
				<AccordionContent className="text-blue-600">
					This accordion has custom styling applied to demonstrate the
					flexibility of the component.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2" className="border-b border-green-200">
				<AccordionTrigger className="hover:text-green-500">
					Different colors
				</AccordionTrigger>
				<AccordionContent className="text-green-600">
					Each accordion item can have its own custom styling.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3" className="border-b border-purple-200">
				<AccordionTrigger className="hover:text-purple-500">
					Tailwind powered
				</AccordionTrigger>
				<AccordionContent className="text-purple-600">
					Using Tailwind classes makes customization simple and consistent.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	),
}
