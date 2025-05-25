import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router"

import { ExperimentsPage } from "@/app/pages/experiments"

function ExperimentsLayout() {
	// Check if we're on a child route
	const location = useLocation()
	const isChildRoute = location.pathname !== "/experiments"

	// If we're on a child route, render the outlet
	// Otherwise, render the experiments list page
	return isChildRoute ? <Outlet /> : <ExperimentsPage />
}

export const Route = createFileRoute("/_layout/experiments")({
	component: ExperimentsLayout,
})
