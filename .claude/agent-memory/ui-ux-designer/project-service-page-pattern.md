---
name: project-service-page-pattern
description: Established pattern for Create Lyft service pages — section components, tokens used, readonly prop convention for as-const content
metadata:
  type: project
---

The Marketing & Brand service page (`/services/marketing-brand`) established the reusable section components for all 4 service pages.

**Section components created:**
- `service-hero.tsx` — label + icon badge + clamp headline (last word in `font-serif italic`) + bloom radial gradients + arrow CTA to `#contact`
- `service-overview.tsx` — full-bleed colored bg, large headline, 4-col feature grid with bare SVG icons and `border-t border-ink/15 pt-8` column separators
- `service-approach.tsx` — 3 alternating left/right panels, image placeholders in `bg-paper-2 border border-line aspect-[4/3]`
- `service-testimonials-stack.tsx` — pure CSS sticky (each card `sticky top-0 min-h-screen`), "use client", 50/50 image placeholder + blockquote layout
- `service-faq.tsx` — "use client", single `openIndex` state, `grid-template-rows: 0fr / 1fr` transition, `+` rotates to `×` on open
- `service-other-services.tsx` — inline data (no import from `services.tsx`), 3 cards in `md:grid-cols-3`, `Link` to service hrefs

**Key conventions:**
- Content lives in `content.ts` exported as `as const` — prop types must use `readonly` arrays to accept it without casting
- Full-bleed sections (colored bg) have no `.shell` wrapper in the page; shell sections wrap with `<div className="shell">`
- `Reveal` on all scroll-animated elements; `SectionHead` on section openers that need the label/right-label header bar
- `ServiceOverview` accepts a `bg` prop (default `"#fbe4d2"`) for the section background color
- `ServiceOtherServices` now accepts an `exclude: string` prop — pass the current service name (e.g. `"Software Development"`) to filter it out; all 4 services are defined inside the component via `ALL_SERVICES`
- Approach visuals are defined inline in `service-approach.tsx` in the `APPROACH_VISUALS` array — the component does NOT accept a `visuals` prop; page.tsx passes only `panels`. Page-specific APPROACH_VISUALS arrays in page.tsx are unused by the component (do not pass them as a prop).
- `ServiceTestimonialsStack` accepts a `visual?: ReactNode` on each testimonial item — visual wrappers must use `w-full h-full` (NOT `aspect-square` or `max-w-*`) because the card container already provides the aspect ratio.

**Service accent colors:**
- Marketing & Brand: `#fbe4d2` (peach), iconBg: `bg-peach`, iconStroke: `text-ink`
- Software Development: `#aeb8fe` (blue-2), iconBg: `bg-blue-2`, iconStroke: `text-ink`
- AI & Machine Learning: `#758bfd` (blue), iconBg: `bg-blue`, iconStroke: `text-paper`, dark=true on ServiceOverview
- Resource Augmentation: `#ff91a4` (cream), iconBg: `bg-cream`, iconStroke: `text-ink` (default, don't pass), NO dark prop on ServiceOverview

**Service pages built:** All 4 complete — Marketing & Brand, Software Development, AI & Machine Learning, Resource Augmentation
**All service hrefs live:** nav.tsx + services.tsx + service-other-services.tsx all point to real routes (no more `href="#"`).

**Why:** Established as the template for the other 3 service pages (Software Development, AI & ML, Resource Augmentation). Reuse the 6 section components; only the page.tsx and content.ts change per service.
**How to apply:** When building the next service page, import these same section components and pass the new service's accent color, content, and feature icons. Pass `exclude="<Service Name>"` to `<ServiceOtherServices />`.
