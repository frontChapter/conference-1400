module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "DEFAULT": "1rem",
        "sm": "0.5rem",
        "lg": "1rem",
        "xl": "2rem",
        "2xl": "2.5rem",
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: '250ms'
      },
      colors: {
        "primary": "#ff802e",
        "primary-hover": "#e74e00",
        "primary-active": "#b43d00",
        "secondary": "#0CC455",
        "secondary-hover": "#039E41",
        "secondary-active": "#039E41",
      },
      fontFamily: {
        sans: [
          "Vazir",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
        heading: ["Lalezar", "Vazir", "cursive"],
      },
      fontSize: {
        "2rem": "2rem",
      },
    },
  },
  plugins: [],
};
