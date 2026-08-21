# APEX — Tailwind + React Bits-inspired website + `/admin`

This build keeps the public APEX website and the protected CMS in one Next.js 15 project. It applies the requested APEX folder architecture, moves the public layout to Tailwind-assisted Flexbox/Grid, and adds a lightweight interaction layer inspired by React Bits without introducing MongoDB, Socket.IO infrastructure, a hosted CMS, or any new external runtime service.

## What changed in this build

- Tailwind CSS 3.4 is installed and used across the public layouts for responsive Grid/Flexbox structure.
- `shared/globals.css` remains the single global stylesheet for brand tokens, legacy component details, admin styling, and advanced motion effects.
- React Bits-inspired local components were added under the one allowed component folder:
  - `AP_BlurText.tsx`
  - `AP_GradientText.tsx`
  - `AP_DotGrid.tsx`
  - `AP_SpotlightCard.tsx`
  - `AP_TiltCard.tsx`
- Hero architecture is now animated, orbiting, tilt-responsive, and visually layered instead of behaving like a static placeholder.
- CMS navigation uses Next.js client navigation (`Link`) so moving between admin screens does not perform traditional full-page reloads.
- Heavy public overlays (contact modal, case-study modal, floating actions) are dynamically loaded.
- Lower homepage sections are split with `next/dynamic`, and navigation prefetch is disabled where eager page loading is unnecessary.
- Added floating WhatsApp + APEX assistant actions. WhatsApp reads its URL from CMS JSON; if no number is configured it safely opens the contact form.
- Added LinkedIn / Instagram / WhatsApp CMS fields and footer social rendering.
- Added a `/careers` page and `/admin/careers` editor shell. No fake jobs are published.
- Added SEO/GEO groundwork: canonical metadata, Open Graph/Twitter metadata, Organization/WebSite/Service JSON-LD, `sitemap.xml`, and `robots.txt` with `/admin` excluded.
- Products and Blogs remain intentionally empty until real items are approved.
- No MongoDB is included in this version.
- No Socket.IO server is included in this version.
- No external AI API is included. The current assistant is a local guided UI only.

## Project structure

```text
app/
├── components/          # ONE reusable component folder; every reusable component is AP_*
├── screens/             # complete screen compositions
├── admin/               # thin Next.js route wrappers for /admin
├── api/                 # Next.js route handlers only
├── blogs/               # thin route wrapper
├── careers/             # thin route wrapper
├── products/            # thin route wrapper
├── layout.tsx
├── loading.tsx          # only renders AP_Loader
├── robots.ts
├── sitemap.ts
└── page.tsx

shared/
├── assets/
│   ├── logo/            # icon.svg + APEX logo assets
│   ├── icons/
│   └── case-studies/
├── en.json              # English CMS/fallback data
├── ar.json              # Arabic CMS/fallback data
├── content.ts
├── globals.css
├── types.tsx
├── auth.ts
└── store.ts

public/
└── uploads/             # CMS-uploaded media only
```

## Requested architecture rules applied

- `icon.svg` is under `shared/assets/logo/icon.svg`.
- There is one reusable component folder: `app/components`.
- Components use the `AP_` prefix.
- `globals.css` is in `shared/globals.css`.
- There is no duplicate `public/shared` tree.
- `app/loading.tsx` delegates to `AP_Loader.tsx`.
- Full screen compositions live under `app/screens`.
- The old `shared/models/apex` model folder is gone; domain/request/response contracts live in `shared/types.tsx`.
- English/Arabic fallback content stays in `shared/en.json` and `shared/ar.json`.
- Responsive public structure uses Tailwind Grid/Flexbox plus the existing detailed component CSS.

## Jira coverage in this build

- **KAN-1:** Tailwind + Flexbox/Grid responsive redesign — implemented in this build.
- **KAN-2:** CMS SPA-like navigation — implemented using App Router + `next/link`, without traditional reload navigation.
- **KAN-3:** Lazy loading — dynamic lower-page modules, dynamic overlays, lazy case-study images, conservative prefetching.
- **KAN-4:** Socket.IO — intentionally deferred because this build has no external realtime/server infrastructure.
- **KAN-5:** MongoDB/Node CMS database — intentionally deferred per current instruction.
- **KAN-6:** SEO/GEO baseline — metadata, canonical URLs, schema, sitemap, robots.
- **KAN-7:** Production domain target — metadata/sitemap are configured for `https://apexlb.tech`.
- **KAN-8:** WhatsApp floating action — implemented, CMS/fallback driven.
- **KAN-9:** APEX AI assistant icon — implemented as a local guided assistant UI, no external AI provider.
- **KAN-10:** LinkedIn / WhatsApp / Instagram CMS fields — implemented with JSON fallback.
- **KAN-11:** Careers page — implemented with empty truthful jobs state and CMS copy controls.
- **KAN-12:** Static placeholder visual — upgraded with interactive isometric stack, tilt, orbit, dot-grid and motion effects.

## Content / CMS behavior

The website still has deterministic JSON fallback content. In local development the admin can write to the JSON source. In production, the existing optional GitHub publish mode can be enabled if you want browser edits to persist without adding a database.

If you do **not** configure GitHub publishing on Vercel, the website itself still runs normally, but production CMS publishing is intentionally disabled because Vercel's local filesystem is not durable.

Social values are under:

```json
"social": {
  "whatsapp": "",
  "linkedin": "",
  "instagram": ""
}
```

They can be edited under `/admin/site` → **Social & contact**.

## Safest way to replace the current GitHub repo

Do not drag-copy over the old repo if you can avoid it; deleted stale files can survive and break Vercel.

From this extracted folder:

```powershell
.\APPLY_TO_EXISTING_REPO.ps1 "C:\Users\charlie\Downloads\APEX-Ultra-Website-ULTRA"
```

The script mirrors this build while preserving `.git`, `.env.local`, `node_modules`, `.next`, and `.vercel`.

Then:

```powershell
cd "C:\Users\charlie\Downloads\APEX-Ultra-Website-ULTRA"
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run typecheck
npm.cmd run build
```

If both checks pass:

```powershell
git add -A
git commit -m "APEX Tailwind interactive redesign and CMS updates"
git push origin main
```

## Local URLs

```text
Website: http://localhost:3000
Admin:   http://localhost:3000/admin
Careers: http://localhost:3000/careers
```

Development-only admin fallback:

```text
admin@apex.local
apex-dev
```

## Vercel production admin variables

```text
APEX_ADMIN_EMAIL
APEX_ADMIN_PASSWORD
APEX_ADMIN_SECRET
```

Optional existing GitHub-backed publishing mode:

```text
GITHUB_TOKEN
GITHUB_REPO=Ex3Cut1On3r/apex-test-website
GITHUB_BRANCH=main
GITHUB_CONTENT_PATH_EN=shared/en.json
GITHUB_CONTENT_PATH_AR=shared/ar.json
GITHUB_MEDIA_PATH=public/uploads
```

## React Bits note

The interaction layer is inspired by React Bits patterns (blur text, gradient text, dot-grid ambience, spotlight cards and tilt interactions) but is implemented locally as APEX `AP_*` components. Nothing is loaded from React Bits at runtime.

## Landing upgrade (August 21, 2026)

The home page now opens with a branded APEX initialization sequence and then reveals a centered, minimal hero over a restrained systems-architecture background. The previous floating architecture cards and random hero decorations were removed. The background uses a locally adapted React Bits DotField interaction and the loader uses a locally adapted React Bits SplitFlapText interaction. No external runtime service is required.
