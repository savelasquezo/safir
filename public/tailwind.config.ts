import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        samiya: ['MikeSamiya', 'sans'],
        animeace: ['Animeace', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        courier: ['Courier', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        straight: ['StraightPath', 'sans-serif'],
        cocogoose: ['Cocogoose', 'sans-serif'],
        historic: ['Historic', 'sans-serif'],
      },
      backgroundImage: {
        'background-image01': "url('/assets/background01.webp')",
        'background-image02': "url('/assets/background02.webp')",
        'background-image03': "url('/assets/background03.webp')",
        'background-image04': "url('/assets/background04.webp')",
        'background-image05': "url('/assets/background05.webp')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        safir0: '#BF2431',
        safir1: '#BF2441',
        safir2: '#670204',
        safir3: '#F2F2F2',
        safir4: '#0D0D0D',
      },
    },
  },
  plugins: [],
});

export default config;
