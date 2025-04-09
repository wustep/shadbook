import { Badge } from "./badge"
import { Button } from "./button"
import { Checkbox } from "./checkbox"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./dropdown-menu"
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "./table"
import type { Meta, StoryObj } from "@storybook/react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { useState } from "react"

const meta: Meta<typeof Table> = {
	title: "Components/Table",
	component: Table,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Table>

/**
 * Basic table with simple data
 */
export const Default: Story = {
	render: () => (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell>PayPal</TableCell>
					<TableCell className="text-right">$125.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV003</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Bank Transfer</TableCell>
					<TableCell className="text-right">$5,000.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV004</TableCell>
					<TableCell>Cancelled</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV005</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>PayPal</TableCell>
					<TableCell className="text-right">$350.00</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$5,875.00</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
}

/**
 * Table with status badges
 */
export const WithBadges: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>
						<Badge variant="default">Paid</Badge>
					</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>
						<Badge variant="secondary">Pending</Badge>
					</TableCell>
					<TableCell>PayPal</TableCell>
					<TableCell className="text-right">$125.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV003</TableCell>
					<TableCell>
						<Badge variant="default">Paid</Badge>
					</TableCell>
					<TableCell>Bank Transfer</TableCell>
					<TableCell className="text-right">$5,000.00</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="font-medium">INV004</TableCell>
					<TableCell>
						<Badge variant="destructive">Cancelled</Badge>
					</TableCell>
					<TableCell>Credit Card</TableCell>
					<TableCell className="text-right">$150.00</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
}

/**
 * Table with row selection
 */
export const WithRowSelection: Story = {
	render: function Render() {
		const [selectedRows, setSelectedRows] = useState<string[]>([])

		const invoices = [
			{
				id: "INV001",
				status: "Paid",
				method: "Credit Card",
				amount: "$250.00",
			},
			{ id: "INV002", status: "Pending", method: "PayPal", amount: "$125.00" },
			{
				id: "INV003",
				status: "Paid",
				method: "Bank Transfer",
				amount: "$5,000.00",
			},
			{
				id: "INV004",
				status: "Cancelled",
				method: "Credit Card",
				amount: "$150.00",
			},
			{ id: "INV005", status: "Paid", method: "PayPal", amount: "$350.00" },
		]

		const toggleRow = (id: string) => {
			setSelectedRows(prev =>
				prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id],
			)
		}

		const toggleAll = () => {
			setSelectedRows(prev =>
				prev.length === invoices.length
					? []
					: invoices.map(invoice => invoice.id),
			)
		}

		return (
			<div className="w-full">
				<div className="flex items-center justify-between pb-4">
					<div>
						<h3 className="text-lg font-medium">Invoices</h3>
						<p className="text-sm text-muted-foreground">
							{selectedRows.length} of {invoices.length} row(s) selected
						</p>
					</div>
					{selectedRows.length > 0 && (
						<Button variant="destructive" size="sm">
							Delete Selected
						</Button>
					)}
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[50px]">
								<Checkbox
									checked={selectedRows.length === invoices.length}
									onCheckedChange={toggleAll}
									aria-label="Select all"
								/>
							</TableHead>
							<TableHead>Invoice</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Method</TableHead>
							<TableHead className="text-right">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{invoices.map(invoice => (
							<TableRow
								key={invoice.id}
								data-state={
									selectedRows.includes(invoice.id) ? "selected" : undefined
								}
							>
								<TableCell>
									<Checkbox
										checked={selectedRows.includes(invoice.id)}
										onCheckedChange={() => toggleRow(invoice.id)}
										aria-label={`Select invoice ${invoice.id}`}
									/>
								</TableCell>
								<TableCell className="font-medium">{invoice.id}</TableCell>
								<TableCell>{invoice.status}</TableCell>
								<TableCell>{invoice.method}</TableCell>
								<TableCell className="text-right">{invoice.amount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		)
	},
}

/**
 * Table with row actions
 */
export const WithRowActions: Story = {
	render: () => (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Invoice</TableHead>
					<TableHead>Status</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right">Amount</TableHead>
					<TableHead className="w-[50px]"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{[
					{
						id: "INV001",
						status: "Paid",
						method: "Credit Card",
						amount: "$250.00",
					},
					{
						id: "INV002",
						status: "Pending",
						method: "PayPal",
						amount: "$125.00",
					},
					{
						id: "INV003",
						status: "Paid",
						method: "Bank Transfer",
						amount: "$5,000.00",
					},
				].map(invoice => (
					<TableRow key={invoice.id}>
						<TableCell className="font-medium">{invoice.id}</TableCell>
						<TableCell>{invoice.status}</TableCell>
						<TableCell>{invoice.method}</TableCell>
						<TableCell className="text-right">{invoice.amount}</TableCell>
						<TableCell>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon" className="h-8 w-8 p-0">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Open menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuLabel>Actions</DropdownMenuLabel>
									<DropdownMenuItem>View details</DropdownMenuItem>
									<DropdownMenuItem>View payment</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem>Download PDF</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
}

/**
 * Table with sortable columns
 */
export const SortableColumns: Story = {
	render: function Render() {
		const [sorting, setSorting] = useState<{
			column: string | null
			direction: "asc" | "desc" | null
		}>({ column: null, direction: null })

		const invoices = [
			{ id: "INV001", date: "2023-01-15", status: "Paid", amount: 250 },
			{ id: "INV002", date: "2023-02-28", status: "Pending", amount: 125 },
			{ id: "INV003", date: "2023-01-05", status: "Paid", amount: 5000 },
			{ id: "INV004", date: "2023-03-10", status: "Cancelled", amount: 150 },
			{ id: "INV005", date: "2023-02-01", status: "Paid", amount: 350 },
		]

		const sortData = (data: typeof invoices) => {
			if (!sorting.column) return data

			return [...data].sort((a, b) => {
				const aValue = a[sorting.column as keyof typeof a]
				const bValue = b[sorting.column as keyof typeof b]

				if (sorting.direction === "asc") {
					return aValue < bValue ? -1 : aValue > bValue ? 1 : 0
				} else {
					return aValue > bValue ? -1 : aValue < bValue ? 1 : 0
				}
			})
		}

		const sortedData = sortData(invoices)

		const handleSort = (column: string) => {
			setSorting(prev => ({
				column,
				direction:
					prev.column === column
						? prev.direction === "asc"
							? "desc"
							: "asc"
						: "asc",
			}))
		}

		const SortableHeader = ({
			column,
			children,
		}: {
			column: string
			children: React.ReactNode
		}) => (
			<TableHead>
				<Button
					variant="ghost"
					onClick={() => handleSort(column)}
					className="p-0 h-auto font-medium"
				>
					{children}
					<ArrowUpDown className="ml-1 h-4 w-4" />
					{sorting.column === column && (
						<span className="sr-only">
							{sorting.direction === "asc"
								? "sorted ascending"
								: "sorted descending"}
						</span>
					)}
				</Button>
			</TableHead>
		)

		return (
			<Table>
				<TableHeader>
					<TableRow>
						<SortableHeader column="id">Invoice</SortableHeader>
						<SortableHeader column="date">Date</SortableHeader>
						<SortableHeader column="status">Status</SortableHeader>
						<SortableHeader column="amount">Amount</SortableHeader>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sortedData.map(invoice => (
						<TableRow key={invoice.id}>
							<TableCell className="font-medium">{invoice.id}</TableCell>
							<TableCell>{invoice.date}</TableCell>
							<TableCell>{invoice.status}</TableCell>
							<TableCell>${invoice.amount.toFixed(2)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		)
	},
}

/**
 * Custom styled table
 */
export const CustomStyled: Story = {
	render: () => (
		<Table>
			<TableHeader className="bg-blue-50 dark:bg-blue-950">
				<TableRow className="border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900">
					<TableHead className="text-blue-700 dark:text-blue-300">
						Invoice
					</TableHead>
					<TableHead className="text-blue-700 dark:text-blue-300">
						Status
					</TableHead>
					<TableHead className="text-blue-700 dark:text-blue-300">
						Date
					</TableHead>
					<TableHead className="text-blue-700 dark:text-blue-300 text-right">
						Amount
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow className="border-blue-100 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/50">
					<TableCell className="font-medium">INV001</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Jan 15, 2023</TableCell>
					<TableCell className="text-right">$250.00</TableCell>
				</TableRow>
				<TableRow className="border-blue-100 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/50">
					<TableCell className="font-medium">INV002</TableCell>
					<TableCell>Pending</TableCell>
					<TableCell>Feb 28, 2023</TableCell>
					<TableCell className="text-right">$125.00</TableCell>
				</TableRow>
				<TableRow className="border-blue-100 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/50">
					<TableCell className="font-medium">INV003</TableCell>
					<TableCell>Paid</TableCell>
					<TableCell>Mar 10, 2023</TableCell>
					<TableCell className="text-right">$5,000.00</TableCell>
				</TableRow>
			</TableBody>
			<TableFooter className="bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
				<TableRow className="hover:bg-blue-100 dark:hover:bg-blue-900">
					<TableCell colSpan={3} className="text-blue-700 dark:text-blue-300">
						Total
					</TableCell>
					<TableCell className="text-right text-blue-700 dark:text-blue-300">
						$5,375.00
					</TableCell>
				</TableRow>
			</TableFooter>
		</Table>
	),
}
