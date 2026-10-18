# EDUCTIVE Design Foundation (MASTER)

## 1. Product Identity & Audience
- **Product Name:** EDUCTIVE
- **Audience:** Nigerian school owners, principals, bursars, and admin staff reading on mobile devices.
- **Tone:** Calm, clear, respectful, direct. No buzzwords or technical jargon.
- **Showcase School:** Oakland School (Oakland Comprehensive High School).
- **Core Approved Features:**
  1. Leadership
  2. Attendance
  3. Assessment
  4. Bursar fees

---

## 2. Color System
Strict 3-color palette limit per screen.

| Token | Hex | Role | Usage |
|---|---|---|---|
| Deep Forest Green | `#07332A` | Primary Canvas & Brand | Dark hero canvas, major headers, deep accents |
| Emerald Highlight | `#3DDC97` / `#12A26B` | Accents & Indicators | Live telemetry lines, status badges, active steps |
| Terracotta Orange | `#FF6A1A` | Primary Action Only | Main CTA pill button ("Book a demo") only |
| Crisp White | `#FFFFFF` | Light Canvas | Content sections, clean paper artifact background |
| Charcoal Body | `#1B1F1D` | Primary Body Text | High-contrast readable copy (WCAG AA compliant) |
| Muted Gray | `#4A524F` | Subtext & Borders | Supporting labels, hairline borders (`#D9E0DD`) |

---

## 3. Typography Hierarchy
Maximum 2 font families across the entire platform.

| Role | Font Family | Mobile Size | Desktop Size | Tracking / Weight |
|---|---|---|---|---|
| Display Headline | Bricolage Grotesque | 36px - 44px | 50px - 58px | Bold, `-1.5px` tracking, tight line-height |
| Section Headings | Bricolage Grotesque | 24px - 28px | 32px - 38px | SemiBold, 6 words max |
| Body Text | DM Sans | 16px | 17px | Regular, 1.6 line-height, 14 words/sentence |
| Small / Card Text | DM Sans | 11px - 13px | 12px - 14px | Medium / Bold for labels and ledger cells |

---

## 4. UI Components & Visual Artifacts
- **Buttons:** Pill shape (`rounded-full`), sentence case only ("Book a demo"). Exactly one primary button per screen.
- **Physical School Paper Artifacts:**
  - Bursary Fee Receipt: Perforated edges, stamped "PAID", Naira (₦) amounts.
  - Class Register: Ruled lines, authentic Nigerian student names, present/absent tick marks.
  - Continuous Assessment (CA) Slip: Term 2 test scores, clear class tags (e.g., JSS 2 Gold).
  - WhatsApp Notification: Clean message bubble showing real payment and attendance alerts.
- **No Generic Dashboards:** Never show abstract analytics line charts or "98% growth" metric boxes.

---

## 5. Screen Layout & Calm Rules
- **One Focus per Screen:** One headline, one line of context, one visual anchor, max one button.
- **Word Limits:** Headings max 6 words; intro lines max 18 words; cards max 4-word titles and 15-word descriptions.
- **Spacing:** Generous whitespace. Cards positioned relative to their parent container, never covering faces, hands, or headings.
- **Mobile First:** Desktop max 3 items in a grid; mobile strictly 1 item per row.

---

## 6. Motion & Scroll Engine
- **Desktop Scroll:** Lenis smooth scroll (`lerp: 0.1`) synchronized with GSAP ScrollTrigger or Motion `useScroll`.
- **Mobile Scroll:** Native smooth touch scroll (Lenis disabled on touch devices).
- **Easing:** Uniform `cubic-bezier(0.22, 1, 0.36, 1)` for all transitions. Duration 0.3s to 0.8s.
- **Connecting Line:** Curved, dashed-to-solid thread passing behind photos and cards with a subtle glowing dot.
- **Accessibility:** Immediate static state when `prefers-reduced-motion` is active.

---

## 7. Site Architecture & Scope
- **Hero Section:** Preserved as the visual anchor.
- **Home Page:** Short, connected narrative (Hero $\rightarrow$ 3-way sync story $\rightarrow$ 4 core modules $\rightarrow$ Re-imagined clean FAQ $\rightarrow$ Calm demo booking).
- **Product Page (Upcoming):** Consolidates all stakeholder workflows (Owners, Principals, Bursars, Teachers) without requiring a separate "Roles" page.
- **Individual Page Strategy:** Build and verify each page independently before linking.
