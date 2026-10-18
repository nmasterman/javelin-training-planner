# Flight Plan

Flight Plan is a mobile-friendly javelin training planner for a full 48-week season.

Open the live app at:

<https://nmasterman.github.io/javelin-training-planner/>

## Features

- Daily training sessions with a Monday-to-Sunday schedule
- 48-week season outlook with four-week training blocks
- Base-building progression from high-volume medicine-ball throws into javelin work
- Workbook-based lifting prescriptions with phase-appropriate plans across the season
- Training completion tracking
- Exercise weight inputs with previous-weight history
- Session notes and coaching cues
- Separate Coaching lens view
- Black-and-gold responsive design for phone and desktop
- Installable PWA with offline caching after the first visit

## Using It On Your Phone

1. Open the live app link in your phone browser.
2. Use **Add to Home Screen** or **Install app** from the browser menu.
3. Open Flight Plan from your home screen like a regular app.

## GitHub Pages Deployment

The app is deployed from the `main` branch at the repository root:

<https://github.com/nmasterman/javelin-training-planner>

GitHub Pages is configured under **Settings -> Pages -> Deploy from a branch**.

## Data Storage

Weights, notes, and completed sessions are saved in browser `localStorage` on each device. They currently do not sync between your computer and phone. Clearing browser data can remove locally saved training history.
