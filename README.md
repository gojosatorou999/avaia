# Avaia

High-end, modern-organic NGO landing experience built with Next.js App Router.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger + @gsap/react
- @studio-freight/react-lenis
- split-type

## Installation
```bash
npm install
```

## Run Locally
```bash
npm run dev
```

## Validate
```bash
npm run lint
npm run build
```

## Project Structure
- `/home/runner/work/avaia/avaia/app` – App Router entry points and global styles
- `/home/runner/work/avaia/avaia/components/SmoothScroll.tsx` – Lenis smooth scroll provider
- `/home/runner/work/avaia/avaia/components/sections/Hero.tsx` – Hero with basic GSAP intro animation
- `/home/runner/work/avaia/avaia/components/sections/AboutMission.tsx` – Scroll-triggered character text reveal
- `/home/runner/work/avaia/avaia/components/sections/ImpactProjects.tsx` – Impact/projects grid section

## Notes
- Root layout wraps the app with smooth scrolling.
- About/Mission headline uses SplitType and GSAP ScrollTrigger for character-by-character reveal.
