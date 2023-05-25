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
        'profile':  "0px 0px 10px -1px #dbd0db"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui : { themes : ["white"]}
}

