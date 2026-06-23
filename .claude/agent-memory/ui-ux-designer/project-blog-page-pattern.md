---
name: project-blog-page-pattern
description: Blog listing page architecture — server/client split, data file, search+filter+pagination pattern
metadata:
  type: project
---

Blog listing page built at `/blog`. Architecture:

- `app/blog/page.tsx` — async server component; `searchParams` is a Promise (Next.js 15 API); paginates 9/page; passes sliced posts to client component
- `components/sections/blog-listing.tsx` — `"use client"`; owns debounced search (300ms via useRef timer), category filter pills (pushes `?category=` via `useRouter`), pagination (pushes `?page=N`); search and pagination coexist cleanly (pagination hidden when search active)
- `components/sections/blog-card.tsx` — pure display; wrapped in `<Reveal>`, full-card `<a>` link, `formatDate` converts ISO string to "DD Mon YYYY" locale format
- `data/blog-posts.ts` — exports `BlogPost` interface and `BLOG_POSTS` array; 12 seed posts across 4 categories

**Why:** Allows URL-shareable category filters and page state while keeping search fast and client-side only. Avoids full-page reloads for search.

**How to apply:** If adding individual post pages, create `app/blog/[slug]/page.tsx`. The `content` field on `BlogPost` is intentionally empty in seed data — populate or swap for MDX.

Category dot colors: Case Studies → `bg-cream`, Engineering → `bg-blue`, Design & Brand → `bg-peach`, Process & Insights → `bg-blue-2`.

Nav "Thinking" link updated from `/thinking` → `/blog` in `components/nav.tsx`.

See also: [[project-service-page-pattern]]
