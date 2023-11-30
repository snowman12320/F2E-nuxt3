<script lang="ts" setup>
const props = defineProps<{
  loading: boolean;
}>();
</script>

<template>
  <div
    v-if="props.loading"
    class="absolute inset-0 bg-white bg-opacity-[.3] backdrop-blur-sm w-full h-screen flex justify-center items-center z-[99]"
  >
    <Icon name="svg-spinners:clock" color="#aaa" size="80" class="absolute inset-0" />
  </div>
</template>

<style scoped></style>
