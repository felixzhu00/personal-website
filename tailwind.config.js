/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        textBase: 'var(--color-text-base)',
        textAccent: 'var(--color-text-accent)',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Replace 'Inter' with your custom font name
      },
      fontWeight: {
        '33': '33',
      },
    },
  },
  plugins: [],
}
