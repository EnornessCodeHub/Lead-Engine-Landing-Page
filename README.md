# Lead Engine — Landing Page

Marketing landing page for **Lead Engine**, an AI lead management platform that captures, qualifies, nurtures, and converts leads across WhatsApp, Messenger, Instagram, and more.

Built with **React 19** + **Vite 8**.

## Features

- Hero + CTA flow for booking demos
- “How it works” process steps
- AI sales assistant section with channel orbit visual
- Integrations showcase (WhatsApp, Messenger, Instagram, Meta Ads, Google Ads, Zapier, website)
- Industry use cases
- FAQ accordion
- Responsive layout for desktop and mobile

## Tech stack

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Bundler | Vite 8 |
| Icons | lucide-react |
| Lint | Oxlint |
| Styles | CSS modules per component + design tokens |

## Project structure

```
├── public/                 # Static assets (favicon, section images)
├── reference/              # Design reference images (not used at runtime)
├── src/
│   ├── assets/             # Logos, icons, industry photos
│   ├── components/         # Page sections (Navbar → Footer)
│   ├── hooks/              # e.g. useScrollReveal
│   ├── styles/             # Design tokens (tokens.css)
│   ├── utils/              # Helpers (scrollToBooking)
│   ├── App.jsx             # Section composition
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry
├── index.html
├── package.json
└── vite.config.js
```

### Page sections (`src/components/`)

1. `Navbar` — site navigation  
2. `Hero` — main value prop + CTA  
3. `ProcessSteps` — capture → convert flow  
4. `AISection` — AI assistant + how it works  
5. `Integrations` — channel logos  
6. `Industries` — vertical use cases  
7. `FAQ` — common questions  
8. `CTABanner` — final conversion block  
9. `Footer` — links + social  

## Getting started

### Prerequisites

- Node.js 18+ (recommended: current LTS)
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens the Vite dev server (usually `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build production assets to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Notes

- Design tokens live in `src/styles/tokens.css`.
- Demo CTA scroll helper: `src/utils/scrollToBooking.js`.
- The `reference/` folder holds design comps for developers; it is not imported by the app.

## License

Private project — not licensed for public reuse unless stated otherwise by the owner.
