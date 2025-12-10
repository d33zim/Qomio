# Setup-Anleitung für Qomio Website

## Voraussetzungen

- Node.js 18+
- npm oder yarn
- Git

## Schnell-Start

### 1. Dependencies installieren

```bash
npm install
```

### 2. Development Server starten

```bash
npm run dev
```

Die Website ist dann unter http://localhost:3000 erreichbar.

### 3. Environment Variablen (Optional)

Kopiere `.env.example` zu `.env.local`:

```bash
cp .env.example .env.local
```

## Entwicklung

### Project-Struktur verstehen

```
app/              → Pages & Layouts (App Router)
components/       → React Components
public/           → Static Assets (Bilder, Icons, etc.)
```

### Komponenten bearbeiten

Jede Sektion ist eine separate Komponente in `components/`:

- `Navigation.tsx` - Header/Navigation
- `Hero.tsx` - Hero Section
- `Services.tsx` - Leistungen
- `Process.tsx` - Prozess
- `WhyUs.tsx` - Warum wir
- `CTA.tsx` - Call-to-Action
- `Footer.tsx` - Footer

### Styles anpassen

Tailwind CSS wird verwendet. Alle Styles sind inline in den Components definiert:

```tsx
<div className="bg-zinc-950 border border-white/10 rounded-lg p-8">
  {/* Content */}
</div>
```

### Animationen anpassen

Framer Motion wird für Animationen genutzt. Beispiel:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## Build & Deployment

### Production Build erstellen

```bash
npm run build
npm run start
```

### Mit Vercel deployen (Empfohlen)

1. Auf [vercel.com](https://vercel.com) anmelden
2. "New Project" → Repository verbinden
3. Deployment Settings:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Start Command: `npm run start`

4. Deploy-Button drücken

## Content bearbeiten

### Texte ändern

Texte sind direkt in den Components definiert. Beispiel in `Hero.tsx`:

```tsx
<h1 className="...">
  Webseiten, Apps & Automatisierungslösungen
</h1>
```

### Logo ändern

Das Logo wird in `Navigation.tsx` eingebunden:

```tsx
<Image
  src="/logo-light.png"  // ← Hier ändern
  alt="Qomio Logo"
  width={40}
  height={40}
/>
```

Das Logo muss im `public/` Verzeichnis sein.

### Services/Leistungen ändern

In `Services.tsx` gibt es ein Array `services`:

```tsx
const services = [
  {
    title: 'Webseiten, die überzeugen',
    description: '...',
    features: ['Feature 1', 'Feature 2', ...],
    icon: '🌐',
  },
  // ...
]
```

### Process Steps ändern

In `Process.tsx` gibt es ein Array `steps`:

```tsx
const steps = [
  {
    number: 1,
    title: 'Kostenloses Erstgespräch',
    description: '...',
  },
  // ...
]
```

### Why Us Punkte ändern

In `WhyUs.tsx` gibt es ein Array `reasons`:

```tsx
const reasons = [
  {
    title: 'Regional & persönlich',
    description: '...',
    icon: '📍',
  },
  // ...
]
```

## Häufige Aufgaben

### 1. E-Mail Link ändern

In `CTA.tsx`:

```tsx
<Link href="mailto:kontakt@qomio.de">  {/* ← Hier ändern */}
  Kostenloses Erstgespräch anfragen
</Link>
```

### 2. Navigation Links ändern

In `Navigation.tsx`:

```tsx
<Link href="#leistungen">Leistungen</Link>  {/* ← Section ID */}
```

### 3. Farben ändern

In `tailwind.config.ts`:

```tsx
theme: {
  extend: {
    colors: {
      'dark': '#030303',  // ← Hier ändern
      'dark-secondary': '#0A0A0A',
    },
  },
},
```

### 4. Animationen schneller/langsamer

In Components, z.B. `Hero.tsx`:

```tsx
transition: { duration: 0.8 }  {/* ← 0.8s → 0.4s (schneller) */}
```

## Problembehebung

### `npm install` schlägt fehl

Versuche:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Dev Server startet nicht

```bash
# Port 3000 ist besetzt?
npm run dev -- -p 3001  # Anderer Port
```

### Build Fehler

```bash
# Linting Fehler anzeigen
npm run lint

# TypeScript Fehler anzeigen
npx tsc --noEmit
```

## Performance optimieren

1. **Images optimieren** - Next.js macht das automatisch
2. **Code Splitting** - Next.js macht das automatisch
3. **CSS Purging** - Tailwind macht das automatisch

## SEO verbessern

In `app/layout.tsx` kannst du Metadata anpassen:

```tsx
export const metadata: Metadata = {
  title: 'Qomio - Digitale Lösungen',
  description: '...',
  keywords: '...',
}
```

## Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## Support

Bei Fragen oder Problemen können die Entwickler aus Riedlingen kontaktiert werden.

---

**Happy Coding! 🚀**
