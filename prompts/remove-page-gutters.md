# Implementation prompt: Remove vertical lines and gutters from home page

## Goal

Remove the hard vertical border lines and diagonal striped gutters from the home page, giving the site a clean, modern, full-width warm canvas background (`#FBF8F5`) with centered content, per user selection.

## Skills and docs read

- `AGENTS.md` — §3 UI work, §13 checks, §14 when in doubt.
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md` — App Router layout and page conventions.

## Code inspected

- `components/layout/page-frame.tsx` — currently applies `repeating-linear-gradient` for diagonal stripes on the outer container and `border-x border-canvas-line` with `max-w-[960px]` on the inner container.
- `components/layout/site-header.tsx` — header with `border-b border-canvas-line`.
- `app/page.tsx` — uses `PageFrame` wrapping `SiteHeader`, `Hero`, divider, and `All Courses`.

## Decisions and assumptions

1. **Remove diagonal stripes and vertical border lines:**
   - Remove the `repeating-linear-gradient` background entirely from `components/layout/page-frame.tsx`.
   - Remove `border-x border-canvas-line` from `components/layout/page-frame.tsx`.
2. **Clean full-width warm canvas:**
   - The entire page background is clean warm canvas (`bg-canvas` = `#FBF8F5`).
   - The header has a full-width bottom hairline (`border-b border-canvas-line`) with content centered in a responsive container (`max-w-[1024px] mx-auto`).
   - The main content remains centered with a max-width container (`max-w-[1024px] mx-auto`) so the hero, search bar, and courses maintain their balanced proportions without side cages.
3. **Responsive behavior intact:**
   - Clean edge padding on mobile (`px-4 sm:px-6 md:px-8`) with no horizontal overflow.

## Files expected to change

| File | Change |
| --- | --- |
| `prompts/remove-page-gutters.md` | new implementation prompt |
| `components/layout/page-frame.tsx` | remove diagonal stripes and side border lines |
| `components/layout/site-header.tsx` | center inner header content with full-width bottom border |

## Requirements

- No vertical lines cutting through the page.
- No diagonal striped background pattern.
- Clean warm canvas background across the whole viewport.
- Header and content stay centered, clean, and balanced.
- Zero horizontal overflow down to 375px.

## Security considerations

- Presentational layout adjustments only. No data fetching, no security concerns.

## Acceptance criteria

1. The vertical lines and diagonal stripes are gone.
2. The page renders with a clean warm canvas background across the screen.
3. Content remains properly centered and readable at all screen sizes.
4. Type check, lint, and build pass with zero errors.

## Checks to run

- `cmd /c npx tsc --noEmit`
- `cmd /c npm run lint`
- `cmd /c npm run build`

## Manual test steps

1. Run `cmd /c npm run dev`, open `http://localhost:3000/`.
2. Verify that there are no vertical border lines or hatched stripes on the sides.
3. Verify that the header, hero, search bar, and courses section are centered cleanly on the warm canvas background.
4. Resize browser across 1440px, 1024px, 768px, and 375px.

