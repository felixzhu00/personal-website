/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1C1E1A', // Replace with your desired primary color
        secondary: '#31352E', // Replace with your desired secondary color
        accent: '#EBEBE8'
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
