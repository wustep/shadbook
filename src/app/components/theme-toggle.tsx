import { useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button className="w-full" onClick={() => toggleTheme()}>
			Toggle Theme: {theme}
		</Button>
	)
}
