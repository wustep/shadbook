import { createFileRoute, useNavigate } from "@tanstack/react-router"

import { Page as AuthPage } from "@/storybook/app/registry/blocks/login-02/page"

export const Route = createFileRoute("/auth")({
	component: Auth,
})

function Auth() {
	const navigate = useNavigate()

	const handleLogin = () => {
		// Navigate to dashboard after login
		navigate({ to: "/" })
	}

	return <AuthPage onClickLogin={handleLogin} />
}
