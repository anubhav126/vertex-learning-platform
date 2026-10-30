# Implementation prompt: Vertex home page

## Goal

Reproduce `Sanity LMS Vertex/design/vertex-home.png` as the site's home route (`/`), replacing the Create Next App boilerplate in `app/page.tsx`. Presentational only: no Sanity, no Clerk, no PostHog, no data fetching. Course content is a local placeholder array shaped so it can be swapped for a GROQ fetch later without touching the markup.

## Skills and docs read

- `AGENTS.md` — §3 UI work (reference image is the source of truth, reuse existing components, responsive down to mobile), §5 structure (pages are read-only display), §13 checks, §14.
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md` — App Router page conventions, `PageProps`/`LayoutProps` global helpers, `<Link>` for navigation.
- `node_modules/next/dist/docs/01-app/01-getting-started/` index — Next.js 16 / React 19 image, font, and CSS conventions.
- No Sanity/Clerk/PostHog/Context skill applies yet: nothing here talks to a datastore or an LLM.

## Code inspected

- `app/globals.css` — Tailwind v4 `@theme` tokens (primary/neutral/surface, radius, shadows) and the `@utility` type scale (`text-display-1`, `text-heading-3`, `text-body`, `text-small`, etc.).
- `app/layout.tsx` — Inter + Playfair Display wired as `--font-inter` / `--font-playfair`; body is `min-h-full flex flex-col`.
- `app/page.tsx` — Create Next App boilerplate, to be replaced entirely.
- `components/nav/navbar.tsx` — logo + `Courses` / `My Learning` links, focus rings.
- `components/brand/logo.tsx` — `Logo` component.
- `components/ui/button.tsx` — `Button` / `ButtonLink`, variants primary/secondary/tertiary/text, sizes `lg` (h-11, 16px) and `md`.
- `components/ui/search-input.tsx` — search field with leading icon and `⌘ K` kbd hint.
- `components/ui/card.tsx` — `Card` container.
- `components/cards/course-card.tsx` — horizontal row layout with logo tile left of sans title and meta row.
- `lib/utils.ts` — `cn()`.
- `prompts/design-system.md` — design system conventions (tokens over hex, server components by default, lucide icons).

## Measurements taken from the reference (`vertex-home.png`)

Sampled from `Sanity LMS Vertex/design/vertex-home.png` (1024×1536) and treated as 1:1 CSS px.

- Framed content column: vertical hairlines at x≈33 and x≈990 → **960px column**, centered, with diagonally striped gutters filling the rest of the viewport.
- Header: 96px tall, bottom hairline, 40px horizontal padding, avatar 48px, bell icon button.
- Eyebrow pill: ~210×40px, ~11px uppercase, ~0.12em tracking, primary-500 on a soft warm fill.
- Hero heading: Playfair Display bold ~56–60px / 74px line height, two lines, centered.
- Hero subtitle: ~18px / 32px, two lines, neutral-500, max-w-xl, centered.
- CTA button: ~230×64px, radius 12, ~17px label + 20px arrow.
- Search field: ~750×88px, radius 12–16, 40px horizontal padding, ~18px placeholder, `⌘ K` kbd at the right.
- Full-bleed hairline between hero and courses (y≈742).
- Section content padding: 48px. "All Courses" ≈30px Playfair bold; "View all courses →" primary-500, ~15px.
- Cards: 3 across, ~276px wide, ~20px gap, 373px tall, 28px padding, 72px logo tile (radius 16) above a ~22px Playfair title, ~15px/25px description, hairline divider, meta row (16px icons, 12px labels).
- Footer note: centered star + ~17px label with a hairline running out to both edges.
- Bottom decoration: two clusters of blurred orange bars fading upward, cropped by the page edge.

## Decisions and assumptions

1. **Warm canvas as new tokens, existing system untouched.** Add `--color-canvas: #fbf8f5` and `--color-canvas-line: #f0e7e0` to `@theme inline` in `app/globals.css` and apply them to the home page frame. `/design-system` remains completely unaffected.
2. **Primary stays `#F97316`.** The CTA and accents use the documented primary tokens.
3. **Existing components are extended, not duplicated:**
   - `Button`/`ButtonLink` gain `size="xl"` (h-16, px-7, 17px text) for the hero CTA.
   - `SearchInput` gains `size?: "md" | "lg"`; `lg` is the 88px hero field (larger icon, 18px placeholder).
   - `CourseCard` gains `layout?: "row" | "stacked"`; `stacked` is the home card (logo tile above, Playfair title, divider above the meta row). `row` stays the default so `/design-system` renders unchanged.
   - `Logo` is enhanced with a clean `LogoMark` inverted triangle chevron matching the brand mark from the design reference, with backward compatibility for existing uses.
4. **New components created:**
   - `components/layout/page-frame.tsx` — the 960px column, its side hairlines, and the striped gutters (CSS `repeating-linear-gradient`, no image).
   - `components/layout/site-header.tsx` — composes the navbar with right-side actions (notification bell button and avatar).
   - `components/ui/avatar.tsx` — circular avatar placeholder (48px).
   - `components/brand/course-marks.tsx` — inline SVG marks for Next.js, Docker, and TypeScript.
   - `components/home/hero.tsx` — hero section (eyebrow pill, heading, subtitle, CTA button, large search input).
   - `components/home/chart-decoration.tsx` — stylized upward fading orange bars (`aria-hidden`).
5. **Avatar is initials / placeholder avatar.** Renders a 48px circle; later replaced by Clerk's `<UserButton />`.
6. **Docker mark is an approximation.** Hand-authored simplified whale + container stack in Docker blue.
7. **Placeholder data lives in `app/page.tsx`** as a typed `const courses` using the three cards from the reference verbatim, enabling a seamless one-line data fetch swap later.
8. **Everything is a server component.** No `"use client"`; the search field is an uncontrolled input and the `⌘ K` shortcut is a visual hint.
9. **The bell is presentational** per AGENTS.md §7; renders as a button with an accessible label `aria-label="Notifications"`.
10. **Nav/CTA hrefs** point to `/courses` and `/my-learning`.
11. **Bottom bar decoration is `aria-hidden`** and built from styled divs with vertical gradient and blur.

## Files expected to change / create

| File | Change |
| --- | --- |
| `prompts/home-page.md` | new implementation prompt |
| `app/globals.css` | add `--color-canvas`, `--color-canvas-line` |
| `app/page.tsx` | replace boilerplate with the home page |
| `components/layout/page-frame.tsx` | new 960px frame + striped gutter component |
| `components/layout/site-header.tsx` | new header with logo, links, bell, avatar |
| `components/ui/avatar.tsx` | new circular avatar placeholder |
| `components/brand/course-marks.tsx` | new SVG brand marks (Next.js, Docker, TypeScript) |
| `components/brand/logo.tsx` | enhance logo mark to match design reference |
| `components/home/hero.tsx` | new hero section component |
| `components/home/chart-decoration.tsx` | new decorative gradient bars component |
| `components/ui/button.tsx` | add `xl` size |
| `components/ui/search-input.tsx` | add `size` prop (`md` \| `lg`) |
| `components/cards/course-card.tsx` | add `stacked` layout option |

## Requirements

- Desktop matches `Sanity LMS Vertex/design/vertex-home.png`: layout, spacing, typography, color, and framed column with striped gutters.
- Responsive with no horizontal scroll down to 375px: grid reflows (1 → 2 → 3 columns); hero typography scales down gracefully; frame gutters collapse smoothly below 960px; search and CTA adapt responsively.
- Tokens only: use Tailwind v4 theme tokens; no raw hex outside SVG brand marks.
- Semantic landmarks (`<header>`, `<main>`, `<section>`) with headings in correct hierarchy; all icons and decorations marked `aria-hidden="true"`; accessible names on interactive elements.
- Zero new external dependencies.

## Security considerations

- Completely static and presentational: no tokens, no env vars, no client-side API requests, no data fetching ahead of Sanity integration.

## Acceptance criteria

1. `/` renders `Sanity LMS Vertex/design/vertex-home.png`: header, hero (pill, heading, subtitle, CTA, search), divider, All Courses section with 3 stacked cards, footer note, and bottom bar decoration.
2. `/design-system` remains completely unaffected and visually unchanged.
3. At 375px, the home page has no horizontal overflow and every section stays readable.
4. Type check (`npx tsc --noEmit`), lint (`npm run lint`), and production build (`npm run build`) all pass with zero errors.
5. No `"use client"` added to `app/page.tsx`.

## Checks to run

- `npx tsc --noEmit`
- `npm run lint`
- `npm run build`

## Manual test steps

1. Run `npm run dev`, open `http://localhost:3000/`.
2. Compare side-by-side with `Sanity LMS Vertex/design/vertex-home.png` from top to bottom.
3. Hover over the CTA, "View all courses", nav links, and course cards to verify smooth transitions.
4. Tab through the page to confirm clear focus rings on all interactive elements.
5. Resize browser to 1440px, 1024px, 768px, and 375px to verify responsiveness.
6. Open `http://localhost:3000/design-system` and confirm it renders identically as before.

