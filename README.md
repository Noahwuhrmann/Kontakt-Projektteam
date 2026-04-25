# Kontakt Projektteam

Statische Kontaktseite fuer ein Projektteam mit vier Gruppenmitgliedern. Die Seite ist fuer GitHub Pages vorbereitet und kann ohne Build-Prozess verwendet werden.

## Dateien

- `index.html`: Inhalt und Struktur der Seite
- `style.css`: Gestaltung, Layout und responsive Darstellung
- `script.js`: Funktion zum Kopieren der E-Mail-Adressen
- `images/`: Teamfotos fuer die vier Personen

## GitHub Pages veroeffentlichen

1. Neues GitHub Repository erstellen.
2. `index.html`, `style.css`, `script.js`, `README.md` und den Ordner `images` in das Repository laden.
3. In GitHub zu `Settings` > `Pages` gehen.
4. Unter `Build and deployment` die Quelle `Deploy from a branch` waehlen.
5. Branch `main` und Ordner `/root` auswaehlen.
6. Speichern. Nach kurzer Zeit ist die Seite ueber die angezeigte GitHub-Pages-URL erreichbar.

## Inhalte anpassen

Die Kontaktdaten werden direkt in `index.html` geaendert:

- Namen in den jeweiligen `h3`-Elementen ersetzen.
- E-Mail-Adressen in den sichtbaren Links, den `mailto:`-Links und den `data-email`-Attributen ersetzen.
- Telefonnummern im sichtbaren Text und in den `tel:`-Links ersetzen.
- LinkedIn-Links bei den sichtbaren Links und Buttons ersetzen.
- Fotos im Ordner `images` austauschen und die Dateipfade im `src`-Attribut der Bilder anpassen.

Die aktuell verwendeten Teamfotos heissen:

- `images/noah_wuhrmann.png`
- `images/mustafa_hazara.png`
- `images/lakshaan_sowndararajan.png`
- `images/robin_frickl.png`

Wenn Fotos ersetzt werden, sollten sie quadratisch zugeschnitten sein, zum Beispiel als `.jpg`, `.png` oder `.webp`.

## Lokal testen

Die Datei `index.html` kann direkt im Browser geoeffnet werden. Alle Pfade sind relativ gesetzt, damit die Seite lokal und auf GitHub Pages funktioniert.
