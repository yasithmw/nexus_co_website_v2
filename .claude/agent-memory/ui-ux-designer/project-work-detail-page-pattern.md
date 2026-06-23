---
name: project-work-detail-page-pattern
description: Static work/case study detail page structure — hero with SectionHead, two-column content grid, branded SVG art, footer strip. No Contact component.
metadata:
  type: project
---

Work detail pages live at `app/work/[slug]/page.tsx` as static (non-dynamic) routes.

Structure:
1. `<Nav />` always at top
2. Hero section: `pt-[140px] pb-[60px]`, SectionHead (label=client name, right=year), large h1 `clamp(56px,8vw,120px) font-display font-bold tracking-[-0.04em] text-ink-2`, category pill `bg-paper-2 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted rounded-full`
3. Two-column content: `py-[80px]`, `grid-cols-1 gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start`
   - Left: body copy (Reveal-wrapped `<p>` tags, `text-[17px] leading-[1.65] text-ink/70 max-w-[52ch]`), discipline chips (`border border-line rounded-full px-3.5 py-1.5 font-mono text-[11px]`), CTA button (`bg-ink rounded-full px-6 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-paper`)
   - Right: branded SVG/div visual art — no `<img>` or Next.js `<Image>` with placeholder hrefs. Hero visual `aspect-[16/10]` + gallery row `grid grid-cols-2 gap-4` with `aspect-[4/3]` blocks
4. Footer strip: `border-t border-line py-10`, shell, flex justify-between — Back to Work link + attribution text

Visual art pattern (Dataline Finance page):
- `HeroDashboardVisual`: `bg-ink-2`, window chrome + sidebar nav + KPI cards + SVG line chart + metrics table
- `PipelineDiagramVisual`: `bg-blue`, SVG node-and-arrow flow diagram with mono labels
- `DataTableVisual`: `bg-paper-2`, mock data table with column headers, alternating rows, live badge

Do NOT use `@/components/sections/contact` on detail pages.

**Why:** Spec calls for a minimal footer strip only — Contact section is reserved for the main Work listing and service pages.
**How to apply:** Any new work detail page follows this exact structure. Reuse the three-block visual art pattern (hero dashboard + pipeline diagram + data table) adapting colors and content per client.
