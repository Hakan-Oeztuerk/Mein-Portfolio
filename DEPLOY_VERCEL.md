Kurz-Anleitung: Vercel Deployment für dieses Projekt

Dieses Repository verwendet Vite. Falls Vercel beim Build Fehler wie
"ERR_MODULE_NOT_FOUND" oder ESM-Auflösungsfehler meldet, befolge die
folgenden Schritte.

1) Node-Version sicherstellen
- Wir haben bereits eine `.nvmrc` und `package.json` mit `engines.node: 18.x` hinzugefügt.
- In Vercel: Projekt → Settings → General → Build & Development Settings → Node.js Version auf `18.x` setzen (falls verfügbar).

2) Dev-Dependencies installieren
- Standardmäßig installiert Vercel nur `dependencies` im Produktionsmodus.
- Zwei Optionen:
  - Setze in Vercel ein Environment Variable: `NPM_CONFIG_PRODUCTION=false`. Dadurch werden auch `devDependencies` installiert.
  - Oder verschiebe kritische Tools (z. B. `vite`) in `dependencies` — das haben wir bereits für `vite` getan.

So setzt du die Env-Variable in Vercel:
- Gehe zu: Project → Settings → Environment Variables
- Name: `NPM_CONFIG_PRODUCTION`
- Value: `false`
- Environment: `Preview` und `Production` (je nachdem, wo du bauen willst)

3) Build-Command prüfen
- Standard-Build-Command ist `npm run build`. Stelle sicher, dass in den Vercel-Einstellungen unter Build & Output Settings ebenfalls `npm run build` steht.

4) Deploy neu anstoßen
- Nach dem Push kann Vercel automatisch einen neuen Deploy starten. Du kannst auch manuell in der Vercel UI auf "Redeploy" klicken.

5) Alternative: `gh-pages` oder GitHub Pages
- Wenn du GitHub Pages nutzt, setze `base` in `vite.config.js` (wurde bereits gesetzt auf `/Mein-Portfolio/`).

6) Troubleshooting
- Wenn weiterhin Fehler auftreten, sammle die vollständigen Build-Logs aus Vercel und poste sie hier.
- Wichtige Punkte in Logs: Node-Version, ob `vite` installiert wurde, und die erste relevante Fehlermeldung (stack trace).

Wenn du willst, kann ich außerdem eine Beispiel-Vercel-Environment-Anleitung in den Repo-Settings als Screenshot/Text generieren oder eine Beispiel GitHub Action/Workflow anlegen, die den Build ebenfalls korrekt ausführt.
