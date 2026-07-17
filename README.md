# APS&C GAK Campus — Website (V2 · Teal & Copper)

Marketing + information website for **Army Public School & College, GAK Campus, Kharian Cantt**.
This is **Version 2** — a calm, modern design in teal + copper with a 3-image hero slideshow
and multi-level dropdown navigation. Kept as a **separate project** from V1.

## Tech
- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind (utility layer) + a custom design system in `app/globals.css`
- `next/font` — Manrope (UI) + Noto Naskh Arabic (Urdu motto)

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build
```bash
npm run build && npm start
```

## Hero images
The hero rotates through `public/hero1.jpg`, `public/hero2.jpg`, `public/hero3.jpg`.
Replace these three files with real GAK campus photos (same names) — nothing else to change.
Order/speed live in `components/Hero.tsx`.

## Structure
- `app/` — route per section (about, messages, organogram, admissions, sections/[slug], etc.)
- `components/` — Header (multi-level nav), Hero (slideshow), Footer, Tabs, Accordion, Chatbot, Toast …
- `lib/data.ts` — navigation tree + section/FAQ/chatbot content
- `app/globals.css` — full design system (teal/copper tokens)

## Deploy (Vercel)
Push to GitHub, import the repo in Vercel, framework auto-detected (Next.js), no env vars needed.

> Built for Cyber Advance Solutions. V1 and V2 are independent repositories.
