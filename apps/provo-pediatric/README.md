# Provo Pediatric Dentistry — portfolio rebuild

Front-end rebuild of the Provo Pediatric Dentistry (Dr. Trace Lund, Dr. Kevin Markham, Dr. Bryce Bott; Provo and Price, UT) website design,
a 2022 client project from my time at Techbee Solutions. Built for my portfolio; this is
**not** the practice's official website and the contact form does not send anything.

Pages rebuilt from `Provo layout.xd`:

| Route | Artboard |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/services/dental-crowns` | Services – Dental Crowns |
| `/contact` | Contact |

Nav items for pages outside the rebuild (About us, Our Team, Patient info, Financial, Reviews, Payment, Locations) jump to the
matching section on the home page.

## Stack

Next.js 16 (App Router, static export friendly), React 19, Tailwind CSS 4, TypeScript.
Fonts are self-hosted through Fontsource (Montserrat, Dancing Script), so the
build needs no network access.

Colors, type sizes, spacing and copy were read straight from the XD file's artboard data;
images were exported from the file's resources and converted to WebP.

## Run

```bash
bun install   # or npm install
bun run dev
```

## Notes on content

- Where the design had lorem ipsum (service highlights, news excerpts), the text was
  replaced with short lines adapted from the design's own copy.
- The design's crowns page shows a different phone number (281-645-4205) in the side card;
  the rebuild uses the practice number shown everywhere else (801-373-4200).
- Decorative illustrations (sea creatures, icons, sidebar collage) were rendered from the
  XD vectors to PNG/WebP.
