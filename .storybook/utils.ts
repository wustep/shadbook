import { useEffect, useRef } from "react"

export const getStoredTheme = () => {
	try {
		return localStorage.getItem("sb-theme") || "neutral"
	} catch {
		return "neutral"
	}
}

export const getStoredMode = () => {
	try {
		return localStorage.getItem("sb-mode") || "light"
	} catch {
		return "light"
	}
}

export const updateMode = (mode: string) => {
	// Store preferences
	try {
		localStorage.setItem("sb-mode", mode)
	} catch {
		// Ignore storage errors
	}

	// Dark mode toggle
	if (mode === "dark") {
		document.documentElement.classList.add("dark")
		document.body.classList.add("dark")
	} else {
		document.documentElement.classList.remove("dark")
		document.body.classList.remove("dark")
	}
}

export const updateTheme = (theme: string) => {
	try {
		localStorage.setItem("sb-theme", theme)
	} catch {
		// Ignore storage errors
	}

	// Neutral is the default.
	document.documentElement.classList.remove(
		"theme-gray",
		"theme-slate",
		"theme-stone",
		"theme-zinc",
	)
	if (theme !== "neutral") {
		document.documentElement.classList.add(`theme-${theme}`)
	}
}

// Source: https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
export function usePrevious<T>(value: T): T | undefined {
	const ref = useRef<T>(undefined)
	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}
