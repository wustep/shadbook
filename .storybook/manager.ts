import { addons } from "@storybook/manager-api"
import { themes } from "@storybook/theming"

// Configure Storybook's manager UI
addons.setConfig({
	theme: themes.light,
	showToolbar: true,
	// Define which buttons to show in the toolbar
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
		// Hide the theme toggle
		theme: { hidden: true },
		grid: { hidden: true },
	},
})
