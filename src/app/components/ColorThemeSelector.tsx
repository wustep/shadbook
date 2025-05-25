import { Check, Paintbrush } from "lucide-react"
import { useEffect, useState } from "react"

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarMenuButton } from "@/components/ui/sidebar"

type ThemeColor = "neutral" | "gray" | "slate" | "stone" | "zinc"

export function ColorThemeSelector() {
	const [color, setColor] = useState<ThemeColor>("neutral")

	useEffect(() => {
		document.documentElement.classList.remove(
			"theme-neutral",
			"theme-gray",
			"theme-slate",
			"theme-stone",
			"theme-zinc",
		)

		document.documentElement.classList.add(`theme-${color}`)

		localStorage.setItem("theme-color", color)
	}, [color])

	useEffect(() => {
		const storedColor = localStorage.getItem("theme-color") as ThemeColor
		if (storedColor) {
			setColor(storedColor)
		}
	}, [])

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<SidebarMenuButton
					variant="outline"
					size="sm"
					className={"w-full justify-start gap-2"}
				>
					<Paintbrush className="size-4" />
					<span className="capitalize text-sm">{color} Theme</span>
				</SidebarMenuButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<div>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("neutral")}
					>
						<div className="size-4 rounded-full bg-neutral-600 dark:bg-neutral-200 border border-border" />
						Neutral
						{color === "neutral" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("gray")}
					>
						<div className="size-4 rounded-full bg-gray-400 dark:bg-gray-400 border border-border" />
						Gray
						{color === "gray" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("slate")}
					>
						<div className="size-4 rounded-full bg-slate-400 dark:bg-slate-400 border border-border" />
						Slate
						{color === "slate" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("stone")}
					>
						<div className="size-4 rounded-full bg-stone-400 dark:bg-stone-400 border border-border" />
						Stone
						{color === "stone" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
					<DropdownMenuItem
						className="gap-2 pl-2 cursor-pointer"
						onClick={() => setColor("zinc")}
					>
						<div className="size-4 rounded-full bg-zinc-400 dark:bg-zinc-500 border border-border" />
						Zinc
						{color === "zinc" && <Check className="ml-auto size-4" />}
					</DropdownMenuItem>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
