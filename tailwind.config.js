const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-serif)", ...fontFamily.serif],
      },
      width: {
        "45/100": "45%",
        "55/100": "55%",
      },
      height: {
        104: "32rem",
      },
      margin: {
        screen: "calc(50% - 50vw)",
      },
    },
  },
  variants: {
    flexDirection: ["responsive", "even"],
    scale: ["group-hover"],
    extend: {},
  },
  plugins: [],
};
