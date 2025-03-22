import { addons } from "@storybook/manager-api"
import { themes } from "@storybook/theming"

addons.setConfig({
	theme: themes.dark,
	showToolbar: true,
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
		theme: { hidden: true },
		grid: { hidden: true },
	},
})
