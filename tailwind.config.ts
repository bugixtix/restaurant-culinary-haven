import type { Config } from 'tailwindcss';
import { heroui } from '@heroui/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        restaurant: {
          'forest-green': '#118949',
          'deep-green': '#0a632b',
          cyan: '#19bcdf',
          yellow: '#e6e711',
          'rich-black': '#0d0808',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0d0808 0%, #0a632b 100%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#118949',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#19bcdf',
              foreground: '#0d0808',
            },
            success: {
              DEFAULT: '#118949',
            },
            warning: {
              DEFAULT: '#e6e711',
              foreground: '#0d0808',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#118949',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#19bcdf',
              foreground: '#0d0808',
            },
            success: {
              DEFAULT: '#118949',
            },
            warning: {
              DEFAULT: '#e6e711',
              foreground: '#0d0808',
            },
          },
        },
      },
    }),
  ],
};

export default config;
