/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        blue1: "#141b2d",
        blue2: "#23293c",
        blue3: "#6870fa",
        gray1: "#9CA3AF",
        gray2: "#666666",
        gray3: "#2d3545",
        green1: "#4cceac",
        red1: "#db4f4a",
        lightGray: "#f0eeef",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }), // default: 'standard'
  ],
};
