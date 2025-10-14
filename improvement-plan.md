# Improvement Plan

## 1. Modernize Front-End Bundling
- **Goal:** Eliminate runtime CDN dependencies so builds are self-contained, optimized, and resilient offline.
- **Actions:**
  - Install Tailwind via npm and configure it through Vite (include `@vitejs/plugin-react` or `@vitejs/plugin-react-swc`).
  - Migrate the inline Tailwind config in `index.html` to `tailwind.config.ts` and import the generated CSS entry.
  - Remove the `importmap` section in `index.html`; rely on Vite’s bundling for React and router packages.
  - Verify production output with `npm run build` and smoke-test via `npm run preview`.
- **Notes:** Update deployment instructions to ensure the dist assets remain under the `/peterlamb/` base path defined in `vite.config.ts`.

## 2. Persist and Hydrate Language Preferences
- **Goal:** Remember visitors’ chosen language across sessions and initialize the document language correctly.
- **Actions:**
  - Extend `LanguageContext` to read/write the selected language from `localStorage` (with guards for SSR/No-Window contexts).
  - Sync `document.documentElement.lang` with the persisted language during initial render.
  - Consider exposing a hook-returned `setLanguage` promise or callback response so callers know when persistence succeeded.
- **Notes:** Validate accessibility by toggling languages in both themes and ensuring announcement behavior still works.

## 3. Make Marketing Content Data-Driven
- **Goal:** Prevent icon/order drift and improve maintainability for services and portfolio listings.
- **Actions:**
  - Encode icon metadata and unique IDs alongside content in `constants/content.ts` (or a dedicated mapping file).
  - Map over that structured data using stable keys instead of array indices inside `HomePage`, `ServicesPage`, and `PortfolioPage`.
  - Add lightweight helpers (e.g., `getServiceIcon`) if the same icon set is reused across pages.
- **Notes:** Keep translations aligned; icons can be locale-agnostic if defined outside the per-language copy.

## 4. Harden the Contact Flow
- **Goal:** Ensure reliable message delivery and guard against malformed `mailto:` links.
- **Actions:**
  - URL-encode both subject and body parameters (`encodeURIComponent`) and fall back gracefully if required fields are empty.
  - Optionally integrate a serverless form handler (Netlify, Formspree, custom API) for spam handling and metrics.
  - Add success/error inline messaging to confirm the user action.
- **Notes:** Update privacy copy or terms if server-side handling is introduced.

## 5. Strengthen Accessibility of Theme Controls
- **Goal:** Improve screen reader announcements and interaction semantics around the theme toggle.
- **Actions:**
  - Set `aria-pressed` on the theme toggle button to reflect its state.
  - Remove the redundant `aria-live` attribute and rely on control semantics.
  - Verify focus outlines and keyboard interaction in both desktop and mobile breakpoints.
- **Notes:** Pair with automated checks (Storybook a11y or Lighthouse) once available.

## 6. Raise Developer Experience & Documentation Quality
- **Goal:** Catch regressions earlier and guide future contributors.
- **Actions:**
  - Enable TypeScript `strict` mode, drop `allowJs`, and revisit any resulting type fixes.
  - Introduce lint/test npm scripts (`lint`, `typecheck`, `test`) and document them in `README.md`.
  - Flesh out the README’s run instructions, add deployment notes, and surface metadata usage for SEO/social tags.
  - Consider referencing `metadata.json` inside components or a layout hook to keep meta tags synchronized.
- **Notes:** After script additions, run them in CI (GitHub Actions or similar) for every PR.

