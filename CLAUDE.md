# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check (tsc -b) then build for production
npm run lint       # Run ESLint on all TS/TSX files
npm run preview    # Preview production build locally
```

No test suite is currently configured.

## Architecture

This is a single-page portfolio/showcase application built with **React 19 + TypeScript + Vite**.

### Component tree

```
App
├── Navbar
├── <main>
│   ├── Hero (wraps ParticleNetwork — canvas-based animation)
│   ├── About
│   ├── FeaturedProjects (opens ProjectDetailModal on click)
│   ├── Skills
│   └── Contact
└── Footer
```

### Data layer

All portfolio content lives in `src/data/projects.ts` as a typed array. Each project entry contains:

- Short metadata (id, title, blurb, type, tools, role, year, optional coverImage)
- A full `caseStudy` object (overview, goal, role, process, challenges, solution, outcome, reflection)

`FeaturedProjects` renders the grid; `ProjectDetailModal` consumes the case study fields.

### Styling system

- **`src/styles/theme.css`** — CSS custom properties for the entire site: warm beige palette, muted-gold accent (`--color-accent: #c4992a`), Inter/Fraunces font pairing, spacing scale, and motion timings.
- **`src/styles/global.css`** — Global selectors, `clamp()`-based responsive type scale, and utility classes (`.container`, `.section`, `.eyebrow`).
- Each component has a co-located **CSS Module** (`*.module.css`) for scoped styles.

### TypeScript config

`tsconfig.app.json` uses strict mode with `noUnusedLocals` and `noUnusedParameters` — the build will fail if you leave unused variables. Target is ES2023; module resolution is `bundler`.
