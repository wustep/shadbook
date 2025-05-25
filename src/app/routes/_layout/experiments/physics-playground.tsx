import { createFileRoute } from "@tanstack/react-router"

import { PhysicsPlayground } from "@/app/pages/experiments/physics-playground"

export const Route = createFileRoute("/_layout/experiments/physics-playground")(
	{
		component: PhysicsPlayground,
	},
)
