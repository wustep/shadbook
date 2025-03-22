# shadbook Development Guidelines

## Commands
- Build: `npm run build`
- Dev: `npm run dev` or `npm run storybook` (port 6006)
- Lint: `npm run lint`
- Test: `vitest run` (Storybook components with Playwright)
- Test single file: `vitest run -t "ComponentName"`

## Code Style
- Use Tailwind CSS v4 syntax over inline styling
- Strict TypeScript: no unused locals/parameters, no unchecked side effects
- Absolute imports with `@/` prefix (e.g., `import Button from "@/components/ui/button"`)
- Import order: external → internal (alphabetized) → CSS imports
- Component structure follows shadcn/ui patterns in src/components

## Conventions
- React 19 + Tailwind + shadcn/ui best practices
- No relative imports (use absolute imports with `@/` prefix)
- No duplicate imports
- Properly sort imports
- Follow existing component patterns when creating new components

## Cursor Rules
- This project is a Storybook playground for Tailwind CSS v4, tailwind-css-animate, and shadcn/ui components
- Prefer using Tailwind CSS v4 syntax over inline styling
- Follow frontend best practices for React 19 + Tailwind + shadcn/ui apps