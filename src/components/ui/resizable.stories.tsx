import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "./resizable"
import type { Meta, StoryObj } from "@storybook/react"
import {
	FileIcon,
	GanttChartIcon,
	ImageIcon,
	LayoutIcon,
	MusicIcon,
	PanelRightIcon,
	SidebarIcon,
	VideoIcon,
} from "lucide-react"

const meta: Meta<typeof ResizablePanelGroup> = {
	title: "shadcn/Resizable",
	component: ResizablePanelGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

/**
 * Basic horizontal resizable panel group
 */
export const Default: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="horizontal"
			className="min-h-[400px] max-w-[800px] rounded-lg border"
		>
			<ResizablePanel defaultSize={25}>
				<div className="flex h-full items-center justify-center p-6">
					<SidebarIcon className="h-6 w-6" />
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={75}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">Content</span>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
}

/**
 * Vertical resizable panel group
 */
export const Vertical: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="vertical"
			className="min-h-[400px] max-w-[800px] rounded-lg border"
		>
			<ResizablePanel defaultSize={25}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">Header</span>
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={60}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">Content</span>
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={15}>
				<div className="flex h-full items-center justify-center p-6">
					<span className="font-semibold">Footer</span>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
}

/**
 * Three panel layout with minimum panel sizes
 */
export const ThreePanels: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="horizontal"
			className="min-h-[400px] max-w-[1000px] rounded-lg border"
		>
			<ResizablePanel defaultSize={20} minSize={15}>
				<div className="flex h-full flex-col gap-4 p-6">
					<div className="flex h-8 items-center gap-2">
						<SidebarIcon className="h-5 w-5" />
						<span className="font-semibold">Navigation</span>
					</div>
					<div className="space-y-2">
						{["Dashboard", "Projects", "Tasks", "Calendar", "Settings"].map(
							item => (
								<div
									key={item}
									className="rounded-md px-2 py-1 hover:bg-accent cursor-pointer"
								>
									{item}
								</div>
							),
						)}
					</div>
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={60} minSize={30}>
				<div className="flex h-full flex-col">
					<div className="border-b p-4 font-semibold">Main Content</div>
					<div className="p-6">
						<p className="text-sm text-muted-foreground mb-4">
							Resizable panels allow users to customize the layout according to
							their needs. Drag the handles to resize each panel.
						</p>
						<div className="grid grid-cols-2 gap-4">
							{[
								{ icon: <FileIcon className="h-5 w-5" />, label: "Documents" },
								{ icon: <ImageIcon className="h-5 w-5" />, label: "Images" },
								{ icon: <VideoIcon className="h-5 w-5" />, label: "Videos" },
								{ icon: <MusicIcon className="h-5 w-5" />, label: "Music" },
							].map((item, i) => (
								<div
									key={i}
									className="flex items-center gap-3 rounded-md border p-3"
								>
									{item.icon}
									<span>{item.label}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={20} minSize={15}>
				<div className="flex h-full flex-col">
					<div className="border-b p-4 font-semibold">Details</div>
					<div className="p-4 text-sm text-muted-foreground">
						<p>Select an item to view details</p>
					</div>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
}

/**
 * Code editor inspired layout
 */
export const CodeEditorLayout: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="vertical"
			className="min-h-[500px] max-w-[900px] rounded-lg border"
		>
			<ResizablePanel defaultSize={70}>
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel defaultSize={25} minSize={15}>
						<div className="flex h-full flex-col">
							<div className="border-b bg-muted/50 p-2 text-sm font-medium">
								Explorer
							</div>
							<div className="p-2">
								<div className="space-y-1">
									{[
										{ name: "src", isFolder: true },
										{ name: "components", isFolder: true },
										{ name: "pages", isFolder: true },
										{ name: "index.tsx", isFolder: false },
										{ name: "package.json", isFolder: false },
									].map(item => (
										<div
											key={item.name}
											className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-accent cursor-pointer"
										>
											{item.isFolder ? (
												<FileIcon className="h-4 w-4" />
											) : (
												<FileIcon className="h-4 w-4" />
											)}
											<span className="text-sm">{item.name}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel defaultSize={75}>
						<div className="flex h-full flex-col">
							<div className="border-b bg-muted/50 p-2 text-sm font-medium">
								index.tsx
							</div>
							<div className="p-4 font-mono text-sm">
								<pre className="text-muted-foreground">
									{`import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>
      <div className="text-4xl mb-4">{count}</div>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  )
}`}
								</pre>
							</div>
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel defaultSize={30} minSize={20}>
				<div className="flex h-full flex-col">
					<div className="border-b bg-muted/50 p-2 text-sm font-medium">
						Terminal
					</div>
					<div className="p-4">
						<div className="font-mono text-sm text-muted-foreground">
							$ npm run dev
							<br />
							<span className="text-green-500">Ready in 500ms</span>
							<br />
							○ Compiled successfully
							<br />○ Listening on http://localhost:3000
						</div>
					</div>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
}

/**
 * Dashboard layout with resizable panels
 */
export const DashboardLayout: Story = {
	render: () => (
		<ResizablePanelGroup
			direction="horizontal"
			className="min-h-[500px] max-w-[1200px] rounded-lg border"
		>
			<ResizablePanel defaultSize={15} minSize={10}>
				<div className="flex h-full flex-col bg-muted/10">
					<div className="p-4 text-center">
						<LayoutIcon className="h-5 w-5 mx-auto mb-1" />
						<div className="text-sm font-medium">Dashboard</div>
					</div>
					<div className="space-y-4 p-4">
						{[
							{ icon: <SidebarIcon className="h-4 w-4" />, label: "Overview" },
							{
								icon: <GanttChartIcon className="h-4 w-4" />,
								label: "Analytics",
							},
							{
								icon: <PanelRightIcon className="h-4 w-4" />,
								label: "Reports",
							},
						].map((item, i) => (
							<div
								key={i}
								className="flex items-center justify-center flex-col gap-1 py-2 rounded-md hover:bg-accent cursor-pointer"
							>
								{item.icon}
								<span className="text-xs">{item.label}</span>
							</div>
						))}
					</div>
				</div>
			</ResizablePanel>
			<ResizableHandle />
			<ResizablePanel defaultSize={85}>
				<div className="flex h-full flex-col">
					<div className="border-b p-4 font-semibold">Analytics Dashboard</div>
					<div className="grid grid-cols-3 gap-4 p-4">
						{[
							{ title: "Total Users", value: "12,345", trend: "+12%" },
							{ title: "Active Sessions", value: "1,234", trend: "+5%" },
							{ title: "Revenue", value: "$12,345", trend: "+18%" },
						].map((card, i) => (
							<div key={i} className="rounded-lg border p-4">
								<div className="text-sm font-medium text-muted-foreground">
									{card.title}
								</div>
								<div className="mt-2 flex items-end justify-between">
									<div className="text-2xl font-bold">{card.value}</div>
									<div className="text-sm text-green-500">{card.trend}</div>
								</div>
							</div>
						))}
					</div>
					<div className="grid grid-cols-2 gap-4 p-4">
						<div className="rounded-lg border p-4">
							<div className="font-medium mb-4">Activity Chart</div>
							<div className="h-[200px] flex items-end gap-1">
								{Array.from({ length: 12 }).map((_, i) => (
									<div
										key={i}
										className="bg-primary/80 w-full rounded-sm"
										style={{ height: `${Math.random() * 100 + 20}px` }}
									/>
								))}
							</div>
							<div className="mt-2 flex justify-between text-xs text-muted-foreground">
								<div>Jan</div>
								<div>Dec</div>
							</div>
						</div>
						<div className="rounded-lg border p-4">
							<div className="font-medium mb-4">Recent Activity</div>
							<div className="space-y-4">
								{Array.from({ length: 4 }).map((_, i) => (
									<div key={i} className="flex items-center gap-3">
										<div className="size-8 rounded-full bg-muted flex items-center justify-center">
											{i % 2 === 0 ? (
												<FileIcon className="h-4 w-4" />
											) : (
												<ImageIcon className="h-4 w-4" />
											)}
										</div>
										<div>
											<div className="text-sm">
												User {i + 1}{" "}
												{i % 2 === 0
													? "updated a document"
													: "uploaded an image"}
											</div>
											<div className="text-xs text-muted-foreground">
												{i + 1} hour{i !== 0 ? "s" : ""} ago
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</ResizablePanel>
		</ResizablePanelGroup>
	),
}
