# Dental site rebuilds

Front-end rebuilds of two dental clinic website designs from my time at Techbee Solutions
(2022), made for my portfolio. Neither is the clinic's official website, and the forms do
not send anything.

| App | Clinic | Pages | Dev port |
| --- | --- | --- | --- |
| [`apps/universal-dental`](apps/universal-dental) | Universal Dental, Irvine CA | Home, Services, Dental Implants, Contact | 3001 |
| [`apps/provo-pediatric`](apps/provo-pediatric) | Provo Pediatric Dentistry, Utah | Home, Services, Dental Crowns, Contact | 3002 |

Both apps use Next.js 16, React 19, Tailwind CSS 4 and TypeScript, with fonts self-hosted
through Fontsource. Each app keeps its own theme and is deployed on its own.

## Run

```bash
bun install
bun run dev:universal   # http://localhost:3001
bun run dev:provo       # http://localhost:3002
bun run dev             # both
bun run build           # build both
```

To deploy one app on Vercel, import this repo and set the project's Root Directory to
`apps/universal-dental` or `apps/provo-pediatric`.

## tools/xd

The Python scripts used to read the Adobe XD files, since XD stores no per-artboard images.
An `.xd` file is a zip; unzip it first.

| Script | What it does |
| --- | --- |
| `agc2html.py <xd-dir> <artboard> <out.html>` | Renders an artboard to HTML/SVG for visual reference. `SKIP_TEXT=1`, `SKIP_PHOTOS=1`, `ONLY="Group name"` and `TRANSPARENT=1` filter what is drawn. |
| `extract.py <xd-dir> <artboard>` | Lists every text (font, size, color, position, copy) and image fill, top to bottom. |
| `export_images.py <xd-dir> <out-dir> <spec>` | Exports image resources to WebP/PNG from a `name uid max-width` list. |
| `shot.py`, `crop_el.py`, `clip2x.py` | Playwright helpers that screenshot the rendered HTML, whole or cropped. |

They need Python 3 with Pillow and Playwright (`pip install pillow playwright && playwright install chromium`).

`agc2html.py` loads the design fonts from `tools/xd/node_modules` (run
`npm i @fontsource-variable/mulish @fontsource/noto-serif @fontsource-variable/montserrat @fontsource-variable/dancing-script`
there), or from the folder in the `FONT_DIR` environment variable.
