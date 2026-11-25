# Field Notes · Palla Chetana Reddy

Personal portfolio, live at https://palla-chetana-reddy.netlify.app

An engineering-logbook design: every project is a "case file" with its pipeline drawn as a schematic, the career is a metro line, and skills are shown as a proof matrix that links each skill to the projects that use it.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Editing content

All content lives in `src/data.js`: profile, case files (`projects`), journey, experience, honors, certifications and the archive. Each project's `flow` array draws its schematic (5 steps; `k` is `io`, `proc`, `store` or `guard`), and its `skills` array fills the proof matrix.

Rule for this site: every number must come from a repo, README, test run or verified document.

## Stack

React 18 + Vite, hand-written CSS (no UI framework), Fraunces, IBM Plex Sans/Mono and Caveat from Google Fonts. Light and dark themes follow the system setting, with a manual toggle.
