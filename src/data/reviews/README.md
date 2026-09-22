# Daten der eigenen Review-Sektion

`marina-google-reviews.json` ist der vollständige vom Nutzer bereitgestellte Export (66 Bewertungen, erfasst am 21.09.2026). Die Datei wurde unverändert aus dem Projektroot hierher verschoben. Der frühere partielle Import und sein Bericht bleiben als historische Quellen erhalten.

`reviews.public.json` ist die einzige vom Frontend importierte Datei. `npm run reviews:prepare` erzeugt sie deterministisch; `npm run dev` und `npm run build` führen die Aufbereitung automatisch aus. `node scripts/prepare-reviews.mjs --check` prüft den Stand ohne Änderungen.

## Tatsächlich verwendete Daten

- Alle 66 Sternebewertungen tragen zu Gesamtzahl, Durchschnitt und Verteilung bei: 65 × 5 Sterne, 1 × 2 Sterne. Der Durchschnitt 327 / 66 wird wie im gelieferten Google-Snapshot auf eine Dezimalstelle zu 5,0 gerundet.
- Die UI enthält 62 Textrezensionen, je mit ID, Autor, Sternezahl, unverändertem Text, Sprachcode und der vorhandenen Google-Zeitangabe (`dateDisplayed`). Die vier Einträge ohne Text erzeugen keine leeren Karten. Die Sternverteilung wird nicht in der Oberfläche angezeigt.
- Reihenfolge: unveränderte Exportreihenfolge, ohne Sortier- oder Filterfunktion. Ab 720 px sechs Texte am Anfang und sechs pro weiterem Schritt; bis 719 px drei am Anfang und drei pro Schritt. Bereits sichtbare Texte bleiben bei Größenwechseln erhalten, die Schrittgröße folgt der aktuellen Breite. Die Zwei-Sterne-Rezension bleibt an Position 41 der Textrezensionen.
- Die Gesamtquelle `sourceUrl` wird unverändert aus `business.sourceUrl` des vollständigen Exports übernommen und beim Import auf eine HTTPS-Google-Maps-Listing-URL geprüft. Sie dient ausschließlich dem bewusst geöffneten Textlink „Rezensionen auf Google“ im Bewertungsblock, nicht einem Widget oder automatischen Abruf. `target="_blank"`, `noopener noreferrer` und `no-referrer` sichern den externen Link ab. Die entfernte Zählzeile bleibt entfernt.
- Bei exakter ID-Übereinstimmung wird nach bestätigter Nutzerentscheidung der bereits verifizierte Originaltext aus `reviews.verified.json` übernommen. Autor und Rating müssen übereinstimmen. 24 Texte sind inhaltlich identisch, fünf ersetzen bereits übersetzte Fassungen im neuen Export:

| Autor | Originalsprache |
| --- | --- |
| Odreea Sincovschi | Russisch |
| Татьяна Драгуля | Russisch |
| Дарья Колесник | Russisch |
| Angyelka Gucunszki | Ungarisch |
| Sandeep Kaur | Englisch |

Die verbleibenden 33 Texte stammen ausschließlich aus dem neuen Export. Ihre Originalsprache lässt sich anhand des vorhandenen verifizierten Teilbestands nicht zusätzlich bestätigen; sie werden gemäß Nutzerentscheidung unverändert übernommen. Karolina Reiters Text enthält bereits Deutsch und Russisch; beide Teile bleiben erhalten. Sprachattribute an Textabschnitten unterstützen die Aussprache durch Screenreader.

Nur literal gespeicherte `\n` / `\r\n` werden in echte Zeilenumbrüche umgewandelt. Rechtschreibung, Interpunktion, Emojis, Absätze und Inhalt werden weder übersetzt noch redigiert. Die Vorschau begrenzt den unveränderten Text ausschließlich per CSS auf sechs Zeilen. Bei tatsächlicher Überlänge öffnet eine einzelne Weiterlesen-Aktion eine native, scrollbar bedienbare Leseansicht; das Raster bleibt unverändert. Escape oder Schließen führt den Fokus zurück zur Rezension.

Nicht in der UI-Datei: `ownerResponse`, Avatare, Reviewbilder, Google-Profile, individuelle Review-URLs, Google-Übersetzungsfelder, Local-Guide-Metadaten. Die einzige externe URL ist die oben beschriebene Gesamtquelle. Die relativen Google-Zeitangaben stammen vom Erfassungsdatum 21.09.2026, das unter dem Durchschnitt steht; ein Tooltip an jeder Zeitangabe erläutert diesen Bezug. Sie werden nicht laufend neu berechnet oder in erfundene exakte Veröffentlichungstage umgerechnet. DE übernimmt die Metadaten unverändert, RU lokalisiert ausschließlich diese Zeitangaben einschließlich des Bearbeitet-Hinweises; die Rezensionstexte bleiben immer unverändert.

## Pflege und offene Punkte

Bei einem neuen Export die Gesamtzahlen und vorhandenen Originale prüfen. Abweichende Autoren oder Ratings zu bereits verifizierten IDs führen bewusst zu einem Fehler und müssen anhand der Quelle geklärt werden. Rohdaten sind nicht in `public/` und werden nicht in den Produktions-Build kopiert.

Die Legal-Seiten wurden auf Wunsch nicht umgeschrieben. Die bisherigen Elfsight-Aussagen in `datenschutz.html` und der Datenschutz-/Release-Abgleich sind separate Folgepflege. Es findet kein automatischer Abgleich mit Google statt.

## Prüfungen

`npm test` prüft Datenintegrität, Originaltexte, Reihenfolge, Zwei-Sterne-Rezension, reine Sternebewertungen und die erlaubten Frontendfelder. Für Browserprüfungen erst `npm run build` und `npm run preview -- --host 127.0.0.1 --port 4175 --strictPort` starten, dann:

```text
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ native-reviews
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ interaction
node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/hebamme-web/ final-implementation
```

Der vorhandene Edge-Testweg benötigt Windows/Edge und Node 22+, keine neue Abhängigkeit. `BROWSER_PATH` kann einen anderen Chromium-Pfad setzen. Berichte/Screenshots bleiben in `%TEMP%/hebamme-astra-<phase>/`. Ein vorhandener Baseline-Bericht wird für Geometrievergleiche mitgenutzt; ohne ihn laufen die funktionalen Reviewchecks weiterhin.
