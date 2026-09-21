# Barakah Naturals

A responsive static website for Barakah Naturals, a natural honey supplier focused on wholesale, retail, and bulk honey products.

## Overview

This project is a marketing and inquiry website for a honey business. It presents the brand, highlights product offerings, and gives visitors a simple way to contact the business through WhatsApp or email for orders and wholesale inquiries.

The site is built as a lightweight static landing page with:

- clean, modern branding
- hero section and trust-focused messaging
- product cards for honey categories
- inquiry form for wholesale buyers
- WhatsApp and email contact actions
- SEO metadata and sitemap support

## Project Structure

```text
Honey/
├── index.html               # Main page structure and SEO metadata
├── robots.txt               # Search engine crawler instructions
├── sitemap.xml              # XML sitemap for indexing
├── css/
│   └── style.css            # Main styling and responsiveness
├── js/
│   └── script.js            # Product data, contact links, and UI behavior
├── img/                     # Brand assets, badges, product images, and banners
└── README.md                # Project documentation
```

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Font Awesome icons

## Features

- Responsive landing page for desktop and mobile devices
- Product showcase with product names, descriptions, and size options
- Dynamic generation of product cards using JavaScript
- WhatsApp inquiry links with pre-filled business message
- Email inquiry support via Gmail link
- SEO-ready metadata, Open Graph tags, and JSON-LD structured data
- Sitemap and robots configuration for search indexing

## How to Run

Since this is a static website, you can run it in either of these ways:

### Option 1: Open directly in a browser

Open `index.html` in your browser.

### Option 2: Run a local web server

From the project root, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Content and Business Configuration

Business details and contact info are defined in `js/script.js`:

```js
const BUSINESS_CONFIG = {
  name: 'Barakah Naturals',
  whatsapp: '919372233835',
  email: 'sheliyadanish@gmail.com',
  phone: '+91 8108559909'
};
```

Products are also managed in the same file through the `products` array.

To update:

- business phone number
- WhatsApp number
- email address
- product names
- product descriptions
- available sizes

edit the values inside `js/script.js`.

## SEO Notes

The site includes:

- meta title and description
- Open Graph tags
- Twitter card metadata
- canonical URL
- structured data (`application/ld+json`)
- `robots.txt`
- `sitemap.xml`

This helps search engines understand the business identity and improve discoverability for brand searches such as "Barakah Naturals".

## Deployment

This project can be deployed as a static website on:

- Netlify
- Vercel
- GitHub Pages
- any standard static hosting service

For production deployment, make sure the live domain matches the canonical URL and sitemap entries.

## Contact

Barakah Naturals can be contacted through the inquiry form, WhatsApp, and email links provided in the site.

## Notes

This project is intentionally lightweight and does not require a build step or package installation. It is designed for quick deployment and easy maintenance.
