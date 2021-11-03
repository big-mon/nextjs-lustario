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
        "55/100": "55%",
      },
    },
  },
  variants: {
    flexDirection: ["even"],
    scale: ["group-hover"],
    extend: {},
  },
  plugins: [],
};
