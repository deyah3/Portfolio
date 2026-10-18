# Diya Mustafa — Portfolio

React + Vite single-page portfolio.

## Development

```bash
npm install
npm run dev
```

## Deploying to Plesk

The site builds to plain static files, so no Node.js is needed on the server.

1. Build and zip:
   ```bash
   npm run build:plesk
   ```
   This creates `dist/` and `portfolio-plesk.zip`.
2. In Plesk, open **Websites & Domains → your domain → File Manager**, go to `httpdocs/`, and delete the default Plesk files (`index.html`, `css/`, `img/`, etc.).
3. Upload `portfolio-plesk.zip` to `httpdocs/` and choose **Extract Files**, then delete the zip.
   (Or upload the *contents* of `dist/` over FTP. Make sure the hidden `.htaccess` file goes too.)
4. Under **Hosting & DNS → SSL/TLS Certificates**, issue a free Let's Encrypt certificate.

Routes like `/work`, `/artwork` and `/writing` work on refresh and direct links because of:

- `public/.htaccess` for Linux Plesk (Apache + nginx). It also forces HTTPS and sets caching.
- `public/web.config` for Windows Plesk (IIS, needs the URL Rewrite module).

Both files are copied into `dist/` on every build.

> If the domain uses **nginx only** (Apache turned off in *Apache & nginx Settings*), `.htaccess` is ignored. Add this to **Additional nginx directives**:
> ```nginx
> location / {
>     try_files $uri $uri/ /index.html;
> }
> ```
