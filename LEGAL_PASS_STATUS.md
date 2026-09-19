# Legal & Privacy Pass – Arbeitsstand

Stand: 19. September 2026

## Git-Ausgangspunkt

- Ausgangsbranch: `astra-final-review`
- Ausgangscommit: `da9cdd6`
- Sicherungstag vor dem Legal-Pass: `checkpoint/pre-legal-pass`
- Aktueller Arbeitsbranch: `legal-pass`

## Aktueller Bearbeitungsstand

Impressum, Datenschutzerklärung und die notwendigen technischen Datenschutzänderungen sind umgesetzt. `checkpoint/legal-content` liegt gesichert auf Commit `80acd58`. Auf ausdrücklichen Wunsch wurde anschließend ausschließlich die Elfsight-Zwei-Klick-Lösung für die lokale Entwicklungsphase wieder durch automatisches Lazy Loading ersetzt. Die finale Produktions-, Link-, Responsive- und Tastaturprüfung ist erfolgreich abgeschlossen. Offen sind nur noch finaler Commit, Tag und Projekthistorie.

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
- Zwischenentscheidung in `checkpoint/legal-content`: Elfsight erhielt eine lokale Zwei-Klick-Lösung; vor ausdrücklichem Klick wurde kein Widget-Skript geladen
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
- nach `checkpoint/legal-content` auf Wunsch für die lokale Entwicklungsphase geändert:
  - sichtbarer Consent-/Ladeplatzhalter vollständig entfernt
  - Elfsight lädt wieder automatisch per `IntersectionObserver`, wenn der Bewertungsbereich in die Nähe des Viewports kommt
  - Script und Widget werden nur einmal initialisiert; kein Nutzerklick ist erforderlich
  - Elfsight soll vor einem öffentlichen Release vollständig entfernt und ersetzt werden
  - `datenschutz.html` wurde wegen dieser ausdrücklich temporären Entwicklungsentscheidung bewusst nicht erneut umgeschrieben
  - nach Entfernung von Elfsight muss der finale technische Datenschutzstand vor Release erneut geprüft werden

## Noch offen

- finalen Checkpoint `checkpoint/legal-pass-final` erstellen
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
- finaler Produktions-Build erfolgreich
- Startseite bei 1440 Pixeln DE sowie 390 Pixeln DE/RU geprüft:
  - kein Consent- oder Ladeplatzhalter vorhanden
  - vor Annäherung an den Bewertungsbereich kein Elfsight-Skript geladen
  - nach Annäherung genau ein Plattformskript, ein Widget und sichtbare Bewertungsinhalte
  - wiederholtes Weg- und Hinscrollen erzeugt kein doppeltes Skript oder Widget
  - kein horizontaler Overflow, keine defekten lokalen Bilder, keine fehlenden Anker und keine Browserfehler
- Mobile Navigation öffnet und schließt per Escape; FAQ öffnet per Leertaste und zeigt einen sichtbaren Tastaturfokus
- `prefers-reduced-motion` zeigt Reveal-Inhalte ohne ausgeblendeten Zwischenzustand
- Impressum und Datenschutz bei 1440 und 390 Pixeln ohne Overflow, defekte Bilder, externe Skripte oder Browserfehler geprüft
- Placeholder-E-Mail ist sichtbar, aber nicht verlinkt; Telefon und WhatsApp im Impressum stimmen
- alle externen Inhalts-, Berufsrechts- und Datenschutzlinks erreichbar; Telefon-/WhatsApp-Ziele korrekt
- im Produktionslauf keine Requests an `fonts.googleapis.com` oder `fonts.gstatic.com`

## NEXT STEP

Geprüften technischen Stand committen und `checkpoint/legal-pass-final` setzen. Danach `PROJECT_HISTORY.md` mit den drei Legal-Checkpoints und der finalen Commit-ID ergänzen, Abschlussstatus dokumentieren und den Dokumentations-Commit erstellen.
