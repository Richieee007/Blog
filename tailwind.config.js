/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },  
      boxShadow: {
        'custom-black': '-7px 7px 0px #000000',
        'custom-blue': '-7px 7px 0px #2986cc',
        'custom-blue2': '-5px 5px 0px #2986cc',
      },
      textColor:{
        'turk-blue': '#2986cc',
      },
      backgroundColor:{
        'blueback': '#2986cc',
      }
    },
  },
  plugins: [],
};
