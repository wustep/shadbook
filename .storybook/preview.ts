import type { Preview } from "@storybook/react"
import { themes } from "@storybook/theming"
import "@/styles/globals.css"
import { getStoredMode, getStoredTheme, updateMode, updateTheme } from "./utils"
import { DocsContainer } from "./DocsContainer"

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
			container: DocsContainer,
		},
		options: {
			storySort: {
				order: [
					"Introduction",
					"shadcn",
					["Examples", "Colors", "Typography", "Icons", "*"],
					"Tailwind",
					["Introduction", "Colors", "Animations", "*"],
				],
			},
		},
	},
	decorators: [
		(Story, context) => {
			const { theme, darkMode } = context.globals
			updateTheme(theme ?? "neutral")
			updateMode(darkMode ?? "light")
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
