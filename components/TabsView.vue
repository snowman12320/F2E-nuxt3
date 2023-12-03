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
    (city: any) => city.name === selectedListStore.value["縣市"] || {},
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

const selectItem = async (label: string, item: string) => {
  switch (label) {
    case "縣市":
      selectedListStore.value[label] = await item;
      selectedListStore.value["區域"] = "";
      break;
    case "區域":
      selectedListStore.value[label] = item;
      // selectedListStore.value["鄉鎮"] = "";
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
  }, 1000);
};

watch(
  () => selectedListStore.value["縣市"],
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      selectedListStore.value["區域"] = "";
    }
  },
);
</script>

<template>
  <main class="space-y-l">
    {{ selectedListStore }}
    <div class="flex justify-start gap-[20px] w-full h-full">
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
    </div>
    <div class="flex justify-start gap-[20px] w-full h-full items-center">
      <div v-for="(label, index) in ['縣市', '區域', '鄉鎮']" :key="index">
        <div class="relative">
          <div
            class="dropdown-default"
            @click="toggleSelect(label)"
            :class="{ '!border-[#000]': toggleSelectNames == label }"
          >
            <h6 class="text-inherit font-semibold w-[100px] flex-none">
              {{ selectedListStore[label] || "請選擇" + label }}
            </h6>
            <Icon
              name="fa-solid:chevron-down"
              width="55"
              :verticalFlip="toggleSelectNames == label"
            />
          </div>
          <ul
            v-show="toggleSelectNames == label"
            class="absolute bg-white w-full top-[44px] left-[0] rounded-lg overflow-hidden max-h-[204px] overflow-y-auto border border-black"
          >
            <li
              class="hover:bg-neutral-200 block py-xxs px-l w-full text-xl bg"
              @click="selectItem(label, '')"
            >
              請選擇{{ label }}
            </li>
            <template v-if="label == '縣市'">
              <li
                class="hover:bg-neutral-200 block py-xxs px-l w-full cursor-pointer font-semibold text-xl"
                :class="{ 'bg-neutral-200': selectedListStore[label] === item }"
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
                class="hover:bg-neutral-200 block py-xxs px-l w-full cursor-pointer font-semibold text-xl"
                :class="{ 'bg-neutral-200': selectedListStore[label] === item }"
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
                class="hover:bg-neutral-200 block py-xxs px-l w-full cursor-pointer font-semibold text-xl"
                :class="{ 'bg-neutral-200': selectedListStore[label] === item }"
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
      <button
        type="button"
        class="btn-default h-[35px] flex items-center justify-center gap-xs cursor-pointer py-xxs px-s rounded-lg border w-[88px]"
        @click="clearSelections"
        :disabled="false"
      >
        <h6 class="font-semibold flex-none h7">清除</h6>
        <Icon
          name="fa-solid:redo"
          width="55"
          color="white"
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
