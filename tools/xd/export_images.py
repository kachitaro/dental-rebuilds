"""Export XD resources to web images. Args: <xd-root> <out-dir> <spec-file>
spec lines: name uid max_width"""
import os, sys
from PIL import Image
root, out, spec = sys.argv[1:4]
os.makedirs(out, exist_ok=True)
for line in open(spec):
    line = line.strip()
    if not line or line.startswith('#'):
        continue
    name, uid, w = line.split()
    im = Image.open(os.path.join(root, 'resources', uid))
    w = int(w)
    if im.width > w:
        im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    has_alpha = im.mode in ('RGBA', 'LA', 'P')
    if name.endswith('.png'):
        im.save(os.path.join(out, name), optimize=True)
    else:
        im = im.convert('RGBA' if has_alpha else 'RGB')
        im.save(os.path.join(out, name), 'WEBP', quality=80, method=6)
    print(name, im.size, os.path.getsize(os.path.join(out, name)) // 1024, 'KB')
