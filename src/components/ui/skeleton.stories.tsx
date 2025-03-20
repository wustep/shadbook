import { Skeleton } from "./skeleton"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Skeleton> = {
	title: "shadcn/Skeleton",
	component: Skeleton,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Skeleton>

/**
 * Basic skeleton with default styling
 */
export const Default: Story = {
	render: () => <Skeleton className="h-4 w-40" />,
}

/**
 * Common skeleton shapes for different UI elements
 */
export const CommonShapes: Story = {
	render: () => (
		<div className="space-y-5">
			<Skeleton className="h-4 w-[250px]" />
			<Skeleton className="h-4 w-[200px]" />
			<Skeleton className="h-4 w-[150px]" />
			<Skeleton className="h-10 w-[250px]" />
			<Skeleton className="h-20 w-20 rounded-full" />
		</div>
	),
}

/**
 * Card skeleton loading state
 */
export const CardSkeleton: Story = {
	render: () => (
		<div className="flex flex-col space-y-3">
			<Skeleton className="h-[125px] w-[250px] rounded-xl" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	),
}

/**
 * Profile skeleton loading state
 */
export const ProfileSkeleton: Story = {
	render: () => (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[150px]" />
				<Skeleton className="h-4 w-[100px]" />
			</div>
		</div>
	),
}

/**
 * Table skeleton loading state
 */
export const TableSkeleton: Story = {
	render: () => (
		<div className="w-[600px] space-y-4">
			<div className="flex items-center space-x-4">
				<Skeleton className="h-8 w-[100px]" />
				<Skeleton className="h-8 w-[100px]" />
				<Skeleton className="h-8 w-[100px]" />
				<Skeleton className="h-8 w-[100px]" />
			</div>
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
		</div>
	),
}

/**
 * Dashboard skeleton loading state
 */
export const DashboardSkeleton: Story = {
	render: () => (
		<div className="grid w-[800px] gap-6 p-5 md:grid-cols-2 lg:grid-cols-4">
			<Skeleton className="h-[120px] rounded-lg" />
			<Skeleton className="h-[120px] rounded-lg" />
			<Skeleton className="h-[120px] rounded-lg" />
			<Skeleton className="h-[120px] rounded-lg" />
			<div className="md:col-span-2 lg:col-span-4">
				<Skeleton className="h-[200px] rounded-lg" />
			</div>
			<div className="md:col-span-2">
				<Skeleton className="h-[200px] rounded-lg" />
			</div>
			<div className="md:col-span-2">
				<Skeleton className="h-[200px] rounded-lg" />
			</div>
		</div>
	),
}

/**
 * Chat interface skeleton loading state
 */
export const ChatSkeleton: Story = {
	render: () => (
		<div className="w-[350px] space-y-4">
			<div className="flex justify-start">
				<div className="flex items-start space-x-2">
					<Skeleton className="h-8 w-8 rounded-full" />
					<Skeleton className="h-14 w-[200px] rounded-2xl" />
				</div>
			</div>
			<div className="flex justify-end">
				<Skeleton className="h-10 w-[180px] rounded-2xl" />
			</div>
			<div className="flex justify-start">
				<div className="flex items-start space-x-2">
					<Skeleton className="h-8 w-8 rounded-full" />
					<Skeleton className="h-20 w-[240px] rounded-2xl" />
				</div>
			</div>
			<div className="flex justify-end">
				<Skeleton className="h-12 w-[220px] rounded-2xl" />
			</div>
			<div className="mt-4">
				<Skeleton className="h-10 w-full rounded-full" />
			</div>
		</div>
	),
}

/**
 * Custom styled skeleton with different animation duration
 */
export const CustomStyled: Story = {
	render: () => (
		<div className="space-y-4">
			<Skeleton className="h-8 w-[200px] bg-blue-100/50 dark:bg-blue-800/50" />
			<Skeleton className="h-8 w-[150px] bg-blue-100/50 dark:bg-blue-800/50" />
			<Skeleton className="h-8 w-[180px] bg-blue-100/50 dark:bg-blue-800/50" />
		</div>
	),
}
