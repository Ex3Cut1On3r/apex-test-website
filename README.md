# APEX — Final Ultra Website

Premium Next.js 15 website based on the latest APEX direction.

## Run locally

```powershell
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run dev
```

Open http://localhost:3000

## Production check

```powershell
npm.cmd run build
npm.cmd start
```

## Deploy to the existing GitHub repository

From this project folder:

```powershell
git init
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Ex3Cut1On3r/apex-test-website.git
git add -A
git commit -m "Ship final Apex website redesign"
git push -u origin main --force
```

## Contact form

`POST /api/contact` validates the request and optionally forwards it to `APEX_CONTACT_WEBHOOK_URL` when that environment variable is configured. Without a webhook, it safely accepts preview submissions and logs them server-side.
