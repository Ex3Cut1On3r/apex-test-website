# APEX — Premium Website Redesign

A production-oriented Next.js 15 website based on the APEX Peak Loop identity:

- Teal `#00B3A4`
- Charcoal `#1E2328`
- Light gray `#E6E9EC`
- Coral accent `#FF6B6B`
- Clean enterprise layout with no Tailwind/PostCSS dependency
- Responsive desktop/tablet/mobile navigation
- Custom vector mountain system graphic with evenly spaced route milestones
- TutWithUs case study using the supplied website reference screenshot
- Contact modal with an optional production webhook

## Run on Windows / IntelliJ PowerShell

If Node is installed at `C:\Program Files\nodejs`:

```powershell
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Production check

```powershell
npm.cmd run build
```

## Contact form

The form works in preview mode and logs validated submissions server-side. For production delivery, set this environment variable in Vercel:

```text
APEX_CONTACT_WEBHOOK_URL=https://your-webhook-endpoint.example
```

The endpoint receives JSON with `name`, `email`, `company`, `message`, and `submittedAt`.

## Push into your GitHub repository

Recommended clean method:

```powershell
cd C:\Users\charlie\Documents
git clone https://github.com/Ex3Cut1On3r/apex-test-website.git
cd apex-test-website
```

Copy the contents of this ZIP into that cloned folder, overwrite the old website files, but keep the existing `.git` folder. Then:

```powershell
$env:Path="C:\Program Files\nodejs;$env:Path"
npm.cmd install
npm.cmd run build
git status
git add -A
git commit -m "Redesign Apex website with Peak Loop brand"
git push origin main
```

If Vercel is connected to `main`, the push will trigger a deployment.
