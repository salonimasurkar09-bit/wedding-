# Priya & Arjun — Wedding Invitation

An immersive, animated Indian-style digital wedding invitation built with TanStack Start and deployed on Netlify.

## Features

- **Door Opening Animation** — Two ornate doors swing open on page load to reveal the invitation
- **Falling Flower Petals** — Colorful petals cascade continuously in the background
- **Photo Reveal** — Couple's photo fades in with a cinematic blur-to-sharp animation
- **Invitation Message** — Poetic bilingual wedding invitation text
- **Scratch-Off Date Reveal** — Drag/touch to scratch a sealed panel and reveal the wedding date (10th May 2026)
- **Love Message** — A heartfelt message with heartbeat animation
- **Family Invitation** — Bride's and groom's family details with ornate cards

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + inline CSS-in-JS |
| Fonts | Google Fonts — Yeseva One, Libre Baskerville, Cinzel Decorative |
| Language | TypeScript 5.7 |
| Deployment | Netlify |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000` (or port 8888 via Netlify CLI).

## Customisation

- **Names**: Replace `Priya` and `Arjun` in `src/routes/index.tsx`
- **Photo**: Replace `public/placeholder.png` with the couple's actual photo
- **Date/Venue**: Update the date and venue strings in the same file
- **Family Names**: Update `Sharma Parivar` / `Verma Parivar` sections with actual family details
