# Persönliche Vorstellung: vorläufiger Stand

Der Abschnitt `#vorstellung` steht zwischen den Anfragekarten und den Bewertungen. Er enthält nur die bestätigten Angaben Name, Beruf, Nürnberg und Deutsch/Russisch. Die persönliche Vorstellung und das Bild sind sichtbar als Platzhalter gekennzeichnet; es wird kein Stockfoto oder generiertes Porträt verwendet.

## Vor Veröffentlichung erforderlich

- Marina muss ihren persönlichen Vorstellungstext ergänzen beziehungsweise bestätigen. Der aktuelle Platzhalter benennt lediglich die vorgesehenen Themen Arbeitsweise, beruflicher Hintergrund/Erfahrung und die Begleitung von Familien; er ist kein fertiger persönlicher Text.
- Ein echtes, von Marina bereitgestelltes Porträt muss die beschriftete Platzhalterfläche ersetzen. Dafür in `index.html` innerhalb von `.personal-portrait` das Platzhalterelement durch ein lokales `<img>` mit passendem Alternativtext und Größenangaben ersetzen; die vorhandene Klasse gestaltet das Bild responsiv. Keine fremde Person als Marina ausgeben.
- Die russischen Texte des neuen Abschnitts (`profile` in `src/main.js`) wurden von uns erstellt und müssen von Marina sprachlich und fachlich geprüft werden. Nach Einfügen des endgültigen persönlichen Textes ist auch dessen RU-Fassung abzustimmen.

Der vorhandene dunkle Kontaktblock bleibt für die Kontaktaufnahme zuständig. Keine neuen Abhängigkeiten oder externen Requests. Kein Push und kein Deployment.

## Prüfung und Sicherung

Eine Umsetzungs- und Prüfrunde: Produktionsbuild, 13 bestehende Tests, 74 Profil-, 135 Interaktions- und 439 Review-Browserprüfungen sowie `git diff --check` bestanden. Die Profilansicht wurde bei 320, 375, 390, 768, 1024 und 1440 CSS-Pixeln in DE/RU geprüft, einschließlich Reduced Motion und deutschem Fallback ohne JavaScript. Desktop- und Mobile-Screenshots wurden visuell kontrolliert; keine Browserfehler oder fehlgeschlagenen beziehungsweise neuen externen Requests festgestellt. Die Browserprüfung nutzt Edge mit emulierten Viewports, keinen physischen Safari-/iOS-Test.

Branch `feature/native-reviews`; Vorab-Tag `checkpoint/pre-marina-profile`, Abschluss-Tag `checkpoint/marina-profile-final`.
