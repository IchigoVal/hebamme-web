# Eigene Review-Sektion – Fortsetzungsstatus

Branch: `feature/native-reviews`. Kein Push, kein Deployment.

## Sicherung und Scope

- Ausgangspunkt `bf2be40` / `checkpoint/reviews-data-import-wip-1`, Website auf `checkpoint/final-implementation`.
- Vor Änderungen nur `marina-google-reviews.json` untracked; vollständige Datei durch `cf2fb2c` und `checkpoint/pre-native-reviews` gesichert.
- Änderungen ausschließlich Review-Sektion, notwendige Initialisierung/Sprachwechsel, Datenaufbereitung, Tests und Dokumentation.
- Legal-Seiten bleiben unverändert.

## Ausgangslage

- Vite / Vanilla JS, lokale Inter-/Playfair-Schriften, Papier-/Sand-/Roséflächen, feine Linien.
- Bisheriger Import: 29 verifizierte Rezensionen; neue Datei: 66 eindeutige Rezensionen, 62 Texte und 4 Sternebewertungen; 65 × 5 und 1 × 2 Sterne.
- Baseline-Build erfolgreich. Desktop 1440 DE und Mobile 390 DE/RU im Browser aufgenommen; keine Layout-/Übersetzungsfehler. Belege unter `%TEMP%/hebamme-astra-baseline`.
- In-App-Browser nicht erreichbar (`missing field sandboxPolicy`); vorhandener lokaler Edge/CDP-Testweg verfügbar.
- Datenabweichung: fünf Texte sind im gelieferten Export Deutsch, bei identischen IDs im bisherigen verifizierten Import RU (3), HU (1), EN (1). Nutzer hat die Übernahme der verifizierten Originale ausdrücklich bestätigt. Keine eigene Übersetzung.

## Etappen

1. Pre-Checkpoint: abgeschlossen.
2. Daten / Logik: abgeschlossen. Sechs Texte pro Schritt, Volltext aufklappbar, unveränderte Quellenreihenfolge und optional niedrigste Bewertung zuerst, DE/RU-Bedienung. Build, fünf Datenintegritätstests und vollständige Browsermatrix 320/375/390/768/1024/1440 × DE/RU bestanden. Alle 62 Volltexte browserseitig exakt abgeglichen; keine externen Requests, JS- oder Requestfehler. Ein anfänglicher Fokus-Test setzte programmgesteuert Fokus nach einem Pointer-Klick; nach korrektem Tastatureinstieg bestätigt er den vorhandenen sichtbaren Tastaturfokus in allen zwölf Fällen.
3. Design / Responsive: offen.
4. Browsermatrix / Bestandstests / finaler Tag: offen.

## Offene Folgepflege außerhalb des Auftrags

`datenschutz.html`, insbesondere Abschnitte 5, 11 und 12, beschreibt weiterhin Elfsight und dessen Datenflüsse. Nach Entfernung der Integration separat inhaltlich abgleichen; in diesem Auftrag ausdrücklich nicht umschreiben. Bestehende sonstige Legal-/Release-Punkte bleiben bestehen.

## Nächster Schritt

Funktionale Integration gesichert durch Commit `feat: replace external reviews with complete local review system`. Als Nächstes ausschließlich Review-Layout visuell verfeinern; danach Reviewmatrix und bestehende Regressionstests ausführen, Design committen und finalen Checkpoint setzen.
