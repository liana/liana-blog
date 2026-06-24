# Codesplosion

Personal blog at lianaleahy.com. Built with Eleventy and Tailwind CSS, auto-deployed to DreamHost via GitHub Actions.

## Quick Start

```bash
npm install
npm run dev
```

Site runs at http://localhost:8080/

## Production Build

```bash
npm run build
```

Output in `_site/`.

## Design

White palette with deep forest green (`#1B4332`) as the accent color. Header shows "Codesplosion" in Fredoka font with nav items (Blog, About, Resume) spaced to the right. Active page gets a green underline. Hover animates the underline in.

Brand colors in `tailwind.config.js`:
- `brand-green`: #1B4332 (primary accent)
- `brand-green-light`: #2D6A4F (hover state)

## Writing Posts

Create a Markdown file in `src/posts/`:

```markdown
---
layout: layouts/post.njk
title: "Your Post Title"
date: 2026-01-15
categories:
  - AI Strategy
featured_image: /assets/images/featured/your-image.jpg
excerpt: "Brief description for SEO and social sharing"
---

Content here...
```

## Structure

```
src/
├── _data/site.json        # Title, navigation, social links
├── _includes/
│   ├── layouts/           # base, post, page
│   └── components/        # header, footer, post-card
├── posts/                 # Blog posts (Markdown)
├── pages/                 # Static pages (About)
├── assets/css/            # Tailwind source
├── index.njk              # Homepage
└── blog.njk               # Blog listing with pagination
```

## Configuration

- **Site metadata & nav:** `src/_data/site.json`
- **Colors & typography:** `tailwind.config.js`
- **Nav hover animation:** `src/assets/css/tailwind.css` (`.nav-link` class)

## Deployment

Pushes to `main` trigger GitHub Actions which builds and deploys via FTP.

Required secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`
