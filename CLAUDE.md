# CLAUDE.md

## Project Overview

Website for Flixa, an AI coding extension available on VS Code Marketplace and Open VSX Registry. Built with Next.js 16, React 19, Tailwind CSS 4, and shadcn/ui.

## Commands

- `bun dev` — start dev server
- `bun run build` — type check (tsgo) then build
- `bun run lint` — run OxLint
- `bun run lint:fix` — run OxLint with auto-fix
- `bun run format` — format with OxFmt

## Architecture

- **App Router** with server components by default (no `"use client"` unless needed)
- **Single-page** landing site — all content lives in `app/page.tsx`
- **Dark-first theme** — `:root` defines dark colors directly, no `.dark` class needed
- **shadcn/ui** components in `components/ui/` using New York style
- **CSS variables** in `app/globals.css` use OKLch color space

## Conventions

- Use `bun` as the package manager (not npm/yarn/pnpm)
- Inter for body text, Geist Mono for monospace
- Keep copy honest and grounded — no inflated stats or marketing fluff
- Prefer server components; only add `"use client"` when interactive state is required
- Use `cn()` from `lib/utils.ts` for conditional class merging
- OxLint for linting, OxFmt for formatting (not ESLint/Prettier directly)
- tsgo (TypeScript native preview) for type checking in build
