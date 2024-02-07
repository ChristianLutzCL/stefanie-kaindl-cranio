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
        'parchment': {
          '50': '#f9f7f1',
          '100': '#ede7d5',
          '200': '#dbd0ac',
          '300': '#c9b480',
          '400': '#bc9f63',
          '500': '#b1874f',
          '600': '#9b6f44',
          '700': '#82563b',
          '800': '#6b4635',
          '900': '#593b2e',
          '950': '#321f16',
        },
        'outer-space': {
          '50': '#f6f9f8',
          '100': '#dee7e6',
          '200': '#bdd0ce',
          '300': '#95b1ae',
          '400': '#6f908e',
          '500': '#567675',
          '600': '#445f5f',
          '700': '#384d4c',
          '800': '#304040',
          '900': '#2d3939',
          '950': '#151d1e',
        },  
        'sinbad': {
          '50': '#f2f9f9',
          '100': '#deefef',
          '200': '#c2dfdf',
          '300': '#9dcccc',
          '400': '#65aaab',
          '500': '#4a8e90',
          '600': '#40767a',
          '700': '#396165',
          '800': '#355255',
          '900': '#2f454a',
          '950': '#1c2c30',
        },
         
      }
    }
  },
  plugins: [],
});

export default config;
