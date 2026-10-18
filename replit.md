# Dinner Night Invitation

A compact dinner invitation with a silent video background and a link to Google.com.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

### Active invitation

- `artifacts/dinner-invitation/` — the actual static website.
- `artifacts/dinner-invitation/src/App.tsx` — the single invitation screen.
- `artifacts/dinner-invitation/public/media/` — canonical video, poster, and original image. These files ship with the static site.
- `artifacts/dinner-night-system/` — the active shared design system, imported by the website. This is not a duplicate.
- `artifacts/dinner-night-system/docs/references/` — retained design evidence, not another running website.
- Root `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, and `tsconfig.base.json` — required workspace build configuration. Keep the repository root as the install context.

### Retained but not needed by the static invitation

- `artifacts/api-server/` and `lib/` — backend, database and generated API scaffolding.
- `artifacts/mockup-sandbox/` — separate Canvas starter, not the live invitation.
- `generated-artifacts/dinner-night-invite.html` — original downloadable standalone invitation. Retained as a distinct earlier deliverable, not used by the website.

The user chose a light cleanup: keep these separate projects intact. The website no longer imports the generated API client.

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

Keep the active design system. Cleanup is limited to duplicates and unused invitation-app files; do not remove the backend or Canvas artifacts without further approval. No SSH key is needed.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
