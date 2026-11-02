# Reviews Import Report

Historischer Herkunftsnachweis des ersten Teilimports, keine aktuelle Beschreibung der Website. Der spätere vollständige Export und die heutige Datenaufbereitung sind in [README.md](README.md) dokumentiert.

Snapshot: 21. September 2026 (Europe/Berlin)

Branch: `reviews-data-import`

Kanonische Place-ID: `ChIJwYLvBUVXn0cR3SWf5Sv-pNU`

## Executive Summary

Google Maps meldet aktuell **5,0 Sterne und 66 Rezensionen**. Die zuvor extern genannte Zahl 64 ist damit veraltet. Google veröffentlicht außerdem die genaue Verteilung: 65 Rezensionen mit 5 Sternen und eine Rezension mit 2 Sternen.

Dieser Lauf hat **29 eindeutige Reviews vollständig erfasst und bei Google verifiziert**. Davon stammen 22 direkt aus strukturierten Google-Maps-Antworten auf öffentlich ausgeführte Sortier- und Themenfilter; sieben weitere wurden nach der Elfsight-Gegenprüfung einzeln über ihre öffentlichen direkten Google-Review-URLs geöffnet und dort anhand von Review-ID, Autor, Bewertung und Volltext verifiziert. Für 37 der 66 gemeldeten Bewertungen waren im anonymen Google-Maps-Browser keine individuellen IDs oder Karten erreichbar. Deshalb lautet das Ergebnis bewusst:

- `totalReported`: 66
- `totalCaptured`: 29
- `totalVerified`: 29
- `completeness`: `partial`

Es wurden keine fehlenden Reviews rekonstruiert, geschätzt oder aus Branchenverzeichnissen übernommen.

## Canonical Google Listing

| Feld | Google-Snapshot |
| --- | --- |
| Name | Hebamme Marina Rymmer |
| Place ID | `ChIJwYLvBUVXn0cR3SWf5Sv-pNU` |
| Maps Data ID | `0x479f574505ef82c1:0xd5a4fe2be59f25dd` |
| Bewertung | 5,0 |
| Rezensionen | 66 |
| Telefon | 0176 23488396 |
| Adresse | von Google nicht angezeigt |
| Website | von Google nicht angezeigt; UI zeigt „Website hinzufügen“ |
| Standardsortierung | Relevanteste |

Der Aufruf über die vorgegebene Place-ID leitete eindeutig auf denselben Eintrag weiter. Name und Telefonnummer stimmen mit dem Projekt überein. Die im Projekt bekannte Website und die Wolframs-Eschenbacher Straße werden im Google-Profil aktuell nicht angezeigt und wurden deshalb nicht als Google-Metadaten ausgegeben.

## Google Listing Resolution

`canonicalListing` ist `ChIJwYLvBUVXn0cR3SWf5Sv-pNU`. Google-Maps-Suchen nach dem kanonischen Namen, der Schreibweise „Maryna“, der historischen Hornungstraße und der aktuellen Wolframs-Eschenbacher Straße führten jeweils zu demselben Data-ID-Eintrag. Die Suchen nach alter Festnetznummer und Mobilnummer allein ergaben keinen weiteren Maps-Treffer.

`historicalListings[]` enthält deshalb keinen zweiten verifizierten Google-Place-Eintrag. Öffentliche Verzeichnisse nennen weiterhin Hornungstraße 39, ältere Telefonnummern und eigene Bewertungsbestände. Diese Verzeichnisbewertungen sind keine Google-Rezensionen und wurden nicht importiert.

`possibleDuplicates[]` ist leer. Als `mergedEvidence` gilt die einheitliche Auflösung aller Namens- und Adressvarianten auf denselben Google-Eintrag. Ob Google intern frühere Profile zusammengeführt hat, lässt sich öffentlich nicht beweisen; Google zeigt keine Merge-Historie. Es wurde keine zweite aktive Place-ID gefunden.

## Google Gesamtbewertung

Google zeigt 5,0 Sterne. Aus der öffentlich zugänglichen Verteilung ergibt sich rechnerisch `327 / 66 = 4,954545...`, was in der Google-Anzeige auf 5,0 gerundet wird.

## Google Review Count

Google meldet 66 Reviews. Die Zahl wurde in zwei getrennten Browserdurchläufen nach erneutem Laden bestätigt. Der Sternverteilungsblock summiert sich ebenfalls exakt auf 66.

## Capture Method

Der Eintrag wurde zuerst über die Place-ID und anschließend über die Google-Maps-Suche verifiziert. Danach wurde der Review-Tab geöffnet. Erfasst wurden die Sortierungen Relevanteste, Neueste, Höchste Bewertung und Niedrigste Bewertung sowie alle zehn sichtbaren Themenfilter: baby, geburt, schwangerschaft, geduld, fachwissen, sicherheit, Spezialist, sowjet, psychisch und neugeborenen.

Die In-App-Browser-Verbindung dieser Sitzung scheiterte bereits beim technischen Verbindungsaufbau. Der gleiche Ablauf wurde deshalb in einem lokalen Chrome-Browser mit Playwright durchgeführt. Google wurde nur über öffentlich sichtbare Seiten und die dabei entstehenden normalen Browserantworten gelesen. Es gab keine Anmeldung, keine CAPTCHA-Umgehung, keine privaten Tokens, keinen Rate-Limit-Bypass und keinen Abruf einer versteckten, nicht durch die UI ausgelösten Google-Schnittstelle.

Elfsight wurde erst nach dem Google-Durchlauf untersucht. Seine sieben zunächst zusätzlichen direkten Google-Review-URLs wurden anschließend einzeln bei Google geöffnet. Nur nach dieser Google-Verifikation wurden diese Reviews in `reviews.verified.json` aufgenommen.

## Google Review Loading Behavior

Im anonymen Review-Panel liefert Google je aktiver Sortierung oder Themenansicht fünf Review-Karten. Danach zeigt die UI „Mehr Rezensionen (61) ansehen“ und den Hinweis, dass die Ansicht beschränkt ist. Wiederholtes Scrollen bis zum tatsächlichen Ende änderte weder Scrollhöhe noch ID-Menge. Die öffentlich ausgelösten Antworten enthielten keinen Cursor oder Page-Token für weitere Reviews.

Die öffentlich zugänglichen direkten Review-URLs funktionieren ohne Anmeldung und zeigen genau die adressierte Rezension. Bei automatisch übersetzten Reviews wurde „Original ansehen“ betätigt und der Originaltext gespeichert.

## Network Findings

Google liefert die fünf jeweils aktiven Reviews strukturiert über `qv9Egd`-Antworten des Maps-`batchexecute`-Transports. Darin waren stabile Review-IDs, vollständige Texte, Original- und Übersetzungssprachen, Zeitstempel, relative Datumsangaben, Autor-Metadaten, direkte Review-URLs, Inhaberantworten und gegebenenfalls Medien-URLs enthalten.

Die Antworten enthielten keine nutzbare Pagination für die restlichen 37 individuellen Datensätze. Temporäre Requestwerte, Sessionparameter, Reporting-Links und Business-Reply-Links wurden nicht in den normalisierten Datensatz übernommen.

Elfsight rief für das konfigurierte Widget öffentlich einen Source-Endpunkt und einen Review-Endpunkt auf. Der Source-Endpunkt meldete dieselbe Place-ID, 5,0 und 66. Der Review-Endpunkt lieferte 23 Reviews mit den Filtern `text_required`, `min_rating=5`, `page_length=100`, Sortierung `date`.

## Captured Fields

Je nach Google-Oberfläche beziehungsweise Google-Netzwerkantwort wurden gespeichert: Review-ID, Autor, Rating, vollständiger Originaltext, gegebenenfalls Google-Übersetzung, Sprache, exakter technischer Zeitstempel, relative Datumsanzeige, Avatar-URL, Autor-/Contributor-URL, direkte Review-URL, öffentlich sichtbare Review- und Fotoanzahl des Autors, Inhaberantwort mit Datum, Medien-URL und Erfassungskontext.

Jedes normalisierte Feld trägt eine nachvollziehbare Provenienz. Exakte Daten aus sieben nur per direkter URL verifizierten Reviews stammen aus dem Elfsight-Cache und sind entsprechend mit `publishedDateSource: "elfsightCache"` gekennzeichnet; Review-ID, Autor, Sterne, Originaltext und Antwort wurden bei Google selbst kontrolliert.

## Missing Fields

Für 37 gemeldete Google-Bewertungen fehlen individuelle IDs und Karten. Daher fehlen für diese Einträge Autor, Text, Datum, Avatar, Source-URL und Antworten. Aus der Google-Gesamtverteilung ist nur bekannt, dass nach den 29 erfassten Reviews noch 37 weitere Fünf-Sterne-Bewertungen existieren.

Local-Guide-Status wurde nicht zuverlässig als strukturiertes Feld identifiziert und bleibt `null`. Google zeigt keine aktuelle Straßenadresse und keine Website. Eine öffentliche Zusammenführungshistorie früherer Listings ist nicht verfügbar.

## Full Text Verification

Alle 29 gespeicherten Texte sind vollständig. 22 Volltexte stammen direkt aus den strukturierten Google-Antworten; sieben wurden auf den direkten Google-Review-Seiten geöffnet. Bei fremdsprachigen Reviews wurde die Originalansicht verwendet. Die Validierung fand keine Vorschau-Endungen, „Mehr lesen“-Reste, Ersatzzeichen oder HTML-Entities.

Die 23 Elfsight-Texte stimmen zeichengetreu mit den bei Google verifizierten Originaltexten überein. Es gibt keine leeren Texte im verifizierten Teilbestand.

## Avatar Situation

Für alle 29 verifizierten Reviews liegt eine Avatar-URL vor. 22 stammen direkt aus Google-Strukturdaten, sieben aus dem Elfsight-Cache desselben Google-Reviews. Elfsight lädt Avatare über einen eigenen Bildproxy. Keine Avatar-Datei wurde heruntergeladen oder ins Repository kopiert.

## Review Media

Eine der 29 verifizierten Rezensionen enthält ein öffentlich sichtbares Reviewfoto. Die Google-Medien-URL wurde als Metadatum gespeichert. Es wurde kein Reviewbild heruntergeladen oder selbst gehostet.

## Owner Responses

Alle 29 erfassten Reviews besitzen eine vollständige Inhaberantwort. Antworttext, relatives Datum und – soweit strukturiert vorhanden – technischer Zeitstempel wurden gespeichert. Der zweite Validierungslauf bestätigte, dass die Antworttexte vollständig und nicht auf UI-Vorschauen gekürzt sind.

## Languages

Verteilung der 29 verifizierten Originaltexte:

| Sprache | Anzahl |
| --- | ---: |
| Deutsch | 24 |
| Russisch | 3 |
| Englisch | 1 |
| Ungarisch | 1 |

Google lieferte die Sprache für 22 Reviews strukturiert. Bei direkten Review-Seiten wurde die von Google genannte Originalsprache verwendet; wo Google keine Sprache nannte, wurde die Sprache aus dem Volltext erkannt. Texte wurden nicht übersetzt oder redaktionell verändert.

## Star Distribution

Öffentlich von Google gemeldete Gesamtverteilung:

| Sterne | Anzahl |
| --- | ---: |
| 1 | 0 |
| 2 | 1 |
| 3 | 0 |
| 4 | 0 |
| 5 | 65 |

Verteilung des verifizierten Teilbestands: 28 × 5 Sterne, 1 × 2 Sterne. Der Durchschnitt dieses Teilbestands ist 4,896552 und ist nicht mit dem Gesamtprofilwert gleichzusetzen.

## Deduplication

Dedupliziert wurde zuerst nach `sourceReviewId`, danach wären direkte Source-URL und schließlich Autor + Rating + Volltext verwendet worden. Alle 29 Source-IDs, lokalen IDs und Volltexte sind eindeutig. Es gab keine allein namensbasierte Zusammenführung.

## Google vs Elfsight

| Merkmal | Google | Elfsight |
| --- | --- | --- |
| Gesamtzahl | 66 | 66 |
| Gesamtwertung | 5,0 | 5,0 |
| Individuell erfasst | 29 | 23 im Service-Payload |
| Initial im Widget-DOM | – | 8 |
| Überlappung | 23 | 23 |
| Nur Google | 6 | – |
| Nur Elfsight nach Google-Direktprüfung | 0 | 0 |
| Sortierung | mehrere Sortierungen/Filter untersucht | Datum absteigend |
| Filter | keine dauerhafte Ratingbeschränkung | nur Text, mindestens 5 Sterne |
| 2-Sterne-Review | vorhanden | durch Widgetfilter ausgeschlossen |

Elfsight liefert Autor, Avatar, 5-Sterne-Rating, Volltext, exakten Unix-Zeitstempel, direkte Google-Review-URL, Sprache teilweise, Inhaberantwort und optionale Bilder. Die sichtbare Oberfläche zeigt 5,0, `(66)`, Google-Branding, relative Daten, Avatare, Autor, Text, „Mehr lesen“, einen Google-Bewertungsbutton und das Elfsight-Badge „Free Google Reviews Widget“. Im initialen DOM standen acht nach Datum sortierte Karten; der Service-Payload enthielt 23. Inhaberantworten waren im Payload vorhanden, im inspizierten initialen Widget-DOM jedoch nicht sichtbar.

Für Phase 2 sollte die eigene UI **zeigen müssen**: Sterne pro Review, Autor, Originaltext, Datum, klare Google-Quelle und direkten Original-Link; Gesamtwertung und Gesamtzahl nur mit sichtbarem Snapshot-Stand; DE/RU-Bedienung und Originalsprache. **Optional** sind Avatar, Inhaberantwort, Reviewmedien, Sprachfilter und ausdrücklich gekennzeichnete Übersetzungen. **Wahrscheinlich entbehrlich** sind Elfsight-Badge, dominante Bewertungsaufforderung, fremde Carousel-Punkte und Elfsights Avatar-Proxy.

## Completeness Verification

Der zweite Google-Durchlauf bestätigte erneut 66 Reviews, dieselbe Sternverteilung und dieselben fünf IDs in Relevanteste, Neueste und Niedrigste Bewertung. Alle sieben von Elfsight entdeckten zusätzlichen URLs wurden einzeln bei Google bestätigt. JSON-Validierung ergab keine doppelten IDs, doppelten Texte, fehlenden Autoren, ungültigen Ratings, gekürzten Texte, defekten Unicode-Zeichen oder HTML-Entities.

Vollständigkeit bleibt trotzdem `partial`, weil nur 29 von 66 individuellen Reviews zugänglich waren. Die 37 nicht individuell erfassten Bewertungen werden nicht als verifiziert ausgegeben.

## Historical / Duplicate Listings

Drittverzeichnisse führen historische Daten wie Hornungstraße 39, 0911 4620128 und teilweise eigene Bewertungszahlen. Stadtbranchenbuch nennt beispielsweise fünf eigene Bewertungen. Diese Inhalte wurden ausschließlich zur Identitätsprüfung verwendet und nicht als Google-Daten übernommen.

Alle gezielten Google-Maps-Suchen nach den historischen und aktuellen Identitätsmerkmalen führten zum kanonischen Profil. Es wurde keine weitere aktive Place-ID gefunden. Ein serverseitiger Merge früherer Google-Profile kann weder bestätigt noch ausgeschlossen werden.

## Known Uncertainties

- 37 individuelle Fünf-Sterne-Bewertungen sind im anonymen Google-Maps-Panel nicht erreichbar.
- Google zeigt keine aktuelle Adresse und keine Website; die Projektangaben können deshalb nicht als im Profil bestätigt gelten.
- Es gibt keinen öffentlichen Beleg für eine historische Google-Profilzusammenführung.
- Sieben exakte Veröffentlichungszeitstempel stammen aus Elfsights Cache; ihr jeweiliger Review-Inhalt wurde direkt bei Google verifiziert.
- Der Snapshot kann sich nach dem Erfassungszeitpunkt durch neue, bearbeitete oder entfernte Reviews ändern.

## Publication / Hosting Caveat

Die Daten wurden als technische Grundlage erfasst. Öffentlich sichtbare Daten sind nicht automatisch beliebig dauerhaft selbst hostbar. Die endgültige Verwendung von vollständigen Reviewtexten, Namen, Avataren, Inhaberantworten und Reviewmedien muss vor einem öffentlichen Release separat geprüft werden. Dieser Bericht ersetzt keine Rechtsberatung.

## Phase 2 Recommendation

Eine einzelne versionierte JSON-Datei ist für 66 überwiegend textbasierte Reviews weiterhin die einfachste Architektur. Ein Manifest mit Seitenfragmenten wäre bei dieser Datenmenge unnötig. Die spätere UI kann zunächst drei Reviews rendern und mit „Weitere Erfahrungen anzeigen“ jeweils drei weitere ergänzen. Avatare und Reviewbilder sollten nur bei Bedarf und lazy geladen werden.

Die UI sollte DE/RU-Steuertexte besitzen, Originalsprachen unverändert zeigen und Übersetzungen nur optional und gekennzeichnet anbieten. Ein ruhiges Karten- oder Listenlayout passt besser zum bestehenden Design als ein großer Fremd-Slider. Vor der Implementierung muss entschieden werden, ob mit dem verifizierten Teilbestand gearbeitet werden darf oder ob zuerst die fehlenden 37 individuellen Datensätze über einen von Google vorgesehenen, autorisierten Export ergänzt werden.

## NEXT STEP

Die fehlenden 37 individuellen Reviews über einen von Marina autorisierten Google-Business-Profile-Export oder eine von Google vorgesehene angemeldete Ansicht beschaffen. Danach IDs, Volltexte und Metadaten erneut gegen dieses Snapshot-Schema deduplizieren, `totalCaptured` und `totalVerified` auf 66 bringen und erst dann Phase 2 beginnen. Bis dahin bleibt der Datensatz ausdrücklich `partial` und darf nicht als vollständiger 66-Review-Snapshot dargestellt werden.
