"""Dump an artboard's texts and image fills with absolute (artboard-relative) boxes.

Usage: python3 extract.py <xd-root> <artboard-name> [index]
Prints one line per item, sorted top-to-bottom.
"""
import json
import os
import sys

ROOT, NAME = sys.argv[1], sys.argv[2]
IDX = int(sys.argv[3]) if len(sys.argv) > 3 else 0
manifest = json.load(open(os.path.join(ROOT, 'manifest')))
art = next(c for c in manifest['children'] if c['name'] == 'artwork')
abs_ = [a for a in art['children'] if a['name'] == NAME]
ab = abs_[IDX]
B = ab['uxdesign#bounds']
agc = json.load(open(os.path.join(ROOT, 'artwork', ab['path'], 'graphics', 'graphicContent.agc')))


def mul(m, n):
    a, b, c, d, e, f = m
    A, B_, C, D, E, F = n
    return (a * A + c * B_, b * A + d * B_, a * C + c * D, b * C + d * D, a * E + c * F + e, b * E + d * F + f)


def T(n):
    t = n.get('transform') or {}
    return (t.get('a', 1), t.get('b', 0), t.get('c', 0), t.get('d', 1), t.get('tx', 0), t.get('ty', 0))


items = []


def bbox(sh):
    t = sh['type']
    if t == 'rect':
        return sh['x'], sh['y'], sh['width'], sh['height']
    if t == 'circle':
        return sh['cx'] - sh['r'], sh['cy'] - sh['r'], 2 * sh['r'], 2 * sh['r']
    if t == 'ellipse':
        return sh['cx'] - sh['rx'], sh['cy'] - sh['ry'], 2 * sh['rx'], 2 * sh['ry']
    return None


def walk(n, m):
    t = n.get('type')
    m2 = mul(m, T(n))
    st = n.get('style') or {}
    if n.get('visible') is False:
        return
    if t == 'shape':
        f = st.get('fill') or {}
        if f.get('type') == 'pattern':
            bb = bbox(n['shape'])
            uid = f['pattern']['meta']['ux']['uid']
            if bb:
                x, y, w, h = bb
                items.append((m2[5] + y * m2[3] - B['y'], 'IMG', f"{uid} x={m2[4]+x*m2[0]-B['x']:.0f} y={m2[5]+y*m2[3]-B['y']:.0f} w={w*m2[0]:.0f} h={h*m2[3]:.0f} shape={n['shape']['type']} name={n.get('name','')!r}"))
            else:
                items.append((m2[5] - B['y'], 'IMG', f"{uid} x={m2[4]-B['x']:.0f} y={m2[5]-B['y']:.0f} shape={n['shape']['type']} name={n.get('name','')!r}"))
        elif f.get('type') == 'solid' and n['shape']['type'] == 'rect':
            bb = bbox(n['shape'])
            c = f['color']['value']
            if bb[2] * m2[0] > 250 and bb[3] > 40:
                items.append((m2[5] - B['y'], 'BOX', f"#{c['r']:02x}{c['g']:02x}{c['b']:02x} x={m2[4]-B['x']:.0f} y={m2[5]-B['y']:.0f} w={bb[2]:.0f} h={bb[3]:.0f} r={n['shape'].get('r','')} op={st.get('opacity',1)}"))
    elif t == 'text':
        ux = n['meta']['ux']
        rs = (ux.get('rangedStyles') or [{}])[0]
        fill = rs.get('fill', {}).get('value')
        col = f"#{fill & 0xffffff:06x}" if isinstance(fill, int) else ''
        ta = st.get('textAttributes', {})
        items.append((m2[5] - B['y'], 'TXT', f"x={m2[4]-B['x']:.0f} y={m2[5]-B['y']:.0f} {rs.get('fontFamily')}/{rs.get('fontStyle')}/{rs.get('fontSize')} ls={rs.get('charSpacing',0)} lh={ta.get('lineHeight','')} {ta.get('paragraphAlign','')} {col} {rs.get('textTransform','')} :: {n['text']['rawText']!r}"))
    kids = []
    if t == 'group':
        kids = n['group'].get('children', [])
    elif t == 'artboard':
        kids = n['artboard'].get('children', [])
    for c in kids:
        walk(c, m2 if t != 'artboard' else (1, 0, 0, 1, 0, 0))


for c in agc['children']:
    walk(c, (1, 0, 0, 1, 0, 0))
items.sort(key=lambda i: i[0])
for _, k, s in items:
    print(k, s)
