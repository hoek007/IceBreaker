# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: Next.js Version Warning

This project uses **Next.js 16.2.6** with **React 19.2.4** — a version with breaking changes from prior releases. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/`. Do not rely on training data for API shapes, routing conventions, or component APIs.

## Commands

```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint (Next.js core-web-vitals + typescript rules)
```

No test suite exists yet.

## Architecture

This is a Next.js App Router project using TypeScript and Tailwind CSS v4.

- `app/layout.tsx` — root layout; loads Geist Sans and Geist Mono via `next/font/google`, wraps all pages
- `app/page.tsx` — home page (currently the default scaffolded page)
- `app/globals.css` — global styles; Tailwind is imported with `@import "tailwindcss"` (v4 syntax, not `@tailwind` directives)

**Tailwind v4 note**: Configuration is via `postcss.config.mjs` using `@tailwindcss/postcss`. There is no `tailwind.config.*` file — theme tokens are defined with `@theme` blocks in CSS.

**Path alias**: `@/*` resolves to the project root (e.g., `@/app/...`, `@/components/...`).
