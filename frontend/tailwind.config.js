const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./Scenes/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      purple: colors.violet,
      pink: colors.pink,
      primary: {
        light: `#F9FAFB`,
        dark: `#1E1E21`,
        purple: "#9260BE",
      },
      dark: {
        background: "#151517",
      },
      socials: {
        discord: "#7289d9",
        linkedin: "#0077B5",
        twitter: "#00ACEE",
        github: "#24292e",
        devpost: "#003c51",
      },
    },
    fontFamily: {
      primary: ["Kanit"],
      secondary: ["Montserrat"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
