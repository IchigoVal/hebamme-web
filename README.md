# HebammeWeb

Lokale Entwicklungsversion der Website von Marina Rymmer. Die Website verwendet Vite und Vanilla JavaScript, stellt Inhalte auf Deutsch und Russisch bereit und enthält drei HTML-Einstiegspunkte: Startseite, Impressum und Datenschutz.

## Entwicklung und Prüfung

Voraussetzungen: Node.js 22 und npm. Abhängigkeiten mit `npm ci` installieren; `npm run dev` startet den Entwicklungsserver. `npm test` prüft die Review- und Leistungsdaten, `npm run build` erzeugt den Produktionsbuild in `dist/`, und `npm run preview` zeigt diesen lokal an. Vor `dev` und `build` werden die Daten automatisch aufbereitet. Die relative Vite-Basis erlaubt den Betrieb in einem Unterverzeichnis; der bestehende GitHub-Actions-Workflow deployt nur bei entsprechender Einrichtung des jeweiligen Repositories.

Für Browserprüfungen unter Windows mit Edge und Node 22 zuerst den Build erzeugen und `npm run preview -- --host 127.0.0.1 --port 4175 --strictPort` starten. Danach beispielsweise `node scripts/deep-pass-browser.mjs http://127.0.0.1:4175/ navigation` ausführen. Weitere Prüfphasen sind `marina-services`, `native-reviews`, `inquiry-legal`, `header-contact`, `interaction` und `final-implementation`. Berichte und Screenshots liegen in `%TEMP%/hebamme-astra-<phase>/` und werden beim nächsten Lauf derselben Phase überschrieben. `BROWSER_PATH` kann einen anderen Chromium-Browser wählen.

## Inhalte und Quellen

- `MARINA_LEISTUNGEN.md` ist die verbindliche deutsche Leistungsquelle. `scripts/prepare-services.mjs` erzeugt daraus die deutschen Daten und den HTML-Fallback; `src/data/services/services.ru.json` enthält den noch nicht freigegebenen russischen Entwurf. `node scripts/prepare-services.mjs --check` prüft die generierten Dateien.
- Die Review-Herkunft und Aktualisierung sind in `src/data/reviews/README.md` beschrieben. `scripts/prepare-reviews.mjs` bereitet den vollständigen Export und bestätigte Originaltexte zum lokalen Snapshot auf. Die Roh- und Verifikationsdateien sind für spätere Aktualisierungen aufzubewahren und gehören nicht in den öffentlich ausgelieferten Build.
- `CONTENT_SOURCES.md` dokumentiert Quellen allgemeiner Aussagen. Font-Lizenzen und die Herkunft des Google-Symbols liegen unter `src/assets/`. Der Ordner `assets/` enthält ältere Bild- und Logo-Originale; `public/images/about-detail.jpg` bleibt als separates Original erhalten.
- Git-Tags dokumentieren frühere Entwicklungsstände; `checkpoint/pre-project-cleanup` enthält den Stand unmittelbar vor der Projektbereinigung.

## Vor offizieller Veröffentlichung

Die öffentliche Vorschau ist keine Freigabe. Ein echtes Porträt und ein von Marina freigegebener persönlicher Text fehlen. Die russischen Texte, einschließlich Leistungsbereichen, Gruppenüberschriften, Profil und Anfragekarten, müssen fachlich und sprachlich geprüft werden. Angebotsdetails, Einsatzgebiet, Betreuungsform und Verfügbarkeit dürfen nur nach Bestätigung ergänzt werden. `LEGAL_RELEASE_CHECKLIST.md` enthält die offenen Kontakt-, Datenschutz-, Hosting- und Rechtspunkte; insbesondere sind Rechte und gegebenenfalls Zustimmungen zur Nutzung der Google-Rezensionen zu klären. Ein neuer Datenexport erfordert eine Prüfung der Quellen und Originalsprachen.
