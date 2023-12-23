/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('flowbite/plugin'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '1320px',
          maxWidth: 'calc(100% - 48px)',
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      });
    })
  ]
};
