# Lyrics & Logic Blog - Session Handoff

**Project**: Static blog to replace WordPress site at lianaleahy.com
**Tech Stack**: 11ty (Eleventy) v3, Tailwind CSS v3, Markdown, GitHub Actions
**Status**: Phases 1-4 & 6 COMPLETE | Phase 5 (WordPress Migration) PENDING | Phase 7 (Testing) PENDING
**Last Updated**: 2026-01-01

---

## 🎯 Current Status

### ✅ What's Complete

**Phase 1-4: Core Site Built**
- ✅ Project structure with 11ty + Tailwind CSS
- ✅ All layouts: base, post, page
- ✅ All components: header, footer, navigation, post-card, social-links
- ✅ Homepage with hero section and latest posts
- ✅ Blog listing page with pagination
- ✅ Category pages (Software Development, Product Management)
- ✅ About page and 404 page
- ✅ 2 sample blog posts
- ✅ RSS feed (`/feed.xml`)
- ✅ XML sitemap (`/sitemap.xml`)
- ✅ SEO meta tags (Open Graph, Twitter Cards)
- ✅ Syntax highlighting for code blocks
- ✅ Reading time calculation
- ✅ Date formatting filters

**Phase 6: Deployment Setup**
- ✅ GitHub repository created: https://github.com/liana/liana-blog
- ✅ GitHub Actions workflow configured
- ✅ GitHub Secrets set up (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)
- ✅ FTP path configured: `/home/lleahy/lianaleahy.com/`
- ✅ Auto-deployment on push to `main` branch

### ⏳ What's Pending

**Phase 5: WordPress Migration (NEXT)**
- Export WordPress content to XML
- Convert posts to Markdown using `wordpress-export-to-markdown`
- Download and organize featured images
- Map categories to new structure
- Update internal links
- Set up redirects if needed

**Phase 7: Testing & Polish**
- Test live site at lianaleahy.com
- Cross-browser testing
- Mobile responsiveness check
- Accessibility audit (WCAG 2.0 AA)
- Performance optimization
- Verify all links work
- Test RSS feed

---

## 📂 Project Structure

```
/Users/lianaleahy/Documents/Claude/liana-blog/
├── .github/workflows/deploy.yml    # GitHub Actions deployment
├── src/
│   ├── _data/site.json            # Site metadata & navigation
│   ├── _includes/                  # Templates & components
│   ├── posts/                      # Blog posts (Markdown)
│   │   ├── 2024-01-15-welcome-to-lyrics-and-logic.md
│   │   └── 2024-02-10-lessons-from-the-stage.md
│   ├── pages/                      # Static pages
│   │   ├── about.md
│   │   └── 404.md
│   ├── category/                   # Category pages
│   │   ├── software-development.njk
│   │   └── product-management.njk
│   ├── assets/                     # CSS, JS, images
│   ├── index.njk                   # Homepage
│   ├── blog.njk                    # Blog listing
│   ├── categories.njk              # Categories overview
│   ├── feed.njk                    # RSS feed
│   ├── sitemap.njk                 # XML sitemap
│   └── robots.txt
├── _site/                          # Generated output (gitignored)
├── .eleventy.js                    # Eleventy config
├── tailwind.config.js              # Tailwind config
├── package.json                    # Dependencies & scripts
└── README.md                       # Full documentation
```

---

## 🔑 Key Information

### GitHub Repository
- **URL**: https://github.com/liana/liana-blog
- **Branch**: `main`
- **Auto-deploys on push**: Yes, via GitHub Actions

### DreamHost Deployment
- **FTP Server**: Set in GitHub Secret `FTP_SERVER`
- **Username**: Set in GitHub Secret `FTP_USERNAME` (DreamHost user: `lleahy`)
- **Password**: Set in GitHub Secret `FTP_PASSWORD`
- **Deploy Path**: `/home/lleahy/lianaleahy.com/`
- **Live URL**: https://lianaleahy.com

### Local Development
```bash
# Start dev server (with live reload)
cd /Users/lianaleahy/Documents/Claude/liana-blog
npm run dev
# Opens at http://localhost:8080/

# Production build
npm run build
# Output in _site/
```

### Brand Colors (Tailwind)
- `brand-blue`: #1e3a8a
- `brand-teal`: #0d9488
- `brand-light`: #e0f2fe

---

## 📝 How to Add a New Blog Post

1. Create file in `src/posts/` with format: `YYYY-MM-DD-post-title.md`
2. Add frontmatter:
```yaml
---
title: "Your Post Title"
date: 2024-01-15
categories:
  - Software Development
  - Product Management
featured_image: /assets/images/featured/image.jpg
excerpt: "Brief description for SEO"
layout: layouts/post.njk
---

Your markdown content here...
```

3. Commit and push:
```bash
git add .
git commit -m "Add new post: Title"
git push
```

4. GitHub Actions automatically deploys to lianaleahy.com

---

## 🚀 Next Session Priorities

### Priority 1: WordPress Migration (Phase 5)
The existing WordPress site has content that needs to be migrated:

**Steps**:
1. **Export WordPress**: Tools → Export → All content (creates XML file)
2. **Convert to Markdown**:
   ```bash
   npx wordpress-export-to-markdown
   # Follow prompts, outputs to folder
   ```
3. **Move posts**: Copy converted markdown files to `src/posts/`
4. **Download images**: Fetch featured images from WordPress
5. **Update paths**: Fix image references in posts
6. **Verify categories**: Ensure posts use "Software Development" and "Product Management"
7. **Test locally**: `npm run dev` and check all posts
8. **Deploy**: `git push` to deploy

**WordPress Site Features to Preserve**:
- Blog posts with categories
- Featured images
- Post dates and metadata
- "From Curtain to Code" branding (already in place)
- Social links (Instagram, Facebook, Twitter)

### Priority 2: Update Real Content
After migration, update placeholder content:
- Update social media links in `src/_data/site.json`
- Add real profile image to `src/assets/images/`
- Update About page with actual bio
- Add real resume PDF to `src/assets/`

### Priority 3: Testing & Launch (Phase 7)
- Verify deployment succeeded at lianaleahy.com
- Test all pages on mobile/tablet/desktop
- Check RSS feed works
- Verify sitemap is accessible
- Test category filtering
- Ensure pagination works with real posts

---

## 🐛 Known Issues / Notes

### Tailwind CSS Version
- Initially installed v4.1.18 (too new, no CLI)
- **Downgraded to v3.4.19** - this is correct, don't upgrade
- Uses `npx tailwindcss` in build scripts

### Footer Copyright Year
- Currently hardcoded to `2024` in footer.njk
- Original attempt to use dynamic date failed (Nunjucks syntax issue)
- Could add a filter in future if needed

### FTP Deployment Path
- DreamHost username: `lleahy`
- Path: `/home/lleahy/lianaleahy.com/`
- Already configured in `.github/workflows/deploy.yml`

### Sample Posts
- 2 sample posts exist for testing
- **Delete or replace** these before official launch

---

## 📚 Important Files to Reference

### Configuration
- **`.eleventy.js`**: Eleventy config (collections, filters, plugins)
- **`src/_data/site.json`**: Site title, navigation, social links
- **`tailwind.config.js`**: Brand colors and Tailwind setup

### Templates
- **`src/_includes/layouts/base.njk`**: Base HTML for all pages
- **`src/_includes/layouts/post.njk`**: Blog post template
- **`src/_includes/components/header.njk`**: Site header with navigation
- **`src/_includes/partials/meta-tags.njk`**: SEO meta tags

### Content
- **`src/posts/`**: All blog posts (Markdown)
- **`src/pages/about.md`**: About page content

### Deployment
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow
- **`README.md`**: Full project documentation

---

## 💡 Quick Commands Reference

```bash
# Navigate to project
cd /Users/lianaleahy/Documents/Claude/liana-blog

# Local development
npm run dev          # Start dev server at localhost:8080

# Build
npm run build        # Production build to _site/

# Git workflow
git status           # Check changes
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push             # Deploy to GitHub (triggers auto-deployment)

# View GitHub Actions
# Go to: https://github.com/liana/liana-blog/actions
```

---

## 🎓 Learning Resources

- **11ty Docs**: https://www.11ty.dev/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Nunjucks Templating**: https://mozilla.github.io/nunjucks/
- **WordPress Export Tool**: https://github.com/lonekorean/wordpress-export-to-markdown
- **GitHub Actions**: https://docs.github.com/en/actions

---

## ✅ Session Completion Checklist

When ending a session, verify:
- [ ] All changes committed to git
- [ ] Dev server stopped (or left running intentionally)
- [ ] This HANDOFF.md updated with current status
- [ ] Todo list reflects actual progress
- [ ] Any credentials/secrets documented (but NOT stored in repo)
- [ ] Next steps clearly defined

---

## 🔄 Resuming Work

**To continue in next session:**

1. **Review this handoff document** to understand current state
2. **Check GitHub Actions** to verify deployment status
3. **Start local dev server**: `npm run dev`
4. **Review the plan**: See `/Users/lianaleahy/.claude/plans/temporal-cooking-knuth.md`
5. **Pick up with Phase 5**: WordPress content migration

**Questions to ask yourself:**
- Has the GitHub deployment succeeded?
- Do I want to test the live site first?
- Should I migrate WordPress content or write new posts?
- Are there any features I want to add/change before migration?

---

**Last worked on**: GitHub deployment setup and local preview
**Developer**: Liana Leahy
**AI Assistant**: Claude Sonnet 4.5
**Next session focus**: WordPress migration (Phase 5)
