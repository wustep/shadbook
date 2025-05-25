import { ChartAreaInteractive } from "@/storybook/app/charts/charts"
import { DataTable } from "@/storybook/app/registry/blocks/dashboard-01/components/data-table"
import { SectionCards } from "@/storybook/app/registry/blocks/dashboard-01/components/section-cards"
import data from "@/storybook/app/registry/blocks/dashboard-01/data.json"

export function DashboardPage() {
	return (
		<div className="@container/main py-4">
			<div className="px-6" />
			<SectionCards />
			<div className="p-6">
				<ChartAreaInteractive />
			</div>
			<DataTable data={data} />
		</div>
	)
}
