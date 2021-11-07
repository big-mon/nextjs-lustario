module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: [
        "'Noto Serif JP'",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
    },
    extend: {
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
