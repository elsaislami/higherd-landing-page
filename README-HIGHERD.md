# Higherd Landing - React + Vite

This is the Higherd landing page built with React, Vite, Tailwind CSS, React Router, and i18next (EN/DE).

## Stack
- Vite + React
- Tailwind CSS
- React Router
- i18next + react-i18next + browser language detector

## Scripts
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build

## Setup
1. Install deps
   - `npm install`
2. Run dev server
   - `npm run dev`

## Structure
- `src/components/ui` — small reusable UI components (Button, Input, Box)
- `src/components/layout` — Header (with language select) and Footer
- `src/pages` — route pages
- `src/i18n` — language files and i18n init

## i18n
Languages supported: English (en) and German (de). Your last selection is saved in localStorage.
