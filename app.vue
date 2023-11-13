<template>
  <div>
    <h1 class="mx-auto text-center w-full text-3xl">Welcome to the homepage</h1>
    <NavBar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import NavBar from "~/components/NavBar.vue";
</script>
