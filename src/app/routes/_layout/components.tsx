import { createFileRoute } from "@tanstack/react-router"

import { ComponentsPage } from "@/app/pages/components"

export const Route = createFileRoute("/_layout/components")({
	component: ComponentsPage,
})
