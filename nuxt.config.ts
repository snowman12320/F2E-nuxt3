// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/F2E-nuxt3/' : '/',
    buildAssetsDir: '/static/'
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    'nuxt-icon'
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  typescript: {
    typeCheck: false
  },
  imports: {
    autoImport: true,
    dirs: ['composables/**']
  },
  nitro: {
    preset: 'firebase',
    firebase: {
      gen: 2,
      serverFunctionName: 'server'
    }
  },
  plugins: ['~/plugins/naive-ui.ts'],
  httpsOptions: {
    maxInstances: 10
  }
})
