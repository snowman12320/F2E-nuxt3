// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // 部屬用
    // baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    // buildAssetsDir: '/assets/'
    // 本地用
    baseURL: process.env.NODE_ENV === 'production' ? '/F2E-nuxt3/' : '/',
    buildAssetsDir: '/static/'
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-lodash',
    'nuxt-icon',
    '@nuxtjs/i18n'
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
      region: 'us-central1',
      httpsOptions: {
        maxInstances: 10
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
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh',
        iso: 'zh-TW',
        file: 'zh.json'
      }
    ],
    defaultLocale: 'zh',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/formatInTimeZone']
          : []
    }
  }
})
