# Diya Mustafa — Portfolio

React + Vite single-page portfolio.

## Development

```bash
npm install
npm run dev
```

## Deploying to Plesk (Node.js)

`server.cjs` is a small Node server (no extra packages) that serves the built site from `dist/` and sends every page route (`/work`, `/artwork`, `/writing`) to the React app.

1. Upload or `git pull` the project into the domain folder (e.g. `httpdocs/`).
2. In Plesk, open **Websites & Domains → your domain → Node.js** and set:
   - **Node.js version:** 20 or newer
   - **Application root:** the project folder (e.g. `/httpdocs`)
   - **Document root:** `/httpdocs/dist`
   - **Application startup file:** `server.cjs`
   - **Application mode:** production
3. Click **Enable Node.js**, then **NPM install**.
4. Click **Run script** and run `build`.
5. Click **Restart App**.

After changing the code, pull the update, then run `build` again and restart the app.

To test locally: `npm run build && npm start`, then open http://localhost:3000.
