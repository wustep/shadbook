import type { Preview } from "@storybook/react"

import "@/styles/globals.css"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		// Disable visual tests for now
		chromatic: { disable: true },
	},
}

export default preview
