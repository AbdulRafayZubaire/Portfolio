/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: "#000000",
      white: '#fef9f8',
      blue: '#5bccf6',
      paleGreen: '#61892F', 
      green: '#86C232', 
      brightYellow: '#FAED26', 
      paleYellow: '#D6CE15', 
      dark: '#222629',
      grey_1: '#E5E4E2', 
      grey_2: '#D3D3D3', 
      grey_3: '#C0C0C0', 
      darkGrey: '#', 
      darkGrey: '#474B4F',
      lightYellow: '#fff44f', 
    },
    extend: {
      fontFamily:{
        Sonsie:["Sonsie One"],
        Roboto:["Roboto Slab"]
      }
    },
  },
  plugins: [],
}
