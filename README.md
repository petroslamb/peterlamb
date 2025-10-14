<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1CwlaAiMnhSW_Aep8Ov2dZIC9USm09Kxg

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Syncing With AI Studio Updates

The `peterlamb-website` repository remains the source of truth for quick AI Studio iterations. Pull those changes into this repo with the preconfigured alias:

1. Run `git sync-ai` from the project root. The alias fetches from the local `../peterlamb-website` repo, recreates the `sync-from-ai` branch off `origin/main`, cherry-picks any new Studio commits, then installs dependencies and builds the site.
2. Resolve any merge conflicts that appear (typically `vite.config.ts` or the Pages workflow). After fixes, re-run `npm run build` if you had to stop the alias early.
3. Review the diff and push: `git push --set-upstream origin sync-from-ai`.
4. Open the GitHub PR, merge to `main`, and let the existing Pages workflow deploy automatically to `https://petroslamb.github.io/peterlamb/`.

This keeps AI Studio previews fast while preserving a clean, deployable copy tailored for GitHub Pages.
