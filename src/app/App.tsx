import { useState } from "react"

import reactLogo from "@/app/assets/react.svg"
import viteLogo from "@/app/assets/vite.svg"
import { ThemeProvider, useTheme } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function App() {
	const [count, setCount] = useState(0)
	const increment = () => setCount(count => count + 1)
	return (
		<ThemeProvider>
			<div className="flex flex-col items-center justify-center min-h-screen">
				<Card className="w-[300px]">
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
					<h1 className="text-2xl font-bold text-center p-4">Vite + React</h1>
					<CardContent className="space-y-4 flex flex-col items-center">
						<Button onClick={increment}>count is {count}</Button>
						<ThemeToggle />
					</CardContent>
				</Card>
			</div>
		</ThemeProvider>
	)
}

function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()
	return <Button onClick={() => toggleTheme()}>Toggle theme: {theme}</Button>
}

export default App
