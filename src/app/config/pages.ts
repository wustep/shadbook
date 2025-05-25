import { BookOpen, ComponentIcon, TestTube, WalletCards } from "lucide-react"

export const pageConfig = {
	"/_layout": {
		title: "Dashboard",
		icon: BookOpen,
	},
	"/_layout/cards": {
		title: "Cards",
		icon: WalletCards,
	},
	"/_layout/components": {
		title: "Components",
		icon: ComponentIcon,
	},
	"/_layout/experiments": {
		title: "Experiments",
		icon: TestTube,
	},
} as const

export type PagePath = keyof typeof pageConfig
