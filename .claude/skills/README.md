# `.claude/` — Skills & agents for Asso360

This folder contains a **Claude Code skill** and a **specialist agent** that enforce the Asso360 design system on any UI work in your repo.

## Installation in your project

Copy the contents of this folder into your project's `.claude/` directory:

```bash
# From your project root
mkdir -p .claude/skills .claude/agents
cp -R path/to/handoff/claude/skills/asso360-ui-system .claude/skills/
cp path/to/handoff/claude/agents/asso360-ui-specialist.md .claude/agents/
```

Also copy the entire `design_handoff_asso360/` folder into your repo (e.g. `docs/design/asso360/`) so the skill and agent can read it. Update the paths in the skill if you move it elsewhere.

## What's inside

### `skills/asso360-ui-system/SKILL.md`

The **default UI guardrail**. Claude Code auto-invokes it whenever it touches:
- Screens, pages, routes, components
- Styling (Tailwind, CSS, theme files)
- UI copy / microcopy
- PRs that look design-related

It enforces tokens, primitives, screen patterns, copy tone, and a self-check list before merging.

### `agents/asso360-ui-specialist.md`

A **subagent** you can invoke explicitly when the skill isn't enough:

```
/agent asso360-ui-specialist "Recreate the Kanban screen in React Native"
/agent asso360-ui-specialist "Audit components/EventCard.tsx against the spec"
/agent asso360-ui-specialist "Design a notifications screen — Asso360 doesn't have one yet"
```

The specialist reads the JSX references in `design_handoff_asso360/source/` and produces pixel-faithful implementations in your stack.

## When to use which

| Situation | Tool |
|---|---|
| Quick style fix, single component tweak | Skill (auto-invoked) |
| New screen the handoff covers | Specialist agent |
| New screen the handoff doesn't cover | Specialist agent (with explicit user approval for the new pattern) |
| Audit / review existing UI | Specialist agent |
| PR review | Skill |
| Theme / tokens initial setup | Specialist agent |
