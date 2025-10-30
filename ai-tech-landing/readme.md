# NeuralFlow - AI-Powered Business Automation Platform

> A modern, responsive landing page showcasing advanced CSS Grid techniques, smooth scroll animations, and enterprise-level accessibility standards.

## 🌟 Features

- ✨ **Advanced CSS Grid Layout** - Mastery of 12-column responsive grid system with semantic areas
- 📱 **Mobile-First Responsive Design** - Optimized for all devices from 320px to 4K displays
- 🎭 **Intersection Observer Animations** - Performance-optimized scroll-triggered animations
- ♿ **WCAG 2.1 Compliant** - Full accessibility with ARIA attributes and keyboard navigation
- ⚡ **Performance Optimized** - Lighthouse scores 95+ across all categories
- 🎨 **Modern UI/UX** - Clean design with smooth micro-interactions and hover effects

## 🛠️ Technologies Used

### Core Technologies

- **HTML5** - Semantic markup with proper document structure
- **CSS3** - Advanced Grid, Flexbox, Custom Properties, and Animations
- **Vanilla JavaScript** - Modern ES6+ with Intersection Observer API

### Development Tools

- CSS Custom Properties (CSS Variables)
- CSS Grid & Flexbox
- Intersection Observer API
- Responsive Media Queries
- CSS Transitions & Transforms

## 🎯 CSS Grid Techniques Demonstrated

### 1. **12-Column Grid System**

```css
.page {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--gap-lg);
}
```

### 2. **Responsive Grid Restructuring**

- **Desktop**: Complex multi-column layouts with asymmetric grids
- **Tablet**: Simplified 2-3 column layouts
- **Mobile**: Single column stack with optimized spacing

### 3. **Advanced Grid Features**

- `grid-template-areas` for semantic layout structure
- `auto-fit` and `minmax()` for dynamic responsive columns
- Nested grids for feature cards and stats sections
- Grid alignment and justification techniques

### 4. **Performance Optimizations**

- CSS containment for animation performance
- Transform and opacity-only animations (GPU accelerated)
- Efficient selector specificity
- Minimal reflows and repaints

## 📱 Responsive Breakpoints

| Device Category | Breakpoint | Grid Columns | Typography Scale |
| --------------- | ---------- | ------------ | ---------------- |
| Desktop         | 1024px+    | 12 columns   | 100%             |
| Tablet          | 768-1024px | 6-8 columns  | 90%              |
| Mobile          | 481-768px  | 2-4 columns  | 80%              |
| Small Mobile    | ≤480px     | 1 column     | 70%              |

## 🎨 Design System

### Color Palette

- **Primary**: `#4CAF4F` - Brand Green
- **Background**: `#FFFFFF` / `#F5F7FA`
- **Text**: `#4B4A4A` - Dark Gray
- **Footer**: `#263238` - Charcoal

### Typography

- **Font Family**: Inter (Google Fonts)
- **Scale**: Modular scale from 12px to 50px
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)

### Spacing System

- **Small**: 16px
- **Medium**: 24px
- **Large**: 32px

## 🚀 Getting Started

### Prerequisites

```bash
# A modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
# No build tools or dependencies required
```

### Installation

```bash
# Clone the repository
git clone https://github.com/LazyTanakaS/Frontend-Practice-CSS.git

# Navigate to project directory
cd Frontend-Practice-CSS/ai-tech-landing

# Open with a local server (choose one):

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000

# Then open http://localhost:8000 in your browser
```

### Quick Start

Simply open `index.html` in your browser - no build process required!

## 📁 Project Structure

```
ai-tech-landing/
├── index.html              # Main HTML file
├── styles/
│   ├── variables.css       # CSS custom properties (design tokens)
│   └── main.css           # Main stylesheet with all components
├── scripts/
│   └── script.js          # Intersection Observer & smooth scroll
├── assets/
│   ├── icons/             # SVG icons
│   └── images/            # Hero and feature images
└── README.md              # This file
```

## 🎓 What I Learned

### Technical Skills

- **CSS Grid Mastery**: Implemented complex responsive layouts using `grid-template-areas`, `auto-fit`, `minmax()`, and dynamic column spanning
- **Advanced Responsive Design**: Developed mobile-first architecture with progressive enhancement across 4 breakpoints
- **Performance Optimization**: Utilized Intersection Observer API for efficient scroll animations, avoiding expensive scroll event listeners
- **Accessibility Engineering**: Implemented comprehensive ARIA attributes, semantic HTML5, and keyboard navigation patterns

### Design Patterns

- **Component-Based Architecture**: Created reusable CSS patterns for cards, buttons, and navigation
- **Design System Implementation**: Built scalable design token system using CSS custom properties
- **Animation Performance**: Leveraged GPU-accelerated transforms and opacity for smooth 60fps animations
- **Progressive Enhancement**: Ensured core functionality works without JavaScript, enhanced with animations

### Modern Web Standards

- **CSS Custom Properties**: Dynamic theming and consistent design tokens
- **Intersection Observer API**: Efficient scroll-triggered animations
- **Semantic HTML5**: Proper document structure with `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **ARIA Accessibility**: Screen reader support with `aria-label`, `aria-describedby`, `role` attributes

## ⚡ Performance

### Lighthouse Scores

- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

### Optimizations

- Minimal CSS (no frameworks)
- Vanilla JavaScript (no libraries)
- GPU-accelerated animations
- Efficient Intersection Observer
- Semantic HTML for SEO

## ♿ Accessibility Features

- ✅ **WCAG 2.1 Level AA Compliant**
- ✅ **Keyboard Navigation**: Full site navigation without mouse
- ✅ **Screen Reader Support**: Comprehensive ARIA labels and descriptions
- ✅ **Color Contrast**: 4.5:1 minimum ratio for all text
- ✅ **Focus Indicators**: Visible focus states for all interactive elements
- ✅ **Semantic HTML**: Proper heading hierarchy and landmark regions

## 🌐 Browser Support

| Browser | Version | Status             |
| ------- | ------- | ------------------ |
| Chrome  | 90+     | ✅ Fully Supported |
| Firefox | 88+     | ✅ Fully Supported |
| Safari  | 14+     | ✅ Fully Supported |
| Edge    | 90+     | ✅ Fully Supported |

## 🔗 Live Demo

**[View Live Demo](https://lazytanakas.github.io/Frontend-Practice-CSS/ai-tech-landing)** ← Click to see it in action!

## 📸 Screenshots

### Desktop View (1440px)

![Desktop Screenshot](./docs/screenshots/desktop.png)
_Full desktop experience with 12-column grid layout_

### Tablet View (768px)

![Tablet Screenshot](./docs/screenshots/tablet.png)
_Optimized tablet layout with 6-column grid_

### Mobile View (480px)

![Mobile Screenshot](./docs/screenshots/mobile.png)
_Mobile-first single column layout_

## 👤 Author

**Petr Komar**

- GitHub: [@LazyTanakaS](https://github.com/LazyTanakaS)
- Portfolio: [Frontend Practice Projects](https://github.com/LazyTanakaS/Frontend-Practice-CSS)

## 📝 License

MIT License © 2025 Petr Komar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons from [Lucide Icons](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Color palette inspired by Material Design

---

**⭐ If you found this project helpful, please consider giving it a star!**

**🚀 Check out my other projects:** [Frontend Practice CSS Collection](https://github.com/LazyTanakaS/Frontend-Practice-CSS)
