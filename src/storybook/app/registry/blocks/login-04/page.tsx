import { LoginForm } from "@/storybook/app/registry/blocks/login-04/components/login-form"

export function Page() {
	return (
		<div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
			<div className="w-full max-w-sm md:max-w-3xl">
				<LoginForm />
			</div>
		</div>
	)
}
