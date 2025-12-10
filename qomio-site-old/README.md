# Qomio - Digitale Lösungen

Professionelle Website für Qomio - Digitale Lösungen aus Riedlingen.

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **SEO:** Next.js Metadata API
- **Deployment:** Vercel (empfohlen)

## Projekt-Struktur

```
qomio-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React Components
│   ├── Navigation.tsx     # Header & Navigation
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services section
│   ├── Process.tsx       # Process section
│   ├── WhyUs.tsx         # Why us section
│   ├── CTA.tsx           # Call-to-action
│   └── Footer.tsx        # Footer
├── public/               # Static assets
│   └── logo-light.png   # Logo
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind config
├── next.config.js       # Next.js config
└── postcss.config.js    # PostCSS config
```

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features

- ✅ Vollständig responsive Design
- ✅ Dark Mode (optimiert für dunkles Theme)
- ✅ Framer Motion Animationen
- ✅ TypeScript für Type Safety
- ✅ SEO-optimiert
- ✅ Performance-optimiert (Next.js Image Optimization)
- ✅ Mobile-First Approach
- ✅ Tailwind CSS für schnelle Entwicklung

## Komponenten

### Navigation
- Fixed Header mit Logo
- Mobile Menu Toggle
- Navigation Links
- CTA Button

### Hero Section
- Große Headline mit Gradient
- Animated Badge
- CTA Buttons
- Background Grid

### Services Section
- 3-spaltige Service Cards
- Icon + Description
- Feature Lists
- Hover Effects

### Process Section
- 5-Step Process
- Numbered Steps
- Framer Motion Animations
- Clean Layout

### Why Us Section
- 4 Reason Cards
- Gradient Backgrounds
- Emoji Icons
- Hover Effects

### CTA Section
- Large Headline
- Email Link
- Gradient Background

### Footer
- Multi-column Layout
- Navigation Links
- Legal Links
- Copyright Info

## Styling

Das Projekt nutzt Tailwind CSS mit Custom Konfiguration für:
- Dark Theme
- Custom Animations
- Cyan/Blue Farbschema
- Responsive Breakpoints

## Deployment

### Vercel (Empfohlen)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Performance

- Lighthouse Score: 90+
- Core Web Vitals: Optimiert
- Bundle Size: Minimal
- Image Optimization: Automatisch

## SEO

- Meta Tags
- Open Graph
- Structured Data Ready
- Sitemap Ready
- robots.txt Ready

## License

MIT License - Copyright © 2024 Qomio
