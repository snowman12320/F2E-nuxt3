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
  }, 500)
}
onUnmounted(() => {
  if (timerId) {
    clearTimeout(timerId)
  }
})

// e.target 的類型是 EventTarget，它沒有 classList 屬性。我們需要將 e.target 轉換為 Element 類型。
// e.target 可能是 null，我們需要先檢查它是否存在
const toggleSelectNames = useToggleSelectNames()
function handleToggleSelect(e: MouseEvent) {
  const target = e.target as Element
  if (target) {
    // when click outside of id = toggleSelect,then toggleSelectNames.value = false in components/TabsView.vue
    if (
      !target.classList.contains('dropdown-default') &&
      !target.classList.contains('sm:w-[55px]') &&
      !target.classList.contains('sm:w-[100px]')
    ) {
      toggleSelectNames.value = false
    }
  }
}

definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    // console.log(`[匿名中間件] 我是直接定義在 index.vue 頁面內的匿名中間件`)
  })
})
</script>

<template>
  <div
    class="min-h-screen !overflow-y-hidden bg-neutral-100 !duration-[1000ms]"
    :class="{
      '!bg-gray-800': isDark
    }"
    @click="handleToggleSelect"
  >
    <ClientOnly>
      <!-- 伺服器端預設渲染內容 > 需確認影片說明 !!! -->
      <template #fallback>
        <BaseLoadingView :loading="isLoading" />
        <p
          class="fixed left-1/2 top-[60%] z-[99] -translate-x-1/2 -translate-y-1/2 text-center"
        >
          資料載入中 . . .
        </p>
      </template>
      <!-- 客戶端接手渲染內容 -->
      <BaseLoadingView :loading="isLoading" />
    </ClientOnly>
    <nav
      class="overflow-hidden bg-primary !duration-[1000ms]"
      :class="{ '!bg-black !transition-all ': isDark }"
    >
      <div class="flex items-center justify-between px-4xl">
        <h4 class="py-m font-semibold text-white">
          2020 開票地圖 
        </h4>
        <div class="z-[98] space-x-m">
          <Icon
            name="fa-solid:star"
            color="yellow"
            class="h-xl w-xl cursor-pointer"
          />
          <Icon
            name="fa-solid:history"
            color="red"
            class="h-xl w-xl cursor-pointer"
          />
          <Icon
            v-if="isDark"
            name="fa-solid:sun"
            color="orange"
            class="h-xl w-xl cursor-pointer pr-xxs"
            @click="handleTimeClick"
          />
          <Icon
            v-else
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
    <main class="px-l py-xl sm:px-4xl">
      <IndexTabsGroup />
      <section class="z-[1] flex flex-col justify-between sm:flex-row">
        <ClientOnly>
          <IndexLeftBarView />
          <IndexTaiwanBarView />
          <IndexRightBarView />
        </ClientOnly>
        <!-- 清空時，畫面會抖動 -->
        <!-- <LazyIndexRightBarView v-if="!isLoading" /> -->
      </section>
    </main>
  </div>
</template>
