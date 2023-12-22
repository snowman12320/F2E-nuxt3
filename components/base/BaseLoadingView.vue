<script lang="ts" setup>
// import { defineProps } from '#imports';
defineProps<{
  loading: boolean;
}>();
</script>

<template>
  <div
    v-if="loading"
    class="inset-0 absolute z-[99] flex h-screen w-full items-center justify-center bg-white bg-opacity-[.3] backdrop-blur-sm"
  >
    <Icon
      name="svg-spinners:clock"
      color="#aaa"
      size="80"
      class="inset-0 absolute"
    />
  </div>
</template>

<style scoped></style>
