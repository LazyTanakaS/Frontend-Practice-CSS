# Frontend Practice CSS

A collection of mini-projects built to master core CSS layout and animation techniques. Each project focuses on specific concepts: Flexbox, Grid, and Keyframe animations.

## 📚 Projects

| Project          | Live Demo                                                                         | Folder              | Focus                      |
| ---------------- | --------------------------------------------------------------------------------- | ------------------- | -------------------------- |
| Flexbox Cards    | [View Demo](https://lazytanakas.github.io/Frontend-Practice-CSS/flexbox-cards)    | `/flexbox-cards`    | Flexbox Layout             |
| Grid Landing     | [View Demo](https://lazytanakas.github.io/Frontend-Practice-CSS/grid-landing)     | `/grid-landing`     | CSS Grid + Theme Switcher  |
| Loader Animation | [View Demo](https://lazytanakas.github.io/Frontend-Practice-CSS/loader-animation) | `/loader-animation` | CSS Keyframes              |
| AI Tech Landing  | [View Demo](https://lazytanakas.github.io/Frontend-Practice-CSS/ai-tech-landing)  | `/ai-tech-landing`  | Advanced Grid + Animations |

## 🎯 Project Descriptions

### Flexbox Cards

Responsive card layout using `display: flex`. Perfect for mastering flexbox alignment, spacing, and responsive breakpoints.

**Technologies**: HTML5, CSS3 (Flexbox)

---

### Grid Landing (Creativeminds Blog)

Responsive landing page built with CSS Grid and media queries. Features a dark/light theme switcher with localStorage persistence and smooth scroll animations.

**Technologies**: HTML5, CSS3 (Grid), Vanilla JavaScript

**Key Features**:

- ✨ Dark/Light theme switcher
- 🎭 Intersection Observer scroll animations
- ♿ WCAG accessible
- 📱 Fully responsive

---

### Loader Animation

Pure CSS loading animation with `@keyframes`. Demonstrates advanced animation techniques without JavaScript.

**Technologies**: HTML5, CSS3 (Keyframes, Transforms)

---

### AI Tech Landing (NeuralFlow)

Modern SaaS landing page showcasing advanced CSS Grid techniques, Intersection Observer animations, and WCAG accessibility compliance. Built with a mobile-first approach.

**Technologies**: HTML5, CSS3 (Advanced Grid), Vanilla JavaScript, Intersection Observer API

**Key Features**:

- ✨ 12-column responsive grid system
- 📱 Mobile-first responsive design (4 breakpoints)
- 🎭 Intersection Observer scroll animations
- ♿ WCAG 2.1 Level AA compliant
- ⚡ Lighthouse scores 95+
- 🎨 Modern UI with micro-interactions

Each folder has its own README with detailed requirements and screenshots.

## 🛠️ Technologies & Skills

### Core Technologies

- **HTML5**: Semantic markup, accessibility
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript**: ES6+, Intersection Observer, LocalStorage

### Design Principles

- Responsive layouts with Flexbox and Grid
- Adaptive design via media queries
- Smooth transitions and animations
- Accessibility and best practices in CSS
- Mobile-first approach

### Development Workflow

- Git workflow: feature branches, commits, PRs
- Deployment on GitHub Pages
- Cross-browser testing
- Performance optimization

## 🚀 Quick Start

### Clone the repository

```bash
git clone https://github.com/LazyTanakaS/Frontend-Practice-CSS.git
cd Frontend-Practice-CSS
```

### Open any project

```bash
# Navigate to project folder
cd flexbox-cards  # or grid-landing, loader-animation, ai-tech-landing

# Option 1: Open directly in browser
open index.html

# Option 2: Use VS Code Live Server
code .
# Then right-click index.html → "Open with Live Server"

# Option 3: Use local server
python -m http.server 8000
# or
npx serve .
```

### HTML

- ✅ Single `h1` element exists on the page to define the main title
- ✅ Card titles use `h2`/`h3` for proper heading hierarchy
- ✅ Semantic structure: each card is marked up as an `article` (or list item)
- ✅ Images have proper `alt` text — descriptive for portraits, empty for decorative ones
- ✅ Images have fixed dimensions or `aspect-ratio` to prevent layout shifts (CLS)

### CSS

- ✅ Smooth hover effect with slight scale (`1.03–1.05`) and soft shadow, without moving other elements
- ✅ Visible focus state (`:focus-visible`) for keyboard navigation
- ✅ Responsive layout: no horizontal scroll or broken text on small screens (320–360 px)

### Performance

- ✅ Compressed images (WebP/AVIF) for faster load and better performance
- ✅ Contrast meets accessibility guidelines (WCAG ≥ 4.5:1)
- ✅ Lighthouse scores ≥ 90 for Accessibility and Best Practices

All screenshots and Lighthouse reports are stored under `/docs/screenshots`.

## 🎓 Learning Outcomes

Through these projects, I've gained expertise in:

- **CSS Grid & Flexbox**: From basic layouts to complex 12-column responsive systems
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Animations**: CSS keyframes and Intersection Observer API
- **Accessibility**: WCAG 2.1 compliance with ARIA attributes
- **Performance**: Lighthouse optimization and best practices
- **JavaScript**: Modern ES6+, DOM manipulation, and Web APIs
- **Git Workflow**: Version control and GitHub Pages deployment

## 📝 License

MIT License © 2025 Petr Komar

## 👤 Author

**Petr Komar**

- GitHub: [@LazyTanakaS](https://github.com/LazyTanakaS)
- Portfolio: [Frontend Practice Projects](https://github.com/LazyTanakaS/Frontend-Practice-CSS)

---

⭐ **If you found these projects helpful, please consider giving this repository a star!**
