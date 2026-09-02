# Bohdan Chuprynka - Personal Portfolio

This repository contains the production files for my personal portfolio website.

The website is a single static page: dark, minimal, recruiter-first, with a longer "Beyond the résumé" section for anyone who wants the story behind the work. No JavaScript, no trackers, self-hosted fonts.

Live site: <https://bohdanchuprynka.github.io/Website-Portfolio/>

## Production structure

- `site/` is the exact static site published to GitHub Pages.
- `site/index.html` holds all markup and CSS. Fonts (Geist, Geist Mono), images, the public résumé PDF, and the Open Graph card live next to it.
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
