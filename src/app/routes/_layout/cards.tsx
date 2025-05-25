import { createFileRoute } from "@tanstack/react-router"

import { CardsPage } from "@/app/pages/cards"

export const Route = createFileRoute("/_layout/cards")({
	component: CardsPage,
})
