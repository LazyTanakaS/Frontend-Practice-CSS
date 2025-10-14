# Frontend Practice — CSS

A collection of **three mini-projects** built to master core CSS layout and animation techniques.  
Each project focuses on a specific concept: Flexbox, Grid, and Keyframe animations.

---

## Live Demos

| Project          | Live Demo                                                                         | Folder              |
| :--------------- | :-------------------------------------------------------------------------------- | :------------------ |
| Flexbox Cards    | [View Demo](https://lazyTanakaS.github.io/Frontend-Practice-CSS/flexbox-cards)    | `/flexbox-cards`    |
| Grid Landing     | [View Demo](https://lazyTanakaS.github.io/Frontend-Practice-CSS/grid-landing)     | `/grid-landing`     |
| Loader Animation | [View Demo](https://lazyTanakaS.github.io/Frontend-Practice-CSS/loader-animation) | `/loader-animation` |

---

## Projects

1. **Flexbox Cards** — responsive card layout using `display:flex`.
2. **Grid Landing** — responsive landing page built with CSS Grid + media queries.
3. **Loader Animation** — pure CSS loading animation with `@keyframes`.

Each folder has its own README with detailed requirements and screenshots.

---

## Learning Goals

- Responsive layouts with Flexbox and Grid
- Adaptive design via media queries
- Smooth transitions and animations
- Accessibility and best practices in CSS
- Git workflow: feature branches, commits, PRs, deployment on GitHub Pages

---

## How to Run Locally

1. Clone the repo → `git clone https://github.com/LazyTanakaS/Frontend-Practice-CSS.git`
2. Open any project folder in VS Code
3. Launch with Live Server → **Open with Live Server**

---

## Flexbox Cards — Quality Checklist

- [x] **Single `h1` element** exists on the page to define the main title.
- [x] **Card titles use `h2`/`h3`** for proper heading hierarchy.
- [x] **Semantic structure:** each card is marked up as an `article` (or list item).
- [x] **Images have proper `alt` text** — descriptive for portraits, empty for decorative ones.
- [x] **Images have fixed dimensions or `aspect-ratio`** to prevent layout shifts (CLS).
- [x] **Smooth hover effect** with slight scale (`1.03–1.05`) and soft shadow, without moving other elements.
- [x] **Visible focus state (`:focus-visible`)** for keyboard navigation.
- [x] **Responsive layout:** no horizontal scroll or broken text on small screens (320–360 px).
- [x] **Compressed images (WebP/AVIF)** for faster load and better performance.
- [x] **Contrast meets accessibility guidelines** (WCAG ≥ 4.5:1).
- [x] **Lighthouse scores ≥ 90** for Accessibility and Best Practices.

## Screenshots

All screenshots and Lighthouse reports are stored under `/docs/screenshots`.

---

## License

MIT License © 2025 Petr Komar
