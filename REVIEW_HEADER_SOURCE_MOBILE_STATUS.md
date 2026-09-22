# Review-Ergänzungen: Bewertungsblock, Google-Quelle und Mobile

Abgeschlossen auf `feature/native-reviews`. Kein Push, kein Deployment.

## Git-Sicherung

- Ausgangspunkt wie beauftragt: sauberer Working Tree, `7b80e62` / `checkpoint/review-count-line-removed`.
- Vor jeder Änderung gesichert durch `checkpoint/pre-review-header-source-mobile` auf demselben Commit.
- Separater Abschlusscommit mit Tag `checkpoint/review-header-source-mobile-final`; genaue ID: `git rev-parse --short checkpoint/review-header-source-mobile-final`.

## Ausschließlich diese drei Änderungen

1. 5,0-Block: Ziffer auf großen Ansichten von maximal 84 auf 76 px reduziert, mobil von 64 auf 60 px. Die bestehende Durchschnittsbeschriftung ist nun 18 px, mobil 16 px, statt etwa 15 bzw. 14 px. Zahl und Beschriftung/Gesamtzahl teilen eine ausgerichtete erste Zeile; Datenstand und Quellenlink sitzen darunter in der Textspalte. Farben, Serifenziffer, feine Linie und großzügiger oberer Bereich bleiben erhalten. Die entfernte Zeile zur Aufteilung 62/4 bleibt vollständig entfernt.
2. Google-Quelle: zurückhaltende unterstrichene Textaktion „Rezensionen auf Google ↗“ / „Отзывы в Google ↗“ unter dem Datenstand direkt im Bewertungsblock. Kein Fremdlogo, Banner oder Embed. Exaktes Ziel ist `business.sourceUrl` aus `src/data/reviews/marina-google-reviews.json`, als einziges zusätzliches Feld `sourceUrl` in der schlanken UI-Datei. HTTPS-Host und Maps-Listing-Pfad werden beim Import validiert. Neuer Tab mit `noopener noreferrer`, ohne Referrer; zugänglicher DE/RU-Hinweis auf den neuen Tab, sichtbarer Tastaturfokus und mindestens 44 px hohe Linkfläche.
3. Ladeverhalten: bis einschließlich 719 CSS-Pixel initial 3, dann +3; ab 720 px initial 6, dann +6. Der Breakpoint entspricht dem vorhandenen einspaltigen Review-Raster. Fortschritt und Button nennen tatsächlichen Stand beziehungsweise nächste Menge, einschließlich letzter Teilgruppe. Beim Vergrößern werden nötigenfalls sechs Initialeinträge erreicht; beim Verkleinern werden keine bereits sichtbaren Rezensionen entfernt. Danach gilt jeweils die aktuelle Schrittgröße. Zurücksetzen zeigt wieder die aktuelle Initialmenge. Reihenfolge, Lesedialog und Fokus bleiben erhalten; ein beim Größenwechsel verschwindender Zurücksetzen-Button übergibt den Fokus an die erste Rezension.

Unverändert: alle Rezensionen einschließlich autorisierter Originaltexte, Reihenfolge und Zwei-Sterne-Eintrag an Position 41; Raster, Datumsanzeigen, Sterne, Weiterlesen-/Schließen-Interaktion und Line-Clamp. Keine Änderung an `index.html`, `src/main.js`, `src/style.css`, Rohdaten, verifizierten Originaldaten, Legal-Seiten oder der restlichen Website. Keine neue Abhängigkeit.

## Verifikation

Eine gezielte Implementierungs- und Prüfrunde nach `polish-website-loop`; Abschlussaudit ohne weitere umzusetzende Befunde. Die Prüfungen sichern insbesondere Größenwechsel und unveränderte Bestandsfunktionen ab, ohne zusätzliche Designänderungen auszulösen.

- `npm run build`: bestanden.
- `npm test`: 6/6 bestanden, einschließlich exakter Quelldaten, fester Reihenfolge, neuer expliziter URL-Allowlist und ungültiger Quellen-URLs.
- Review-Browsermatrix: 439/439 bestanden. 320, 375, 390, 768, 1024 und 1440 px jeweils DE/RU; zusätzliche Wechsel 719 ↔ 720, Mobile ↔ Desktop, auch bei offener Leseansicht und fokussierten Controls.
- Initialmenge, mehrfaches Nachladen, korrekte Zähler, letzte Teilgruppe, vollständige 62 Rezensionen, mobile/desktop Zurücksetzung, Sprachwechsel, Keyboard/Fokus, Reduced Motion, kurze Ansicht und Reflow geprüft. Alle Originaltexte und IDs im Browser exakt verglichen.
- Google-Link: exakte vorhandene Quelle, Sicherheitsattribute, lokalisierte Beschriftung und Fokus in allen Ansichten geprüft. Echte Enter-Aktivierung öffnete die Maps-Quelle in einem separaten Tab; die Website blieb unverändert. Testtab anschließend geschlossen. Kein automatischer Google-Aufruf und kein externes Widget; das absichtliche Öffnen des Quellenlinks ist die einzige erwartete externe Navigation.
- Vorhandene Interaction-Regression: 135/135 bestanden, einschließlich Navigation, FAQ, Kontakt, Karten, Reduced Motion und No-JavaScript-Fallback. Abschnittshöhen außerhalb der Reviews stimmen bei 1440 DE und 390 DE/RU mit der unmittelbar vorher erfassten Baseline überein.
- Beide lokalen Browserberichte: null JS-/Konsolenfehler, null fehlgeschlagene Requests, null externe Requests der Website selbst. Screenshots Desktop/Mobile und DE/RU visuell geprüft, inklusive mobiler Nachladenavigation.
- Git-Datenvergleich: gegenüber `7b80e62` ist `sourceUrl` das einzige neue UI-Datenfeld; sämtliche vorhandenen Daten sind exakt identisch. Review-CSS außerhalb des Bewertungsblocks und übrige Website-Regeln unverändert. `git diff --check` bestanden.

Berichte/Screenshots: `%TEMP%/hebamme-astra-native-reviews/` und `%TEMP%/hebamme-astra-interaction/`, jeweils `report.json`. Wiederholbare Prüfkommandos: `src/data/reviews/README.md`.

## Offene Punkte / Grenzen

Keine offenen Implementierungspunkte dieses Folgeauftrags. Bestehende separate Legal-Nachpflege zu früheren Elfsight-Aussagen bleibt unverändert offen; keine Rechtstexte umgeschrieben.

Der In-App-Browser war weiterhin durch `missing field sandboxPolicy` blockiert; verwendet wurde der vorhandene lokale Edge/CDP-Testweg mit emulierten Viewports. Kein Hardware-Gerätetest, kein Safari-/Firefox-Test und kein formelles Accessibility-Zertifikat. Der allgemeine Web-Lesezugriff konnte die Maps-Seite nicht abrufen; die korrekte Maps-Zielnavigation wurde stattdessen im lokalen Browser durch tatsächliche Linkaktivierung geprüft. Eine weitergehende Prüfung der Google-eigenen Oberfläche war nicht Teil der lokalen Widget-Prüfung.
