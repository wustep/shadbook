import {
	Breadcrumb,
	BreadcrumbEllipsis,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./breadcrumb"
import type { Meta, StoryObj } from "@storybook/react"
import {
	ChevronLast,
	FileText,
	FolderOpen,
	Home,
	Settings,
	User,
} from "lucide-react"

const meta: Meta<typeof Breadcrumb> = {
	title: "Components/Breadcrumb",
	component: Breadcrumb,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

/**
 * Basic breadcrumb with default styling
 */
export const Default: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Profile</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * Breadcrumb with icons
 */
export const WithIcons: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/" className="flex items-center gap-1">
						<Home className="h-3.5 w-3.5" />
						<span>Home</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings" className="flex items-center gap-1">
						<Settings className="h-3.5 w-3.5" />
						<span>Settings</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="flex items-center gap-1">
						<User className="h-3.5 w-3.5" />
						<span>Profile</span>
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * Breadcrumb with custom separator
 */
export const CustomSeparator: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<ChevronLast className="h-3.5 w-3.5" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<ChevronLast className="h-3.5 w-3.5" />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage>Projects</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * Breadcrumb with truncated middle sections using ellipsis
 */
export const WithEllipsis: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbEllipsis />
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/documents/projects">Projects</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Annual Report</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * Many levels of breadcrumbs with responsive design
 */
export const ManyLevels: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList className="flex-wrap">
				<BreadcrumbItem className="hidden sm:inline-flex">
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden sm:inline-flex" />
				<BreadcrumbItem className="hidden md:inline-flex">
					<BreadcrumbLink href="/documents">Documents</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden md:inline-flex" />
				<BreadcrumbItem className="hidden md:inline-flex">
					<BreadcrumbLink href="/documents/projects">Projects</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden md:inline-flex" />
				<BreadcrumbItem className="hidden lg:inline-flex">
					<BreadcrumbLink href="/documents/projects/2023">2023</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden lg:inline-flex" />
				<BreadcrumbItem className="hidden lg:inline-flex">
					<BreadcrumbLink href="/documents/projects/2023/q4">Q4</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="hidden lg:inline-flex" />
				<BreadcrumbItem>
					<BreadcrumbPage>Annual Report</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * File system-like breadcrumbs with folder icons
 */
export const FileSystem: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/" className="flex items-center gap-1">
						<Home className="h-3.5 w-3.5" />
						<span>Home</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/documents" className="flex items-center gap-1">
						<FolderOpen className="h-3.5 w-3.5" />
						<span>Documents</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink
						href="/documents/projects"
						className="flex items-center gap-1"
					>
						<FolderOpen className="h-3.5 w-3.5" />
						<span>Projects</span>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="flex items-center gap-1">
						<FileText className="h-3.5 w-3.5" />
						<span>report.pdf</span>
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * Styled breadcrumb with background and hover effects
 */
export const Styled: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList className="bg-muted/50 p-2 rounded-md">
				<BreadcrumbItem>
					<BreadcrumbLink
						href="/"
						className="px-2 py-1 rounded-md hover:bg-muted transition-colors"
					>
						Home
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink
						href="/settings"
						className="px-2 py-1 rounded-md hover:bg-muted transition-colors"
					>
						Settings
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage className="px-2 py-1 rounded-md bg-primary text-primary-foreground">
						Profile
					</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}

/**
 * Small and compact breadcrumb
 */
export const Compact: Story = {
	render: () => (
		<Breadcrumb>
			<BreadcrumbList className="text-xs">
				<BreadcrumbItem>
					<BreadcrumbLink href="/">
						<Home className="h-3 w-3" />
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="[&>svg]:size-3" />
				<BreadcrumbItem>
					<BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator className="[&>svg]:size-3" />
				<BreadcrumbItem>
					<BreadcrumbPage>Profile</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	),
}
