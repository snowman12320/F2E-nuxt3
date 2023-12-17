<script setup lang="ts">
interface City {
  name: string
  district: string[]
}
interface SelectedListStore {
  value: {
    縣市: string
    區域: string
    鄉鎮: string
  }
}

import _ from 'lodash'
const selectedListStore: SelectedListStore = useSelectedListStore()
const isLoading = useLoading()
import { getTownData } from '~/composables/getTownData'

const tabName = ref('presidential')
function selectTab(tab: string) {
  tabName.value = tab
}

const SelectCityData = await useFetch<City[]>('/api/SelectCityData')
const cityNames = computed(() => {
  return SelectCityData?.data?._rawValue?.map((city: any) => city.name) || []
})
const areaNames = computed(() => {
  return SelectCityData?.data?._rawValue?.filter(
    (city: any) => city.name === selectedListStore.value['縣市']
  )
})
const townNames = ref<Promise<string[]>>([])

const toggleSelectNames = useToggleSelectNames()
function toggleSelect(select: string) {
  toggleSelectNames.value = select === toggleSelectNames.value ? "" : select;
  inputSelect.value = "";
  // const inputSelectFocus = ref();
  // Uncaught TypeError: inputSelectFocus.value.focus is not a function,how to fix
  // inputSelectFocus.value.focus();
}

function selectItem(label: string, item: string) {
  selectedListStore.value[label] = item
  inputSelect.value = item
  toggleSelectNames.value = ''
}

function clearSelections() {
  if (_.every(selectedListStore.value, _.isEmpty)) {
    alert('Already clear empty.')
    return
  }
  selectedListStore.value = {
    縣市: '',
    區域: '',
    鄉鎮: ''
  }
  townNames.value = []
  toggleSelectNames.value = ''

  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

watch(
  () => selectedListStore.value['縣市'],
  async (newValue, oldValue) => {
    if (Boolean(newValue) && newValue !== oldValue) {
      townNames.value = []
      inputSelect.value = ''
      selectedListStore.value['區域'] = areaNames.value[0].district[0]

      if (newValue) {
        townNames.value = getTownData(
          selectedListStore.value['縣市'],
          selectedListStore.value['區域']
        )
        townNames.value.then((resolvedArray) => {
          //! Now you can work with the resolvedArray,this will log the array elements (promise)
          townNames.value = resolvedArray
          selectedListStore.value['鄉鎮'] = townNames.value[0]
        })
      }
    }
  }
)

const inputSelect = ref('')
const filterTownNames = computed(() =>
  _.filter(townNames.value, (townName) => townName.includes(inputSelect.value))
)

setTimeout(async () => {
  selectedListStore.value["縣市"] = await "南投縣";
  // 關閉首屏時的載入動畫，配合 LazyIndexRightBarView，但要100ms，才能避免，後來渲染報錯
  isLoading.value = false;
}, 100);
</script>

<template>
  <main class="space-y-l">
    <div class="flex h-full w-full justify-start gap-s sm:gap-[20px]">
      <h6
        class="tab-default"
        @click="selectTab('presidential')"
        :class="{ 'tab-click': tabName === 'presidential' }"
      >
        第15任 總統副總統大選
      </h6>
      <div class="relative">
        <h6
          class="tab-default"
          @click="selectTab('legislative')"
          :class="{ 'tab-click': tabName === 'legislative' }"
        >
          第14任 總統副總統大選
        </h6>
        <span
          :class="{
            ' absolute inset-[0] cursor-not-allowed ': true
          }"
        ></span>
      </div>
      <!-- <h6>{{ selectedListStore }}</h6> -->
    </div>
    <div
      class="flex h-full w-full items-center justify-start gap-xxs sm:gap-[20px]"
    >
      <div
        class="w-[90%] items-center justify-start gap-[20px] space-y-xs sm:flex sm:w-auto sm:space-y-[0px]"
      >
        <div v-for="(label, index) in ['縣市', '區域', '鄉鎮']" :key="index">
          <div class="relative">
            <div class="relative overflow-hidden">
              <div
                @click="toggleSelect(label)"
                class="dropdown-default"
                :class="{
                  '!border-[#000]': toggleSelectNames.toString() === label
                }"
              >
                <h6
                  v-if="label == '鄉鎮'"
                  class="flex-none font-semibold text-inherit sm:w-[100px]"
                >
                  <input
                    v-model="inputSelect"
                    type="text"
                    class="w-[100px] border-none outline-none placeholder:text-inherit focus:placeholder:text-gray-300 sm:w-[100px]"
                    :placeholder="selectedListStore[label] || `請選擇${label}`"
                    ref="inputSelectFocus"
                  />
                </h6>
                <h6
                  v-else
                  class="flex-none font-semibold text-inherit sm:w-[100px]"
                >
                  {{ selectedListStore[label] || '請選擇' + label }}
                </h6>
                <Icon
                  name="fa-solid:chevron-down"
                  width="55"
                  :verticalFlip="toggleSelectNames == label"
                  class="!pointer-events-none w-[24px] sm:w-[55px]"
                />
              </div>
              <span
                :class="{
                  ' absolute inset-[0] cursor-not-allowed bg-white/70':
                    label == '區域' && !areaNames[0]
                }"
              ></span>
              <span
                :class="{
                  ' absolute inset-[0] cursor-not-allowed bg-white/70':
                    label == '鄉鎮' && townNames.length == 0
                }"
              ></span>
            </div>
            <ul
              id="scrollbar"
              v-show="toggleSelectNames.toString() === label"
              class="absolute left-[0] top-[44px] z-[10] max-h-[204px] w-full overflow-hidden overflow-y-auto rounded-lg border border-black bg-white"
            >
              <li
                v-show="filterTownNames.length == 0 && Boolean(inputSelect)"
                class="bg block w-full px-l py-xxs text-xl hover:bg-neutral-200"
                @click="selectItem(label, '')"
              >
                無資料
              </li>
              <li
                v-if="toggleSelectNames == '縣市'"
                class="block w-full cursor-pointer px-l py-xxs text-xl font-semibold hover:bg-neutral-200"
                :class="{
                  'bg-neutral-200': selectedListStore[label] === item
                }"
                v-for="(item, index) in cityNames"
                :key="index"
                :value="item"
                @click="selectItem(label, item)"
              >
                {{ item }}
              </li>
              <li
                v-else-if="areaNames[0] && toggleSelectNames == '區域'"
                class="block w-full cursor-pointer px-l py-xxs text-xl font-semibold hover:bg-neutral-200"
                :class="{
                  'bg-neutral-200': selectedListStore[label] === item
                }"
                v-for="(item, index) in areaNames[0].district"
                :key="index + 100"
                :value="item"
                @click="selectItem(label, item)"
              >
                {{ item }}
              </li>
              <li
                v-else-if="toggleSelectNames == '鄉鎮' && townNames"
                class="block w-full cursor-pointer px-l py-xxs text-xl font-semibold hover:bg-neutral-200"
                :class="{
                  'bg-neutral-200': selectedListStore[label] === item
                }"
                v-for="(item, index) in filterTownNames"
                :key="index + 200"
                :value="item"
                @click="selectItem(label, item)"
              >
                {{ filterTownNames.length !== 0 ? item : '' }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn-default flex h-[120px] w-[10%] cursor-pointer items-center justify-center gap-xs rounded-lg border py-xxs sm:h-[35px] sm:w-[88px] sm:px-s"
        @click="clearSelections"
        :disabled="false"
      >
        <h6 class="h7 hidden flex-none font-semibold sm:block">清除</h6>
        <Icon
          name="fa-solid:redo"
          width="36"
          color="white"
          class="flex-none sm:w-[55px] sm:flex-1"
          :class="{ '!text-[#737373]': false }"
        />
      </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
/* 將滾動條的顏色更改為紅色 */
::-webkit-scrollbar {
  background-color: transparent !important;
  padding: 5px !important;
}

/* 將滾動條的寬度更改為 10px */
::-webkit-scrollbar {
  width: 5px !important;
}

/* 將滾動條的高度更改為 20px */
::-webkit-scrollbar {
  height: 20px !important;
}

/* 將滾動條的按鈕顏色更改為藍色 */
::-webkit-scrollbar-button {
  background-color: transparent !important;
  display: none !important;
}

/* 將滾動條的滾動滑塊顏色更改為綠色 */
::-webkit-scrollbar-thumb {
  background-color: #eee !important;
  border-radius: 50px !important;
}
</style>
