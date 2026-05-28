# Blog (Thinking) Page Design Spec

**Date:** 2026-05-28  
**Status:** Design phase  
**Scope:** Blog listing page, individual post pages, navigation integration

---

## Overview

A blog section for the Nexus Co website with a listing page (`/blog`), individual post pages (`/blog/[slug]`), and navigation integration. Posts are managed via a hardcoded data structure with example content to start.

---

## File Structure

```
app/
  blog/
    page.tsx              # Blog listing page (filtering + grid)
    [slug]/
      page.tsx            # Dynamic route for individual posts

data/
  blog-posts.ts           # Posts data array with metadata

components/
  sections/
    blog-card.tsx         # Reusable blog card component
```

---

## Data Structure

### Blog Post Object (`data/blog-posts.ts`)

```typescript
interface BlogPost {
  id: string;
  slug: string;                    // URL-friendly identifier
  title: string;
  excerpt: string;                 // Short preview (one sentence)
  content: string | React.ReactNode; // Markdown or JSX content
  author: string;                  // Author name
  date: string;                    // ISO format: "2026-05-28"
  readingTime: number;             // Minutes
  category: string;                // Primary category (e.g., "Engineering", "Design")
  tags: string[];                  // Multiple tags for filtering
  featuredImage?: string;          // Optional image path or URL
}

// Example structure:
const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-platforms",
    title: "Building Scalable Platforms: Lessons from 5 Years in Fintech",
    excerpt: "How we learned to design for growth without sacrificing quality or team velocity.",
    content: "...",
    author: "Lachlan Morrish",
    date: "2026-05-20",
    readingTime: 8,
    category: "Engineering",
    tags: ["architecture", "scaling", "engineering", "fintech"],
    featuredImage: "/images/blog/scalable-platforms.jpg",
  },
  // ... more posts
];
```

---

## Pages

### 1. Blog Listing Page (`app/blog/page.tsx`)

**Route:** `/blog`

**Layout (top to bottom):**
- Navigation (persistent, updated with "Blog" link)
- Hero section
  - Headline: "Thinking" or "Blog" or "Ideas"
  - Subheadline: Brief intro about the content
- Filter bar
  - Category filter (dropdown or button group)
  - Tag filter (optional, secondary)
  - Active filter state styling
- Blog cards grid
  - Responsive grid (2-3 columns on desktop, 1 on mobile)
  - Sorted chronologically (newest first)
  - Filtered by selected category/tags
  - Each card links to `/blog/[slug]`
- CTA section (Contact form at bottom)

**Functionality:**
- React state to track active filters
- Dynamic filtering of posts array
- Cards re-render as filters change
- No pagination initially (all posts on one page)

---

### 2. Individual Post Page (`app/blog/[slug]/page.tsx`)

**Route:** `/blog/[slug]` (e.g., `/blog/building-scalable-platforms`)

**Layout (top to bottom):**
- Navigation (persistent)
- Post hero section
  - Featured image (full width, aspect ratio 16:9)
  - Category tag (colored badge)
  - Post title (large, display font)
  - Meta info: author, publish date, reading time (inline, small type)
- Main content area
  - Post content rendered from `content` field
  - Prose styling (readable line length, 1.5-1.6 line height)
  - Responsive typography
  - Image support within content
- Related posts section
  - Headline: "More from [Category]"
  - Grid of 2-3 related posts (same category, exclude current)
  - Use BlogCard component
  - Links to those posts
- CTA section (Contact form)

**Functionality:**
- Dynamic route handles all slugs
- 404 handling if slug doesn't exist
- Meta tags for SEO (title, description, og:image)

---

## Components

### BlogCard Component (`components/sections/blog-card.tsx`)

**Props:**
```typescript
interface BlogCardProps {
  post: BlogPost;
}
```

**Displays:**
- Featured image (aspect ratio 4:3, rounded corners)
- Category tag (small badge, colored)
- Title (font-display, medium size)
- Excerpt (gray, one line with ellipsis if needed)
- Footer row:
  - Author name (small, mono style)
  - Separator
  - Publish date (small, formatted)
  - Reading time (small, "X min read")
- Hover state: subtle lift or scale animation (use existing Reveal component pattern)
- Clickable container links to `/blog/[slug]`

**Styling:**
- Follow existing component patterns (Reveal for animation, consistent spacing)
- Match card styling from other pages (about, services)
- Border on card or subtle shadow
- Category tag color coded (optional: match section colors if using colored categories)

---

## Navigation Integration

### Update Nav Component (`components/nav.tsx`)

- Add "Blog" link to main navigation
- Route to `/blog`
- Consistent styling with existing nav links
- Mobile menu includes Blog link

---

## Example Posts (Initial Data)

Start with 3-5 example posts covering:
- Engineering/technical topic
- Design/branding topic
- AI/data topic (aligned with services)
- Team/process topic

Each example post includes:
- Realistic metadata (author from team list, recent date)
- 200-300 word excerpt and full content
- Featured image placeholder or real image
- Mix of categories and tags for filtering demo

---

## Filtering & State Management

**Listing Page State:**
```typescript
const [activeCategory, setActiveCategory] = useState<string | null>(null);
const [activeTags, setActiveTags] = useState<string[]>([]);

// Filter posts
const filteredPosts = blogPosts.filter(post => {
  const categoryMatch = !activeCategory || post.category === activeCategory;
  const tagMatch = activeTags.length === 0 || 
    activeTags.some(tag => post.tags.includes(tag));
  return categoryMatch && tagMatch;
});
```

**Filter UI:**
- Category buttons (show all unique categories from posts)
- Active state: different color/background
- Click to toggle filter
- "Clear filters" option if any active

---

## Typography & Spacing

**Listing Page:**
- Hero headline: `clamp(28px, 3.4vw, 50px)` (match existing pattern)
- Card title: `17px` to `20px`
- Card meta: `12px`, mono font
- Section gap: `120px` (match existing rhythm)

**Post Page:**
- Post title: `clamp(36px, 5vw, 60px)` (larger than listing)
- Meta info: `14px`, mono style
- Content body: `17px`, `1.6` line height, max `65ch` width
- Section gap: `60px` between content areas

---

## Content Handling

### For Now (Example Posts):
- Posts stored in `data/blog-posts.ts` as TypeScript objects
- Content as JSX or markdown string
- Render directly in component

### Future Migration Path:
- If content grows, migrate to markdown files with front matter
- Use `gray-matter` to parse metadata + body
- Or connect to CMS later

---

## SEO & Meta Tags

**Listing Page (`/blog`):**
- Title: "Blog — [Company Name]"
- Description: "Thoughts on engineering, design, and building products"

**Post Page:**
- Title: Post title + " — [Company Name]"
- Description: Post excerpt
- og:image: Featured image
- og:type: article
- article:published_time: Publish date
- article:author: Author name

---

## Error Handling

- Invalid slug: Show 404 or "Post not found" message with link back to listing
- No posts: Show placeholder "No posts yet" on listing page
- Empty filters: Show "No posts match this filter" with clear filters button

---

## Testing Checklist (Post-Implementation)

- [ ] Blog listing page loads and displays all posts
- [ ] Category filtering works correctly
- [ ] Tag filtering works (if implemented)
- [ ] Individual post pages load with correct content
- [ ] Related posts section shows correct category matches
- [ ] Navigation link to Blog works from all pages
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] Meta tags render correctly in page source
- [ ] Links between listing ↔ posts ↔ related posts work
- [ ] Featured images load and display at correct aspect ratio
- [ ] Reading time calculation is accurate

---

## URL Structure

```
/blog                           # Listing page
/blog/[slug]                    # Individual post (e.g., /blog/building-scalable-platforms)
```

---

## Component Reuse & Consistency

- **Nav component:** Update with Blog link (no new component needed)
- **BlogCard:** New component, follows existing card patterns
- **Listing page:** Reuse Contact, SectionHead, Reveal components
- **Post page:** Reuse Contact, Nav, Reveal components
- **Styling:** Use existing Tailwind utilities and CSS variables (--color-*, --radius-*, etc.)

---

## Accessibility Notes

- Semantic HTML: `<article>`, `<nav>`, `<section>`, `<header>`, `<footer>` where appropriate
- Alt text on featured images
- Keyboard navigation for filter buttons
- Color not sole indicator of category (use text labels + color)
- Sufficient contrast on all text
- Focus states on interactive elements

---

## Next Steps

1. Create `data/blog-posts.ts` with 3-5 example posts
2. Build `components/sections/blog-card.tsx`
3. Create `/app/blog/page.tsx` with filtering logic
4. Create `/app/blog/[slug]/page.tsx` with dynamic rendering
5. Update `components/nav.tsx` to include Blog link
6. Add meta tags to both pages
7. Test responsive layout and filtering
8. Commit design doc and implement per plan
