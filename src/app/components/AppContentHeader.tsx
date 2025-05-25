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
		return `/_layout${path}` as PagePath
	}

	const layoutPath = getLayoutPath(currentPath)
	const currentPage = pageConfig[layoutPath] || pageConfig["/_layout"]
	const IconComponent = currentPage.icon

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
					{currentPage.title}
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
