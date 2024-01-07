<script setup lang="ts">
const isLoading = useLoading()
isLoading.value = true

const afterBg = ref()
const isDark = useDark()
const toggleDark = useToggle(isDark)
let timerId: number | null | NodeJS.Timeout = null
const handleTimeClick = async () => {
  await afterBg.value?.classList.remove('hidden')
  toggleDark()
  timerId = setTimeout(() => {
    afterBg.value?.classList.add('hidden')
  }, 1100)
}
onUnmounted(() => {
  if (timerId) {
    clearTimeout(timerId)
  }
})
onMounted(() => {
  handleTimeClick()
})

const toggleSelectNames = useToggleSelectNames()
function handleToggleSelect(e: MouseEvent) {
  const target = e.target as Element
  if (target) {
    if (
      !target.classList.contains('dropdown-default') &&
      !target.classList.contains('sm:w-[55px]') &&
      !target.classList.contains('sm:w-[100px]')
    ) {
      toggleSelectNames.value = false
    }
  }
}

const nav = ref()
const navHeight = ref(0)
onMounted(() => {
  navHeight.value = nav.value?.clientHeight || 0
  if (window.innerWidth < 767) {
    document.body.style.paddingTop = `${navHeight.value}px`
  }
})

// const dataTest = await $fetch('/api/firestore/firebase')
</script>

<template>
  <div
    class="h-screen !overflow-y-hidden bg-neutral-100 !duration-[1000ms]"
    :class="{
      '!bg-gray-800': isDark
    }"
    @click="handleToggleSelect"
  >
    <ClientOnly>
      <template #fallback>
        <BaseLoadingView :loading="isLoading" />
        <p
          class="fixed left-1/2 top-[60%] z-[100] -translate-x-1/2 -translate-y-1/2 text-center"
        >
          資料載入中 . . .
        </p>
      </template>
      <BaseLoadingView :loading="isLoading" />
    </ClientOnly>
    <nav
      class="fixed left-[0px] right-[0px] top-[0px] z-[99] overflow-hidden bg-primary !duration-[1000ms] md:relative"
      :class="{ '!bg-black !transition-all ': isDark }"
      ref="nav"
    >
      <div class="flex items-center justify-between px-4xl">
        <h4 class="py-m font-semibold text-white">2020 開票地圖</h4>
        <div class="z-[98] h-[28px] w-[120px] space-x-m">
          <span title="Update to F2E pro">
            <Icon
              name="fa-solid:star"
              color="yellow"
              class="h-xl w-xl cursor-pointer"
              title="開發中"
            />
          </span>
          <span title="Update to F2E pro">
            <Icon
              name="fa-solid:history"
              color="red"
              class="h-xl w-xl cursor-pointer"
            />
          </span>
          <Icon
            v-show="isDark"
            name="fa-solid:sun"
            color="orange"
            class="h-[28px] w-[28px] translate-x-[-116px] cursor-pointer pr-xxs transition-all duration-[1500ms]"
            :class="{
              'translate-x-[0px] ': isDark
            }"
            @click="handleTimeClick"
          />
          <Icon
            v-show="!isDark"
            name="fa-solid:moon"
            color="white"
            class="h-l w-l cursor-pointer"
            @click="handleTimeClick"
          />
        </div>
      </div>
      <span
        ref="afterBg"
        :class="{
          'after:!scale-[100] after:!transition-all after:!duration-[1000ms]':
            isDark
        }"
        class="z-[0] w-full after:absolute after:right-[0px] after:top-[0px] after:h-[50px] after:w-[50px] after:-translate-y-1/2 after:scale-[0] after:rounded-full after:bg-black after:!transition-all after:!duration-[1000ms]"
      />
    </nav>
    <slot />
  </div>
</template>
