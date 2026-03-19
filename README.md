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

- Icon set: Added my preferred SVG icon library `font-awesome` for the prototype.

### Navigation Bar

- Accessibility: Accessibility improvements have been made, such as adding `aria-label` and `.sr-only` button labels to the label-less navigation buttons.

- Mobile responsiveness: While this is a mobile-first design, I ensured it works on desktop as well for this prototype. With more time I would implement a more suitable pattern for desktop viewport.

### Restaurant List Page

- Mobile responsiveness: I used CSS Grid on the list view to ensure all cards are always responsive (multi column on desktop) and never overflow the screen.

- Accessibility: Same improvements to the 'Favourite' button as the nav bar.

#### Restaurant Cards

- Placeholder images: For each `RestaurantCard` as some `imageLink` assets are unreachable from the endpoint, I implemented placeholder images using my favourite placeholder image service `placehold.co.

- Maximise SSR: I extracted the mock 'Favourite' button and 'RestaurantImage' with built-in load error handling into their own CSR components, to maximise SSR for the rest of the card. Update: no longer necessary as search must be done client side now. With more time I would still work on maximising this.

- HTML hierarchy: I used `article` tag for each restaurant card to semantically represent the content. Proper `h1` and `h2` were also used for correct DOM structure.

- [TODO] Lazy loading / skeleton loading card images.

#### Search and Sort

- Search performance: Use debounced search to prevent excessive re-renders and API calls. Implement useMemo to memoize the filtered restaurants list to avoid re-filtering on every render.

- Filter by partial name and cuisines.

- [TODO] Sort: Implement sort by best deals first.

### Restaurant Detail Page

- App Router: Implemented App Router linking on clicking restaurant card.

- Readable URL: Implemented SEO-friendly URLs by combining a kebab-cased restaurant name with the first segment of its `objectId` (e.g. `/restaurant/abc-chicken-d80263e8`), rather than `restaurant/D80263E8-FD89-2C70-FF6B-D854ADB8DB00`. This should help with SEO and user experience with more shareable links between users.

- Accurate Matching: As my current assumption cannot guarantee absolute uniqueness with the shorterned `objectId`, to prevent collisions I added a dual verification with the restaurant name as well. It extracts the name and shortened ID from the slug and only returns a match if both parts match the restaurant DB record identically.

- Error handing: If no restaurant is found, the user will be redirected to the home page. I would also create a toast / error banner to inform the user of this error and prevent confusion.

- Back button: Missing from designs so I added an intuitive one

- Image carousel: Only one image is available per restaurant in the mock data, so I implemented a static image.

- Scroll top: While maintaining scroll position is beneficial on the Restaurant List page, every click into a Restaurant Detail page should reset scroll position for each restaurant. I implemented a ScrollToTop function that resets the scroll position on load of this page.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
