# WhatsApp Button Konfiguration

Der WhatsApp Button erscheint automatisch rechts unten, sobald der Benutzer 300px nach unten scrollt.

## Telefonnummer ändern

Öffne die Datei `components/WhatsAppButton.tsx` und ändere die Nummer in Zeile 20:

```tsx
const phoneNumber = '491234567890' // Beispiel: Deutsches Format
```

### Format:
- **Ohne** das `+` Zeichen
- **Mit** Ländercode
- Beispiele:
  - Deutschland: `491234567890` (49 + Handynummer ohne führende 0)
  - Österreich: `436641234567` (43 + Handynummer ohne führende 0)
  - Schweiz: `41791234567` (41 + Handynummer ohne führende 0)

## Nachricht anpassen

Die Standard-Nachricht kann ebenfalls in Zeile 21 geändert werden:

```tsx
const message = encodeURIComponent('Hallo! Ich interessiere mich für Ihre Dienstleistungen.')
```

## Features

- ✅ Erscheint beim Scrollen (ab 300px)
- ✅ Pulsierender Effekt
- ✅ Tooltip beim Hover
- ✅ Mobile-optimiert
- ✅ WhatsApp-Grün (#25D366)
- ✅ Smooth Animations
