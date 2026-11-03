"""Regenerates public/qr-site.svg, the chip on the card front.

    pip install qrcode
    python scripts/make-qr.py

Version 3 (29 modules) at error correction M, with a 4-module quiet zone.
Black modules on a transparent field: the card supplies the cream panel, so the
same file works on any surface and still prints.
"""
import os
import qrcode
from qrcode.constants import ERROR_CORRECT_M
from qrcode.image.svg import SvgPathImage

URL = 'https://va11eyard.github.io/'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'public', 'qr-site.svg')

qr = qrcode.QRCode(error_correction=ERROR_CORRECT_M, box_size=10, border=4, image_factory=SvgPathImage)
qr.add_data(URL)
qr.make(fit=True)
qr.make_image().save(OUT)
print('qr-site.svg', URL, 'version', qr.version)
