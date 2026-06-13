# Portfolio 2026

Next.js 16 + React 19 + TypeScript + TailwindCSS v4 + Framer Motion portfolio site.

## Quick start
```
npm run dev    # http://localhost:3000
npm run build  # production build
```

## Personalizing

All content lives in **one file**: `src/lib/data.ts`

- `personal` — your name, role, bio, links, location, email
- `projects` — list of projects (set `featured: true` for homepage)
- `posts` — blog posts (set `featured: true` for homepage)
- `skills` — skill groups shown on About page

## Themes

Five color themes built with CSS custom properties in `src/app/globals.css`:
- **Ocean** (blue, default)
- **Forest** (green)
- **Sunset** (orange)
- **Lavender** (purple)
- **Rose** (pink)

Each supports light and dark mode. Switched via the color dots + moon icon in the navbar. Theme persists in `localStorage`.

## Key files

```
src/
  lib/data.ts              ← all site content (edit this)
  lib/themes.ts            ← theme names & swatch colors
  app/globals.css          ← CSS custom property theme definitions
  providers/ThemeProvider  ← theme context + localStorage persistence
  components/
    layout/Navbar.tsx      ← top nav with theme switcher
    layout/Footer.tsx      ← footer with social links
    ui/AnimateIn.tsx        ← scroll-triggered fade-in wrapper
    ui/ProjectCard.tsx      ← project tile
    ui/PostCard.tsx         ← blog post tile
    ui/ThemeSwitcher.tsx    ← color swatches + dark toggle
    ui/SocialIcons.tsx      ← SVG brand icons (GitHub/Twitter/LinkedIn)
    sections/Hero.tsx       ← homepage hero
    sections/FeaturedProjects.tsx
    sections/RecentPosts.tsx
  app/
    page.tsx               ← home
    about/page.tsx         ← about + skills + experience timeline
    projects/page.tsx      ← all projects
    writing/page.tsx       ← all posts
    writing/[slug]/page.tsx ← individual post
```

## Adding a blog post with real content

Currently posts render placeholder content. To add real MDX content, install `next-mdx-remote` or `@next/mdx` and update `src/app/writing/[slug]/page.tsx` to read `.mdx` files from a `content/posts/` directory.
