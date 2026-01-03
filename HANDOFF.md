# Liana Blog - Session Handoff Document

**Date:** January 2, 2026
**Project:** Static blog migration (WordPress → 11ty)
**Repository:** https://github.com/liana/liana-blog
**Live Dev Server:** http://localhost:8080/
**Status:** ~98% Complete - Ready for Deployment Testing

---

## 🎯 Current Status: MAJOR PROGRESS

### ✅ What Was Completed This Session

#### Homepage Styling & Layout
- ✅ Fixed header color to match design system (`bg-brand-bg-dark` #2d3f47)
- ✅ Added AI theater background image to hero section
- ✅ Removed hero title, kept "Read the Blog" button with image background
- ✅ Reordered layout: Hero → Featured → Latest Posts
- ✅ Featured section: 4 media items in a row with downloaded images
- ✅ All design colors harmonized (removed bright teal that was too vivid)

#### About Page - Complete Redesign
- ✅ Fetched and integrated full WordPress About page content (word-for-word)
- ✅ Created comprehensive career narrative covering:
  - Silicon Valley origins & Smith College (CS + Theater)
  - NYC double life (financial software + off-Broadway)
  - Harvard Berkman Center & Vint Cerf (StopBadware)
  - Social gaming at DisruptorBeam
  - Product Management journey (MeYou Health, Indigo Ag)
  - MBTA digital transformation (Webby Honoree 2019)
  - Woebot Health (AI/LLM mental health)
  - **Current: Amazon Robotics** (Principal PM Technical)
  - Music and personal interests
- ✅ Layout: 3 photos in row at top, narrative text below
- ✅ Images resized and cropped to uniform height with proper positioning
- ✅ Removed AI-sounding phrases (em dashes, overly effusive language)
- ✅ Polished and streamlined all content

#### Blog Posts Migration
- ✅ All 8 WordPress blog posts migrated with FULL original content (word-for-word, no summaries)
- ✅ Blog post styling fixed:
  - Removed hero images from individual posts
  - Fixed heading contrast (forced white via typography config)
  - Proper layout with post.njk template
- ✅ All featured images downloaded and integrated
- ✅ Categories properly assigned

#### Footer & Site-wide Updates
- ✅ Removed all social media links from footer
- ✅ Added dynamic `currentYear` filter (auto-updates copyright year)
- ✅ Simplified footer to centered copyright only
- ✅ Site title: "Lyrics & Logic" with subtitle "A journey from performance to tech"

---

## 📂 Final Project Structure

```
liana-blog/
├── .github/workflows/deploy.yml    # GitHub Actions FTP deployment
├── src/
│   ├── _data/
│   │   └── site.json              # Site metadata (title, navigation)
│   ├── _includes/
│   │   ├── layouts/
│   │   │   ├── base.njk           # Base HTML layout
│   │   │   ├── post.njk           # Blog post template
│   │   │   └── page.njk           # Static page template
│   │   ├── components/
│   │   │   ├── header.njk         # Navigation (bg-brand-bg-dark)
│   │   │   ├── footer.njk         # Copyright footer (no socials, dynamic year)
│   │   │   ├── post-card.njk      # Blog post cards
│   │   │   └── social-links.njk   # (unused in footer now)
│   │   └── partials/
│   │       ├── head.njk
│   │       └── meta-tags.njk
│   ├── posts/                      # 8 blog posts (full WordPress content)
│   │   ├── 2025-12-17-the-agentic-repository.md
│   │   ├── 2025-12-13-ai-agents-and-operations-at-amazon.md
│   │   ├── 2024-10-18-why-coding-makes-you-a-better-pm.md
│   │   ├── 2024-09-28-messy-beautiful-truth-about-pm.md
│   │   ├── 2024-09-07-strategic-thinking-in-pm.md
│   │   ├── 2024-08-30-best-advice-as-pm.md
│   │   ├── 2024-08-23-how-to-be-great-stakeholder.md
│   │   └── 2024-08-16-most-important-thing-pm.md
│   ├── pages/
│   │   ├── about.md               # Complete career narrative + 3 photos
│   │   └── 404.md
│   ├── assets/
│   │   ├── css/
│   │   │   └── tailwind.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   │       ├── hero-background.webp            # AI theater image
│   │       ├── featured-media/                 # 4 featured thumbnails
│   │       │   ├── broadway-to-engineering.jpg
│   │       │   ├── mbta-article.jpg
│   │       │   ├── deprecations-video.jpeg
│   │       │   └── js-party-podcast.webp
│   │       ├── about/                          # 3 theater photos
│   │       │   ├── BuddyColorado.jpg
│   │       │   ├── desperate5.jpg
│   │       │   └── CurseoftheJadeScorpion_preview-687x1024.jpg
│   │       └── featured/                       # Blog post featured images
│   ├── index.njk                   # Homepage
│   ├── blog.njk                    # Blog listing with pagination
│   ├── feed.njk                    # RSS feed
│   ├── sitemap.njk                 # XML sitemap
│   └── robots.txt
├── _site/                          # Generated output (gitignored)
├── .eleventy.js                    # Eleventy config + currentYear filter
├── tailwind.config.js              # Brand colors + typography overrides
├── package.json                    # Dependencies & build scripts
└── README.md
```

---

## 🎨 Design System

### Color Palette (tailwind.config.js)
```javascript
brand: {
  bg: '#3f5762',        // Dark blue-gray background
  'bg-dark': '#2d3f47', // Darker blue-gray (header/footer)
  cream: '#F9F6DE',     // Cream/off-white for tags
  secondary: '#fcf8f2', // Light beige
  cyan: '#0693e3',      // Vivid cyan blue accent
  purple: '#9b51e0',    // Vivid purple accent
  light: '#f7fafc',     // Very light gray
  teal: '#00d084',      // Bright green-cyan (defined but not used - too bright)
}
```

### Typography Overrides
All headings (h1-h6) forced to white (#ffffff) via custom typography config in tailwind.config.js to ensure proper contrast on dark backgrounds.

---

## 🔑 Key Technologies

- **Static Site Generator:** Eleventy (11ty) v3.1.2
- **Styling:** Tailwind CSS v3.4.19
- **Plugins:** @tailwindcss/typography, @tailwindcss/forms
- **Templating:** Nunjucks (.njk)
- **Content:** Markdown with frontmatter
- **Date Handling:** Luxon
- **Deployment:** GitHub Actions → DreamHost via FTP

---

## 📝 Blog Posts Migrated (8 Total)

1. **The Agentic Repository** (Dec 17, 2025) - Software Development
2. **AI Agents and Operations at Amazon** (Dec 13, 2025) - Software Development
3. **Why Coding Makes You a Better Product Manager** (Oct 18, 2024) - Product Management
4. **The Messy, Beautiful Truth About Product Management** (Sep 28, 2024) - Product Management
5. **Strategic Thinking in Product Management** (Sep 7, 2024) - Product Management
6. **The Best Advice I Ever Got as a Product Manager** (Aug 30, 2024) - Product Management
7. **How to Be a Great Stakeholder** (Aug 23, 2024) - Product Management
8. **The Most Important Thing About Product Management** (Aug 16, 2024) - Product Management

All posts include:
- Full original WordPress content (word-for-word, NO summaries)
- Featured images (displayed on homepage/blog listing, removed from individual posts)
- Proper categories
- Reading time calculation
- Proper layout and styling

---

## 🚀 Deployment

### GitHub Repository
- **URL:** https://github.com/liana/liana-blog
- **Branch:** main
- **Auto-deployment:** Configured via GitHub Actions

### GitHub Actions Workflow
- Triggers on push to `main` branch
- Builds site with `npm run build`
- Deploys to DreamHost via FTP
- Secrets configured: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD

### DreamHost Details
- **Path:** `/home/username/lianaleahy.com/`
- **Target URL:** https://lianaleahy.com

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

### Important: Server Restart After Design Changes
Always restart dev server after CSS/Tailwind config changes:
```bash
pkill -f "eleventy --serve" && sleep 2 && npm run dev
```

### Git Workflow
```bash
git status              # Check for changes
git add .               # Stage all changes
git commit -m "message" # Commit with descriptive message
git push origin main    # Push to GitHub (triggers deployment)
```

---

## 📋 Design Decisions Made

### Homepage
- Hero section: background image (AI theater) with dark overlay for button visibility
- Featured section appears BEFORE Latest Posts (user preference)
- Featured items: 4 columns on desktop (md:grid-cols-4)
- Header color: `bg-brand-bg-dark` to match footer

### About Page
- 3 photos in a row at top (uniform height via object-cover)
- First photo: center crop (object-center) - shows middle section
- Middle & last photos: top crop (object-top) - shows head/shoulders
- Images constrained to max-w-xs for appropriate sizing
- Comprehensive career narrative flows in paragraphs below photos
- Removed personal family details, AI-sounding phrases, overly effusive language

### Blog Posts
- Hero images removed from individual post pages (user preference)
- Featured images only show on homepage and blog listing
- Headings forced to white for proper contrast
- Layout uses post.njk template

### Footer
- No social media links (removed this session)
- Dynamic copyright year via currentYear filter
- Centered, minimalist layout

---

## 🛠️ Technical Details

### Custom Eleventy Filters (.eleventy.js)
```javascript
readableDate      // Formats dates nicely (DD MMM YYYY)
htmlDateString    // ISO date format for datetime attributes
excerpt           // Generates excerpts from post content
readingTime       // Calculates reading time based on word count
currentYear       // Returns current year for copyright (NEW THIS SESSION)
```

### Collections
- `posts` - All blog posts sorted by date (newest first)
- `postsByCategory` - Posts grouped by category

### Markdown Configuration
- Uses markdown-it with markdown-it-anchor
- HTML enabled in markdown
- Auto-linkify URLs
- Syntax highlighting via @11ty/eleventy-plugin-syntaxhighlight

---

## ⏳ What's Left (Minimal)

### Optional Enhancements
- [ ] Test live deployment to DreamHost
- [ ] Verify all links work on live site
- [ ] Cross-browser testing
- [ ] Mobile responsiveness verification (already looks good in dev)
- [ ] Performance check (already fast as static site)
- [ ] SEO verification (meta tags already in place)

### Future Content Management
- [ ] Add new blog posts as written (simple markdown files)
- [ ] Update About page when career changes
- [ ] Add new featured media items as published

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
- **`.eleventy.js`** - Core config, collections, filters (including currentYear)
- **`src/_data/site.json`** - Site title, description, navigation
- **`tailwind.config.js`** - Brand colors, typography overrides
- **`src/_includes/layouts/base.njk`** - Base HTML for all pages
- **`src/_includes/components/footer.njk`** - Footer with dynamic year
- **`src/index.njk`** - Homepage structure
- **`src/pages/about.md`** - About page content

---

## 📊 Session Summary

### What Changed This Session
1. Homepage completely styled and finalized
2. About page rebuilt from scratch with full career narrative
3. All 8 blog posts migrated with full original content
4. Footer simplified (no socials, dynamic year)
5. Typography contrast fixed site-wide
6. All images optimized and positioned correctly
7. Design system harmonized (removed clashing colors)

### Git Commits This Session (~20 commits)
Recent commits include:
- "Remove social links from footer and add dynamic year"
- "Simplify Boston transition phrase in About page"
- "Polish About narrative and add current Amazon role"
- "Update About page narrative with comprehensive career story"
- "Crop About page images to uniform height"
- "Restructure About page with all photos in a row and text below"
- "Replace hero subtitle with background image"
- "Fix header color to match page design system"
- And many more...

---

## 🎯 Next Steps

### Immediate (Optional)
1. Test deployment to live site
2. Verify everything looks good at lianaleahy.com
3. Update DNS if not already pointing to DreamHost

### Ongoing
- Add new blog posts as written (just create .md files in src/posts/)
- Update About page when career/role changes
- Maintain and refresh featured media items

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
- [x] Next steps clearly defined
- [x] No uncommitted changes in working tree
- [x] Dev server still running for immediate review

---

## 🎓 Key Learnings This Session

1. **Always restart dev server** after Tailwind config changes
2. **User preference matters:** Removed AI-sounding language, overly effusive phrases
3. **Content fidelity:** Always use full original text, never summarize
4. **Design iterations:** Colors/layout evolved based on feedback
5. **Dynamic year filter:** Better than hardcoding copyright dates

---

## 🔐 Important Notes

### Credentials (NOT stored in repo)
- GitHub Secrets configured for FTP deployment
- All sensitive info in GitHub Secrets, not in codebase

### Known Good State
- ✅ All pages render correctly
- ✅ All images load properly
- ✅ Navigation works
- ✅ Blog posts styled correctly
- ✅ Homepage matches user preferences
- ✅ About page comprehensive and polished
- ✅ Footer clean and minimal
- ✅ Responsive design functional
- ✅ All WordPress content migrated
- ✅ GitHub repository fully up to date

---

**Last Updated:** January 2, 2026 (end of session)
**Developer:** Liana Leahy
**AI Assistant:** Claude Sonnet 4.5
**Status:** Production-ready, pending deployment testing
**Next Focus:** Test live deployment, minor refinements as needed
