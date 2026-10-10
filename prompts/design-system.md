# Implementation prompt: Vertex Design System

## Goal

Turn the design-system reference image into the real, reusable foundation every later Vertex page
builds on: design tokens in Tailwind v4 `@theme`, a typed component library, and a `/design-system`
showcase route that reproduces the reference sheet section by section so it can be visually verified.

## Skills and docs read

- `AGENTS.md` — sections 3 (UI work), 5 (structure), 6 (stack), 13 (checks), 14 (when in doubt).
- `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md` — `next/font/google`,
  variable fonts, `className` / `variable` for CSS custom properties.
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` — Tailwind v4 via `@import
  "tailwindcss"` in `app/globals.css`.
- `Sanity LMS Vertex/prompts/design-system.md` — existing reference prompt with detailed section
  specs. Used as a cross-reference for token values and component requirements.
- No Sanity/Clerk/PostHog skill needed — this task is presentational only.

## Code inspected

- `package.json` — Next 16.4.0, React 19.3.0, Tailwind v4 (`@tailwindcss/turbopack`), TS, ESLint.
  No UI dependencies yet.
- `next.config.ts` — turbopack CSS loader rule for `@tailwindcss/turbopack`. No postcss.config.
- `app/globals.css` — CNA boilerplate with Geist font vars, `prefers-color-scheme` dark block.
- `app/layout.tsx` — Geist/Geist_Mono fonts loaded, `LayoutProps<"/">` typed root layout.
- `app/page.tsx` — CNA marketing boilerplate (will be left as-is).
- `tsconfig.json` — `@/*` path alias pointing to repo root.

## Decisions and assumptions

1. **Tokens in `@theme inline` inside `app/globals.css`** (Tailwind v4 CSS-first config). No
   `tailwind.config.ts`. Every value from the sheet becomes a design token so components use
   `bg-primary-500`, `text-neutral-900`, `shadow-md`, `rounded-md` — never a raw hex.
2. **Light mode only.** The design system has no dark mode. Remove the boilerplate
   `prefers-color-scheme` dark block and Geist fonts.
3. **Fonts:** Playfair Display (Display 1/2) and Inter (everything else) via `next/font/google`, as
   CSS variables `--font-playfair` / `--font-inter`, exposed in `@theme` as `--font-display` and
   `--font-sans`.
4. **Type scale** via `@utility` classes: `.text-display-1`, `.text-display-2`, `.text-heading-1`,
   `.text-heading-2`, `.text-heading-3`, `.text-body-lg`, `.text-body`, `.text-small`. Each pins
   font-family, size, line-height, and weight from section 03.
5. **Spacing** — base unit is 4px, which is Tailwind's default `--spacing`. No override needed. The
   scale (4/8/12/16/24/32/40/48/64) is documented in the showcase.
6. **Icons: `lucide-react`** — 24×24 grid, 2px stroke, rounded caps — exactly the icon spec in
   section 06. Covers all glyphs visible in the reference. Filled variants use `fill="currentColor"`
   with `strokeWidth={0}`. One dependency addition.
7. **`cn()` helper** via `clsx` + `tailwind-merge` in `lib/utils.ts`. Variants use plain
   `Record<Variant, string>` lookup maps — no `cva` needed at this scale.
8. **Server components by default.** Only `SearchInput` (controlled keyboard shortcut hint) and
   `Select` (native `<select>`) might need `"use client"` if they become controlled. For now, built
   as uncontrolled server components where possible.
9. **Vertex logo** — hand-authored SVG (orange triangle with V notch) in `components/brand/logo.tsx`.
10. **Cards are presentational** — explicit props, no data-fetching, matching AGENTS.md §5.
11. **Showcase route** at `app/design-system/page.tsx` — statically rendered, all 14 sections, sample
    copy from the reference image.
12. **`app/page.tsx` left as-is** — the home page redesign is a separate task.
13. **Responsive** — reference is desktop-only. Grids collapse to 1–2 columns below `md`. Controls
    keep fixed desktop metrics (44px height, 12px radius).

## Token values (from the reference image)

| Group | Tokens |
| --- | --- |
| Primary | 500 `#F97316`, 400 `#FB923C`, 300 `#FDBA74`, 200 `#FED7AA`, 100 `#FFEEE5` |
| Primary 600 | `#EA580C` (hover darker, derived) |
| Neutral | 900 `#0F172A`, 700 `#334155`, 500 `#64748B`, 300 `#CBD5E1`, 200 `#E2E8F0`, 100 `#F1F5F9`, 50 `#FAFAFC`, white `#FFFFFF` |
| Radius | xs `4px`, sm `8px`, md `12px`, lg `16px`, xl `24px`, full `9999px` |
| Shadow sm | `0 1px 2px 0 rgba(15,23,42,0.05)` |
| Shadow md | `0 4px 12px -2px rgba(15,23,42,0.08)` |
| Shadow lg | `0 12px 24px -4px rgba(15,23,42,0.10)` |
| Shadow xl | `0 20px 40px -8px rgba(15,23,42,0.12)` |

Type scale:
- Display 1: Playfair Display 48/56 Bold
- Display 2: Playfair Display 36/44 Bold
- Heading 1: Inter 28/36 Semi Bold
- Heading 2: Inter 22/30 Semi Bold
- Heading 3: Inter 18/26 Medium
- Body Large: Inter 16/24 Regular
- Body: Inter 14/20 Regular
- Small: Inter 12/16 Regular

## Files to create or change

```
app/globals.css                          rewrite: tokens, base styles, type-scale utilities
app/layout.tsx                           Playfair + Inter fonts, Vertex metadata
app/design-system/page.tsx               14-section showcase page
lib/utils.ts                             cn() helper
components/brand/logo.tsx                Logo (mark + wordmark)
components/ui/button.tsx                 Button (primary|secondary|tertiary|text × default/hover/disabled)
components/ui/badge.tsx                  Badge (video|lesson|popular)
components/ui/status-indicator.tsx       StatusIndicator (in-progress|completed|now-playing|locked)
components/ui/progress-bar.tsx           ProgressBar (value, optional label)
components/ui/search-input.tsx           SearchInput (icon, placeholder, ⌘K hint)
components/ui/select.tsx                 Select (native, chevron)
components/ui/card.tsx                   Card shell (surface, border, radius, shadow)
components/cards/course-card.tsx         CourseCard
components/cards/lesson-video-card.tsx   LessonVideoCard
components/cards/lesson-card.tsx         LessonCard
components/cards/resource-card.tsx       ResourceCard
components/nav/navbar.tsx                Navbar (logo + links, active state)
components/nav/breadcrumbs.tsx           Breadcrumbs
components/nav/pagination.tsx            Pagination
package.json                             + lucide-react, clsx, tailwind-merge
```

## Requirements per section

- **01 Colors** — every swatch above as a `@theme` token; swatch grid in showcase with name + hex.
- **02/03 Typography** — both families loaded; eight scale utilities; showcase renders spec table.
- **04 Spacing** — showcase renders 9 squares with px and rem labels.
- **05 Radius & Shadows** — 6 radius chips, 4 shadow cards with CSS values printed.
- **06 Icons** — outline row and filled row, 24px, plus the four spec bullets.
- **07 Buttons** — 4 variants × default/hover/disabled states. Primary: `bg-primary-500`, hover
  `bg-primary-600`, disabled faded. Secondary: border `primary-500`, text `primary-500`. Tertiary:
  white surface, `neutral-200` border. Text: `primary-500` label with icon. All 44px height, 12px
  radius, Inter medium.
- **08 Inputs** — 44px height, 12px radius, 1px `#E2E8F0` border, focus border `#FB923C`. Search
  with leading icon and ⌘K chip. Select with chevron.
- **09 Badges** — VIDEO (orange), LESSON (indigo), POPULAR (orange). Uppercase, 12px, tracked.
- **10 Status** — In Progress, Completed (green), Now Playing (orange), Locked (neutral).
- **11 Progress bar** — 8px track, `primary-500` fill, `role="progressbar"` with ARIA attrs.
- **12 Cards** — white surface, `neutral-200` border, 16px radius, `shadow-sm`. Four card types.
- **13 Navigation** — navbar, breadcrumbs, pagination.
- **14 Principles** — four icon + title + description blocks.

## Security considerations

Presentational only: no data access, no tokens, no env vars, no network calls, no user input
persisted. No `dangerouslySetInnerHTML`. Nothing touches server/client boundaries.

## Accessibility

- Buttons are real `<button>`/`<a>` with `focus-visible` rings.
- Search input has associated label (visually hidden).
- Select has a label.
- Progress bar has `role="progressbar"` with `aria-valuenow/min/max`.
- Pagination uses `<nav aria-label="Pagination">` with `aria-current="page"`.
- Breadcrumbs use `<nav aria-label="Breadcrumb">` with `aria-current="page"`.
- Decorative icons are `aria-hidden`.

## Acceptance criteria

1. `/design-system` renders all 14 numbered sections in reference order.
2. Side by side with the reference image, colors, type, radii, shadows, button states, badges,
   cards, nav, and pagination match.
3. No component contains a raw hex outside `app/globals.css`.
4. All components are typed, exported, and support `className` overrides via `cn()`.
5. The page is responsive from 1440px to 375px with no horizontal scroll.
6. Only components that need interactivity are client components.
7. `npx tsc --noEmit`, `npm run lint`, and `npm run build` all pass.

## Checks to run

```
npx tsc --noEmit
npm run lint
npm run build
npm run dev      # then open /design-system
```

## Manual test steps

1. `npm run dev`, open `http://localhost:3000/design-system`.
2. Compare against reference image top to bottom; each section matches.
3. Hover every button variant — primary darkens, secondary fills, tertiary greys, text stays orange.
4. Tab through the page — every interactive element shows a visible focus ring.
5. Focus the search input — border turns `#FB923C`.
6. Resize to 768px and 375px — sections stack, cards readable, no horizontal scrollbar.
7. Confirm headings render in Playfair Display and body text in Inter.

