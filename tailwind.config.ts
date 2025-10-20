import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream/beige inspired by the reference site
        'cream': {
          '50': '#fefcf7',
          '100': '#fdf7e8',
          '200': '#fbedc6',
          '300': '#f7dc9a',
          '400': '#f2c56c',
          '500': '#eeb147',
          '600': '#de9c32',
          '700': '#b97f2b',
          '800': '#94652a',
          '900': '#785528',
          '950': '#422c12',
        },
        // Soft sage green inspired by the therapeutic theme
        'sage': {
          '50': '#f7f9f7',
          '100': '#eef2ee',
          '200': '#dde5dd',
          '300': '#c3d2c3',
          '400': '#a1b8a1',
          '500': '#829e82',
          '600': '#6a836a',
          '700': '#566856',
          '800': '#475447',
          '900': '#3d463d',
          '950': '#1f251f',
        },
        // Warm taupe/brown for deeper elements
        'taupe': {
          '50': '#f8f6f4',
          '100': '#f0ebe6',
          '200': '#dfd5cc',
          '300': '#cab7aa',
          '400': '#b69889',
          '500': '#a68270',
          '600': '#987264',
          '700': '#7f5e54',
          '800': '#695049',
          '900': '#56433d',
          '950': '#2e221f',
        },
        // Soft therapeutic accent color
        'therapeutic': {
          '50': '#f6f8f6',
          '100': '#e3ebe4',
          '200': '#c7d6c9',
          '300': '#9fb8a3',
          '400': '#739679',
          '500': '#567a5c',
          '600': '#426147',
          '700': '#364e3a',
          '800': '#2d4030',
          '900': '#263529',
          '950': '#141d16',
        },
         
      }
    }
  },
  plugins: [],
});

export default config;
