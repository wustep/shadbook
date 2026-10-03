import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import fs from "fs"
import path from "path"
import { defineConfig, type Plugin } from "vite"

const origin = "https://shadbook-app.vercel.app"

type SharePage = {
	title: string
	ogTitle: string
	description: string
	image: string
	imageAlt: string
}

// Link unfurlers read the raw HTML and never run the router, so every route
// worth sharing gets its own index.html with its own title and card.
const sharePages: Record<string, SharePage> = {
	"/": {
		title: "Shadbook",
		ogTitle: "Shadbook",
		description:
			"A small app built from shadcn/ui and Tailwind v4: a dashboard, cards, components, and a physics sandbox.",
		image: "/og/app.png",
		imageAlt:
			"The Shadbook dashboard: stat cards and an area chart beside the sidebar.",
	},
	"/physics": {
		title: "Shadcn + Physics · Shadbook",
		ogTitle: "Shadcn + Physics",
		description:
			"Throw, stack, and collide shadcn/ui components with Matter.js. Press space to spawn more.",
		image: "/og/physics.png",
		imageAlt:
			"A pile of shadcn/ui cards, badges, toggles, and buttons stacked by Matter.js.",
	},
}

const escapeAttr = (value: string) =>
	value
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")

function shareTags(route: string, page: SharePage) {
	const url = new URL(route, origin).href
	const image = new URL(page.image, origin).href
	const meta = (key: "name" | "property", name: string, content: string) =>
		`<meta ${key}="${name}" content="${escapeAttr(content)}" />`

	return [
		`<title>${escapeAttr(page.title)}</title>`,
		meta("name", "description", page.description),
		`<link rel="canonical" href="${url}" />`,
		meta("property", "og:type", "website"),
		meta("property", "og:site_name", "Shadbook"),
		meta("property", "og:title", page.ogTitle),
		meta("property", "og:description", page.description),
		meta("property", "og:url", url),
		meta("property", "og:image", image),
		meta("property", "og:image:width", "1200"),
		meta("property", "og:image:height", "630"),
		meta("property", "og:image:alt", page.imageAlt),
		meta("name", "twitter:card", "summary_large_image"),
		meta("name", "twitter:title", page.ogTitle),
		meta("name", "twitter:description", page.description),
		meta("name", "twitter:image", image),
		meta("name", "twitter:image:alt", page.imageAlt),
	].join("\n\t\t")
}

function shareMeta(): Plugin {
	const marker = "<!-- share-meta -->"
	const rootTags = shareTags("/", sharePages["/"])
	let outDir = "dist"
	let isBuild = false
	// Storybook reuses this config for its preview iframe, which has no marker.
	let sawMarker = false

	return {
		name: "share-meta",
		configResolved(config) {
			outDir = path.resolve(config.root, config.build.outDir)
			isBuild = config.command === "build"
		},
		transformIndexHtml(html) {
			if (!html.includes(marker)) return html
			sawMarker = true
			return html.replace(marker, rootTags)
		},
		closeBundle() {
			if (!isBuild || !sawMarker) return
			const html = fs.readFileSync(path.join(outDir, "index.html"), "utf8")
			if (!html.includes(rootTags)) {
				throw new Error("share-meta: root tags missing from built index.html")
			}
			for (const [route, page] of Object.entries(sharePages)) {
				if (route === "/") continue
				const file = path.join(outDir, route, "index.html")
				fs.mkdirSync(path.dirname(file), { recursive: true })
				fs.writeFileSync(file, html.replace(rootTags, shareTags(route, page)))
			}
		},
	}
}

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), shareMeta()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
})
