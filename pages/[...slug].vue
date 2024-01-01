<template>
  <div
    class="flex h-screen flex-col items-center justify-center gap-5xl bg-white"
  >
    <div class="space-y-xl text-center">
      <h1 class="text-8xl font-semibold text-red-500">404</h1>
      <p class="my-8 text-3xl text-gray-800">Not Found</p>
      <p class="text-2xl text-red-800">路徑錯誤，會先顯示這層</p>
    </div>
    <p class="text-2xl text-red-400">程式碼錯誤會顯示在 error.vue</p>
  </div>
</template>

<script setup>
setResponseStatus(404)
</script>
