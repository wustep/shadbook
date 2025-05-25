import { Link } from "@tanstack/react-router"
import { Gamepad2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"

const EXPERIMENTS = [
	{
		id: "physics-playground",
		title: "Physics Playground",
		description: "Throw shadcn components around in a physics simulation",
		icon: Gamepad2,
		path: "/experiments/physics-playground",
	},
]

export function ExperimentsPage() {
	return (
		<div className="space-y-6 py-4 px-6">
			<div>
				<p className="text-muted-foreground mt-2">
					Explore experimental features and interactive demos
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{EXPERIMENTS.map(experiment => {
					const IconComponent = experiment.icon
					return (
						<Card key={experiment.id} className="relative overflow-hidden">
							<CardHeader>
								<div className="flex items-start justify-between">
									<IconComponent className="size-6 text-primary" />
								</div>
								<CardTitle className="text-lg">{experiment.title}</CardTitle>
								<CardDescription>{experiment.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<Button asChild className="w-full">
									<Link to={experiment.path}>Open Experiment</Link>
								</Button>
							</CardContent>
						</Card>
					)
				})}
			</div>
		</div>
	)
}
