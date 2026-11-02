# Persönliche Vorstellung: vorläufiger Stand

Der Abschnitt `#vorstellung` steht zwischen den Anfragekarten und den Bewertungen. Der Textentwurf beruht auf den bestätigten Angaben und den Aussagen aus `MARINA_LEISTUNGEN.md`; er ist von uns formuliert und noch nicht als persönlicher Vorstellungstext von Marina freigegeben. Die neutrale Fläche trägt ihren Namen und ihre Berufsbezeichnung; sie zeigt kein Foto, Stockbild oder generiertes Porträt.

## Vor Veröffentlichung erforderlich

- Marina sollte den aktuellen Textentwurf prüfen und ihren persönlichen Vorstellungstext zu Arbeitsweise, beruflichem Hintergrund und Erfahrung bei Bedarf ergänzen.
- Ein echtes, von Marina bereitgestelltes Porträt ist weiterhin offen. Dafür in `index.html` innerhalb von `.personal-portrait` das neutrale Element durch ein lokales `<img>` mit passendem Alternativtext und Größenangaben ersetzen; die vorhandene Klasse gestaltet das Bild responsiv. Keine fremde Person als Marina ausgeben.
- Die russischen Texte des neuen Abschnitts (`profile` in `src/main.js`) wurden von uns erstellt und müssen von Marina sprachlich und fachlich geprüft werden. Nach Einfügen des endgültigen persönlichen Textes ist auch dessen RU-Fassung abzustimmen.

Der vorhandene dunkle Kontaktblock bleibt für die Kontaktaufnahme zuständig. Keine neuen Abhängigkeiten oder externen Requests. Kein Push und kein Deployment.

## Prüfung und Sicherung

Eine Umsetzungs- und Prüfrunde: Produktionsbuild, 13 bestehende Tests, 74 Profil-, 135 Interaktions- und 439 Review-Browserprüfungen sowie `git diff --check` bestanden. Die Profilansicht wurde bei 320, 375, 390, 768, 1024 und 1440 CSS-Pixeln in DE/RU geprüft, einschließlich Reduced Motion und deutschem Fallback ohne JavaScript. Desktop- und Mobile-Screenshots wurden visuell kontrolliert; keine Browserfehler oder fehlgeschlagenen beziehungsweise neuen externen Requests festgestellt. Die Browserprüfung nutzt Edge mit emulierten Viewports, keinen physischen Safari-/iOS-Test.

Branch `feature/native-reviews`; Vorab-Tag `checkpoint/pre-marina-profile`, Abschluss-Tag `checkpoint/marina-profile-final`.
