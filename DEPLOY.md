# Deploy

This is a **Next.js 16** project with SSR, middleware (next-intl), and server components.
It **cannot** be deployed as a plain static site — a Node.js runtime is required.

---

## Option 1 — Vercel (Recommended)

Vercel is the native platform for Next.js. Zero config required.

### Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Subsequent deploys:

```bash
vercel --prod
```

### Via GitHub

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no settings needed.
4. Every push to `main` triggers a production deploy automatically.

---

## Option 2 — Firebase App Hosting

Firebase App Hosting supports Next.js SSR natively (unlike the older Firebase Hosting static approach).

### Prerequisites

```bash
npm install -g firebase-tools
firebase login
```

### Setup (first time only)

```bash
firebase init apphosting
```

This creates an `apphosting.yaml` config file and connects to your Firebase project (`asmfadholi`).

### Deploy

```bash
firebase apphosting:backends:deploy
```

Or push to your connected GitHub branch — Firebase App Hosting deploys automatically on push.

---

## Local build check

Before deploying, verify the build passes locally:

```bash
npm run build
npm run start    # test at http://localhost:3000
```

---

## Environment variables

No environment variables are required for the base portfolio.
If you add API keys in the future, set them in:
- Vercel: Project → Settings → Environment Variables
- Firebase App Hosting: `apphosting.yaml` → `env` section

---

## Notes

- The old `firebase.json` (static hosting, `public: "dist"`) is from the previous Nuxt project and does **not** apply to this Next.js app.
- `npm run build` outputs to `.next/`, not `dist/` or `out/`.
- The next-intl middleware (`src/proxy.ts`) requires a server runtime and will not work with `output: 'export'`.
