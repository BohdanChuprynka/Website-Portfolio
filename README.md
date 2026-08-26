# Bohdan Chuprynka - Personal Portfolio

This repository contains the production files for my personal portfolio website.

The website presents my experience, projects, and skills through a responsive, scroll-driven single page with dark and light themes.

Live site: <https://bohdanchuprynka.github.io/Website-Portfolio/>

## Production structure

- `site/` is the exact static site published to GitHub Pages.
- `scripts/check-site.mjs` validates production metadata, local assets, external-link safety, accessibility basics, and blocked sensitive-content patterns.
- `.github/workflows/deploy.yml` verifies and deploys `site/` after a push to `main`.

The previous React portfolio remains recoverable from the `archive/legacy-portfolio-2026-08-26` branch and the `legacy-portfolio-2026-08-26` tag.

## Local preview

From the repository root:

```bash
python3 -m http.server 8000 --directory site
```

Then open <http://localhost:8000/>.

## Verification

```bash
node scripts/check-site.mjs
```
