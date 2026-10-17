# Dussehra Utsav 2026

A responsive Dussehra/Vijayadashami festival landing page built with React, Bootstrap 5, Tailwind CSS 3, and jQuery.

## Features
- Responsive navigation and festive hero section
- Countdown to October 20, 2026 (verify local calendar/date before an actual event)
- Dussehra story and values
- Sample event schedule
- Gallery category filters using React state
- jQuery smooth-scroll and reveal effects
- Contact form demo (no backend; does not send or save messages)
- Responsive Bootstrap grid + Tailwind utility classes + custom CSS

## Run in VS Code / Windows
Install Node.js first. Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## Technology use
- React: components, rendering, state, and form feedback
- Bootstrap: responsive grid, navbar, form controls, and layout
- Tailwind CSS: utility classes and custom theme colors
- jQuery: smooth scrolling and card reveal effects

Gallery images use remote Unsplash URLs and need an internet connection. Replace them with locally licensed images if publishing publicly.

## Animation features
- Canvas fireworks in the hero section
- Floating sparkles and glowing diya effects
- Animated gold headline, rotating orbit rings, and hero entrance
- Live day/hour/minute/second countdown
- jQuery scroll reveal and smooth scrolling
- Staggered event cards and gallery entry animations
- Hover zoom, shimmer buttons, floating back-to-top button, and submit sparkle burst
- Respects the user's reduced-motion accessibility setting

## Cracker sound
- Use the **Play Cracker Sound** button in the hero section to turn on generated firecracker-style pops.
- Click **Sound On** to stop the sound.
- Sound is generated using the browser Web Audio API, so no external sound file is needed.
- Browsers require a user click before audio can start. Keep the volume low and use this effect considerately.
