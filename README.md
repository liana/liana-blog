# Lyrics & Logic

A modern, responsive personal blog built with 11ty (Eleventy) and Tailwind CSS. This static site replaces the previous WordPress installation at lianaleahy.com.

## Features

- ✅ Static site generation with 11ty v3
- ✅ Tailwind CSS for styling with custom brand colors
- ✅ Markdown-based content management
- ✅ Blog post categories (Software Development, Product Management)
- ✅ Pagination support
- ✅ RSS feed generation
- ✅ XML sitemap
- ✅ SEO-optimized with Open Graph and Twitter Card meta tags
- ✅ Syntax highlighting for code blocks
- ✅ Reading time calculation
- ✅ Responsive design
- ✅ Automatic deployment to DreamHost via GitHub Actions

## Project Structure

```
liana-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── _data/
│   │   └── site.json           # Site metadata and navigation
│   ├── _includes/
│   │   ├── layouts/            # Page layouts (base, post, page)
│   │   ├── components/         # Reusable components (header, footer, etc.)
│   │   └── partials/           # Page partials (head, meta tags)
│   ├── posts/                  # Blog posts (Markdown)
│   ├── pages/                  # Static pages (About, 404)
│   ├── category/               # Category listing pages
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── index.njk               # Homepage
│   ├── blog.njk                # Blog listing with pagination
│   ├── categories.njk          # Categories overview
│   ├── feed.njk                # RSS feed
│   ├── sitemap.njk             # XML sitemap
│   └── robots.txt
├── _site/                      # Generated output (gitignored)
├── .eleventy.js                # Eleventy configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## Local Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd liana-blog

# Install dependencies
npm install
```

### Development Server

```bash
# Start development server with live reload
npm run dev
```

The site will be available at `http://localhost:8080/`

This command runs both:
- Eleventy in watch mode (rebuilds on file changes)
- Tailwind CSS in watch mode (recompiles styles)

### Production Build

```bash
# Build for production
npm run build
```

Output will be in the `_site/` directory.

## Writing Blog Posts

Create a new Markdown file in `src/posts/` with the following frontmatter:

```markdown
---
title: "Your Post Title"
date: 2024-01-15
categories:
  - Software Development
  - Product Management
featured_image: /assets/images/featured/your-image.jpg
excerpt: "A brief description for SEO and social sharing"
layout: layouts/post.njk
---

Your post content here...
```

### Post Frontmatter Fields

- `title` (required): Post title
- `date` (required): Publication date
- `categories` (optional): Array of categories
- `featured_image` (optional): Path to featured image
- `excerpt` (optional): Custom excerpt (auto-generated if not provided)
- `layout` (required): Should be `layouts/post.njk`

## Deployment

### GitHub Actions Setup

The site automatically deploys to DreamHost when you push to the `main` branch.

#### Required GitHub Secrets

Set these in your GitHub repository settings (Settings → Secrets and variables → Actions):

1. `FTP_SERVER`: Your FTP server address (e.g., `ftp.lianaleahy.com`)
2. `FTP_USERNAME`: Your FTP username
3. `FTP_PASSWORD`: Your FTP password

#### Workflow

1. Push changes to `main` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the site
   - Deploys via FTP to DreamHost

You can also trigger deployment manually from the Actions tab in GitHub.

### Manual Deployment

If you need to deploy manually:

```bash
# Build the site
npm run build

# Upload the _site/ directory to your server via FTP/SFTP
```

## Configuration

### Site Metadata

Edit `src/_data/site.json` to update:
- Site title and description
- Author information
- Social media links
- Navigation menu

### Brand Colors

Tailwind brand colors are defined in `tailwind.config.js`:
- `brand-blue`: #1e3a8a
- `brand-teal`: #0d9488
- `brand-light`: #e0f2fe

### Adding Navigation Items

Edit the `navigation` array in `src/_data/site.json`:

```json
{
  "navigation": [
    { "title": "Home", "url": "/" },
    { "title": "Blog", "url": "/blog/" },
    { "title": "Your Page", "url": "/your-page/" }
  ]
}
```

## WordPress Migration

To migrate content from the old WordPress site:

1. Export WordPress content (Tools → Export → All content)
2. Convert to Markdown using [wordpress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown)
3. Move converted files to `src/posts/`
4. Download featured images to `src/assets/images/featured/`
5. Update image paths in frontmatter

## SEO Features

- ✅ Semantic HTML5 markup
- ✅ Open Graph meta tags for social sharing
- ✅ Twitter Card support
- ✅ Canonical URLs
- ✅ XML sitemap at `/sitemap.xml`
- ✅ RSS feed at `/feed.xml`
- ✅ robots.txt
- ✅ Descriptive alt text for images

## Browser Support

Modern browsers (last 2 versions):
- Chrome
- Firefox
- Safari
- Edge

## License

ISC

## Author

Liana Leahy - [hello@lianaleahy.com](mailto:hello@lianaleahy.com)
