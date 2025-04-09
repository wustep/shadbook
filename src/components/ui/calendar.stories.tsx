import { Badge } from "./badge"
import { Button } from "./button"
import { Calendar } from "./calendar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import type { Meta, StoryObj } from "@storybook/react"
import { addDays, format, isSameDay } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight, InfoIcon } from "lucide-react"
import { useState } from "react"
import { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"

const meta: Meta<typeof Calendar> = {
	title: "Components/Calendar",
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
			<div className="space-y-2">
				<p className="text-sm text-muted-foreground">
					Selected date: {date ? format(date, "PPP") : "None"}
				</p>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					className="rounded-md border"
				/>
			</div>
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
			<div className="space-y-2">
				<p className="text-sm text-muted-foreground">
					Selected range:{" "}
					{dateRange?.from ? format(dateRange.from, "PPP") : "None"}
					{" to "}
					{dateRange?.to ? format(dateRange.to, "PPP") : "None"}
				</p>
				<div className="border rounded-md p-4">
					<Calendar
						mode="range"
						selected={dateRange}
						onSelect={setDateRange}
						numberOfMonths={2}
						className="mx-auto"
					/>
				</div>
			</div>
		)
	},
}

/**
 * Calendar inline in a form
 */
export const InlineFormCalendar: Story = {
	render: function Render() {
		const [date, setDate] = useState<Date>()
		return (
			<div className="max-w-sm">
				<Card>
					<CardHeader>
						<CardTitle>Book a Reservation</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<label className="text-sm font-medium">Name</label>
							<Input placeholder="Enter your name" />
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">Date</label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant="outline"
										className={cn(
											"w-full justify-start text-left font-normal",
											!date && "text-muted-foreground",
										)}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date ? format(date, "PPP") : "Select a date"}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						</div>

						<div className="space-y-2">
							<label className="text-sm font-medium">Number of guests</label>
							<Input type="number" min="1" max="10" defaultValue="2" />
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Book Reservation</Button>
					</CardFooter>
				</Card>
			</div>
		)
	},
}

/**
 * Calendar with events
 */
export const WithEvents: Story = {
	render: function Render() {
		const today = new Date()
		const events = [
			{ date: today, title: "Team Meeting", type: "work" },
			{
				date: addDays(today, 2),
				title: "Doctor Appointment",
				type: "personal",
			},
			{ date: addDays(today, 4), title: "Project Deadline", type: "work" },
			{ date: addDays(today, 7), title: "Birthday Party", type: "personal" },
			{ date: addDays(today, 10), title: "Conference", type: "work" },
		]

		const [selectedDate, setSelectedDate] = useState<Date | undefined>(today)

		return (
			<div className="space-y-4 max-w-xl">
				<div className="grid md:grid-cols-5 gap-4">
					<div className="md:col-span-3">
						<Calendar
							mode="single"
							selected={selectedDate}
							onSelect={setSelectedDate}
							className="rounded-md border"
							components={{
								DayContent: props => {
									const eventsForDay = events.filter(event =>
										isSameDay(event.date, props.date),
									)

									return (
										<div className="relative h-full">
											<div className="relative h-9 w-9 p-0 font-normal aria-selected:opacity-100">
												{props.date.getDate()}
											</div>
											{eventsForDay.length > 0 && (
												<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
													{eventsForDay.map((event, index) => (
														<div
															key={index}
															className={cn(
																"h-1 w-1 rounded-full",
																event.type === "work"
																	? "bg-blue-500"
																	: "bg-rose-500",
															)}
														/>
													))}
												</div>
											)}
										</div>
									)
								},
							}}
						/>
					</div>

					<div className="md:col-span-2">
						<div className="rounded-md border p-4 h-full">
							<h4 className="font-medium mb-4">
								{selectedDate
									? format(selectedDate, "MMMM d, yyyy")
									: "Select a date"}
							</h4>

							{selectedDate && (
								<div className="space-y-2">
									{events
										.filter(event => isSameDay(event.date, selectedDate))
										.map((event, index) => (
											<div
												key={index}
												className="flex items-start gap-2 p-2 rounded-md border"
											>
												<Badge
													variant={
														event.type === "work" ? "default" : "secondary"
													}
													className="mt-0.5"
												>
													{event.type}
												</Badge>
												<div>
													<p className="font-medium">{event.title}</p>
													<p className="text-xs text-muted-foreground">
														{format(event.date, "h:mm a")}
													</p>
												</div>
											</div>
										))}

									{events.filter(event => isSameDay(event.date, selectedDate))
										.length === 0 && (
										<div className="flex items-center gap-2 text-muted-foreground text-sm">
											<InfoIcon className="h-4 w-4" />
											<span>No events scheduled for this day</span>
										</div>
									)}
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<div className="text-sm space-x-2">
						<Badge variant="default" className="bg-blue-500">
							Work
						</Badge>
						<Badge variant="secondary" className="bg-rose-500 text-white">
							Personal
						</Badge>
					</div>
					<div className="flex gap-2">
						<Button size="sm" variant="outline">
							<ChevronLeft className="h-4 w-4 mr-1" />
							Previous
						</Button>
						<Button size="sm" variant="outline">
							Next
							<ChevronRight className="h-4 w-4 ml-1" />
						</Button>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * Calendar with custom styling
 */
export const CustomStyling: Story = {
	render: () => (
		<Calendar
			className="rounded-lg border-2 border-blue-200 p-3 dark:border-blue-800"
			classNames={{
				day_selected:
					"bg-blue-500 text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white",
				day_today:
					"bg-orange-100 text-orange-900 dark:bg-orange-800/20 dark:text-orange-400",
				day_outside: "text-gray-300 opacity-50 dark:text-gray-600",
				caption_label: "text-blue-900 font-bold text-lg dark:text-blue-300",
				nav_button:
					"border border-blue-200 bg-blue-50 text-blue-900 hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
				table: "border-collapse space-y-1",
				cell: "text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
				head_cell: "text-blue-900 font-semibold text-xs w-8 dark:text-blue-300",
				button: "hover:bg-blue-100 dark:hover:bg-blue-900",
				nav_button_previous: "absolute left-1",
				nav_button_next: "absolute right-1",
				caption: "flex justify-center pt-1 relative items-center",
			}}
		/>
	),
}

/**
 * Calendar with disabled dates and day constraints
 */
export const WithConstraints: Story = {
	render: function Render() {
		const today = new Date()

		// Cannot select weekends
		const isWeekend = (date: Date) => {
			const day = date.getDay()
			return day === 0 || day === 6
		}

		// Other specific dates that are unavailable
		const unavailableDates = [
			addDays(today, 3),
			addDays(today, 5),
			addDays(today, 8),
		]

		const isDateUnavailable = (date: Date) => {
			return isWeekend(date) || unavailableDates.some(d => isSameDay(d, date))
		}

		const [date, setDate] = useState<Date | undefined>()

		return (
			<div className="space-y-4">
				<div className="text-sm space-y-1">
					<p className="font-medium">Booking Constraints:</p>
					<ul className="list-disc pl-5 text-muted-foreground">
						<li>Cannot book on weekends</li>
						<li>Some specific dates are unavailable</li>
						<li>Cannot book dates in the past</li>
					</ul>
				</div>
				<Calendar
					mode="single"
					selected={date}
					onSelect={setDate}
					disabled={[{ before: today }, isDateUnavailable]}
					className="rounded-md border"
					fromDate={today}
				/>
				{date && (
					<p className="text-sm font-medium">
						Selected date: {format(date, "PPP")}
					</p>
				)}
			</div>
		)
	},
}
