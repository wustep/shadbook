import { createFileRoute } from "@tanstack/react-router"
import type { CSSProperties } from "react"

import { PhysicsPlayground } from "@/app/pages/experiments/physics-playground"
import { SidebarProvider } from "@/components/ui/sidebar"

const iframeLayoutVars = {
	"--sidebar-width": "0px",
	"--header-height": "0px",
} as CSSProperties

function PhysicsStandaloneRoute() {
	return (
		<div className="min-h-dvh w-full bg-background text-foreground">
			<SidebarProvider className="min-h-dvh w-full" style={iframeLayoutVars}>
				<div className="flex min-h-dvh flex-col gap-4 p-4 md:p-6 w-full">
					<PhysicsPlayground />
				</div>
			</SidebarProvider>
		</div>
	)
}

export const Route = createFileRoute("/physics")({
	component: PhysicsStandaloneRoute,
})
