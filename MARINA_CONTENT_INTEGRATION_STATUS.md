# Integration der bestätigten Marina-Leistungen

Datum: 01.11.2026. Branch: `feature/native-reviews`. Kein Push, kein Deployment.

## Arbeitsstand / Wiederaufnahme

1. Pre-Checkpoint abgeschlossen: `d9efa10` / `checkpoint/pre-marina-services`. Der zuvor unversionierte vollständige Originaltext wurde unverändert mitgesichert; Website-Ausgangsstand `84fa2b8`.
2. Inhaltsarchitektur, vollständige DE-Daten, statischer HTML-Fallback, RU-Übersetzungsentwurf und native Expand/Collapse-Logik integriert. Funktionaler Zwischencommit: `3b1510c` / `checkpoint/marina-services-functional`.
3. Design-/Responsive-/Interaction-Polish abgeschlossen. Finaler Commit über `checkpoint/marina-services-final` auflösbar. Die vollständige Inhaltszuordnung und die offenen Freigaben stehen unten. Kein Push, kein Deployment.

## Architektur und Gestaltung

Fünf native, unabhängig voneinander aufklappbare Bereiche ersetzen die bisherige allgemeine Dreier-Orientierung. Alle Originaleinleitungen und Unterzeilen sind direkt sichtbar. Vollständige Details bleiben jederzeit erreichbar, auch ohne JavaScript. Teilen eines individuellen Leistungsankers öffnet mit JavaScript den passenden Bereich. Sprachwechsel und Viewportwechsel erhalten bereits geöffnete Bereiche.

Die vorhandene warme Rosefläche, Serifentypografie, feinen Linien und offene Gestaltung bleiben die Basis. Desktop zeigt passende Detailgruppen in zwei Spalten; Tablet und Mobile zeigen dieselbe Reihenfolge einspaltig. Keine zusätzlichen Kartenboxen, Schatten, Bilder oder Bibliotheken. Neben dem nativen Summary gibt es am Ende langer Inhalte eine Schließen-Aktion mit sichtbarer Fokusrückgabe zum Anfang.

Drei Umsetzungs-/Prüfrunden: vollständige Inhaltsintegration, editoriale Desktop-/Mobile-Komposition, abschließende Korrektur der mobilen Nummernspalte und des 320-px-Umbruchs. Dabei wurden keine deutschen Originaltexte gekürzt. Zwei rein sprachliche RU-Satzstellungen wurden geglättet; die fachliche Freigabe bleibt offen.

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

Alle **94 Texteinträge und 58 Stichpunkte** sind wortgetreu vorhanden. Im Bereich „Stillen & Ernährung“ wurde „Erweiterte Stillberatung“ für die vom Nutzer gewünschte Gruppierung vorgezogen; die Quelldaten behalten ihre Originalreihenfolge. Die ergänzten Zwischenüberschriften „Stillberatung & Milchbildung“ und „Flaschenernährung, Abstillen & Beikost“ dienen ausschließlich der Gliederung. Ihre von uns erstellten russischen Übersetzungen müssen wie die übrigen neuen RU-Texte noch von Marina geprüft werden. Wiederholungen, die Marina selbst in mehreren Leistungsbereichen verwendet (etwa Beikost und Unterstützung bei Fragen), bleiben ausdrücklich erhalten. Keine Leistung wurde zusammengefasst oder gestrichen. `NACH DEM ÖFFNEN:` ist eine Strukturvorgabe der Quelldatei und wird durch den aufklappbaren Detailbereich umgesetzt, nicht als redaktioneller Text gezeigt. `[Mehr erfahren ↓]` wird zur echten Bedienaktion; die eckigen Markdown-Klammern sind keine Leistungsinformation.

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

Die zusätzlichen Zwischenüberschriften in Bereich 02 („Geburt verstehen & planen“ und „Bewegung, Entspannung & erste Stunden“) wurden für die visuelle Gruppierung ergänzt. Die neun Originalpunkte bleiben unverändert, werden jedoch in der Darstellung umsortiert; Einleitung und Schlussabsatz bleiben erhalten. Die dazu von uns erstellten russischen Überschriften sind ebenfalls ungeprüft und müssen von Marina freigegeben werden.

Die gesamte neue RU-Leistungsfassung in `src/data/services/services.ru.json` wurde von uns aus dem bestätigten deutschen Original erstellt, **nicht von Marina bestätigt**. `reviewStatus` ist ausdrücklich `pending-marina-review`. Alle fünf Bereiche einschließlich sämtlicher Einleitungen, Unterzeilen, Unterüberschriften, Absätze und Einzelpunkte müssen von Marina fachlich/sprachlich geprüft werden. Insbesondere: Mutterschaftsrichtlinien/Mutterpass, Vorsorge im Wechsel, vorzeitige Wehentätigkeit, Rückbildung/Beckenboden, Prophylaxen, erweiterte Stillberatung und Kinderschlaf. Es wurden keine Indikationen, Erfolgsaussagen, Abrechnungszusagen oder medizinischen Handlungsanweisungen ergänzt.

Auch die neu angepassten RU-Kurztexte der Karten 02/04, der organisatorischen FAQ-Antwort und die neue Bereichs-/Bedienbeschriftung wurden von uns formuliert und sollten mitgeprüft werden. Bestehende Reviewtexte werden weiterhin nicht übersetzt.

## Prüfung und Ergebnisse

- `npm run build`: erfolgreich; ausschließlich lokale Assets, keine neue Abhängigkeit.
- `npm test`: **12/12** bestanden (sechs Reviewtests und sechs Inhaltstests). Unabhängiger zeilenweiser Abgleich gegen das Original bestätigt 94 Texteinträge, 58 Einzelpunkte und die originale Reihenfolge der Quelldaten. Die Darstellung gruppiert im Bereich 04 einen Punkt wie oben beschrieben um. Die Originaldatei ist gegenüber dem Pre-Checkpoint unverändert.
- `node scripts/prepare-services.mjs --check`: generierte DE-Daten und vollständiges HTML reproduzierbar; alle RU-Schlüssel vollständig.
- **487/487 Leistungs-Browserchecks**: 320, 375, 390, 768, 1024 und 1440 CSS-Pixel, jeweils DE/RU. Alle fünf Bereiche geschlossen/geöffnet, mehrere gleichzeitig geöffnet, vollständige Texte, Enter/Space, Pointer, Fokus, Schließen am Ende, Sprach-/Viewportwechsel, Reduced Motion, Direktanker und No-JavaScript-Fallback. Keine horizontalen Overflows oder abgeschnittenen Inhalte.
- **439/439 native Reviewchecks**: unveränderte Daten/Reihenfolge, Zwei-Sterne-Bewertung an Position 41, Desktop 6/+6, Mobile 3/+3, vollständiges Nachladen, Reader, Google-Link, Fokus und Breakpointwechsel.
- **135/135 allgemeine Interaktionschecks**: Navigation, FAQ, Kontakt, Karten/Swipe, Nummern, Fokus, Reduced Motion, No-JavaScript und Ankerabstände. Nach der letzten 320-px-Korrektur erneut vollständig bestanden.
- **400/400 bestehende Layout-/Sticky-Prüfungen**: einschließlich kleiner Viewporthöhen, Landscape, Safe-Area, Kontaktübergabe und Textkontrasten (geprüfte kleine Texte mindestens 5:1).
- Visuelle Screenshots kontrolliert: Desktop DE/RU, Mobile 320/390 DE/RU, Übersicht und geöffnete Details. Die abschließende 320-px-Korrektur gibt dem langen Titel mehr Raum, ohne die Titelgröße zu reduzieren. Keine neue medizinische Aussage oder Kürzung.
- Alle Browserläufe: **0 JS-/Console-Fehler, 0 fehlgeschlagene Requests**. Leistungs- und Reviewtests bestätigen **0 externe Requests** beim Laden/Bedienen. Impressum, Datenschutz und beide Favicons liefern HTTP 200. Keine Elfsight-Laufzeitintegration; historische Provenienz in Rohdaten bleibt unverändert.
- `git diff --check`: bestanden. Git-Vergleich bestätigt unveränderte Review-Dateien/-Daten, globale Styles und Legal-Dateien. Hero, Kontakt und Reviews zusätzlich gegen die vorab erfassten Abschnittshöhen geprüft. Testselektoren wurden auf die neue Leistungssektion aktualisiert; nur bewusst geänderte Leistungs-/Karten-/FAQ-Bereiche sind vom alten Höhenvergleich ausgenommen.

Die drei Runden sind abgeschlossen; keine bekannte technische Umsetzungsblockade. Die offene RU-Freigabe ist kein bestandener fachlicher Audit und wird ausdrücklich nicht als solcher dargestellt.

### Browserprüfungen wiederholen

Der vorhandene lokale Edge/CDP-Runner benötigt keine zusätzliche Testbibliothek. Build und Preview starten:

```powershell
npm run build
npm run preview -- --host 127.0.0.1 --port 4175 --strictPort
```

In einem zweiten Terminal die vorhandene Baseline vor einer neuen Änderung erfassen, danach die Prüfphasen ausführen:

```powershell
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ baseline
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ marina-services
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ native-reviews
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ interaction
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ final-implementation
```

Berichte und Screenshots liegen lokal unter `%TEMP%/hebamme-astra-<phase>/`; sie werden bei erneuten Läufen überschrieben. Für diesen Auftrag wurde die Baseline vor der Integration aufgenommen. Die Browsermatrix emuliert Desktop/Mobile in Edge; kein zusätzlicher physischer iOS-/Safari-Gerätetest.

## Offene Fragen außerhalb der Umsetzung

- Marina: RU-Übersetzungsentwurf prüfen/freigeben. Der deutsche Wortlaut benötigt keine neue inhaltliche Ergänzung.
- Keine unbelegten Aussagen zu Kursformaten, Kosten/Kassenabrechnung, Einsatzradius, konkreten Terminen oder Geburtsbegleitung ergänzt; die Quelle beantwortet diese Punkte nicht näher.
- Bereits bestehende Legal-/Release-Nachpflege, insbesondere alte Elfsight-Aussagen in `datenschutz.html`, bleibt separat offen. Keine Legal-Texte in diesem Auftrag umgeschrieben.
