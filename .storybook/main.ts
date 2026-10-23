import type { StorybookConfig } from "@storybook/react-vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const dirname = path.dirname(fileURLToPath(import.meta.url))

// `title` names the manager's raw <title> ("Shadbook - Storybook") instead of
// the package fallback crawlers saw ("@storybook/core - Storybook").
const config: StorybookConfig & { title: string } = {
	title: "Shadbook",
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-docs",
		"@storybook/addon-onboarding",
		"@storybook/addon-vitest",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	staticDirs: ["../src/styles", "../src/storybook/app/assets"],
	viteFinal: async config => {
		// The app's public/ (its share cards) isn't Storybook's; staticDirs is.
		config.publicDir = false
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				"@": path.resolve(dirname, "../src/"),
			}
		}
		return config
	},
}
export default config
