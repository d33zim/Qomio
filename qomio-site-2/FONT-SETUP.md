# Agency Font Installation für Qomio Logo

Das Logo verwendet den **Agency Font** von DaFont.

## Schnellstart (Option 1: Font herunterladen)

1. **Font herunterladen:**
   - Besuche: https://www.dafont.com/de/agency.font
   - Klicke auf "Download"
   - Entpacke die ZIP-Datei

2. **Font konvertieren & installieren:**
   - Benötigte Formate: `.woff2`, `.woff`, `.ttf`
   - Online Konverter: https://www.fontsquirrel.com/tools/webfont-generator

3. **Font-Dateien kopieren:**
   ```bash
   # Kopiere die Dateien nach:
   qomio-site-2/public/fonts/agency-fb.woff2
   qomio-site-2/public/fonts/agency-fb.woff
   qomio-site-2/public/fonts/agency-fb.ttf
   ```

4. **Fertig!** Der Font ist bereits in `globals.css` eingebunden.

## Option 2: System-Fallback verwenden

Wenn du den Font nicht herunterladen möchtest, verwendet das Logo automatisch "Agency FB" (auf Windows vorinstalliert) oder "Impact" als Fallback.

## Aktueller Status

✅ CSS bereits konfiguriert in `app/globals.css`
✅ Logo-Komponente angepasst in `components/Navigation.tsx`
✅ Fallback-Fonts: Impact, Arial Black
⏳ Warte auf Font-Dateien in `/public/fonts/`

## Logo-Styling

Der Font wird mit folgenden Eigenschaften angezeigt:
- **Schriftart:** Agency FB (Bold)
- **Größe:** 1.5rem (Mobile), 1.75rem (Desktop)
- **Stil:** Uppercase, fett, leicht gespreizt
- **Fallback:** Impact, Arial Black

## Vorschau

Das Logo zeigt jetzt "QOMIO" in Agency FB Font.
