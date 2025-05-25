import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/ThemeProvider"
import { SidebarMenuButton } from "@/components/ui/sidebar"

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<SidebarMenuButton
			variant="outline"
			size="sm"
			className="w-full justify-start gap-2"
			onClick={() => toggleTheme()}
		>
			{theme === "dark" ? (
				<Moon className="size-4" />
			) : (
				<Sun className="size-4" />
			)}
			<span className="text-sm">
				{theme === "dark" ? "Dark" : "Light"} Mode
			</span>
		</SidebarMenuButton>
	)
}
