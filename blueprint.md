# Lotto Number Generator Blueprint

## Project Overview
A modern, framework-less web application that generates lotto numbers (1-45) with a beautiful UI, history tracking, and theme support (Dark/Light mode).

## Features
- **Lotto Number Generation:** Generates 6 unique numbers between 1 and 45.
- **Web Components:** Uses a custom `<lotto-display>` element for rendering numbers.
- **Animations:** Smooth flip animations when numbers are generated.
- **History Tracking:** Stores the last 10 generated sets of numbers.
- **Theme Support:** Toggle between Light and Dark modes with persistent storage.
- **Responsive Design:** Works on all screen sizes.

## Design
- **Typography:** Poppins font for a clean, modern look.
- **Color Palette:**
  - **Light Mode:** Soft blue/grey gradients, clean white containers.
  - **Dark Mode:** Deep grey/black gradients, elevated cards with subtle borders.
- **Interactive Elements:**
  - Glassmorphism effects (backdrop-filter).
  - Vibrant gradients for lotto balls.
  - Hover effects on buttons and theme toggle.

## Implementation Details
- **HTML:** Standard HTML5 with custom elements.
- **CSS:** Modern CSS using variables for theming, flexbox for layout, and animations.
- **JavaScript:** ES6+ modules, Web Components API, LocalStorage for theme persistence.

## Current Progress (Latest Changes)
- Implemented Dark/Light mode toggle.
- Added CSS variables to manage theme-specific styles.
- Integrated `localStorage` to save user theme preference.
- Updated UI with a fixed theme toggle button.
