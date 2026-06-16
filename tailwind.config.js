/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#FFFFFF',
        'primary-text': '#0F172A',
        'secondary-text': '#334155',
        muted: '#64748B',
        accent: '#1D4E89', // Pure Deep Blue
        'accent-green': '#448342', // Natural Green
        'accent-gold': '#D99B26', // Golden Yellow
      },
    },
  },
  plugins: [],
}
