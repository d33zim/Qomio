# Qomio Site 2 - Minimalistisches Design

Eine moderne Website für Qomio mit minimalistischem Kyriakos-Michael-Style.

## Features

- ✨ Minimalistisches Design (Grau/Weiß mit Cyan-Akzent)
- 🎨 GSAP Animationen & Lenis Smooth Scrolling
- 🖱️ Custom Cursor (Desktop)
- 🌊 Wispr-style Hero Glow
- 🎯 Canvas Partikel-Hintergrund
- 🧲 Magnetic Buttons
- 📱 Voll responsive
- ⚡ Next.js 14 + TypeScript
- 🎭 Tailwind CSS

## Inhalte

Alle Texte, Leistungen und Informationen sind von `qomio-site` übernommen:
- Webseiten, Apps & Automatisierungslösungen
- 3 Hauptleistungen (Webseiten, Apps, Automatisierung)
- 5-Schritte Prozess
- 4 Gründe für Qomio
- Kontaktsektion

## Design-Inspiration

Das Design basiert auf dem Portfolio von Kyriakos Michael mit:
- Minimalistischer Farbpalette (Grau #F5F5F5, Schwarz #111111, Cyan #06b6d4)
- GSAP Timeline-Animationen
- Blur-to-Focus Hero-Reveal
- Marquee Skills Band
- Canvas Partikel-Netzwerk
- Smooth Scrolling mit Lenis

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Die Seite läuft dann auf [http://localhost:3001](http://localhost:3001)

## Build

```bash
npm run build
npm start
```

## Struktur

```
qomio-site-2/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CanvasBackground.tsx
│   ├── Contact.tsx
│   ├── Cursor.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Loader.tsx
│   ├── Marquee.tsx
│   ├── Navigation.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   ├── SmoothScroll.tsx
│   ├── WhatsAppButton.tsx
│   └── WhyUs.tsx
└── public/
    └── fonts/
```

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- GSAP (Animationen)
- Lenis (Smooth Scrolling)

## WhatsApp Button Konfiguration

Der WhatsApp Button erscheint automatisch rechts unten, sobald der Benutzer 300px nach unten scrollt.

### Telefonnummer ändern

Öffne `components/WhatsAppButton.tsx` und ändere die Nummer in Zeile 24:

```tsx
const phoneNumber = '491234567890' // Beispiel: Deutsches Format
```

**Format:**
- Ohne das `+` Zeichen
- Mit Ländercode
- Beispiele:
  - Deutschland: `491234567890` (49 + Handynummer ohne führende 0)
  - Österreich: `436641234567` (43 + Handynummer ohne führende 0)
  - Schweiz: `41791234567` (41 + Handynummer ohne führende 0)

### Nachricht anpassen

Die Standard-Nachricht kann in Zeile 25 geändert werden:

```tsx
const message = encodeURIComponent('Hallo! Ich interessiere mich für Ihre Dienstleistungen.')
```
