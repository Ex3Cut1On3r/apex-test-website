# APEX Website — CMS-Ready Final Build

This build keeps the approved APEX visual direction while refactoring the project into a CMS-friendly, reusable component architecture.

## What changed

- Home page is now a thin composition layer that calls reusable APEX screen components.
- Only the three active verticals are shown: Education, Service Operations, Public & Environmental Systems.
- Added `/products` with the complete page layout but no fictional products.
- Added `/blogs` with the complete editorial layout but no fictional news or achievements.
- Products and blog collections are intentionally empty until real CMS entries exist.
- All site copy and screen data is stored in fallback JSON: `shared/content/en.json` and `shared/content/ar.json`.
- `shared/content/content.ts` is the CMS integration/fallback layer.
- All request, response, CMS, page, solution, industry, and case-study shapes are centralized in `shared/types/types.ts`.
- APEX study adapter: `shared/models/apex/sp_study.ts`.
- Global styles moved to `shared/styles/globals.css`.
- SVG icon sprite moved to `public/shared/assets/icons/icons.svg`.
- Logos live under `public/shared/assets/logo/`.
- Case-study media lives under `public/shared/assets/case-studies/`.
- Primary / secondary / tertiary brand colors are declared once in `globals.css`.
- Contact and blog subscription APIs share typed request/response contracts from `types.ts`.

## Core reusable components

- `ap_header.tsx`
- `ap_button.tsx`
- `ap_textbox.tsx`
- `ap_icon.tsx`
- `ap_load.tsx`
- `ap_component.tsx`
- `ap_hero.tsx`
- `ap_solutions.tsx`
- `ap_industries.tsx`
- `ap_case_study.tsx`
- `ap_method.tsx`
- `ap_footer.tsx`

## CMS migration later

Replace the body of `getCmsContent()` in `shared/content/content.ts` with the CMS request. Keep the fallback JSON path for resilience. Components already consume typed data and should not need to be rewritten.

## Run locally

```powershell
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Production check

```powershell
npm.cmd run typecheck
npm.cmd run build
```

## Replace the existing GitHub main branch

From this project folder:

```powershell
git init
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Ex3Cut1On3r/apex-test-website.git
git add -A
git commit -m "Refactor Apex website into CMS-ready architecture"
git push -u origin main --force
```

Only use the force push if replacing the existing remote `main` is intentional.

## Optional production integrations

- `APEX_CONTACT_WEBHOOK_URL` — receives contact requests.
- `APEX_SUBSCRIBE_WEBHOOK_URL` — receives blog/newsletter subscriptions.

Without these variables, local/preview submissions are validated and logged safely.
