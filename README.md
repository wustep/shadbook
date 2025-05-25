# shadbook

View live at [shadbook.vercel.app](https://shadbook.vercel.app).

A storybook for shadcn/ui, tailwind, and tailwindcss-animate. 🚀

- [Storybook](https://storybook.js.org/): documentation tooling for building UI components and documentation
- [shadcn/ui](https://ui.shadcn.com/): component library
- [tailwind](https://tailwindcss.com/): utility-first CSS framework
- [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate): extension animation library

You can use this repo as an educational reference or as a starting point for your own project's design system.

## Usage

To run storybook:

```bash
npm install
npm run storybook
```

You can also run a basic app in dev mode:

```bash
npm run dev
```

To build, run:

```bash
npm run build
```


## Folder structure

```bash
src/
├── app/         # React app
├── components/  # Core UI shadcn components & associated .stories.tsx files
├── hooks/       # React hooks
├── storybook/   # Storybook-only components and docs
├── styles/      # Tailwind styles
└── lib/         # Utilities
```

### Diffing

To compare differences between shadcn/ui and this repo, run:

```bash
npm run diff
```

Example output:
```
✔ Prepared clone directory: /Users/wustep/Documents/Projects/shadbook/temp/shadcn-ui
✔ Cloned latest shadcn-ui templates into /Users/wustep/Documents/Projects/shadbook/temp/shadcn-ui
ℹ Using prettier config from: /Users/wustep/Documents/Projects/shadbook/.prettierrc
✔ Formatted upstream directory: /Users/wustep/Documents/Projects/shadbook/temp/shadcn-ui/apps/v4/registry/new-york-v4/ui
✔ Found 46 upstream .tsx files in: /Users/wustep/Documents/Projects/shadbook/temp/shadcn-ui/apps/v4/registry/new-york-v4/ui
✔ Diff generation complete, found 45 files with diffs.
✔ Fetched 45 summaries successfully.
✔ Overall summary generated.
✔ Report content constructed.
✔ Processing complete. Found diffs in: accordion.tsx (+4, -2), alert-dialog.tsx (+5, -5), alert.tsx (+4, -4), aspect-ratio.tsx (+2, -0), avatar.tsx (+3, -3), badge.tsx (+3, -3), breadcrumb.tsx (+2, -2), button.tsx (+2, -2), calendar.tsx (+7, -5), card.tsx (+4, -4), carousel.tsx (+8, -8), chart.tsx (+13, -11), checkbox.tsx (+2, -2), collapsible.tsx (+2, -0), command.tsx (+9, -9), context-menu.tsx (+9, -9), dialog.tsx (+6, -4), drawer.tsx (+4, -2), dropdown-menu.tsx (+9, -9), form.tsx (+9, -7), hover-card.tsx (+4, -2), input-otp.tsx (+3, -3), input.tsx (+1, -1), label.tsx (+2, -2), menubar.tsx (+13, -11), navigation-menu.tsx (+10, -10), pagination.tsx (+3, -3), popover.tsx (+1, -1), progress.tsx (+4, -2), radio-group.tsx (+2, -2), resizable.tsx (+5, -3), scroll-area.tsx (+3, -3), select.tsx (+9, -7), separator.tsx (+2, -2), sheet.tsx (+5, -3), sidebar.tsx (+28, -28), slider.tsx (+5, -5), sonner.tsx (+2, -0), switch.tsx (+3, -3), table.tsx (+6, -4), tabs.tsx (+3, -3), textarea.tsx (+1, -1), toggle-group.tsx (+4, -4), toggle.tsx (+4, -2), tooltip.tsx (+4, -2)
✔ Report generated: /Users/wustep/Documents/Projects/shadbook/diff.md
-------- Overall Summary --------
- Several components (`accordion`, `aspect-ratio`, `chart`, `collapsible`, `dialog`, `drawer`, `menubar`, `sheet`, `sonner`, `tooltip`) now include the `"use client"` directive at the top of their files, indicating potential changes in their execution environments.
- Many components have seen adjustments to import order, with `React` often being moved to the top of import lists. This is a non-functional change and does not affect component behavior.
- The import paths for several components and hooks have been updated, reflecting a potential restructuring of the project or migration to a new version (v4).
- Many components have had minor adjustments to the indentation of their `className` props for better code readability. These changes do not affect component functionality or appearance.
- A few components (`Badge`, `card-header`, `NavigationMenuTrigger`, `NavigationMenuLink`, `ScrollAreaPrimitive.Viewport`) have seen CSS class updates, potentially altering their visual appearance.
- No significant user-facing changes, breaking changes, prop updates, or behavior alterations were identified across the majority of component diffs.
----------------------------
```

## Credits
- Tailwind colors are from [Tailwind's docs](https://tailwindcss.com/docs/colors)
- Some shadcn examples (particularly in the "Blocks" and "Components" docs) are lifted from [shadcn's component registry](https://github.com/shadcn-ui/ui/tree/shadcn/09-tailwind-v4/apps/v4/registry/new-york-v4)

## TODO
- [DataTable component](https://ui.shadcn.com/docs/components/data-table)
