/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'paradise-blue': '#0891B2',
        'paradise-sand': '#F8D8A9',
        'paradise-coral': '#FF6B6B',
        'paradise-green': '#4CAF50',
        'paradise-sunset': '#FF8C42',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
} 