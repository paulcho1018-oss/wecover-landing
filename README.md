# We:Cover landing

KR/EN landing page for a Korea-focused post-diagnosis financial navigation service. Static HTML/CSS/JS, with no package dependencies. Production uses a small static-file copy build.

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

The hero device rises on desktop scroll. Product screens appear in three separate vertically stacked sections with numbered headings, different forest backgrounds and section jump links. Desktop and mobile both use native scrolling; each phone gently rises as its section enters view. Reduced motion disables these movements. One-pager mode omits the product sections; print CSS targets A4 with 12 mm margins.

## Sources and boundaries

- Original draft copied from the read-only project mirror; original files were preserved.
- `screens/19.html`, `screens/30.html`, `screens/27.html`: extracted Korean HTML prototype screens supplied in the draft. Not screenshots of the current production React app. Names, amounts and deadlines are example data.
- `assets/wecover-mark.svg`: existing logo extracted from screen 19.
- Source prototype and desktop reference documents were not modified.
- Event one-page PDF and contact playbook reviewed. The one-page contact details remain placeholders; no email, booking destination, payment or unverified results were added.
- Insurance riders are candidates to check; eligibility/payment is determined by institutions and insurers.

## GitHub repository

Private source repository: https://github.com/paulcho1018-oss/wecover-landing

## Production deployment

Public site: https://wecover-landing.vercel.app/

Vercel deploys the connected GitHub main branch automatically. `vercel.json` runs `node scripts/build.cjs` and publishes only `dist/`. The build copies eight required page, asset and prototype files. Internal notes, QA screenshots and the preview server stay out of the published output.

- Korean: https://wecover-landing.vercel.app/?lang=ko
- English: https://wecover-landing.vercel.app/?lang=en
- One-pager: https://wecover-landing.vercel.app/?view=onepager&lang=ko

Localhost preview URLs work only on the machine running the preview server; share the public Vercel URL with visitors.

## Validation

See `QA.md`. No external runtime dependencies, analytics or data collection. Publish only static page files, `assets/` and `screens/`; the Node preview server and QA files are not needed on static hosting.

## Pitch-deck refinement

See `REFERENCE-NOTES.md` for the selected palette, source-backed statistic, screen explanations and excluded claims. The calculator stage now displays the original prototype's result example (screen 39); screen 30 remains available as a source asset. The original large-type and scroll-driven composition is preserved.
