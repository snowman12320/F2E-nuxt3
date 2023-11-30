<script setup lang="ts">
const [loading, toggleLoading] = useToggle();

const isDark = useDark();
const afterBg = ref(null);
const toggleDark = useToggle(isDark);
onMounted(() => {
  setTimeout(() => {
    if (isDark) {
      // afterBg.value.classList.add("hidden");
    }
  }, 1000);
});
const hadleTimeClick = () => {
  toggleDark();
  afterBg.value.classList.remove("hidden");
  setTimeout(() => {
    afterBg.value.classList.add("hidden");
  }, 1000);
};
</script>

<template>
  <div class="bg-neutral-100 min-h-screen">
    <LoadingView :loading="loading" />
    <nav
      class="bg-primary relative overflow-hidden"
      :class="{ '!bg-black !transition-all !duration-[1000ms]': isDark }"
    >
      <h4 class="text-white pl-4xl py-m font-semibold" @click="hadleTimeClick()">
        2020 開票地圖 {{}}
      </h4>
      <span
        ref="afterBg"
        :class="{
          'after:!scale-[100] after:!duration-[1000ms] after:!transition-all ': isDark,
        }"
        class="w-full after:h-[50px] after:w-[50px] after:scale-0 after:duration-[1000ms] after:transition-all after:rounded-full after:bg-black after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2"
      ></span>
    </nav>
    <TabsView />
  </div>
</template>
