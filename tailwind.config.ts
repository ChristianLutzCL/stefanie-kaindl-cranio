import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

/**
 * Farbwelt „Editorial Olive" (siehe research/design-brief-editorial-olive.md).
 *
 * `paper` / `ink` / `olive` sind die neuen Namen für das Redesign.
 * `cream` / `sage` / `taupe` / `therapeutic` bleiben bestehen, sind aber auf
 * dieselben Werte umgestimmt, damit die noch nicht umgebauten Unterseiten im
 * neuen Ton erscheinen, ohne dass dort jede Klasse angepasst werden muss.
 */
const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f3f0e9",
          soft: "#f8f6f1",
          deep: "#eae6db",
          dark: "#ded9cb",
        },
        ink: {
          DEFAULT: "#1d1c17",
          900: "#1d1c17",
          800: "#3a3830",
          700: "#57554d",
          600: "#75736a",
          500: "#8f8d84",
          400: "#a9a69a",
          100: "#efece4",
        },
        olive: {
          DEFAULT: "#616949",
          50: "#f4f5ef",
          100: "#e5e7db",
          200: "#cfd3bb",
          300: "#b0b697",
          400: "#8d9375",
          500: "#77805c",
          600: "#616949",
          700: "#4d5438",
          800: "#3f4530",
          900: "#333827",
        },

        /* --- Legacy-Namen, neu eingefärbt --- */
        cream: {
          50: "#f8f6f1",
          100: "#f3f0e9",
          200: "#eae6db",
          300: "#ded9cb",
          400: "#cfc8b6",
          500: "#bdb5a1",
          600: "#a49b86",
          700: "#7f7767",
          800: "#5b554a",
          900: "#3a362f",
          950: "#1d1c17",
        },
        sage: {
          50: "#f4f5ef",
          100: "#e5e7db",
          200: "#d2d5c1",
          300: "#b4b8a0",
          400: "#949a7e",
          500: "#77805c",
          600: "#616949",
          700: "#4d5438",
          800: "#3f4530",
          900: "#333827",
          950: "#1d1c17",
        },
        taupe: {
          50: "#f8f6f1",
          100: "#efece4",
          200: "#e4e0d5",
          300: "#cbc7ba",
          400: "#a9a69a",
          500: "#8f8d84",
          600: "#75736a",
          700: "#57554d",
          800: "#3a3830",
          900: "#1d1c17",
          950: "#141310",
        },
        therapeutic: {
          50: "#f4f5ef",
          100: "#e5e7db",
          200: "#cfd3bb",
          300: "#b0b697",
          400: "#8d9375",
          500: "#77805c",
          600: "#616949",
          700: "#4d5438",
          800: "#3f4530",
          900: "#333827",
          950: "#1d1c17",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
});

export default config;
