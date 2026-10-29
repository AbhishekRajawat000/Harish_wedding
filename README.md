# Harish & Tanvi Wedding Website

Standard Next.js App Router + React + TypeScript with raw CSS Modules.
No Tailwind, UI component libraries, Vinext, or Sites runtime is required.

## Run with npm

Use Node.js 22 or newer. Open a terminal in this folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

Deploy this folder as a Next.js project on Vercel or another Next.js host.

## Edit the wedding

- `app/wedding-config.ts`: family, dates, events, gallery and RSVP endpoint.
- `app/page.tsx`: page content and layout.
- `components/wedding/Wedding.module.css`: styling, animation and responsive layout.
- `components/wedding/Interactive.tsx`: countdown, 3D tilt, lightbox, card, RSVP, map and sound.
- `public/photos`: photographs and wedding card.

Bride portrait and personal story remain placeholders. RSVP is preview-only until an endpoint is configured. Preview responses are not sent. Sound is off by default.
