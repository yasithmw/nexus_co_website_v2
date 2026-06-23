---
name: project-work-page-pattern
description: Architecture for /work listing page; shared WorkProject data type; WorkCard component with per-slug bespoke card art; refactored Work section
metadata:
  type: project
---

# Work page pattern

## Data layer
`data/work-projects.ts` exports `WorkProject` type and `WORK_PROJECTS` array. The type has: `slug`, `name`, `category`, `type`, `year`, `bg` (Tailwind class), `text: "paper" | "ink"`, `arrowBg`, `arrowText`, optional `status`.

## WorkCard component
`components/sections/work-card.tsx` — accepts `project: WorkProject`. Renders the full tile with `tileBase/tileMeta/tileFoot/tileName/tileArrowBase` constants (identical to the original work.tsx). Card art is selected via `switch`-style on `project.slug`. Each art variant is a named function component. Links to `/work/${project.slug}`.

The 4 current projects and their art styles:
- `dataline-finance` (bg-ink, text-paper) — financial table + line chart on bg-ink-2 rotated card
- `the-artist-platform` (bg-blue-2, text-ink) — 2x2 artwork placeholder grid + "Follow · 2.4k" pill
- `alignify` (bg-cream, text-ink) — OKR progress bar card on bg-paper, 3 goals
- `dataline-people` (bg-blue, text-paper) — headcount "847" + stacked dept bar + "+12% QoQ" on bg-paper card

Hover treatment: `style={{ transform: "rotate(-Xdeg)" }}` on preview, `group-hover:translate-y-[-4px] group-hover:rotate-0` for animated lift.

## Work listing page
`app/work/page.tsx` — fully static (no searchParams). Follows the blog page shell pattern: Nav + main with hero section (pt-[140px] pb-[80px]) + grid section (pb-[120px]) + Contact. Hero headline: "Work that <em>holds up.</em>", sub: "Four clients, four problems — here's what we built and why."

## Homepage Work section
`components/sections/work.tsx` — refactored to import WorkCard + WORK_PROJECTS and loop. Section/SectionHead/Reveal h2 wrapper unchanged. Tiles now link to `/work/${slug}`.

**Why:** Eliminate duplication between homepage section and work listing page; single source of truth for project data.

**How to apply:** When adding new projects, update `WORK_PROJECTS` in `data/work-projects.ts` only; add a new art function to `work-card.tsx` for the new slug.
