# Astra Deep Final – Fortsetzungsstatus

- Ausgangscommit: `875e1c3` auf `legal-pass`; sauberer Working Tree verifiziert.
- Aktiver Arbeitsbranch: `astra-deep-final`.
- Ausgangscheckpoint: `checkpoint/pre-astra-deep-final` → `875e1c3`.
- Bestehender Website-Checkpoint: `checkpoint/number-polish-final` → `875e1c3`.
- Grenzen: keine Änderungen an Rechtseiten, Placeholder-Mail oder Elfsight-Ladelogik; kein Push/Deployment. Keine erfundenen Marina-Fakten.

## Phasen

1. Git-Ausgangsstand geprüft und geschützt; Experiment-Branch erstellt.
2. Quellen, Geschichte, Release-Grenzen, vollständiges HTML/JS/CSS und sichtbare Bilder geprüft. Vollständiger Scroll-Audit 1440 DE sowie 390 DE/RU im lokalen Edge abgeschlossen.
3. IA/Content umgesetzt: DE/RU-Hero mit Name/beruflicher Ortszeile; kürzere Kartenüberschrift; doppelte Wochenbett-FAQ ersetzt; vier Kontaktangaben als Liste; Marina in Kontakt integriert. Deutscher HTML-Fallback synchronisiert.
4. Designrunde 1 umgesetzt und im Browser geprüft: eigenständiger Namens-Hero, ruhigere Kartenstaffelung, vollbreiter Reviews-Einstieg, zusammengeführter Kontaktabschluss. Mobile Karten besitzen Pfeile/Position, Tastatur/Home/End und Reduced-Motion-Verhalten. Navigation besitzt Abschnittsstatus; mobiles Menü fokussiert sein Sprungziel und hält Tab im offenen Menü.
5. Zweite gezielte Korrektur: schwebender Kontakt unter 1400 px ausgeblendet, da der Kreis im realen mobilen Screenshot Orientierungstext überdeckte. Letzten redundanten Satz der neuen FAQ gestrichen. Design abgeschlossen mit `ce405a4`.
6. Unterbrochenen QA-Schritt nahtlos fortgesetzt: offene Skriptänderungen erhalten, Tests korrigiert und vollständige Produktions-QA bestanden. Keine weitere Änderung am Website-Code nach dem Designcommit.
7. Finale Screenshots und deutsche/russische Redaktion geprüft; Historie und reproduzierbares QA-Skript fertiggestellt. Abschlusscheckpoint: `checkpoint/astra-deep-final` (Commit-ID im nachfolgenden Dokumentationsabschluss).

## Checkpoints dieses Durchgangs

- `checkpoint/pre-astra-deep-final` → `875e1c3`
- Statusinitialisierung → `11d4c9d`
- `checkpoint/astra-deep-content` → `b11abc2`
- `checkpoint/astra-deep-design` → `ce405a4` (bestehend, bei Wiederaufnahme verifiziert).
- `checkpoint/astra-deep-final` → finaler QA-Abschlusscommit; ID wird nach Erstellung ergänzt, ohne bestehende Tags zu verändern.

## Entscheidungen / verworfene Ideen

### A – klare Qualitätsgewinne

- Marina-Block: 640 px Desktop / 812 px Mobile für einen Satz, der den Hero wiederholt. Mit Kontakt zu einem echten Abschluss zusammenführen; Name/Ort/Sprachen als Identität, daneben konkrete Anfragehilfe. `#ueber-mich` als Ziel erhalten.
- Doppelte Wochenbett-FAQ durch die bislang fehlende organisatorische Frage ersetzen: Was vor einer Betreuung klären? Keine neuen medizinischen Fakten nötig.
- Kontaktangaben aus dem Fließtext in vier gut scannbare Angaben überführen; Telefonnummer als unmittelbar nutzbare Alternative. Datenschutz-Hinweis inhaltlich erhalten.
- Hero: Name als typografischer Schwerpunkt, Rolle und Ort in eigener Zeile; bislang unglückliche Umbrüche wie „Rymmer in“. Sinnvollen internen Weg zur Anfragehilfe ergänzen.
- Desktop-Bewertungsüberschrift überschreitet ihre Spalte (354 px Text / 309 px Box). Komposition mit breiter, ruhiger Überschrift über dem Widget.
- Mobile Karten benötigen eine ausdrücklich bedienbare Navigation zusätzlich zur Wischgeste; Reduced Motion auch bei programmgesteuertem Scrollen berücksichtigen.

### B – als Gesamtkomposition prüfen

- Kontakt auf zwei klar unterschiedliche Zonen verteilen: kompakte dunkle Identität mit kleinerem Kontaktmotiv und helle Anfragefläche. Keine bildfüllende Handyhälfte als Lesebarriere auf Mobile.
- Orientierung kürzen und die Abgrenzung zu Marinas konkretem Angebot näher an die fachliche Liste rücken.
- Einfache aktuelle Abschnittsmarkierung in der Navigation, keine zusätzliche Dekoration.

### C – erhalten / verworfen

- Vier Bildkarten, alle Originaldateien, lokale Schriften, warm-neutrale Palette und 14-px-Nummern erhalten.
- Kein neues Foto nötig: Hero und Karten tragen die visuelle Geschichte; das Faltmotiv wiederholt Materialität ohne Personeninformation. Datei bleibt erhalten, eigener Block entfällt.
- Keine Biografie/Philosophie, keine neue medizinische Detailsection, keine erfundenen Leistungs-/Verfügbarkeitsangaben.
- Elfsight-Technik, Rechtsseiten und Release-Checkliste unangetastet. Externe Review-Inhalte bleiben providerbestimmt.

### Ziel-IA

Hero (wer/wo/Sprachen) → Hebammenhilfe allgemein → vier Anfrageanlässe → Erfahrungen → organisatorisches FAQ → Marina + konkrete erste Anfrage.

## Letzte erfolgreiche Tests

Baseline: 1440 DE / 390 DE/RU ohne Dokument-Overflow oder JS-Ausnahmen; alle lokalen Bilder geladen. Review-Headline mit eigenem Text-Overflow auf Desktop. Screenshots/Report unter `%TEMP%/hebamme-astra-baseline`. Einige externe Review-Avatare laden zeitversetzt.

In-App-Browser wegen `sandboxPolicy`-Verbindungsfehler nicht nutzbar. Lokaler Edge wird über `scripts/deep-pass-browser.mjs` geprüft; keine zusätzliche Abhängigkeit installiert. Finale Prüfung an der gebauten Produktionsfassung, Preview-Port 4175, Basis `/hebamme-web/`.

Content-Phase: `npm run build` und `git diff --check` erfolgreich. Neue organisatorische Checkliste benötigt keine neue fachliche Quelle. Bestehende Aussagen zu Hebammentätigkeit, Kosten und Notfallwegen unverändert abgesichert; keine neue medizinische Behauptung.

Designrunde: 1440/1024/768/390/320 DE sowie 390/320 RU: kein Dokument- oder Text-Overflow, keine JS-Ausnahmen, keine fehlenden lokalen Bilder oder Anker. 1440/390 DE und 390 RU visuell geprüft; Report und Abschnittsbilder unter `%TEMP%/hebamme-astra-design`. Nach zweiter Korrektur Build/diff-check erneut erfolgreich.

## Finale QA / Wiederaufnahme am 20.09.2026

Wiederaufnahme 20.09.2026: Branch/HEAD/Tags und alleinigen offenen QA-Skript-Diff rekonstruiert, unverändert übernommen. Alte Testserver 5175/4175 über ihre Terminals beendet; keine verwaisten Headless-Tests mehr aktiv. Frischer Build und Produktions-Preview auf 4175 erfolgreich.

Alter Lauf hatte 88/95 Checks bestanden; sieben identische FAQ-Fehlschläge waren Testfehler: CDP-Enter ohne Zeichenereignis löste native Summary-Aktivierung nicht aus. Korrigiert. Zusätzlich lazy geladene, horizontal zunächst unsichtbare Kartenbilder vor Bewertung tatsächlich besuchen. Gezielter 390-DE-Lauf jetzt 30/30 bestanden, ohne JS-/HTTP-Fehler. Website-Code musste nicht geändert werden.

Rechtseiten/Release-Checkliste sind bytegleich zum Ausgangscommit, Elfsight-Funktion identisch. Alle vier Quellenlinks HTTP 200. Redaktion DE/RU nochmals gelesen: keine neuen unbelegten Marina-Fakten, kein Anlass zur Textänderung.

Vollständige Produktionsmatrix: **113/113 Prüfungen bestanden**. 1440 DE, 1024 DE, 768 DE, 390 DE/RU, 320 DE/RU. Kein dokumentweiter horizontaler Overflow, keine gemessenen Textüberläufe, fehlenden Übersetzungen, defekten lokalen Bilder oder internen Anker; keine JS-Ausnahmen und keine HTTP-Fehler im Testlauf.

Geprüft: FAQ mit Enter/Space und sichtbarem Fokus, alle Antworten geöffnet, Mobile-Menü mit Vorwärts-/Rückwärts-Fokusfalle und Escape/Fokusrückgabe, Fokus-/Sticky-Offset nach Ankersprung, Menüschließen beim Desktop-Breakpoint, aktive Desktop-Navigation, Karten mit Pfeiltasten/Home/End/Prev/Next inklusive deaktivierter Randzustände und Positionsanzeige, Touch-Swipe, Reduced Motion (sichtbare Inhalte und sofortiger Kartensprung), Telefon/WhatsApp, Favicon/Apple-Icon/Rechtseiten, deutscher No-JavaScript-Fallback. Dies ist eine gezielte Browser-/Tastaturprüfung, kein vollständiges WCAG- oder Geräte-Labor-Audit.

Finale Screenshots von Hero, Orientierung, vier Bildkarten, Reviews, offenem FAQ, Menü und Kontakt visuell geprüft; Desktop, Tablet und schmale Mobilgrößen einschließlich RU berücksichtigt. Keine objektiven Layoutfehler gefunden. Menü-/Interaktionsscreenshots erfassen jetzt den tatsächlichen Viewport statt einer unleserlich skalierten Ganzseite. Geschmackliche Varianten von Hero-Größe, Weißraum und Bildauswahl bleiben bewusst außerhalb dieses Abschlusses.

Regressionsskript bleibt unter `scripts/deep-pass-browser.mjs`. Start nach Build/Preview: `node scripts/deep-pass-browser.mjs`. Node 22+ und lokaler Edge, alternativ `BROWSER_PATH`; keine neuen npm-Abhängigkeiten. Screenshots und Report: `%TEMP%/hebamme-astra-final`, nicht versioniert. Browserprofile werden nach dem Test beseitigt.

Finaler Website-HEAD: `checkpoint/astra-deep-final`; der anschließende reine Dokumentationscommit ergänzt dessen konkrete ID. Aktuellen Branch-HEAD eindeutig mit `git rev-parse HEAD` ermitteln. Abschluss erfolgt mit sauberem Working Tree; kein Push, kein Deployment.

## NEXT STEP

**COMPLETE.** Keine kreative oder technische Phase dieses Passes mehr offen. Externe Release-Aufgaben bleiben ausschließlich die bereits dokumentierten Punkte in `LEGAL_RELEASE_CHECKLIST.md`, insbesondere echte Kontakt-Mail und späterer Elfsight-Ersatz mit anschließender Datenschutzprüfung. Dieser Pass ist keine rechtliche Freigabe.
