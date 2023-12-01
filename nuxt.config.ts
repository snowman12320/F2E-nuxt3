// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/eslint-module',
    'nuxt-lodash',
    'nuxt-icon',
  ],
  // lodash: {
  //   prefix: '_',
  //   prefixSkip: ['string'],
  //   upperAfterPrefix: false,
  //   exclude: ['map'],
  //   alias: [
  //     ['camelCase', 'stringToCamelCase'], // => stringToCamelCase
  //     ['kebabCase', 'stringToKebab'], // => stringToKebab
  //     ['isDate', 'isLodashDate'], // => _isLodashDate
  //   ],
  // },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
