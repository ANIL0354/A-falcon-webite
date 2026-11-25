# A Falcon — company showcase site

A static, build-free website for the motorcycle riding community app branded **A Falcon**. It uses only HTML, CSS, and JavaScript, so it runs on a low-resource VM without Node.js, npm, or a build step.

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static file server:

```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000/`.

## Pages

- `index.html` — home / app overview
- `falcon/index.html` — full app detail page, screenshot gallery, specifications, and FAQ
- `privacy/index.html` — privacy policy
- `404.html` — not-found page for hosts that support a custom 404 document
- `sitemap.xml` and `robots.txt` — basic SEO files

## Files

- `styles.css` — all styling and responsive layout
- `script.js` — mobile menu toggle and active navigation state
- `images/` — app icon and screenshots copied from the app

## Editing content

Page copy, metadata, and structured data are written directly into the HTML files. Update the canonical URLs, Open Graph URLs, and sitemap/robots domain together when changing the production domain. Currently they use `https://afalcon.example.com` as a placeholder.

All app download buttons point to the Play Store listing in the HTML. Search for `play.google.com/store/apps/details?id=com.anonymous.ridemate` to update them.
