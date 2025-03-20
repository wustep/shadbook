import { Calendar } from "./calendar"
import type { Meta, StoryObj } from "@storybook/react"
import { addDays } from "date-fns"
import { useState } from "react"
import { DateRange } from "react-day-picker"

const meta: Meta<typeof Calendar> = {
	title: "shadcn/Calendar",
	component: Calendar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Calendar>

/**
 * Default calendar with no selected date
 */
export const Default: Story = {
	render: () => <Calendar className="rounded-md border" />,
}

/**
 * Calendar with a selected date
 */
export const WithSelectedDate: Story = {
	render: function Render() {
		const [date, setDate] = useState<Date | undefined>(new Date())
		return (
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
			/>
		)
	},
}

/**
 * Calendar with a date range selection
 */
export const DateRangeSelection: Story = {
	render: function Render() {
		const [dateRange, setDateRange] = useState<DateRange | undefined>({
			from: new Date(),
			to: addDays(new Date(), 7),
		})
		return (
			<Calendar
				mode="range"
				selected={dateRange}
				onSelect={setDateRange}
				className="rounded-md border"
				numberOfMonths={2}
			/>
		)
	},
}

/**
 * Calendar with multiple months
 */
export const MultipleMonths: Story = {
	render: () => (
		<Calendar mode="single" className="rounded-md border" numberOfMonths={2} />
	),
}

/**
 * Calendar with disabled days
 */
export const DisabledDays: Story = {
	render: function Render() {
		const disabledDays = [
			new Date(2023, 8, 10),
			new Date(2023, 8, 15),
			new Date(2023, 8, 21),
			{ from: new Date(2023, 8, 25), to: new Date(2023, 8, 28) },
		]

		return (
			<Calendar
				mode="single"
				disabled={disabledDays}
				defaultMonth={new Date(2023, 8)}
				className="rounded-md border"
			/>
		)
	},
}

/**
 * Calendar with today highlighted
 */
export const TodayHighlighted: Story = {
	render: () => (
		<Calendar
			mode="single"
			className="rounded-md border"
			fromDate={new Date()}
			defaultMonth={new Date()}
		/>
	),
}

/**
 * Calendar with custom styling
 */
export const CustomStyling: Story = {
	render: () => (
		<Calendar
			className="rounded-md border p-3"
			classNames={{
				day_selected:
					"bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
				day_today: "bg-amber-100 text-amber-900",
				caption_label: "text-blue-900 font-bold text-md",
			}}
		/>
	),
}
