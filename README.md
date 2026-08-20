# APEX Website + `/admin`

This is one Next.js project containing both the public APEX website and the private administration panel.

## Routes

- `/` — public APEX website
- `/products` — public products page
- `/blogs` — public blogs/news page
- `/admin` — protected admin dashboard
- `/admin/login` — admin sign-in
- `/admin/site` — website content editor
- `/admin/products` — products content
- `/admin/blogs` — blogs/news content
- `/admin/media` — media uploads
- `/admin/settings` — publishing/system settings

There is **no separate CMS deployment**. Deploy this repository once on Vercel and visit `https://your-domain.com/admin`.

## Local development

```powershell
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000/admin`.

Development-only fallback credentials are:

- email: `admin@apex.local`
- password: `apex-dev`

They do not work in production.

## Vercel environment variables

Configure these in Vercel → Project → Settings → Environment Variables:

```env
APEX_ADMIN_EMAIL=you@example.com
APEX_ADMIN_PASSWORD=use-a-strong-password
APEX_ADMIN_SECRET=use-a-long-random-secret
```

Without those variables, production admin sign-in is intentionally disabled.

### Publishing website content

The admin editor reads `shared/content/en.json` and `shared/content/ar.json` as the fallback content model.

On Vercel, the filesystem is not a durable CMS database. To make the **Publish** button persist changes, configure a GitHub token that can update this repository:

```env
GITHUB_TOKEN=...
GITHUB_REPO=Ex3Cut1On3r/apex-test-website
GITHUB_BRANCH=main
GITHUB_CONTENT_PATH_EN=shared/content/en.json
GITHUB_CONTENT_PATH_AR=shared/content/ar.json
GITHUB_MEDIA_PATH=public/shared/assets/cms
```

Publishing then commits the JSON/media changes to GitHub. If Vercel is connected to `main`, that commit triggers the normal website redeploy.

For local development, without GitHub variables, publishing writes directly to `shared/content/*.json`.

## Production check

```powershell
npm.cmd run typecheck
npm.cmd run build
```

## Architecture

Public UI remains under `shared/components/` and public content under `shared/content/`.

Admin-only code is isolated under:

```text
shared/admin/
  components/
    ap_admin_shell.tsx
    ap_admin_icons.tsx
    ap_content_editor.tsx
    ap_media_manager.tsx
    ap_login_form.tsx
  lib/
    auth.ts
    store.ts
```

The `/admin` route is protected by the `(protected)` route-group layout. Admin API endpoints are namespaced under `/api/admin/*`.
