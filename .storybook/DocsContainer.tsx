// DocsContainer.tsx

import {
	getStoredMode,
	getStoredTheme,
	updateMode,
	updateTheme,
	usePrevious,
} from "./utils"
import {
	DocsContainer as BaseContainer,
	DocsContainerProps,
} from "@storybook/blocks"
import { addons } from "@storybook/preview-api"
import { themes } from "@storybook/theming"
import React, { FC, PropsWithChildren, useEffect, useState } from "react"

export const DocsContainer: FC<PropsWithChildren<DocsContainerProps>> = ({
	children,
	context,
}) => {
	const [theme, setTheme] = useState(getStoredTheme())
	const [mode, setMode] = useState(getStoredMode())

	console.log(context)
	console.log(context.channel.eventNames())

	useEffect(() => {
		context.channel.addListener("updateGlobals", event => {
			console.log("updateGlobals", event)
			if (event.globals.theme) {
				setTheme(event.globals.theme)
			}
			if (event.globals.darkMode) {
				setMode(event.globals.darkMode)
			}
		})
	}, [context.channel])

	const previousTheme = usePrevious(theme)
	const previousMode = usePrevious(mode)

	useEffect(() => {
		if (previousTheme !== theme) {
			updateTheme(theme)
		}
	}, [previousTheme, theme])

	useEffect(() => {
		if (previousMode !== mode) {
			updateMode(mode)
		}
	}, [previousMode, mode])

	return (
		<BaseContainer
			theme={mode === "dark" ? themes.dark : themes.light}
			context={context}
		>
			{children}
		</BaseContainer>
	)
}
