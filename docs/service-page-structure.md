# Service Page Structure & Layout Flow

## Overview
Individual service pages for each of the 4 services: Marketing & Brand, Software Development, AI & Machine Learning, Data Architecture & Engineering.

---

## Page Structure (Top to Bottom)

### 1. Navigation
- Persistent site navigation (existing pattern from about/connect)

---

### 2. Hero Section
- Large, impactful headline introducing the service
- Subheading with value proposition
- Service-specific visual (icon, color accent, or background element)
- Optional: brief context or differentiator

---

### 3. Overview Section
- use reference design to build the approach section
![alt text](<Screenshot 2026-05-28 at 5.30.39 PM.png>)
---

### 4. Our Approach Section
- use reference design to build the approach section. need 3 sections as below layout.
![alt text](<Screenshot 2026-05-28 at 5.30.54 PM.png>)
![alt text](<Screenshot 2026-05-28 at 5.31.05 PM.png>)
---

### 5. Testimonials Section
- use reference design to build the testimonials section. what I want is to second section to be appear o top of previous one as we scroll. (lets use 3 sections for now)
![alt text](<Screenshot 2026-05-28 at 5.31.21 PM.png>)
![alt text](<Screenshot 2026-05-28 at 5.31.29 PM.png>)

---

### 6. FAQ Section
- **Headline**: "Questions?"
- **Format**: Accordion or toggle-based Q&A
- Service-specific common questions
- 5-8 questions typical

---

### 7. Other Services Cards
- **Headline**: "Our other disciplines" or "More from Nexus Co"
- **Layout**: 3 service cards (excluding current service)
- **Each card shows**: 
  - Service name
  - Brief one-line description
  - Icon with color accent
  - Link to service page
- **Styling**: Grid layout, consistent with services section from homepage

---

### 8. CTA Section
- use contact.tsx as the last section

---

## Visual & Design Notes

### Color Theming
- Each service retains its brand color (from services component):
  - Marketing & Brand: Peach (`bg-peach`)
  - Software Development: Blue-2 (`bg-blue-2`)
  - AI & Machine Learning: Blue (`bg-blue`)
  - Resource Augmentation: Cream (`bg-cream`)
- Color used as accent in hero, icons, hover states, underlines

### Layout Consistency
- Follow existing page patterns (about/connect pages) for spacing and type hierarchy
- Maintain responsive grid system
- Use existing components where possible (SectionHead, Reveal, etc.)

### Typography & Spacing
- Hero: Large display text (clamp sizing)
- Section headlines: Consistent with existing pages
- Body copy: Readable line length, 1.5-1.6 line height
- Vertical rhythm: Consistent gap between sections

---

## Page URL Structure
```
/services/marketing-brand
/services/software-development
/services/ai-machine-learning
/services/resource-augmentation
```

---

## Content Inheritance & Reuse
- **Testimonials**: Common pool, filtered by service context
- **Images/Icons**: Service-specific assets, color-coordinated
- **Copy tone**: Professional, evidence-based (credibility focus)
- **Components**: Reuse Reveal, SectionHead, Contact form, etc.

---

## Next Steps (Implementation)
1. Create individual page files for each service
2. Build reusable sections as components
3. Populate content (copy, images, testimonials)
5. Build other-services navigation component
6. Test responsive behavior and accessibility
