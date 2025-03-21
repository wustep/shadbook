import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./pagination"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Pagination> = {
	title: "shadcn/Pagination",
	component: Pagination,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Pagination>

/**
 * Default pagination with page numbers
 */
export const Default: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
}

/**
 * Pagination with current page indicator
 */
export const WithActivePage: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
}

/**
 * Longer pagination with ellipses
 */
export const WithEllipsis: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">4</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						5
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">6</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">10</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
}

/**
 * Pagination with only next and previous buttons
 */
export const NextPreviousOnly: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
}

/**
 * Pagination with disabled state
 */
export const WithDisabledControls: Story = {
	render: () => (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						className="pointer-events-none opacity-50"
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
}

/**
 * Compact mobile pagination
 */
export const MobileView: Story = {
	render: () => (
		<div className="w-[300px]">
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#" isActive>
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	),
}

/**
 * Custom styled pagination
 */
export const CustomStyling: Story = {
	render: () => (
		<Pagination className="bg-muted p-4 rounded-lg">
			<PaginationContent className="gap-2">
				<PaginationItem>
					<PaginationPrevious
						href="#"
						className="bg-primary text-primary-foreground hover:bg-primary/90"
					/>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" className="bg-accent text-accent-foreground">
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" isActive className="border-primary">
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#" className="bg-accent text-accent-foreground">
						3
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						href="#"
						className="bg-primary text-primary-foreground hover:bg-primary/90"
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	),
}
