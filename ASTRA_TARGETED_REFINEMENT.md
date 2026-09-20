# Targeted Refinement – 20.09.2026

## Ausgangspunkt und Grenzen

- Sauberer Ausgangsstand `c4f594c` auf `astra-interaction-polish`.
- Gesichert als `checkpoint/pre-targeted-refinement`; neuer Branch `astra-targeted-refinement`.
- Genau vier autorisierte Änderungen. Kein Redesign, keine Änderung von Texten, Bildern, Abschnittsreihenfolge, Kartensteuerung, H1, Hero-Bild, Hebammenhilfe oder grundsätzlicher Kontaktlänge.
- Legal-Dateien, Platzhalter-E-Mail und Elfsight-Ladefunktion bleiben unverändert. Kein Push/Deployment.
- Ein separater Endnutzer-Audit folgt erst nach bestandenem Testlauf und finalem Commit. Danach keine weiteren Website-/Repository-Änderungen.

## Umsetzung

1. Mobile WhatsApp-Kontaktleiste unter 720 px: erst wenn der komplette Hero hinter dem Header liegt; verborgen sobald der Kontaktbereich im Viewport erscheint, am Seitenende, auf Desktop und bei geöffnetem Menü. 48-px-Button im bestehenden System, 65-px-Leiste ohne Schatten oder Bewegung, 160-ms-Einblendung. `env(safe-area-inset-bottom)` und `viewport-fit=cover`; versteckte Zustände sind inert. Scroll-/Fokusabstand schützt Tastaturziele vor der Leiste. Hero- und Kontaktbuttons bleiben unverändert.
2. DE/RU: 12 px tatsächlicher Abstand statt 4,47 px, weiterhin je 44 × 44 px. Mobile Header-Spalten verteilt, damit Wortmarke und Sprachwahl nicht kollidieren. Keine Vergrößerung des Headers.
3. Telefonnummer: Sprache und klickbare Nummer gemeinsam an einer feinen vertikalen Linie ausgerichtet; kleines Telefonicon. Abstände innerhalb der Gruppe umverteilt, ohne die Höhe der Identitätsfläche oder des Kontaktabschnitts zu verändern.
4. Doppeldivider in der Anfragefläche: obere Linie des Datenschutzhinweises entfernt. Abschlusslinie der Checkliste und bisherige vertikale Abstände erhalten; keine Änderung des Textes.

## Browserprüfung

- In-App-Browser weiterhin durch `missing field sandboxPolicy` blockiert; vorhandenes Edge/CDP-System genutzt, keine neue Dependency.
- Vorherzustand und Umsetzung bei 1440 DE, 390 DE/RU, 320 DE/RU tatsächlich gerendert, durchgescrollt und in Viewport-Screenshots geprüft.
- Erste Variante der Leiste beibehalten: kompakter vorhandener Button, keine zusätzliche Überschrift/Iconleiste oder schwebende Pill.
- Testkoordinaten nachjustiert: Hero muss tatsächlich vollständig verlassen sein; das bereits sichtbare Sticky-Menü wird ohne vorheriges Zentrieren angeklickt, da `scrollIntoView` sonst den Seitenstand verändert. Keine Website-Anpassung dafür erforderlich.
- Tests vergleichen zusätzlich H1-Schriftgröße sowie Hero-, Bild-, Hebammenhilfe-, Identitäts- und Kontaktabschnittshöhen exakt mit dem Ausgangszustand.
- Reproduzierbar: Preview auf 4175 nach `npm run build`; `node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ refinement`. Für den Höhenvergleich liegt der zuvor erstellte `refinement-before`-Report in OS-TEMP.

## NEXT STEP

**UMSETZUNG COMPLETE.** 112/112 gezielte Prüfungen plus 134/134 Interaction-Regressionsprüfungen bestanden. Produktionsmatrix: 1440 DE, 390 DE/RU, 320 DE/RU. Keine JS-/HTTP-Fehler, Text-/Dokumentüberläufe oder fehlenden Übersetzungen. Verdeckte Leiste inert, Fokus und Menü-Rückkehr korrekt, Karten/Swipe/FAQ/Navigation unverändert funktionsfähig. Safe Area per Browser-Emulation mit 34 px geprüft (42 px unterer Innenabstand inklusive 8 px Gestaltungspadding). Reduced Motion bestanden. Keine Prüfung auf physischer iPhone-/Android-Hardware behauptet.

H1-Schriftgröße sowie Hero-, Hero-Bild-, Hebammenhilfe-, Identitäts- und Kontaktabschnittshöhen entsprechen in allen fünf Ansichten exakt der Baseline. Mobile Identitätsfläche: 261 px bei 390, 257 px bei 320; Kontakt DE/RU: 1420/1465 px bei 390 und 1424/1491 px bei 320. Keine Verkürzung des Kontaktabschnitts. Alle drei geschützten Legal-Dateien und Bilddateien bytegleich; Elfsight-, Karten- und FAQ-Logik unverändert.

Build und `git diff --check` erfolgreich. Abschlusscommit trägt `checkpoint/targeted-refinement-final`; seine exakte ID lässt sich mit `git rev-parse --short checkpoint/targeted-refinement-final` auflösen. Alter Branch und alle alten Tags unverändert, kein Push/Deployment.

Nach dem Abschlusscommit ausschließlich separaten Endnutzer-Audit durchführen: `node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ end-user-audit`. Vollständiger Scrollgang und Viewport-Screenshots, alle vier mobilen Karten, FAQ und DE/RU-Menüs einschließlich kurzer Displays. Ergebnisse nur im Abschlussbericht an den Nutzer; ab Auditbeginn keine weiteren Repository-/Website-Änderungen. Temporäre Reports/Screenshots liegen unter `%TEMP%/hebamme-astra-end-user-audit`.
