<template>
  <section class="px-10 bg-blue-200">
    <p>This page will be displayed at the /about route.</p>
    <div class="my-10 bg-gray-300 py-10 text-xl">{{ x }} / {{ y }}</div>
    <hr>
    
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

import { useMouse } from "@vueuse/core";
const { x, y } = useMouse();
</script>
