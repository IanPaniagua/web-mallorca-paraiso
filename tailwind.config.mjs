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
        sans: ['Nunito', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#334155',
            '--tw-prose-headings': '#0066FF',
            h2: {
              backgroundImage: 'linear-gradient(to right, #0066FF, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Cormorant Garamond, serif',
            },
            p: {
              fontFamily: 'Nunito, sans-serif',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 