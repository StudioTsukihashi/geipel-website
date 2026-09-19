# GitHub Pages – Preview Deployment

## Ziel

Der aktuelle Phase-3-Startseitenentwurf wird über GitHub Pages als Testseite veröffentlicht.

Die Firmen-Domain `sicherheitsdienst-geipel.de` wird dabei **nicht** verändert.

## Veröffentlichter Einstieg

Die Root-Datei `index.html` leitet auf:

`preview/startseite-design-v0.1/`

weiter.

Die Vorschau ist mit:

```html
<meta name="robots" content="noindex,nofollow">
```

als Entwicklungs-/Teststand vorgesehen.

## GitHub-Einstellung

Im Repository:

1. `Settings`
2. `Pages`
3. unter **Build and deployment**
4. Source: **Deploy from a branch**
5. Branch: `main`
6. Folder: `/ (root)`
7. `Save`

Danach stellt GitHub die Pages-Adresse bereit.

Bei einem Repository namens `geipel-website` unter dem Account `StudioTsukihashi`
ist die typische Projektadresse:

`https://studiotsukihashi.github.io/geipel-website/`

Die tatsächliche von GitHub angezeigte URL ist maßgeblich.

## Hinweis zum Repository

Falls GitHub Pages für das Repository aufgrund seiner Sichtbarkeit oder des verwendeten
GitHub-Tarifs nicht angeboten wird, muss entweder die Repository-/Tarif-Konfiguration
angepasst oder eine andere Preview-Hosting-Lösung genutzt werden.

## Später

Vor dem echten Launch wird:
- die Preview-Weiterleitung entfernt,
- die reale deutsche Startseite an `/` bzw. die endgültige Routingstruktur angebunden,
- `noindex` geprüft/entfernt,
- die Firmen-Domain erst nach finaler Freigabe verbunden.
