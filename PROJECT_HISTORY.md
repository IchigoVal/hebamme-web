# Projektverlauf und lokale Sicherungspunkte

Diese Datei beschreibt die lokalen Git-Sicherungen der Website. Die Tags und Branches liegen nur auf diesem Rechner. Es wurde nichts zu GitHub übertragen.

## Checkpoints

| Reihenfolge | Datum | Git-Tag | Commit | Zustand |
| --- | --- | --- | --- | --- |
| 1 | 19.09.2026 | `checkpoint/pre-rethink` | `22a4fbb` | Website exakt vor der Überarbeitung von Inhalt und Design. Enthält auch alle Änderungen, die zu Beginn noch nicht committed waren. |
| 2 | 19.09.2026 | `checkpoint/content-rework` | wird nach dem Checkpoint ergänzt | Neu geordnete und vollständig überarbeitete deutsche und russische Inhalte bei weitgehend unverändertem Design. |

### 1. `checkpoint/pre-rethink`

Dieser Stand wurde vor jeder Änderung gesichert. Gegenüber dem davor liegenden Repository-Stand enthält er die bereits vorhandenen lokalen Anpassungen an Startseite, Rechtstexten, CSS, JavaScript und Favicon. Er ist der verlässliche Rücksprungpunkt, falls die gesamte Überarbeitung verworfen werden soll.

### 2. `checkpoint/content-rework`

Dieser Stand trennt die Aufgaben der Abschnitte klarer: Der Einstieg nennt Name, Ort, Sprachen und Kontaktweg; die vier Bildkarten sind als Anlässe für eine Anfrage formuliert; der Ablauf erklärt konkret, welche Angaben in die erste Nachricht gehören. Unbelegte Aussagen zur Arbeitsweise wurden entfernt. Die russische Fassung wurde eigenständig und natürlich formuliert. Das Design entspricht an diesem Punkt noch weitgehend dem Ausgangsstand.

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
   git switch rework-content-design
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
