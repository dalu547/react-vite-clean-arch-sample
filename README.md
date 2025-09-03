# React + Vite Clean Architecture (Web Base)

A minimal, production-ready React (Vite + TypeScript + Tailwind) base template structured around Clean Architecture and MVVM-style ViewModel hooks. Includes dependency injection, swappable repositories (HTTP/In‑Memory), semantic error handling, theming, and a simple app shell with sidebar.

## Features
- Clean Architecture layering (Domain, Use Cases, Ports, Adapters)
- MVVM-style ViewModel hooks per feature (React Query integration)
- DI/Composition root with runtime‑switchable repositories
- Semantic error mapping (Axios → domain errors)
- Tailwind styling with brand tokens (red/black/white)
- Reusable UI primitives: Button, ListView, App Layout + Sidebar

## Stack
- React 18, TypeScript, Vite 5
- React Router 6, React Query 5
- TailwindCSS 3, class-variance-authority
- Axios

## Getting Started
1) Install
```bash
npm install
```

2) Configure env
- Copy `.env.example` to `.env.local` and set values:
```env
VITE_API_BASE_URL=https://your-api.example.com
# Optional: use the in-memory repository instead of HTTP
VITE_USE_FAKE_API=true
```

3) Run
```bash
npm run dev
```

4) Build / Preview
```bash
npm run build
npm run preview
```

## Project Structure
```
src/
  app/                     # App-level composition (routes)
  components/              # Reusable UI + layout components
  core/                    # Domain + use cases (framework-agnostic)
    domain/                # Entities/value objects
    usecases/              # Application services
      ports/               # Interfaces (ports)
  data/                    # Adapters (infrastructure implementations)
    dtos/                  # API DTO mapping
    repositories/          # Repo implementations (HTTP, in-memory)
    errors/                # Axios → domain error mapping
  features/                # Feature UIs and ViewModel hooks
  shared/                  # Cross-cutting: api, env, di, config
```

Key files
- App shell: `src/components/layout/Layout.tsx`, `src/components/layout/Sidebar.tsx`
- UI primitives: `src/components/ui/button.tsx`, `src/components/ui/list-view.tsx`
- Domain: `src/core/domain/user.ts`
- Use cases: `src/core/usecases/list-users.ts`, `src/core/usecases/create-user.ts`
- Port: `src/core/usecases/ports/user-repo.ts`
- Repos: `src/data/repositories/http-user-repo.ts`, `src/data/repositories/user-repo-impl.ts`
- DTO mapping: `src/data/dtos/user-dto.ts`
- Errors (domain): `src/core/errors.ts`
- Axios → domain error mapping: `src/data/errors/map-axios-error.ts`
- API client: `src/shared/config/api.ts`
- Env parsing: `src/shared/config/env.ts`
- DI/Composition root: `src/shared/di/ServiceProvider.tsx`
- Feature ViewModel hook: `src/features/users/hooks/useUsers.ts`

## Architecture Overview
Clean Architecture with a feature-first UI. Components act as Views; hooks are ViewModels that call use cases injected via DI.



##  Flow
- UI → ViewModel hook → Use Case (via DI) → Port → Adapter (HTTP or In‑Memory) → API → Network
- Responses map DTO → Domain; errors map Axios → Domain errors and bubble up

## Dependency Injection & Swappable Repos
- Composition root: `src/shared/di/ServiceProvider.tsx` wires repositories and use cases.
- Toggle at runtime using env:
  - `VITE_USE_FAKE_API=true` uses `UserRepoImpl` (in‑memory).
  - Omit or set `false` to use `HttpUserRepo`.

Example usage in a feature hook
```ts
// src/features/users/hooks/useUsers.ts
const { listUsers, createUser } = useServices()
const users = useQuery({ queryKey: ['users'], queryFn: () => listUsers.execute() })
```

## Error Handling
- Domain error types: `NotFoundError`, `ValidationError`, `UnauthorizedError`, `ForbiddenError`, `ConflictError`, `NetworkError`, `TimeoutError`, `UnexpectedError`.
- HTTP adapter wraps Axios errors and throws domain errors via `mapAxiosError`.

Branching in UI
```ts
if (error instanceof ValidationError) {
  // surface form errors from error.details
}
if (error instanceof NetworkError) {
  // show offline banner / retry
}
```

## Theming
- Tailwind brand tokens in `src/index.css`:
  - `--brand` (red), `--brand-foreground` (white)
- Components use `bg-brand` and `text-brand-fg`; outline/ghost variants use black accents.


## Extending
- Add a new entity: create domain model, define port(s), add use case(s), implement repo(s) in data, wire in `ServiceProvider`.
- Add storage implementation: create new repo in `src/data/repositories/` and swap via env or by editing the provider.
- Add pages: define a ViewModel hook that calls use cases; render with presentational components.

## Roadmap (Suggested)
- Testing: Vitest + React Testing Library, provider test helpers.
- Quality: ESLint + Prettier, CI (build/lint/test), commit hooks.
- UX: Error boundaries, toasts, loading skeletons, a11y checks.
- DX: Storybook for components, query key constants, OpenAPI types.




