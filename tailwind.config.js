/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Natural Greens
        moss: 'rgb(var(--color-moss) / <alpha-value>)',
        sage: 'rgb(var(--color-sage) / <alpha-value>)',
        olive: 'rgb(var(--color-olive) / <alpha-value>)',
        forest: 'rgb(var(--color-forest) / <alpha-value>)',
        mint: 'rgb(var(--color-mint) / <alpha-value>)',
        
        // Earth Tones
        terracotta: 'rgb(var(--color-terracotta) / <alpha-value>)',
        sand: 'rgb(var(--color-sand) / <alpha-value>)',
        clay: 'rgb(var(--color-clay) / <alpha-value>)',
        soil: 'rgb(var(--color-soil) / <alpha-value>)',
        stone: 'rgb(var(--color-stone) / <alpha-value>)',
        
        // Accents
        sunflower: 'rgb(var(--color-sunflower) / <alpha-value>)',
        tomato: 'rgb(var(--color-tomato) / <alpha-value>)',
        sky: 'rgb(var(--color-sky) / <alpha-value>)',
      },
      fontFamily: {
        sans: 'var(--font-primary)',
        'serif': 'var(--font-heading)',
        'display': 'var(--font-heading)',
      },
      animation: {
        'grow': 'var(--animate-grow)',
        'sway': 'var(--animate-sway)',
        'float': 'var(--animate-float)',
        'pulse-slow': 'var(--animate-pulse)',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 20px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
