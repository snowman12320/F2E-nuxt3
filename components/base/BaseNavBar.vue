<template>
  <span class="px-10 mx-auto block text-center">
    <ul class="flex gap-5 justify-center underline">
      <li><NuxtLink to="/">home</NuxtLink></li>
      <li><NuxtLink to="/about">about</NuxtLink></li>
      <li><NuxtLink to="/tag/2">tag 2</NuxtLink></li>
      <li><NuxtLink to="/parent">parent</NuxtLink></li>
      <li><a href="/">server render</a></li>

      <li></li>
      <li></li>
      <li></li>
    </ul>
  </span>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
