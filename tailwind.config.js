/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'white-sm': '0 0px 4px rgba(255, 255, 255, 0.4)',
        'white-md': '0 4px 4px rgba(255, 255, 255, 0.15)',
        'white-lg': '0 10px 15px rgba(255, 255, 255, 0.5)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        customGray: '#d3d3d3',
        customBlue: '#2b4bfe',
        customYellow: '#ffff00',
        customGreen: '#8cf12b',
        customOrange:'#ffa500'
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}

