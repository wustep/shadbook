import { AppSidebar } from "@/app/components/app-sidebar"
import { SiteHeader } from "@/app/components/site-header"
import Dashboard from "@/app/Dashboard"
import { ThemeProvider } from "@/components/ThemeProvider"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export function App() {
	return (
		<ThemeProvider>
			<SidebarProvider>
				<AppSidebar variant="inset" />
				<SidebarInset>
					<SiteHeader />
					<Dashboard />
				</SidebarInset>
			</SidebarProvider>
		</ThemeProvider>
	)
}
