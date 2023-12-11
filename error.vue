<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="space-y-[100px] p-5xl text-center">
    <h3>{{ error.statusCode }}</h3>
    <h4>{{ error.statusMessage }}</h4>
    <!-- <h5>{{ error.message }}</h5> -->
    <h5 class="!text-left" v-html="error.message"></h5>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
