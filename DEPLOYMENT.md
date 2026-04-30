# Git + Vercel Readiness

This project is currently a plain folder (not yet a git repository).  
Use the steps below to prepare and deploy.

## 1) Initialize Git

From project root:

```bash
git init
git add .
git commit -m "Initial Malinois website build"
```

If you already have a remote repository:

```bash
git branch -M main
git remote add origin <YOUR_GIT_REMOTE_URL>
git push -u origin main
```

## 2) Deploy to Vercel (CLI path)

Install CLI once:

```bash
npm i -g vercel
```

Login and link:

```bash
vercel login
vercel
```

For production deployment:

```bash
vercel --prod
```

## 3) Deploy to Vercel (Dashboard path)

1. Push project to GitHub/GitLab/Bitbucket.
2. In Vercel dashboard, click **New Project**.
3. Import repository.
4. Framework preset: **Other** (static).
5. Build command: leave empty.
6. Output directory: leave empty (root static files).
7. Deploy.

## 4) Post-deploy Checks

- `/` loads homepage correctly.
- Top nav links resolve on production domain.
- Product/Industry/Resource deep pages load without 404.
- Text contrast and mega-menu visibility are acceptable on desktop and mobile.

## 5) Recommended Next Hardening

- Add custom domain and HTTPS enforcement in Vercel.
- Add analytics (Vercel Analytics or preferred provider).
- Add monitoring for broken links and page availability.
- Add a CI check (HTML/link lint) before production merges.

