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

### Navigation Bar

- Accessibility: Accessibility improvements have been made, such as adding `aria-label` and `.sr-only` button labels to the label-less navigation buttons.

- Mobile responsiveness: While this is a mobile-first design, I ensured it works on desktop as well for this prototype. With more time I would implement a more suitable pattern for desktop viewport.

### Restaurant List Page

- Mobile responsiveness: I used CSS Grid on the list view to ensure all cards are always responsive (multi column on desktop) and never overflow the screen.

- Accessibility: Same improvements to the 'Favourite' button as the nav bar.

#### Restaurant Cards

- Placeholder images: For each `RestaurantCard` as some `imageLink` assets are unreachable from the endpoint, I implemented placeholder images using my favourite placeholder image service `placehold.co.

- Maximise SSR: I extracted the mock 'Favourite' button and 'RestaurantImage' with built-in load error handling into their own CSR components, to maximise SSR for the rest of the card.

- HTML hierarchy: I used `article` tag for each restaurant card to semantically represent the content. Proper `h1` and `h2` were also used for correct DOM structure.

#### Search and Sort

- Search performance: Use debounced search to prevent excessive re-renders and API calls. Implement useMemo to memoize the filtered restaurants list to avoid re-filtering on every render.

- Filter by partial name and cuisines.

- [TODO] Sort: Implement sort by best deals first.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
