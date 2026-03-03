# Linktree Clone — kolosal.ai

[![Deploy to GitHub Pages](https://github.com/dimaswibawa2004-dotcom/Linktree/actions/workflows/deploy.yml/badge.svg)](https://github.com/dimaswibawa2004-dotcom/Linktree/actions/workflows/deploy.yml)

A pixel-close static clone of [linktr.ee/kolosal.ai](https://linktr.ee/kolosal.ai) built with pure **HTML**, **CSS**, and **JavaScript**. Auto-deploys to GitHub Pages on every push via GitHub Actions.

## Live Site

**[https://dimaswibawa2004-dotcom.github.io/Linktree/](https://dimaswibawa2004-dotcom.github.io/Linktree/)**

> To enable: **Settings → Pages → Source → GitHub Actions**

---

## Project Structure

```
LINKTREE/
├── .github/
│   └── workflows/
│       └── deploy.yml  ← GitHub Actions: validate + deploy to Pages
├── index.html          ← Page markup & 10 links
├── styles.css          ← Black theme, buttons, animations
├── script.js           ← Ripple effect & entrance animations
├── PLAN.md             ← Step-by-step build explanation
└── README.md           ← This file
```

---

## Features

- **Exact design match** — black background, dark buttons, Epilogue font
- **10 working links** — all pointing to the real Kolosal AI URLs
- **LinkedIn social icon**
- **Staggered entrance animation** — buttons cascade in on load
- **Ripple click effect** — Material-style tactile feedback
- **Responsive** — works on mobile and desktop
- **Accessible** — semantic HTML, `aria-label` on icon links, `alt` on images

---

## GitHub Actions Workflow

Every push to `main` triggers a two-job pipeline:

```
push to main
    │
    ▼
┌─────────────┐       fail → blocked
│  validate   │ ────────────────────►  (deploy is skipped)
│             │
│ • files OK  │
│ • HTML OK   │
│ • 10 links  │
└──────┬──────┘
       │ pass
       ▼
┌─────────────┐
│   deploy    │
│             │
│ configure   │
│ upload      │
│ deploy      │──────────► GitHub Pages (live URL printed)
└─────────────┘
```

| Job | Steps | Purpose |
|---|---|---|
| `validate` | Check files, HTML, link count | CI gate — block bad deploys |
| `deploy` | checkout → configure → upload → deploy | Publish to GitHub Pages |

**Triggers:** push to `main` · manual via `workflow_dispatch`

---

## Design Tokens

| Token | Value |
|---|---|
| Background | `#000000` |
| Button background | `#141414` |
| Button hover | `#1e1e1e` |
| Text | `#f5f6f7` |
| Muted text | `#9b9b9b` |
| Accent | `#ffffff` |
| Button radius | `16px` |
| Font | Epilogue (primary), Inter (secondary) |

---

## Links Included

| # | Title | Destination |
|---|---|---|
| 1 | Tax Planning Dashboard | kolosalai-ops.github.io/tax-planning |
| 2 | Kolosal Math | kolosalai-ops.github.io/maths-calculus |
| 3 | CA Prep Indonesia | kolosalai-ops.github.io/cpa-prep |
| 4 | Kolosal Finance - CFO Dashboard | kolosal-finance-production.up.railway.app |
| 5 | Kolosal Repo Legal Document | github.com/KolosalAI/legal-docs |
| 6 | Standard Legal Document | Google Docs |
| 7 | Kolosal Legal - Legal Document Platform | kolosal-legal-production.up.railway.app |
| 8 | Finance Directory | Google Drive |
| 9 | Spreadsheet | Google Sheets |
| 10 | Google Meet | meet.google.com |

---

## How to Run Locally

```bash
git clone https://github.com/dimaswibawa2004-dotcom/Linktree.git
cd Linktree
# open index.html in browser — no server or build step needed
```

---

## Enable GitHub Pages Deployment

1. Push all files to `main`
2. Go to **Settings → Pages**
3. Set **Source** to **GitHub Actions**
4. The workflow runs automatically — live URL appears in the Actions log

---

## See the Plan

Read [`PLAN.md`](./PLAN.md) for a complete step-by-step explanation of how this was built, including the GitHub Actions workflow design.

---

*Cloned from [linktr.ee/kolosal.ai](https://linktr.ee/kolosal.ai)*
