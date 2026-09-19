# Projektverlauf und lokale Sicherungspunkte

Diese Datei beschreibt die lokalen Git-Sicherungen der Website. Die Tags und Branches liegen nur auf diesem Rechner. Es wurde nichts zu GitHub übertragen.

Der aktuelle Arbeitsbranch heißt `legal-pass`. Der final geprüfte Legal-Stand liegt auf `checkpoint/legal-pass-final` (`be44e7d`). Sein exakter Ausgangspunkt ist `checkpoint/pre-legal-pass` (`da9cdd6`) auf dem weiterhin erhaltenen Branch `astra-final-review`. Sämtliche früheren Branches und Checkpoints bleiben erhalten. Rückkehrbefehle in älteren Einträgen beziehen sich auf den damaligen Arbeitsstand; zum neuesten Stand führt `git switch legal-pass`.

## Checkpoints

| Reihenfolge | Datum | Git-Tag | Commit | Zustand |
| --- | --- | --- | --- | --- |
| 1 | 19.09.2026 | `checkpoint/pre-rethink` | `22a4fbb` | Website exakt vor der Überarbeitung von Inhalt und Design. Enthält auch alle Änderungen, die zu Beginn noch nicht committed waren. |
| 2 | 19.09.2026 | `checkpoint/content-rework` | `4570c82` | Neu geordnete und vollständig überarbeitete deutsche und russische Inhalte bei weitgehend unverändertem Design. |
| 3 | 19.09.2026 | `checkpoint/design-rework` | `8ffdf1a` | Neue redaktionelle Gestaltung mit überarbeiteter Typografie, Bildinszenierung, Abschnittsrhythmik und eigenständigen mobilen Layouts. |
| 4 | 19.09.2026 | `checkpoint/final-polish` | `b30682e` | Abschließend geprüfter Stand mit Feinschliff an Text, Bildtransparenz, Navigation, Fokusverhalten und mobilen Kontaktaktionen. |
| 5 | 19.09.2026 | `checkpoint/pre-logo-assets-pass` | `8eb3f14` | Aktiver Website-Stand vor dem Logo- und Bilder-Pass, einschließlich der beiden neu bereitgestellten Logo-Kandidaten. |
| 6 | 19.09.2026 | `checkpoint/logo-assets-pass` | `89ebc5a` | Neues Logo in Header und Browser-Tab sowie drei gezielt erneuerte, weboptimierte Bildmotive. |
| 7 | 19.09.2026 | `checkpoint/pre-visual-cleanup` | `0821dd3` | Vollständiger Stand unmittelbar vor dem gezielten visuellen Cleanup. |
| 8 | 19.09.2026 | `checkpoint/visual-cleanup` | `e6926cc` | Reduzierter Hero, entfernte sichtbare Bildhinweise und ein bildstarker Abschluss im Kontaktbereich. |
| 9 | 19.09.2026 | `checkpoint/pre-content-cta-cleanup` | `34b309a` | Dokumentierter Stand unmittelbar vor dem inhaltlichen Cleanup und der CTA-Überarbeitung. |
| 10 | 19.09.2026 | `checkpoint/content-cta-cleanup` | `50f61ae` | Strafferer unterer Seitenbereich mit kompakter Erstkontakt-Hilfe und überarbeitetem Buttonsystem. |
| 11 | 19.09.2026 | `checkpoint/pre-content-depth-pass` | `fbbb37f` | Vollständiger Stand vor der fachlichen Vertiefung und neuen Informationsarchitektur. |
| 12 | 19.09.2026 | `checkpoint/content-depth` | `dde7b78` | Nutzbarer Zwischenstand mit fachlicher Orientierung, überarbeiteten Anfrageanlässen, bilingualem FAQ und Quellenhinweisen. |
| 13 | 19.09.2026 | `checkpoint/content-depth-final` | `e879399` | Final geprüfter Content-Depth-Stand mit gestrafften Texten, korrekten Ankerabständen und vollständigen Responsive- und Tastaturtests. |
| 14 | 19.09.2026 | `checkpoint/pre-astra-final-review` | `5c605e8` | Exakter sauberer Ausgangspunkt des unabhängigen Reviews einschließlich der bisherigen Dokumentation. |
| 15 | 19.09.2026 | `checkpoint/astra-final-review` | `0eec8e1` | Vier gezielte Verbesserungen an Abschnittsproportionen, FAQ-Kürzung und barrierefreier Inhaltsbezeichnung. |
| 16 | 19.09.2026 | `checkpoint/pre-legal-pass` | `da9cdd6` | Vollständiger Website-Stand unmittelbar vor dem Legal- und Datenschutz-Pass. |
| 17 | 19.09.2026 | `checkpoint/legal-content` | `80acd58` | Überarbeitete Rechtseiten und datenschutzfreundliche Technik einschließlich lokaler Fonts und Elfsight-Zwei-Klick-Lösung. |
| 18 | 19.09.2026 | `checkpoint/legal-pass-final` | `be44e7d` | Final geprüfter Legal-Pass; Elfsight lädt für die lokale Entwicklungsphase wieder automatisch und soll vor Veröffentlichung entfernt werden. |

### 1. `checkpoint/pre-rethink`

Dieser Stand wurde vor jeder Änderung gesichert. Gegenüber dem davor liegenden Repository-Stand enthält er die bereits vorhandenen lokalen Anpassungen an Startseite, Rechtstexten, CSS, JavaScript und Favicon. Er ist der verlässliche Rücksprungpunkt, falls die gesamte Überarbeitung verworfen werden soll.

### 2. `checkpoint/content-rework`

Dieser Stand trennt die Aufgaben der Abschnitte klarer: Der Einstieg nennt Name, Ort, Sprachen und Kontaktweg; die vier Bildkarten sind als Anlässe für eine Anfrage formuliert; der Ablauf erklärt konkret, welche Angaben in die erste Nachricht gehören. Unbelegte Aussagen zur Arbeitsweise wurden entfernt. Die russische Fassung wurde eigenständig und natürlich formuliert. Das Design entspricht an diesem Punkt noch weitgehend dem Ausgangsstand.

### 3. `checkpoint/design-rework`

Dieser Stand enthält die neue visuelle Richtung. Große Typografie, klare Flächen und bewusst gesetzte Bildformate ersetzen die vorherigen runden Karten, Schatten und Dekorverläufe. Die vier bildstarken Karten bleiben erhalten und sind auf dem Desktop versetzt, auf kleinen Bildschirmen bewusst horizontal bedienbar. Hero, Anfrage, Marina, Bewertungen und Kontakt besitzen unterschiedliche Rhythmen. Mobile Navigation, Fokusdarstellung und reduzierte Bewegung bleiben berücksichtigt.

### 4. `checkpoint/final-polish`

Dieser Stand enthält die abschließende, getestete Fassung. Bildhinweise machen bei den beiden besonders personenbezogen wirkenden Motiven ausdrücklich klar, dass Marina nicht abgebildet ist. Die Navigation ist im geschlossenen Zustand auch für die Tastatur deaktiviert, die mobile Schnellkontaktleiste verdeckt weniger Inhalt und Texte wurden ein letztes Mal auf konkrete, belegte Aussagen reduziert.

### 5. `checkpoint/pre-logo-assets-pass`

Dieser Tag markiert den vollständigen Stand unmittelbar vor der Integration des neuen Logos und der Überarbeitung einzelner Bildassets. Er enthält bereits die unveränderten Quelldateien `assets/logo.jpeg` und `assets/logo_big.jpeg`. Der dafür angelegte Arbeitsbranch heißt `asset-logo-pass`; der zuvor aktive Entwicklungsstand bleibt zusätzlich auf `rework-content-design` erhalten.

### 6. `checkpoint/logo-assets-pass`

Für die Logo-Ableitung wurde `assets/logo_big.jpeg` gewählt, weil die Datei mit 906 × 1280 Pixeln eine deutlich bessere Ausgangsauflösung als `assets/logo.jpeg` mit 271 × 323 Pixeln besitzt. Da die ausgeschriebene Wortmarke im Favicon unlesbar wäre und im Header Name und Beruf bereits als Text stehen, verwenden Header und Browser-Tab dasselbe freigestellte Symbol in jeweils passender Auflösung. Die Ableitungen liegen in `public/images/brand-mark.png`, `public/favicon.png` und `public/apple-touch-icon.png`; beide gelieferten Quelldateien bleiben unverändert erhalten.

Gezielt ersetzt wurden das Hero-Motiv, das Bild im Marina-Abschnitt und das Kontaktmotiv. Die neuen Dateien `public/images/hero-editorial.jpg`, `public/images/about-detail.jpg` und `public/images/contact-phone.jpg` zeigen anonyme beziehungsweise nicht personenbezogene Szenen und reduzieren damit den Eindruck eines erfundenen Marina-Porträts. Geändert wurden vor allem `index.html`, `impressum.html`, `datenschutz.html`, `src/main.js` und `src/style.css`.

Diesen Stand später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-logo-assets checkpoint/logo-assets-pass
```

Zum aktiven Arbeitsstand zurückkehren:

```bash
git switch content-depth-pass
```

### 7. `checkpoint/pre-visual-cleanup`

Dieser Tag zeigt den unveränderten Stand vor dem visuellen Cleanup. Der Working Tree war sauber, deshalb war kein zusätzlicher Sicherungs-Commit nötig. Der Tag liegt auf Commit `0821dd3` und bewahrt damit auch die zuletzt vervollständigte Projekthistorie.

### 8. `checkpoint/visual-cleanup`

In diesem Stand sind die sichtbaren Hinweise auf Hero- und Marina-Bild entfernt; die neutralen Alternativtexte bleiben erhalten. Die Hero-Überschrift ist moderat kleiner und etwas breiter gesetzt. Der technische Erklärungssatz über Elfsight ist aus dem Bewertungsbereich entfernt, während das Widget selbst unverändert weiterlädt. Das bereits vorhandene Bild `public/images/support.jpg` bildet nun innerhalb des Kontaktbereichs einen breiten Abschluss mit einem eigenen mobilen Ausschnitt. Die Website-Änderungen liegen in `index.html`, `src/main.js` und `src/style.css`.

Diesen Stand später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-visual-cleanup checkpoint/visual-cleanup
```

Zum aktiven Arbeitsstand zurückkehren:

```bash
git switch content-depth-pass
```

### 9. `checkpoint/pre-content-cta-cleanup` --- hier war gut oder +-1

Dieser Tag bewahrt den vollständigen Stand vor dem inhaltlich-visuellen Cleanup. Der Working Tree war sauber, daher liegt der Tag ohne zusätzlichen Zwischen-Commit direkt auf Commit `34b309a`.

### 10. `checkpoint/content-cta-cleanup` --- 

Der dekorative Doppelbild-Abschluss und die kleine Zeile „Nicht sicher, ob dein Anliegen passt?“ wurden entfernt. Der frühere große Anfragebereich mit Bildcollage wurde als kompakter Informationsblock direkt vor dem Kontakt neu aufgebaut. Er erklärt knapp, wann eine Anfrage sinnvoll ist, welche Angaben in die erste Nachricht gehören, welche Sprachen möglich sind und dass WhatsApp unter `0176 23488396` der schnellste Kontaktweg ist. Wiederholungen in Hero, Leistungsintro, Marina- und Kontaktbereich wurden reduziert; Deutsch und Russisch wurden gemeinsam überarbeitet.

Die Buttons verwenden nun eine präzisere, leicht kantige Form, klarere Primär- und Sekundärzustände sowie zurückhaltende Hover- und sichtbare Tastaturfokuszustände. Die mobilen Touch-Ziele bleiben mindestens 52 Pixel hoch. Abschnittssprünge berücksichtigen den Sticky-Header, und der schwebende Schnellkontakt wird im Anfrage- und Kontaktbereich ausgeblendet, damit er keine Inhalte verdeckt. Die Änderungen liegen in `index.html`, `src/main.js` und `src/style.css`.

Diesen Stand später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-content-cta-cleanup checkpoint/content-cta-cleanup
```

Zum aktiven Arbeitsstand zurückkehren:

```bash
git switch content-depth-pass
```

### 11. `checkpoint/pre-content-depth-pass`

Dieser Tag markiert den vollständigen Ausgangspunkt vor der fachlichen Vertiefung der Website. Er enthält auch die zuletzt ergänzten persönlichen Bewertungsnotizen zu den vorherigen Checkpoints. Der neue Arbeitsbranch für diesen Durchgang heißt `content-depth-pass`.

Diesen Ausgangspunkt später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-pre-content-depth checkpoint/pre-content-depth-pass
```

Zum aktuellen Arbeitsstand zurückkehren:

```bash
git switch content-depth-pass
```

### 12. `checkpoint/content-depth`

Dieser Zwischenstand enthält die neue Informationsarchitektur in einer bereits gebauten und visuell geprüften Fassung. Neu sind der allgemeine Abschnitt „Hebammenhilfe, kurz erklärt“, vier klar voneinander getrennte Anfrageanlässe, das native und per Tastatur bedienbare FAQ „Gut zu wissen“ sowie der zusammengeführte Abschluss für erste Anfrage und Kontakt. Alle neuen Inhalte liegen auf Deutsch und Russisch vor.

Allgemeine Informationen werden ausdrücklich nicht als bestätigte Leistungen von Marina dargestellt. Verwendet wurden offizielle beziehungsweise fachlich verlässliche Informationen von gesund.bund.de, dem GKV-Spitzenverband, dem Deutschen Hebammenverband, dem Bundesgesundheitsministerium und familienplanung.de. Die genaue Zuordnung der Aussagen ist in `CONTENT_SOURCES.md` dokumentiert. Es wurden keine Bilder ersetzt oder neu erzeugt, weil die vorhandenen Motive weiterhin zu ihren Abschnitten passen.

Diesen Stand später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-content-depth checkpoint/content-depth
```

Zum aktuellen Arbeitsstand zurückkehren:

```bash
git switch content-depth-pass
```

### 13. `checkpoint/content-depth-final`

Dieser Tag ist der fertige Stand des Content-Depth-Passes. Gegenüber dem Zwischenstand wurde die erste Bildkarte klarer vom FAQ abgegrenzt, eine wiederholte Aussage aus dem Marina-Abschnitt entfernt und die russische Fassung sprachlich gestrafft. Die Quellenzeile benennt nun eindeutig, dass die Links allgemeine Informationen belegen. Doppelte Abstände bei internen Ankersprüngen wurden entfernt, und die mobilen Sprachschalter besitzen eine Touchfläche von mindestens 44 × 44 Pixeln.

Die vorhandenen Bilder wurden vollständig geprüft und beibehalten. Es wurde kein neues Motiv erzeugt und keine Originaldatei überschrieben. Der Produktions-Build wurde auf 320, 375, 390, 768, 1024 und 1440 Pixeln in Deutsch und Russisch geprüft. Kontrolliert wurden unter anderem Bildpfade, Navigation, Anker, Elfsight-Bewertungen, FAQ per Tastatur, mobiler Kartenstreifen per Pfeiltaste, Mobile-Menü, Fokuszustände, Reduced Motion, Telefon, WhatsApp, Rechtseiten und Favicon.

Die allgemeinen Fachinformationen stützen sich auf gesund.bund.de, den GKV-Spitzenverband, den Deutschen Hebammenverband, das Bundesgesundheitsministerium und familienplanung.de. Sie werden nicht als bestätigte Leistungen oder Verfügbarkeit von Marina Rymmer dargestellt. Die vollständige Zuordnung steht in `CONTENT_SOURCES.md`.

Diesen fertigen Stand später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-content-depth-final checkpoint/content-depth-final
```

Zum aktuellen Entwicklungsstand zurückkehren:

```bash
git switch content-depth-pass
```

### 14–15. Unabhängiger Abschlussreview

Ausgangsbranch: `content-depth-pass`. Neuer Arbeitsbranch: `astra-final-review`. Der Working Tree war zu Beginn sauber; Tag `checkpoint/pre-astra-final-review` sichert deshalb den unveränderten HEAD `5c605e8`. Der abschließende Website-Commit ist `0eec8e1`; die Historie wurde danach separat ergänzt.

Prioritäten nach tatsächlicher Sichtprüfung in Chrome:

- **A – umgesetzt:** Die Desktop-Überschrift „Hebammenhilfe“ ragte mit etwa 578 Pixeln Textbreite aus ihrer 439 Pixel breiten Spalte. Eine abschnittsspezifische Schriftgröße und passende Breitenbegrenzung beheben dies. Das Bild im Marina-Bereich bestimmt nicht länger die Abschnittshöhe durch seine intrinsischen Maße; der Desktop-Abschnitt ist nun 640 Pixel hoch und passt besser zum kurzen Inhalt. Der FAQ-Einleitungssatz ohne zusätzlichen Informationswert entfällt in DE/RU. Die Screenreader-Bezeichnung der vier Karten lautet nun „Anfrageanlässe“ beziehungsweise „Поводы для обращения“, damit auch dort kein bestätigtes Leistungsangebot suggeriert wird.
- **B – nicht umgesetzt:** Weitere Änderungen an Weißraum, Hero-Größe, Bildauswahl oder Buttonform wären überwiegend Geschmacksfragen.
- **C – erhalten:** Fachliche Aussagen, Abschnittsreihenfolge, vier Bildkarten, Farbwelt, vorhandene Bilder, Kontaktabschluss, Reveal-Logik und Elfsight-Lazy-Loading. Die vorhandenen Inhalte decken die wichtigen Fragen ab; neue Abschnitte würden eher wiederholen. Es wurden keine fachlichen Aussagen ergänzt, keine Marina-spezifischen Angaben erfunden und keine Bilder erzeugt, ersetzt oder gelöscht.

Prüfung am Produktions-Build: 390 Pixel DE/RU und 1440 Pixel DE, ergänzende Kontrolle der betroffenen Überschrift bei 1024 Pixeln. Kein horizontaler Overflow, keine kaputten lokalen Bilder, keine fehlenden Übersetzungsschlüssel oder Anker und keine JavaScript-Ausnahmen. FAQ mit Enter und sichtbarem Fokus, alle Antworten geöffnet, Kartenstreifen mit Pfeiltaste, Mobile-Menü inklusive Escape und Ankersprung, Reduced Motion sowie FAQ-Inhalt ohne JavaScript wurden geprüft. Telefon-/WhatsApp-Ziele stimmen; Rechtseiten, Favicon und alle vier externen Quellenlinks waren erreichbar. Elfsight lädt weiterhin; einzelne externe Bewertungs-Avatare können zeitversetzt nachladen. Build und `git diff --check` erfolgreich. Temporäre Prüfdaten wurden nicht committed.

Vor Veröffentlichung weiterhin offen: Rechtstexte enthalten noch ausdrücklich markierte Pflichtangaben und eine Beispiel-E-Mail-Adresse. Diese Entwürfe müssen anhand der echten Angaben vervollständigt werden; externe Google Fonts, Elfsight und WhatsApp sind bei der Datenschutzprüfung zu berücksichtigen. Der Review macht diese Seiten nicht rechtlich fertig.

Vorherigen Stand ansehen, ohne die aktuelle Entwicklung zu überschreiben:

```bash
git status
git switch -c ansehen-vor-astra checkpoint/pre-astra-final-review
```

Nur bei sauberem Working Tree wechseln; eigene offene Änderungen zuerst sichern. Der neue Besichtigungsbranch bewahrt den alten Stand, während `astra-final-review` unverändert bleibt. Zum neuesten Stand zurückkehren:

```bash
git switch astra-final-review
```

Den geprüften Website-Checkpoint separat öffnen:

```bash
git switch -c ansehen-astra-final checkpoint/astra-final-review
```

Alle Befehle arbeiten lokal. Es wurde nichts gepusht oder deployt.

### 16. `checkpoint/pre-legal-pass`

Dieser Tag bewahrt den exakten Stand vor dem Legal- und Datenschutz-Pass. Er liegt auf Commit `da9cdd6`; der Working Tree war beim Setzen sauber. Der damalige Branch `astra-final-review` bleibt unverändert erhalten.

Diesen Ausgangspunkt in einem neuen Besichtigungs-Branch öffnen:

```bash
git switch -c ansehen-vor-legal checkpoint/pre-legal-pass
```

### 17. `checkpoint/legal-content`

Dieser Zwischenstand auf Commit `80acd58` enthält das neu aufgebaute Impressum mit vollständiger Anschrift, Telefon, WhatsApp, beruflicher Aufsichtsbehörde und den verifizierten berufsrechtlichen Fundstellen. Die Datenschutzerklärung beschreibt GitHub Pages, Browserspeicher, Elfsight, WhatsApp, Telefon, Empfänger, Betroffenenrechte und die zuständige Datenschutzaufsicht anhand des damaligen technischen Audits. Der eindeutige Entwicklungsplatzhalter `BITTE-ERSETZEN@example.invalid` ist nicht verlinkt und bleibt als Release-Blocker dokumentiert.

Inter und Playfair Display werden in diesem Stand lokal aus dem Repository geladen. Die Startseite fordert bei der ersten WhatsApp-Anfrage nicht zur unaufgeforderten Übermittlung medizinischer Befunde, Fotos oder ausführlicher Gesundheitsdaten auf. `LEGAL_RELEASE_CHECKLIST.md` nennt die noch von Marina beziehungsweise vor Veröffentlichung zu klärenden Punkte.

`checkpoint/legal-content` enthält bewusst die zwischenzeitlich umgesetzte Zwei-Klick-Lösung für Elfsight: Das Review-Widget lädt dort erst nach Betätigung des Buttons „Bewertungen laden“.

Diesen Zwischenstand separat ansehen:

```bash
git switch -c ansehen-legal-content checkpoint/legal-content
```

### 18. `checkpoint/legal-pass-final`

Dieser Tag liegt auf Commit `be44e7d` und markiert den final geprüften technischen Stand des Legal-Passes. Auf ausdrücklichen Wunsch wurde nach dem Zwischencheckpoint ausschließlich die Elfsight-Zwei-Klick-Lösung für die lokale Entwicklungsphase entfernt. Das Widget lädt nun ohne Nutzerklick automatisch per `IntersectionObserver`, sobald der Bewertungsbereich in die Nähe des Viewports kommt. Script und Widget werden jeweils nur einmal initialisiert; ein Consent- oder Ladeplatzhalter ist nicht sichtbar.

Die öffentliche Datenschutzerklärung wurde wegen dieser ausdrücklich temporären Entwicklungsentscheidung nicht erneut umgeschrieben. Elfsight muss vor dem öffentlichen Release vollständig entfernt und durch die endgültige Bewertungsdarstellung ersetzt werden. Danach müssen die realen Datenflüsse und der Elfsight-Abschnitt der Datenschutzerklärung erneut geprüft werden.

Erhalten bleiben die lokal eingebundenen Schriften, das überarbeitete Impressum, die vollständige Datenschutzerklärung, die Datenschutzaufsicht, die WhatsApp-Datensparsamkeit und das responsive Legal-Page-Design. Grundlage der Angaben waren § 5 DDG und § 25 TDDDG bei `gesetze-im-internet.de`, Art. 13 DSGVO bei EUR-Lex, das Hebammengesetz, die Bayerische Hebammenberufsordnung, der Nürnberger Behördenwegweiser für Heilberufe, das BayLDA sowie die offiziellen Datenschutz- und GitHub-Pages-Hinweise von GitHub.

Geprüft wurden der Produktions-Build, 1440 Pixel DE, 390 Pixel DE/RU, automatisches einmaliges Review-Laden, Mobile-Menü, FAQ per Tastatur, Reduced Motion, lokale Bilder, interne Anker, Telefon, WhatsApp, externe Quellen und fehlende Google-Font-Requests. Impressum und Datenschutz wurden auf 1440 und 390 Pixeln ohne horizontalen Overflow, Browserfehler oder defekte Assets geprüft. Es wurde nichts gepusht oder deployt.

Diesen Stand separat ansehen:

```bash
git switch -c ansehen-legal-final checkpoint/legal-pass-final
```

Zum aktuellen Entwicklungsbranch zurückkehren:

```bash
git switch legal-pass
```

## Einen Checkpoint nur ansehen

Die folgenden Befehle verändern oder löschen keinen gespeicherten Stand.

1. Prüfen, ob noch eigene Änderungen offen sind:

   ```bash
   git status
   ```

2. Den gewünschten Stand in einem neuen Besichtigungs-Branch öffnen, zum Beispiel den ursprünglichen Stand:

   ```bash
   git switch -c ansehen-pre-rethink checkpoint/pre-rethink
   ```

3. Später wieder zum aktuellen Entwicklungsstand zurückkehren:

   ```bash
   git switch content-depth-pass
   ```

Der zusätzliche Branch `ansehen-pre-rethink` kann später gelöscht werden, sobald er nicht mehr benötigt wird:

```bash
git branch -d ansehen-pre-rethink
```

## Auf einem Checkpoint neu weiterarbeiten

Wenn eine neue Variante auf Basis eines älteren Checkpoints entstehen soll, einen neuen Branch mit einem neuen Namen anlegen:

```bash
git switch -c neue-variante checkpoint/pre-rethink
```

So bleiben sowohl der aktuelle Entwicklungsstand als auch der alte Checkpoint erhalten.

## Den aktuellen Arbeitsbranch wirklich zurücksetzen

Dieser Weg verwirft alle späteren Commits und nicht gespeicherten Änderungen auf `rework-content-design`. Deshalb zuerst mit `git status` prüfen und nur verwenden, wenn die spätere Überarbeitung wirklich nicht mehr gebraucht wird:

```bash
git switch rework-content-design
git reset --hard checkpoint/pre-rethink
```

Der sichere Standard ist die Variante mit einem neuen Branch aus dem vorherigen Abschnitt.

## Nützliche Prüf-Befehle

Alle Checkpoints anzeigen:

```bash
git tag --list "checkpoint/*"
```

Die zugehörigen Commits anzeigen:

```bash
git log --oneline --decorate --all
```

Den Unterschied zwischen dem ursprünglichen Stand und dem aktuellen Stand ansehen:

```bash
git diff checkpoint/pre-rethink..content-depth-pass
```
