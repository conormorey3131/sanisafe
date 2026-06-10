/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E88E5',
          // text-on-blue background (passes WCAG AA for white text)
          blueDark: '#1565C0',
          green: '#8BC34A',
          // text-on-green background (passes WCAG AA for white text)
          greenDark: '#33691E',
          // Brightened from #0D47A1 for a lighter overall feel (still WCAG-AA, ~7:1, against white)
          navy: '#1257A6',
          yellow: '#F5C518',
        },
        ink: {
          charcoal: '#1F2933',
          slate: '#465A65',
        },
        surface: {
          offwhite: '#F7F9FC',
          grey: '#E5E7EA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        display: '800',
      },
      maxWidth: {
        prose: '70ch',
      },
      boxShadow: {
        card: '0 6px 24px rgba(13, 71, 161, 0.08)',
        cta: '0 10px 30px rgba(139, 195, 74, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
