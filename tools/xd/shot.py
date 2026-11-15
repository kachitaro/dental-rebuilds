import asyncio
import sys

from playwright.async_api import async_playwright


async def main(pairs):
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--allow-file-access-from-files'])
        for src, out in pairs:
            pg = await b.new_page(viewport={'width': 1366, 'height': 800})
            await pg.goto('file://' + src, wait_until='load')
            await pg.evaluate('document.fonts.ready')
            await pg.wait_for_timeout(300)
            await pg.screenshot(path=out, full_page=True)
            await pg.close()
        await b.close()

args = sys.argv[1:]
asyncio.run(main(list(zip(args[0::2], args[1::2]))))
