# Reference refinement — 2026-09-29

## Design

Reference: `최종/We-Cover_핀넥트_통합본선.pdf` (63 pages, supplied by user).

- Pages 1, 18: forest green backgrounds and ivory brand treatment.
- Pages 11, 16: amber emphasis for meaningful numbers.
- Pages 9–10: fragmented application pathways; used as an illustrative set of six channels, not a claim that all users need all six or that all six are live WeCover features.
- Pages 12–13: diagnosis can create financial vulnerability through spending, income interruption and administrative burden.
- Pages 20–21, 27–29: screen explanations around deadlines, progress, calculation inputs and application preparation.

The existing landing composition and scroll interaction remain. No pitch-deck pages or confidential material are served by the website.

## Public statistic

10.3 trillion KRW in unclaimed insurance benefits, end-2025.
Primary source: Financial Services Commission, July 7, 2026:
https://www.fsc.go.kr/no010101/87270

The source defines these as confirmed insurance payment amounts not yet claimed, spanning the Korean insurance market. The page explicitly distinguishes this from critical-illness claims, WeCover recovery potential, or service results. Both languages show the date and direct source link.

The deck's 28.4% / 14.4% catastrophic-spending comparison and 15,476 medical-cost bankruptcies were not used: the exact primary evidence was not established in this pass. User-test metrics, market forecasts, claimed partnerships, prices and future functions were not added.

## Product visuals

Calculator stage now uses `screens/39.html`, extracted from `<template id="scr-39">` in the supplied original `본선/wecover-prototype_5.html`, with the same standalone presentation wrapper as existing extracts. It shows a worked example and calculation detail rather than an empty input. The illustrative-data disclosure remains visible, and the calculator chip explicitly says this is not a confirmed payment. `screens/30.html` is preserved.

Three explanations update together with each of the checklist, calculator and documents screens. Application guidance is described from the supplied deck; no automatic submission or payment feature is claimed.
