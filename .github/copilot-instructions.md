# Project Guidelines

## Stack And Structure
- This is a Next.js App Router project using TypeScript, React 19, and Tailwind CSS v4.
- Route folders under `app/` are the primary feature boundaries. Many treatment and clinic pages are standalone landing pages composed from smaller sections.
- Keep reusable chrome and shared sections in `app/components/`. Keep page-specific sections colocated with the route that uses them.
- Use `app/layout.tsx` as the root layout reference and `app/components/layout/ConditionalLayout.tsx` as the source of truth for when header and footer should be hidden.

## Build And Verify
- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Run `npm run lint` after changes. Run `npm run build` when changing routing, config, or production behavior.

## Conventions
- Preserve the existing composition pattern for page routes: import focused sections and assemble the page in the route's `page.tsx` instead of building large monolithic components.
- Prefer existing shared sections before creating new ones. Use route-local components when content or layout is specific to one treatment page.
- Add `"use client"` only where hooks, browser APIs, or interactive form behavior require it.
- For API routes in `app/api/*/route.ts`, validate required environment variables early and keep `runtime = "nodejs"` when the handler depends on Node-only libraries such as `googleapis` or `nodemailer`.
- Use `app/lib/basePath.ts` for raw `fetch()` calls, media URLs, and inline asset URLs that need a client-side base path. Do not add it to Next.js `Link` or `Image`, which already handle base paths.
- Preserve the conditional `NEXT_OUTPUT=standalone` behavior in `next.config.ts` unless deployment requirements change.

## Project References
- Use `app/Uterine-Fibroid-Embolization/page.tsx` as a representative example of the treatment-page composition style.
- Use `app/api/consultation/route.ts` as the reference implementation for server-side validation, Google Sheets integration, and email delivery.
- Treat `README.md` as generic create-next-app bootstrap documentation, not as a source of project-specific conventions.