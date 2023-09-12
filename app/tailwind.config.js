/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        headerLine1: "0 0 20px 1px #ffff0077",
        headerLine2: "0 0 20px 1px #ff000077",
        headerLine3: "0 0 20px 1px #4040ff77",
        headerLine4: "0 0 20px 1px #0080ff77",
        headerLine5: "0 0 20px 1px #00ff0077",
        headerLine6: "0 0 20px 1px #8cbe0077",
        headerLine7: "0 0 20px 1px #ff980077",
        headerLine8: "0 0 20px 1px #00ffff77",
        headerLine9: "0 0 20px 1px #40ffc077",
      },
      gridTemplateColumns: {
        18: "repeat(18, 5rem)",
        "header-element-icon-info": "8rem 1fr",
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
