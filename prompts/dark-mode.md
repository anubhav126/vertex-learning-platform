# Implementation prompt: Site-wide Dark Mode Toggle

## Goal

Implement a site-wide dark mode toggle that persists user preference in `localStorage`, prevents theme flickering (FOUC) on page load, and provides rich dark mode styling across the entire site (header, hero, search input, course cards, buttons, cards, and canvas background).

## Skills and docs read

- `AGENTS.md` — §2 workflow loop, §3 UI work, §5 structure, §13 checks, §14.
- `node_modules/next/dist/docs/01-app/01-getting-started/11-css.md` — Tailwind CSS in Next.js App Router.
- Tailwind CSS v4 class-based variant pattern: `@custom-variant dark (&:where(.dark, .dark *));`.

## Code inspected

- `app/globals.css` — Tailwind v4 `@theme inline`, `@utility` type scale, base body styles.
- `app/layout.tsx` — root layout with `<html>` and `<body>` tags.
- `components/layout/site-header.tsx` — top navigation header with logo, links, bell, avatar.
- `components/layout/page-frame.tsx` — full page canvas container.
- `components/home/hero.tsx` — hero section with heading, pill, subtitle, search input.
- `components/cards/course-card.tsx` — course card in stacked and row layouts.
- `components/ui/card.tsx` — base Card component.
- `components/ui/button.tsx` — Button variants and states.
- `components/ui/search-input.tsx` — search input and kbd badge.
- `app/page.tsx` — home page composition.

## Decisions and assumptions

1. **Tailwind v4 class-based variant:**
   Add `@custom-variant dark (&:where(.dark, .dark *));` to `app/globals.css` so `dark:` utility classes activate whenever `.dark` is present on `<html>`.
2. **Flicker-free initial load (anti-FOUC):**
   Inject a lightweight inline script in `<head>` inside `app/layout.tsx` that reads `localStorage.getItem('vertex-theme')` or falls back to system preference (`prefers-color-scheme: dark`) and adds `.dark` to `document.documentElement` before rendering begins. Add `suppressHydrationWarning` on `<html>`.
3. **React Theme Provider:**
   Create `components/theme/theme-provider.tsx` using React Context with `'light' | 'dark' | 'system'` support and safe client-side hydration.
4. **Theme Toggle Component:**
   Create `components/theme/theme-toggle.tsx` with Sun and Moon icons from `lucide-react`, clear tooltip / `aria-label="Toggle theme"`, and keyboard accessibility.
5. **SiteHeader Integration:**
   Place the `ThemeToggle` in `SiteHeader` next to the notification bell button.
6. **Dark Mode Palette:**
   - Dark canvas background: `#0B0F17`
   - Dark card & surface background: `#111827` / `#161F30`
   - Dark borders & dividers: `#1E293B` / `neutral-800`
   - Dark text: `neutral-50` for headings, `neutral-400` for subtitles and metadata
   - Primary accents: retain vibrant `#F97316` / `#FB923C` for brand identity
7. **Zero external dependencies:**
   Implement using native React 19 context, hooks, and standard Tailwind utilities without adding third-party packages.

## Files expected to change / create

| File | Change |
| --- | --- |
| `prompts/dark-mode.md` | new implementation prompt |
| `app/globals.css` | add `@custom-variant dark` and dark body styles |
| `app/layout.tsx` | add inline theme script, `suppressHydrationWarning`, and `ThemeProvider` |
| `components/theme/theme-provider.tsx` | new React context provider and `useTheme` hook |
| `components/theme/theme-toggle.tsx` | new accessible Sun/Moon toggle button |
| `components/layout/site-header.tsx` | embed `ThemeToggle` and dark header styling |
| `components/layout/page-frame.tsx` | add dark canvas background |
| `components/home/hero.tsx` | add dark styling for pill, headings, subtitle |
| `components/ui/search-input.tsx` | add dark styling for input, border, kbd badge |
| `components/cards/course-card.tsx` | add dark styling for stacked and row card layouts |
| `components/ui/card.tsx` | add dark background and border styling |
| `components/ui/button.tsx` | add dark variants for secondary and tertiary buttons |
| `app/page.tsx` | add dark styling for dividers and footer text |

## Requirements

- Toggle switches between light and dark modes with a single click.
- User preference persists in `localStorage` across reloads and visits.
- No flash of unstyled theme on initial load.
- High contrast, legible typography, and consistent spacing in both modes.
- Light mode remains 100% true to the original design reference.
- Zero horizontal overflow and clean responsive layout.

## Security considerations

- Local client-side preference only; no sensitive data or network transmission.

## Acceptance criteria

1. Clicking the theme toggle switches between light and dark modes across all components.
2. The selected theme persists on page reload without visual flashing.
3. Light mode appearance matches the previous state with zero regressions.
4. Type check (`tsc --noEmit`), ESLint (`npm run lint`), and Next.js build (`npm run build`) pass cleanly.

## Checks to run

- `cmd /c npx tsc --noEmit`
- `cmd /c npm run lint`
- `cmd /c npm run build`

## Manual test steps

1. Run `cmd /c npm run dev` and open `http://localhost:3000/`.
2. Click the theme toggle button in the header.
3. Verify that the entire page transforms cleanly into dark mode (header, hero, search bar, course cards, divider, footer).
4. Refresh the page while in dark mode to verify that the theme persists without flickering.
5. Click the toggle again to return to light mode and verify light mode remains visually identical.

