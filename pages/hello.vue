<template>
  <div class="space-y-2xl">
    <div class="my-24 flex flex-col items-center">
      <span class="mt-4 text-2xl text-gray-600">回傳資料:</span>
      <p class="mt-4 text-3xl font-semibold text-blue-500">{{ data }}</p>
    </div>
    <!--  -->
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
</script>
