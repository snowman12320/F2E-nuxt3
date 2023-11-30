export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
    },
    spacing: {
      xxs: '4px',
      xs: '8px',
      s: '12px',
      m: '16px',
      l: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
      '5xl': '64px',
    },
    extend: {
      colors: {
        primary: '#262E49',
        disabled: '#BFBFBF',
      },
    },
  },
};
