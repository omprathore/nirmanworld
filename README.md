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


## Hostinger deployment settings (corrected)

Use the **Next.js** framework preset, not `Other`. The repository root build script has been adjusted so Hostinger's fixed `npm run build` command also prepares the publish folder automatically.

- Framework preset: `Next.js`
- Branch: `main`
- Node version: `20.x`
- Root directory: `./`
- Build command: `npm run build`
- Package manager: `npm`
- Output directory: `hostinger_dist`
- Environment variables: none required for this frontend

Do not set an entry file. The `Other` preset is not required for this static-export deployment.

The root build now performs both steps automatically:

1. Builds the `nirman-world` Next.js app through Turborepo.
2. Copies `apps/nirman-world/out` into the repository-root `hostinger_dist` folder for Hostinger to publish.
