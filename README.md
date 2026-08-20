# APEX — architecture-fixed website + /admin

This build keeps the public website, Products page, Blogs/News page, and the protected `/admin` CMS in one Next.js project while applying the requested APEX code structure.

## Structure

```text
app/
├── components/          # the ONE reusable component folder; every component is AP_*
├── screens/             # complete screen compositions
├── admin/               # thin Next.js route wrappers for /admin
├── api/                 # Next.js route handlers only
├── blogs/               # thin route wrapper
├── products/            # thin route wrapper
├── layout.tsx           # framework entry layout
├── loading.tsx          # only calls AP_Loader
└── page.tsx             # only calls AP_HomeScreen

shared/
├── assets/
│   ├── logo/            # icon.svg + APEX logo assets
│   ├── icons/
│   └── case-studies/
├── en.json              # English CMS/fallback data
├── ar.json              # Arabic CMS/fallback data
├── content.ts           # CMS/fallback content bridge
├── globals.css          # all global styling and responsive rules
├── types.tsx            # domain models + request/response contracts
├── auth.ts              # admin session logic
└── store.ts             # JSON/GitHub CMS storage logic

public/
└── uploads/              # CMS-uploaded media only
```

### Why route wrapper files still exist in `app/`
Next.js requires `page.tsx`, `layout.tsx`, route groups, and `api/` handlers to live inside `app`. They contain almost no presentation logic. All actual page/screen composition is in `app/screens`, and all reusable UI is in the single `app/components` folder.

## Requested architecture changes applied

- `icon.svg` is under `shared/assets/logo/icon.svg`.
- All reusable components are in one folder: `app/components`.
- Every reusable component file uses the `AP_` prefix.
- `globals.css` is now `shared/globals.css`.
- The duplicate `public/shared` folder is removed; there is one `shared` source folder.
- Shared design assets are served through `/api/assets/...` so they can stay in the single `shared/assets` tree.
- `AP_Loader.tsx` is the loading component; `app/loading.tsx` is only the Next.js wrapper.
- Complete screen compositions are under `app/screens`.
- The old `shared/models/apex/sp_study.ts` model layer is removed; case-study/domain contracts live in `shared/types.tsx`.
- English and Arabic fallback content are `shared/en.json` and `shared/ar.json`.
- Products and Blogs layouts remain ready without invented products/news.
- Industries remain the three active verticals only, plus the open-door operational challenge CTA.
- Primary, secondary and tertiary brand colors are centralized in `shared/globals.css`.
- Public and admin layouts use CSS Grid/Flexbox responsive breakpoints rather than fixed-position layout hacks.

## Safest way to replace your existing GitHub project

Do **not** drag-copy over the old repo if you can avoid it, because deleted old files can survive and break Vercel.

Extract this ZIP somewhere, then run from the extracted folder:

```powershell
.\APPLY_TO_EXISTING_REPO.ps1 "C:\path\to\apex-test-website"
```

The script mirrors this exact build over the repo while preserving `.git`, `.env.local`, `node_modules`, `.next`, and `.vercel`.

If you insist on manually pasting files over the old repo, run `CLEAN_STALE_FILES.ps1` in the old repo **before** re-copying this build.

## Local run

```powershell
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run typecheck
npm.cmd run dev
```

Public site:

```text
http://localhost:3000
```

Admin:

```text
http://localhost:3000/admin
```

Development-only fallback login:

```text
admin@apex.local
apex-dev
```

## Vercel environment variables

Copy `.env.example` values into Vercel → Project → Settings → Environment Variables.

Required for production `/admin` login:

```text
APEX_ADMIN_EMAIL
APEX_ADMIN_PASSWORD
APEX_ADMIN_SECRET
```

Required if the admin Publish button should commit edits back to GitHub:

```text
GITHUB_TOKEN
GITHUB_REPO=Ex3Cut1On3r/apex-test-website
GITHUB_BRANCH=main
GITHUB_CONTENT_PATH_EN=shared/en.json
GITHUB_CONTENT_PATH_AR=shared/ar.json
GITHUB_MEDIA_PATH=public/uploads
```

## Before pushing

```powershell
npm.cmd run typecheck
npm.cmd run build
```

Then:

```powershell
git add -A
git commit -m "Refactor APEX architecture and fix admin build"
git push origin main
```
