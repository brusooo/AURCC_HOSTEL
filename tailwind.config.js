/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      width : {
        "270" : "270px"
      },
      colors: {
        'crimson': '#fefae0'
      },
      boxShadow: {
        'drawer': '200px 0 60px 30px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui : { themes : ["white"]}
}

