# MENA Car Wash

Landing page for MENA Car Wash. React + Vite + Tailwind CSS v4 project.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React and Tailwind CSS v4 plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm
- `planning/` - Planning tickets (`tickets/MCS-<ID>.md`) and index (`README.md`)

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt
- Linting: oxlint

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

- **Design tokens:** define colors, fonts, and spacing as `@theme` tokens in `src/index.css` (e.g. `--color-mena-primary`, `--font-display`). Use those tokens in Tailwind utilities. Do not repeat hardcoded colors in JSX when a token exists.
- **Hover/interaction:** use Tailwind variants (`hover:`, `group-hover:`) instead of imperative `onMouseEnter`/`onMouseLeave` handlers.
- **Component classes:** `.btn-primary`, `.btn-outline`, `.card`, `.card-highlight`, `.chrome-text`, `.chrome-hero`, and `.divider` live in `src/index.css` and are consumed as classes.

## Workflow: branches and tickets

- **Branch naming:** `MCS-<ID>-<english-kebab-title>`. Example: `MCS-001-code-quality-tooling`.
- **Tickets:** each planning ticket lives in `planning/tickets/MCS-<ID>.md`, with an index in `planning/README.md`.
- A ticket is resolved when its acceptance criteria are met and verified with `pnpm typecheck`, `pnpm lint`, and `pnpm build`.

## Commit messages

> **Authorization required:** never `git commit`, `git push`, `git revert`, or create PRs unless the user explicitly asks you to. Leave changes staged or in the working tree and report back.

- **Format:** `MCS-<ID>: <summary>` (the `-m` of `git commit`).
- `<ID>` matches the ticket the branch resolves (e.g. `MCS-001`).
- `<summary>` is in English, imperative mood, present tense, ≤ 72 characters, no trailing period. Capitalize only the first word.
- For follow-up fixes to an already-resolved ticket, use `fix(MCS-<ID>): <summary>`; for refactors, `refactor(MCS-<ID>): <summary>`.
- Add a blank line and a short body (via a second `-m`) only when the summary alone cannot explain the *why*.

Examples:
```bash
git commit -m "MCS-001: add typecheck and lint scripts"
git commit -m "refactor(MCS-019): remove figma make scaffolding"
git commit -m "MCS-002: centralize business contact data in config"
```

## Quality commands

Run these before considering a change done:

```bash
pnpm typecheck   # tsc --noEmit, no type errors
pnpm lint        # oxlint, no quality warnings
pnpm build       # production build succeeds
pnpm format      # oxfmt, formats the code
```

## Standard architecture

- `src/config/site.ts` - Single source of business data (WhatsApp, Instagram, phone, address, map URLs). Never hardcode these values in components.
- `src/types.ts` - Domain types (`Plan`, `Service`, `Jubilados`, `Feature`, `Review`, `GalleryImage`).
- `src/data/` - Typed site content (`services.ts`, `features.ts`, `reviews.ts`, `gallery.ts`).
- `src/components/` - UI components; per section (`site/`, `pricing/`), layout primitives in `layout/`, and reusable elements in `shared/`.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.
