// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    // "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/color-mode",
    "nuxt-lodash",
    "nuxt-icon",
  ],
  devtools: { enabled: true },
  // css: ["~/assets/css/main.css"],
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
