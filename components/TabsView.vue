<script setup lang="ts">
import _ from "lodash";
const selectedListStore = useSelectedListStore();
const isLoading = useLoading();

const tabName = ref("presidential");
const selectTab = (tab: string) => {
  tabName.value = tab;
};

const SelectCityData = await useFetch("/api/SelectCityData");
const cityNames = computed(() => {
  return SelectCityData?.data?._rawValue?.map((city: any) => city.name) || [];
});
const areaNames = computed(() => {
  return SelectCityData?.data?._rawValue?.filter(
    (city: any) => city.name === selectedListStore.value["縣市"],
  );
});

const toggleSelectNames = ref("");
const toggleSelect = (select: string) => {
  if (select === toggleSelectNames.value) {
    toggleSelectNames.value = "";
    return;
  }
  toggleSelectNames.value = select;
};

const selectItem = (label: string, item: string) => {
  switch (label) {
    case "縣市":
      selectedListStore.value[label] = item;
      break;
    case "區域":
      selectedListStore.value[label] = item;
      break;
    case "鄉鎮":
      selectedListStore.value[label] = item;
      break;
  }
  toggleSelectNames.value = "";
};

const clearSelections = () => {
  // if (_.every(selectedData.value, _.isEmpty)) {
  //   alert("already empty clear");
  //   return;
  // }
  selectedListStore.value = {
    縣市: "",
    區域: "",
    鄉鎮: "",
  };
  toggleSelectNames.value = "";

  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 500);
};

watch(
  () => selectedListStore.value["縣市"],
  (newValue, oldValue) => {
    if (Boolean(newValue) && newValue !== oldValue) {
      selectedListStore.value["區域"] = areaNames.value[0].district[0];
      selectedListStore.value["鄉鎮"] = areaNames.value[0].district[0];
    }
  },
);
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
      <h6
        class="tab-default"
        @click="selectTab('legislative')"
        :class="{ 'tab-click': tabName === 'legislative' }"
      >
        第10任 立法委員選舉
      </h6>
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
            <div
              class="dropdown-default"
              @click="toggleSelect(label)"
              :class="{ '!border-[#000]': toggleSelectNames == label }"
            >
              <h6 class="flex-none font-semibold text-inherit sm:w-[100px]">
                {{ selectedListStore[label] || "請選擇" + label }}
              </h6>
              <Icon
                name="fa-solid:chevron-down"
                width="55"
                :verticalFlip="toggleSelectNames == label"
                class="w-[24px] sm:w-[55px]"
              />
            </div>
            <ul
              v-show="toggleSelectNames == label"
              class="absolute left-[0] top-[44px] z-[10] max-h-[204px] w-full overflow-hidden overflow-y-auto rounded-lg border border-black bg-white"
            >
              <li
                class="bg block w-full px-l py-xxs text-xl hover:bg-neutral-200"
                @click="selectItem(label, '')"
              >
                請選擇{{ label }}
              </li>
              <template v-if="label == '縣市'">
                <li
                  class="block w-full cursor-pointer px-l py-xxs text-xl font-semibold hover:bg-neutral-200"
                  :class="{
                    'bg-neutral-200': selectedListStore[label] === item,
                  }"
                  v-for="(item, index) in cityNames"
                  :key="index"
                  :value="item"
                  @click="selectItem(label, item)"
                >
                  {{ item }}
                </li>
              </template>
              <template v-if="areaNames[0]">
                <li
                  class="block w-full cursor-pointer px-l py-xxs text-xl font-semibold hover:bg-neutral-200"
                  :class="{
                    'bg-neutral-200': selectedListStore[label] === item,
                  }"
                  v-for="(item, index) in areaNames[0].district"
                  :key="index"
                  :value="item"
                  @click="selectItem(label, item)"
                >
                  {{ item }}
                </li>
              </template>
              <template v-if="false">
                <li
                  class="block w-full cursor-pointer px-l py-xxs text-xl font-semibold hover:bg-neutral-200"
                  :class="{
                    'bg-neutral-200': selectedListStore[label] === item,
                  }"
                  v-for="(item, index) in localNames[0].district"
                  :key="index"
                  :value="item"
                  @click="selectItem(label, item)"
                >
                  {{ item }}
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn-default flex h-[120px] w-[10%] cursor-pointer items-center gap-xs rounded-lg border py-xxs sm:h-[35px] sm:w-[88px] sm:justify-center sm:px-s"
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

<style lang="scss">
/* 將滾動條的顏色更改為紅色 */
::-webkit-scrollbar {
  background-color: transparent;
  padding: 5px;
}

/* 將滾動條的寬度更改為 10px */
::-webkit-scrollbar {
  width: 5px;
}

/* 將滾動條的高度更改為 20px */
::-webkit-scrollbar {
  height: 20px;
}

/* 將滾動條的按鈕顏色更改為藍色 */
::-webkit-scrollbar-button {
  background-color: transparent;
  display: none;
}

/* 將滾動條的滾動滑塊顏色更改為綠色 */
::-webkit-scrollbar-thumb {
  background-color: #eee;
  border-radius: 50px;
}
</style>
