<template>
  <span class="px-10 mx-auto block text-center">
    <ul class="flex gap-5 justify-center underline">
      <li><NuxtLink to="/">home</NuxtLink></li>
      <li><NuxtLink to="/about">about</NuxtLink></li>
      <li><NuxtLink to="/table">table</NuxtLink></li>
      <li><NuxtLink to="/tag/2">tag 2</NuxtLink></li>

      <li></li>
      <li></li>
      <li></li>
    </ul>
  </span>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
