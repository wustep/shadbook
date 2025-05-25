import { Page as ComponentsPage } from "@/storybook/app/components/page"

export function ComponentsPageWrapper() {
	return (
		<div className="py-4 px-6">
			<ComponentsPage />
		</div>
	)
}

// Export with the expected name
export { ComponentsPageWrapper as ComponentsPage }
