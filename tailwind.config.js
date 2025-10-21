import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s infinite',
      },
    },
  },
})