# SmartVerify Landing Page

Responsive landing page built with React 18 + Vite and plain CSS (design tokens in `src/styles/tokens.css`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # output in dist/
npm run preview    # preview the build locally
```

## Structure

```
src/
  components/   one JSX + CSS pair per section (Navbar, Hero, Features, ...)
  data/         all page copy and lists in content.js
  styles/       tokens.css (colors, type, spacing) and base.css (reset, buttons)
```

## Matching the Figma file

All colors, fonts, sizes, spacing and radii live in `src/styles/tokens.css`.
Update those values from Figma Inspect first, then adjust section CSS where the layout differs.
Copy lives in `src/data/content.js`.

## Deploy

Push to GitHub and import the repo on Vercel or Netlify (build command `npm run build`, output `dist`).
