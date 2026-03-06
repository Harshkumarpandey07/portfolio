# SEO Implementation Guide
## Harsh Kumar Pandey — ML Engineer Portfolio

Complete SEO setup for the React + Vite portfolio deployed on Vercel.

---

## 📁 Files Delivered

```
portfolio/
├── index.html                        ← Global meta tags, OG tags, JSON-LD
├── vercel.json                       ← SPA routing + cache headers
├── vite.config.js                    ← Code splitting + performance build
├── package.json                      ← Dependencies (react-helmet-async)
├── public/
│   ├── sitemap.xml                   ← XML sitemap for all pages
│   ├── robots.txt                    ← Crawling rules
│   └── favicon.svg                   ← SVG favicon
└── src/
    ├── App.jsx                       ← Router + lazy-loaded pages
    ├── main.jsx                      ← Entry point
    ├── styles/global.css             ← Styles
    ├── components/
    │   ├── SEO.jsx                   ← Reusable SEO component
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── HomeHero.jsx              ← Keyword-rich hero section
    │   ├── FeaturedProjects.jsx
    │   └── LatestPosts.jsx
    ├── pages/
    │   ├── Home.jsx                  ← Page-level SEO + structured data
    │   ├── Projects.jsx
    │   ├── Blog.jsx
    │   └── BlogPost.jsx
    └── data/
        ├── blogPosts.js              ← 4 keyword-targeted blog posts
        └── projects.js               ← 6 ML/AI projects
```

---

## ✅ SEO Checklist

### Global (index.html)
- [x] `<title>` — keyword-rich
- [x] `<meta name="description">` — under 160 chars
- [x] `<meta name="keywords">` — 12 targeted keywords
- [x] `<meta name="author">`
- [x] `<meta name="robots" content="index, follow">`
- [x] `<link rel="canonical">`
- [x] Open Graph tags (og:title, og:description, og:type, og:url, og:image)
- [x] Twitter Card tags
- [x] JSON-LD Person schema
- [x] JSON-LD WebSite schema

### Per-Page (SEO.jsx component)
- [x] Unique `<title>` per page
- [x] Unique `<meta name="description">` per page
- [x] Page-specific keywords
- [x] Canonical URL per page
- [x] Open Graph updated per page
- [x] JSON-LD per page (ProfilePage, CollectionPage, Blog, BlogPosting)

### Technical
- [x] `public/sitemap.xml` — 8 URLs with priorities
- [x] `public/robots.txt` — allows all + references sitemap
- [x] `vercel.json` — SPA rewrites + caching headers
- [x] Code splitting (React, router, helmet chunks)
- [x] Lazy-loaded pages with Suspense
- [x] Semantic HTML (header, main, article, nav, footer, section)
- [x] ARIA labels on all interactive elements
- [x] Schema.org microdata (itemScope, itemType, itemProp)
- [x] Security headers (X-Frame-Options, X-Content-Type-Options)

### Content
- [x] H1 on every page (keyword-rich)
- [x] Unique page titles:
  - Home: "Machine Learning Engineer Portfolio | Harsh Kumar Pandey"
  - Projects: "AI & Machine Learning Projects | Harsh Kumar Pandey"
  - Blog: "AI Engineering Notes | Harsh Kumar Pandey"
- [x] 4 SEO blog posts with keyword metadata
- [x] 6 AI/ML projects with rich descriptions
- [x] Footer with schema.org/WPFooter

---

## 🚀 Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Add your preview image
Place a 1200×630px PNG at:
```
public/preview.png
```
This is used for Open Graph and Twitter Card previews. Use a tool like
[og-image.vercel.app](https://og-image.vercel.app) or Figma to generate one.

### 3. Update your domain
Replace all instances of `https://harshkumarpandey.vercel.app` with your actual
Vercel domain in:
- `index.html` (canonical, OG, JSON-LD)
- `public/sitemap.xml`
- `public/robots.txt`
- `src/components/SEO.jsx` (siteUrl variable)

### 4. Update social links
In `src/components/Footer.jsx` and `index.html` JSON-LD, update:
- GitHub URL
- LinkedIn URL
- Twitter handle

### 5. Deploy
```bash
npm run build
# Then push to GitHub and connect to Vercel
```

---

## 🎯 Target Keywords

| Keyword | Page |
|---------|------|
| machine learning engineer portfolio | Home, index.html |
| AI developer portfolio | Home, Blog |
| ML engineer projects | Projects |
| LLM developer portfolio | Home, index.html |
| ML pipeline | Projects, Blog post |
| LLM application examples | Projects |
| prompt engineering LLM | Blog post |
| deploying ML APIs Flask | Blog post |
| AI resume screener | Blog post, Projects |
| NLP engineer portfolio | Home |

---

## 📊 After Deployment

1. **Submit sitemap** to Google Search Console:
   `https://search.google.com/search-console`
   → Add property → Submit `https://yourdomain.vercel.app/sitemap.xml`

2. **Validate structured data** at:
   `https://search.google.com/test/rich-results`

3. **Test Open Graph** at:
   `https://www.opengraph.xyz`

4. **Check Lighthouse** scores in Chrome DevTools (target: 90+ all categories)

5. **Monitor** rankings with Google Search Console after 2-4 weeks.
