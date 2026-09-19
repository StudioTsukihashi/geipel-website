# Phase 2 — Informationsarchitektur v0.1

## 1. Hauptnavigation Desktop

Empfohlene Reihenfolge:

```text
Startseite | Leistungen | Über uns | Karriere | Kontakt | DE / EN
```

`Leistungen` erhält ein übersichtliches Dropdown bzw. Mega-Menü mit den historischen
Leistungsbereichen.

## 2. Hauptnavigation Smartphone

```text
☰ Menü

Startseite
Leistungen
  ├─ Detektei
  │  ├─ Warenhausdetektiv / Doorman
  │  └─ Observation & Beobachtung
  ├─ Veranstaltungsschutz / Einlasskontrolle
  ├─ Objektschutz / Revierfahrten
  └─ Personenschutz
Über uns
Karriere
Kontakt
DE / EN
```

## 3. Startseite

Die Startseite soll nicht sämtliche historischen Texte vollständig hintereinander zeigen.
Sie wird als Orientierungsebene aufgebaut.

Vorgesehene Bereiche:

1. Hero / Unternehmensidentität
2. kurze Einleitung aus dem historischen Willkommenstext
3. Leistungsübersicht als Karten
4. Unternehmensgrundsätze
5. kurzer Karrierehinweis
6. Kontakt-CTA
7. Footer

### Historisch vorhandene Grundsätze

- Diskretion
- Zuverlässigkeit
- Integrität

Diese werden nicht neu erfunden, sondern stammen aus dem ursprünglichen Willkommenstext.

## 4. Leistungen

Die Seite `Leistungen` wird die zentrale Übersicht.

Jede Leistung erhält:

- eigene Überschrift
- kurze Einleitung
- vorhandenen Originaltext als redaktionelle Grundlage
- klare Kontaktmöglichkeit
- Rücksprung zur Leistungsübersicht

### Detektei als Obergruppe

Die alte Navigation hatte `Detektei` bereits als Oberpunkt mit zwei Unterpunkten:

- Warenhausdetektiv / Doorman
- Observation & Beobachtung

Diese Hierarchie wird beibehalten.

## 5. Über uns

Auf der früheren Website existierte kein vollständig gesicherter eigener Über-uns-Bereich.
Der historische Willkommenstext enthält jedoch Unternehmensvorstellung und Grundsätze.

Für die neue Struktur wird deshalb ein eigener Bereich vorgesehen.

**Wichtig:** Bis zur Freigabe wird dort kein neuer Unternehmensinhalt erfunden.

## 6. Karriere

Die historische Startseite enthält ausdrücklich die Mitarbeitersuche:

> Wir suchen ständig neue Mitarbeiter in Teilzeit und Vollzeit.

Dieser vorhandene Inhalt wird im Relaunch besser auffindbar gemacht.

Ein umfangreicher Stellenbereich oder Bewerbungsportal ist **nicht** Bestandteil von Phase 2
und wird nur ergänzt, wenn Geipel dies später ausdrücklich wünscht.

## 7. Kontakt

Kontakt erhält eine eigene, klar erkennbare Seite.

Vorgesehene Struktur:

- Firmenname
- Anschrift
- Telefonnummer
- E-Mail-Adresse
- Kontaktmöglichkeit
- ggf. Öffnungszeiten / Erreichbarkeit nach aktueller Bestätigung
- Karten-/Routenintegration nur bei späterer Freigabe

## 8. Rechtliches

Impressum und Datenschutz befinden sich nicht in der Hauptnavigation, sondern gut sichtbar
im Footer.

Die historischen Rechtstexte dienen nur als Archiv und werden nicht ungeprüft übernommen.

## 9. Footer

Geplanter Footer:

```text
Sicherheitsdienst & Detektei Geipel

Leistungen
Kontakt
Karriere

Impressum
Datenschutz

[geprüfte externe Links]

© Jahr Sicherheitsdienst & Detektei Geipel
```

## 10. Sprachen

Desktop:
`DE | EN`

Smartphone:
Sprachumschaltung am unteren Ende des Menüs.

Die Sprache soll beim Wechsel möglichst auf der entsprechenden Schwesterseite bleiben.
Beispiel:

```text
/de/leistungen/personenschutz/
↕
/en/services/personal-protection/
```

## 11. URL-Prinzip

URLs werden:

- klein geschrieben
- ohne Umlaute
- ohne Leerzeichen
- sprechend und stabil

Beispiele:

```text
/de/leistungen/warenhausdetektiv-doorman/
/de/leistungen/observation-beobachtung/
/de/leistungen/veranstaltungsschutz/
/de/leistungen/objektschutz-revierfahrten/
/de/leistungen/personenschutz/
```

## 12. Responsive Grundregel

Es wird **keine getrennte Desktop- und Handywebsite** gebaut.

Stattdessen entsteht eine gemeinsame responsive Website, deren Layout sich automatisch an
Desktop, Tablet und Smartphone anpasst. Dadurch gibt es nur einen Inhaltsstand pro Sprache
und keine doppelte Pflege.
