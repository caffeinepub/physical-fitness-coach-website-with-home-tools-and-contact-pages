# Specification

## Summary
**Goal:** Build a responsive multi-page physical fitness/coach website with a consistent theme, practical fitness tools, and a working Contact Us form persisted to a simple backend.

**Planned changes:**
- Create site-wide layout with top navigation, footer, and routes for Home, Tools, Contact Us, and an additional informational page (e.g., About/Services).
- Implement a cohesive fitness coaching visual theme (colors/typography/components) with a non-blue/purple primary palette.
- Build the Home page with hero (CTA), coach/services overview, highlights/benefits, and CTAs linking to Tools and Contact Us.
- Build the Tools page with a BMI calculator (unit selection + category), daily calorie estimate calculator (sex/age/height/weight/activity), and a 7-day workout planner with copy/export.
- Build the Contact Us page with validated form (name/email/message), success/error states, and submission to the backend; include basic contact info blocks and optional hours.
- Backend (single Motoko actor): data model + methods to create and list contact inquiries (id, name, email, message, createdAt).
- Add baseline SEO/accessibility: per-route document titles, labeled form fields, and semantic headings on each page.
- Add and render generated static assets (logo, hero banner, icon set) from `frontend/public/assets/generated`.

**User-visible outcome:** Users can navigate a fitness coach site on mobile/desktop, use built-in fitness calculators and a weekly planner, and submit contact inquiries that are stored and retrievable for verification.
