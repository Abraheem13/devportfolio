# Raja Abraheem Rashid — Research Portfolio

Personal research portfolio for **Raja Abraheem Rashid** — AI/ML Researcher. Built on Next.js and originally forked from [`socialyadept/devportfolio`](https://github.com/socialyadept/devportfolio), heavily customised with two new sections — **Research** and **Collaborations** — and rewritten for academic use.

## Pages

- `/` — Home (greeting + skills)
- `/education` — Education + Awards & Recognition
- `/experience` — Industry + Research experience
- `/research` — **Research areas + publications (click any paper to expand a short description; filter by Under Review / In Preparation)**
- `/collaborations` — **Stats + 8 professor cards + supervised student projects**
- `/projects` — Selected technical projects
- `/contact` — Contact info
- `/resume` — Inline CV viewer (serves `public/documents/abraheem_resume.pdf`)

## All the data lives in one file

**`src/portfolio.js`** — edit this to update anything on the site. Exports:

```
settings, greeting, socialMediaLinks, socialMediaLinksHome, skills,
competitiveSites, degrees, certifications, experience, projectsHeader,
contactPageData, blogs, research, collaborations
```

### Adding a new publication

```js
// inside research.publications in src/portfolio.js
{
  title: "Paper title",
  authors: "R. A. R. Ejaz, Co-author, …",
  venue: "Venue name",
  status: "Under Review",   // or "In Preparation"
  year: "2026",
  areas: ["Tag 1", "Tag 2"],
  description: "One-paragraph summary shown when the card is clicked.",
}
```

### Filling in the 8th collaborator card

The 8 professor cards are in `collaborations.professors` in `src/portfolio.js`. Seven are pre-filled from the CV; the 8th is a `TBD` placeholder — just replace its fields when you have a name.

### Research supervision

`collaborations.supervisedProjects` has the four IBA Karachi projects scaffolded (FedSRIMU, Panopticon, HADES, TEMPEST). The supervision count in `collaborations.stats[0].value` is automatically descriptive text — update the number there if it changes.

## Theme

`src/theme.js` — currently set to `lightTheme` at the bottom. Swap `chosenTheme` to `blueTheme`, `purpleTheme`, `violetTheme`, etc. for a different feel. The `blueTheme` tends to suit academic portfolios well.

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build & deploy

```bash
npm run build
npm run start
```

For Vercel deploys, `vercel.json` is included.

## Swap in your own photo

The Home page currently uses the existing `FeelingProud` SVG illustration from `src/atoms/FeelingProud.js`. To use a photo instead:

1. Drop it into `public/images/` (e.g. `abraheem.jpg`).
2. In `src/containers/greeting/Greeting.js`, replace the `<FeelingProud … />` block with a `next/image` pointing to that file.

## Update the sitemap

`public/sitemap.xml` uses `https://abraheemrashid.com/` as a placeholder domain — replace it with the domain you actually deploy to.

---

**Credits:** UI originally by [socialyadept](https://github.com/socialyadept/devportfolio), itself inspired by Ashutosh's MasterFolio. Research and Collaborations sections custom-built for this portfolio.
