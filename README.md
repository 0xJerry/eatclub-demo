# EatClub Demo App

## Directories

| Name             | Description                               |
| ---------------- | ----------------------------------------- |
| `src/app`        | NextJS App Router pages                   |
| `src/components` | Shared UI "Atoms" (Buttons, Cards, Nav)   |
| `src/services`   | Data fetching & Zod validation            |
| `src/styles`     | Vanilla CSS Design system (Tokens & vars) |

## Dev Notes / Decisions

### Data Fetching

- Parse fetched data using Zod schema to ensure type safety and validate data structure. `safeParse` is used to handle malformed responses gracefully.
- Types: TS interfaces inferred from Zod schemas for type safety.
- Caching: To protect test CDN and speed up local development, cache policy is set to `force-cache` for dev purposes only

### UI and Design System

- Design system: A basic design system has been created using CSS variables
- Inter font: Loaded from Google Fonts CDN as a simple PoC, integrated using `next/font` API for better performance and prevent layout shifting

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
