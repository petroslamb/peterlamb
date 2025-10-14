# Petros Lambropoulos – Lead Product Software Engineer

## Overview
This repository hosts the public-facing site for Petros (Peter) Lambropoulos, implemented with **React 19**, **TypeScript**, and **Vite**. Styling relies on Tailwind CSS served via CDN (see `index.html`). The router uses hash-based URLs so the site works cleanly on GitHub Pages.

## Branch & Remote Strategy
- `main` is the branch for active development and deployable code. Create commits here when making changes locally.
- `sync-from-ai` mirrors updates coming from the AI Studio workspace. It tracks the local remote named `ai`, which points to `/Users/petros/Projects/peterlamb-website`. Keep this branch clean—only use it for pulling those external commits before merging into `main`.

## Project Structure
- `index.tsx` – Vite entry point bootstrapping React into `#root`.
- `App.tsx` – Global layout, routing table, and providers for language and theme.
- `pages/` – Top-level route components (`HomePage`, `AboutPage`, `ServicesPage`, etc.). They consume translated content and handle page-specific layout.
- `components/` – Reusable UI primitives such as `Header`, `Footer`, `ThemeSwitcher`, `MetaTags`, and `AnimatedSection`.
- `constants/content.ts` – Source of truth for all English/Greek copy, navigation labels, and per-section metadata. Update this file when modifying textual content across the site.
- `constants/blogPosts.ts` – Markdown strings and metadata for blog posts surfaced on the `BlogPage`.
- `context/LanguageContext.tsx` & `context/ThemeContext.tsx` – Providers managing locale switching and dark mode.
- `hooks/useIntersectionObserver.ts` – Helper for scroll-triggered animations used by `AnimatedSection`.
- `types.ts` – Shared TypeScript interfaces describing the content shape consumed throughout the app.
- `metadata.json` – SEO and share card metadata synchronized with the UI via `MetaTags`.
- `vite.config.ts` – Vite build configuration (hash-based base path, React plugin, environment variable exposure).

## Content Architecture & Key Sections
- **Navigation + CTA copy**: `constants/content.ts` (`content[language].nav`, `home.cta`, etc.).
- **About/Services/Portfolio text**: Same `content.ts` structure; pages render arrays directly, so keep ordering consistent with the type definitions.
- **Blog posts**: `constants/blogPosts.ts` feeds both the listing (`BlogPage`) and detail route (`BlogPostPage`).
- **Metadata & social previews**: `metadata.json` and `MetaTags` component (per-page overrides via props).
- **Theme & language switching**: `Header` renders toggles wired into the context providers.

When performing site-wide copy updates, change `constants/content.ts` first, confirm TypeScript passes, then adjust page components only if structural tweaks are required.

## Working as a Fresh AI Contributor
1. **Install dependencies**: `npm install`.
2. **Run locally**: `npm run dev` (served on port 3000 by default).
3. **Validate builds**: `npm run build` before committing to ensure the static export succeeds.
4. **Change management**:
   - Prefer editing shared content in `constants/` so both locales stay aligned.
   - Update `types.ts` if you introduce new structured fields; TypeScript will guide necessary component changes.
   - Use the existing contexts/components instead of duplicating logic. For example, house new CTA buttons inside the appropriate page component and source text from the translation file.
5. **Branch discipline**: commit to `main` and push. Leave `sync-from-ai` untouched unless syncing from the external AI Studio repo.

Following this map should let any new AI agent apply codebase-wide updates confidently and keep the deployment pipeline healthy.
