# Implementation prompt: Expand main content width to 1440px

## Goal

Expand the main content width across the site from 1024px to approximately 1440px (`max-w-[1440px]`), ensuring the site header, hero section, courses grid, footer, and bottom decorative chart scale harmoniously with balanced spacing and responsive behavior.

## Skills and docs read

- `AGENTS.md` — §2 workflow loop, §3 UI work (responsive down to mobile), §5 structure, §13 checks, §14.
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` — Tailwind CSS styling and responsiveness.

## Code inspected

- `components/layout/site-header.tsx` — inner header container currently restricted to `max-w-[1024px]`.
- `app/page.tsx` — hero, courses section, and chart decoration containers currently restricted to `max-w-[1024px]`.
- `components/home/hero.tsx` — search bar currently capped at `max-w-[750px]`.
- `components/home/chart-decoration.tsx` — decorative equalizer bars cluster sized for narrower container.

## Decisions and assumptions

1. **Max-width expansion to 1440px:**
   Update the content container classes from `max-w-[1024px]` to `max-w-[1440px]` in `components/layout/site-header.tsx` and `app/page.tsx`.
2. **Proportional hero and search scaling:**
   Scale the search input in `components/home/hero.tsx` to `max-w-[840px]` (from 750px) so it sits with balanced proportion inside the wider 1440px hero section.
3. **Course cards grid layout:**
   The 3-column cards grid in `app/page.tsx` will utilize the wider canvas comfortably with `gap-6 lg:gap-8` and horizontal padding `px-6 md:px-10 xl:px-12`.
4. **Bottom chart decoration scaling:**
   Adjust the equalizer bar heights array and bar widths in `components/home/chart-decoration.tsx` so the decorative wave spans the 1440px container smoothly.
5. **Full-bleed elements stay full-bleed:**
   The site header bottom border and the hairline divider between hero and courses remain full-bleed across the screen, framing the 1440px centered content cleanly.
6. **Responsive behavior intact:**
   Content scales down fluidly on screens narrower than 1440px (1200px, 1024px, 768px, 375px) with zero horizontal overflow.

## Files expected to change

| File | Change |
| --- | --- |
| `prompts/expand-content-width-1440px.md` | new implementation prompt |
| `components/layout/site-header.tsx` | update header container to `max-w-[1440px]` |
| `app/page.tsx` | update hero, courses, and chart containers to `max-w-[1440px]` with refined padding |
| `components/home/hero.tsx` | update search bar max-width to `max-w-[840px]` |
| `components/home/chart-decoration.tsx` | widen decorative bar cluster to span 1440px width |

## Requirements

- Main content width reaches up to 1440px on large viewports (>= 1440px).
- Content remains centered with consistent horizontal padding (`px-6 md:px-10 xl:px-12`).
- Responsive down to 375px with no horizontal overflow.
- High contrast, dark mode, and focus rings remain intact.

## Security considerations

- Presentational CSS adjustments only; no data fetching or authentication impact.

## Acceptance criteria

1. On viewports >= 1440px, the header and main content span up to 1440px.
2. The search input, course cards grid, and footer scale proportionally without feeling cramped or stretched.
3. The layout remains fully responsive down to mobile viewports (375px).
4. TypeScript check (`tsc --noEmit`), ESLint (`npm run lint`), and Next.js build (`npm run build`) pass cleanly with zero errors.

## Checks to run

- `cmd /c npx tsc --noEmit`
- `cmd /c npm run lint`
- `cmd /c npm run build`

## Manual test steps

1. Run `cmd /c npm run dev` and open `http://localhost:3000/`.
2. On a large monitor (>= 1440px), inspect the page and verify the content container is 1440px wide and centered.
3. Verify that the header elements (logo, navigation, toggle, bell, avatar) align with the 1440px content boundaries.
4. Verify that the search input and 3-column course cards grid look well-proportioned and spaced.
5. Resize the browser to 1280px, 1024px, 768px, and 375px to confirm fluid responsiveness.

