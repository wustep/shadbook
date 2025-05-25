import { createFileRoute, Outlet } from "@tanstack/react-router"

import { AppContentHeader } from "@/app/components/AppContentHeader"
import { AppSidebar } from "@/app/components/AppSidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export const Route = createFileRoute("/_layout")({
	component: Layout,
})

function Layout() {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AppSidebar />
			<SidebarInset>
				<AppContentHeader />
				<div className="flex flex-col gap-4">
					<Outlet />
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
