import { Beaker, Sparkles, TestTube, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const EXPERIMENTS = [
	{
		id: "animated-cards",
		title: "Animated Cards",
		description: "Cards with hover animations and micro-interactions",
		status: "In Progress",
		icon: Sparkles,
	},
	{
		id: "advanced-forms",
		title: "Advanced Form Components",
		description: "Multi-step forms with validation and state management",
		status: "Planned",
		icon: Zap,
	},
	{
		id: "data-viz",
		title: "Data Visualization",
		description: "Interactive charts and graphs components",
		status: "In Progress",
		icon: Beaker,
	},
]

export function ExperimentsPage() {
	return (
		<div className="space-y-6 py-4 px-6">
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{EXPERIMENTS.map(experiment => {
					const IconComponent = experiment.icon
					return (
						<Card key={experiment.id} className="relative">
							<CardHeader>
								<div className="flex items-start justify-between">
									<IconComponent className="size-6 text-primary" />
									<Badge
										variant={
											experiment.status === "In Progress"
												? "default"
												: "secondary"
										}
									>
										{experiment.status}
									</Badge>
								</div>
								<CardTitle className="text-lg">{experiment.title}</CardTitle>
								<CardDescription>{experiment.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<Button variant="outline" className="w-full" disabled>
									Coming Soon
								</Button>
							</CardContent>
						</Card>
					)
				})}
			</div>

			<Card>
				<CardHeader>
					<CardTitle>What are Experiments?</CardTitle>
					<CardDescription>
						Learn about our experimental features and how to use them
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<p className="text-sm text-muted-foreground">
						Experiments are early-stage components and features that we're
						actively developing. They may have breaking changes or incomplete
						functionality, but they give you a preview of what's coming to the
						design system.
					</p>
					<div className="space-y-2">
						<h4 className="text-sm font-medium">Status Meanings:</h4>
						<div className="flex flex-wrap gap-2">
							<Badge>In Progress</Badge>
							<span className="text-xs text-muted-foreground">
								Actively being developed
							</span>
						</div>
						<div className="flex flex-wrap gap-2">
							<Badge variant="secondary">Planned</Badge>
							<span className="text-xs text-muted-foreground">
								Scheduled for future development
							</span>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
