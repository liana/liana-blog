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
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
