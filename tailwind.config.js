/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
      },
      fontSize: {
        'hero': ['2.25rem', { lineHeight: '1.15', fontWeight: '700' }], // ~36px
        'hero-md': ['2.5rem', { lineHeight: '1.15', fontWeight: '700' }],
      },
      boxShadow: {
        'card': '0 4px 16px -2px rgba(0,0,0,0.08), 0 2px 6px -1px rgba(0,0,0,0.05)',
      },
      container: {
        center: true,
        padding: '6rem',
        screens: {
          lg: '1024px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial'],
      },
    },
  },
  plugins: [],
}