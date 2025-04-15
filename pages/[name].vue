<script setup>
import { ArrowBigRight, Cpu } from "lucide-vue-next";
definePageMeta({
  pageTransition: {
    name: "page", // 確保這裡與 app.vue 中的 CSS 類名稱相同
  },
});
const test = ref([]);

// 用於顯示動畫
const showFlow = ref(false);
const rankId = [1, 2, 3, 4, 5, 6, 7, 8];
const deviceLog = [
  { id: 0, name: "test", timestamp: new Date() },
  { id: 0, name: "test", timestamp: new Date() },
  { id: 1, name: "test", timestamp: new Date() },
];
const columns = [
  { name: "id", label: "Id", align: "center", field: "id" },
  { name: "name", align: "center", label: "名稱", field: "name" },
  {
    name: "utilization",
    align: "center",
    label: "稼動率",
    field: "utilization",
  },
  {
    name: "electricity",
    align: "center",
    label: "用電量",
    field: "electricity",
  },
  { name: "energy", align: "center", label: "能耗比", field: "energy" },
];
const rows = [
  {
    id: 1,
    name: "機台名稱",
    utilization: "6.0%",
    electricity: 1000,
    energy: "4.0%",
  },
  {
    id: 2,
    name: "機台名稱",
    utilization: "9.0%",
    electricity: 1000,
    energy: "4.3%",
  },
  {
    id: 3,
    name: "機台名稱",
    utilization: "16.0%",
    electricity: 1000,
    energy: "6.0%",
  },
  {
    id: 4,
    name: "機台名稱",
    utilization: "3.7%",
    electricity: 1000,
    energy: "4.3%",
  },
  {
    id: 5,
    name: "機台名稱",
    utilization: "16.0%",
    electricity: 1000,
    energy: "3.9%",
  },
  {
    id: 6,
    name: "機台名稱",
    utilization: "0.0%",
    electricity: 1000,
    energy: "0.0%",
  },
  {
    id: 7,
    name: "機台名稱",
    utilization: "0.2%",
    electricity: 1000,
    energy: "0%",
  },
  {
    id: 8,
    name: "機台名稱",
    utilization: "3.2%",
    electricity: 1000,
    energy: "6.5%",
  },
  {
    id: 9,
    name: "機台名稱",
    utilization: "25.0%",
    electricity: 1000,
    energy: "4.9%",
  },
  {
    id: 10,
    name: "機台名稱",
    utilization: "26.0%",
    electricity: 1000,
    energy: "7%",
  },
];
const total = ref(15158);
const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
onMounted(() => {
  setInterval(() => {
    test.value = [
      getRandom(100, 0),
      getRandom(100, 0),
      getRandom(100, 0),
      getRandom(100, 0),
    ];
    total.value = getRandom(20000, 15158);
    rankData.value = [
      {
        name: "辦公室1F",
        data: [getRandom(50, 20), getRandom(50, 20), getRandom(50, 20)],
      },
      {
        name: "製程2F",
        data: [getRandom(50, 20), getRandom(50, 20), getRandom(50, 20)],
      },
      {
        name: "製程3F",
        data: [getRandom(50, 20), getRandom(50, 20), getRandom(50, 20)],
      },
      {
        name: "冰水主機4F",
        data: [getRandom(50, 20), getRandom(50, 20), getRandom(50, 20)],
      },
    ];
  }, 10000);
}); // 處理 3D 模型加載完成的函數
const handleModelLoaded = () => {
  console.log("3D 模型加載完成，顯示動畫");
  showFlow.value = true;
  setTimeout(() => {
    showFlow.value = false;
  }, 10000); // 10 秒後隱藏動畫
};
</script>
<template>
  <div class="relative h-screen bg-black text-white">
    <div class="title h-[80px]">
      <div class="absolute w-[350px] left-0 top-12 text-md z-[20] font-bold">
        綠色電子感知與高密度基板低碳製程技術計畫
      </div>
    </div>
    <template v-if="showFlow">
      <!-- 右側滾動箭頭流 -->
      <div
        class="max-w-[19rem] absolute overflow-hidden w-full -rotate-72 right-[18%] top-[50%] xl:right-[25%] xl:top-[52%] 2xl:right-[27%] 2xl:top-[51%]"
      >
        <div
          class="inline-flex whitespace-nowrap animate-seamlessScroll space-x-4 p-2"
        >
          <!-- 統一的顏色，深藍色 -->
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-xl"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-xl"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- 上側滾動箭頭流 -->
      <div
        class="max-w-[15rem] absolute overflow-hidden w-full -rotate-162 right-[26%] top-[30%] xl:right-[30%] xl:top-[30%] 2xl:right-[34%] 2xl:top-[31%]"
      >
        <div
          class="inline-flex whitespace-nowrap animate-seamlessScroll space-x-4 p-2"
        >
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-lg"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-lg"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- 中間滾動箭頭流 -->
      <div
        class="max-w-[4rem] 2xl:max-w-[3.5rem] absolute overflow-hidden w-full rotate-113 right-[44%] top-[31%] 2xl:right-[47%] 2xl:top-[33%]"
      >
        <div
          class="inline-flex whitespace-nowrap animate-seamlessScroll space-x-4 p-2"
        >
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-lg"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-lg"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      <!-- 底部滾動箭頭流 -->
      <div
        class="max-h-[4rem] max-w-[26rem] absolute overflow-hidden w-full -rotate-162 right-[28%] top-[36%] xl:right-[34%] xl:top-[37%] 2xl:right-[35%] 2xl:top-[39%]"
      >
        <div
          class="inline-flex whitespace-nowrap animate-seamlessScroll space-x-4 p-2"
        >
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-lg"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-for="i in 10"
            :key="`arrow-${i}`"
            size="35"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8 text-[#f87171]/80 drop-shadow-lg"
          >
            <path d="M14 6H6v8h8V6Z" />
            <path
              fill-rule="evenodd"
              d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </template>

    <!-- rightBox -->
    <div
      class="container q-ma-xs flex flex-col"
      style="position: fixed; top: 0; right: 0; height: 70%; width: 22%"
    >
      <!-- test -->
      <div class="flex justify-around">
        <div
          class="text-center"
          style="background: rgba(0, 188, 212, 0.1); flex-grow: 1"
        >
          <div class="text-overline" style="color: #bdbdbd">冰機1</div>
          <div class="text-h6" style="color: #1de9b6">
            {{ test[0] }}
            <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
          </div>
        </div>
        <div
          class="text-center"
          style="background: rgba(0, 188, 212, 0.15); flex-grow: 1"
        >
          <div class="text-overline" style="color: #bdbdbd">冰機2</div>
          <div class="text-h6" style="color: #1de9b6">
            {{ test[1] }}
            <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
          </div>
        </div>
        <div
          class="text-center"
          style="background: rgba(0, 188, 212, 0.2); flex-grow: 1"
        >
          <div class="text-overline" style="color: #bdbdbd">冰機3</div>
          <div class="text-h6" style="color: #1de9b6">
            {{ test[2] }}
            <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
          </div>
        </div>
        <div
          class="text-center"
          style="background: rgba(0, 188, 212, 0.25); flex-grow: 1"
        >
          <div class="text-overline" style="color: #bdbdbd">冰機4</div>
          <div class="text-h6" style="color: #1de9b6">
            {{ test[3] }}
            <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
          </div>
        </div>
      </div>
      <div class="container_title p-1">用電量排名</div>
      <div
        class="flex flex-col justify-between flex-wrap"
        style="width: 100%; height: 40%"
      >
        <RankItem
          :index="id"
          v-for="(id, index) in rankId"
          :key="index"
        ></RankItem>
      </div>

      <div class="container_title q-pa-sm">詳細資料</div>
      <q-table
        :data="rows"
        :columns="columns"
        row-key="name"
        class="p-1"
        style="width: 100%; background: none; color: #fff"
      ></q-table>
    </div>
    <Model :modelFile="'factory.glb'" @loaded="handleModelLoaded"></Model>
    <div class="p-2 fixed bottom-0 left-0 h-[20%] w-full">
      <div class="flex items-center justify-between no-wrap w-full h-full">
        <DeviceCardView deviceName="機台1"></DeviceCardView>
        <DeviceCardView deviceName="機台2"></DeviceCardView>
        <DeviceCardView deviceName="機台3"></DeviceCardView>
        <DeviceCardView deviceName="機台4"></DeviceCardView>
        <DeviceCardView deviceName="機台5"></DeviceCardView>
        <DeviceCardView deviceName="機台6"></DeviceCardView>
        <!-- <DeviceCardView></DeviceCardView>
              <DeviceCardView></DeviceCardView> -->
      </div>
    </div>
    <div
      class="q-pa-xs column items-center justify-between"
      style="position: fixed; top: 0; left: 0; height: 75%; width: 20%"
    >
      <div
        class="target-label flex justify-around text-white"
        style="height: 10%; width: 100%"
      >
        <div class="q-pa-sm text-subtitle2">碳排指標</div>
        <div style="font-size: 2.5rem">
          {{ total
          }}<span class="text-bold" style="font-size: 0.75rem"
            >&nbsp;kgCO₂e</span
          >
        </div>
      </div>
      <div class="container" style="height: 40%; width: 100%">
        <div class="container_title q-pa-sm">台電/綠電比</div>
        <div class="flex justify-around pt-4">
          <div
            class="text-bold text-center"
            style="font-size: 0.85rem; width: 50%; color: #fff"
          >
            台電/綠能比<ChartsPieChart></ChartsPieChart>
          </div>
          <div
            class="text-bold text-center"
            style="font-size: 0.85rem; width: 50%; color: #fff"
          >
            調控策略<ChartsPieChart></ChartsPieChart>
          </div>
        </div>
      </div>
      <div class="container" style="height: 44.5%; width: 100%">
        <div class="container_title q-pa-sm">電表總量細分</div>
        <ChartsDevicePieChart></ChartsDevicePieChart>
      </div>
    </div>
  </div>
</template>

<style>
.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #131313;
  padding: 0 0.3em;
  text-shadow: 1px 1px 3px #fff;
  /* #021024
      052659
      5483B3
      7DA0CA
      C1E8FF */
}
.title {
  z-index: 50;
  width: 300px;
  padding: 0.5em 1em 0.35em;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  color: #fff;
}
.title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.1);
  border-left: 5px solid #1de9b6;
  border-right: 5px solid #1de9b6;
  transform-origin: bottom;
  box-shadow: 5px 0px 10px rgba(0, 255, 166, 0.2) inset,
    -5px 0px 10px rgba(0, 255, 166, 0.2) inset;
  transform: perspective(0.5em) rotateX(-2deg) scale(1.3);
}
.target-label {
  background: -webkit-linear-gradient(left, #00695c, #00acc1);
  background: -o-linear-gradient(right, #00695c, #00acc1);
  background: -moz-linear-gradient(right, #00695c, #00acc1);
  background: linear-gradient(to right, #00695c, #00acc1);
}
</style>
