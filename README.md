# Plant Hub

Plant Hub is a lightweight frontend project I put together to show off clean UI work and component architecture. It's not meant to be a real store — there's no backend, user accounts, or payment system. Just a simple interface for browsing plants.

## What's Inside

- Fully responsive design with Tailwind
- Product grid and individual detail pages
- Loading states handled through React Suspense and lazy-loaded components
- Modular, reusable components (loaders, cards, navigation)
- Routing via React Router

## Built With

- React
- React Router
- Tailwind CSS
- Code-splitting with React.lazy and Suspense
- Vite as the build tool

## Why This Exists

I wanted a focused way to demonstrate frontend fundamentals: layout composition, styling decisions, routing structure, and how I organize a React codebase. Everything here is intentionally stripped down to highlight those skills without getting lost in backend logic or complex features.

## Getting Started

```bash
npm install
npm run dev
```

Then open your browser and check it out.

## What's Missing (By Design)

This isn't a production app. There's no API integration, no cart persistence, no search filters none of that. It's a UI sandbox. If I decide to expand it later with filtering, search, or actual data management, this setup gives me a solid foundation to build on.
