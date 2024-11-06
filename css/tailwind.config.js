/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../layouts/partials/*.{html,js}','../../layouts/shortcodes/*.{html,js}','../../layouts/_default/*.{html,js}'],
  theme: {
    screens: {
      m: '800px',
      d: { max: '700px' },
    },
  },
  plugins: [require('tailwindcss-mixins')],
};
