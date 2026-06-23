# About Page Design Spec
**Date:** 2026-05-21 | **Route:** `/about` | **Status:** Approved

Linear storytelling structure: Hero → Story → Philosophy → Values → Team → Logos → Testimonials → CTA  
**Design principle:** Bold statements, generous whitespace, minimal text (Humaan style)  
**See DESIGN.md for all typography, color, spacing, and motion tokens.**

---

## 1. Hero: Bold Statement
- Full-viewport or 60vh, centered
- Hero headline scale with bloom glow behind
- One powerful statement answering "what is Nexus Co?"
- Paper/cream background, minimal decoration

---

## 2. Story: Founding Journey
- 2-column grid (desktop), stacked (mobile) — 1.4fr / 1fr
- Left: 2–3 short paragraphs (4–5 sentences max)
- Right: Visual accent (year callouts, timeline detail, or stat emphasis)
- Include: founded year, locations (Sydney, Melbourne, Brisbane), why, key milestone
- Tone: confident, grounded, human

---

## 3. Philosophy: How You Work
- Full-width stacked statements (2–3 core principles)
- Large typography, plenty of vertical breathing room
- Examples: "Senior people. Real work. No account managers..." / "We take responsibility for outcomes..." / "Engineering and brand craft in the same room."
- Ink on paper, optional subtle dividers between statements

---

## 4. Values / Mission / Vision
- Three sections: Mission (1 sentence) | Vision (1 sentence) | Values (3–4 labeled items)
- Minimal cards or typography + divider lines
- No heavy backgrounds

---

## 5. Team Grid
-- 5 team members
- Responsive grid: 3 cols (desktop) → 2 cols (tablet) → 1 (mobile)
- Per person: Photo (1:1, rounded) + Name (bold) + Role (mono, small)
- Hover: subtle lift or color shift
- Gap: 24–32px

---

## 6. Client Logos
- Single row (flex, wrap if needed)
- Label: "Who we've worked with" or "Trusted by"
- Grayscale/low-opacity (0.5–0.7), max height 40–50px, gap 40–60px

---

## 7. Testimonials: Big Bold Blocks
- 2–3 full-width colored sections (separate blocks, not carousel)
- Large quote (`clamp(32px, 5vw, 56px)`), colored background (blue, cream, or ink + white text)
- Attribution: name + title/company (smaller, bottom-aligned)
- Quotes: 180–250 characters, powerful and specific

---

## 8. CTA / Closing
- use contact.tsx component

---

## Content to Provide

- [ ] Hero headline
- [ ] Story paragraphs (with dates/locations)
- [ ] Philosophy statements (2–3)
- [ ] Mission, Vision, Values copy
- [ ] Team: name, role, photo files
- [ ] Client logos
- [ ] Testimonials (2–3) + attribution
- [ ] CTA headline + button copy

---

## Implementation Notes

- Use existing components: `<Nav />`, `<Reveal />`, `.shell` wrapper
- Reuse design system patterns: Bloom glows, Reveal animations, dot-grid texture
- No gradients, side-stripe borders, or identical card grids (per DESIGN.md rules)
- Mobile-first responsive (375px minimum)
- Optimize images with Next.js Image component
