import { useState } from "react"

import "@/app/App.css"
import reactLogo from "@/app/assets/react.svg"
import viteLogo from "@/app/assets/vite.svg"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

function App() {
	const [count, setCount] = useState(0)

	return (
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
						onClick={() => setCount(count => count + 1)}
						className="w-full"
					>
						count is {count}
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}

export default App
