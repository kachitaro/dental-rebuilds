"""Render an Adobe XD artboard (AGC JSON) to an HTML page with inline SVG.

Usage: python3 agc2html.py <xd-unzipped-root> <artboard-name> <out.html>
Good enough for visual reference: shapes, images, gradients, masks, text lines.
"""
import html
import json
import os
import re
import sys

ROOT, NAME, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
SKIP_TEXT = os.environ.get('SKIP_TEXT') == '1'
SKIP_PHOTOS = os.environ.get('SKIP_PHOTOS') == '1'
ONLY = set(filter(None, os.environ.get('ONLY', '').split('|')))
SKIP_IDS = set(filter(None, os.environ.get('SKIP_NAMES', '').split('|')))
TRANSPARENT = os.environ.get('TRANSPARENT') == '1'
FONT_DIR = os.environ.get('FONT_DIR', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'node_modules'))

FAMILY = {
    'Mulish': "'Mulish Variable'", 'Muli': "'Mulish Variable'",
    'Montserrat': "'Montserrat Variable'", 'Dancing Script': "'Dancing Script Variable'",
    'Noto Serif': "'Noto Serif'", 'Mazzard': "'Montserrat Variable'",
}
WEIGHT = {'thin': 100, 'extralight': 200, 'light': 300, 'regular': 400, 'medium': 500,
          'semibold': 600, 'bold': 700, 'extrabold': 800, 'black': 900}

manifest = json.load(open(os.path.join(ROOT, 'manifest')))
art = next(c for c in manifest['children'] if c['name'] == 'artwork')
ab = next(a for a in art['children'] if a['name'] == NAME)
bounds = ab['uxdesign#bounds']
agc = json.load(open(os.path.join(ROOT, 'artwork', ab['path'], 'graphics', 'graphicContent.agc')))
res_agc = json.load(open(os.path.join(ROOT, 'resources', 'graphics', 'graphicContent.agc')))
GRADIENTS = res_agc.get('resources', {}).get('gradients', {})

defs = []
uid_counter = [0]


def uid(prefix):
    uid_counter[0] += 1
    return f'{prefix}{uid_counter[0]}'


def color(c, alpha=1.0):
    if not c:
        return 'none', 0
    v = c.get('value', {})
    a = c.get('alpha', 1) * alpha
    return f"rgb({v.get('r',0)},{v.get('g',0)},{v.get('b',0)})", a


def argb(n):
    a = (n >> 24) & 255
    return f"rgb({(n >> 16) & 255},{(n >> 8) & 255},{n & 255})", a / 255


def tf(t):
    if not t:
        return ''
    return f' transform="matrix({t.get("a",1)},{t.get("b",0)},{t.get("c",0)},{t.get("d",1)},{t.get("tx",0)},{t.get("ty",0)})"'


def shape_bbox(sh):
    t = sh['type']
    if t == 'rect':
        return sh['x'], sh['y'], sh['width'], sh['height']
    if t == 'circle':
        return sh['cx'] - sh['r'], sh['cy'] - sh['r'], 2 * sh['r'], 2 * sh['r']
    if t == 'ellipse':
        return sh['cx'] - sh['rx'], sh['cy'] - sh['ry'], 2 * sh['rx'], 2 * sh['ry']
    nums = []
    if t in ('path', 'compound'):
        nums = [float(x) for x in re.findall(r'-?\d*\.?\d+(?:e-?\d+)?', sh.get('path', ''))]
    elif t == 'polygon':
        for p in sh['points']:
            nums += [p['x'], p['y']]
    if len(nums) >= 2:
        xs, ys = nums[0::2], nums[1::2]
        return min(xs), min(ys), max(xs) - min(xs), max(ys) - min(ys)
    return 0, 0, 0, 0


def shape_el(sh, attrs):
    t = sh['type']
    if t == 'rect':
        r = sh.get('r')
        rx = ''
        if r:
            rv = r[0] if isinstance(r, list) else r
            rx = f' rx="{rv}"'
        return f'<rect x="{sh["x"]}" y="{sh["y"]}" width="{sh["width"]}" height="{sh["height"]}"{rx}{attrs}/>'
    if t == 'circle':
        return f'<circle cx="{sh["cx"]}" cy="{sh["cy"]}" r="{sh["r"]}"{attrs}/>'
    if t == 'ellipse':
        return f'<ellipse cx="{sh["cx"]}" cy="{sh["cy"]}" rx="{sh["rx"]}" ry="{sh["ry"]}"{attrs}/>'
    if t == 'line':
        return f'<line x1="{sh["x1"]}" y1="{sh["y1"]}" x2="{sh["x2"]}" y2="{sh["y2"]}"{attrs}/>'
    if t in ('path', 'compound'):
        return f'<path d="{sh.get("path","")}"{attrs} fill-rule="evenodd"/>'
    if t == 'polygon':
        pts = ' '.join(f'{p["x"]},{p["y"]}' for p in sh['points'])
        return f'<polygon points="{pts}"{attrs}/>'
    return ''


def fill_attr(style, sh):
    f = style.get('fill')
    if not f or f.get('type') == 'none':
        return ' fill="none"'
    if f['type'] == 'solid':
        c, a = color(f['color'])
        return f' fill="{c}" fill-opacity="{a}"'
    if f['type'] == 'gradient':
        g = f['gradient']
        gr = g.get('meta', {}).get('ux', {}).get('gradientResources') or GRADIENTS.get(g.get('ref', ''), {})
        gid = uid('g')
        stops = ''.join(
            f'<stop offset="{s["offset"]}" stop-color="{color(s["color"])[0]}" stop-opacity="{color(s["color"])[1]}"/>'
            for s in gr.get('stops', []))
        if gr.get('type') == 'radial':
            defs.append(f'<radialGradient id="{gid}">{stops}</radialGradient>')
        else:
            defs.append(f'<linearGradient id="{gid}" x1="{g.get("x1",0)}" y1="{g.get("y1",0)}" x2="{g.get("x2",1)}" y2="{g.get("y2",0)}" gradientUnits="{g.get("units","objectBoundingBox")}">{stops}</linearGradient>')
        return f' fill="url(#{gid})"'
    if f['type'] == 'pattern':
        p = f['pattern']
        ux = p.get('meta', {}).get('ux', {})
        src = os.path.join(ROOT, 'resources', ux.get('uid', ''))
        x, y, w, h = shape_bbox(sh)
        pid = uid('p')
        mode = 'slice' if ux.get('scaleBehavior', 'cover') == 'cover' else 'meet'
        defs.append(f'<pattern id="{pid}" patternUnits="userSpaceOnUse" x="{x}" y="{y}" width="{w}" height="{h}">'
                    f'<image href="file://{src}" x="0" y="0" width="{w}" height="{h}" preserveAspectRatio="xMidYMid {mode}"/></pattern>')
        return f' fill="url(#{pid})"'
    return ' fill="none"'


def stroke_attr(style):
    s = style.get('stroke')
    if not s or s.get('type') in (None, 'none'):
        return ''
    c, a = color(s.get('color'))
    dash = f' stroke-dasharray="{" ".join(map(str, s["dash"]))}"' if s.get('dash') else ''
    return f' stroke="{c}" stroke-opacity="{a}" stroke-width="{s.get("width",1)}" stroke-linecap="{s.get("cap","butt")}"{dash}'


def shadow_attr(style):
    for flt in style.get('filters', []) or []:
        if flt.get('type') == 'dropShadow' and flt.get('visible', True):
            sh = flt['params']['dropShadows'][0]
            c, a = color(sh['color'])
            fid = uid('f')
            defs.append(f'<filter id="{fid}" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="{sh["dx"]}" dy="{sh["dy"]}" stdDeviation="{sh["r"]/2}" flood-color="{c}" flood-opacity="{a}"/></filter>')
            return f' filter="url(#{fid})"'
    return ''


def text_el(n):
    st = n.get('style', {})
    ux = n['meta']['ux']
    raw = n['text']['rawText']
    ranges = ux.get('rangedStyles') or []
    # Expand ranged styles to per-character style index
    per_char = []
    for i, r in enumerate(ranges):
        per_char += [i] * r.get('length', 0)
    base_font = st.get('font', {})

    def css_for(r):
        fam = FAMILY.get(r.get('fontFamily') or base_font.get('family'), "'Mulish Variable'")
        style = (r.get('fontStyle') or base_font.get('style') or 'Regular').lower()
        italic = 'italic' in style
        wkey = style.replace('italic', '').replace(' ', '').replace('m', '', 1) if style.startswith('m ') else style.replace('italic', '').replace(' ', '')
        weight = WEIGHT.get(wkey or 'regular', 400)
        size = r.get('fontSize') or base_font.get('size', 16)
        fill, a = argb(r['fill']['value']) if 'fill' in r and 'value' in r['fill'] else color(st.get('fill', {}).get('color'))
        ls = (r.get('charSpacing', 0) or 0) / 1000 * size
        deco = ' text-decoration="underline"' if r.get('underline') else ''
        return (f' font-family="{html.escape(fam)}" font-weight="{weight}" font-style="{"italic" if italic else "normal"}"'
                f' font-size="{size}" fill="{fill}" fill-opacity="{a}" letter-spacing="{ls}"{deco}'), r.get('textTransform')

    def transform_text(s, tt):
        if tt == 'uppercase':
            return s.upper()
        if tt == 'lowercase':
            return s.lower()
        return s

    out = []
    op = st.get('opacity', 1)
    align = st.get('textAttributes', {}).get('paragraphAlign', 'left')
    fw = n['text'].get('frame', {}).get('width')
    dx = (fw / 2 if align == 'center' else fw if align == 'right' else 0) if fw else 0
    for para in n['text'].get('paragraphs', []):
        for line in para.get('lines', []):
            for seg in line:
                frm, to = seg['from'], seg['to']
                # split segment by style ranges
                i = frm
                spans = []
                while i < to:
                    si = per_char[i] if i < len(per_char) else (len(ranges) - 1 if ranges else -1)
                    j = i
                    while j < to and (per_char[j] if j < len(per_char) else si) == si:
                        j += 1
                    attrs, tt = css_for(ranges[si]) if si >= 0 else css_for({})
                    chunk = transform_text(raw[i:j].replace('\n', ''), tt)
                    if chunk:
                        spans.append(f'<tspan{attrs}>{html.escape(chunk)}</tspan>')
                    i = j
                if spans:
                    out.append(f'<text x="{seg.get("x",0)+dx}" y="{seg.get("y",0)}" xml:space="preserve">{"".join(spans)}</text>')
    return f'<g{tf(n.get("transform"))} opacity="{op}">' + ''.join(out) + '</g>'


def render(n, inside=False):
    t = n.get('type')
    st = n.get('style', {}) or {}
    if n.get('visible') is False or n.get('name') in SKIP_IDS:
        return ''
    if ONLY and n.get('name') in ONLY:
        inside = True
    if ONLY and not inside and t in ('shape', 'text'):
        return ''
    if SKIP_TEXT and t == 'text':
        return ''
    if SKIP_PHOTOS and t == 'shape' and (st.get('fill') or {}).get('type') == 'pattern':
        return ''
    op = st.get('opacity', 1)
    if t == 'shape':
        sh = n['shape']
        attrs = fill_attr(st, sh) + stroke_attr(st) + shadow_attr(st)
        return f'<g{tf(n.get("transform"))} opacity="{op}">{shape_el(sh, attrs)}</g>'
    if t == 'text':
        return text_el(n)
    if t == 'group':
        kids = ''.join(render(c, inside) for c in n['group'].get('children', []))
        clip = n.get('meta', {}).get('ux', {}).get('clipPathResources')
        cattr = ''
        if clip:
            cid = uid('c')
            parts = []
            for c in clip.get('children', []):
                if c.get('type') == 'shape':
                    parts.append(f'<g{tf(c.get("transform"))}>{shape_el(c["shape"], "")}</g>')
            # clipPath children cannot be <g>; flatten transforms onto shapes
            flat = ''.join(re.sub(r'<g( transform="[^"]*")>(<\w+)', r'\2\1', p).replace('</g>', '') for p in parts)
            defs.append(f'<clipPath id="{cid}">{flat}</clipPath>')
            cattr = f' clip-path="url(#{cid})"'
        return f'<g{tf(n.get("transform"))} opacity="{op}"{shadow_attr(st)}><g{cattr}>{kids}</g></g>'
    if t == 'artboard':
        return ''.join(render(c, inside) for c in n['artboard'].get('children', []))
    return ''


body = ''.join(render(c) for c in agc['children'])
x, y, w, h = bounds['x'], bounds['y'], bounds['width'], bounds['height']
fonts = ''.join(f'<link rel="stylesheet" href="file://{FONT_DIR}/{p}">' for p in [
    '@fontsource-variable/mulish/index.css', '@fontsource-variable/mulish/wght-italic.css',
    '@fontsource/noto-serif/400.css', '@fontsource/noto-serif/700.css',
    '@fontsource-variable/montserrat/index.css', '@fontsource-variable/montserrat/wght-italic.css',
    '@fontsource-variable/dancing-script/index.css'])
doc = (f'<!doctype html><html><head><meta charset="utf-8">{fonts}<style>html,body{{margin:0;background:{'transparent' if TRANSPARENT else '#fff'}}}</style></head><body>'
       f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="{x} {y} {w} {h}"><defs>{"".join(defs)}</defs>'
       f'{"" if TRANSPARENT else f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="#fff"/>'}<g id="root">{body}</g></svg></body></html>')
open(OUT, 'w').write(doc)
print(OUT, w, h)
