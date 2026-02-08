# Flixa Website

Website for [Flixa](https://marketplace.visualstudio.com/items?itemName=deniai.flixa), an AI coding extension by Deni AI.

## Stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS 4, shadcn/ui (New York style)
- **Fonts:** Inter, Geist Mono
- **Icons:** Lucide React, Simple Icons
- **Linting:** OxLint
- **Formatting:** OxFmt
- **Type checking:** TypeScript 5 + tsgo (native preview)

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `bun dev`        | Start dev server             |
| `bun run build`  | Type check + production build|
| `bun start`      | Start production server      |
| `bun run lint`   | Run OxLint                   |
| `bun run lint:fix`| Run OxLint with auto-fix    |
| `bun run format` | Format with OxFmt            |

## Project Structure

```
app/
  layout.tsx        Root layout (Inter font, metadata)
  page.tsx          Landing page
  globals.css       Theme variables, dark-first color scheme
components/
  ui/
    button.tsx      shadcn/ui Button component
lib/
  utils.ts          cn() utility for class merging
```
