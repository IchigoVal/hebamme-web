# Redesign „Meine Leistungen“

## Gestaltung und Umfang

Die beigefügte Referenz bestimmt Komposition und Hierarchie: heller, warmer Hintergrund; große Serifentitel und Einleitung; fünf ruhige Rosézeilen mit Nummer, Titel, Kurztext, Themenzeile und Plus/Minus. Die geöffnete Zeile bildet eine zusammenhängende Fläche mit hellem Detailbereich, feinen Trennlinien, Serifenzwischenüberschriften und Listen. Die Gestaltung verwendet die vorhandenen Schriftfamilien und warmen Farben, ohne Schatten oder zusätzliche Abhängigkeiten.

Auf breiten Desktops stehen die vier Schwangerschaftsgruppen wie in der Vorlage nebeneinander; andere Detailinhalte nutzen zwei Spalten, auf schmalen Displays eine. Die Vorlage zeigt nur Auszüge; die vollständigen Inhalte sind hier weiterhin lesbar. Bei sehr kleinen Displays stehen Nummer und Toggle über dem Titel, damit lange Überschriften nicht unlesbar umbrechen.

Geändert: `src/marina-services.css`. Der native `details`-/`summary`-Mechanismus und das vorhandene Schließen mit Fokusrückgabe bleiben erhalten. Bestehendes HTML, Texte, Daten, Sprachlogik und sämtliche anderen Websitebereiche sind unverändert. Diese Datei dokumentiert den Durchgang.

## Inhalt und Prüfung

- `MARINA_LEISTUNGEN.md` ist unverändert. Der unabhängige Originalvergleich bestätigt alle fünf Bereiche mit **94 Texteinträgen und 58 Stichpunkten** in ursprünglicher Reihenfolge, inklusive aller Einleitungen und Schlussabsätze.
- Die russischen Texte und ihre `pending-marina-review`-Kennzeichnung sind unverändert; Marinas fachliche und sprachliche Prüfung bleibt offen.
- Produktionsbuild und **11/11** vorhandene Tests bestanden; `node scripts/prepare-services.mjs --check` bestätigt Daten und vollständigen HTML-Fallback.
- **487/487 Leistungs-Browserprüfungen**: 320, 375, 390, 768, 1024 und 1440 CSS-Pixel in DE/RU, alle fünf Bereiche einzeln, Schwangerschaft und Wochenbett auch zusammen geöffnet, Sprach-/Größenwechsel, Tastatur, sichtbarer Fokus, Fokusrückgabe, Reduced Motion, Direktlink und No-JavaScript-Fallback. Darstellung auf Desktop und Mobile anhand von Screenshots geprüft.
- **135/135 allgemeine Interaktionsprüfungen und 439/439 native Review-Prüfungen** kontrollieren unter anderem Navigation, Kontakt, mobile Karten, Review-Reihenfolge und Nachladen. Keine JavaScript-Fehler, fehlgeschlagenen Requests oder neuen externen Requests festgestellt.
- `git diff --check` bestanden. Die Prüfung erfolgte in Edge mit emulierten Bildschirmgrößen; es wurde kein physisches iOS-/Safari-Gerät geprüft.

## Git und offene Punkte

- Branch: `feature/native-reviews`.
- Vorab: `checkpoint/pre-marina-services-redesign` auf `e09d1b2`.
- Funktionierender Zwischenstand: `165f5f0`.
- Finaler Stand: `checkpoint/marina-services-redesign-final`.
- Offen: Freigabe der bestehenden russischen Übersetzung durch Marina; keine weiteren bekannten Umsetzungsblockaden.

Kein Push, kein Deployment.
