<template>
  <div class="py-24 bg-white">
    <div class="flex flex-col items-center space-y-5xl">
      <h1 class="text-8xl font-semibold text-red-500">404</h1>
      <p class="my-8 text-3xl text-gray-800">Not Found</p>
      <p class="my-8 text-xl text-gray-800">
        真的是找不到這個頁面啦 &gt;///&lt;
      </p>
      <p class="text-2xl text-red-400">路徑錯誤，會先顯示這層</p>
      <p class="text-2xl text-red-400">程式碼錯誤會顯示error.vue</p>
    </div>
  </div>
</template>

<script setup>
setResponseStatus(404)
</script>
