# Integration der bestätigten Marina-Leistungen

Datum: 01.11.2026. Branch: `feature/native-reviews`. Kein Push, kein Deployment.

## Arbeitsstand / Wiederaufnahme

1. Pre-Checkpoint abgeschlossen: `d9efa10` / `checkpoint/pre-marina-services`. Der zuvor unversionierte vollständige Originaltext wurde unverändert mitgesichert; Website-Ausgangsstand `84fa2b8`.
2. Inhaltsarchitektur, vollständige DE-Daten, statischer HTML-Fallback, RU-Übersetzungsentwurf und native Expand/Collapse-Logik integriert. Build und 11/11 Daten-/Quelltexttests bestanden. Funktionaler Zwischencommit: Tag `checkpoint/marina-services-functional`.
3. Noch ausstehend: Design-/Responsive-Polish, vollständige Browsermatrix inklusive Review- und Interaction-Regression, visuelle Kontrolle, finaler Commit und Tag.

## Mapping: vollständige Originalinhalte

Der bisherige allgemeine Abschnitt `#hebammenhilfe` wurde am selben Ort durch „MEINE LEISTUNGEN“ ersetzt. Die Navigation führt weiterhin zum vorhandenen Anker und heißt jetzt „Meine Leistungen“ / „Мои услуги“; kein neues Navigationslayout.

| Originalabschnitt | Ziel auf der Seite | Immer sichtbar | Vollständig im aufklappbaren Bereich |
| --- | --- | --- | --- |
| MEINE LEISTUNGEN | `#hebammenhilfe` | Überschrift und beide Original-Einleitungsabsätze | — |
| 01 · SCHWANGERSCHAFT | `#leistung-schwangerschaft` | Nummer, Titel, „Gut begleitet …“, Unterzeile mit Vorsorge/Beratung/Beschwerden/Akupunktur | Vorsorge (5 Punkte), Beratung & Begleitung (6), Beschwerden mit „Zum Beispiel bei:“ (5), Akupunktur-Überschrift und vollständiger Absatz |
| 02 · INDIVIDUELLE GEBURTSVORBEREITUNG | `#leistung-geburtsvorbereitung` | Nummer, Titel, kurze Einleitung, persönliche/individuelle Unterzeile | Originaleinleitung, alle 9 Punkte sowie vollständiger „Mein Ziel …“-Schlussabsatz |
| 03 · WOCHENBETT | `#leistung-wochenbett` | Nummer, Titel, „In Ruhe ankommen …“, Unterzeile | Originaleinleitung, „Für dich als Mutter“ (7 Punkte), „Für dein Baby“ (6), kompletter Schlussabsatz |
| 04 · STILLEN & ERNÄHRUNG | `#leistung-stillen-ernaehrung` | Nummer, Titel, kurze Einleitung, Unterzeile | Originaleinleitung und alle 11 Punkte, einschließlich erweiterter Stillberatung und Beikoststart |
| 05 · RUND UMS BABY | `#leistung-rund-ums-baby` | Nummer, Titel, kurze Einleitung, Unterzeile | Originaleinleitung, Kinderschlafberatung (5 Punkte), Ernährung & Beikost (4), individuelle Beratung mit vollständigem Absatz |

Alle **94 Texteinträge und 58 Stichpunkte** sind wortgetreu und in Originalreihenfolge vorhanden. Wiederholungen, die Marina selbst in mehreren Leistungsbereichen verwendet (etwa Beikost und Unterstützung bei Fragen), bleiben ausdrücklich erhalten. Keine Leistung wurde zusammengefasst oder gestrichen. `NACH DEM ÖFFNEN:` ist eine Strukturvorgabe der Quelldatei und wird durch den aufklappbaren Detailbereich umgesetzt, nicht als redaktioneller Text gezeigt. `[Mehr erfahren ↓]` wird zur echten Bedienaktion; die eckigen Markdown-Klammern sind keine Leistungsinformation.

## Ersetzte alte Platzhalter

- Allgemeine Überschrift „Was Hebammenhilfe umfasst“, generische Einleitung und drei allgemeine Phasenbeschreibungen vollständig ersetzt. Die allgemeine Aussage, Hebammen könnten Geburten begleiten, wird nicht als Marina-Angebot übernommen: Die neue Quelle bestätigt individuelle Vorbereitung, nicht Geburtsbegleitung.
- Hinweis „Welche dieser Bereiche Marina konkret anbietet … wird bei der Anfrage geklärt“ entfernt. Die Leistungen sind nun bestätigt. Individuelle Kapazität, Wohnort und Zeitraum bleiben weiterhin Gegenstand der Anfrage.
- Beide alten `orientation`-Übersetzungsblöcke aus `src/main.js` entfernt, damit keine parallele veraltete Fassung bestehen bleibt.
- Vier Bildkarten und ihre Bedienung bleiben erhalten. Sie zeigen weiterhin Anfrageanlässe, nicht eine unvollständige Vierer-Liste der fünf Leistungen. Nur Karte 02 benennt nun persönliche Geburts-/Wochenbettvorbereitung direkt; Karte 04 umfasst auch den bestätigten Kinderschlaf. Keine erneute Detailauflistung in den Karten.
- FAQ „Was sollte ich vor einer Betreuung klären?“ auf Wohnort, Zeitraum und Ablauf konzentriert; kein erneutes Infragestellen des jetzt bekannten Leistungsspektrums. Versicherungs- und Notfalltexte unverändert.
- Hero, Review-Komponente samt Daten und Ladeverhalten, Kontaktbereich, Bildassets, globale CSS-Regeln und Legal-Seiten unverändert.

## Daten und Pflege

- Deutsche Quelle: ausschließlich `MARINA_LEISTUNGEN.md`, unverändert.
- `scripts/prepare-services.mjs` erzeugt `src/data/services/services.de.json` und den markierten HTML-Abschnitt in `index.html`. Ausführliche DE-Inhalte sind dadurch auch ohne JavaScript lesbar und mit nativen `details` bedienbar.
- `npm run services:prepare` aktualisiert beides; läuft auch vor `dev` und `build`. `node scripts/prepare-services.mjs --check` prüft ohne Schreiben. Unerwartete Strukturänderungen und unvollständige Übersetzungsschlüssel führen bewusst zu Fehlern.
- `src/marina-services.js` übersetzt vorhandene Textknoten, ohne beim Sprachwechsel geöffnete Bereiche oder Fokus zu zerstören. Keine Netzwerkabfragen oder zusätzlichen Bibliotheken.

## Russische Übersetzung: Prüfung durch Marina offen

Die gesamte neue RU-Leistungsfassung in `src/data/services/services.ru.json` wurde von uns aus dem bestätigten deutschen Original erstellt, **nicht von Marina bestätigt**. `reviewStatus` ist ausdrücklich `pending-marina-review`. Alle fünf Bereiche einschließlich sämtlicher Einleitungen, Unterzeilen, Unterüberschriften, Absätze und Einzelpunkte müssen von Marina fachlich/sprachlich geprüft werden. Insbesondere: Mutterschaftsrichtlinien/Mutterpass, Vorsorge im Wechsel, vorzeitige Wehentätigkeit, Rückbildung/Beckenboden, Prophylaxen, erweiterte Stillberatung und Kinderschlaf. Es wurden keine Indikationen, Erfolgsaussagen, Abrechnungszusagen oder medizinischen Handlungsanweisungen ergänzt.

Auch die neu angepassten RU-Kurztexte der Karten 02/04, der organisatorischen FAQ-Antwort und die neue Bereichs-/Bedienbeschriftung wurden von uns formuliert und sollten mitgeprüft werden. Bestehende Reviewtexte werden weiterhin nicht übersetzt.

## Offene Fragen außerhalb der Umsetzung

- Marina: RU-Übersetzungsentwurf prüfen/freigeben. Der deutsche Wortlaut benötigt keine neue inhaltliche Ergänzung.
- Keine unbelegten Aussagen zu Kursformaten, Kosten/Kassenabrechnung, Einsatzradius, konkreten Terminen oder Geburtsbegleitung ergänzt; die Quelle beantwortet diese Punkte nicht näher.
- Bereits bestehende Legal-/Release-Nachpflege, insbesondere alte Elfsight-Aussagen in `datenschutz.html`, bleibt separat offen. Keine Legal-Texte in diesem Auftrag umgeschrieben.
