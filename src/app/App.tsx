import { RouterProvider } from "@tanstack/react-router"

import { router } from "@/app/router"

/**
 * Example app with TanStack Router.
 *
 * This replaces the previous hash-based routing with proper path-based routing.
 */
function App() {
	return <RouterProvider router={router} />
}

export default App
