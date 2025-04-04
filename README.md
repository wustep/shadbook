# shadbook

View live at [shadbook.vercel.app](https://shadbook.vercel.app)

A storybook for shadcn/ui, tailwind, and tailwindcss-animate. 🚀

- [Storybook](https://storybook.js.org/): documentation tooling for building UI components and documentation
- [shadcn/ui](https://ui.shadcn.com/): component library
- [tailwind](https://tailwindcss.com/): utility-first CSS framework
- [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate): simple animation library

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

## Credits
- Tailwind colors are from [Tailwind's docs](https://tailwindcss.com/docs/colors).
- Shadcn examples (particularly in the "Blocks" and "Components" docs) are lifted from [shadcn's component registry](https://github.com/shadcn-ui/ui/tree/shadcn/09-tailwind-v4/apps/v4/registry/new-york-v4).
