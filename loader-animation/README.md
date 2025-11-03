# CSS Loading Animations

![CSS Animations](https://img.shields.io/badge/CSS3-Animations-1572B6?logo=css3&logoColor=white)
![Pure CSS](https://img.shields.io/badge/Pure_CSS-No_JS-success)
![Keyframes](https://img.shields.io/badge/CSS-Keyframes-orange)

> A collection of 6 beautiful, pure CSS loading animations with no JavaScript required. Perfect for learning CSS `@keyframes` and animation properties.

## 🎨 Live Demo

**[View Live Demo](https://lazytanakas.github.io/Frontend-Practice-CSS/loader-animation)** ← Click to see animations in action!

---

## ✨ Features

- 🎭 **6 Different Loaders** - Spinner, Bouncing Dots, Progress Bar, Pulse, Skeleton, Ring
- 🚀 **Pure CSS** - No JavaScript, only CSS `@keyframes`
- 📱 **Responsive** - Works on all screen sizes
- ⚡ **Performance Optimized** - GPU-accelerated transforms
- 🎨 **Customizable** - Easy to modify colors and timing
- 📚 **Educational** - Well-commented code for learning

---

## 🎯 Animations Included

### 1. 🔄 Spinner

Classic rotating circle loader

- **Technique**: `transform: rotate()`
- **Timing**: `linear` for constant speed
- **Use case**: General loading indicator

### 2. ⚫⚫⚫ Bouncing Dots

Three dots bouncing in sequence

- **Technique**: `transform: translateY()` + `animation-delay`
- **Timing**: `ease-in-out` for smooth bounce
- **Use case**: Chat applications, messaging

### 3. ▓▓▓░░░ Progress Bar

Animated progress fill

- **Technique**: `width` animation
- **Timing**: `ease` for natural fill
- **Use case**: File uploads, downloads

### 4. 🔵 Pulse

Pulsating circle with opacity

- **Technique**: `transform: scale()` + `opacity`
- **Timing**: `ease-in-out` for breathing effect
- **Use case**: Recording indicator, live status

### 5. ▭▭▭ Skeleton Screen

Content placeholder shimmer

- **Technique**: `opacity` pulse
- **Timing**: `ease-in-out` for smooth fade
- **Use case**: Content loading (like Facebook/YouTube)

### 6. ⭕⭕⭕⭕ Ring

Multiple rotating rings

- **Technique**: `transform: rotate()` + `animation-delay` + nested rings
- **Timing**: `linear` with staggered delays
- **Use case**: Complex loading operations

---

## 🛠️ Technologies & Concepts

### CSS Properties Used

- `@keyframes` - Define animation sequences
- `animation` - Apply animations to elements
- `transform` - Rotate, translate, scale
- `opacity` - Fade effects
- `animation-delay` - Stagger animations

### Key Concepts Demonstrated

#### 1. Transform vs Width/Height

```css
/* ✅ GOOD - GPU accelerated */
transform: translateX(100px);

/* ⚠️ SLOWER - CPU processed */
width: 100px;
```

#### 2. Timing Functions

```css
linear      /* Constant speed */
ease        /* Fast start, slow end */
ease-in     /* Slow start, fast end */
ease-out    /* Fast start, slow end */
ease-in-out /* Slow-fast-slow (S-curve) */
```

#### 3. Animation Delays for Sequences

```css
.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.1s;
}
.dot:nth-child(3) {
  animation-delay: 0.2s;
}
```

---

## 📁 Project Structure

```
loader-animation/
├── index.html          # HTML structure with 6 loader cards
├── styles/
│   ├── variables.css   # CSS custom properties (design system)
│   └── main.css       # All animations and styles
└── README.md          # This file
```

---

## 🚀 Getting Started

### Quick Start

```bash
# Clone the repository
git clone https://github.com/LazyTanakaS/Frontend-Practice-CSS.git

# Navigate to loader animation folder
cd Frontend-Practice-CSS/loader-animation

# Open in browser
open index.html
```

No build process needed - pure HTML & CSS!

---

## 🎓 Learning Path

This project teaches:

### 1. **CSS Keyframes Basics**

```css
@keyframes animation-name {
  from {
    /* start state */
  }
  to {
    /* end state */
  }
}

/* OR with percentages */
@keyframes animation-name {
  0% {
    /* start */
  }
  50% {
    /* middle */
  }
  100% {
    /* end */
  }
}
```

### 2. **Animation Properties**

```css
.element {
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  /* Shorthand */
  animation: spin 1s linear infinite;
}
```

### 3. **Transform Functions**

- `rotate(360deg)` - Rotation
- `translateY(-20px)` - Vertical movement
- `scale(1.5)` - Size change

### 4. **Performance Optimization**

- Use `transform` instead of `left/top`
- Use `opacity` instead of `display`
- Prefer GPU-accelerated properties

---

## 🎨 Customization Guide

### Change Colors

Edit `variables.css`:

```css
:root {
  --color-accent: #3b82f6; /* Blue - change to your brand color */
  --color-accent-secondary: #8b5cf6; /* Purple - secondary color */
}
```

### Adjust Speed

Modify animation duration in `main.css`:

```css
/* Faster */
animation: spin 0.5s linear infinite;

/* Slower */
animation: spin 2s linear infinite;
```

### Change Size

Modify loader dimensions:

```css
.spinner {
  width: 100px; /* Increase for larger loader */
  height: 100px;
}
```

---

## 💡 Use Cases

| Loader   | Best For           | Real-World Examples      |
| -------- | ------------------ | ------------------------ |
| Spinner  | General loading    | Page load, API calls     |
| Dots     | Short waits        | Chat typing indicator    |
| Progress | Long operations    | File upload/download     |
| Pulse    | Live status        | Recording, streaming     |
| Skeleton | Content loading    | Facebook, LinkedIn feeds |
| Ring     | Complex operations | Data processing          |

---

## 🔗 Related Projects

**Other projects in this collection:**

- [Flexbox Cards](../flexbox-cards) - Master Flexbox layouts
- [Grid Landing](../grid-landing) - Advanced CSS Grid
- [AI Tech Landing](../ai-tech-landing) - Modern SaaS landing page

---

## 📚 Resources

### CSS Animation Guides

- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS-Tricks: Animation Guide](https://css-tricks.com/almanac/properties/a/animation/)
- [Web.dev: Animations Performance](https://web.dev/animations/)

### Timing Functions Visualizer

- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Easing Functions](https://easings.net/)

---

## 👤 Author

**Petr Komar**

- GitHub: [@LazyTanakaS](https://github.com/LazyTanakaS)
- Portfolio: [Frontend Practice CSS](https://github.com/LazyTanakaS/Frontend-Practice-CSS)

---
