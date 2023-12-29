<template>
  <div class="h-screen bg-white flex flex-col items-center justify-center gap-5xl">
      <div class="space-y-xl text-center">
        <h1 class="text-8xl font-semibold text-red-500">404</h1>
        <p class="my-8 text-3xl text-gray-800">Not Found</p>
        <p class="my-8 text-xl text-gray-800">
          真的是找不到這個頁面啦 &gt;///&lt;
        </p>
        <p class="text-2xl text-red-800">路徑錯誤，會先顯示這層</p>
      </div>
      <p class="text-2xl text-red-400">程式碼錯誤會顯示在 error.vue</p>
  </div>
</template>

<script setup>
setResponseStatus(404)
</script>
