# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based portfolio site with React components and Tailwind CSS. Static site output deployed to Vercel.

## Commands

```bash
pnpm dev        # Start development server (http://localhost:4321)
pnpm build      # Type-check and build for production
pnpm preview    # Preview production build locally
pnpm astro      # Run Astro CLI directly
```

## Architecture

- **Astro** handles page routing and static generation (`src/pages/index.astro`)
- **React components** are used for interactive elements in `src/React/` (LetterGlitch, LikeButton, SkillsList)
- **Tailwind** via `@astrojs/tailwind` integration with custom animations in `tailwind.config.mjs`
- **Layout system**: `src/layouts/Layout.astro` provides base HTML with global styles, fonts, and SEO meta tags
- **Components**: Astro components in `src/components/` for static sections (nav, footer, home, projects, contact, logoWall)

## Path Aliases

- `@` → `src/`
- `@components` → `src/components/`

## Styling

- CSS custom properties defined in `Layout.astro` (`--background`, `--sec`, `--white`, etc.)
- Montserrat variable font loaded from `/public/fonts/`
- Custom scrollbar styling in global CSS

## Key Files

- `astro.config.mjs` - Astro config with path aliases, static output, and server settings
- `src/firebase.ts` - Firebase integration for LikeButton
- `public/` - Static assets including SVG and fonts

## Tech Stack

Astro 5, React 19, Tailwind CSS, TypeScript, Firebase, sharp (image processing)