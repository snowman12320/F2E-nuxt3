<template>
  <div class="px-4 py-6 flex flex-col items-center justify-center">
    <div class="flex w-full max-w-md flex-col items-center justify-center">
      <h1
        class="my-8 flex text-center text-3xl font-bold tracking-tight text-emerald-500"
      >
        Credential
      </h1>

      <ClientOnly>
        <GoogleLogin :callback="callback" popup-type="TOKEN" prompt>
          <button
            class="px-4 py-2 flex rounded-md border border-gray-100 bg-white text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span class="text-slate-500 group-hover:text-slate-600"
              >使用 Google 進行登入</span
            >
          </button>
        </GoogleLogin>
      </ClientOnly>
      <p class="text-red-400">
       * 指數等待期 如果使用者手動關閉 One Tap 提示，系統會隱藏 One Tap
        提示。使用者輕觸提示右上角的「關閉」圖示 close 時，即關閉 One Tap
        功能，之後 One Tap 就不會在同一個瀏覽器或最後一個造訪的網站上顯示一次。
        在未啟用 FedCM 的情況下，下列指數時間範圍會用於等待期： 連續時間封閉
        停用一次感應功能的時段 (1 / 2 小時 )
      </p>

      <div class="mt-4 text-gray-700">
        {{ userInfo }}
      </div>
    </div>
  </div>
</template>

<script setup>
const userInfo = ref(null)

const callback = async (response) => {
  if (!response?.credential) {
    // 登入失敗
    return
  }

  const { data } = await useFetch('/api/auth/google-credential', {
    method: 'POST',
    body: {
      credential: response.credential
    }
  })

  userInfo.value = data.value
}
</script>
