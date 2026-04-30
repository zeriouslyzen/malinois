# Malinois Website

Static multi-page website for Malinois, with:
- Home page content served from `index.html` (single primary entrypoint)
- Additional product, industry, customer, pricing, and resource pages
- Shared styling in `assets/css/styles.css`
- Shared interactions in `assets/js/main.js`

## Project Structure

- `index.html` - primary homepage
- `products.html`, `industries.html`, `customers.html`, `pricing.html`
- `products-*.html` - product deep-dive pages
- `industries-*.html` - industry deep-dive pages
- `resources-*.html` - resource pages
- `assets/css/styles.css` - global style system
- `assets/js/main.js` - global behavior (navigation/reveal interactions)

## Local Development

Run from project root:

```bash
python3 -m http.server 4174
```

Open:

```text
http://localhost:4174/
```

## Authoring Rules

- Keep the site as one coherent website under root `/`.
- Keep primary navigation consistent across pages.
- Reuse shared CSS/JS; avoid page-specific inline style/script when possible.
- Preserve Malinois tone: concise, intelligent, conversion-oriented, human.

