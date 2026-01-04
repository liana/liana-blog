# Liana Blog - Session Handoff Document

**Date:** January 3, 2026
**Project:** Static blog migration (WordPress → 11ty)
**Repository:** https://github.com/liana/liana-blog
**Live Site:** https://lianaleahy.com
**Status:** ✅ Complete & Deployed

---

## 🎯 Current Status: COMPLETE & LIVE

### ✅ What Was Completed This Session (Jan 3, 2026)

#### Content & Link Updates
- ✅ Updated Scott Hanselman podcast link in Featured section from Changelog to Hanselminutes
  - Old: `https://changelog.com/jsparty/203`
  - New: `https://hanselminutes.com/833/from-broadway-to-engineering-to-product-with-liana-leahy`
  - Updated label from "Podcast - Changelog" to "Podcast - Hanselminutes"
- ✅ Fixed vibe coding featured image (replaced broken PNG with new JPG from abouther.com)
- ✅ About page already condensed to single paragraph (from previous session)

#### Bug Fixes
- ✅ Fixed post ordering throughout site (newest to oldest)
  - **Problem:** Posts were displaying oldest-first (Putting It Together first, Agentic Repository last)
  - **Root cause:** `.eleventy.js` already sorts posts newest-first (`b.date - a.date`), but templates were reversing it again
  - **Fix:** Removed `| reverse` filter from `src/index.njk` line 77
  - **Fix:** Removed `reverse: true` from `src/blog.njk` pagination settings
  - **Result:** Posts now correctly display newest-first (Agentic Repository → Putting It Together)

#### Deployment Status
- ✅ All changes committed and pushed to GitHub
- ✅ GitHub Actions deployment to DreamHost working correctly
- ✅ Site live at https://lianaleahy.com

---

## 📂 Project Structure

```
liana-blog/
├── .github/workflows/deploy.yml    # GitHub Actions SFTP deployment (using lftp)
├── src/
│   ├── _data/
│   │   └── site.json              # Site metadata (resume link updated)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk           # Base HTML layout
│   │   │   ├── post.njk           # Blog post template
│   │   │   └── page.njk           # Static page template
│   │   ├── components/
│   │   │   ├── header.njk         # Navigation
│   │   │   ├── footer.njk         # Copyright footer
│   │   │   └── post-card.njk      # Blog post cards
│   │   └── partials/
│   ├── posts/                      # 8 blog posts (newest to oldest)
│   │   ├── 2025-12-17-the-agentic-repository.md
│   │   ├── 2025-07-28-design-thoughtful-solutions.md
│   │   ├── 2025-04-13-vibe-coding-why-ai-still-needs-a-pilot.md
│   │   ├── 2025-03-17-use-a-state-machine-to-write-better-ai-prompts.md
│   │   ├── 2025-01-29-ai-is-a-goldfish.md
│   │   ├── 2025-01-27-what-makes-ai-product-management-different.md
│   │   ├── 2025-01-24-separating-business-logic-from-llms.md
│   │   └── 2025-01-01-putting-it-together.md
│   ├── pages/
│   │   ├── about.md               # Single paragraph career summary + 3 photos
│   │   └── 404.md
│   ├── assets/
│   │   └── images/
│   │       ├── hero-background.webp
│   │       ├── featured-media/     # 4 featured items
│   │       ├── about/              # 3 theater photos
│   │       └── featured/           # Blog post featured images
│   ├── index.njk                   # Homepage
│   ├── blog.njk                    # Blog listing
│   ├── feed.njk                    # RSS feed
│   └── sitemap.njk
├── .eleventy.js                    # Eleventy config (posts sorted newest-first)
├── tailwind.config.js
└── package.json
```

---

## 🎨 Design System

### Color Palette (tailwind.config.js)
```javascript
brand: {
  bg: '#3f5762',        // Dark blue-gray background
  'bg-dark': '#2d3f47', // Darker blue-gray (header/footer)
  cream: '#F9F6DE',     // Cream/off-white for tags
  blue: '#4FC3F7',      // Light blue for headings
  teal: '#00d084',      // Teal accent
}
```

---

## 🔑 Key Technologies

- **Static Site Generator:** Eleventy (11ty) v3.1.2
- **Styling:** Tailwind CSS v3.4.19
- **Templating:** Nunjucks (.njk)
- **Content:** Markdown with frontmatter
- **Date Handling:** Luxon
- **Deployment:** GitHub Actions → DreamHost SFTP (using lftp)

---

## 📝 Blog Posts (8 Total - Newest to Oldest)

1. **The Agentic Repository** (Dec 17, 2025) - Software Development
2. **Design Thoughtful Solutions** (Jul 28, 2025) - Product Management
3. **Vibe Coding: Why AI Still Needs a Pilot** (Apr 13, 2025) - Product Management + Software Development
4. **Use a State Machine to Write Better AI Prompts** (Mar 17, 2025) - Software Development
5. **AI is a Goldfish** (Jan 29, 2025) - Product Management
6. **What Makes AI Product Management Different** (Jan 27, 2025) - Product Management
7. **Separating Business Logic from LLMs** (Jan 24, 2025) - Software Development
8. **Putting it Together** (Jan 1, 2025) - Product Management

---

## 🚀 Deployment

### GitHub Repository
- **URL:** https://github.com/liana/liana-blog
- **Branch:** main
- **Auto-deployment:** GitHub Actions on push to main

### Deployment Configuration
- **Method:** SFTP via lftp (after trying 6 different approaches)
- **Server:** iad1-shared-b7-19.dreamhost.com
- **Path:** `/home/lleahy/lianaleahy.com/`
- **Live Site:** https://lianaleahy.com
- **Secrets:** FTP_SERVER, FTP_USERNAME, FTP_PASSWORD

### Deployment Workflow (.github/workflows/deploy.yml)
```yaml
- name: Deploy via SFTP
  run: |
    lftp -c "
    set sftp:auto-confirm yes;
    set ssl:verify-certificate no;
    open -u ${{ secrets.FTP_USERNAME }},$FTP_PASSWORD sftp://${{ secrets.FTP_SERVER }};
    mirror -R -e -v _site/ /home/lleahy/lianaleahy.com/;
    bye
    "
```

---

## 💻 Development Workflow

### Local Development
```bash
cd /Users/lianaleahy/Documents/Claude/liana-blog
npm run dev
# Server runs at http://localhost:8080/
```

### Build Commands
```bash
npm run dev              # Dev server with live reload
npm run build            # Production build to _site/
npm run clean            # Remove _site/ directory
npm run build:eleventy   # Build Eleventy only
npm run build:tailwind   # Build Tailwind CSS only
```

### Git Workflow
```bash
git status              # Check for changes
git add .               # Stage all changes
git commit -m "message" # Commit with descriptive message
git push origin main    # Push to GitHub (triggers deployment)
```

---

## 🛠️ Technical Details

### Custom Eleventy Filters (.eleventy.js)
```javascript
readableDate      // Formats dates (DD MMM YYYY)
htmlDateString    // ISO date format for datetime attributes
excerpt           // Generates excerpts from post content
readingTime       // Calculates reading time
currentYear       // Returns current year for copyright
```

### Collections Configuration
```javascript
eleventyConfig.addCollection("posts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("src/posts/*.md")
    .sort((a, b) => b.date - a.date);  // Newest first
});
```

**IMPORTANT:** Posts collection is already sorted newest-first. Do NOT add `| reverse` filters in templates or `reverse: true` in pagination settings, as this will reverse the already-correct order.

---

## 🔄 How to Resume Work

1. **Navigate to project:**
   ```bash
   cd /Users/lianaleahy/Documents/Claude/liana-blog
   ```

2. **Check current state:**
   ```bash
   git status
   git log --oneline -10
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```

4. **View site:** http://localhost:8080/

5. **When ready to deploy:**
   - Commit and push changes
   - GitHub Actions automatically deploys to lianaleahy.com

---

## 📚 Important Files Reference

### Must-Know Files
- **`.eleventy.js`** - Core config, collections (posts sorted newest-first), filters
- **`src/_data/site.json`** - Site title, description, navigation, resume link
- **`tailwind.config.js`** - Brand colors, typography
- **`src/_includes/layouts/base.njk`** - Base HTML for all pages
- **`src/index.njk`** - Homepage structure
- **`src/blog.njk`** - Blog listing with pagination
- **`src/pages/about.md`** - About page content (single paragraph)
- **`.github/workflows/deploy.yml`** - SFTP deployment workflow

---

## 🐛 Known Issues & Solutions

### Post Ordering (FIXED)
**Problem:** Posts were displaying oldest-first instead of newest-first

**Root Cause:** Collections already sorted newest-first in `.eleventy.js`, but templates were reversing the order with `| reverse` filters

**Solution:**
- Removed `| reverse` from `src/index.njk`
- Removed `reverse: true` from `src/blog.njk`

**Remember:** The posts collection is sorted newest-first by default. Never add reverse filters.

### Deployment to DreamHost
**Challenge:** Tried 6 different deployment methods before finding one that works

**Working Solution:** lftp with SFTP protocol
- Avoid special characters in passwords (had to change `!` to `1`)
- Test locally before debugging in CI
- lftp is the most reliable for DreamHost shared hosting

---

## 📊 Recent Session Summary (Jan 3, 2026)

### What Changed
1. Updated Hanselminutes podcast link in Featured section
2. Fixed post ordering bug (removed reverse filters)
3. Replaced vibe coding featured image
4. Verified About page condensed paragraph from previous session

### Git Commits This Session
- "Replace vibe coding featured image"
- "Remove WordPress migration blog post"
- "Add featured image for WordPress migration post"
- "Fix post ordering to show newest first"
- "Update Scott Hanselman podcast link to Hanselminutes"

---

## 🎯 Future Tasks

### Content Management
- [ ] Add new blog posts as written (create .md files in src/posts/)
- [ ] Update About page when career changes
- [ ] Refresh featured media items as needed
- [ ] Update resume link in site.json when resume changes

### Optional Enhancements
- [ ] Add search functionality
- [ ] Add newsletter signup
- [ ] Implement comments system
- [ ] Add analytics

---

## 💡 Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build

# Git
git status              # Check for uncommitted changes
git add .               # Stage all changes
git commit -m "message" # Commit with message
git push origin main    # Push and trigger deployment

# Server Management
pkill -f "eleventy --serve"   # Stop Eleventy server
lsof -ti:8080 | xargs kill    # Kill anything on port 8080
```

---

## ✅ Session Completion Checklist

- [x] All changes committed to git
- [x] All changes pushed to GitHub
- [x] HANDOFF.md updated with current status
- [x] Deployment successful
- [x] No uncommitted changes in working tree
- [x] Site live and working at lianaleahy.com

---

## 🎓 Key Learnings

### From Migration Journey
1. **Test deployment locally first** - Saves hours of CI debugging
2. **Special characters in passwords cause issues** - Use alphanumeric only for automation
3. **Old tools sometimes work best** - lftp from 2001 was more reliable than modern actions
4. **Default sorting matters** - Always check if data is pre-sorted before adding filters
5. **User feedback is essential** - Content tone and style preferences matter

### Technical Insights
- Eleventy collections can be pre-sorted in config
- Reversing a reversed list is a common bug
- DreamHost SFTP users don't support SSH keys
- lftp is the most reliable for shared hosting deployment

---

## 🔐 Important Notes

### Credentials
- All sensitive info stored in GitHub Secrets
- Password changed from `!c4nh4zDreamHost` to `1c4nh4zWebsite` (no special chars)
- Never commit credentials to repository

### Site Status
- ✅ All pages render correctly
- ✅ All images load properly
- ✅ Navigation works
- ✅ Blog posts in correct order (newest first)
- ✅ Homepage matches preferences
- ✅ About page polished and concise
- ✅ Deployment automated and working
- ✅ Live site accessible at lianaleahy.com

---

**Last Updated:** January 3, 2026
**Developer:** Liana Leahy
**AI Assistant:** Claude Sonnet 4.5
**Status:** ✅ Complete & Live
**Next Focus:** Content updates and new blog posts as needed
