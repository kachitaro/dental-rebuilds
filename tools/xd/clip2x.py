import asyncio, sys
from playwright.async_api import async_playwright
src, out, x, y, w, h = sys.argv[1], sys.argv[2], *map(float, sys.argv[3:7])
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--allow-file-access-from-files'])
        pg = await b.new_page(viewport={'width': 1366, 'height': 900}, device_scale_factor=2)
        await pg.goto('file://' + src, wait_until='load')
        await pg.evaluate('document.fonts.ready')
        await pg.screenshot(path=out, full_page=True, clip={'x': x, 'y': y, 'width': w, 'height': h})
        await b.close()
asyncio.run(main())
