# Loader Animation

A pure CSS loading animation using `@keyframes`.

## Goal

Explore CSS animations and motion design without JavaScript.

## Requirements

- Use `@keyframes`, `animation`, and `transform` (rotate, scale, translate, etc.)
- Any design (bouncing dots, spinning circle, pulsing bars, ring, etc.)
- Infinite loop (`animation-iteration-count: infinite`)
- Respect user’s `prefers-reduced-motion` — pause or slow animation if enabled
- Center the loader both vertically and horizontally

## Design Guidelines

- Minimal dark background, light loader
- Smooth animation (no jank)
- No JavaScript

## Accessibility & Quality

- Responsive on all screen sizes
- No layout shifts or overflow
- FPS stable (~60 fps ideal)
- Lighthouse Best Practices ≥ 90

## Deliverables

- `index.html`, `styles/main.css`
- Screenshot or GIF → `docs/screenshots/loader-animation/`
- Optional Live Demo: [View Demo](https://lazyTanakaS.github.io/Frontend-Practice-CSS/loader-animation)
