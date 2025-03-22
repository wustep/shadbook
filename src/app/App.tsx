import { useState } from "react"

import reactLogo from "@/app/assets/react.svg"
import viteLogo from "@/app/assets/vite.svg"
import { ThemeProvider, useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import "@/app/App.css"
import "@/styles/neutral.css"

function App() {
	const [count, setCount] = useState(0)
	return (
		<ThemeProvider>
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="flex items-center justify-center gap-4">
					<a
						href="https://vite.dev"
						target="_blank"
						className="hover:opacity-80 transition-opacity"
					>
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a
						href="https://react.dev"
						target="_blank"
						className="hover:opacity-80 transition-opacity"
					>
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
				<Card className="w-[300px]">
					<h1 className="text-2xl font-bold">Vite + React</h1>
					<CardContent className="space-y-4">
						<Button
							className="w-full"
							onClick={() => setCount(count => count + 1)}
						>
							count is {count}
						</Button>
						<ThemeToggle />
					</CardContent>
				</Card>
			</div>
		</ThemeProvider>
	)
}

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button className="w-full" onClick={() => toggleTheme()}>
			Toggle Theme: {theme}
		</Button>
	)
}

export default App
