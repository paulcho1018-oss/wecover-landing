# Validation — 2026-09-29

- `node --check content.js` and `node --check server.cjs`: pass.
- All HTML `data-t` keys exist in both language dictionaries.
- Desktop browser: hero visual inspection; KR/EN toggle updates heading and query parameter; no empty translated nodes.
- Product controls: correct heading and only one visible iframe when selecting documents or estimates.
- Desktop native scroll: checklist advances to estimates in the pinned sequence.
- 390 × 844 viewport: Korean hero and product visually inspected; document scroll width 375 px within viewport; no section overflow. English one-pager also has no horizontal overflow.
- Browser console: no errors or warnings during exercised flows.
- One-pager: language/view query preserved, full-page return links and print control present.
- Print CSS targets A4. The in-app browser did not expose a print preview, so actual PDF page count remains unverified.
- Reduced-motion behavior implemented using media query and matchMedia; OS-level reduced-motion rendering not exercised in this environment.
- Original prototype copies preserved unchanged. Screenshots are illustrative and explicitly labeled.
- No public deployment or QR generated; no external contact destination is available in the reviewed materials.

## Reference refinement verification

- Forest/ivory/amber palette applied using the supplied final pitch deck.
- New problem-statistic source linked directly to the FSC primary release, with date and scope in KR/EN.
- Calculator presentation upgraded to source prototype screen 39; original screen 30 retained.
- KR/EN keyboard activation verified; all three explanatory points change with selected product screen; one product iframe visible at a time.
- Desktop problem and product layouts visually checked. At 390 × 844, English statistic and pathway cards are readable and have no horizontal overflow (document width 375 px).
- No console errors observed in exercised flows; translated nodes are populated.
- A4 page count and OS-level reduced-motion check remain unverified as previously noted.
