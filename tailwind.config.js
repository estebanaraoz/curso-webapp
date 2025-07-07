/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        secondary: 'var(--color-secondary)',
      },
      borderRadius: { card: '0.75rem' },
      boxShadow: { card: '0 2px 8px rgba(0,0,0,0.08)' },
      spacing: { card: '1.5rem' },
    },
  },
  plugins: [],
}
