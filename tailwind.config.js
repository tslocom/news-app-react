/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#f83256",
        "surface-container-high": "#dce9ff",
        "surface-container-low": "#eff4ff",
        "inverse-surface": "#213145",
        "tertiary": "#000000",
        "outline-variant": "#c6c6cd",
        "on-background": "#0b1c30",
        "surface-dim": "#cbdbf5",
        "primary-container": "#131b2e",
        "surface": "#f8f9ff",
        "background": "#f8f9ff",
        "on-surface-variant": "#45464d",
        "secondary-container": "#316bf3",
        "secondary": "#0051d5",
        "outline": "#76777d",
        "on-surface": "#0b1c30",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#d3e4fe",
        "primary": "#000000",
        "surface-container-highest": "#d3e4fe",
      },
      fontFamily: {
        serif: ['Newsreader', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
      // Adding the custom spacing units from your Stitch file
      spacing: {
        'gutter': '24px',
        'card-editorial': '24px',
        'card-dense': '12px',
      },
      fontSize: {
        'display-xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'ui-label': ['14px', { lineHeight: '20px', fontWeight: '600' }],
      }
    },
  },
  plugins: [],
}