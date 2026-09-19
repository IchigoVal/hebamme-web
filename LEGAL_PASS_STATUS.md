# Legal & Privacy Pass – Arbeitsstand

Stand: 19. September 2026

## Git-Ausgangspunkt

- Ausgangsbranch: `astra-final-review`
- Ausgangscommit: `da9cdd6`
- Sicherungstag vor dem Legal-Pass: `checkpoint/pre-legal-pass`
- Aktueller Arbeitsbranch: `legal-pass`

## Aktueller Bearbeitungsstand

Der unveränderte Ausgangszustand wurde geprüft und mit einem lokalen Tag gesichert. Der Arbeitsbranch für den Legal- und Datenschutz-Pass ist angelegt. Die technische und rechtliche Prüfung beginnt als Nächstes.

## Bereits abgeschlossen

- `git status`, Commit-Historie und vorhandene Tags geprüft
- sauberen Working Tree bestätigt
- `checkpoint/pre-legal-pass` auf Commit `da9cdd6` gesetzt
- Branch `legal-pass` erstellt
- dieses Wiederaufnahmeprotokoll angelegt

## Noch offen

- tatsächliche Datenflüsse, externe Ressourcen und Browser-Speicher im Code und Browser prüfen
- offizielle Quellen für DDG, Berufsrecht, Datenschutzaufsicht und Art. 13 DSGVO verifizieren
- Impressum überarbeiten
- Datenschutzlösung für Elfsight festlegen und gegebenenfalls Zwei-Klick-Lösung umsetzen
- externe Fonts prüfen und gegebenenfalls lokal bereitstellen
- Datenschutzerklärung auf Basis des Audits überarbeiten
- datensparsamen WhatsApp-Hinweis ergänzen
- `LEGAL_RELEASE_CHECKLIST.md` erstellen
- Build, Browser- und Linkprüfung durchführen
- Checkpoints `checkpoint/legal-content` und `checkpoint/legal-pass-final` erstellen
- `PROJECT_HISTORY.md` ergänzen

## Zuletzt geprüfte Dateien

- noch keine Inhaltsdateien; bisher nur Git-Ausgangszustand

## Letzte erfolgreiche Tests

- Git-Ausgangsprüfung: Working Tree war sauber

## NEXT STEP

Projektdateien und Browser-Verhalten auf Hosting, externe Requests, Fonts, Elfsight, WhatsApp, Cookies sowie `localStorage`/`sessionStorage` prüfen und die Ergebnisse hier dokumentieren.
