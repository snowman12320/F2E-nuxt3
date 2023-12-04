<script lang="ts" setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '~/assets/js/chartConfig.ts'
ChartJS.register(ArcElement, Tooltip)

const mutableHeight = ref('inherit')
const myStyles = computed(() => ({
  height: `${mutableHeight.value} `,
  width: 'inherit',
  position: 'relative',
  top: '0px',
  left: '0px',
  zIndex: '1'
}))

const isToggleArrow = ref(true)
</script>

<template>
  <div class="mt-2xl sm:space-y-l rounded-lg bg-white p-l sm:h-[619px] sm:w-[270px]">
    <div class="flex items-center justify-between relative " >
      <h6 class="font-bold text-inherit sm:font-semibold">投票概況</h6>
      <Icon
        name="fa-solid:chevron-down"
        width="55"
        :verticalFlip="isToggleArrow"
        class="w-[24px] opacity-100 sm:w-[55px] sm:opacity-0"
      />
      <span @click="isToggleArrow = !isToggleArrow" class="absolute top-[0px] left-[0px] right-[0px] bottom-[0px] block sm:hidden cursor-pointer"></span>
    </div>
    <section class="h-[0px] sm:h-auto space-y-3xl transition-all duration-500 overflow-y-hidden " :class="{ 'h-[280px] mt-l ': isToggleArrow }">
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
      <div
        class="flex flex-row gap-x-s space-y-l sm:flex-col sm:gap-x-[0px]"
      >
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
          <div class="h7 space-y-xs font-semibold">
            <div class="flex gap-xxs sm:gap-s">
              <span
                class="h8 h-[24px] rounded-full bg-numberThree pb-[3px] pl-[8px] pr-[9px] pt-[4px] text-white"
                >3</span
              >
              <div class="w-[104px] border-r-2 border-gray-400 pr-s">
                <p class="sm:h7 h8 font-normal sm:font-semibold">民主進步黨</p>
                <p class="h8 child:flex-none flex items-center justify-between font-semibold">
                  <span>蔡英文</span>
                  <span class="px-[5px] align-middle">|</span>
                  <span>賴清德</span>
                </p>
              </div>
              <div>
                <p class="sm:h7 h8 font-normal sm:font-semibold">57.13%</p>
                <p class="h8 flex flex-none items-center justify-between">14,464,571 票</p>
              </div>
            </div>
            <div class="flex gap-xxs sm:gap-s">
              <span
                class="h8 h-[24px] rounded-full bg-numberTwo pb-[3px] pl-[8px] pr-[9px] pt-[4px] text-white"
                >2</span
              >
              <div class="w-[104px] border-r-2 border-gray-400 pr-s">
                <p class="sm:h7 h8 font-normal sm:font-semibold">中國國民黨</p>
                <p class="h8 child:flex-none flex items-center justify-between font-semibold">
                  <span>韓國瑜</span>
                  <span class="px-[5px] align-middle">|</span>
                  <span>張善政</span>
                </p>
              </div>
              <div>
                <p class="h7 font-semibold">57.13%</p>
                <p class="h8 flex flex-none items-center justify-between">14,464,571 票</p>
              </div>
            </div>
            <div class="flex gap-xxs sm:gap-s">
              <span
                class="h8 h-[24px] rounded-full bg-numberOne pb-[3px] pl-[8px] pr-[9px] pt-[4px] text-white"
                >1</span
              >
              <div class="w-[104px] border-r-2 border-gray-400 pr-s">
                <p class="h7 font-semibold">親民黨</p>
                <p class="h8 child:flex-none flex items-center justify-between font-semibold">
                  <span>宋楚瑜</span>
                  <span class="px-[5px] align-middle">|</span>
                  <span>余湘</span>
                </p>
              </div>
              <div>
                <p class="h7 font-semibold">57.13%</p>
                <p class="h8 flex flex-none items-center justify-between">14,464,571 票</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>