// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-lodash",
    "nuxt-icon",
  ],
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    typeCheck: false,
  },
  imports: {
    autoImport: true,
    dirs: [
      // 掃描 composables 目錄頂層
      "composables",
      // 掃描深度一層的特定檔案
      "composables/*/index.{ts,js,mjs,mts}",
      // 掃描整個 composables 目錄下的檔案
      "composables/**",
    ],
  },
});
