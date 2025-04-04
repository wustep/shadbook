import type { StorybookConfig } from "@storybook/react-vite"
import path from "path"

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		// "@chromatic-com/storybook",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	staticDirs: ["../src/styles", "../src/storybook/app/assets"],
	viteFinal: async config => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				"@": path.resolve(__dirname, "../src/"),
			}
		}
		return config
	},
}
export default config
