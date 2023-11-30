<template>
  <main>
    <div class="flex justify-start gap-[20px] w-full h-full">
      <h6
        class="text-disabled font-semibold p-s cursor-pointer"
        @click="selectTab('presidential')"
        :class="{ 'border-black border-b-4 !text-black': tabName === 'presidential' }"
      >
        第15任 總統副總統大選
      </h6>
      <h6
        class="text-disabled font-semibold p-s cursor-pointer"
        @click="selectTab('legislative')"
        :class="{ 'border-black border-b-4 !text-black': tabName === 'legislative' }"
      >
        第10任 立法委員選舉
      </h6>
    </div>
    <div class="flex flex-col justify-center items-center h-full gap-xxs">
      <div class="flex justify-start gap-[20px] w-full h-full">
        <div v-for="(label, index) in ['縣市', '區域', '鄉鎮']" :key="index">
          <div class="relative">
            <div
              class="bg-white h-10 flex items-center justify-between w-[156px] py-xxs px-s rounded-lg border relative"
              @click="toggleSelect(label)"
            >
              <h6 class="text-black font-semibold w-[100px] flex-none">
                {{ selectedData[label] ? selectedData[label] : '請選擇' }}
              </h6>
              <Icon
                name="fa-solid:chevron-down"
                width="55"
                :verticalFlip="selecedtName == label"
              />
            </div>
            <ul
              v-show="selecedtName == label"
              class="absolute bg-white w-full top-[36px] left-[0] rounded-lg overflow-hidden h-[204px] overflow-y-scroll"
            >
              <li class="hover:bg-neutral-200 block py-xxs px-l w-full cursor-pointer">
                請選擇
              </li>
              <li
                class="hover:bg-neutral-200 block py-xxs px-l w-full cursor-pointer"
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
        <div class="bg-white h-10 flex items-center justify-center cursor-pointer">
          <h6 class="text-disabled font-semibold" @click="clearSelections">清除</h6>
        </div>
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
const cityNames = cityList.data._rawValue?.map((city) => city.name);

const selecedtName = ref("");
const toggleSelect = (select: string) => {
  if (select === selecedtName.value) {
    selecedtName.value = "";
    return;
  }
  selecedtName.value = select;
};

const selectedData = ref({
  縣市: "",
  區域: "",
  鄉鎮: "",
});
const selectItem = (label: string, item: string) => {
  selectedData.value[label] = item;
  selecedtName.value = "";
};

const clearSelections = () => {
  selectedData.value = {
    縣市: "",
    區域: "",
    鄉鎮: "",
  };
};
</script>

<style lang="css">
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
