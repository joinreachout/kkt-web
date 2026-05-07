#!/usr/bin/env python3
"""
Generate per-page OG (Open Graph) preview cards.

Reads PAGES list, renders each as a 1200x630 SVG with cat-mark + KKT
wordmark in the corner + the page-specific title in big italic Playfair.
Outputs PNG via rsvg-convert into ./public/og/{slug}.png.

Run from main-site/ root:
    python3 scripts/generate-og.py

Requires: librsvg (brew install librsvg) — provides rsvg-convert.
"""
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
OG_DIR = ROOT / 'public' / 'og'
OG_DIR.mkdir(parents=True, exist_ok=True)

# Cat path lifted from the existing og-source.svg / CatMark component.
CAT_PATH = (
    "M6551 22338 c-492 -47 -915 -423 -1022 -911 -38 -175 -38 -182 99 -1944 "
    "l128 -1651 -69 -84 c-127 -154 -324 -422 -449 -608 -778 -1164 -1222 "
    "-2449 -1334 -3860 -21 -264 -24 -855 -6 -1075 100 -1188 454 -2223 1091 "
    "-3185 463 -701 1102 -1348 1796 -1821 817 -557 1769 -933 2725 -1078 948 "
    "-143 1812 -88 2649 169 485 149 1015 402 1430 682 58 40 142 95 186 125 "
    "156 103 186 125 312 231 152 126 446 412 582 567 497 561 865 1198 1101 "
    "1905 138 411 223 813 272 1280 20 195 17 826 -5 1012 -130 1080 -586 2028 "
    "-1342 2783 -799 799 -1829 1270 -2965 1355 -175 13 -330 13 -330 0 0 -5 "
    "-24 -10 -54 -10 -132 0 -337 -56 -475 -131 -469 -253 -702 -800 -555 -1306 "
    "117 -406 448 -712 860 -798 44 -9 167 -20 274 -25 229 -10 366 -29 546 -75 "
    "611 -157 1136 -549 1464 -1095 162 -269 276 -599 320 -925 49 -367 -2 -868 "
    "-130 -1270 -119 -371 -330 -764 -576 -1069 -49 -61 -148 -171 -221 -245 "
    "-73 -75 -133 -139 -133 -143 0 -10 -117 -108 -129 -108 -7 0 -47 -26 -89 "
    "-59 -467 -355 -1024 -578 -1617 -646 -165 -19 -539 -22 -726 -5 -1215 109 "
    "-2298 687 -3054 1630 -653 816 -998 1852 -960 2885 31 869 219 1635 585 "
    "2380 862 1758 2571 2969 4500 3190 434 49 940 49 1440 -1 1007 -100 2022 "
    "-424 2913 -931 1026 -582 1912 -1410 2561 -2393 702 -1062 1107 -2240 1218 "
    "-3540 17 -205 18 -954 0 -1150 -110 -1253 -471 -2345 -1117 -3381 -1125 "
    "-1803 -2991 -3059 -5070 -3413 -365 -62 -672 -92 -1085 -106 -301 -10 -409 "
    "-22 -533 -60 -292 -90 -542 -305 -677 -584 -121 -250 -148 -517 -79 -783 "
    "118 -449 501 -779 970 -834 167 -19 668 0 1084 41 1948 195 3791 971 5295 "
    "2229 318 266 743 677 996 961 1078 1214 1810 2583 2199 4115 394 1549 398 "
    "3186 10 4746 -297 1194 -843 2365 -1563 3350 l-99 137 163 2123 c90 1168 "
    "163 2180 164 2249 0 69 -5 153 -10 187 -84 519 -515 919 -1047 973 -190 20 "
    "-395 -16 -589 -103 -55 -24 -949 -453 -1989 -952 -1039 -499 -1899 -909 "
    "-1911 -912 -11 -3 -113 18 -225 46 -781 192 -1522 283 -2319 284 -449 0 "
    "-738 -20 -1165 -79 l-190 -27 -1225 588 c-674 323 -1445 693 -1715 823 "
    "-269 129 -531 250 -581 268 -157 56 -331 78 -503 62z"
)

# (slug, headline, subhead, footline)
# slug = filename (no extension), saved to public/og/<slug>.png
PAGES = [
    ('home', 'AI that ships, not slides.', 'Senior PMO + AI delivery for mid-sized retailers and fuel networks. Tallinn, EU.',
     'Live with Alfa Oil — $500M revenue, 600+ stations.'),
    ('not-for-you', 'When NOT to work with us.', 'We turn down work where we are not the right partner.',
     'Reading this and still wanting to talk is a strong signal.'),
    ('optimus', 'Optimus.', 'Daily operating intelligence for fuel networks.',
     '600+ stations live. Procurement decisions in 10–15 min a morning.'),
    ('alfa-oil', 'Alfa Oil — Optimus operating across the network.', 'Kyrgyzstan · 600+ stations · $500M revenue.',
     'Pricing, margin steering, station-level operations under one roof.'),
    ('case-studies', 'What we shipped, what it moved.', 'Walkable investigations — not vendor decks.',
     'Five named clients. Real production work.'),
    ('approach', 'A delivery model, not a deck.', 'Three stages, every engagement starts with a two-week diagnostic.',
     'PMO discipline is what separates a slide-led project from one that runs.'),
    ('retail', 'For mid-sized retailers.', 'Margin, cash, customer ownership, decision speed.',
     '30 services across 11 retail domains in the open playbook.'),
    ('fuel-retail', 'For fuel networks.', 'Optimus is the operating engine. Around it, four common starting points.',
     '600+ stations live on Optimus today.'),
    ('about', 'Kitty Kat Technologies.', 'A senior PMO and AI delivery firm. Tallinn, Estonia.',
     'AI earns its place by moving margin, cash, availability, customer value.'),
    ('contact', 'Book a diagnostic.', 'Two weeks, fixed shape. Decision-grade readout.',
     'hello@kittykat.tech · +372 5555 3621'),
    ('insights', 'Working in Public.', 'Two named authors. One post a month. No marketing fluff.',
     'Notes from inside KKT engagements — what we shipped, what we did not.'),
    ('cost-of-doing-nothing', 'Cost of doing nothing.', 'A methodology, public and dated. Calculator launches Phase 1.5.',
     'Sources: public filings, industry associations, KKT internal benchmarks.'),
]


def truncate_word_safe(text: str, max_len: int) -> str:
    """If text exceeds max_len characters, truncate at the last space before max_len and add ellipsis."""
    if len(text) <= max_len:
        return text
    cut = text[:max_len].rsplit(' ', 1)[0]
    return cut + '…'


def make_svg(headline: str, subhead: str, footline: str) -> str:
    # Adjust headline font-size based on length so it fits in viewBox 1200x630
    h_len = len(headline)
    if h_len <= 20:
        h_size = 100
    elif h_len <= 32:
        h_size = 84
    elif h_len <= 48:
        h_size = 64
    else:
        h_size = 52
        headline = truncate_word_safe(headline, 60)

    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#F5F3EF"/>
  <line x1="80" y1="540" x2="1120" y2="540" stroke="#1A1410" stroke-opacity="0.10" stroke-width="1"/>

  <!-- Cat mark + KKT lockup, top-left -->
  <g transform="translate(80, 75)">
    <g transform="scale(0.0563)">
      <g transform="translate(-388.609 2234.533) scale(0.1 -0.1)" fill="#1A1410">
        <path d="{CAT_PATH}"/>
      </g>
    </g>
  </g>
  <text x="220" y="142" font-family="DM Sans, sans-serif" font-size="22" font-weight="600" letter-spacing="3" fill="#1A1410">KKT</text>

  <!-- Headline -->
  <text x="80" y="320" font-family="Playfair Display, Georgia, serif" font-style="italic" font-size="{h_size}" font-weight="400" fill="#1A1410">{headline}</text>

  <!-- Subhead -->
  <text x="80" y="395" font-family="DM Sans, sans-serif" font-size="28" fill="#5C5045">{subhead}</text>

  <!-- Footline -->
  <text x="80" y="585" font-family="DM Sans, sans-serif" font-size="20" fill="#9C8E82">{footline}</text>
</svg>
'''


def render(slug: str, svg: str) -> None:
    src = OG_DIR / f'_{slug}.svg'
    dst = OG_DIR / f'{slug}.png'
    src.write_text(svg, encoding='utf-8')
    subprocess.run(
        ['rsvg-convert', '-w', '1200', '-h', '630', '-o', str(dst), str(src)],
        check=True,
    )
    src.unlink()  # don't keep the temp svg
    print(f'  ✓ {dst.relative_to(ROOT)}')


def main() -> None:
    print(f'Generating {len(PAGES)} OG cards →')
    for slug, headline, subhead, footline in PAGES:
        svg = make_svg(headline, subhead, footline)
        render(slug, svg)
    print('Done.')


if __name__ == '__main__':
    main()
