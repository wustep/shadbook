import { Alert, AlertDescription } from "./alert"
import { Badge } from "./badge"
import { Card } from "./card"
import type { Meta, StoryObj } from "@storybook/react"
import { Check, FileText, Info, Terminal } from "lucide-react"

const meta: Meta = {
	title: "shadcn/Typography",
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj

/**
 * Comprehensive demo showcasing all typography elements in a cohesive narrative
 */
export const TypographyDemo: Story = {
	render: () => (
		<div className="w-full max-w-3xl space-y-6">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
				The Joke Tax Chronicles
			</h1>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				Once upon a time, in a far-off land, there was a very lazy king who
				spent all day lounging on his throne. One day, his advisors came to him
				with a problem: the kingdom was running out of money.
			</p>
			<h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
				The King's Plan
			</h2>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				The king thought long and hard, and finally came up with{" "}
				<a
					href="#"
					className="font-medium text-primary underline underline-offset-4"
				>
					a brilliant plan
				</a>
				: he would tax the jokes in the kingdom.
			</p>
			<blockquote className="mt-6 border-l-2 pl-6 italic">
				"After all," he said, "everyone enjoys a good joke, so it's only fair
				that they should pay for the privilege."
			</blockquote>
			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				The Joke Tax
			</h3>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				The king's subjects were not amused. They grumbled and complained, but
				the king was firm:
			</p>
			<ul className="my-6 list-disc [&>li]:mt-2 marker:text-primary ml-4">
				<li>1st level of puns: 5 gold coins</li>
				<li>2nd level of jokes: 10 gold coins</li>
				<li>3rd level of one-liners : 20 gold coins</li>
			</ul>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				As a result, people stopped telling jokes, and the kingdom fell into a
				gloom. But there was one person who refused to let the king's
				foolishness get him down: a court jester named Jokester.
			</p>
			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				Jokester's Revolt
			</h3>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				Jokester began sneaking into the castle in the middle of the night and
				leaving jokes all over the place: under the king's pillow, in his soup,
				even in the royal toilet. The king was furious, but he couldn't seem to
				stop Jokester.
			</p>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				And then, one day, the people of the kingdom discovered that the jokes
				left by Jokester were so funny that they couldn't help but laugh. And
				once they started laughing, they couldn't stop.
			</p>
			<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
				The People's Rebellion
			</h3>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				The people of the kingdom, feeling uplifted by the laughter, started to
				tell jokes and puns again, and soon the entire kingdom was in on the
				joke.
			</p>
			<div className="my-6 w-full overflow-y-auto">
				<table className="w-full">
					<thead>
						<tr className="m-0 border-t p-0 even:bg-muted">
							<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
								King's Treasury
							</th>
							<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
								People's happiness
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="m-0 border-t p-0 even:bg-muted">
							<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
								Empty
							</td>
							<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
								Overflowing
							</td>
						</tr>
						<tr className="m-0 border-t p-0 even:bg-muted">
							<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
								Modest
							</td>
							<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
								Satisfied
							</td>
						</tr>
						<tr className="m-0 border-t p-0 even:bg-muted">
							<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
								Full
							</td>
							<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
								Ecstatic
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				The king, seeing how much happier his subjects were, realized the error
				of his ways and repealed the joke tax. Jokester was declared a hero, and
				the kingdom lived happily ever after.
			</p>
			<p className="leading-7 [&:not(:first-child)]:mt-6">
				The moral of the story is: never underestimate the power of a good laugh
				and always be careful of bad ideas.
			</p>
		</div>
	),
}

/**
 * Headings from h1 to h4 with different styles and sizes
 */
export const Headings: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-6">
			<div className="space-y-2">
				<Badge>h1</Badge>
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Header 1 - The main heading
				</h1>
			</div>

			<div className="space-y-2">
				<Badge>h2</Badge>
				<h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
					Header 2 - Section heading
				</h2>
			</div>

			<div className="space-y-2">
				<Badge>h3</Badge>
				<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
					Header 3 - Subsection heading
				</h3>
			</div>

			<div className="space-y-2">
				<Badge>h4</Badge>
				<h4 className="mt-6 scroll-m-20 text-xl font-semibold tracking-tight">
					Header 4 - Minor heading
				</h4>
			</div>

			<Alert className="mt-6">
				<Info className="h-4 w-4" />
				<AlertDescription>
					Headings have scroll margin and tracking adjustments for better
					readability and navigation.
				</AlertDescription>
			</Alert>
		</div>
	),
}

/**
 * Different paragraph styles for various content needs
 */
export const Paragraphs: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-8">
			<div className="space-y-2">
				<Badge>Lead Paragraph</Badge>
				<p className="text-xl text-muted-foreground">
					A lead paragraph stands out with larger text and is often used for
					introductions or to highlight important information. It's designed to
					grab the reader's attention.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Standard Paragraph</Badge>
				<p className="leading-7">
					This is a standard paragraph with comfortable line height for optimal
					readability. Good typography is important for readability and user
					experience. The right balance of font size, line height, and line
					length makes reading easier and more enjoyable.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Large Text</Badge>
				<p className="text-lg">
					Slightly larger than standard text, useful for emphasizing content
					without using a heading. This size works well for important statements
					or short introductory text.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Small/Muted Text</Badge>
				<p className="text-sm text-muted-foreground">
					Smaller, muted text is perfect for secondary information, captions,
					footnotes, or other less prominent content. It maintains readability
					while visually taking a back seat.
				</p>
			</div>
		</div>
	),
}

/**
 * Various inline text styles for emphasis and special content
 */
export const InlineText: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-6">
			<div className="space-y-2">
				<Badge>Links</Badge>
				<p className="leading-7">
					Here's a standard{" "}
					<a
						href="#"
						className="font-medium text-primary underline underline-offset-4"
					>
						hyperlink
					</a>{" "}
					styled with underline and offset for better visibility.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Strong/Bold</Badge>
				<p className="leading-7">
					Use <strong className="font-semibold">strong or bold text</strong> to
					emphasize important parts of your content.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Italic</Badge>
				<p className="leading-7">
					<em className="italic">Italic text</em> can be used for emphasis,
					titles, or to indicate terms.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Inline Code</Badge>
				<p className="leading-7">
					Use{" "}
					<code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
						inline code
					</code>{" "}
					to highlight variables, commands, or code snippets within text.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Highlighted Text</Badge>
				<p className="leading-7">
					<mark className="bg-yellow-100 px-1 dark:bg-yellow-800/30">
						Highlighted text
					</mark>{" "}
					can draw attention to specific content.
				</p>
			</div>

			<div className="space-y-2">
				<Badge>Strikethrough</Badge>
				<p className="leading-7">
					<del className="line-through">Strikethrough text</del> indicates
					removed or outdated content.
				</p>
			</div>
		</div>
	),
}

/**
 * Blockquotes with different styling variations
 */
export const Blockquotes: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-8">
			<div className="space-y-2">
				<Badge>Standard Blockquote</Badge>
				<blockquote className="mt-6 border-l-2 pl-6 italic">
					"The best way to predict the future is to invent it."
					<cite className="mt-2 block text-sm not-italic text-muted-foreground">
						— Alan Kay
					</cite>
				</blockquote>
			</div>

			<div className="space-y-2">
				<Badge>Styled Blockquote</Badge>
				<blockquote className="mt-6 rounded-r-lg border-l-4 border-primary bg-muted/50 p-4 italic">
					"Design is not just what it looks like and feels like. Design is how
					it works."
					<cite className="mt-2 block text-sm not-italic text-muted-foreground">
						— Steve Jobs
					</cite>
				</blockquote>
			</div>

			<div className="space-y-2">
				<Badge>Boxed Blockquote</Badge>
				<div className="rounded-lg border bg-card p-6 shadow-sm">
					<div className="flex gap-3">
						<div className="text-primary text-4xl font-serif">"</div>
						<blockquote className="not-italic">
							The simplest way to achieve simplicity is through thoughtful
							reduction.
							<cite className="mt-2 block text-sm font-medium text-muted-foreground">
								— John Maeda, The Laws of Simplicity
							</cite>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	),
}

/**
 * Different list styles for organizing content
 */
export const Lists: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-8">
			<div className="space-y-2">
				<Badge>Unordered List</Badge>
				<ul className="my-6 ml-4 list-disc marker:text-primary [&>li]:mt-2">
					<li>First item in an unordered list</li>
					<li>
						Second item with some additional text to show how wrapping works
					</li>
					<li>
						Third item with a nested list
						<ul className="list-disc marker:text-primary/70 [&>li]:mt-1.5 ml-4">
							<li>Nested item one</li>
							<li>Nested item two</li>
						</ul>
					</li>
					<li>Fourth item</li>
				</ul>
			</div>

			<div className="space-y-2">
				<Badge>Ordered List</Badge>
				<ol className="my-6 ml-4 list-decimal marker:text-primary marker:font-medium [&>li]:mt-2">
					<li>First step in a process</li>
					<li>Second step with more details included here</li>
					<li>
						Third step with a nested ordered list
						<ol className="list-decimal marker:text-primary/70 [&>li]:mt-1.5 ml-4">
							<li>Substep A</li>
							<li>Substep B</li>
						</ol>
					</li>
					<li>Final step</li>
				</ol>
			</div>

			<div className="space-y-2">
				<Badge>Check List</Badge>
				<ul className="my-6 ml-6 space-y-2.5">
					<li className="flex items-start gap-2">
						<Check className="h-4 w-4 text-primary mt-1 shrink-0" />
						<span>
							Completed item that might have a longer description wrapping to
							multiple lines, showing proper alignment
						</span>
					</li>
					<li className="flex items-start gap-2">
						<Check className="h-4 w-4 text-primary mt-1 shrink-0" />
						<span>Another completed item</span>
					</li>
					<li className="flex items-start gap-2 text-muted-foreground">
						<div className="h-4 w-4 rounded-full border border-current mt-1 shrink-0" />
						<span>Pending item</span>
					</li>
					<li className="flex items-start gap-2 text-muted-foreground">
						<div className="h-4 w-4 rounded-full border border-current mt-1 shrink-0" />
						<span>Another pending item</span>
					</li>
				</ul>
			</div>
		</div>
	),
}

/**
 * Tables with different styles and data formats
 */
export const Tables: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-8">
			<div className="space-y-2">
				<Badge>Basic Table</Badge>
				<div className="my-6 w-full overflow-y-auto">
					<table className="w-full">
						<thead>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
									Product
								</th>
								<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
									Price
								</th>
								<th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
									Stock
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Widget A
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									$25.00
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									In Stock
								</td>
							</tr>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Widget B
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									$35.00
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Low Stock
								</td>
							</tr>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Widget C
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									$45.00
								</td>
								<td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Out of Stock
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<div className="space-y-2">
				<Badge>Compact Table</Badge>
				<div className="my-6 w-full overflow-y-auto">
					<table className="w-full text-sm">
						<thead>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<th className="border px-3 py-1.5 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right">
									ID
								</th>
								<th className="border px-3 py-1.5 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right">
									User
								</th>
								<th className="border px-3 py-1.5 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right">
									Status
								</th>
								<th className="border px-3 py-1.5 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right">
									Role
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									001
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Alice
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									<Badge className="bg-green-500">Active</Badge>
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Admin
								</td>
							</tr>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									002
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Bob
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									<Badge variant="outline" className="text-amber-500">
										Away
									</Badge>
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									User
								</td>
							</tr>
							<tr className="m-0 border-t p-0 even:bg-muted">
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									003
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									Charlie
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									<Badge variant="destructive">Offline</Badge>
								</td>
								<td className="border px-3 py-1.5 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
									User
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	),
}

/**
 * Code blocks with syntax highlighting
 */
export const CodeBlocks: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-8">
			<div className="space-y-2">
				<Badge>Code Block</Badge>
				<div className="my-6 w-full">
					<div className="rounded-md bg-slate-900 px-4 py-3 shadow-md">
						<div className="flex items-center justify-between">
							<div className="flex gap-1">
								<div className="h-3 w-3 rounded-full bg-red-500" />
								<div className="h-3 w-3 rounded-full bg-yellow-500" />
								<div className="h-3 w-3 rounded-full bg-green-500" />
							</div>
							<span className="text-xs text-slate-400">Example.tsx</span>
						</div>
						<pre className="mt-3 w-full overflow-x-auto whitespace-pre text-sm text-slate-50 font-mono">
							<code className="font-mono">{`function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded-md",
        "bg-primary text-primary-foreground",
        "hover:bg-primary/90",
        className
      )}
      {...props}
    />
  )
}`}</code>
						</pre>
					</div>
				</div>
			</div>

			<div className="space-y-2">
				<Badge>Terminal Example</Badge>
				<div className="my-6 w-full">
					<div className="rounded-md bg-zinc-900 px-4 py-3 shadow-md">
						<div className="flex items-center">
							<Terminal className="mr-2 h-4 w-4 text-zinc-400" />
							<span className="text-xs text-zinc-300">Terminal</span>
						</div>
						<pre className="mt-3 w-full overflow-x-auto whitespace-pre text-sm font-mono text-zinc-100">
							<code className="font-mono">{`$ npm install @shadcn/ui
$ npx shadcn-ui@latest init
$ npx shadcn-ui@latest add button`}</code>
						</pre>
					</div>
				</div>
			</div>
		</div>
	),
}

/**
 * Cards with different text styles for various purposes
 */
export const CardTypography: Story = {
	render: () => (
		<div className="w-full max-w-2xl space-y-8">
			<Card className="p-6">
				<div className="space-y-4">
					<div className="mb-4 flex items-center gap-2">
						<FileText className="h-5 w-5 text-primary" />
						<h3 className="text-2xl font-semibold">Documentation</h3>
					</div>
					<p className="text-lg text-muted-foreground">
						A comprehensive guide to using our platform
					</p>
					<h4 className="text-xl font-medium pt-4">Getting Started</h4>
					<p className="leading-7">
						To begin, install the package via npm or yarn. Configure your
						settings and initialize the application with the provided API key.
					</p>
					<div className="mt-2 rounded-md bg-muted p-4">
						<code className="text-sm">npm install @example/package</code>
					</div>
					<h4 className="text-xl font-medium pt-4">Best Practices</h4>
					<ul className="my-4 list-disc marker:text-primary [&>li]:mt-2 ml-4">
						<li>Always validate user input</li>
						<li>Implement proper error handling</li>
						<li>Follow the principle of least privilege</li>
					</ul>
				</div>
			</Card>

			<div className="grid grid-cols-2 gap-4">
				<Card className="p-6">
					<div className="space-y-2">
						<h4 className="text-lg font-semibold">Quick Start</h4>
						<p className="text-sm text-muted-foreground">
							Get up and running in less than 5 minutes
						</p>
						<ol className="mt-4 ml-6 list-decimal marker:text-primary text-sm [&>li]:mt-1.5">
							<li>Create an account</li>
							<li>Generate API keys</li>
							<li>Install the SDK</li>
						</ol>
					</div>
				</Card>

				<Card className="p-6">
					<div className="space-y-2">
						<h4 className="text-lg font-semibold">Need Help?</h4>
						<p className="text-sm text-muted-foreground">
							Our support team is available 24/7
						</p>
						<div className="mt-4 text-sm">
							<p>
								<strong>Email:</strong> support@example.com
							</p>
							<p>
								<strong>Phone:</strong> (555) 123-4567
							</p>
							<p className="mt-2 italic">Average response time: 2 hours</p>
						</div>
					</div>
				</Card>
			</div>
		</div>
	),
}
