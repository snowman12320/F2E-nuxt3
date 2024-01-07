<template>
  <div class="space-y-2xl">
    <div class="my-24 flex flex-col items-center">
      <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
      <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
    </div>
    <!--  -->
    <hr />
    <div class="py-24 bg-white">
      <div class="flex flex-col items-center">
        <div class="my-4 space-y-4 flex flex-col">
          <NuxtLink to="/config">前往 /config</NuxtLink>
        </div>
        <p class="mt-4 text-2xl text-gray-600">theme.darkMode:</p>
        <span class="mt-4 text-3xl font-semibold text-blue-500">{{
          theme.darkMode
        }}</span>
      </div>
    </div>
    <!--  -->
    <hr />
    <div class="flex flex-col items-center bg-white">
      <h1 class="my-8 text-6xl font-medium text-blue-500">
        {{ $t('hello') }}
      </h1>
      <div class="gap-4 flex">
        <button
          type="button"
          class="px-4 py-2 inline-flex items-center rounded-md border border-transparent bg-blue-100 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="setLocale('en')"
        >
          English
        </button>

        <button
          type="button"
          class="px-4 py-2 inline-flex items-center rounded-md border border-transparent bg-blue-100 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="setLocale('zh')"
        >
          繁體中文
        </button>
      </div>
      <div class="mt-4 flex flex-row justify-center">
        <label class="text-gray-600">{{ $t('language') }}</label>
        <span class="ml-4 font-bold text-gray-800">{{ locale }}</span>
      </div>
    </div>
    <!--  -->
    <hr />
    <!-- https://ithelp.ithome.com.tw/articles/10336085 -->
    <img src="~/public/images/cover.png" width="300" />
    <img src="@/public/images/cover.png" width="300" />
    <img src="@/assets/cover.png" width="300" />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const { apiBase } = runtimeConfig.public
console.log('runtimeConfig:', toRaw(runtimeConfig))
console.log(
  `嘗試在 ${process.client ? 'Client' : 'Server'} 取得 [apiSecret]: ${
    runtimeConfig.apiSecret
  }`
)
const { data } = await useFetch(`${apiBase}/hello/hello`)
//
const appConfig = useAppConfig()
const { theme } = appConfig

import { useI18n } from 'vue-i18n'
const { locale, setLocale } = useI18n()
</script>
