import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"

import "@/styles/globals.css"
import "./storybook-theme.css" // Import Storybook theme helper styles

// Get stored preferences or use defaults
const getStoredTheme = () => {
	try {
		return localStorage.getItem("sb-theme") || "neutral"
	} catch {
		return "neutral"
	}
}

const getStoredMode = () => {
	try {
		return localStorage.getItem("sb-mode") || "light"
	} catch {
		return "light"
	}
}

// Function to update themes that will be called by the decorator
const updateTheme = (theme: string, darkMode: string) => {
	// Store preferences
	try {
		localStorage.setItem("sb-theme", theme)
		localStorage.setItem("sb-mode", darkMode)
	} catch {
		// Ignore storage errors
	}

	// Always add the CSS for the selected theme
	const link = document.createElement("link")
	link.setAttribute("rel", "stylesheet")
	link.setAttribute("type", "text/css")
	link.setAttribute("href", `/src/styles/${theme}.css`)
	document.head.appendChild(link)

	// Dark mode toggle
	if (darkMode === "dark") {
		document.documentElement.classList.add("dark")
		document.body.classList.add("dark")

		// Also update the preview wrapper if it exists
		const previewWrapper = document.getElementById("sbdocs-preview")
		if (previewWrapper) {
			previewWrapper.style.backgroundColor = "var(--background)"
		}
	} else {
		document.documentElement.classList.remove("dark")
		document.body.classList.remove("dark")

		// Also update the preview wrapper if it exists
		const previewWrapper = document.getElementById("sbdocs-preview")
		if (previewWrapper) {
			previewWrapper.style.backgroundColor = "var(--background)"
		}
	}
}

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: { disable: true }, // Disable Storybook's background addon
		chromatic: { disable: true },
		docs: {
			theme: themes.light,
		},
	},
	decorators: [
		(Story, context) => {
			const { theme, darkMode } = context.globals
			updateTheme(theme ?? "neutral", darkMode ?? "light")
			return Story()
		},
	],
	globalTypes: {
		theme: {
			name: "Theme",
			description: "Color theme",
			defaultValue: getStoredTheme(),
			toolbar: {
				icon: "paintbrush",
				items: [
					{ value: "neutral", title: "Neutral" },
					{ value: "gray", title: "Gray" },
					{ value: "slate", title: "Slate" },
					{ value: "stone", title: "Stone" },
					{ value: "zinc", title: "Zinc" },
				],
				dynamicTitle: true,
			},
		},
		darkMode: {
			name: "Mode",
			description: "Light or dark mode",
			defaultValue: getStoredMode(),
			toolbar: {
				icon: "circlehollow",
				items: [
					{ value: "light", title: "Light", icon: "sun" },
					{ value: "dark", title: "Dark", icon: "moon" },
				],
				dynamicTitle: true,
			},
		},
	},
}

export default preview
