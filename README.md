# Nirman.World — Hostinger Native Next.js Deployment

This package is intentionally structured so that Hostinger sees a **real Next.js app at the repository root**.

## Hostinger settings

- Framework preset: **Next.js**
- Branch: **main**
- Node version: **20.x**
- Root directory: **./**
- Build command: **npm run build**
- Package manager: **npm**
- Output directory: **.next**
- Entry file: **leave empty / not applicable**

Do not use `hostinger_dist`, `output: 'export'`, or `server.js` with this package.

## Architecture retained

- Next.js 15.5.25
- React 19
- TypeScript
- Tailwind CSS
- shared `@nirman/ui` workspace package
- shared `@nirman/shared` workspace package
- TanStack Query
- Zustand
- React Hook Form + Zod
- Turborepo configuration retained for future multi-app expansion

## Local verification

```bash
npm install
npm run build
npm start
```

The production build must create `.next/` at the repository root.
