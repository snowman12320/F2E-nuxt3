<script setup lang="ts">
// USEVUE 調整true false植 會有問題
// const [loading, toggleLoading] = useToggle();

const isLoading = useLoading()
const isDark = useDark()
const afterBg = ref() // do not use ref(null)
const toggleDark = useToggle(isDark)

let timerId: number | null | NodeJS.Timeout = null
isLoading.value = true

onMounted(() => {
  setTimeout(() => {
    if (isDark) {
      // afterBg.value.classList.add("hidden");
    }
  }, 1000)
})
onUnmounted(() => {
  if (timerId) {
    clearTimeout(timerId)
  }
})

const handleTimeClick = () => {
  toggleDark()
  afterBg.value?.classList.remove('hidden')
  timerId = setTimeout(() => {
    afterBg.value?.classList.add('hidden')
  }, 1000)
}

const toggleSelectNames = useToggleSelectNames()
function handleToggleSelect(e: MouseEvent) {
  // e.target 的類型是 EventTarget，它沒有 classList 屬性。我們需要將 e.target 轉換為 Element 類型。
  const target = e.target as Element
  // e.target 可能是 null，我們需要先檢查它是否存在
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

// const dataTest = await $fetch('/api/firebase')
// console.log(dataTest)

// const { data } = await useAsyncData('firebase', () => $fetch('/api/firebase'))
// console.log(data);

// const { data, pending, refresh, error, status } =
//   await useFetch('/api/firebase')
// console.log(data, pending, refresh, error, status)
</script>

<template>
  <div
    class="min-h-screen !overflow-y-hidden bg-neutral-100"
    @click="handleToggleSelect"
  >
    <ClientOnly>
      <!-- 伺服器端預設渲染內容 -->
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
      class="relative overflow-hidden bg-primary"
      :class="{ '!bg-black !transition-all !duration-[1000ms]': isDark }"
    >
      <h4
        class="py-m pl-4xl font-semibold text-white"
        @click="handleTimeClick()"
      >
        2020 開票地圖
      </h4>
      <span
        ref="afterBg"
        :class="{
          'after:!scale-[100] after:!transition-all after:!duration-[1500ms]':
            isDark
        }"
        class="w-full after:absolute after:left-1/2 after:top-1/2 after:h-[50px] after:w-[50px] after:-translate-y-1/2 after:scale-[0] after:rounded-full after:bg-black after:!transition-all after:!duration-[1500ms]"
      />
    </nav>
    <main class="px-l py-xl sm:px-4xl">
      <IndexTabsGroup />
      <section class="z-[1] flex flex-col justify-between sm:flex-row">
        <!-- 客戶端在渲染可避免右側渲染錯誤 -->
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
