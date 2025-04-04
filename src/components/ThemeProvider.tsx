import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
	children: React.ReactNode
	defaultTheme?: Theme
	storageKey?: string
}

type ThemeProviderState = {
	theme: Theme
	setTheme: (theme: Theme, persist?: boolean) => void
	toggleTheme: (persist?: boolean) => void
}

const initialState: ThemeProviderState = {
	theme: "system",
	setTheme: () => null,
	toggleTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
	children,
	defaultTheme = "system",
	storageKey = "vite-ui-theme",
	...props
}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(
		() => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
	)
	const root = window.document.documentElement

	useEffect(() => {
		// First mount -> set theme based on system preference
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
		const matches = mediaQuery.matches
		const persistedTheme =
			(localStorage.getItem(storageKey) as Theme) ?? "system"
		if (persistedTheme === "dark" || persistedTheme === "light") {
			setTheme(persistedTheme)
			root.classList.remove("light", "dark")
			root.classList.add(persistedTheme)
		} else {
			setTheme(matches ? "dark" : "light")
			root.classList.remove("light", "dark")
			root.classList.add(matches ? "dark" : "light")
		}

		// Subsequent system theme updates -> update theme if not explicitly set
		const updateTheme = (e: MediaQueryListEvent) => {
			const persistedTheme =
				(localStorage.getItem(storageKey) as Theme) ?? "system"
			if (persistedTheme !== "light" && persistedTheme !== "dark") {
				const newTheme = e.matches ? "dark" : "light"
				root.classList.remove("light", "dark")
				root.classList.add(newTheme)
				setTheme(newTheme)
			}
		}
		mediaQuery.addEventListener("change", updateTheme)
		return () => mediaQuery.removeEventListener("change", updateTheme)
	}, [root, storageKey])

	const value = useMemo(
		() => ({
			theme,
			setTheme: (theme: Theme, persist?: boolean) => {
				if (persist) {
					localStorage.setItem(storageKey, theme)
				}
				setTheme(theme)
				root.classList.remove("light", "dark")
				root.classList.add(theme)
			},
			toggleTheme: (persist?: boolean) => {
				if (persist) {
					localStorage.setItem(storageKey, theme === "dark" ? "light" : "dark")
				}
				const newTheme = theme === "dark" ? "light" : "dark"
				setTheme(newTheme)
				root.classList.remove("light", "dark")
				root.classList.add(newTheme)
			},
		}),
		[theme, root, storageKey],
	)

	return (
		<ThemeProviderContext.Provider {...props} value={value}>
			{children}
		</ThemeProviderContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeProviderContext)

	if (context === undefined)
		throw new Error("useTheme must be used within a ThemeProvider")

	return context
}
