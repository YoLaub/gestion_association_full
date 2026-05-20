---
name: asso360-ui-system
description: Enforce the Asso360 design system on any UI work — tokens, components, screens, copy tone. Use whenever creating or modifying UI for the Asso360 app (mobile React Native or web admin React/Next), whether starting fresh or evolving an existing screen. Reject inventions that drift from the system.
---

# Asso360 UI System — enforcement skill

You are working on the **Asso360** app: an organisation tool for sports associations (agenda, kanban d'événement, profils & rôles, boutique liée à l'event). The visual language is **dark-mode-first, mobile-first**, with a desktop console for the bureau.

Every UI change — new screen, modified component, copy revision — **must pass through this skill** before being shipped. If you skip it, you will drift.

## Activation triggers

Invoke this skill when:
- Creating a new screen, route, page, or component
- Modifying any styling (colors, spacing, typography, radius, shadows)
- Adding copy strings or microcopy
- Reviewing a PR that touches `app/`, `screens/`, `components/`, `styles/`, `theme/`, `tailwind.config.*`
- A teammate asks "is this on-brand?"

## Step 1 — Load the canonical reference

Before writing or reviewing code, **read** these files from the handoff (or the equivalents in the project):

1. `design_handoff_asso360/README.md` — full design spec
2. `design_handoff_asso360/source/styles.css` — token definitions
3. `design_handoff_asso360/source/chrome.jsx` — shared primitives (Icon, MobileFrame, StatusBar, TopBar, BottomNav, Chip, Avatar, Logo, SPORT_COLORS)
4. `design_handoff_asso360/source/screen-*.jsx` — the relevant screen(s) you're recreating

Open `preview-dark-current.html` in a browser if you need to see the live target.

## Step 2 — Verify the tokens are in place

The project's theme **must** expose these tokens (CSS variables, Tailwind theme, NativeWind config, or design-tokens module). If any are missing, **stop and add them** before touching components.

### Color tokens (dark, default)

| Token | Value |
|---|---|
| `--bg-0` | `#0a0b0e` |
| `--bg-1` | `#14161b` |
| `--bg-2` | `#1b1e25` |
| `--bg-3` | `#232631` |
| `--fg-0` | `#f3f4f7` |
| `--fg-1` | `#c9ccd4` |
| `--fg-2` | `#888c98` |
| `--fg-3` | `#5a5e6b` |
| `--line` | `rgba(255,255,255,0.07)` |
| `--line-strong` | `rgba(255,255,255,0.14)` |
| `--accent` | `#c8ff00` |
| `--accent-ink` | `#0a0b0e` |
| `--accent-soft` | `rgba(200,255,0,0.16)` |

### Color tokens (light)

| Token | Value |
|---|---|
| `--bg-0` | `#fafaf7` |
| `--bg-1` | `#ffffff` |
| `--bg-2` | `#f3f3ef` |
| `--bg-3` | `#e6e6df` |
| `--fg-0` | `#0f1115` |
| `--fg-1` | `#3a3d44` |
| `--fg-2` | `#6a6e78` |
| `--fg-3` | `#9499a3` |

### Semantic colors (constants, never tweaked)

| Role | Hex |
|---|---|
| Danger | `#ff5470` |
| Warning | `#ffb547` |
| OK | `#45e6a8` |
| Info | `#6cb6ff` |

### Sport discipline colors (constants)

```ts
export const SPORT_COLORS = {
  boxe:      "#ff5470",
  cardio:    "#c8a4ff",
  yoga:      "#45e6a8",
  course:    "#6cb6ff",
  muscu:     "#ffb547",
  judo:      "#ff9b6c",
  natation:  "#5ad6ff",
  reunion:   "#aeb1bb",
};
```

### Radii (radius scale=5)

| Token | Value |
|---|---|
| `--r-sm` | 2.5px |
| `--r-md` | 5px |
| `--r-lg` | 7px |
| `--r-xl` | 9px |
| `--r-pill` | 999px |

### Spacing scale

`4 / 8 / 12 / 16 / 20 / 28 px` — nothing else. If you reach for `15px` or `22px`, you are off-system.

### Typography

- **Sans / Display**: Geist (400/500/600/700/800)
- **Mono**: JetBrains Mono (timestamps, IDs, tabular numbers — never for prose)

Hierarchy (when `hype = bold`, the default):

| Style | Size | Weight | Letter-spacing | Usage |
|---|---|---|---|---|
| `h-display` | 34px | 700 | -0.025em | Screen title (mobile) |
| `h-section` | 22px | 700 | -0.01em | Section heading |
| `h-card` | 14px | 600 | 0 | Card / row title |
| `text-body` | 13px | 400 | 0 | Body copy |
| `text-meta` | 11px | 400 | 0 | Metadata, captions |
| `eyebrow` | 10–11px | 500/600 | 0.12em UPPERCASE | Mono, section labels |

## Step 3 — Use the primitive vocabulary

The handoff defines a small set of primitives. **Reuse them** rather than rolling new ones.

| Primitive | Purpose | Anti-pattern |
|---|---|---|
| `Card` | Surface container, `bg-1` + `line` border + `r-md` | Don't add gradient backgrounds to cards unless `accent-soft` |
| `Card --inset` | Lower-elevation surface inside a card, `bg-2` | Don't nest more than 2 levels |
| `Chip` | Small label, height 24px, `r-pill` | Don't use chips for primary actions |
| `Icon-btn` | Square 36×36 icon button, `bg-2` + `line` | Don't put text inside |
| `Btn` | Pill action, height 44px, `r-md` | Don't drop below 44px hit target on mobile |
| `Btn --accent` | Primary action, `accent` bg + `accent-ink` text | Only **one** primary per screen |
| `Btn --ghost` | Tertiary, transparent + `line-strong` border | Don't use for primary actions |
| `Avatar` | Round 36px (default), initials or image | Don't square avatars |
| `Eyebrow` | Mono uppercase label above a title | Don't use for body text |
| `BottomNav` | 5 items, 3rd = FAB accent | Never more than 5 items |

## Step 4 — Respect the screen patterns

Each screen follows a **fixed structure**. Do not invent new structures without explicit approval.

- **Status bar** (44px) → **Top bar** (48px, back / title / right action) → **Content** (16px gutters, scroll) → **Bottom nav** (sticky, 64px)
- **Hero zones** use `accent-soft` gradient or sport-discipline gradient — never random colors.
- **Lists**: card-grouped rows with chevron, divider between rows (`line`), 14px padding.
- **Empty states**: dashed border card, `fg-2` icon, single CTA.
- **Sticky CTAs**: fade-to-`bg-0` gradient above, then the action bar.

## Step 5 — Copy & tone

- **Language**: French (FR).
- **Tone**: clair, opérationnel, complice. Pas de marketing creux, pas d'emoji.
- **Eyebrows / labels**: UPPERCASE, court (1–3 mots), monospaced.
- **CTA buttons**: verbe à l'infinitif + objet ("Créer un événement", "Je m'inscris · 8€").
- **Timestamps**: monospaced, format relatif ("il y a 10 min", "J-3", "19:30 — 21:00").
- **Counters / IDs**: monospaced.
- **Avoid**: « simplement », « facilement », « révolutionnaire », tout vocabulaire start-up générique.

## Step 6 — Iconography

- Use **Lucide** icons (1:1 with the custom set in `chrome.jsx`).
- Always render at integer sizes: 11, 13, 14, 15, 16, 18 px on mobile; 14, 16 on desktop.
- Stroke width: 1.6 (default), 1.4 for tiny (11–13px), 1.8 for large (≥24px).
- Color: inherit (`currentColor`). Never apply gradients to icons.

## Step 7 — Self-check before shipping

Run through this list mentally (or ask the user) before marking a UI change done:

- [ ] All colors are from tokens — no inline hex except inside `SPORT_COLORS` lookup.
- [ ] All radii are `r-sm / r-md / r-lg / r-xl / r-pill` — no `borderRadius: 10` etc.
- [ ] All spacing is from the 4/8/12/16/20/28 scale — no `padding: 15` etc.
- [ ] Typography uses the defined hierarchy — no `font-size: 17` etc.
- [ ] Light mode tokens are wired (theme toggle works visually).
- [ ] Bottom nav present on mobile screens that aren't modals.
- [ ] One — and only one — `Btn --accent` per screen.
- [ ] Hit targets ≥44px on mobile.
- [ ] French copy, no emoji, no marketing fluff.
- [ ] Sport discipline colors used for any discipline-tagged element.

## When this skill isn't enough

If the work is **substantial enough to warrant pixel-level fidelity** — recreating a whole screen, designing a new screen the handoff doesn't cover, or auditing a finished screen against the spec — **hand off to the `asso360-ui-specialist` agent**. That subagent owns the design system, can read the JSX references in detail, and will produce a faithful implementation. Invoke it with:

```
/agent asso360-ui-specialist "Recreate the Kanban screen in React Native, matching screen-kanban.jsx pixel-for-pixel"
```

## Anti-patterns (block these on sight)

- Drop shadows on cards (only `--shadow-card` is allowed)
- Glass / backdrop-filter on non-overlay surfaces (only `BottomNav` uses it)
- Multiple primary buttons on one screen
- Emoji in UI copy
- `border-left: 4px solid accent` accent-bar containers (AI slop trope)
- Free-form gradients invented on the fly
- Rounded corners larger than `--r-xl`
- Inter, Roboto, system-ui as primary type (use Geist)
- Icon sets other than Lucide
- Mixing French and English in the same view
