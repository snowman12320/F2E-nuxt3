<template>
  <main class="space-y-l">
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
    <div class="flex flex-col justify-center items-center h-full gap-xxs">
      <div class="flex justify-start gap-[20px] w-full h-full">
        <div v-for="(label, index) in ['縣市', '區域', '鄉鎮']" :key="index">
          <div class="relative">
            <div
              class="dropdown-default"
              @click="toggleSelect(label)"
              :class="{ '!border-[#000]': selectedName == label }"
            >
              <h6 class="text-inherit font-semibold w-[100px] flex-none">
                {{ selectedData[label] || "請選擇" }}
              </h6>
              <Icon
                name="fa-solid:chevron-down"
                width="55"
                :verticalFlip="selectedName == label"
              />
            </div>
            <ul
              v-show="selectedName == label"
              class="absolute bg-white w-full top-[44px] left-[0] rounded-lg overflow-hidden h-[204px] overflow-y-scroll border border-black"
            >
              <li
                class="hover:bg-neutral-200 block py-xxs px-l w-full text-xl bg"
                @click="selectItem(label, '')"
              >
                請選擇
              </li>
              <li
                class="hover:bg-neutral-200 block py-xxs px-l w-full cursor-pointer font-semibold text-xl"
                :class="{ 'bg-neutral-200': selectedData[label] === item }"
                v-for="(item, index) in cityNames"
                :key="index"
                :value="item"
                @click="selectItem(label, item)"
              >
                {{ item }}
              </li>
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
    </div>
  </main>
</template>

<script setup lang="ts">
const tabName = ref("presidential");
const selectTab = (tab: string) => {
  tabName.value = tab;
};

const cityList = await useFetch("/api/cityList");
const cityNames = cityList?.data?._rawValue?.map((city: any) => city.name) || [];

const selectedName = ref("");
const toggleSelect = (select: string) => {
  if (select === selectedName.value) {
    selectedName.value = "";
    return;
  }
  selectedName.value = select;
};

type SelectedDataType = {
  [key: string]: string;
};
const selectedData: SelectedDataType = ref({
  縣市: "",
  區域: "",
  鄉鎮: "",
});
const selectItem = (label: string, item: string) => {
  selectedData.value[label] = item;
  selectedName.value = "";
};

import _ from "lodash";
const emit = defineEmits(["update:loading"]);
const clearSelections = () => {
  // if (_.every(selectedData.value, _.isEmpty)) {
  //   alert("already empty clear");
  //   return;
  // }
  selectedData.value = {
    縣市: "",
    區域: "",
    鄉鎮: "",
  };
  emit("update:loading", true);
  setTimeout(() => {
    emit("update:loading", false);
  }, 1000);
  selectedName.value = "";
};
</script>

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
