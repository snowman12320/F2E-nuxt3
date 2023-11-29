<script setup lang="ts">
const cityList = await useFetch("/api/cityList");
const cityNames = cityList.data._rawValue?.map((city) => city.name);
</script>

<template>
  <div>
    <nav class="bg-primary">
      <h4 class="text-white pl-4xl py-m font-semibold">2020 開票地圖 {{}}</h4>
    </nav>
  </div>
</template>
