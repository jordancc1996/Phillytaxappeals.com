# Philly Tax Appeals — Vercel deploy

Static Astro site. Apex host: `https://phillytaxappeals.com`. No Supabase. Do not copy env vars or the SPA rewrite from `taxappeal-phl-helper`.

## Vercel setup

1. Push this repo to GitHub, then import it in Vercel as a new project (do not reuse the old Vite SPA project).
2. Framework preset: Astro. Build command: `npm run build`. Output: `dist`. Install: `npm install --legacy-peer-deps` (also set in `vercel.json` and `.npmrc`).
3. Node: 22.x (see `package.json` `engines`).
4. Do **not** add Supabase (or any other) environment variables.
5. Confirm `vercel.json` has **no** catch-all rewrite to `/index.html`. That SPA rule would serve the homepage for `/news` and `/tools` instead of 404.
6. Deploy a Preview URL first. Do not attach the production domain until the preview checklist is green.

## Preview checklist

Use the Vercel Preview URL (not apex) until cutover.

- Homepage loads correctly, full nav/footer present
- All 4 county landing pages load. Confirm no nav, no footer except the privacy policy link, form is prominent:
  - `/philadelphia-property-tax-appeal`
  - `/bucks-county-property-tax-appeal`
  - `/delaware-county-property-tax-appeal`
  - `/montgomery-county-property-tax-appeal`
- Contact form submits (Formcarry endpoint `https://formcarry.com/s/5KTu8FjHmBp`)
- `/news` and `/tools` both return 404 or do not exist
- `/sitemap-index.xml` valid, apex-only, 6 URLs, no `/news` or `/tools`
- `/robots.txt` correct (apex Sitemap line, AI-crawler Allow rules intact)
- No console errors
- Mobile layout correct, especially the stripped-down county pages

## Domain cutover

Do not change DNS until the preview checklist is fully green.

1. Vercel → Project Settings → Domains.
2. Add `phillytaxappeals.com` as the production domain.
3. Add `www.phillytaxappeals.com` and redirect it to `phillytaxappeals.com` (308). `vercel.json` also redirects www host to apex.
4. At the current DNS host, apply the A/ALIAS and CNAME records Vercel shows. Do not point the domain at the old Lovable or `taxappeal-phl-helper` project.
5. Wait until SSL is issued on both hosts.
6. After propagation, confirm:
   - `https://phillytaxappeals.com` serves this Astro build
   - `https://www.phillytaxappeals.com` redirects to apex
   - View-source canonicals, `og:url`, and JSON-LD stay apex with no `www.phillytaxappeals`
   - `/sitemap-index.xml` and `/robots.txt` still match the preview checklist
7. Leave the old `taxappeal-phl-helper` Vercel project in place until production is confirmed. Do not delete it as part of cutover.
