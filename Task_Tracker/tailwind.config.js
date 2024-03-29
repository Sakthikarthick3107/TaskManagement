/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        btn : '#24689C',
        light:{
          text : '#000000',
          box:'#FFFFFF',
          bgcolor : '#F0F8FF',
          card : '#F3F1F2'
        },
        dark:{
          text : '#F0F8FF',
          box:'#282828',
          bgcolor : '#1A1A1A',
          card:'#171717'
        }
      }
    },
  },
  plugins: [],
}

