# Marketing & Brand Service Page — Build Checklist

Route: `/services/marketing-brand`
Template for all 4 service pages (Option C — shared section components).

---

## New Files

- [ ] `app/services/marketing-brand/page.tsx` — page composition
- [ ] `components/sections/service-hero.tsx` — hero with peach bloom, large headline, CTA
- [ ] `components/sections/service-overview.tsx` — headline + body + 4-col feature cards
- [ ] `components/sections/service-approach.tsx` — 3 alternating left/right panels with placeholder frames
- [ ] `components/sections/service-testimonials-stack.tsx` — sticky-scroll stacking cards (CSS only)
- [ ] `components/sections/service-faq.tsx` — accordion FAQ, `"use client"`, grid-rows transition
- [ ] `components/sections/service-other-services.tsx` — 3 cards from services data, filters current

---

## Section Specs

### Hero
- Props: `label`, `headline`, `sub`, `accentColor` (`#fbe4d2`), `bgBloom`
- Peach radial bloom (top-right), large display clamp headline, mono label, short sub, arrow CTA → `#contact`
- Pattern: mirrors `hero.tsx` but service-specific

### Overview
- Props: `headline`, `body`, `features[]` `{ icon: ReactNode, title, desc }`
- Background: `bg-peach` (`#fbe4d2`)
- Layout: headline + 2-line body above, then 4-col icon/title/desc grid below
- 4 features: Brand Identity, Positioning & Messaging, Campaigns, Performance Marketing

### Approach (3 panels)
- Props: `panels[]` `{ step, headline, body, imageAlt }`
- Alternates image-left / text-right, text-left / image-right, image-left / text-right
- Visual placeholder: `rounded-[var(--radius-lg)] bg-paper-2 border border-line aspect-[4/3]`
- Text side: mono step number, display headline, body para, `Reveal` wrapper

### Testimonials Stack
- Props: `testimonials[]` `{ quote, name, company, bg }`
- `"use client"` — but effect is **pure CSS sticky**
- Container: `position: relative` wrapper
- Each card: `position: sticky; top: 0; height: 100vh` — cards stack as user scrolls
- 3 cards, colors: peach `#fbe4d2` → blue-2 `#aeb8fe` → paper-2 `#e8e9f0`
- Layout per card: 50/50 split — left = placeholder image frame, right = large quote + attribution

### FAQ
- Props: `questions[]` `{ q, a }`
- `"use client"` accordion
- Headline: `"Questions?"`
- 6 Q&As, border-t dividers, animated height via `grid-rows: 0fr → 1fr` transition
- Pattern: matches existing `border-line` divider style

### Other Services
- No content props needed — imports `services` array from services data, filters out `"/01"`
- 3 cards in a grid: icon badge, number, name, desc, `→` link
- Headline: `"Other disciplines"`

### CTA
- Reuse existing `<Contact />` directly — no changes needed

---

## Design Tokens (Marketing & Brand)
- Accent: `bg-peach` = `#fbe4d2`
- Icon background: `bg-peach`, stroke: `text-ink`
- Bloom: `radial-gradient(circle, #FCD9C8 0%, transparent 70%)` (matches homepage)

---

## Notes
- All new section components accept typed props — ready for the other 3 service pages to reuse
- `Reveal` wrappers on all scroll-animated elements
- `"use client"` only on FAQ and TestimonialsStack
- Content-writer to populate all copy: hero headline/sub, overview headline/body/feature descs, approach panel text, 3 testimonial quotes, 6 FAQ pairs
