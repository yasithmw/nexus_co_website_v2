# Work Listing & Detail Pages Design

## Overview
Two-page system: listing page showcasing 4-6 projects, with clickable detail pages for each project.

---

## Work Listing Page (/work)

### Structure (Top to Bottom)
1. **Navigation** — Persistent site nav
2. **Hero** — Headline "Selected Work" with date range (2024 — 2026)
3. **Project Grid** — 2-column responsive grid
   - Project cards matching homepage Work section style
   - Each card: background color, meta (type/year), visual preview, project name, category, arrow CTA
   - Links to `/work/[project-slug]`
4. **CTA Section** — Contact.tsx component

### Content
- 4-6 projects initially
- No pagination

---

## Project Detail Page (/work/[project-slug])

### Structure (Top to Bottom)
- use below pictures as the reference
![alt text](<Screenshot 2026-05-29 at 7.52.25 AM.png>)
![alt text](<Screenshot 2026-05-29 at 8.15.41 AM.png>)

*** once clcked I want details pages to open as a bottom sheet like the contact-form with a close buttom top right. so even you click on an additional project card bottom, it should navigate in this view ***

1. **Navigation** — Persistent site nav
2. **Hero** — Project title + category tag
3. **Two-Column Content**
   - **Left Column:**
     - Project overview/context (2-3 paragraphs)
     - "What we did" section — list of disciplines/areas (e.g., Digital Strategy & UX, Interaction Design, etc.)
     - CTA button (Visit Website / External Link)
   - **Right Column:**
     - Large hero image (1 primary visual)
     - Gallery below (2-4 additional project images/screenshots)


### Content Requirements
- Project title
- Category/type
- Overview text
- Disciplines/services applied
- External URL (if applicable)
- 1 hero image + 2-4 gallery images

---

## URL Structure
```
/work                          (listing)
/work/[project-slug]          (detail)
```

---

## Design Notes
- Follow existing page patterns (about/services) for spacing and typography
- Reuse existing components: Nav, SectionHead, Reveal, Contact
- Responsive: cards stack to 1 column on mobile
- Color theming: inherit from project branding if applicable, default to brand colors
