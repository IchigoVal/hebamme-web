# Redesign „Meine Leistungen“

## Zwischenstand

- Ausgangsstand: `checkpoint/pre-marina-services-redesign` auf Branch `feature/native-reviews`.
- Die Leistungssektion wurde anhand der Bildvorlage gestaltet: heller Hintergrund, großer Serifenkopf, warme Rosézeilen, Nummern, gegliederte Beschreibungen, Plus/Minus und direkt eingebundene Detailfläche.
- Betroffen ist `src/marina-services.css`; bestehendes HTML, Daten und Accordion-Logik sind unverändert. Die ungeprüfte RU-Übersetzung bleibt unverändert und benötigt Marinas Freigabe.
- Originalabgleich: vorhandene Tests bestätigen alle 94 Texteinträge und 58 Stichpunkte. Produktionsbuild und 11 Tests bestanden.
- Noch offen: visuelle Prüfung, Desktop-/Mobile- und DE-/RU-Browsermatrix, Tastatur-/Fokus- und Review-Regression, eventuell nötiger Feinschliff, abschließender Commit und Tag.

Kein Push, kein Deployment.
