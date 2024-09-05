module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Paths to purge unused styles
  darkMode: 'media', // or 'class' for toggling dark mode manually
  theme: {
    extend: {
      // You can extend the default Tailwind CSS theme here
    },
  },
  variants: {
    extend: {
      // Extend variants for utilities, e.g., background color, border, etc.
      backgroundColor: ['hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}
