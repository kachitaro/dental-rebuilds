# Universal Dental — portfolio rebuild

Front-end rebuild of the Universal Dental (Dr. Muazz Zendaki, Irvine CA) website design,
a 2022 client project from my time at Techbee Solutions. Built for my portfolio; this is
**not** the clinic's official website and the contact form does not send anything.

Pages rebuilt from `Dr. Muazz layout.xd`:

| Route | Artboard |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/services/dental-implants` | SV Implants |
| `/contact` | Contact |

Nav items for pages outside the rebuild (About, Patient Info, Reviews, Blog) jump to the
matching section on the home page.

## Stack

Next.js 16 (App Router, static export friendly), React 19, Tailwind CSS 4, TypeScript.
Fonts are self-hosted through Fontsource (Mulish, Noto Serif, Dancing Script), so the
build needs no network access.

Colors, type sizes, spacing and copy were read straight from the XD file's artboard data;
images were exported from the file's resources and converted to WebP.

## Run

```bash
bun install   # or npm install
bun run dev
```

## Notes on content

- Phone, fax (555-01xx) and email (`.example` domain) are placeholders, and the reviews use
  sample names and rewritten text; real contact details and patient reviews from the design
  were not used.
