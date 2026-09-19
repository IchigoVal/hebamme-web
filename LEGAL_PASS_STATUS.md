# Legal & Privacy Pass – Arbeitsstand

Stand: 19. September 2026

## Git-Ausgangspunkt

- Ausgangsbranch: `astra-final-review`
- Ausgangscommit: `da9cdd6`
- Sicherungstag vor dem Legal-Pass: `checkpoint/pre-legal-pass`
- Aktueller Arbeitsbranch: `legal-pass`

## Aktueller Bearbeitungsstand

Impressum, Datenschutzerklärung und die notwendigen technischen Datenschutzänderungen sind umgesetzt und im Browser geprüft. Der Stand ist bereit für den Zwischencheckpoint `checkpoint/legal-content`.

## Bereits abgeschlossen

- `git status`, Commit-Historie und vorhandene Tags geprüft
- sauberen Working Tree bestätigt
- `checkpoint/pre-legal-pass` auf Commit `da9cdd6` gesetzt
- Branch `legal-pass` erstellt
- dieses Wiederaufnahmeprotokoll angelegt
- GitHub-Pages-Workflow und Vite-Basis `/hebamme-web/` als tatsächliche Hosting-Konfiguration bestätigt
- Browser-Audit vor Änderungen durchgeführt:
  - beim normalen Seitenaufruf Verbindungen zu `fonts.googleapis.com` und `fonts.gstatic.com`
  - lokale Speicherung nur `localStorage["preferred-language"]`; keine eigenen Cookies und kein `sessionStorage`
  - WhatsApp ist ausschließlich per `wa.me` verlinkt und erzeugt vor einem Klick keine Verbindung
  - Elfsight lädt beim Annähern an den Bewertungsbereich ohne Klick
  - nach Elfsight-Laden Kontakte zu mehreren `elfsight.com`/`elfsightcdn.com`-Domains und die Cookies `elfsight_viewed_recently` sowie `_cfuvid`
  - im geprüften Lauf keine direkte Google-Domain für das Bewertungswidget
- Entscheidung: Inter und Playfair Display werden aus den offiziellen Google-Fonts-Dateien lokal bereitgestellt
- Entscheidung: Elfsight erhält eine lokale Zwei-Klick-Lösung; vor ausdrücklichem Klick wird kein Widget-Skript geladen
- offizielle Grundlagen geprüft: § 5 DDG, § 25 TDDDG, Art. 13 DSGVO, Hebammengesetz, Bayerische Hebammenberufsordnung, Stadt Nürnberg/Gesundheitsamt, BayLDA und GitHub-Pages-Dokumentation
- zuständige berufliche Aufsicht anhand BayHebBO § 9 und Nürnberger Behördenwegweiser als Gesundheitsamt der Stadt Nürnberg eingeordnet
- zuständige Datenschutzaufsicht für den nichtöffentlichen Bereich in Bayern als BayLDA bestätigt
- vollständige Anschrift in Impressum und Datenschutzerklärung ergänzt
- alte Beispiel-E-Mail auf `BITTE-ERSETZEN@example.invalid` vereinheitlicht und bewusst nicht verlinkt
- berufliche Aufsichtsbehörde und verifizierte Berufsrechtsquellen im Impressum ergänzt
- Google-Fonts-Verbindungen entfernt; Inter und Playfair Display aus offiziellen Google-Fonts-Dateien lokal eingebunden
- lokales Zwei-Klick-Gate für Elfsight in Deutsch und Russisch umgesetzt
- Spracheinstellung so geändert, dass `localStorage` erst nach einer bewussten Sprachauswahl beschrieben wird
- kurzer Hinweis zur datensparsamen WhatsApp-Erstanfrage in Deutsch und Russisch ergänzt
- Datenschutzerklärung anhand der realen Datenflüsse vollständig neu gefasst
- `LEGAL_RELEASE_CHECKLIST.md` mit den tatsächlich offenen Punkten angelegt
- Browser-Nachtest bestätigt:
  - beim ersten Aufruf und beim Scrollen zum Review-Bereich ausschließlich lokale Requests
  - kein Cookie, kein `localStorage` und kein `sessionStorage` ohne Nutzeraktion
  - Elfsight-Requests und Drittanbieter-Cookies erst nach Klick auf „Bewertungen laden“

## Noch offen

- Build, Browser- und Linkprüfung durchführen
- Checkpoints `checkpoint/legal-content` und `checkpoint/legal-pass-final` erstellen
- `PROJECT_HISTORY.md` ergänzen

## Zuletzt geprüfte Dateien

- `index.html`
- `impressum.html`
- `datenschutz.html`
- `src/main.js`
- `src/style.css`
- `vite.config.js`
- `package.json`
- `.github/workflows/deploy.yml`
- `CONTENT_SOURCES.md`
- `PROJECT_HISTORY.md`

## Letzte erfolgreiche Tests

- Git-Ausgangsprüfung: Working Tree war sauber
- Browser-Ist-Audit auf `http://127.0.0.1:5174/hebamme-web/` erfolgreich; Requests, Cookies, `localStorage` und `sessionStorage` wurden protokolliert
- `npm run build` nach der Umsetzung erfolgreich
- Desktop- und Mobile-Darstellung von Impressum und Datenschutz ohne horizontalen Overflow oder Browserfehler geprüft
- Startseite bei 390 Pixeln in Deutsch und Russisch ohne horizontalen Overflow oder JavaScript-Fehler geprüft

## NEXT STEP

Temporäre Auditdateien entfernen, `npm run build` und `git diff --check` wiederholen, den Stand committen und `checkpoint/legal-content` setzen. Danach die finale Link-, Fokus- und Produktionsprüfung durchführen.
