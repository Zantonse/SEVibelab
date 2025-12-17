# Refactor Plan for `index.html`

## Goals
- Improve maintainability by splitting the monolithic HTML file into logical assets.
- Prepare the project for future enhancements (component reuse, theming, potential build tooling).
- Keep the deployment story simple (static assets served from repo root or GitHub Pages).

## Target File/Folder Structure
```
SE Vibe Coding Lab/
├── index.html              # Slim HTML shell referencing external assets
├── css/
│   ├── reset.css           # Optional normalize/reset styles
│   ├── variables.css       # Theme tokens (colors, spacing, fonts)
│   └── main.css            # Layout + component styling extracted from inline <style>
├── js/
│   ├── data.js             # Static data (session lists, speaker info, etc.)
│   ├── components.js       # Template helpers to render cards/sections
│   ├── ui.js               # Event handlers, animations, modals
│   └── main.js             # Entry point that wires everything together
├── assets/
│   ├── images/             # Logos, backgrounds, speaker headshots
│   └── icons/              # SVG or PNG icon assets
├── data/
│   └── schedule.json       # Optional JSON source for agenda/sessions
└── plan.md                 # (this file)
```

## Work Breakdown
1. **Audit current `index.html`**
   - Identify inline `<style>` blocks → map to `css/main.css` & `css/variables.css`.
   - Collect inline `<script>` logic → classify into data/constants vs. DOM behavior.

2. **Set up asset folders**
   - Create `css/`, `js/`, `assets/`, `data/` directories.
   - Move any embedded images (if base64 or remote) into `assets/` where practical.

3. **Extract styles**
   - Copy CSS content from `<style>` into `css/main.css`.
   - Introduce `variables.css` if multiple sections share theme tokens.
   - Wire them via `<link rel="stylesheet" href="css/main.css">` (and other files).

4. **Modularize JavaScript**
   - Move data objects/arrays into `js/data.js` (or JSON under `data/`).
   - Extract reusable DOM builders into `js/components.js`.
   - Event listeners/interactions go to `js/ui.js`.
   - `js/main.js` becomes the orchestrator importing the other modules (via ES modules).

5. **Update `index.html`**
   - Remove inline `<style>` / `<script>`.
   - Reference the new CSS/JS files with `<link>` and `<script type="module">` tags.
   - Ensure DOMContentLoaded or top-level module code initializes the page.

6. **Validation & Tooling**
   - Run `npm create vite@latest` (optional future step) if SPA tooling desired.
   - For now, rely on live-server or VS Code Live Preview to confirm parity.
   - Add `.gitignore` entries (`node_modules/`, `*.log`, etc.) for future tooling.

7. **Documentation & Deployment**
   - Update `README.md` with new structure and dev instructions (`npm install`, `npm run dev` if tooling added later; otherwise mention `npx serve`).
   - Optionally configure GitHub Pages (deploy `main` or `/docs` folder).

## Acceptance Criteria
- Visual output matches original single-file version.
- All CSS/JS removed from `index.html`; page loads via external assets.
- Project passes basic HTML/CSS/JS validation (no console errors).
- Repository includes clear instructions for running locally.
