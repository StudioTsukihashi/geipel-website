GEIPEL CLOUDFLARE STATIC-ASSETS PATCH

Diese vier Dateien kommen DIREKT in die oberste Ebene des GitHub-Repositories:

- wrangler.jsonc
- .assetsignore
- robots.txt
- README-CLOUDFLARE-PATCH.txt

Vorhandene Ordner wie preview/ und assets/ NICHT löschen.

Cloudflare-Einstellungen:
- Build command: keiner
- Deploy command: npx wrangler deploy
- Root directory: /

Nach dem Commit sollte Cloudflare automatisch neu deployen.

Erwartete URL:
https://geipel-website.tsukihashi.workers.dev/

Die Root-index.html leitet weiterhin auf:
preview/startseite-design-v0.1/

Die .assetsignore-Datei sorgt dafür, dass interne Ordner wie docs/
nicht öffentlich als Static Assets hochgeladen werden.
