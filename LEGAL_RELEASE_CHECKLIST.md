# Legal Release Checklist

Stand: 19. September 2026

Diese Liste enthält nur Punkte, die vor einer Veröffentlichung noch anhand der tatsächlichen Praxis geklärt oder ersetzt werden müssen.

## Release-Blocker

- **Echte E-Mail-Adresse einsetzen:** `BITTE-ERSETZEN@example.invalid` ist nur ein Entwicklungsplatzhalter. Vor Veröffentlichung muss er in `impressum.html` und `datenschutz.html` durch eine echte, dauerhaft erreichbare E-Mail-Adresse ersetzt werden. Der Platzhalter darf nicht veröffentlicht werden.
- **Staat der Verleihung bestätigen:** Marina muss anhand ihrer Erlaubnisurkunde mitteilen, in welchem Staat die Berufsbezeichnung „Hebamme“ verliehen wurde. Diese Angabe ist anschließend im Impressum zu ergänzen.
- **WhatsApp-Praxis festlegen und Datenschutztext abgleichen:** Klären, ob ein privates oder geschäftliches WhatsApp-Konto eingesetzt wird, wer Zugriff hat, ob Cloud-Backups aktiv sind, wie lange Chats gespeichert werden und über welchen sicheren Weg medizinische Unterlagen ausgetauscht werden sollen. Danach die Abschnitte zu Kontakt, Speicherdauer und Empfängern in `datenschutz.html` an die tatsächliche Praxis anpassen.
- **Umgang mit Gesundheitsdaten dokumentieren:** Für Anfragen und eine mögliche Betreuung müssen Löschfristen, Zugriffsberechtigungen und der vorgesehene sichere Übermittlungsweg für Befunde oder andere Gesundheitsdaten festgelegt werden. Die Startseite fordert bereits dazu auf, solche Daten nicht ungefragt über WhatsApp zu senden.
- **Elfsight vor Release entfernen und Review-Lösung neu prüfen:** Elfsight ist aktuell nur Entwicklungsbestand und lädt beim Annähern an den Bewertungsbereich automatisch. Vor dem öffentlichen Release muss das Widget vollständig entfernt und durch die geplante endgültige Bewertungsdarstellung ersetzt werden. Danach sind Datenflüsse, Cookies und der Elfsight-Abschnitt in `datenschutz.html` anhand des finalen Codes erneut zu prüfen. Falls Elfsight entgegen der Planung bestehen bleibt, ist vor Veröffentlichung eine neue Einwilligungs- und Datenschutzbewertung erforderlich.
- **Hosting zum Release bestätigen:** Die Datenschutzerklärung beschreibt den aktuell im Repository eingerichteten Betrieb über GitHub Pages. Falls die veröffentlichte Website anders gehostet wird oder eine eigene Domain zusätzliche Dienste einschaltet, muss der Hosting-Abschnitt vor Veröffentlichung angepasst werden.
- **Abschließende fachkundige Prüfung:** Impressum und Datenschutzerklärung beruhen auf dem aktuellen Code und den bekannten Angaben. Vor Veröffentlichung sollten die vervollständigten Texte zusammen mit den tatsächlichen Praxisabläufen rechtlich geprüft werden.
