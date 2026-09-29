# We:Cover landing

KR/EN landing page for a Korea-focused post-diagnosis financial navigation service. Static HTML/CSS/JS, with no package install or build step.

## Preview

```sh
node server.cjs
```

- Korean: http://127.0.0.1:4174/?lang=ko
- English: http://127.0.0.1:4174/?lang=en
- One-pager: http://127.0.0.1:4174/?view=onepager&lang=ko
- English one-pager: http://127.0.0.1:4174/?view=onepager&lang=en

The default port is 4174 to avoid the original draft server on 4173. Set `PORT` to override. The preview server binds to loopback only and blocks dot paths.

## Design and behavior

Copilot Money is the primary visual reference: oversized centered typography, colored floating UI cards, dark surfaces and a product-led scroll sequence. WeCover copy, palette and original prototype screens are used throughout; no Copilot assets are copied.

Desktop: the hero device rises on scroll; a sticky product stage moves through checklist, estimate and documents. Buttons also select each screen. Mobile: ordinary native scrolling and explicit screen controls. Reduced motion disables floating/rising animation and the pinned scroll sequence; the same buttons remain usable. One-pager mode removes motion and product stage; print CSS targets A4 with 12 mm margins.

## Sources and boundaries

- Original draft copied from the read-only project mirror; original files were preserved.
- `screens/19.html`, `screens/30.html`, `screens/27.html`: extracted Korean HTML prototype screens supplied in the draft. Not screenshots of the current production React app. Names, amounts and deadlines are example data.
- `assets/wecover-mark.svg`: existing logo extracted from screen 19.
- Source prototype and desktop reference documents were not modified.
- Event one-page PDF and contact playbook reviewed. The one-page contact details remain placeholders; no email, booking destination, payment or unverified results were added.
- Insurance riders are candidates to check; eligibility/payment is determined by institutions and insurers.

## GitHub repository

Private source repository: https://github.com/paulcho1018-oss/wecover-landing

The GitHub connection has read/write access. Source upload is separate from website deployment: localhost URLs work only on the machine running the preview server. No public deployment or shareable landing-page URL has been created yet.

## Validation

See `QA.md`. No external runtime dependencies, analytics or data collection. Publish only static page files, `assets/` and `screens/`; the Node preview server and QA files are not needed on static hosting.

## Pitch-deck refinement

See `REFERENCE-NOTES.md` for the selected palette, source-backed statistic, screen explanations and excluded claims. The calculator stage now displays the original prototype's result example (screen 39); screen 30 remains available as a source asset. The original large-type and scroll-driven composition is preserved.
