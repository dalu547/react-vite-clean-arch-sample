/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          fg: 'hsl(var(--brand-foreground))'
        }
      },
      borderRadius: {
        xl: '1rem'
      }
    },
  },
  plugins: [],
}
