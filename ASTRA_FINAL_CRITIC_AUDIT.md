# Abschließender unabhängiger Website-Audit

Stand: 20.09.2026. Ausschließliche Designbasis: `astra-targeted-refinement`, Commit `5370689`, Tag `checkpoint/targeted-refinement-final`.

**Urteil: Die gestalterische Entwicklung sollte im Wesentlichen abgeschlossen werden.** Desktop ist geschlossen und überzeugend. Mobile braucht gezielte Korrekturen an der Kontaktleiste und etwas Aufmerksamkeit für kleine Texte. Der größte inhaltliche Gewinn hängt von echten Angaben Marinas ab. Ein weiteres Redesign wäre nicht gerechtfertigt.

Dieser Durchgang enthält **keine Website-Implementierung**. HTML, CSS, JavaScript, Texte der Website, Bilder und Legal-Dateien wurden nicht geändert. Kein Checkout, Reset, Push oder Deployment. Diese Auditdatei ist die einzige Projektänderung; sie bleibt uncommitted, damit der Website-HEAD unverändert `5370689` bleibt.

## Prüfgrundlage und Grenzen

Gelesen: `PROJECT_HISTORY.md`, `ASTRA_DEEP_PASS_STATUS.md`, `ASTRA_INTERACTION_PASS.md`, `index.html`, `src/main.js`, `src/style.css`, `CONTENT_SOURCES.md`, `LEGAL_RELEASE_CHECKLIST.md`, ergänzend `LEGAL_PASS_STATUS.md`, `ASTRA_TARGETED_REFINEMENT.md`, Impressum, relevante Datenschutzabschnitte und Build-Konfiguration. Die Detaildokumentation des Targeted-Passes wurde erst nach dem eigenen vollständigen visuellen Abschnittsdurchgang abgeglichen. Keine ältere Website-Version wurde geöffnet oder verglichen.

Git-Ausgangszustand: sauber, richtiger Branch, HEAD und Final-Tag stimmen überein. Der Produktions-Build wurde eigens in ein Verzeichnis außerhalb des Repositorys geschrieben und dort über die lokale Preview auf Port 4178 geprüft. Build erfolgreich.

Die eingebettete Browser-Verbindung war beim vorgeschriebenen Verbindungsversuch technisch nicht verfügbar (`missing field sandboxPolicy`). Deshalb erfolgte die tatsächliche Browserprüfung mit lokalem Headless-Edge, gerenderten Screenshots, Pointer-, Tastatur- und emulierten Touch-Eingaben. Keine zusätzliche Bibliothek installiert.

| Ansicht | Tatsächlich geprüft |
| --- | --- |
| 1440 × 900 DE | Vollständiges Scrollen, alle Sections, Navigation, Hover, Kontakt |
| 1024 × 900 DE | Vollständiges Scrollen, alle Sections, zweispaltige Karten und Kontakt |
| 390 × 844 DE/RU | Vollständiges Scrollen, alle Sections, Karten, FAQ, Menü, Anker, Kontaktübergang |
| 320 × 640 DE/RU | Vollständiges Scrollen, alle Sections, Karten, FAQ, Menü, Kontaktübergang |
| 320 × 480 DE/RU | Vollständiges Scrollen sowie kurze Hero-/Menü-/Sticky-Zustände |
| 320 × 360 DE/RU | Vollständiges Scrollen sowie Menü und stark begrenzter Lesebereich |
| 640 × 360 DE | Ergänzende Landschaftsansicht, vollständiges Scrollen und Menü |

Zusätzlich: Touch-Swipe, Karten per Home/End/Pfeiltasten und Buttons, native FAQ per Enter/Leertaste/Pointer, Menü-Fokusumlauf und Escape, Ankersprünge, Reduced Motion, emulierte Safe Area von 34 px, Linkziele und ausgewählte Textkontraste. Telefon- und WhatsApp-Verbindungen wurden nicht ausgelöst; keine Nachricht wurde gesendet.

Es handelt sich um einen praktischen UX-/Design-Audit, keine WCAG-Zertifizierung, rechtliche Freigabe oder medizinische Fachprüfung. Physische iOS-/Android-Geräte, VoiceOver/TalkBack und echte bewegliche Safari-/Chrome-Browserleisten wurden nicht getestet. Kleine Viewports und Safe-Area-Emulation bilden deren Platzbedarf teilweise ab, ersetzen diese Geräteprüfung aber nicht. Lokale Ladezeiten belegen keine Mobilfunk-Performance.

Screenshots und Messprotokolle liegen ausschließlich unter `C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/`. Die verlinkten Viewport-Screenshots zeigen reale sichtbare Zustände. Zusätzliche lange Section-Aufnahmen dienen nur der Übersicht: Bei solchen Aufnahmen können feste Elemente innerhalb des langen Bildes auftauchen; daraus wurden keine Überdeckungsfehler abgeleitet. Der Kartenkonflikt wurde separat im echten Viewport und per Trefferprüfung bestätigt.

## 1. Executive Summary

1. **Kein weiteres Redesign.** Farbwelt, Playfair/Inter, Bildsprache, Reihenfolge und Desktop-Komposition bilden ein überzeugendes Ganzes.
2. **Ein konkreter Bedienfehler muss behoben werden:** Die mobile WhatsApp-Leiste verdeckt an reproduzierbaren Scrollpositionen aktive Kartencontrols, auch bei 390 px.
3. **Sticky grundsätzlich behalten**, aber die Kartenbedienung schützen und das Ende der Sichtbarkeit an tatsächlich erreichbaren Kontaktaktionen ausrichten.
4. **Der Kontaktübergang verliert WhatsApp zu früh.** Die Leiste verschwindet beim ersten sichtbaren Pixel des Kontaktabschnitts; dessen eigener WhatsApp-Button liegt ungefähr 985–1056 px nach Abschnittsbeginn.
5. **Mobile H1 und Hero-Bild funktionieren.** Die Kontaktbuttons stehen vor dem Bild und sind bei normalen Mobilhöhen früh erreichbar. Pauschales Verkleinern würde mehr Charakter kosten als Nutzen bringen.
6. **Kartensteuerung behalten.** Peek, Zahl, Progress und Pfeile ergänzen sich sinnvoll. Der Hauptkonflikt kommt von der darüberliegenden Kontaktleiste.
7. **Kleine Texte verdienen eine gezielte Kontrastkorrektur:** etwa 4,23:1 auf Rosé und 4,46:1 auf Sand. Das betrifft insbesondere den kleinen WhatsApp-Datenschutzhinweis.
8. **DE/RU ist insgesamt gut.** Die echte Sprachunterbrechung liegt im deutschsprachigen Bewertungswidget und den deutschen Rechtseiten, nicht in einer grundsätzlich schlechten russischen Übersetzung.
9. **Vertrauen braucht echte Marina-Informationen.** Bestätigte Leistungen, Betreuungsgebiet und Betreuungsform sind wertvoller als zusätzliche Gestaltung. Ein echtes Portrait wäre ein weiterer Gewinn, ist aber kein ersetzbarer Designfehler.
10. **Öffentlicher Release bleibt separat gesperrt**, solange bekannte Kontaktdaten-/Legal-Platzhalter und die temporäre Review-/Datenschutzsituation nicht erledigt sind.

## 2. Was auf keinen Fall mehr grundsätzlich angefasst werden sollte

- Der Namens-Hero mit eigener Berufs-/Ortszeile. Er beantwortet die Identitätsfrage schnell und besitzt Wiedererkennungswert.
- Die warme, zurückhaltende Farbwelt und die Kombination aus Playfair Display und Inter. Einzelne Textkontraste korrigieren, nicht das Farbsystem ersetzen.
- Die Bild-/Text-Balance bei 1440 px und der zweigeteilte Desktop-Kontaktabschluss.
- Die vier Bildkarten als Grundidee; Desktop zeigt alle vier, Mobile nutzt bewusst einen horizontalen Streifen.
- Die vier FAQ und ihre native Bedienung. Keine zusätzlichen allgemeinen Fragen ohne nachgewiesenen Informationsbedarf.
- Die neue Gruppe aus Sprache, Telefonnummer, Telefonicon und vertikaler Linie. Sie wirkt absichtlich komponiert.
- Die Sprachwahl mit 44 × 44 px großen Flächen und 12 px Abstand auf Mobile.
- Die funktionalen editorialen Linien in Orientierung, FAQ, Karten und Checkliste. Ein pauschales Entfernen würde die Lesestruktur schwächen.
- Die klare Hierarchie aus gefülltem WhatsApp-Button, konturierter Telefonaktion und leichterem Anfrage-Link.

Diese Aussagen schließen die unten begründeten kleinen Funktions- und Kontrastkorrekturen nicht aus.

## 3. P0 – echte Fehler

### F1: Die mobile Kontaktleiste verdeckt die Kartensteuerung

**Ort/Zustand:** Unterer Rand des Kartenstreifens, wenn Zahl/Progress/Pfeile in den unteren Viewportbereich scrollen. Reproduziert bei 320 × 640 DE/RU, 390 × 844 DE sowie kurzen Ansichten.

**Beobachtung:** Bei 320 × 640 DE und ungefähr `scrollY = 2285` liegen die Controls bei y = 555–603 px. Die feste Leiste beginnt bei y = 575 px. Etwa 28 px der 48 px hohen Pfeilbuttons werden überdeckt. Etwas früher, bei ungefähr `scrollY = 2255`, verschwinden sie vollständig hinter der Leiste. Bei 390 × 844 ist derselbe Fehler bei ungefähr `scrollY = 1967` reproduzierbar. Absolute Scrollwerte können sich durch das externe Widget verändern; entscheidend ist die Geometrie am unteren Viewportrand.

**Nutzerwirkung:** Eine Besucherin kann die Pfeile an dieser Position nicht normal erkennen und antippen. Die Trefferprüfung im Zentrum des verdeckten Next-Buttons ergibt den WhatsApp-Link. Das ist eine konkrete Überdeckung einer anderen Bedienfunktion, keine bloße Geschmacksfrage. Weiteres Scrollen behebt die Situation; es ist kein Totalausfall der Karten. P0 wird hier entsprechend der Aufgabenstellung als vor Veröffentlichung zu behebender Bedienfehler verwendet.

**Lösungsrichtung:** Mobile Kontaktleiste während der sichtbaren Kartenbedienung ausblenden. Bevorzugt eine zusammenhängende Ausschlusszone für den Kartenstreifen einschließlich Controls, damit der Button beim Wischen nicht wiederholt ein-/ausblendet. Beim Erreichen und Verlassen dieser Zone eine kleine stabile Schaltschwelle vorsehen. Alternativ nur die Controls schützen, sofern dies ohne Flackern und ohne kurzzeitige Überdeckung funktioniert.

**Nutzen:** Die Nutzerin kann sich auf genau eine Bedienaufgabe konzentrieren. Alle Kartencontrols bleiben in ihrer bestehenden Größe erhalten.

**Nachteil:** Während dieses begrenzten Abschnitts fehlt der feste Direktlink. Das ist akzeptabel: Der Abschnitt ist kurz bedienbar und Kontakt bleibt über das Menü erreichbar. Ein verschobener oder kleinerer CTA würde den Konflikt nur verlagern beziehungsweise das Touch-Ziel schwächen.

**Aufwand mittel, Risiko mittel, Empfehlung ändern.** Die Zustandslogik anschließend mit langsamen Scrollbewegungen, Rückwärtsscrollen, Swipe und Safe Area prüfen.

Belege: [teilweise verdeckte Controls, 320 px](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320x640-de-cards-partial-conflict.png), [vollständige Überdeckung, 390 px](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390x844-de-cards-conflict.png). Messwerte: `sticky.json` im Belegverzeichnis.

Weitere technische Totalausfälle, kaputte Hauptnavigation, abgeschnittene Kontakttexte oder dauerhaft unerreichbare Inhalte wurden nicht gefunden. Release-Blocker stehen getrennt in Abschnitt 15.

## 4. P1 – klare Verbesserungen

### F2: WhatsApp wird am Kontaktübergang zu früh ausgeblendet

**Ort/Zustand:** Übergang FAQ → dunkles Marina-Profil → Bild → Anfragehilfe. Besonders 390 × 844 und 320 × 640 DE/RU.

**Beobachtung:** Sobald `#kontakt` unten in den Viewport kommt, verschwindet die Leiste. Der eigene WhatsApp-Link befindet sich erst etwa 985 px nach Beginn des Kontakts bei 390 DE, 988 px bei 320 DE und 1056 px bei 320 RU. Beim ersten Sichtbarwerden des Kontakts liegt er somit noch weit unterhalb des sichtbaren Bereichs. Auf dem eigentlichen Kontakt-Einstiegsbildschirm ist die Telefonnummer sichtbar, WhatsApp dagegen nicht.

**Nutzerwirkung:** Ausgerechnet nach Lesen des FAQ oder nach Wahl von „Kontakt“ verliert eine Nutzerin den zuvor ständig angebotenen Nachrichtenweg. Wer telefonieren möchte, ist gut versorgt. Wer schreiben möchte, muss erneut scrollen und suchen. Das ist der konkrete mobile Tunnel-Effekt; die gesamte Section ist nicht pauschal zu lang.

**Lösungsrichtung:** Das Ende der Sticky-Sichtbarkeit an die tatsächliche Sichtbarkeit des normalen WhatsApp-Buttons koppeln. Ausblenden, sobald die reguläre Aktion im nutzbaren Viewport erreichbar ist; bei Rückwärtsscrollen entsprechend wieder anbieten. Karten-Ausschlusszone und Menü-Ausblendung behalten. Nicht vorschnell einen zusätzlichen großen WhatsApp-Button in die Identitätsfläche setzen.

**Nutzen:** Kontinuierlicher Kontaktweg ohne Umbau des gelungenen Abschlusses und ohne neue CTA-Platzierung.

**Nachteil:** Die Leiste bleibt über einem Teil des Kontaktprofils/Bildes länger sichtbar. Deshalb besonders auf Überschneidungen mit Telefonlink, kleiner Schrift und normalem WhatsApp-Button prüfen. Keine kurzzeitige Doppelanzeige beim Übergang erzwingen.

**Aufwand mittel, Risiko mittel, Empfehlung ändern.** Gemeinsam mit F1 als eine klar definierte Sichtbarkeitslogik entscheiden.

Belege: [Kontaktbeginn 390 DE](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390x844-de-contact-entry.png), [Kontaktbeginn 320 RU](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320x640-ru-contact-entry.png).

### F3: Kleine graue Texte auf den dunkleren hellen Flächen etwas kräftiger setzen

**Ort/Zustand:** Orientierungstexte auf Sand und Einleitung/Datenschutzhinweis in der roséfarbenen Anfragefläche, alle Viewports. Auf 320 px RU ist der kleine Hinweis besonders lang und damit anstrengender.

**Beobachtung:** Im Browser bestätigte Textfarbe `#6d625c` auf `#ead6ce` ergibt ungefähr **4,225:1**; auf `#e9ded2` ungefähr **4,461:1**. Der Kontakt-Hinweis ist nur 12,48 px groß, der Orientierungshinweis 13,44 px. Das ist eine kleine, objektiv nachweisbare Schwäche. Der Vergleichswert für normalen Text ist 4,5:1; Werte knapp darunter werden nicht aufgerundet. [W3C: Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

**Nutzerwirkung:** Der ohnehin zurückhaltende Hinweis ist bei kleiner Anzeige und eingeschränkter Kontrastwahrnehmung unnötig schwerer lesbar. Dies ist kein Argument gegen die Farbpalette. WhatsApp-Button und direkte Telefonnummer haben mit etwa 7,0:1 beziehungsweise 12,4:1 deutliche Reserven.

**Lösungsrichtung:** Nur die betroffenen Textfarben ausreichend abdunkeln und mit etwas Reserve prüfen. Beim kleinen Datenschutzhinweis kann zusätzlich eine geringfügige Schriftvergrößerung getestet werden; sie ist keine Voraussetzung für die Farbkorrektur.

**Nutzen:** Lesbarkeit verbessern, ohne die Komposition zu verändern.

**Nachteil:** Mehr Textgewicht; eine größere Schrift erzeugt insbesondere RU zusätzliche Zeilen. Deshalb zunächst Farbe korrigieren und anschließend visuell entscheiden.

**Aufwand klein, Risiko niedrig, Empfehlung ändern.** Keine Aussage über eine vollständige WCAG-Konformität der übrigen Website.

Beleg: [Anfragefläche mit kleinem Hinweis, 320 DE](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320-de-contact-small-text.png). Berechnung und Browserwerte: `additional-checks.json`, `reduced-and-contrast.json`.

### R1: Finalen Review-Bereich als ruhigen Vertrauensbeleg gestalten

Der bereits geplante Ersatz ist sinnvoll. Das aktuelle Widget erzeugt mit Google-Farben, blauem Bewertungsbutton, eigenen Karten, Slider, Punkten und Anbieterlabel den stärksten optischen Bruch der Seite. Auf RU bleibt seine Bedienung deutsch. Empfehlung und Grenzen für den Ersatz stehen in Abschnitt 14; **keine Optimierung des temporären Widgets** empfohlen. Die Entfernung/Ersetzung bleibt zugleich ein Release-Thema.

## 5. P2 – optionale Verbesserungen

### F4: Eine gezielte Variante für sehr geringe Höhe prüfen

Bei **320 × 480** bleiben Menü und Kontaktbutton in DE/RU vollständig sichtbar. Bei **320 × 360 RU** reicht der Button zunächst bis ungefähr y = 374 px; sein unterer Teil liegt außerhalb des 360-px-Viewports. Das Menü ist scrollbar: Nach 62 px internem Scrollen liegt der Button vollständig bei etwa y = 256–312 px. Kein unerreichbares Menü, aber unnötige Entdeckungsarbeit. In DE bei 320 × 360 ist der Button bereits vollständig sichtbar, sitzt jedoch unmittelbar unter der letzten Navigationszeile. Ähnlich knapp ist 640 × 360 DE.

Für geringe Höhen gezielt obere/untere Menüpaddings und gegebenenfalls Zeilenabstände reduzieren; einen kleinen Abstand zur Kontaktaktion erhalten. Keine globale Verkleinerung des normalen Menüs.

Auch die feste Kontaktleiste beansprucht bei 360 px Höhe 65 px; zusammen mit dem 70-px-Header bleiben nur 225 px zum Lesen. Bei emulierter 34-px-Safe-Area wird die Leiste 99 px hoch. **Eine Höhen-Ausnahme um 360 px testen**, nicht reflexhaft auf allen 480-px-Geräten deaktivieren. Vorteil: mehr Lesefläche. Nachteil: weniger ständiger Direktkontakt. Aufwand klein bis mittel, Risiko niedrig bis mittel, Empfehlung testen.

Belege: [320 × 480 DE](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320x480-de-menu.png), [320 × 360 RU beim Öffnen](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320x360-ru-menu.png), [nach internem Scrollen](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320x360-ru-menu-scrolled.png), [kurzer Lesebereich mit Sticky](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320x360-de-after-hero.png).

### F5: Vorhandene Notfallnummern als Telefonlinks anbieten

Die vierte FAQ beantwortet den Akutfall und grenzt Website/WhatsApp ab. Die vorhandenen Nummern stehen allerdings nur als Text in der Antwort, ohne eigene `tel:`-Links. Auf Mobile könnte direktes Antippen einen kleinen Bediengewinn liefern; auf automatische Nummernerkennung einzelner Browser sollte man sich dabei nicht verlassen.

Nur die vorhandenen Nummern verlinken, keine neuen medizinischen Aussagen, Warnflächen oder zusätzlichen FAQ ergänzen. Nutzen: weniger Übertragungsaufwand. Nachteil: zusätzliche sichtbare Links in einem ruhigen Absatz und Möglichkeit versehentlicher Telefon-App-Öffnung. Aufwand klein, Risiko niedrig, Empfehlung optional ändern. Im Audit wurde kein Anruf ausgelöst.

### F6: Deutschen Zieltext hinter russischen Legal-Links kenntlich machen

Auf RU führen „Импрессум“ und „Защита данных“ zu deutschen Seiten. Das wurde durch tatsächliche Navigation geprüft; beim Zurückkehren bleibt RU erhalten. Technisch funktioniert der Weg, sprachlich endet die Zweisprachigkeit dort unerwartet.

Kleine Lösung: Das deutsche Ziel beim Link kenntlich machen. Eine vollständige russische Fassung nur dann separat beauftragen, wenn sie fachkundig gepflegt werden kann. Nutzen: klare Erwartung. Nachteil: etwas längere Footerlinks; eine vollständige Übersetzung erzeugt dauerhaften Pflegeaufwand. Aufwand klein für Kennzeichnung, Risiko niedrig, Empfehlung testen.

### F7: Bildauslieferung nur bei einem gezielten Performance-Pass weiter optimieren

Hero und vier Karten verwenden große JPGs auch auf schmalen Anzeigen. Die tatsächlich referenzierten lokalen Bilder einschließlich Logo summieren sich auf ungefähr 1,58 MB. Kleinere passende Bildvarianten könnten bei Mobilfunk helfen. Im lokalen Gebrauch gab es jedoch keinen Beleg für einen gravierenden Bildladefehler. Daher kein Pflichtpunkt und keine neue Bildgestaltung. Aufwand mittel, Risiko niedrig bis mittel durch Zuschnitt-/Qualitätsfragen, Empfehlung zunächst lassen beziehungsweise erst mit Netzwerkmessung testen.

Social Preview und ungenutzte Assets sind separat unter „Vor öffentlichem Go-Live“ eingeordnet.

## 6. P3 – Geschmackssachen / lieber lassen

| Diskussionspunkt | Eigenes Urteil |
| --- | --- |
| H1 auf 320 px | Groß, aber lesbar und sauber zweizeilig. DE etwa 60,8 px. Name und Berufs-/Ortszeile sind klar. Lassen. |
| H1/H2 insgesamt | Die Größe trägt die gestalterische Identität. Keine mobile Verkleinerung als Sammelmaßnahme. |
| Hero-Bild Mobile | Rund 339 px hoch bei 390, 278 px bei 320. Es steht nach den Aktionen, nicht davor. Gute atmosphärische Pause; lassen. |
| Hebammenhilfe zu luftig | Mit rund 1019 px bei 390 DE und 1163 px bei 320 DE lang, aber überwiegend wegen lesbarer Absätze/Umbrüche. Kein isolierter großer Leerraumfehler. |
| Große Nummern | Die 35,2-px-Marginalien helfen beim Scannen. Sie sind weder konkurrierende Headlines noch übergroße Buttons. Lassen. |
| Kartenhöhe | Im mobilen Streifen stabil; bei unterschiedlichen Textlängen verbleibt etwas freie Fläche. Stabilität ist hier sinnvoller als springende Controls. |
| 01/04 + Progress + Pfeile | Leichte Informationsredundanz, aber keine störende Überladung. Behalten. |
| 1024-px-Karten | Zwei Bildreihen sind deutlich länger als das 1440-px-Raster, etwa 1803 px Section-Höhe. Funktionieren als Bildstrecke; kein zwingender Änderungsgrund. |
| Kontaktfoto | Der flache mobile Ausschnitt, etwa 145–177 px hoch, verursacht den langen Weg zum WhatsApp-Button nicht allein. Nicht vorschnell streichen. |
| Linien | Kein erneuter Doppeldivider am Datenschutzhinweis. Die übrigen Linien besitzen überwiegend erkennbare Gliederungsfunktionen. |
| Desktop-Schnellkontakt | Bei 1440 sichtbar und im Hero redundant, bleibt aber in der Randzone. Bei 1024 verborgen. Keine erkennbare Inhaltskollision; zunächst lassen. |

## 7. BLOCKED – benötigt Informationen oder Material von Marina

### B1: Tatsächliches Angebot und Einzugsgebiet

Die wichtigsten zu klärenden Angaben, in dieser Reihenfolge:

1. **Welche der erwähnten Bereiche bietet Marina tatsächlich an?** Schwangerschaftsbetreuung, Wochenbett/Nachsorge und Beratung zu Stillen/Ernährung konkret bestätigen. Geburtsbegleitung und Kurse nur nennen, wenn sie wirklich dazugehören. Kein Leistungskatalog aus allgemeinen Hebammeninformationen ableiten.
2. **Wo und in welcher Form findet Betreuung statt?** Welche Teile Nürnbergs beziehungsweise weitere Orte sind möglich? Hausbesuche, ein fester Terminort oder andere Formen nur nach Bestätigung. Die Impressumsadresse belegt keinen öffentlich nutzbaren Praxisstandort.
3. **Wie werden Zeitraum und Kapazität geklärt?** Keine automatische Verfügbarkeit suggerieren. Eine bestätigte organisatorische Aussage zur Anfrage kann helfen; keine dauernde „freie Plätze“-Behauptung ohne Pflegeprozess.
4. **Wie läuft die erste Rückmeldung praktisch ab?** Bevorzugter Kontaktweg und eine realistische, von Marina bestätigte Erwartung an Rückmeldung. Keine erfundene Antwortzeit.

Die Website beantwortet derzeit „Was kann Hebammenhilfe allgemein sein?“ besser als „Passt Marina zu meinem konkreten Bedarf?“. Das ist die wichtigste inhaltliche Grenze, kein Anlass für erfundene Texte. Wenige bestätigte Angaben in vorhandenen Bereichen reichen; keine neue lange Leistungssection nötig. Aufwand nach Klärung klein bis mittel, Risiko mittel durch mögliche falsche Erwartungen. Empfehlung externe Information abwarten, dann präzisieren.

### B2: Echtes persönliches Material

Ein echtes, freigegebenes Portrait würde den größten rein persönlichen Vertrauensgewinn schaffen. Optional kann eine kurze bestätigte persönliche Vorstellung hinzukommen. Dafür sind keine erfundenen Jahre Berufserfahrung, Spezialisierungen, Werte oder Biografien zulässig.

Das fehlende Portrait ist **kein aktueller Darstellungsfehler**, den ein Designer ohne Material lösen kann. Das gegenwärtige Kontaktbild zeigt eine Hand mit Telefon, der Hero eine Schwangerschaftsszene. Keines der Bilder sollte als Marina beschriftet oder durch Gestaltung zum persönlichen Portrait erklärt werden. Auch die Gesichter auf den Anfragekarten sind kein Beleg dafür, wie Marina aussieht.

Beim Einholen des Materials kann ihre gewünschte russische Namensschreibweise mitbestätigt werden. Die vorhandene Fassung „Марина Риммер“ wird hier nicht allein aufgrund abweichender Schreibweisen in Rezensionen als Fehler eingestuft.

### B3: Echte Release-Angaben und Kommunikationspraxis

Erreichbare E-Mail-Adresse, Staat der Verleihung der Berufsbezeichnung sowie tatsächliche WhatsApp-/Datenschutz-/Hostingpraxis müssen von der Verantwortlichen beziehungsweise dem Release-Verantwortlichen bestätigt werden. Die bestehenden Checklisten benennen diese Punkte bereits. Hier wird keine zusätzliche rechtliche Anforderung erfunden.

## 8. Mobile-spezifische Bewertung

**Mobile ist nicht insgesamt überladen.** Es gibt drei konkrete Verdichtungen:

- **A – echtes UX-Problem:** Kartencontrols plus fester WhatsApp-Balken in derselben unteren Bildschirmzone. F1.
- **A – Kontaktfluss:** Ausblenden des Balkens am Anfang eines langen Kontaktabschlusses, bevor dessen Nachrichtenaktion sichtbar ist. F2.
- **B – kleine Verbesserung:** Bei sehr geringer Höhe nehmen Header, Dock beziehungsweise Menüpaddings zu viel vom verfügbaren Raum ein; RU-Menübutton ist anfangs angeschnitten. F4.

Der aktuelle Bewertungsblock fügt eine weitere eigene UI-Ebene hinzu: Sterne, Anbieterlogo, blauer Button, Carousel-Pfeil, Punkte und Badge. Das ist der stärkste optische Belastungspunkt. Er verschwindet sinnvollerweise mit dem geplanten Ersatz und rechtfertigt keinen Umbau der übrigen Website.

**C – Geschmack:** Große H1/H2, 01/02/03, Bildhöhe und großzügiger Abschnittsrhythmus. Diese funktionieren überwiegend. Die mobile Anfrage ist nicht zu komplex: vier Angaben, ein Hinweis, zwei Aktionen. Ihre zeitliche Erreichbarkeit ist das Problem, nicht die Existenz dieser Inhalte.

Bei 390 × 844 stehen WhatsApp und Telefon ungefähr ab y = 417/485 px in DE und 401/469 px in RU bereit. Bei 320 × 640 ungefähr ab 432/500 px beziehungsweise 420/488 px. Auf 320 × 480 liegt ein Teil des Kontaktangebots entsprechend unter dem ersten Bildschirmrand; auf 360 px Höhe ist Scrollen unvermeidlich. Das allein rechtfertigt keine generelle Hero-Verkleinerung.

In den sechs Hauptansichten kein dokumentweiter horizontaler Overflow oder gemessener Textüberlauf. Der horizontale Kartenstreifen ist beabsichtigt. Auch die kurzen Ansichten ließen sich bis zum Footer durchscrollen. Nach tatsächlichem Besuch der Bildbereiche wurden die lokalen Bilddateien geladen; verzögerte externe Review-Avatare sind davon zu unterscheiden.

**Praktische Accessibility:** Gute Fokusrahmen, native FAQ, funktionierende Menü-Fokusführung, Escape und Ankerabstände. Die Hauptaktionen sind 56 px, Sprachbuttons 44 px und Kartenpfeile 48 px hoch. Reduced Motion zeigt Inhalte und erlaubt unmittelbare Kartenwechsel. Die fokussierten Pfeilbuttons werden oberhalb der Dockzone gehalten; dieser Tastaturschutz löst F1 für Touch nicht. Keine umfassende Screenreader-Prüfung behauptet.

## 9. Desktop-spezifische Bewertung

**1440 px ist die stärkste Ansicht und sollte gestalterisch in Ruhe gelassen werden.** Der große Name, die nachgeordneten Fakten und das hochformatige Bild bilden eine klare Komposition. Kontaktaktionen konkurrieren nicht mit dem Text. Orientierung und FAQ verteilen Information nachvollziehbar auf zwei Spalten. Die leichte Staffelung der vier Karten wirkt bewusst, nicht zufällig.

Der Kontaktabschluss stellt Identität und konkrete Anfragehilfe nebeneinander. Dadurch entsteht der mobile Suchweg dort nicht. Sprache und Telefonnummer wirken zusammengehörig; die Checkliste ist sofort verständlich. Buttons und Telefonnummer sind gut auffindbar.

**1024 px:** Navigation passt, der Hero bleibt ausgewogen, und Kontakt funktioniert weiterhin nebeneinander. Der Wechsel auf zwei Kartenreihen verlängert diesen Abschnitt deutlich. Das ist eine proportionale Besonderheit, aber weder ein Funktionsfehler noch ein Grund, die gelungene Desktopbasis neu zu entwerfen.

Die Aktivmarkierung der Navigation, Hover und der Ankersprung mit Abstand zum Sticky-Header wurden benutzt und funktionieren. Der neue mobile Dock ist auf beiden Desktopbreiten ausgeblendet.

Belege: [Desktop-Hero 1440](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/1440-de-hero.png), [Hero 1024](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/1024-de-hero.png), [Desktop-Kontakt](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/1440-de-kontakt.png).

## 10. DE/RU-Bewertung

**Deutsch:** Gut verständlich, knapp und weitgehend frei von Marketingfloskeln. Keine auffällige generische Emotionalität oder künstliche „Herzensbegleitung“-Sprache im eigenen Text. Die direkten Fragen und die Anfrage-Checkliste sind nützlich.

Die häufigen offenen Formulierungen sind sachlich erklärbar, wirken in Summe aber defensiv: Hero „Ob ich dich betreuen kann“, allgemeine Leistungen mit „können“, Abgrenzung am Ende der Orientierung und organisatorische FAQ. Diese Unsicherheit sollte später durch bestätigte Fakten reduziert werden. Nur sprachlich selbstbewusster zu formulieren, ohne mehr zu wissen, wäre der falsche Schritt.

**Russisch:** Tatsächlich bei 390/320 sowie im kurzen Menü benutzt und vollständig gelesen. Höfliche Ansprache, nachvollziehbare Navigation, natürliche Kontaktaufforderungen und gut verständliche Checkliste. Keine belegte schwere Fehlübersetzung gefunden. Einzelne Wendungen wie „наблюдение беременности“ wirken fachsprachlicher, sind aber verständlich und rechtfertigen keinen eigenen Korrekturpass. Markenname im Header in lateinischer Schrift und russischer Name im Hero sind kein Usability-Fehler.

Bei 320 px wird etwa „Для послеродового периода“ dreizeilig. Es bleibt lesbar, ohne abgeschnittene Wörter. Der Anfrage-Datenschutzhinweis ist länger als in DE; das spricht für F3, nicht für das Streichen des Hinweises. Der Hero-Link darf sich dem Text anpassen.

**Echte Sprachbrüche:** Elfsight zeigt auch bei RU „Bewertungen“, „Mehr lesen“ und den deutschen Bewertungsbutton. Die Originalrezensionen sind teils deutsch, teils russisch. Das erste angezeigte Review ist deutsch; eine russische Besucherin findet den russischen Vertrauensbeleg deshalb nicht sofort. Deutsche Originalrezensionen sind nicht automatisch schlechte Inhalte, aber die Bedienoberfläche sollte in der endgültigen Lösung der gewählten Sprache folgen. Legal-Ziele sind deutsch, siehe F6.

**DE/RU-Abstand:** Auf Mobile jetzt tatsächlich 12 px zwischen den 44-px-Flächen. Gut erkennbar, ausreichend getrennt, keine Kollision bei 320/390 px. Auf Desktop gelten etwa 9,6 px; auch dort funktioniert die Gruppe. Kein Grund, alles auf denselben Wert zu zwingen.

Belege: [390 DE Hero](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390-de-hero.png), [320 DE Hero](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320-de-hero.png), [390 RU Hero](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390-ru-hero.png), [320 RU Karte 3](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320-ru-card03-viewport.png).

## 11. Sticky-CTA-Urteil

**Behalten und gezielt ändern.** Die Leiste bietet nach dem Hero über mehrere Informationsabschnitte einen echten Nutzen. Sie ist klar beschriftet, kein unverständliches Icon und keine visuell fremde grüne Werbefläche. Im Hero und bei offenem Menü bleibt sie verborgen; auf Desktop erscheint sie nicht.

**Was funktioniert:** Beginn nach vollständig verlassenem Hero, nur eine Aktion, 48-px-Touch-Ziel, Safe-Area-Abstand, inaktive/verborgene Zustände und Reduced Motion. Die 34-px-Safe-Area-Emulation ergab 42 px unteren Innenabstand einschließlich Gestaltungspadding und 99 px Leistenhöhe.

**Was ändern:** F1 Karten-Ausschluss und F2 saubere Übergabe an den normalen WhatsApp-Link. Das bisherige Ausblenden am Beginn von `#kontakt` ist technisch regelkonform, aus Nutzersicht jedoch zu früh.

**Was testen:** Verzicht bei sehr geringer Höhe, vor allem 360 px beziehungsweise schmale Landschaftsansichten. Die vorgeschlagene Variante ist keine getestete Lösung dieses Audits.

**FAQ:** Kein dauerhaft unbedienbares FAQ gefunden. Die Leiste verdeckt beim Scrollen naturgemäß die untersten 65 px; Fragen werden nach weiterem Scrollen erreichbar. Tastaturfokus wird geschützt. Keine pauschale FAQ-Ausschlusszone erforderlich. An kurzen Ansichten ist eine Höhenregel sinnvoller als zusätzliche Sonderregeln für jede Section.

**Alternativen:** Kleiner machen schwächt das Touch-Ziel; seitliches Verschieben schafft auf 320 px keinen verlässlichen freien Raum. Komplett entfernen kostet einen hilfreichen Kontaktweg. Den gesamten Karten-Bedienbereich zeitweise auszunehmen ist die klarste begrenzte Lösung. Die Ausblendeschwellen sollten stabil sein, damit der CTA nicht bei jedem kleinen Scrollimpuls flackert.

## 12. Kartensteuerungs-Urteil

**Die Kombination ist gerechtfertigt.** Der Anschnitt signalisiert, dass weitere Karten existieren. „01 / 04“ erklärt Umfang und Position. Die feine Linie gibt einen schnellen Fortschrittseindruck. Pfeile ermöglichen bewusstes Weitergehen ohne Wischgeste; Tastatursteuerung ergänzt dies. Nicht alle Besucherinnen nutzen dieselbe Bedienform.

Die Pfeile sind mit 48 px gut treffbar. Anfang/Ende sind deaktiviert statt irreführend endlos. Pointer-Next, Pfeiltaste, Home/End und Touch-Swipe funktionierten. Alle vier Karten wurden besucht; Bilder und Texte sind vorhanden. Die dritte RU-Karte wurde auch bei 320 px visuell geprüft.

Die großen Bilder sind Teil der gestalterischen Idee. Etwas Freifläche bei kurzen Texten stabilisiert den Streifen. Bei 390 px lagen die Karten in DE/RU bei ungefähr 498 px Höhe; bei 320 px ungefähr 445 px in DE und 469 px in RU, jeweils innerhalb des Streifens gleich hoch. Die Steuerungsreihe springt nicht bei jedem Kartenwechsel.

Es gibt leichte semantische Wiederholung zwischen Kartennummer und Positionsanzeige. Sie stört weniger als das Entfernen einer Orientierungshilfe helfen würde. Auch die Linie unter dem Bild und die Progress-Linie haben unterschiedliche Aufgaben. **Keine zusätzlichen Dots, Swipe-Anleitung oder weitere Symbole hinzufügen.**

Hauptproblem ist F1. Erst die externe Leiste aus dieser Bedienzone nehmen, bevor man die gelungenen Kartencontrols selbst reduziert.

Belege: [Karte 2 mit Controls, 390 DE](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390-de-card02-viewport.png), [Karte 3, 390 RU](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390-ru-card03-viewport.png), [Karte 4 mit Tastaturfokus, 320 DE](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/320-de-card04-viewport.png).

## 13. Kontaktbereich-Urteil

**Desktop sehr gelungen; Mobile großzügig, aber mit einem konkreten Kontaktwegproblem.** Die dunkle Identität, das flache Bild und die roséfarbene Anfragefläche sind als aufeinanderfolgende Aufgaben verständlich. Telefonnummer, Sprachen und Icon wirken nicht verloren. Die feine vertikale Linie gibt der Gruppe Halt; die Nummer bleibt unterstrichen und sofort als Kontakt erkennbar.

Mobile umfasst die gesamte Contact-Section einschließlich Footer ungefähr 1420 px in DE bei 390 und 1491 px in RU bei 320. Diese Zahl ist kein Beweis für einen zu langen Anfrageblock: Sie enthält Identität, Bild, Checkliste, Datenschutz, Aktionen und Footer. Das eigentliche Problem ist der lange Weg zur Nachrichtenaktion nach frühem Sticky-Ausblenden, siehe F2.

Die vier Angaben sind sinnvoll: Name, Wohnort, gegebenenfalls Geburtstermin und Anliegen. Die Checkliste ist deutlich besser scanbar als ein langer Absatz. Der Hinweis zu Gesundheitsdaten ist konkret und sachlich, keine Werbefloskel. Er braucht besseren Kontrast, nicht ersatzlose Entfernung.

Der Hero-Link „Was gehört in meine Anfrage?“ führt direkt zum hellen Bereich und überspringt Identität/Bild. Bei 390 px waren danach beide Kontaktbuttons im sichtbaren Bereich. Das ist ein nützlicher alternativer Weg. Der Menüpunkt „Kontakt“ führt dagegen zum Anfang des dunklen Profils; dort wird F2 spürbar.

**Redundanz:** Die direkte Telefonnummer in der dunklen Fläche und „Jetzt anrufen“ am Ende erfüllen denselben Zweck, aber in unterschiedlichen Lesemomenten. Auf Desktop sind sie zugleich sichtbar; das ist eine tolerierbare Wiederholung, kein Grund für einen Umbau. Hero, finales Kontaktangebot und Menü sind sinnvolle Einstiegspunkte. Der feste CTA ist nur dort unnötig, wo er mit einer anderen Bedienaufgabe oder derselben sichtbaren Kontaktaktion konkurriert.

Kein erneuter doppelter Divider zwischen Checkliste und Datenschutzhinweis. Die kleine horizontale Linie unter dem letzten Listeneintrag genügt. Kein weiterer dekorativer Trennstrich nötig.

Belege: [vollständiger mobiler Abschluss DE](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390-de-kontakt.png), [Anfrage-Anker als echter Viewport](C:/Users/Oktay/AppData/Local/Temp/hebamme-final-critic-5370689/390-de-inquiry-anchor.png).

## 14. Content-/Vertrauens-Urteil

### Die erste Besucherin aus Nürnberg

| Ihre Frage | Antwort der aktuellen Seite |
| --- | --- |
| Wer ist Marina? | Name sofort klar. Persönlich lerne ich sie kaum kennen; echtes Material fehlt. |
| Ist sie Hebamme? | Ja, bereits im Header und vor der H1. |
| Wo arbeitet sie? | Nürnberg klar. Konkretes Gebiet und Betreuungsort/-form bleiben offen. |
| Welche Sprachen? | Deutsch/Russisch früh im Hero und später im Kontakt. |
| Passt Betreuung zu meiner Situation? | Allgemeine Phasen verständlich; Marinas eigenes Angebot bleibt unbestätigt. |
| Wann anfragen? | Frühe Schwangerschaft in Karte 1 und FAQ; weitere Anlässe verständlich. |
| Was angeben? | Sehr gute kurze Checkliste; vom Hero direkt erreichbar. |
| Wie erreiche ich sie? | Telefon/WhatsApp klar. Mobile Unterbrechung des WhatsApp-Wegs am Kontaktanfang. |
| Kann ich ihr vertrauen? | Professionelle Gestaltung und Erfahrungsberichte helfen. Konkretes Angebot und persönliche Begegnung bleiben dünn. |
| Was bei dringenden Problemen? | Eigene Frage im FAQ, mit Abgrenzung von Website/WhatsApp. Antwort muss geöffnet werden; keine zusätzliche medizinische Section erforderlich. |

### Hebammenhilfe und Anfragekarten

Die Bereiche haben **unterschiedliche Aufgaben**: Die Orientierung beschreibt grundsätzlich mögliche Unterstützung; die Karten helfen, den eigenen Anfrageanlass wiederzuerkennen. Diese Trennung ist sinnvoll.

Konkrete Wiederholungen gibt es trotzdem: Orientierung 03 und Karten 03/04 nennen die Zeit nach der Geburt beziehungsweise Stillen/Ernährung. Orientierung 02 und Karte 02 berühren Vorbereitung und erste Zeit danach. Karte 01 und FAQ 01 wiederholen die frühe Kontaktaufnahme. Die letzte Wiederholung ist nützlich, weil sie sowohl scannend als auch gezielt suchend gefunden wird.

Am schwächsten ist der zusätzliche Informationsgewinn von Karte 03 gegenüber Orientierung 03: „Wenn du nach der Geburt Hebammenhilfe … suchst“ erklärt wenig Neues. Trotzdem ist das kein ausreichender Grund, Sections zusammenzulegen oder eine Karte zu entfernen. Später können bestätigte Marina-Angaben die Karten konkreter machen. Ohne diese Fakten würde ein neuer Text nur dieselbe allgemeine Aussage umformulieren.

### FAQ

Vier Fragen sind derzeit die richtige Größenordnung. Suche, Versicherung, organisatorische Klärung und akute Beschwerden decken unterschiedliche Bedürfnisse ab. Die Reihenfolge funktioniert. Antworten bleiben in DE/RU lesbar; die Versicherungsantwort ist etwas abstrakt, jedoch mangels individueller Angaben nachvollziehbar vorsichtig.

Plus/Minus und die farbliche Betonung des offenen Zustands sind eindeutig. Mehrere Antworten können unabhängig offen sein. Die Divider strukturieren, ohne einen weiteren Rahmenapparat zu erzeugen.

Die echte fehlende Information lautet „Welche Betreuung bietet Marina wo an?“. Dafür sollte nicht einfach eine fünfte FAQ mit „Bitte frag nach“ entstehen. Die Antwort benötigt B1 und gehört anschließend gut auffindbar in vorhandene Inhalte.

### Persönlichkeit und Bildmaterial

Die Bilder schaffen eine ruhige Atmosphäre, liefern aber keinen persönlichen Beleg über Marina. Weil fast alle Motive eine ähnliche warme, makellose Welt zeigen, kann die Seite etwas anonym wirken. Das ist eine Grenze des Materials, kein Beweis einer falschen Darstellung. Keine vorhandene Frau als Marina ausgeben und kein künstliches Portrait als Ersatz empfehlen.

Ein echtes Portrait und wenige bestätigte Angaben könnten mehr Vertrauen schaffen als weitere Testimonials, Nummern oder dekorative Elemente. Bis dahin ist die klare Zurückhaltung bei persönlichen Behauptungen richtig.

### Konzept für endgültige Reviews

Die Position nach den Anfrageanlässen und vor FAQ/Kontakt ist sinnvoll: Erst verstehe ich den Anlass, dann erhalte ich einen Vertrauensbeleg, danach kläre ich praktische Fragen.

Empfohlen ist eine ruhige, zum vorhandenen Satzspiegel passende Darstellung mit zwei bis drei echten, nachvollziehbar zugeordneten Erfahrungen. Desktop kann sie nebeneinander zeigen, Mobile wenige kurze Ausschnitte untereinander. Keine zweite dominante Slider-Bedienoberfläche nötig. Eine zurückhaltende Quellenzeile und ein klarer Link zu weiteren Originalbewertungen reichen. Keine große Aufforderung zum Bewerten als wichtigste Aktion für Erstbesucherinnen.

Die echte Quelle, Auswahl und erlaubte Veröffentlichung der Inhalte müssen geklärt werden. Zitate nicht erfinden, Bewertungen nicht zu Leistungs-/Erreichbarkeitsversprechen umdeuten. Eine Gesamtbewertung/Zahl nur mit verlässlichem Stand beziehungsweise Pflegekonzept zeigen. Originalsprache sichtbar lassen; Übersetzungen gegebenenfalls ausdrücklich kennzeichnen. Die eigene UI muss DE/RU folgen. Eine vorhandene russische Erfahrung sollte auf RU ohne langes Suchen auffindbar sein.

Das aktuelle Widget lud im Browser, vergrößerte den Abschnitt aber nachträglich; in einem 1440-px-Durchlauf nahm die Dokumenthöhe von ungefähr 4656 auf 4926 px zu. Das ist eine beobachtete Höhenänderung, kein gemessener Core-Web-Vitals-CLS-Wert. Einzelne externe Avatare luden später. Der finale Bereich sollte möglichst ohne solche nachträglichen Verschiebungen und ohne Anbieter-Badge auskommen. **Kein CSS-Tuning oder aufwendiges Nacharbeiten am aktuellen Elfsight-Widget empfohlen.**

### Technik und Performance aus Nutzersicht

Build erfolgreich. Keine defekten lokalen Bilddateien nach deren tatsächlichem Besuch und keine beobachteten Hauptfunktionsausfälle. Im gezielt protokollierten Interaktionslauf keine JavaScript-Ausnahmen oder HTTP-Fehler. Lokale Fonts verhindern eine separate Schriftanbieter-Abhängigkeit; Reveal-Bewegungen sind zurückhaltend und bei Reduced Motion deaktiviert.

Die alten PNGs liegen in `assets/`, überwiegend mit rund 1,9–2,4 MB pro Datei. Sie wurden beim Besuch der Seite nicht angefordert. Unbenutzte JPGs in `public/images/` können zusätzlich im Build-Verzeichnis landen, werden aber ohne Referenz ebenfalls nicht automatisch heruntergeladen. **Repository-/Deployment-Aufräumen ist hier nicht gleich Nutzer-Performance.** Originale nicht aus vermeintlicher Ladezeitoptimierung löschen. Ein echter Performance-Pass würde die tatsächlich geladenen JPGs und die endgültige Review-Lösung betrachten.

## 15. Vor öffentlichem Go-Live

Diese Punkte sind von der Designbewertung getrennt. Grundlage sind der sichtbare Code-/Dokumentstand und `LEGAL_RELEASE_CHECKLIST.md`; dies ist keine neue Rechtsberatung.

- **Echte E-Mail eintragen:** `BITTE-ERSETZEN@example.invalid` steht noch in Impressum und Datenschutz. Bestehender Release-Blocker.
- **Offene Berufsangabe bestätigen:** Den Staat der Verleihung der Berufsbezeichnung anhand Marinas tatsächlicher Unterlagen ergänzen, wie bereits in der Checkliste vorgesehen.
- **Elfsight entfernen/ersetzen:** Die Entwicklungsintegration lädt automatisch. Die aktuelle Datenschutzerklärung beschreibt dagegen eine Aktivierung per Klick. Diese erkennbare Abweichung muss mit dem endgültigen technischen Datenfluss aufgelöst werden.
- **Kommunikationspraxis und Hosting abgleichen:** Tatsächlicher WhatsApp-Einsatz, Zugriff, Speicherdauer, sicherer Umgang mit medizinischen Unterlagen und endgültiges Hosting sind mit den Verantwortlichen zu klären; anschließend vorhandene Texte fachkundig prüfen lassen.
- **Angebotsangaben bestätigen:** B1 ist kein automatisch behaupteter Rechtsverstoß, aber eine wesentliche inhaltliche Vorbereitung für eine gute öffentliche Website.
- **Social Preview vorbereiten:** Im aktuellen Head fehlen Open-Graph-/Social-Preview-Angaben. Nach Festlegung von öffentlicher URL und geeignetem Motiv ergänzen und eine geteilte URL prüfen. Kein fremdes Personenbild als Marina-Portrait verwenden. P2, kein aktueller Bedienfehler.
- **Ungenutzte Assets prüfen:** Optionaler Pflegepunkt, kein Release-Hindernis aus Performancegründen. Quellmaterial nicht ohne Entscheidung löschen.

## 16. Entscheidungsmatrix

P0 bezeichnet hier einen vor Veröffentlichung zu behebenden Fehler beziehungsweise einen ausdrücklich bereits dokumentierten Release-Blocker. P1 ist ein klarer Nutzungsgewinn, P2 begrenzter optionaler Feinschliff, P3 eine Variation ohne ausreichenden Änderungsgrund. BLOCKED bedeutet, dass belastbare Fakten oder freigegebenes Material fehlen.

| Problem / Entscheidung | Priorität | Aufwand | Risiko | Empfehlung |
| --- | --- | --- | --- | --- |
| F1: Sticky verdeckt Kartencontrols | P0 | mittel | mittel | ändern |
| F2: WhatsApp verschwindet vor erreichbarer Kontaktaktion | P1 | mittel | mittel | ändern |
| F3: Kleine Texte auf Rosé/Sand zu kontrastarm | P1 | klein | niedrig | ändern |
| R1: Ruhige endgültige Review-Komposition | P1 Design; Ersatz vor Release erforderlich | mittel | mittel | ändern |
| F4: 320 × 360 RU-Menü / geringe Höhe mit Dock | P2 | klein bis mittel | niedrig bis mittel | testen |
| F5: Vorhandene Notfallnummern nicht als Telefonlinks | P2 | klein | niedrig | ändern, optional |
| F6: Deutsche Legal-Ziele hinter RU-Links | P2 | klein | niedrig | testen |
| F7: Passendere mobile Bilddateien | P2 | mittel | niedrig bis mittel | zunächst lassen; bei Netzwerknachweis testen |
| B1: Konkrete Leistungen, Gebiet, Betreuungsform | BLOCKED | klein bis mittel nach Klärung | mittel | externe Information abwarten |
| B2: Echtes Portrait / persönliche Angaben | BLOCKED | mittel | mittel | externe Information abwarten |
| B3: E-Mail, Berufsangabe, reale Kommunikationspraxis | BLOCKED; P0 vor Go-Live | klein bis mittel nach Klärung | mittel | externe Information abwarten, danach ändern |
| Datenschutztext gegen finalen technischen Stand | P0 vor Go-Live | mittel | mittel | nach endgültiger Integrationsentscheidung ändern und prüfen |
| Open Graph / Social Preview | P2 Release | klein | niedrig | nach finaler URL testen/ergänzen |
| Alte PNGs / ungenutzte Bilder | P2 Pflege | klein | mittel bei unnötigem Verlust von Originalen | zunächst lassen |
| H1, H2, Hero-Bild, Weißraum, Nummern | P3 | klein bis mittel | mittel durch Verlust der Gestaltung | lassen |
| Kartenmechanik, Progress, Pfeile, gleiche Höhen | P3 | mittel bei Umbau | mittel | lassen |
| Telefonnummer-Gruppe, Divider, Desktop-Komposition | P3 | klein bis mittel | mittel | lassen |

## 17. Maximal acht Empfehlungen für den nächsten Implementierungsdurchgang

Nach tatsächlichem Nutzen geordnet; Freigabe und Umsetzung sind ausdrücklich **nicht Teil dieses Audits**. Die Release-Sperren müssen unabhängig von der Reihenfolge vor jeder Veröffentlichung erledigt sein.

1. **Überdeckung der Kartencontrols durch den Sticky-CTA beheben.** Kartenbedienung als stabile Ausschlusszone behandeln; weder Pfeile noch CTA-Touchfläche verkleinern.
2. **Mit bestätigten Marina-Angaben das tatsächliche Angebot und Betreuungsgebiet präzisieren.** Höchster inhaltlicher Nutzen, aber erst nach B1. Vorhandene Texte konkretisieren statt weitere Sections hinzufügen.
3. **Die mobile WhatsApp-Übergabe im Kontaktabschluss korrigieren.** Reguläre Aktion statt Abschnittsbeginn als maßgeblichen Endpunkt prüfen. Bestehende Kontaktkomposition erhalten.
4. **Bekannte Release-Angaben und den Datenschutzabgleich fertigstellen.** Echte Daten vorausgesetzt; keine Veröffentlichung mit Placeholder und widersprüchlichem Review-Datenfluss.
5. **Die endgültige Review-Lösung einbauen.** Ruhig, belegbar, sprachlich passend; temporäres Widget vollständig ersetzen, nicht weiter polieren.
6. **Kontrast der betroffenen kleinen Texte auf Rosé und Sand verbessern.** Eng begrenzte Korrektur, ohne Farbwelt oder Typografie neu aufzubauen.
7. **Eine gezielte Variante für sehr kurze Displays testen.** RU-Menü bei 320 × 360 und Dock-Platzbedarf getrennt beurteilen; normale Mobilansichten unverändert lassen.
8. **Optional die bereits vorhandenen Notfallnummern klickbar machen.** Kleiner Bediengewinn ohne zusätzliche medizinische Inhalte.

Ein echtes Portrait ist wertvoll, wird hier aber nicht als erzwingbare nächste Codeänderung geführt. Ebenso wenig müssen H1, Hero-Bild, große Nummern, Kartencontrols, Divider oder Desktop-Weißraum noch einmal gestaltet werden.

**NEXT STEP:** Menschliche Entscheidung über die obigen Punkte und Einholen von B1/B3. Danach einen eng begrenzten Implementierungspass auf Basis von `5370689` planen. Keine offene Umsetzung aus diesem Audit. Die Browserprüfung ist abgeschlossen; der Bericht ist vollständig, kein Save-Mode-Zwischenstand.

### Belegindex zur Wiederaufnahme

Alle Belege liegen außerhalb des Repositorys im oben genannten TEMP-Verzeichnis. Die Verzeichnislebensdauer hängt von der lokalen TEMP-Bereinigung ab.

| Beleg | Datei |
| --- | --- |
| Desktop-Hero | `1440-de-hero.png` |
| Mobile-Hero 390 | `390-de-hero.png`, `390-ru-hero.png` |
| Mobile-Hero 320 | `320-de-hero.png`, `320-ru-hero.png` |
| Kartenbedienung ohne Überdeckung | `390-de-card02-viewport.png`, `390-ru-card03-viewport.png` |
| Sticky/Karten-Konflikt | `320x640-de-cards-partial-conflict.png`, `390x844-de-cards-conflict.png` |
| Typische Sticky-Position / sehr kurze Höhe | `320x640-de-after-hero.png`, `320x360-de-after-hero.png` |
| Kontaktabschluss / Kontaktübergang | `390-de-kontakt.png`, `390x844-de-contact-entry.png`, `320x640-ru-contact-entry.png` |
| Geöffnetes Menü | `390x844-de-menu.png`, `320x480-de-menu.png`, `320x360-ru-menu.png` |
| Kurzes Menü nach Scrollen | `320x360-ru-menu-scrolled.png` |
| Safe Area | `320x640-de-safe-area.png` |
| Kleine Kontakttexte | `320-de-contact-small-text.png` |
| Notfall-FAQ geöffnet | `320-de-emergency-faq.png` |
| RU-Link führt zur deutschen Datenschutzseite | `320-ru-link-german-privacy.png` |
| Hauptmatrix / Sections / Text | `independent-matrix.json` |
| Interaktionen / Menü / Sticky-Geometrie | `interactions.json`, `menus.json`, `sticky.json` |
| Kontrast / Reduced Motion / weitere Checks | `additional-checks.json`, `reduced-and-contrast.json` |
| Kurze vollständige Scrollgänge | `short-full-scroll.json` |

Hinweis zu Rohprotokollen: Die erste unmittelbare Reduced-Motion-Abfrage erfolgte vor dem Scroll-Event und zeigte noch `01`; nach zwei Rendering-Frames war der Endzustand korrekt `04`, siehe `reduced-and-contrast.json`. Ein Feld namens `localImages` im kurzen Scrollprotokoll erfasste versehentlich auch externe Review-Avatare. Ein dortiger negativer Wert ist kein Nachweis eines defekten lokalen Assets; die lokalen Motive wurden separat nach tatsächlichem Besuch geprüft. Diese Messartefakte wurden nicht als Websitefehler gewertet.

Abschlussprüfung: `git status --short --branch` zeigt ausschließlich `?? ASTRA_FINAL_CRITIC_AUDIT.md`. `git diff --name-only` und `git diff --cached --name-only` sind leer; `git diff --check` ist erfolgreich. HEAD bleibt `5370689`. Die abschließende Browserabfrage bestätigt alle sieben lokalen Bilder einschließlich Logo als geladen (`local-image-final.json`). Website und bestehende Projektdateien unverändert.
