import { useLocation } from "@tanstack/react-router"

import { pageConfig, type PagePath } from "@/app/config/pages"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function AppContentHeader() {
	const location = useLocation()
	const currentPath = location.pathname

	// Map actual pathnames to layout route keys
	const getLayoutPath = (path: string): PagePath => {
		if (path === "/") return "/_layout"
		// Check if it's a nested route under experiments
		if (path.startsWith("/experiments/")) return "/_layout/experiments"
		// Otherwise, use the first segment
		const firstSegment = path.split("/")[1]
		return `/_layout/${firstSegment}` as PagePath
	}

	const layoutPath = getLayoutPath(currentPath)
	const currentPage = pageConfig[layoutPath] || pageConfig["/_layout"]
	const IconComponent = currentPage.icon

	// For nested routes, show a more specific title
	let title: string = currentPage.title
	if (currentPath === "/experiments/physics-playground") {
		title = "Physics Playground"
	}

	return (
		<header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
			<div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
				<SidebarTrigger className="-ml-1" />
				<Separator
					orientation="vertical"
					className="mx-1 data-[orientation=vertical]:h-4"
				/>
				<h1 className="text-sm font-medium flex items-center">
					<IconComponent className="mr-2 size-4" />
					{title}
				</h1>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" asChild size="sm" className="hidden sm:flex">
						<a
							href="https://shadbook.vercel.app"
							rel="noopener noreferrer"
							target="_blank"
							className="dark:text-foreground"
						>
							Storybook
						</a>
					</Button>
					<Button variant="ghost" asChild size="sm" className="hidden sm:flex">
						<a
							href="https://github.com/wustep/shadbook"
							rel="noopener noreferrer"
							target="_blank"
							className="dark:text-foreground"
						>
							GitHub
						</a>
					</Button>
				</div>
			</div>
		</header>
	)
}
