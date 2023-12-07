<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import * as chartConfig from "~/assets/js/chartConfig.ts";
ChartJS.register(ArcElement, Tooltip);

const mutableHeight = ref("inherit");
const myStyles = computed(() => ({
  height: `${mutableHeight.value} `,
  width: "inherit",
  position: "relative",
  top: "0px",
  left: "0px",
  zIndex: "1",
}));

const isToggleArrow = ref(true);

const updateWindowSize = () => {
  if (window.innerWidth < 640) {
    isToggleArrow.value = false;
  } else {
    isToggleArrow.value = true;
  }
};
onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
  // 立即調用一次，以確保初始狀態正確
  updateWindowSize();
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWindowSize);
});

// Move hardcoded data to a reactive property
const voteData = ref([
  {
    party: "民主進步黨",
    candidates: ["蔡英文", "賴清德"],
    percentage: "57.13%",
    votes: "14,464,571 票",
    color: "bg-numberThree",
  },
  {
    party: "中國國民黨",
    candidates: ["韓國瑜", "張善政"],
    percentage: "57.13%",
    votes: "14,464,571 票",
    color: "bg-numberTwo",
  },
  {
    party: "親民黨",
    candidates: ["宋楚瑜", "余湘"],
    percentage: "57.13%",
    votes: "14,464,571 票",
    color: "bg-numberOne",
  },
]);
</script>

<template>
  <div
    class="mt-2xl h-auto rounded-lg bg-white p-l sm:h-full sm:w-[270px] sm:space-y-l"
  >
    <div class="relative flex items-center justify-between">
      <h6 class="font-bold text-inherit sm:font-semibold">投票概況</h6>
      <Icon
        name="fa-solid:chevron-down"
        width="55"
        :verticalFlip="isToggleArrow"
        class="w-[24px] opacity-100 sm:w-[55px] sm:opacity-0"
      />
      <span
        @click="isToggleArrow = !isToggleArrow"
        class="absolute bottom-[0px] left-[0px] right-[0px] top-[0px] block cursor-pointer sm:hidden"
      ></span>
    </div>
    <section
      class="h-[0px] space-y-xl sm:space-y-3xl overflow-y-hidden transition-all duration-500 sm:h-auto"
      :class="{ 'mt-l h-[280px] ': isToggleArrow }"
    >
      <div
        class="flex flex-row items-center justify-start gap-x-s sm:flex-col sm:items-start sm:justify-center sm:gap-x-[0px] sm:space-y-l"
      >
        <div class="relative flex items-center justify-start gap-s sm:gap-l">
          <div
            class="!z-[1] h-[72px] w-[72px] border-none border-blue-800 sm:h-[120px] sm:w-[120px]"
          >
            <Doughnut
              :data="chartConfig.dataS1"
              :options="chartConfig.optionsS1"
              :style="myStyles"
            />
          </div>
          <div class="flex flex-col items-center justify-start">
            <h6 class="font-semibold">74.9%</h6>
            <h6 class="h7 font-semibold">投票率</h6>
          </div>
        </div>
        <div class="space-y-3xl">
          <div class="sm:h7 h8 space-y-xs font-bold sm:font-semibold">
            <p class="space-x-xs">
              <span>投票率</span>
              <span>14,464,571 票</span>
            </p>
            <p class="space-x-xs">
              <span>無效票數</span>
              <span>14,464,571 票</span>
            </p>
            <p class="space-x-xs">
              <span>有效票數</span>
              <span>14,464,571 票</span>
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-x-s space-y-l sm:flex-col sm:gap-x-[0px]">
        <div class="flex items-center justify-between gap-l">
          <div
            class="relative h-[72px] w-[72px] border-none border-blue-800 sm:h-[120px] sm:w-[120px]"
          >
            <Doughnut
              :data="chartConfig.dataS2"
              :options="chartConfig.optionsS2"
              :style="myStyles"
            />
          </div>
        </div>
        <div class="space-y-l">
          <div
            class="h7 space-y-xs font-semibold"
            v-for="(data, index) in voteData"
            :key="index"
          >
            <div class="flex gap-xxs sm:gap-s">
              <span
                class="h8 h-[24px] rounded-full pb-[3px] pl-[8px] pr-[9px] pt-[4px] text-white"
                :class="data.color"
                >{{ index + 1 }}</span
              >
              <div class="w-[104px] border-r-2 border-gray-400 pr-s">
                <p class="sm:h7 h8 font-normal sm:font-semibold">
                  {{ data.party }}
                </p>
                <p
                  class="h8 flex items-center justify-between font-semibold child:flex-none"
                >
                  <span>{{ data.candidates[0] }}</span>
                  <span class="px-[5px] align-middle">|</span>
                  <span>{{ data.candidates[1] }}</span>
                </p>
              </div>
              <div>
                <p class="h7 font-semibold">{{ data.percentage }}</p>
                <p class="h8 flex flex-none items-center justify-between">
                  {{ data.votes }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
