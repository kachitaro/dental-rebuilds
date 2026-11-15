"""Render html, screenshot #root bbox with transparent bg at 2x. Args: html out.png"""
import asyncio, sys
from playwright.async_api import async_playwright
async def main(src, out):
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--allow-file-access-from-files'])
        pg = await b.new_page(viewport={'width': 1366, 'height': 900}, device_scale_factor=2)
        await pg.goto('file://' + src, wait_until='load')
        r = await pg.evaluate("(()=>{const r=document.getElementById('root').getBoundingClientRect();return [r.x,r.y+window.scrollY,r.width,r.height]})()")
        await pg.screenshot(path=out, omit_background=True, full_page=True, clip={'x': r[0], 'y': r[1], 'width': r[2], 'height': r[3]})
        print(out, r)
        await b.close()
asyncio.run(main(sys.argv[1], sys.argv[2]))
