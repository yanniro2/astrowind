// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // extend: {
    //   colors: {
    //     primary: 'var(--aw-color-primary)',
    //     secondary: 'var(--aw-color-secondary)',
    //     accent: 'var(--aw-color-accent)',
    //     default: 'var(--aw-color-text-default)',
    //     muted: 'var(--aw-color-text-muted)',
    //   },
    //   fontFamily: {
    //     sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
    //     serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
    //     heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
    //   },
    // },
    extend: {
      colors: {
        primary: ' #ed9f4c',
<<<<<<< HEAD
        secondary: '#222222',
        gary: '#2c2c2c',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
=======
        secound: '#',
        dark: '#222222',
        darklight: '#2c2c2c',
>>>>>>> f716e95 (fix index page)
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
};
