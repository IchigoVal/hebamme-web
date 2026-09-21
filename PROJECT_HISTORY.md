# Projektverlauf und lokale Sicherungspunkte

Diese Datei beschreibt die lokalen Git-Sicherungen der Website. Die Tags und Branches liegen nur auf diesem Rechner. Es wurde nichts zu GitHub übertragen.

Der aktuelle Arbeitsbranch heißt `feature/native-reviews`. Er enthält die eigene lokale Review-Sektion auf Basis des vollständigen Nutzerexports und der ausdrücklich freigegebenen verifizierten Originaltexte. Ausgangssicherung: `cf2fb2c` / `checkpoint/pre-native-reviews`; funktionale Integration: `55fecde` / `checkpoint/native-reviews-functional`; Design: `e6fc7e2` / `checkpoint/native-reviews-design`. Der vollständige Abschluss wird durch `checkpoint/native-reviews-final` bezeichnet. Details und Teststatus stehen in `NATIVE_REVIEWS_STATUS.md`. Sämtliche früheren Branches und Checkpoints bleiben erhalten. Rückkehrbefehle in älteren Einträgen beziehen sich auf den damaligen Arbeitsstand; zum aktuellen Stand führt `git switch feature/native-reviews`, zum früheren partiellen Review-Datensnapshot `git switch reviews-data-import`.

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
| 19 | 19.09.2026 | `checkpoint/pre-micro-polish` | `d86d800` | Exakter Projektstand vor dem abschließenden kleinen visuellen Feinschliff. |
| 20 | 19.09.2026 | `checkpoint/micro-polish-final` | `daac283` | Reduzierte Abschnittseinstiege ohne redundante Eyebrow-Labels; geprüfte DE/RU-Darstellung bei unveränderter CTA-Hierarchie. |
| 21 | 19.09.2026 | `checkpoint/number-polish-final` | `875e1c3` | Nummernmarker auf 14 px nachjustiert; Ausgangsstand des Astra-Deep-Passes. |
| 22 | 19.09.2026 | `checkpoint/pre-astra-deep-final` | `875e1c3` | Exakter unveränderter Ausgangspunkt vor dem Deep-Pass; sauberer Working Tree. |
| 23 | 19.09.2026 | `checkpoint/astra-deep-content` | `b11abc2` | Neue Rollenverteilung der Abschnitte, organisatorisches FAQ und integrierte Marina-/Anfrageinformation in DE/RU. |
| 24 | 19.09.2026 | `checkpoint/astra-deep-design` | `ce405a4` | Editorialer Namens-Hero, integrierter Kontaktabschluss, neue Review-Komposition und mobile Karten-/Navigationsbedienung. |
| 25 | 20.09.2026 | `checkpoint/astra-deep-final` | `d61af2f` | Design unverändert final geprüft; dauerhaftes Browser-Regressionsskript und Abschlussdokumentation. |
| 26 | 20.09.2026 | `checkpoint/pre-interaction-polish` | `1d76e18` | Exakter sauberer Ausgangspunkt des Interaction-Passes. |
| 27 | 20.09.2026 | `checkpoint/interaction-design` | `9ec0a53` | Editoriale Buttons und Nummern, verfeinerte Kartensteuerung, native FAQ-/Navigationszustände. |
| 28 | 20.09.2026 | `checkpoint/interaction-polish-final` | Über Final-Tag auflösbar | Interaction-Pass fertig; 134/134 gezielte Produktionsprüfungen bestanden. |
| 29 | 20.09.2026 | `checkpoint/pre-targeted-refinement` | `c4f594c` | Sauberer Ausgangspunkt vor vier gezielten Anpassungen. |
| 30 | 20.09.2026 | `checkpoint/targeted-refinement-final` | Über Final-Tag auflösbar | Mobile WhatsApp-Leiste, DE/RU-Abstand, integrierte Telefonnummer und vereinfachter Divider; 112/112 gezielte plus 134/134 Regressionsprüfungen. |
| 31 | 21.09.2026 | `checkpoint/pre-final-implementation` | `e618fe9` | Unabhängigen Abschlussaudit separat committed; Website unverändert auf Basis `5370689`. |
| 32 | 21.09.2026 | `checkpoint/final-sticky-logic` | `6456a3d` | Gemeinsame Sticky-Zustandslogik schützt den Kartenbereich und übergibt an die erreichbare Kontaktaktion. |
| 33 | 21.09.2026 | `checkpoint/final-implementation` | Über Final-Tag auflösbar | F1–F5 abgeschlossen; 400/400 Implementierungs- und 135/135 Interaction-Checks, visuelle Endkontrolle und Abschlussdokumentation. |
| 34 | 21.09.2026 | `checkpoint/reviews-data-import-wip-1` | Über WIP-Tag auflösbar | Verifizierter partieller Google-Review-Snapshot: 29 von 66 individuellen Reviews erfasst; Google-Gesamtzahl, Sternverteilung, Listing-Auflösung und Elfsight-Gegenprüfung dokumentiert. Website, Elfsight und Legal-Dateien unverändert. |
| 35 | 21.09.2026 | `checkpoint/pre-native-reviews` | `cf2fb2c` | Vollständigen gelieferten Export auf neuem Branch vor Website-Änderungen gesichert. |
| 36 | 21.09.2026 | `checkpoint/native-reviews-functional` | `55fecde` | Eigene lokale Review-Daten und Bedienlogik; Elfsight technisch entfernt. |
| 37 | 21.09.2026 | `checkpoint/native-reviews-design` | `e6fc7e2` | Review-Design und Responsive-Polish; 208 Review- und 135 Interaction-Checks bestanden. |
| 38 | 21.09.2026 | `checkpoint/native-reviews-final` | Über Final-Tag auflösbar | Abschlussstand der eigenen Review-Sektion; vollständige Ergebnisse in `NATIVE_REVIEWS_STATUS.md`. |

## Eigene Review-Sektion – 21.09.2026

Aufbauend auf `bf2be40` wurde die zunächst unversionierte vollständige Datei `marina-google-reviews.json` auf dem neuen Branch vor jeder Website-Änderung committed und getaggt. Sie liegt nun unverändert unter `src/data/reviews/`. Eine deterministische Aufbereitung erzeugt die einzige öffentliche UI-Datenstruktur: 62 Textrezensionen und eine Zusammenfassung aller 66 Sternebewertungen. Fünf bereits übersetzte Texte des gelieferten Exports wurden nach expliziter Nutzerentscheidung durch verifizierte Originaltexte derselben IDs ersetzt; es wurde keine eigene Übersetzung erstellt. Einzelheiten stehen in `src/data/reviews/README.md`.

Die technische Elfsight-Integration ist entfernt. Die neue Sektion zeigt zunächst sechs Texte und ergänzt auf Wunsch jeweils sechs weitere, bietet zugängliche Volltexte, DE/RU-Bedienung, einen sichtbaren Gesamtfortschritt und eine optionale Sortierung nach niedrigster Bewertung. Die Zwei-Sterne-Rezension bleibt uneingeschränkt enthalten; reine Sternebewertungen zählen zur Summe, ohne leere Einträge zu erzeugen. Ownerantworten, Avatare, Reviewbilder und externe URLs gelangen nicht ins Frontend.

Gestaltung ausschließlich innerhalb der Review-Sektion: Papierfläche, Terrakotta-Ziffern, bestehende Schriften, ruhige Trennlinien und drei/zwei/eine Lesespalte je nach Breite. Hero, Navigation, Karten, Kontakt, übrige Texte und Layoutregeln blieben unverändert. Legal-Seiten wurden nicht umgeschrieben; der spätere Abgleich der Elfsight-Aussagen in `datenschutz.html` ist als offener Punkt dokumentiert. Kein Push, kein Deployment.

## Reviews-Datenimport – 21.09.2026

Ausgangspunkt war der unveränderte Website-Stand `d60b4fb` / `checkpoint/final-implementation`. Der zusätzliche Sicherungspunkt `checkpoint/pre-reviews-data-import` markiert exakt diesen Stand; die Datenerfassung liegt auf dem separaten Branch `reviews-data-import`.

Google Maps löst die vorgegebene Place-ID `ChIJwYLvBUVXn0cR3SWf5Sv-pNU` eindeutig zu „Hebamme Marina Rymmer“ auf und meldet 5,0 bei 66 Rezensionen. Die öffentlich sichtbare Sternverteilung lautet 65 × 5 Sterne und 1 × 2 Sterne. Im anonymen Browser begrenzt Google jede Sortier- beziehungsweise Themenansicht auf fünf individuelle Reviews und liefert keinen Cursor für den Rest. Durch vier Sortierungen, alle zehn Themenfilter und sieben einzeln bei Google geprüfte direkte Review-URLs wurden 29 eindeutige Reviews vollständig verifiziert. Die verbleibenden 37 individuellen Datensätze sind nicht zugänglich und wurden nicht erfunden; der Snapshot ist deshalb ausdrücklich `partial`.

Elfsight wurde erst nach der Google-Erfassung geprüft. Das Widget verwendet dieselbe Place-ID, meldet ebenfalls 5,0 / 66 und liefert 23 texttragende Fünf-Sterne-Reviews, von denen acht zunächst im DOM stehen. Alle 23 wurden bei Google bestätigt; die eine Zwei-Sterne-Rezension wird durch Elfsights `min_rating=5`-Konfiguration ausgeschlossen. Rohdaten, normalisierte Daten, Quellenauflösung und vollständiger Bericht liegen unter `src/data/reviews/`. Keine Avatare oder Reviewbilder wurden heruntergeladen. `index.html`, `src/main.js`, `src/style.css`, `impressum.html`, `datenschutz.html`, `LEGAL_RELEASE_CHECKLIST.md` und die Elfsight-Integration blieben unverändert. Kein Push, kein Deployment.

## Finaler Implementierungspass – 21.09.2026

Der unabhängige Audit wurde mit `e618fe9` ausschließlich als Dokumentation gesichert. Anschließend entstand `astra-final-implementation`. Der Pass beschränkt sich auf die fünf freigegebenen Themen; Details und Wiederaufnahmezustand stehen in `ASTRA_FINAL_IMPLEMENTATION_STATUS.md`.

- Sticky schützt den vollständigen Kartenstreifen einschließlich Controls mit stabilen Ein-/Austrittsmargen. Am Kontaktanfang bleibt er verfügbar und übergibt erst an die erreichbare reguläre WhatsApp-Aktion. Ein zusätzlicher `transitionend`-Abgleich deckt den Erstbesuch mit großem Scrollsprung während der bestehenden Kontakt-Einblendanimation ab.
- Kleine Texte auf Rosé/Sand verwenden gezielt `#625751`: Kontraste 5,0004:1 beziehungsweise 5,2788:1. Das globale Farbsystem und die Typografie bleiben erhalten.
- Bei höchstens 420 px Höhe verbessert eine begrenzte Menüregel die Erreichbarkeit des Kontaktbuttons; Safe Area berücksichtigt. Die Sticky-Leiste bleibt bei dieser geringen nutzbaren Höhe aus. Normale mobile Menüansichten bleiben unverändert.
- Bereits vorhandene 112 / 116117 sind in DE/RU und im HTML-Fallback als `tel:`-Links nutzbar; medizinischer Wortlaut unverändert.
- Finale Prüfung nach dem letzten Website-Fix: **400/400** Implementierungschecks und **135/135** Interaction-Checks, keine JS-/Request-Fehler. Zehn geforderte Desktop-/Mobile-/DE-/RU-Ansichten einschließlich 320 × 360 und 640 × 360 geprüft. Geschützte Geometrie in allen zehn Ansichten unverändert.
- Eine Unterbrechung unmittelbar vor Abschluss der visuellen Endkontrolle wurde anhand des Status und vorhandener Belege fortgesetzt. Restliche Screenshots geprüft; keine weitere Codekorrektur nötig. Abschließend Build, Diff-Prüfung, Commit und neuer Final-Tag.
- Desktop-Komposition, Bilder, Kartenmechanik, Legal-Dateien und Elfsight unverändert. Echte Marina-Angaben und die bekannten Release-Themen bleiben separat offen. Kein Push, kein Deployment.

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

### 19. `checkpoint/pre-micro-polish`

Dieser Tag sichert den vollständigen Stand unmittelbar vor dem kleinen Abschluss-Pass. Er enthält den final dokumentierten Legal-Pass und dient als direkter Rücksprungpunkt.

### 20. `checkpoint/micro-polish-final`

In diesem Stand entfallen auf der Startseite die redundanten Labels „Allgemeine Orientierung“ und „Allgemeine Hinweise“ einschließlich ihrer russischen Übersetzungen und der dafür benötigten CSS-Abstände. Die Hero-Metazeile bleibt erhalten. Das bestehende Buttonsystem wurde geprüft und bewusst nicht verändert: WhatsApp ist bereits als gefüllte Primäraktion klar von der konturierten Telefonaktion abgesetzt.

Geprüft wurden der Produktions-Build, 1440 Pixel DE sowie 390 Pixel DE/RU, Übersetzungen, horizontaler Overflow, CTA-Ziele und Browserfehler. Es wurde nichts gepusht oder deployt.

Diesen Stand separat ansehen:

```bash
git switch -c ansehen-micro-polish checkpoint/micro-polish-final
```

Zum aktuellen Entwicklungsbranch zurückkehren:

```bash
git switch legal-pass
```

### 21–25. Astra Deep Final: Content, Art Direction und abschließende QA

Ausgangsstand: `875e1c3` auf `legal-pass`. Der Deep-Pass wurde auf dem separaten Branch `astra-deep-final` durchgeführt; alle älteren Stände blieben unangetastet. `ASTRA_DEEP_PASS_STATUS.md` enthält Prioritäten, Entscheidungen und den Fortsetzungsstatus.

Die größten Schwächen waren der große, informationsarme und zum Hero redundante Marina-Block, eine wiederholende Wochenbett-FAQ und eine Desktop-Bewertungsüberschrift, die ihre Spalte überschritt. Die neue Reihenfolge lautet: Hero mit Name/Beruf/Ort/Sprachen → allgemeine Hebammenhilfe → vier Anfrageanlässe → Erfahrungen → praktisches FAQ → Marina und erste Anfrage als gemeinsamer Abschluss.

Neu ist die organisatorische Frage, was vor einer Betreuung geklärt werden sollte: konkrete Leistungen, Wohnort, Zeitraum und nächste Schritte. Sie ersetzt die doppelte Wochenbett-Erklärung. Die erste Nachricht erhält eine scannbare Liste mit Name, Wohnort, gegebenenfalls Geburtstermin und Anliegen. Keine zusätzliche medizinische Behauptung und keine erfundene Biografie, Verfügbarkeit oder Leistung von Marina. Allgemeine Hebammeninformationen bleiben ausdrücklich von Marinas tatsächlich zu klärendem Angebot getrennt. Deutscher HTML-Fallback und russische Übersetzung sind synchron.

Das Design setzt auf den Namen als großen typografischen Einstieg und einen internen Weg zur Anfragehilfe. Der ehemalige separate Marina-Block entfällt zugunsten der kompakten dunklen Identitätsfläche mit Kontaktfoto neben einer hellen Anfragefläche. Mobile stapelt Identität, schmalen Bildausschnitt und Anfrage; Desktop/Tablet nutzen zwei Spalten. Reviews bekommen einen vollbreiten Einstieg. Die vier Bildkarten bleiben, auf Desktop ruhiger gestaffelt, mobil mit 44-px-Pfeilen und Positionsanzeige. Pfeiltasten/Home/End, Touch-Swipe und Reduced Motion werden unterstützt. Die Navigation zeigt den aktuellen Abschnitt; das mobile Menü hält den Fokus und übergibt ihn an das Sprungziel. Der schwebende Kontakt ist unter 1400 px ausgeblendet, weil er zuvor Lesetext überdeckte.

Keine Bilder generiert, ersetzt oder gelöscht. Das nicht mehr eingesetzte `about-detail.jpg` bleibt als Originaldatei erhalten. Farbpalette, Serifenschrift, lokale Fonts und 14-px-Nummern bleiben bestehen. `impressum.html`, `datenschutz.html` und `LEGAL_RELEASE_CHECKLIST.md` sind gegenüber `875e1c3` unverändert; die Elfsight-Ladefunktion ist ebenfalls identisch. Lediglich die umgebende Review-Komposition wurde gestaltet. Placeholder-Mail und temporäre Elfsight-Entwicklungsintegration bleiben ausdrücklich ungelöste Release-Themen des bestehenden Legal-Plans.

Nach der Usage-Limit-Unterbrechung wurde exakt auf Designcommit `ce405a4` mit dem offenen QA-Skript weitergearbeitet. Keine neue Designphase, kein Reset, keine verworfenen Änderungen. Sieben alte FAQ-Testfehler stammten aus einer unvollständigen CDP-Enter-Simulation; ein isolierter Mobiltest bewertete zudem noch nicht besuchte Lazy-Load-Kartenbilder zu früh. Korrigiert wurden nur Tests, nicht die funktionierende Website. Interaktionsscreenshots wurden auf den echten Viewport begrenzt.

Finale Produktions-QA mit lokalem Headless-Edge: **113/113 Prüfungen bestanden**, 1440/1024/768/390/320 DE und 390/320 RU. Kein horizontaler Dokument-Overflow, keine gemessenen Textüberläufe, fehlenden Übersetzungen, defekten lokalen Bilder/Anker, JS-Ausnahmen oder HTTP-Fehler. FAQ, Menü-Fokusfalle vorwärts/rückwärts, Escape/Fokusrückgabe, Sticky-Anker, aktiver Navigationsstatus, Kartensteuerung einschließlich Randzuständen, Touch-Swipe, Reduced Motion und No-JavaScript-Fallback bestanden. Telefon, WhatsApp, Rechtseiten, Favicon und Apple-Icon geprüft; alle vier externen Quellenlinks HTTP 200. Finale Screenshots und komplette DE/RU-Redaktion geprüft. Build und `git diff --check` erfolgreich. Keine vollständige WCAG-Zertifizierung oder Prüfung auf physischer iOS-/Android-Hardware behauptet.

Das wiederverwendbare Skript `scripts/deep-pass-browser.mjs` bleibt im Repository. Aufruf nach `npm run build` und einer Preview auf Port 4175: `node scripts/deep-pass-browser.mjs`. Node 22+ und Edge, alternativ `BROWSER_PATH`; keine neue Abhängigkeit. Screenshots/Reports und Browserprofile werden nicht committed. Ein separater Dokumentationscommit ergänzt die endgültige Final-Checkpoint-ID, ohne Website oder Tag zu ändern.

Den Zustand vor Astra sicher ansehen (nur mit sauberem Working Tree; neue Branchnamen verwenden):

```bash
git status
git switch -c ansehen-vor-astra-deep checkpoint/pre-astra-deep-final
```

Zur vollständigen Astra-Version einschließlich Dokumentation zurückkehren:

```bash
git switch astra-deep-final
```

Alternativ den exakt getesteten Final-Checkpoint in einem eigenen Branch öffnen:

```bash
git switch -c ansehen-astra-deep-final checkpoint/astra-deep-final
```

Kein Reset nötig. Kein Tag verschoben, kein Push, kein Deployment. Weitere Variationen von Hero-Größe, Weißraum und Bildmotiven sind Geschmacksfragen, keine offenen QA-Fehler.

### 26–28. Interaction & UI Detail Pass

Ausgangsstand `1d76e18` auf `astra-deep-final`, sauber gesichert als `checkpoint/pre-interaction-polish`. Separater Arbeitsbranch `astra-interaction-polish`. Ausschließlich den aktuellen Astra-Stand beurteilt; keine früheren Designs geöffnet, verglichen oder wiederhergestellt. Entscheidungen und Fortsetzungsstatus stehen in `ASTRA_INTERACTION_PASS.md`.

Im Browser waren vor allem die gleichförmigen Buttons, kleinen losgelösten Nummern, blassen mobilen Kartencontrols und das FAQ-Kreuz im offenen Zustand auffällig. Zwei gezielte Designrunden verfeinerten diese Systeme: 56-px-Kontaktbuttons mit linksbündiger Beschriftung, Trennlinie und Pfeil-/Telefonicon; größere Playfair-Ziffern mit feinen Linien; mobile Kartenposition mit Fortschrittslinie, aktiver Kartenmarkierung und 48-px-Pfeilen. Das native FAQ nutzt echtes Plus/Minus, eine betonte offene Frage und eine kurze Antwort-Einblendung. Navigation und Sprachwahl besitzen kurze aktive Linien, der Menütoggle eine präzise kantige Form. Der Anfrage-Link erhält einen separat bewegten Pfeil und eine dezente Unterstreichungsreaktion.

Micro-Interactions teilen sich 160/220 ms und ein gemeinsames Easing. Bewegungen bleiben bei 1–3 px; Reduced Motion deaktiviert dekorative Verschiebungen und Übergänge. Inhalt, Sprachen, Abschnittsreihenfolge, Bilder, die drei geschützten Legal-Dateien und Elfsight-Ladefunktion wurden nicht verändert. Kein neues Carousel-/Accordion-System, keine Bibliothek und keine erfundenen Angaben.

Designcheckpoint `9ec0a53`, anschließend ausschließlich Teststabilisierung und Dokumentation. Finale Produktions-QA: **134/134 Prüfungen bestanden**, 1440 DE, 390 DE/RU, 320 DE/RU; zusätzliche Design-Layoutkontrollen 1024/768 DE. Geprüft wurden Hover/Pressed/Focus, Touch-Ziele, Nummern und Übersetzungen, Karten per Pointer/Tastatur/Swipe inklusive Fortschritt und Randzuständen, native FAQ, Menü/Fokusfalle/Escape, Anker und aktive Navigation, Resize sowie Reduced Motion. Keine JS-/HTTP-Fehler oder gemessenen Überläufe. Vollständiger Scroll-/Screenshot-Check abgeschlossen; Build und Diff-Prüfung bestanden.

Ein intermittierender FAQ-Hover-Testfehler entstand durch eine veraltete Pointer-Koordinate nach asynchronem Review-Nachladen. Das Testskript wartet jetzt auf stabile Zielgeometrie; Website und Widget wurden dafür nicht geändert. Der integrierte Browser war durch einen Verbindungsfehler blockiert, deshalb lokales Edge/CDP über das vorhandene Skript. Keine Prüfung auf physischer Mobilhardware behauptet.

Gezielte Wiederholung nach Build/Preview: `node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ interaction`. Screenshots und Report liegen unversioniert unter `%TEMP%/hebamme-astra-interaction`. Der Final-Tag bezeichnet den Abschlusscommit dieses Eintrags; seine ID lässt sich ohne zirkuläre Selbstreferenz mit `git rev-parse --short checkpoint/interaction-polish-final` auslesen. Keine bestehenden Tags verschoben. Kein Push, kein Deployment.

### 29–30. Vier gezielte Anpassungen, danach separater Audit

Ausgangspunkt `c4f594c`, neuer Branch `astra-targeted-refinement`, Sicherung `checkpoint/pre-targeted-refinement`. Genau vier Änderungen umgesetzt: mobile WhatsApp-Leiste unter 720 px erst nach dem Hero und bis zum sichtbaren Kontaktbereich (im Menü verborgen); Sprach-Touchflächen weiterhin 44 × 44 px, jetzt mit 12 px Abstand; Sprache/Telefonnummer an einer feinen vertikalen Linie gruppiert; doppelte horizontale Trennung zwischen Anfrage-Checkliste und Datenschutzhinweis auf eine Linie reduziert.

Die neue Leiste nutzt einen 48-px-Button und das bestehende Interaction-System ohne Schatten. Safe Area, inert/ARIA-Zustände, Fokusabstand und Reduced Motion sind berücksichtigt. Hero-/Kontaktbuttons, H1, Hero-Bild, Hebammenhilfe, Kartensteuerung, Inhalte, Abschnittsfolge und Bilder bleiben erhalten. Die mobile Kontaktlänge wurde nicht verändert; alle geschützten Abschnittshöhen sind gegen die Baseline gemessen identisch.

Produktionsprüfung: **112/112 gezielte Prüfungen und 134/134 Interaction-Regressionsprüfungen bestanden**, 1440 DE, 390 DE/RU, 320 DE/RU. 34-px-Safe-Area per Browser emuliert. Keine JS-/HTTP-Fehler, Überläufe oder Übersetzungsausfälle. Build und Diff-Prüfung bestanden. In-App-Browser-Verbindungsfehler weiterhin vorhanden; lokales Edge/CDP als bestehender Fallback genutzt. Keine physische Geräteprüfung behauptet. Legal-Dateien und Elfsight-Ladefunktion unangetastet.

Der finale Tag bezeichnet den Abschlusscommit dieses Eintrags. Details und reproduzierbare Testbefehle stehen in `ASTRA_TARGETED_REFINEMENT.md`. Erst nach diesem Commit folgt der ausdrücklich nur lesende kritische Endnutzer-Audit; Ergebnisse werden im Abschlussbericht geliefert, ohne anschließend weitere Dateien zu verändern. Kein Tag/Branch überschrieben, kein Push und kein Deployment.

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
