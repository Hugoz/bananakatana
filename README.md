# Banana Blade: Path to Paradise

Original, self-contained Canvas platformer with 100 campaign levels, four biomes, ten boss milestones, persistent abilities, three Golden Bananas per level, a Banana Heaven finale, settings, accessibility and developer tools.

## Run

Node.js 22.13+ is required.

```powershell
pnpm install
pnpm dev
```

Open the displayed local URL. Production check: `pnpm build`.

## Controls

- A/D or arrows: move
- Space/W/Up: jump
- J/Z: katana
- Shift: dash after unlock
- Escape: pause

## Editing and structure

`app/page.tsx` contains data, save handling, menus, the deterministic level generator, player/enemy/boss logic and Canvas renderer. `app/globals.css` holds responsive art direction. `app/layout.tsx` holds metadata. Tune acceleration, speed, jump, gravity, health, boss health, enemy count and platform sections inside `Game`; campaign names live in `B`, `bosses`, and `abilities`. Save data is versioned and stored as `banana-blade-save`.

World Map → **DEV OFF** reveals unlock-all and level-100 shortcuts. Normal progression remains locked when developer mode is off.
