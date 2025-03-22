# shadbook Development Guidelines
- This project is a Storybook playground for Tailwind CSS v4, tailwind-css-animate, and shadcn/ui components

## Commands
- Build: `npm run build`
- Dev: `npm run dev` or `npm run storybook` (port 6006)
- Lint: `npm run lint`

## Code Style
- Use Tailwind CSS v4 syntax over inline styling
- Strict TypeScript: no unused locals/parameters, no unchecked side effects
- Absolute imports with `@/` prefix (e.g., `import Button from "@/components/ui/button"`)
- Import order: external → internal (alphabetized) → CSS imports
- Component structure follows shadcn/ui patterns in src/components

## Conventions
- Follow React 19 + Tailwind + shadcn/ui best practices
- No relative imports (use absolute imports with `@/` prefix)
- No duplicate imports
- Properly sort imports
- Follow existing component patterns when creating new components
