import data from "./data.json"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/storybook/app/registry/blocks/dashboard-01/components/app-sidebar"
import { ChartAreaInteractive } from "@/storybook/app/registry/blocks/dashboard-01/components/chart-area-interactive"
import { DataTable } from "@/storybook/app/registry/blocks/dashboard-01/components/data-table"
import { SectionCards } from "@/storybook/app/registry/blocks/dashboard-01/components/section-cards"
import { SiteHeader } from "@/storybook/app/registry/blocks/dashboard-01/components/site-header"


export function Page() {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<SectionCards />
							<div className="px-4 lg:px-6">
								<ChartAreaInteractive />
							</div>
							<DataTable data={data} />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
