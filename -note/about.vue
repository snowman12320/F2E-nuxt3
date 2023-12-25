<template>
  <section class="px-10 bg-blue-200">
    <BaseNavBar />
    <p>This page will be displayed at the /about route.</p>
    <h1 class="">Current route: {{ route.path }}</h1>
    <div class="my-10 py-10 bg-gray-300 text-xl">{{ x }} / {{ y }}</div>
    <hr />
    <p class="text-3xl">{{ counter }}</p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'custom',
  // layout: false,
  middleware: ['random-redirect']
})

const route = useRoute()

const { x, y } = useMouse()

const counter = useCounter()
</script>
