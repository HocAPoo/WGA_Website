# Handoff: WGA Website Redesign

## Overview

A six-page marketing site for **WGA** (Washington Game Association), a student-run game club. The design positions WGA as the PNW college esports / con-scene flagship, anchored by **HuskyX**, their annual one-day game con. The aesthetic is **anime/con manga-panel**: bold display type, kinetic diagonal layouts, halftone dots, sticker badges, decorative kana glyphs, and chunky drop-shadow buttons. Light mode, playful, broadcast-confident tone.

**Pages**
1. **Home** (`index.html`) — Hero (3 swappable variants), events grid, HuskyX teaser, sponsors, contact, get-involved CTA
2. **HuskyX** (`huskyx.html`) — Flagship event: hero, stats strip, 4-arena breakdown, 16-block schedule, tickets, multi-step cosplay signup, feedback form
3. **Team** (`team.html`) — Roster of 14 roles, past seasons (year-dropdown), code of conduct, production team application
4. **Gallery** (`gallery.html`) — HuskyX archives, themed per volume (year pills swap the whole board background)
5. **Join WGA** (`membership.html`) — Three pathways: Sponsors, RSO Event Hosts, Production Team — each with its own form
6. **Calendar** (`calendar.html`) — Interactive month view + upcoming events list

## About the Design Files

The files in `design-files/` are **design references created as static HTML + Babel-transpiled JSX prototypes**. They demonstrate the intended look, layout, copy, interactions, and component composition — **they are not production code to copy directly into the codebase**.

Your job is to **recreate these designs in WGA's existing website environment**, using its framework (React/Next.js/Astro/whatever is in place), its component conventions, its routing, and its data layer. If no framework is in place yet, choose the most appropriate one for a marketing site (Next.js or Astro recommended) and implement there.

The Babel-in-browser setup, the global `Object.assign(window, ...)` pattern, the `tweaks-panel.jsx` host-protocol, and the multi-`<script type="text/babel">` loading are all design-environment scaffolding — **drop them**. Use the codebase's own module system, component imports, and state management.

## Fidelity

**High-fidelity (hifi).** All colors, type ramps, spacing, border radii, shadow offsets, and copy are intended as the final design. Recreate pixel-faithfully using the codebase's existing styling solution (CSS Modules, Tailwind, styled-components, etc.).

The exception: image placeholders. Anywhere you see a striped diagonal `.ph` element with a label like `<span>Tournament floor photo</span>`, that's a **placeholder where the client will drop in real photography or logos**. Keep the slot, the aspect ratio, and the label-as-alt-text — replace the striped fill with the real `<img>` when assets are provided.

---

## Design Tokens

### Colors

The site has **three swappable themes**. Default is "Critical Hit". Themes are applied by setting `data-theme="..."` on `<html>`.

#### Critical Hit (default) — `data-theme` unset or `"default"`
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFF6E8` | Page background (warm cream) |
| `--bg-2` | `#FFEFD2` | Card / panel fill |
| `--ink` | `#111118` | Primary text + borders |
| `--ink-2` | `#2A2A36` | Secondary text |
| `--muted` | `#6B6B7A` | Tertiary text |
| `--accent` | `#FF3D7F` | Primary accent (hot pink) |
| `--accent-2` | `#2E5BFF` | Secondary accent (electric blue) |
| `--accent-3` | `#FFD23F` | Tertiary accent (sun yellow) |
| `--mint` | `#00C896` | Quaternary accent (mint) |

#### Royal Purple — `data-theme="sunset"` (legacy key)
| Token | Hex |
|---|---|
| `--bg` | `#F4F1EE` |
| `--bg-2` | `#E8DEEF` |
| `--ink` | `#1A0028` |
| `--ink-2` | `#2D0843` |
| `--accent` | `#3B0361` |
| `--accent-2` | `#7B2CBF` |
| `--accent-3` | `#C77DFF` |
| `--mint` | `#B388EB` |

#### Frost LAN — `data-theme="frost"`
| Token | Hex |
|---|---|
| `--bg` | `#EFF6FF` |
| `--bg-2` | `#DCE9FF` |
| `--ink` | `#0A1430` |
| `--accent` | `#FF2E8E` |
| `--accent-2` | `#1F50FF` |
| `--accent-3` | `#19E0C0` |

#### Navigation chrome (fixed, NOT theme-swapped)
- Nav background: `#1A1A2E` (deep navy)
- Nav text: `#FFF6E8`
- Nav active/hover: `var(--accent-3)`
- Nav button: pink-on-navy with `4px 4px 0 #000` shadow

### Typography

Three font pairings, default is **Bowlby**. Loaded from Google Fonts.

| Pairing | Display | Body | UI/numbers |
|---|---|---|---|
| `bowlby` (default) | Bowlby One | Plus Jakarta Sans | JetBrains Mono |
| `anton` | Anton | Inter | JetBrains Mono |
| `archivo` | Archivo Black | Space Grotesk | JetBrains Mono |

Plus **Noto Sans JP** for the decorative kana glyphs (used as graphic ornament, not for translation).

Type ramps (uses `clamp()` for responsive scaling):
- Hero / huge display: `clamp(72px, 13vw, 220px)`
- Section title: `clamp(40px, 6vw, 88px)`
- Card / sub-display: `clamp(36px, 4vw, 64px)`
- Body: `16px / 1.55`
- Eyebrow / mono labels: `12px`, `letter-spacing: .14em`, `text-transform: uppercase`
- Mono captions: `10–11px`, `letter-spacing: .12–.18em`

### Spacing

CSS variables `--gap` and `--pad` switch with density.

| Density | `--gap` | `--pad` | `--r` (radius) |
|---|---|---|---|
| `compact` | 18px | 18px | 10px |
| `regular` (default) | 28px | 28px | 14px |
| `spacious` | 40px | 40px | 18px |

Common border radii: `8px` (small chips), `10–14px` (cards), `999px` (pills/buttons).

### Shadows

The whole site uses **flat solid drop shadows** (not blurred). The signature shadow is:
```
box-shadow: 4–12px 4–12px 0 var(--ink);
```
Buttons: `4px 4px 0 var(--ink)` (hover: `6px 6px 0`, active: `0 0 0`).
Cards: `5–6px 5–6px 0 var(--ink)` (hover: `9–10px 9–10px 0`).
Hero accents: `8–12px 8–12px 0 var(--ink)`.

### Borders

Almost everything has a `2–2.5px solid var(--ink)` border. Dashed dividers use `1.5–2.5px dashed var(--ink)`.

### Halftone pattern

Reused throughout for texture. Declared once and applied via `--halftone`:
```css
--halftone: radial-gradient(rgba(17,17,24,.28) 1px, transparent 1.4px) 0 0 / 8px 8px;
```

### Image placeholders

Striped 45° diagonal pattern over a tinted ground, with a centered pill label:
```css
.ph {
  background:
    repeating-linear-gradient(45deg,
      rgba(17,17,24,.08) 0 8px,
      rgba(17,17,24,.02) 8px 16px),
    var(--bg-2);
  border: 2px solid var(--ink);
  border-radius: 10px;
  /* ::after = dashed inner outline */
  /* span = pill-shaped label inside */
}
```
Every placeholder includes a `<span>` describing what should fill it (e.g. "Tournament floor photo", "Cosplay winner '25"). Preserve these as alt text / aria-label when swapping in real images.

---

## Tweaks panel

The design ships with a developer-facing **Tweaks panel** for switching theme/font/density/cursor/hero-variant at runtime. **Do not ship this in production.** It exists purely so the design team can preview options. The panel UI, the host postMessage protocol, and the `tweaks-panel.jsx` file should all be removed during implementation.

The state it manages should become:
- **Theme + density + font pairing** → exposed through your site's settings system if you want users to choose, OR pinned to the default ("Critical Hit" / Bowlby / regular) and the others removed
- **Hero variant** → pick one of the three (recommend `spread`, the default) and drop the other two unless A/B testing is wanted
- **Cursor effect** → drop entirely

The intended production default is:
- Theme: Critical Hit
- Fonts: Bowlby
- Density: regular
- Hero: spread

---

## Screens / Views

### 1. Home (`index.html`)

**Purpose**: Marketing landing — introduce WGA, hype HuskyX, drive joins.

**Sections in order**:
1. `<Nav>` (sticky, navy `#1A1A2E`)
2. `<Hero variant="spread">` — Manga-panel grid:
   - Left: huge 3-line display ("PRESS / START / WITH WGA.") — outlined middle line, pink last line
   - Right: stacked striped placeholders (tournament photo, cosplay shot, stream B-roll), tilted ±2°
   - "Next event" panel in ink with HuskyX date + tickets CTA
   - 3-row stat panel (Members 412 / Events 64 / Discord 2.1k)
   - Yellow spiky star sticker reading "NEW! / SEASON 12"
   - Other hero variants (`broadcast`, `poster`) are alternate compositions in `home-hero.jsx` — see file
3. **EventsSection** (`#events`)
   - 2×2 grid of event cards: Pokeswap, Tournaments, Guest Speakers, Streams
   - Each tilted ±1°, with a colored circular bleed in the top-right corner, sticker tag, kana, description, footer with time + "Learn more →"
   - Card sticker color: yellow / pink / blue / mint
4. **HuskyxTeaser** — Full-bleed dark section (ink background with subtle yellow halftone dots)
   - Massive "HUSKY**X**" headline (yellow X)
   - Stats: 3 / 40+ / 1.2k
   - Two CTAs: "See the schedule →" (pink) and "Cosplay signup" (ghost)
   - Right side: two tilted striped placeholders + yellow circular date badge ("第12回 / MAY 30 / 2026 · SEA")
5. **SponsorsSection** (`#sponsors`)
   - 5-column grid, Platinum tiles span 2 cols and use ink/cream inverse styling
   - Each tile: tier label, brand name in display, square logo placeholder
   - Centered CTA panel below with halftone background
6. **ContactSection** (`#contact`)
   - "SAY HEY." headline + intro
   - 2×2 grid of contact rows: Email / Twitch / Discord / IRL — each clickable, with a colored sticker, big display address, mono subtitle, and a `→` arrow that slides right on hover
7. **JoinCTA** — Big "GET IN / THE GAME." with intro and three buttons (Sponsor / RSO Hosts / Production)
8. `<Footer>` (ink background, 4 columns)

**Interactions**:
- All cards lift on hover (`translate(-3px,-3px)` + thicker shadow)
- Yellow circular sticker on home hero gently wiggles via `@keyframes wiggle`

### 2. HuskyX (`huskyx.html`)

**Purpose**: Sell tickets for the flagship one-day con, explain what's inside, collect cosplay signups + post-event feedback.

**Sections**:
1. **HxHero** — 60/40 split. Left: "HUSKY**X** 2026" with stroked "2026" sub-line, 3-cell meta grid (DATE / HOURS / VENUE), two CTAs. Right: large pink→blue gradient "poster" tile, tilted 2°, with an "VOL / 012" ink stamp top-left.
2. **HxStats** — Dark ink strip, 5 inline stat columns separated by vertical hairlines, big yellow numbers
3. **HxArenas** — 2×2 grid of arena cards (Tournaments, Artist Alley, Cosplay Contest, Guest Panels). Each card has a huge stroked numeral (01–04), kana, name, description, bulleted list, photo placeholder, and a colored circular bleed in the corner.
4. **HxSchedule** (`#schedule`) — Single panel with 16 rows. Each row: 100px time column, colored dot, title + room, sticker tag. Hover row → cream background flash.
5. **HxTickets** (`#tickets`) — 3-column ticket grid (Day Pass $12 / Player Pass $17 / Triple Threat $27). Middle card is "featured" — inverts to ink-on-cream and scales 1.04. Each card: sticker tag, name, price (stroked numerals), bullet list, button.
6. **HxSignupSection** (`#signup`, `#feedback`) — 60/40 split on a halftone-cream background:
   - **Cosplay Signup** (left, larger): 3-step form. Step 1 = Name/Email/Handle. Step 2 = Category (4-button grid: Crafted / Performance / Group / Best in Show) + Character + Series + Bio. Step 3 = Confirm summary + agree checkbox + submit. Step pips animate.
   - **Feedback** (right): Rating stars (1–5, yellow), two textareas (best/improve), 4-segment "will you attend Vol. 013?" picker, submit. Success state shows "THANKS / FOR THE GG."
7. Footer

### 3. Team (`team.html`)

**Sections**:
1. **TeamHero** — 60/40. Left: "THE CREW BEHIND WGA." headline + apply CTA. Right: large yellow striped placeholder (group photo) + black "SEASON 12 / 2026" stamp.
2. **TeamRoster** (`#roster`) — 14-card grid (4 cols), one per role. Each card: 200px photo placeholder with colored ground + numbered badge, role label, member name (`[Member Name]` placeholder), 1-sentence role description.
3. **TeamAlumni** — Single panel with a season `<select>` dropdown (2024–25 down to 2020–21). Selecting a year swaps the body: left = group photo placeholder labeled "{year} team photo" + year + volume sticker + 1-line note; right = numbered list of that season's leaders with `[Alum Name]` placeholders.
4. **TeamValues** — 4-column grid of value cards (01 Players first / 02 Show your work / 03 Run it back / 04 Everyone's welcome). Stroked accent numeral.
5. **TeamJoinSection** (`#join`) — Dark ink section, 40/60 split. Left: "WE'RE HIRING." + 4 perk rows (FREE / SKILL / CONN / FUND). Right: application form with name, UW email, major, year dropdown, role grid (9 chips), why textarea, time-commitment range slider with live value display.
6. Footer

### 4. Gallery (`gallery.html`)

**Themed HuskyX archive.** Year pills swap the background gradient + photo grid styling.

**Themes** (one per volume):
| Year | Volume | Theme name | Gradient |
|---|---|---|---|
| 2025 | 011 | NEON TOKYO | `linear-gradient(135deg, #FF1F8B 0%, #6B1FFF 100%)`, accent `#FFD23F` |
| 2024 | 010 | PIXEL REIGN | `linear-gradient(135deg, #FFD23F, #FF5A3C)`, accent `#2E5BFF` |
| 2023 | 009 | ARCADE SPIRIT | `linear-gradient(135deg, #00C896, #2E5BFF)`, accent `#FF3D7F` |
| 2022 | 008 | FIRST RUNBACK | `linear-gradient(135deg, #1A1A2E, #6C2BD9)`, accent `#FFD23F` |

**Layout**:
1. GalleryHero — eyebrow + "THE VAULT." + intro
2. Pill bar — "Pick a HuskyX" label + 4 year pills (active = blue with shadow)
3. The board — rounded 20px container, 3px ink border, 10px ink shadow, fills with theme gradient. Subtle white-dot pattern overlay. Inside:
   - Header row: kana + "Vol. XXX · YYYY" + huge theme name in the theme accent color + 1-line note + photo count card
   - Photo masonry grid below, photos use semi-transparent diagonal stripe with theme-tinted border
4. "Submit photos" CTA panel
5. Footer

### 5. Join WGA (`membership.html`)

**Three pathways.** Tab picker at top, form below swaps.

1. **JoinHero** — 60/40. Left: "JOIN / WITH / WGA." with three buttons. Right: stacked 3-card stack rotated and offset (Sponsor / Co-host / Build) with kana labels.
2. **PathwayPicker** — 3-tab grid. Each tab: kana + display label + "Pick this →" footer. Active tab tilts forward and fills with its accent color.
3. **Path form** — 60/40 split:
   - **Sponsor**: company, tier dropdown (Platinum/Gold/Silver/Community/Custom), contact, email, goal multi-select (8 chips), budget range slider $500–25k+, notes textarea. Aside: 5-row perk list + "$18,400 raised in 2025" stat card.
   - **RSO**: org name, event type dropdown, point of contact, UW email, target date, expected attendees slider 10–500, what they need textarea. Aside: 4-step process (Scope / Build / Promote / Run+Recap) + "23 RSOs co-hosted" stat.
   - **Production team**: name, UW email, year, hours/week slider, role chip grid (9 options), why textarea. Aside: 5 perks + link to current team.
4. Footer

### 6. Calendar (`calendar.html`)

1. **CalendarHero** — 60/40. Left: "THE YEAR / IN EVENTS." + iCal subscribe button. Right: tilted ink "next up" card with halftone background, big "MAY 30" date, stickers ("13 DAYS" / "SOLD 60%").
2. **MonthView** — Month nav header (←prev / current month / next→). 7-column grid. Header row in ink. Day cells: white background, off-month cells diagonally striped, big-event cells (HuskyX on May 30) filled with pink. Each event chip is a colored pill. Legend below.
3. **Upcoming** (`#upcoming`) — Vertical list of 6 event cards. Each: date column (huge accent-colored day + month + dow), divider, body (tag sticker + title + room), action (RSVP button). HuskyX row inverts to ink/cream.
4. Footer

---

## Reusable Components

These appear on multiple pages — extract into shared components in the target codebase:

### `<Nav active="...">`
Sticky top nav. Navy `#1A1A2E`. Logo on left ("W" mark + WGA wordmark, mark uses accent pink and rotates -6°). 6 link slots. Pink "Join WGA →" button on right. Active link gets yellow underline.

### `<Footer>`
4-column dark footer with `"Press Start."` huge display in column 1, then Explore / Get Involved / Contact lists. Bottom legal strip.

### `<Marquee items={[…]}>`
**Not used in current design.** Was in earlier versions. Available in `shared.jsx` if needed — auto-scrolling ticker on dark band.

### Buttons (`.btn`)
- `.btn` — default: ink filled, cream text, 4px solid drop shadow, lifts on hover
- `.btn.alt` — pink filled
- `.btn.ghost` — transparent, inverts to ink-on-cream on hover

### Stickers (`.sticker`)
Mono-uppercase pill chips with a 2px ink border. Variants: default (yellow), `.pink`, `.blue`, `.ink`, `.mint`.

### Panels (`.panel`)
Cards: `--bg-2` fill, 2.5px ink border, `--r` radius, `--pad` padding. `.panel.shadow` adds drop shadow. `.panel.tilt-l` / `.panel.tilt-r` rotate ±1°.

### Form controls
- `.input`, `.textarea`, `.select` — full-width, 2px ink border, 10px radius, cream fill, focus state = `4px 4px 0 var(--accent)` shadow
- `.cat-btn` — chip-style button used in role/category pickers. Active = filled with accent + offset shadow
- `.filter-btn` — pill-style filter. Two variants: default (ink active), `.yr` (blue active)
- Custom range slider: `.time-slider` — thin ink track, 22px accent thumb with 2.5px ink border

### Form patterns
- **Multi-step**: numbered circles at top (cosplay signup) — current step highlights in accent, completed steps fade
- **Confirm step**: dashed-border summary block listing all entered values before submit
- **Success state**: replace form contents with sticker + display "thanks" message + reset/next-action button
- **Range slider with live value**: displays current value inline in label, accent-colored

---

## Interactions & Behavior

### Hover states
- Cards / panels with `box-shadow: 5–6px 5–6px 0 var(--ink)` → on hover, `translate(-3px,-3px)` + `box-shadow: 9–10px 9–10px 0`. Transition `.2s ease`.
- Buttons: same pattern, smaller offsets
- Nav links: color → `var(--accent-3)`
- Contact rows: arrow on right translates +4px

### Animations
- `@keyframes wiggle` — applied to the join CTA circle; 6s ease-in-out infinite, rotates between -4° and +4°
- `@keyframes scroll` — used by `Marquee` if reintroduced; 32s linear infinite translateX(-50%)
- Cosplay form step transitions: instant swap (no animation needed)
- Theme/density/font switching: pure CSS variable changes, no transition needed (could add `transition: background-color .2s` to body if desired)

### Multi-step forms
Cosplay signup tracks `step` (1, 2, 3) in local state. Each step has its own validation gate — "Next →" disabled until required fields are filled. Step 3 has an additional "agree" checkbox required before submit.

### Form submission
All forms in the design simulate submission with `preventDefault()` → `setDone(true)`. **Wire these to real endpoints in production.** Recommended endpoints:
- Contact form → general inbox
- Cosplay signup → `/api/cosplay/signup`
- Feedback → `/api/feedback`
- Sponsor inquiry → `/api/sponsor/inquiry` (also triggers a sponsor-deck email)
- RSO partnership → `/api/partnerships/rso`
- Production team app → `/api/team/apply`
- Calendar RSVPs → calendar system (Google Calendar / iCal subscription)

### Responsive
- 1100px breakpoint: collapses 2-col layouts to 1, sponsor grid 5→3
- 880px: hides desktop nav-links (need a mobile menu — not designed; recommend a hamburger drawer or sticky bottom nav)
- 720px: events grid → 1 col, sponsor grid → 2 col, calendar cells shrink

**Note: a mobile nav menu is NOT designed.** Add one during implementation. Suggested: a slide-in drawer triggered by a hamburger icon, with the same link list, footer-style typography.

---

## State Management

Per-page state needs are minimal — all form state can be local component state. The only **cross-page** state is:

- **Theme + font + density preference** (if you want to expose to users) → store in `localStorage` and read on mount
- **Calendar month being viewed** → URL query param `?month=YYYY-MM` recommended

Backend / CMS surface area:

- **Events** (home events grid, calendar) — name, kana, tag, schedule, description, recurrence
- **Sponsors** — name, tier, logo
- **Team roster** — current 14 roles with name, photo, description
- **Past seasons** (team page) — array of `{ year, tag, note, leaders[] }`
- **HuskyX volume** — current volume number, date, theme name, kana, schedule blocks, ticket tiers, guest panel info
- **Gallery** (per HuskyX volume) — theme metadata (gradient, accent, ink), array of photos
- **Calendar entries** — date, title, room, type, color

All hardcoded data in the design files (events array in `home-sections.jsx`, schedule in `huskyx-sections.jsx`, roster in `team.jsx`, etc.) is a placeholder schema — replace with CMS-driven content.

---

## Assets

The design uses **no images**. Every photo, logo, and visual is a striped `<div class="ph">` placeholder with a `<span>` label inside.

Anywhere you see one, the client will provide a real image. Aspect ratios and sizes are dictated by the `.ph` slot's CSS dimensions — preserve them when swapping. Use the placeholder label as the `alt` attribute starter.

Fonts are all from Google Fonts. Production should self-host or preload them for performance.

Decorative kana glyphs (e.g. `ゲームクラブ`, `第12回`, `スポンサー`) are **graphic ornament**, not content. They're set in Noto Sans JP at low opacity. If your CMS does not support Japanese characters, hardcode them as constants — do not require editors to type them.

---

## Files in this bundle

All under `design-files/`:

### Screenshots

Visual reference for each page, under `screenshots/`:

| # | File | Shows |
|---|---|---|
| 01 | `01-home-hero.png` | Home — Manga-spread hero with stat sidebar |
| 02 | `02-home-events.png` | Home — Events grid (Pokeswap / Tournaments / Guest Speakers / Streams) |
| 03 | `03-home-huskyx-teaser.png` | Home — Dark HuskyX teaser section |
| 04 | `04-home-sponsors-contact.png` | Home — Sponsor grid + Contact section |
| 05 | `05-huskyx-hero.png` | HuskyX — Hero with poster + meta grid + stats strip |
| 06 | `06-huskyx-arenas.png` | HuskyX — 4-arena breakdown (Tournaments / Alley / Cosplay / Panels) |
| 07 | `07-huskyx-schedule.png` | HuskyX — 16-block run-of-show schedule |
| 08 | `08-huskyx-tickets-signup.png` | HuskyX — Ticket tiers + 3-step cosplay signup |
| 09 | `09-team-hero-roster.png` | Team — Hero + 14-role roster grid |
| 10 | `10-team-alumni.png` | Team — Past Seasons panel with year dropdown |
| 11 | `11-team-join.png` | Team — Dark "We're hiring" application |
| 12 | `12-gallery-2025-neon-tokyo.png` | Gallery — 2025 board with NEON TOKYO theme |
| 13 | `13-gallery-2023-arcade.png` | Gallery — 2023 board with ARCADE SPIRIT theme (theme swap demo) |
| 14 | `14-join-hero-paths.png` | Join — Hero + 3-pathway picker (Sponsor / RSO / Production) |
| 15 | `15-join-sponsor-form.png` | Join — Sponsor inquiry form with aside |
| 16 | `16-calendar-month.png` | Calendar — Hero + month view (May 2026 with HuskyX as the big day) |
| 17 | `17-calendar-upcoming.png` | Calendar — Upcoming events list |

### Source files

**HTML entry points** — one per page:
- `index.html`, `huskyx.html`, `team.html`, `gallery.html`, `membership.html`, `calendar.html`

**Shared**:
- `styles.css` — global tokens, nav, footer, button/sticker/panel primitives, form controls, theme overrides
- `shared.jsx` — `<Nav>`, `<Footer>`, `<Marquee>`, `<CursorDot>`, `useTheme()`, default tweak values, `<WGATweaks>` panel definition
- `tweaks-panel.jsx` — Tweaks shell. **Remove in production.**

**Per-page CSS**:
- `home.css` — hero variants, events, huskyx teaser, sponsors, join CTA, contact
- `huskyx.css` — hero, stats strip, schedule, arenas, tickets, signup forms
- `team.css` — hero, roster, alumni, values, join section
- `extras.css` — gallery (themed boards + pills), membership pathways, calendar grid + upcoming list

**Per-page JSX** (sections to recreate as components):
- `home-hero.jsx` — `HeroSpread` (default), `HeroBroadcast`, `HeroPoster` variants
- `home-sections.jsx` — `EventsSection`, `HuskyxTeaser`, `SponsorsSection`, `ContactSection`, `JoinCTA`
- `huskyx-sections.jsx` — `HxHero`, `HxStats`, `HxSchedule`, `HxArenas`
- `huskyx-forms.jsx` — `HxTickets`, `HxSignupSection` (includes `CosplaySignup` + `FeedbackForm`)
- `team.jsx` — `TeamHero`, `TeamRoster`, `TeamAlumni`, `TeamValues`, `TeamJoinSection`
- `gallery.jsx` — `GalleryHero`, `Gallery` (themed-board cycler)
- `membership.jsx` — `JoinHero`, `JoinPathways` (Sponsor / RSO / Production sub-forms)
- `calendar.jsx` — `CalendarHero`, `MonthView`, `Upcoming`

---

## Implementation order (recommended)

1. **Tokens + primitives first** — port colors, type, spacing, the `.btn` / `.sticker` / `.panel` / `.ph` / `.input` classes. Verify a button looks right before anything else.
2. **Nav + Footer** — used on every page; lock these down.
3. **Home page** — most components reused elsewhere live here.
4. **HuskyX page** — the highest-value page; forms drive real signups.
5. **Team, Membership, Calendar, Gallery** in any order.

Treat each page's sections as independent components from day one. Don't recreate the global `Object.assign(window, ...)` pattern — use proper imports.
