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
      serverFunctionName: 'server',
      httpsOptions: {
        maxInstances: 10,
      }
    }
  },
  plugins: ['~/plugins/naive-ui.ts'],
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P ',
    public: {
      apiBase: '/api',
      googleClientId: ''
    },
    googleClientId: ''
  },
  buildModules: ['@nuxtjs/firebase'],
  firebase: {
    config: {
      apiKey: 'AIzaSyBjht0vea76V6ZLkCyqiFxeYRp4rvTaCYA',
      authDomain: 'my-first-project-1110913.firebaseapp.com',
      projectId: 'my-first-project-1110913',
      storageBucket: 'my-first-project-1110913.appspot.com',
      messagingSenderId: '975844882213',
      appId: '1:975844882213:web:fe2ad0746c2de61e5f4ccc',
      measurementId: 'G-C8JWYX7WYP'
    },
    services: {
      auth: true // Just as an example. You can use other services too.
    }
  }
})
