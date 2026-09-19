# Projektverlauf und lokale Sicherungspunkte

Diese Datei beschreibt die lokalen Git-Sicherungen der Website. Die Tags und Branches liegen nur auf diesem Rechner. Es wurde nichts zu GitHub übertragen.

Der aktuelle Arbeitsbranch heißt `asset-logo-pass`. Die aktive Website-Fassung entspricht `checkpoint/content-cta-cleanup`; danach wurde nur noch diese Verlaufsdatei um die endgültige Commit-ID ergänzt. Der vorherige Entwicklungsstand bleibt zusätzlich auf `rework-content-design` erhalten.

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
| 10 | 19.09.2026 | `checkpoint/content-cta-cleanup` | `WIRD NACH DEM COMMIT ERGÄNZT` | Strafferer unterer Seitenbereich mit kompakter Erstkontakt-Hilfe und überarbeitetem Buttonsystem. |

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
git switch asset-logo-pass
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
git switch asset-logo-pass
```

### 9. `checkpoint/pre-content-cta-cleanup`

Dieser Tag bewahrt den vollständigen Stand vor dem inhaltlich-visuellen Cleanup. Der Working Tree war sauber, daher liegt der Tag ohne zusätzlichen Zwischen-Commit direkt auf Commit `34b309a`.

### 10. `checkpoint/content-cta-cleanup`

Der dekorative Doppelbild-Abschluss und die kleine Zeile „Nicht sicher, ob dein Anliegen passt?“ wurden entfernt. Der frühere große Anfragebereich mit Bildcollage wurde als kompakter Informationsblock direkt vor dem Kontakt neu aufgebaut. Er erklärt knapp, wann eine Anfrage sinnvoll ist, welche Angaben in die erste Nachricht gehören, welche Sprachen möglich sind und dass WhatsApp unter `0176 23488396` der schnellste Kontaktweg ist. Wiederholungen in Hero, Leistungsintro, Marina- und Kontaktbereich wurden reduziert; Deutsch und Russisch wurden gemeinsam überarbeitet.

Die Buttons verwenden nun eine präzisere, leicht kantige Form, klarere Primär- und Sekundärzustände sowie zurückhaltende Hover- und sichtbare Tastaturfokuszustände. Die mobilen Touch-Ziele bleiben mindestens 52 Pixel hoch. Abschnittssprünge berücksichtigen den Sticky-Header, und der schwebende Schnellkontakt wird im Anfrage- und Kontaktbereich ausgeblendet, damit er keine Inhalte verdeckt. Die Änderungen liegen in `index.html`, `src/main.js` und `src/style.css`.

Diesen Stand später in einem neuen Branch ansehen:

```bash
git switch -c ansehen-content-cta-cleanup checkpoint/content-cta-cleanup
```

Zum aktiven Arbeitsstand zurückkehren:

```bash
git switch asset-logo-pass
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
   git switch asset-logo-pass
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
git diff checkpoint/pre-rethink..rework-content-design
```
