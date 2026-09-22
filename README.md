# Nirman.World Frontend Platform

Frontend baseline built with the agreed architecture:

- Next.js 15.5.25
- React 19
- TypeScript
- Tailwind CSS
- Turborepo monorepo
- shared `@nirman/ui` package
- TanStack Query
- Zustand
- React Hook Form + Zod

## Why Next 15.5.25

This project intentionally pins Next.js to **15.5.25** and Node to **>=20.9 <21** because this combination has been the more reliable baseline for the current Hostinger environment used for Nirman projects. The public site is configured with `output: 'export'`, so production deployment produces plain static files and does not require Next.js to run on the Hostinger server.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build:hostinger
```

The Hostinger-ready output is created in:

```text
hostinger_dist/
```

Upload the **contents** of `hostinger_dist/` into the domain's `public_html/` folder.

## GitHub + Hostinger

If Hostinger is building from GitHub, configure Node **20.x** and use:

```bash
npm install --no-audit --no-fund
npm run build:hostinger
```

Publish directory:

```text
hostinger_dist
```

If the Hostinger deployment UI does not support a publish directory for static output, build locally/GitHub Actions and upload `hostinger_dist/` to `public_html/`.

## Current scope

This package is the public Nirman.World frontend. It includes:
- customer-first service enquiry
- interactive enquiry modes
- interactive project lifecycle
- stage-specific Nirman platform reveal
- customer transparency section
- managed-fulfilment process
- partner/business onboarding section
- ecosystem modules
- responsive mobile/desktop behavior

Backend/API/database integration is intentionally not hard-coded here. The UI is ready to connect to a future API without changing the frontend architecture.
