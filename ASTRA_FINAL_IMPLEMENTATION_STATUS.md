# Astra Final Implementation – Fortsetzungsstatus

Stand: 21.09.2026. Aktiver Branch: `astra-final-implementation`.

## Ausgangspunkt und Sicherung

- Website-Ausgangscommit: `5370689`, `checkpoint/targeted-refinement-final`.
- Ausgangszustand tatsächlich geprüft: ausschließlich `ASTRA_FINAL_CRITIC_AUDIT.md` untracked; keine Website-Änderung.
- Audit separat gesichert: `e618fe9` – `docs: add final Astra critic audit`.
- `checkpoint/pre-final-implementation` zeigt auf `e618fe9`.
- Neuer Branch `astra-final-implementation`; bestehende Branches/Tags unverändert.
- Kein Push, kein Deployment.

## Exakt freigegebener Scope

1. F1: Kartenstreifen einschließlich Controls als stabile Ausschlusszone des mobilen Sticky-CTA.
2. F2: Übergabe an die tatsächlich erreichbare reguläre WhatsApp-Aktion statt Ausblenden am Kontaktanfang.
3. F3: Nur betroffene kleine Textfarben auf Sand/Rosé mit Kontrastreserve abdunkeln.
4. F4: Sehr kurze Viewports gezielt testen; Sonderlösung nur bei nachgewiesenem Vorher-/Nachher-Gewinn übernehmen.
5. F5: Bestehende Nummern 112/116117 in DE/RU als `tel:`-Links, keine Text-/Aussagenänderung.

Geschützt: Desktop-Komposition, Hero, Überschriften, Bilder, Kartenmechanik/-größen, Nummern, Divider, Kontaktaufbau, Section-Reihenfolge, allgemeine Inhalte. `impressum.html`, `datenschutz.html`, `LEGAL_RELEASE_CHECKLIST.md` und Elfsight bleiben unverändert. Keine erfundenen Marina-Angaben.

## Phasen

- Sicherung des Audits: abgeschlossen.
- A / F1 + F2: abgeschlossen, gesichert durch `checkpoint/final-sticky-logic` (Commit über Tag auflösbar).
- B / F3: offen.
- C / F4: offen.
- D / F5: offen.
- Finale QA, Historie, Commit und Final-Tag: offen.

## Browser und Tests

- In-App-Browser erneut versucht, weiterhin Verbindungsfehler `missing field sandboxPolicy`.
- Fallback: vorhandener lokaler Edge/CDP, keine neue Dependency. Screenshots und temporäre Browserdaten außerhalb des Repositorys unter `%TEMP%/hebamme-final-implementation`.
- Vorgesehen: bestehender Interaction-Lauf plus neue Regressionchecks für Sticky-Zonen/Übergänge, kurze Viewports, Kontrast und Notfalllinks.
- Baseline vor Website-Änderungen: alle zehn geforderten Ansichten, geschützte Geometrie sowie Hero-/Menüscreenshots unter `%TEMP%/hebamme-final-implementation/baseline.json` und `before-*.png`.
- A: Einzelvorlauf 390 × 844 DE mit 38/38 Checks bestanden. Vollmatrix aller zehn geforderten Ansichten: 353/354; einzige Abweichung war eine zu kurze feste Test-Swipe-Geste bei 640 px. Testgeste an Breite angepasst, 640 × 360 DE erneut vollständig mit 38/38 bestanden. Sämtliche Sticky-Prüfungen schon im Vollmatrixlauf bestanden. Keine JS-/HTTP-Fehler. Vollmatrixbericht separat unter `%TEMP%/hebamme-final-implementation/phase-a-full-report.json`, Wiederholung unter `%TEMP%/hebamme-astra-final-sticky/report.json`.
- Zusätzliche Sichtkontrolle 320 × 640 RU mit 34 px Safe Area: Controls frei, Kontaktbeginn mit Sticky. Höhenwechsel 844 → 760 px korrekt. Gerenderte Karten-, Kontakt- und Übergabescreenshots DE/RU geprüft.
- Produktions-Build und `git diff --check` nach erster F1/F2-Implementierung erfolgreich.

## Phase A – abgeschlossen

- Eine Zustandslogik in `initializeMobileContact()`: Hero passiert, Kartenbedienzone sichtbar, normale Kontaktaktion erreichbar, Menü offen und Mobile-Breakpoint.
- Durchgehende Kartenausschlusszone vom Anfang des Streifens bis zum Ende der Controls; 16/32 px Ein-/Austrittsmargen verhindern nervöses Umschalten.
- Kontaktübergabe erst bei vollständig erreichbarem regulärem WhatsApp-Button. Rückgabe an Sticky, sobald weniger als 44 px seiner Höhe erreichbar bleiben; Header, Visual Viewport und Safe Area berücksichtigt.
- Kartenmechanik, Größen und Gestaltung unverändert; kein CSS-Hack für einzelne Scrollpositionen.
- Neue reproduzierbare Regressionchecks in `scripts/final-implementation-checks.mjs`, über bestehendes Browser-QA-Skript aufrufbar. Langsame vollständige Scrolls in beide Richtungen, kleine Umkehrbewegungen, alle vier Karten, Touch/Pointer/Tastatur, Menü, Safe Area 0/34 px und Reduced Motion.

## Zwischencommits / Checkpoints

- `e618fe9`: Auditcommit, `checkpoint/pre-final-implementation`.
- `checkpoint/final-sticky-logic`: geprüfte F1/F2-Logik einschließlich Regressionchecks und Status.

## NEXT STEP

B/F3 beginnen: ausschließlich kleine graue Orientierungstexte auf Sand und Kontakttexte auf Rosé abdunkeln; neue berechnete und tatsächliche Browserkontraste sowie DE/RU-Screenshots prüfen. Danach Status aktualisieren, C/F4 als gezieltes Vorher-/Nachher-Experiment. F3/F4/F5 noch nicht implementiert.
