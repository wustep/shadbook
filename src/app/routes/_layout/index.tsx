import { createFileRoute } from "@tanstack/react-router"

import { DashboardPage } from "@/app/pages/dashboard"

export const Route = createFileRoute("/_layout/")({
	component: DashboardPage,
})
