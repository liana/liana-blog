/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#3f5762',        // Dark blue-gray background
          'bg-dark': '#2d3f47', // Darker blue-gray
          cream: '#F9F6DE',     // Cream/off-white primary
          secondary: '#fcf8f2', // Light beige
          cyan: '#0693e3',      // Vivid cyan blue accent
          purple: '#9b51e0',    // Vivid purple accent
          light: '#f7fafc',     // Very light gray foreground
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e5e7eb', // gray-200 for body text
            h1: {
              color: '#ffffff', // white for headings
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            h4: {
              color: '#ffffff',
            },
            h5: {
              color: '#ffffff',
            },
            h6: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            a: {
              color: '#ffffff',
              '&:hover': {
                color: '#d1d5db', // gray-300
              },
            },
            code: {
              color: '#e5e7eb',
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
