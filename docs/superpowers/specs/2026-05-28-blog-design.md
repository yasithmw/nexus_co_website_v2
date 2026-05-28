# Blog Page Design Spec

**Scope:** Blog listing (`/blog`), individual posts (`/blog/[slug]`), nav integration

## File Structure

```
app/blog/page.tsx                    # Listing page
app/blog/[slug]/page.tsx             # Dynamic post page
data/blog-posts.ts                   # Posts array
components/sections/blog-card.tsx    # Card component
```

## Data Structure

Posts stored as TypeScript array in `data/blog-posts.ts`:

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string | JSX;
  author: string;
  date: string;                // ISO format
  readingTime: number;
  category: string;
  tags: string[];
  featuredImage?: string;
}
```

Start with 3-5 example posts covering engineering, design, AI, and process topics.

## Pages

### Blog Listing (`app/blog/page.tsx`) — `/blog`

- **Hero:** Title + subheadline
- **Filter bar:** Category buttons, active state styling
- **Grid:** 3 columns desktop / 1 mobile, newest first
- **Cards:** Sorted & filtered by category, link to `/blog/[slug]`
- **CTA:** Contact section at bottom
- **State:** Track active category, filter posts dynamically

### Individual Post (`app/blog/[slug]/page.tsx`) — `/blog/[slug]`

- **Hero:** Featured image, category tag, title, meta (author / date / reading time)
- **Content:** Prose styling (17px, 1.6 line height, max 65ch width)
- **Related posts:** 2-3 posts from same category, exclude current
- **CTA:** Contact section at bottom
- **Meta tags:** SEO title/description/og:image

## BlogCard Component (`components/sections/blog-card.tsx`)

**Props:** `{ post: BlogPost }`

**Displays:**
- Featured image (4:3, rounded)
- Category tag (badge)
- Title (font-display)
- Excerpt (truncated, gray)
- Meta footer: author (mono) | date | reading time
- Hover animation (use Reveal pattern)
- Clickable link to `/blog/[slug]`

**Styling:** Match existing card patterns, border or subtle shadow

## Navigation Integration

Update `components/nav.tsx`: Add "Blog" link to main nav and mobile menu, route to `/blog`

---

## Typography & Spacing

- **Listing hero:** `clamp(28px, 3.4vw, 50px)`
- **Card title:** `17px–20px`
- **Card meta:** `12px`, mono
- **Post title:** `clamp(36px, 5vw, 60px)`
- **Post body:** `17px`, `1.6` line height, max `65ch`
- **Spacing:** 120px between sections (listing), 60px (post)

## Error Handling

- Invalid slug: 404 + link back to listing
- No posts: "No posts yet" placeholder
- No filter matches: "No posts match" + clear filters button

## URL Structure

- `/blog` — listing page
- `/blog/[slug]` — individual post

## Component Reuse

- Reuse: Contact, SectionHead, Reveal, Nav
- New: BlogCard component
- Styling: Existing Tailwind utilities + CSS variables

## Accessibility

- Semantic HTML (`<article>`, `<nav>`, `<section>`)
- Alt text on images
- Keyboard navigation on filter buttons
- Color + text labels for categories
- Focus states on interactive elements
