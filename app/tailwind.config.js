/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        headerLine: "0 0 20px 1px hsla(160, 100%, 75%, 0.5)",
      },
      gridTemplateColumns: {
        18: "repeat(18, 5rem)",
      },
      gridTemplateRows: {
        9: "repeat(9, 5rem)",
      },

      gridRowStart: {
        8: "8",
        9: "9",
      },
      gridRowEnd: {
        10: "10",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
        18: "18",
      },
    },
  },
  plugins: [],
};
