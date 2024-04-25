/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kameron: ["Kameron", "serif"],
      },
      colors: {
        primary: "#eb0028",
        secondary: "#5e5e5e",
        black: "#0e0e0e",
        gradient: {
          "linear-gradient":
            "linear-gradient(to bottom, #fde9ec, #faf7f8, #fde6e8)",
        },
      },
    },
  },
  plugins: [],
};
