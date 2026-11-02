"""Composes the social preview image (1200x630) for the Galamat card.

Run after scripts/render-logo.mjs:
    python scripts/make-og.py
"""
from PIL import Image, ImageDraw, ImageFont
import os

HERE = os.path.dirname(os.path.abspath(__file__))
FONT = os.path.join(HERE, '..', '..', 'selfso', 'public', 'Inter.ttf')
LOGO = os.path.join(HERE, 'og-logo.png')
OUT = os.path.join(HERE, '..', 'public', 'og.png')

W, H = 1200, 630
WINE = (94, 27, 42)
CREAM = (246, 238, 231)
GOLD = (216, 178, 107)
# cream blended over wine, matching the alphas the card uses
CREAM_MUTED = (203, 179, 178)
KEYLINE = (118, 61, 72)

og = Image.new('RGB', (W, H), WINE)
d = ImageDraw.Draw(og)

# inner keyline frame, like the card itself
d.rectangle([28, 28, W - 28, H - 28], outline=KEYLINE, width=2)

# logo lockup, sized from its real rendered height
logo = Image.open(LOGO).convert('RGBA')
lw = 460
lh = int(logo.height * lw / logo.width)
logo = logo.resize((lw, lh), Image.LANCZOS)
logo_y = 84
og.paste(logo, (84, logo_y), logo)

# type block sits below the logo, computed from its actual bottom edge
name_font = ImageFont.truetype(FONT, 62)
role_font = ImageFont.truetype(FONT, 30)
meta_font = ImageFont.truetype(FONT, 26)

name_y = logo_y + lh + 44
d.text((84, name_y), 'Dinmukhammed Mynzhassar', fill=CREAM, font=name_font)
d.text((84, name_y + 92), 'CHIEF TECHNOLOGY OFFICER', fill=GOLD, font=role_font)
d.text((84, name_y + 144), 'dimash@galamat.com', fill=CREAM_MUTED, font=meta_font)
d.text((84, name_y + 182), '+7 747 039 20 08  ·  www.galamat.com', fill=CREAM_MUTED, font=meta_font)

og.save(OUT, optimize=True)
print('og.png', og.size)
