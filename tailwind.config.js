/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          'bg-alt': '#FAFAF9',
          green: '#1B4332',
          'green-light': '#2D6A4F',
          cream: '#1B4332',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#4A4A4A',
            h1: { color: '#1A1A1A' },
            h2: { color: '#1A1A1A' },
            h3: { color: '#1A1A1A' },
            h4: { color: '#1A1A1A' },
            h5: { color: '#1A1A1A' },
            h6: { color: '#1A1A1A' },
            strong: { color: '#1A1A1A' },
            a: {
              color: '#1B4332',
              '&:hover': { color: '#2D6A4F' },
            },
            code: {
              color: '#4A4A4A',
              backgroundColor: '#F5F5F4',
              borderRadius: '0.25rem',
              padding: '0.15rem 0.4rem',
            },
            blockquote: {
              borderLeftColor: '#1B4332',
              color: '#1A1A1A',
              fontStyle: 'normal',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
