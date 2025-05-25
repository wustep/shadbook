import { createFileRoute } from "@tanstack/react-router"

import { ExperimentsPage } from "@/app/pages/experiments"

export const Route = createFileRoute("/_layout/experiments")({
	component: ExperimentsPage,
})
