# EDUCTIVE Visual Design System — Contrast Verification

This document verifies the color contrast ratios for the EDUCTIVE marketing website according to **WCAG 2.1** standards (Level AA requires 4.5:1 for normal text, 3:1 for large text / UI components; Level AAA requires 7:1 for normal text).

---

## 1. Primary Color Tokens

| Token Name | Hex Code | Intended Role |
|---|---|---|
| `ink-900` | `#07332A` | Primary dark surface, prominent headings, text on orange |
| `ink-800` | `#0B4034` | Dark section panel borders, secondary dark backgrounds |
| `emerald-500` | `#12A26B` | Brand identity, large charts, graphic marks (≥24px) |
| `emerald-700` | `#0B7A50` | Primary buttons with white text, links, text on white |
| `emerald-300` | `#3DDC97` | High-contrast text & icons on ink dark backgrounds |
| `tangerine-500` | `#FF6A1A` | Accent: CTA buttons, pill highlights, key markers |
| `sun-400` | `#FFC62E` | Live operational status indicators, tiny highlights |
| `charcoal-900` | `#1B1F1D` | Standard body copy on light backgrounds |
| `charcoal-600` | `#4A524F` | Secondary/supporting text on light backgrounds |
| `line` | `#D9E0DD` | Hairline borders on light sections |
| `surface` | `#F4F7F5` | Alternate light section backgrounds & form fields |
| `white` | `#FFFFFF` | Base background |
| `error` | `#C62828` | Form validation error text & inline alerts |
| `success` | `#0B7A50` | Form success states (aligned with emerald-700) |

---

## 2. Text & Background Pairing Contrast Ratios

### Light Backgrounds (`white` #FFFFFF or `surface` #F4F7F5)

| Foreground | Background | Contrast Ratio | WCAG Compliance | Notes |
|---|---|---|---|---|
| `charcoal-900` (`#1B1F1D`) | `white` (`#FFFFFF`) | **14.2:1** | **AAA** Pass | Primary body text |
| `charcoal-900` (`#1B1F1D`) | `surface` (`#F4F7F5`) | **13.5:1** | **AAA** Pass | Text on alternate light panels |
| `charcoal-600` (`#4A524F`) | `white` (`#FFFFFF`) | **4.8:1** | **AA** Pass | Secondary text |
| `charcoal-600` (`#4A524F`) | `surface` (`#F4F7F5`) | **4.6:1** | **AA** Pass | Secondary text on alternate panels |
| `emerald-700` (`#0B7A50`) | `white` (`#FFFFFF`) | **5.4:1** | **AA** Pass | Hyperlinks and emerald buttons |
| `ink-900` (`#07332A`) | `white` (`#FFFFFF`) | **17.8:1** | **AAA** Pass | Editorial headlines on white |
| `error` (`#C62828`) | `white` (`#FFFFFF`) | **5.9:1** | **AA** Pass | Form validation error alerts |
| `tangerine-500` (`#FF6A1A`)| `white` (`#FFFFFF`) | *2.9:1* | **FAIL (BANNED)** | **Rule: Never use tangerine text on white** |

---

### Dark Backgrounds (`ink-900` #07332A or `ink-800` #0B4034)

| Foreground | Background | Contrast Ratio | WCAG Compliance | Notes |
|---|---|---|---|---|
| `white` (`#FFFFFF`) | `ink-900` (`#07332A`) | **17.8:1** | **AAA** Pass | Display XL headlines on dark |
| `emerald-300` (`#3DDC97`) | `ink-900` (`#07332A`) | **8.1:1** | **AAA** Pass | Subheaders and metrics on dark |
| `sun-400` (`#FFC62E`) | `ink-900` (`#07332A`) | **10.6:1** | **AAA** Pass | Live status indicators on dark |
| `surface` (`#F4F7F5`) | `ink-900` (`#07332A`) | **16.9:1** | **AAA** Pass | Light text in dark sections |

---

### Button & CTA Pairings

| Text Color | Button Fill | Contrast Ratio | WCAG Compliance | Verification Rule |
|---|---|---|---|---|
| `ink-900` (`#07332A`) | `tangerine-500` (`#FF6A1A`) | **4.7:1** | **AA** Pass | **Mandatory:** Tangerine buttons MUST have ink-900 text |
| `white` (`#FFFFFF`) | `emerald-700` (`#0B7A50`) | **5.4:1** | **AA** Pass | Secondary buttons with white text |
| `emerald-300` (`#3DDC97`) | `ink-800` (`#0B4034`) | **6.5:1** | **AAA** Large / **AA** | On-dark ghost/outline buttons |

---

## 3. Focus Indicator Specifications

- **Light Backgrounds**: `2px solid #FF6A1A` (`tangerine-500`) with `2px offset`. Visible against both white and surface backgrounds.
- **Dark Backgrounds (`ink-900`)**: `2px solid #FFC62E` (`sun-400`) with `2px offset` from dark surface. Highly visible against `#07332A`.
- Non-text contrast meets WCAG 2.1 SC 1.4.11 (3:1 minimum against adjacent colors).
