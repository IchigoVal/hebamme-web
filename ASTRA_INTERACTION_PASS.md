# Astra Interaction & UI Detail Pass

## Ausgangspunkt

- 20.09.2026, sauberer HEAD `1d76e18` auf `astra-deep-final` verifiziert.
- Gesichert als `checkpoint/pre-interaction-polish`; neuer Branch `astra-interaction-polish`.
- Gestalterische Basis ausschließlich der aktuelle Astra-Stand. Keine alten Versionen geöffnet oder verglichen.
- Projektverlauf, Deep-Pass-Status, HTML, JS und CSS gelesen.
- Keine Änderungen an Bildern, Inhalten/Section-Reihenfolge, Legal-Dateien oder Elfsight-Ladefunktion. Kein Push/Deployment.

## Browseraudit / beobachtete UI-Schwächen

- Kompletter Scroll-Audit: 1440 DE, 390 DE/RU. Keine Überläufe, fehlenden Übersetzungen oder JS-Fehler.
- Buttons: Hierarchie vorhanden, aber wenig charakteristische Binnenstruktur; kaum eigenständiges Pressed-Feedback.
- Nummern: kleine Sans-Ziffern sind von der großen editorialen Typografie abgekoppelt.
- Karten: unauffällige Position und sehr blasse runde Randcontrols; keine gestaltete Fortschrittslinie (nur nativer Scrollbalken).
- FAQ: Plus wird zum Kreuz; offene Frage und Antwort besitzen wenig Zustandsunterscheidung.
- Inline-Link unterstreicht auch den Pfeil. Navigation und Sprache können präzisere, zusammengehörige Zustände erhalten.
- In-App-Browser beim Bootstrap durch `missing field sandboxPolicy` blockiert. Browserprüfung deshalb mit vorhandenem lokalem Edge/CDP-System, ohne neue Dependencies. Screenshots/Reports in OS-TEMP.

## Geplante Änderungen

- Kantige, warme Kontaktbuttons mit Text/Icon-Gliederung, feinen Trennlinien und konsistentem Hover/Focus/Pressed.
- Serifenziffern als Marginalien mit kurzen Linien; kein Stepper und keine interaktiven Scheinfunktionen.
- Mobile Kartenposition mit betonter aktueller Ziffer, Fortschrittslinie und 48-px-Pfeilen; aktive Karte erhält eine feine Linie.
- Native Details mit echtem Plus/Minus, klarerer offener Frage und kurzer Antwort-Einblendung.
- Inline-Unterstreichung/Pfeil, Navigation, Sprache und Menütoggle innerhalb derselben Form-/Motion-Sprache verfeinern.
- Motion-Tokens: 160/220 ms, gemeinsames Easing, 2–3 px Bewegung; Reduced Motion vollständig erhalten.

## Verworfene Ideen

- Kreisnummern/Stepper, Karten-Dots und große Badges: wirken wie App-Komponenten.
- Rollende Zahlen, federnde Buttons, animierte FAQ-Höhe per JavaScript: unnötige Bewegung/Komplexität.
- CTA-Schatten, Glow, Pill-System oder neue Bilder: passen nicht zur vorhandenen Gestaltung.
- Desktop-Carousel: alle vier Karten bleiben direkt sichtbar; bestehende Staffelung erhalten.

## Umgesetzte Änderungen

- Buttons: 56 px Mindesthöhe, linksbündige Beschriftung, feine Icon-Trennung, gezeichnete Pfeil-/Telefonicons. Primär gefüllt, Telefon konturiert; Hover-Farbwechsel, sichtbarer Fokus und 1-px-Pressed-Reaktion. Kein Schatten.
- Nummern: Playfair-Ziffern (35,2 px Orientierung, 28,8 px Karten), Orientierung mit kurzer Linie. Kartenlinie reagiert auf Hover bzw. aktive mobile Position; Nummern bleiben nicht klickbar.
- Karten: 48-px-Pfeile, größere aktuelle Position und dezente Fortschrittslinie. Bestehende Scroll-/Swipe-/Keyboard-Logik erhalten; DOM und Live-Region werden nur bei tatsächlichem Positionswechsel aktualisiert. Desktop entfernt mobile Aktivmarkierung.
- FAQ: native Details, dekoratives Plus/Minus, betonte offene Frage und Divider, 220-ms-Antwort-Einblendung. Kein Accordion-JavaScript.
- Navigation/Sprache: kurze aktive Linien, klare Touch-/Focus-Zustände, kantiger Menütoggle. Inline-Pfeil ohne Unterstreichung, 3-px-Bewegung und zurückhaltende Unterstreichungsreaktion.
- Gemeinsame Motion-Tokens: 160/220 ms, `cubic-bezier(.2,.65,.3,1)`. Reduced Motion entfernt zusätzlich dekorative Verschiebungen. Bestehende Section-Reveals bleiben erhalten.
- Zweite Feinabstimmung nach Browservergleich: Desktop-Nav auf 44-px-Ziele, Menüübergang auf 3 px reduziert, Motion-Zeiten vereinheitlicht.

## Bisherige Prüfung

- Design-Sichtung: 1440 DE, 390 DE/RU komplett; ergänzende Layoutmessung 1024/768 DE und 320 DE/RU ohne Überläufe, fehlende Übersetzungen oder JS-Fehler.
- Produktions-Build und `git diff --check` erfolgreich.
- Gezielter Vorlauf: 46/46 Interaktionsprüfungen bestanden (390 DE plus Desktop-Hover/Pressed, Swipe, Reduced Motion und Resize).
- Reale Pointer-/Tastaturzustände und Screenshots von Header, Buttons, Menu, Karten und FAQ geprüft. Kontakte ausschließlich auf Ziele/Feedback geprüft, nicht ausgelöst.
- Bestehendes Browser-QA-Skript um Modus `interaction` ergänzt; keine neue Bibliothek. Bericht/Screenshots: `%TEMP%/hebamme-astra-interaction`.

## NEXT STEP

Design-Checkpoint erstellen. Dann vollständige gezielte Produktions-QA: 1440 DE, 390 DE/RU, 320 DE/RU, finaler Scroll-/Designcheck und Abschlussdokumentation/Checkpoint.
