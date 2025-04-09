import { Button } from "./button"
import { type ChartConfig, ChartContainer, ChartTooltipContent } from "./chart"
import type { Meta, StoryObj } from "@storybook/react"
import { Calendar, DollarSign, TrendingDown, TrendingUp } from "lucide-react"
import { useState } from "react"
import {
	Area,
	AreaChart,
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	ComposedChart,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

const meta: Meta<typeof ChartContainer> = {
	title: "Components/Chart",
	component: ChartContainer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ChartContainer>

// Sample data for charts
const lineData = [
	{ name: "Jan", value: 400 },
	{ name: "Feb", value: 300 },
	{ name: "Mar", value: 600 },
	{ name: "Apr", value: 800 },
	{ name: "May", value: 500 },
	{ name: "Jun", value: 900 },
	{ name: "Jul", value: 700 },
]

const barData = [
	{ name: "Q1", value: 4000 },
	{ name: "Q2", value: 3000 },
	{ name: "Q3", value: 2000 },
	{ name: "Q4", value: 2780 },
]

const multiData = [
	{ name: "Jan", visits: 1000, revenue: 400 },
	{ name: "Feb", visits: 1500, revenue: 600 },
	{ name: "Mar", visits: 800, revenue: 300 },
	{ name: "Apr", visits: 1700, revenue: 800 },
	{ name: "May", visits: 1200, revenue: 700 },
	{ name: "Jun", visits: 1400, revenue: 500 },
]

const pieData = [
	{ name: "Desktop", value: 400 },
	{ name: "Mobile", value: 300 },
	{ name: "Tablet", value: 200 },
	{ name: "Other", value: 100 },
]

const radarData = [
	{ subject: "Math", A: 120, B: 110, fullMark: 150 },
	{ subject: "English", A: 98, B: 130, fullMark: 150 },
	{ subject: "Physics", A: 86, B: 130, fullMark: 150 },
	{ subject: "Chemistry", A: 99, B: 100, fullMark: 150 },
	{ subject: "Biology", A: 85, B: 90, fullMark: 150 },
	{ subject: "History", A: 65, B: 85, fullMark: 150 },
]

const areaData = [
	{ name: "Jan", value: 400, previous: 300 },
	{ name: "Feb", value: 300, previous: 200 },
	{ name: "Mar", value: 600, previous: 400 },
	{ name: "Apr", value: 800, previous: 700 },
	{ name: "May", value: 500, previous: 600 },
	{ name: "Jun", value: 900, previous: 800 },
	{ name: "Jul", value: 700, previous: 600 },
]

/**
 * Basic line chart with tooltip
 */
export const LineChartExample: Story = {
	render: () => {
		const config: ChartConfig = {
			value: {
				label: "Sales",
				theme: {
					light: "#3b82f6",
					dark: "#60a5fa",
				},
			},
		}

		return (
			<ChartContainer className="w-[600px]" config={config}>
				<LineChart data={lineData}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip content={<ChartTooltipContent />} />
					<Line
						type="monotone"
						dataKey="value"
						activeDot={{ r: 8 }}
						strokeWidth={2}
					/>
				</LineChart>
			</ChartContainer>
		)
	},
}

/**
 * Bar chart example
 */
export const BarChartExample: Story = {
	render: () => {
		const config: ChartConfig = {
			value: {
				label: "Revenue",
				theme: {
					light: "#10b981",
					dark: "#34d399",
				},
			},
		}

		return (
			<ChartContainer className="w-[600px]" config={config}>
				<BarChart data={barData}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip content={<ChartTooltipContent />} />
					<Bar dataKey="value" radius={[4, 4, 0, 0]} />
				</BarChart>
			</ChartContainer>
		)
	},
}

/**
 * Multi-series chart with multiple data points
 */
export const MultiSeriesChart: Story = {
	render: () => {
		const config: ChartConfig = {
			visits: {
				label: "Visits",
				theme: {
					light: "#8b5cf6",
					dark: "#a78bfa",
				},
			},
			revenue: {
				label: "Revenue",
				theme: {
					light: "#f59e0b",
					dark: "#fbbf24",
				},
			},
		}

		return (
			<ChartContainer className="w-[600px]" config={config}>
				<ComposedChart data={multiData}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="name" />
					<YAxis yAxisId="left" />
					<YAxis yAxisId="right" orientation="right" />
					<Tooltip content={<ChartTooltipContent />} />
					<Legend />
					<Bar
						yAxisId="left"
						dataKey="visits"
						radius={[4, 4, 0, 0]}
						fill="var(--color-visits)"
					/>
					<Line
						yAxisId="right"
						type="monotone"
						dataKey="revenue"
						stroke="var(--color-revenue)"
						strokeWidth={2}
					/>
				</ComposedChart>
			</ChartContainer>
		)
	},
}

/**
 * Pie chart example
 */
export const PieChartExample: Story = {
	render: () => {
		const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

		const config: ChartConfig = {
			value: {
				label: "Traffic Source",
			},
		}

		return (
			<ChartContainer className="w-[400px]" config={config}>
				<PieChart>
					<Pie
						data={pieData}
						cx="50%"
						cy="50%"
						labelLine={false}
						outerRadius={80}
						fill="#8884d8"
						dataKey="value"
						label={({ name, percent }) =>
							`${name} ${(percent * 100).toFixed(0)}%`
						}
					>
						{pieData.map((_, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip content={<ChartTooltipContent />} />
				</PieChart>
			</ChartContainer>
		)
	},
}

/**
 * Area chart with comparison
 */
export const AreaChartExample: Story = {
	render: () => {
		const config: ChartConfig = {
			value: {
				label: "This Year",
				theme: {
					light: "#3b82f6",
					dark: "#60a5fa",
				},
			},
			previous: {
				label: "Last Year",
				theme: {
					light: "#9ca3af",
					dark: "#d1d5db",
				},
			},
		}

		return (
			<ChartContainer className="w-[600px]" config={config}>
				<AreaChart data={areaData}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip content={<ChartTooltipContent />} />
					<Area
						type="monotone"
						dataKey="previous"
						stackId="1"
						stroke="var(--color-previous)"
						fill="var(--color-previous)"
						fillOpacity={0.3}
					/>
					<Area
						type="monotone"
						dataKey="value"
						stackId="2"
						stroke="var(--color-value)"
						fill="var(--color-value)"
						fillOpacity={0.3}
					/>
				</AreaChart>
			</ChartContainer>
		)
	},
}

/**
 * Radar chart example
 */
export const RadarChartExample: Story = {
	render: () => {
		const config: ChartConfig = {
			A: {
				label: "Student A",
				theme: {
					light: "#3b82f6",
					dark: "#60a5fa",
				},
			},
			B: {
				label: "Student B",
				theme: {
					light: "#ef4444",
					dark: "#f87171",
				},
			},
		}

		return (
			<ChartContainer className="w-[500px]" config={config}>
				<RadarChart cx="50%" cy="50%" outerRadius={100} data={radarData}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis />
					<Radar
						name="Student A"
						dataKey="A"
						stroke="var(--color-A)"
						fill="var(--color-A)"
						fillOpacity={0.6}
					/>
					<Radar
						name="Student B"
						dataKey="B"
						stroke="var(--color-B)"
						fill="var(--color-B)"
						fillOpacity={0.6}
					/>
					<Legend />
					<Tooltip content={<ChartTooltipContent />} />
				</RadarChart>
			</ChartContainer>
		)
	},
}

/**
 * Interactive chart with date filters
 */
export const InteractiveChart: Story = {
	render: function InteractiveChartExample() {
		const [timeframe, setTimeframe] = useState<"week" | "month" | "year">(
			"month",
		)

		// Sample data that changes based on timeframe selection
		const weekData = [
			{ name: "Mon", value: 400, prev: 300 },
			{ name: "Tue", value: 300, prev: 400 },
			{ name: "Wed", value: 500, prev: 450 },
			{ name: "Thu", value: 400, prev: 300 },
			{ name: "Fri", value: 600, prev: 400 },
			{ name: "Sat", value: 500, prev: 350 },
			{ name: "Sun", value: 300, prev: 200 },
		]

		const monthData = [
			{ name: "Week 1", value: 1200, prev: 1000 },
			{ name: "Week 2", value: 1400, prev: 1100 },
			{ name: "Week 3", value: 1300, prev: 1400 },
			{ name: "Week 4", value: 1500, prev: 1300 },
		]

		const yearData = [
			{ name: "Jan", value: 5000, prev: 4000 },
			{ name: "Feb", value: 4800, prev: 3800 },
			{ name: "Mar", value: 5200, prev: 4200 },
			{ name: "Apr", value: 5500, prev: 4700 },
			{ name: "May", value: 5700, prev: 4900 },
			{ name: "Jun", value: 6000, prev: 5200 },
			{ name: "Jul", value: 6200, prev: 5000 },
			{ name: "Aug", value: 6400, prev: 5300 },
			{ name: "Sep", value: 6300, prev: 5400 },
			{ name: "Oct", value: 6500, prev: 5600 },
			{ name: "Nov", value: 6700, prev: 5800 },
			{ name: "Dec", value: 7000, prev: 6000 },
		]

		const chartData =
			timeframe === "week"
				? weekData
				: timeframe === "month"
				? monthData
				: yearData

		const config: ChartConfig = {
			value: {
				label: "This Period",
				icon: TrendingUp,
				theme: {
					light: "#3b82f6",
					dark: "#60a5fa",
				},
			},
			prev: {
				label: "Previous Period",
				icon: TrendingDown,
				theme: {
					light: "#9ca3af",
					dark: "#d1d5db",
				},
			},
		}

		return (
			<div className="w-[650px] space-y-4">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-semibold">Revenue Overview</h3>
					<div className="flex items-center gap-2">
						<Button
							variant={timeframe === "week" ? "default" : "outline"}
							size="sm"
							onClick={() => setTimeframe("week")}
						>
							Week
						</Button>
						<Button
							variant={timeframe === "month" ? "default" : "outline"}
							size="sm"
							onClick={() => setTimeframe("month")}
						>
							Month
						</Button>
						<Button
							variant={timeframe === "year" ? "default" : "outline"}
							size="sm"
							onClick={() => setTimeframe("year")}
						>
							Year
						</Button>
					</div>
				</div>

				<ChartContainer config={config}>
					<LineChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip content={<ChartTooltipContent />} />
						<Legend />
						<Line
							type="monotone"
							dataKey="prev"
							stroke="var(--color-prev)"
							strokeWidth={2}
							strokeDasharray="5 5"
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="value"
							stroke="var(--color-value)"
							strokeWidth={2}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ChartContainer>

				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-1 rounded-lg border p-4">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<Calendar className="h-4 w-4" />
							<span>Current Period</span>
						</div>
						<div className="text-2xl font-bold">
							$
							{chartData
								.reduce((sum, item) => sum + item.value, 0)
								.toLocaleString()}
						</div>
						<div className="flex items-center gap-1 text-sm text-green-500">
							<TrendingUp className="h-4 w-4" />
							<span>+12.5% from previous</span>
						</div>
					</div>

					<div className="space-y-1 rounded-lg border p-4">
						<div className="flex items-center gap-2 text-sm text-muted-foreground">
							<DollarSign className="h-4 w-4" />
							<span>Average Revenue</span>
						</div>
						<div className="text-2xl font-bold">
							$
							{Math.round(
								chartData.reduce((sum, item) => sum + item.value, 0) /
									chartData.length,
							).toLocaleString()}
						</div>
						<div className="flex items-center gap-1 text-sm text-muted-foreground">
							<span>
								Per{" "}
								{timeframe === "week"
									? "day"
									: timeframe === "month"
									? "week"
									: "month"}
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	},
}

/**
 * Responsive multi-chart dashboard
 */
export const DashboardLayout: Story = {
	render: () => {
		const salesConfig: ChartConfig = {
			value: {
				label: "Sales",
				theme: {
					light: "#3b82f6",
					dark: "#60a5fa",
				},
			},
		}

		const trafficConfig: ChartConfig = {
			Desktop: {
				label: "Desktop",
				theme: {
					light: "#10b981",
					dark: "#34d399",
				},
			},
			Mobile: {
				label: "Mobile",
				theme: {
					light: "#f59e0b",
					dark: "#fbbf24",
				},
			},
			Tablet: {
				label: "Tablet",
				theme: {
					light: "#8b5cf6",
					dark: "#a78bfa",
				},
			},
			Other: {
				label: "Other",
				theme: {
					light: "#f43f5e",
					dark: "#fb7185",
				},
			},
		}

		const COLORS = ["#10b981", "#f59e0b", "#8b5cf6", "#f43f5e"]

		return (
			<div className="w-[900px] space-y-6">
				<h2 className="text-xl font-bold">Analytics Dashboard</h2>

				<div className="grid grid-cols-2 gap-6">
					<div className="space-y-2">
						<h3 className="text-sm font-medium">Revenue Trend</h3>
						<div className="rounded-lg border p-4">
							<ChartContainer className="h-[250px]" config={salesConfig}>
								<LineChart data={lineData}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip content={<ChartTooltipContent />} />
									<Line
										type="monotone"
										dataKey="value"
										stroke="var(--color-value)"
										strokeWidth={2}
										dot={{ strokeWidth: 2 }}
										activeDot={{ r: 6 }}
									/>
								</LineChart>
							</ChartContainer>
						</div>
					</div>

					<div className="space-y-2">
						<h3 className="text-sm font-medium">Traffic Sources</h3>
						<div className="rounded-lg border p-4">
							<ChartContainer className="h-[250px]" config={trafficConfig}>
								<PieChart>
									<Pie
										data={pieData}
										cx="50%"
										cy="50%"
										labelLine={false}
										outerRadius={80}
										fill="#8884d8"
										dataKey="value"
										nameKey="name"
										label={({ name, percent }) =>
											`${name} ${(percent * 100).toFixed(0)}%`
										}
									>
										{pieData.map((_, index) => (
											<Cell
												key={`cell-${index}`}
												fill={COLORS[index % COLORS.length]}
											/>
										))}
									</Pie>
									<Tooltip content={<ChartTooltipContent />} />
									<Legend />
								</PieChart>
							</ChartContainer>
						</div>
					</div>

					<div className="col-span-2 space-y-2">
						<h3 className="text-sm font-medium">Quarterly Performance</h3>
						<div className="rounded-lg border p-4">
							<ChartContainer className="h-[250px]" config={salesConfig}>
								<BarChart data={barData}>
									<CartesianGrid strokeDasharray="3 3" vertical={false} />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip content={<ChartTooltipContent />} />
									<Bar
										dataKey="value"
										fill="var(--color-value)"
										radius={[4, 4, 0, 0]}
									/>
								</BarChart>
							</ChartContainer>
						</div>
					</div>
				</div>
			</div>
		)
	},
}
