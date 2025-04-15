<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const test = ref([]);
const deviceLog = ref([
  { id: 0, name: "test", timestamp: "1243" },
  { id: 0, name: "test", timestamp: "1243" },
  { id: 1, name: "test", timestamp: "1243" },
]);
const columns = ref([
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
]);
const rows = ref([
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
]);
const rankData = ref([
  { name: "辦公室1F", data: [80, 40, 59] },
  { name: "製程2F", data: [20, 64, 32] },
  { name: "製程3F", data: [23, 64, 23] },
  { name: "冰水主機4F", data: [21, 75, 25] },
]);
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
  }, 5000);
});
</script>
<template>
  <div class="h-screen relative z-10 pointer-events-none overflow-hidden">
    <div class="text-white p-2">綠色電子感知與高密度基板低碳製程技術計畫</div>
    <div class="text-white w-[360px]">
      <div class="target-label flex justify-around p-1">
        <div class="">總碳排指標</div>
        <div style="font-size: 2.5rem">
          {{ total
          }}<span class="text-bold" style="font-size: 0.75rem"
            >&nbsp;kgCO₂e</span
          >
        </div>
      </div>
      <div class="flex justify-between items-center text-sm font-light p-1">
        <div>各樓層碳排排名</div>
        <div class="flex font-light">
          <div class="tag1">台電</div>
          <span class="tag2">綠能</span>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div
          v-for="(item, index) in rankData"
          :key="item.name"
          class="bg-[#00abc171] p-1"
        >
          <div>{{ item.name }}</div>
          <div class="flex flex-col font-light text-sm gap-1">
            <div class="flex items-baseline">
              <div style="width: 120px">實際碳排量</div>
              <div
                class="percent1"
                :style="`width:${item.data[0]}%`"
                :key="item.data[0]"
                style="border-radius: 8px; height: 8px"
              ></div>
            </div>
            <div class="flex items-baseline">
              <div style="width: 120px">減碳模擬後碳排量</div>
              <div
                class="percent1"
                :style="`width:${item.data[1]}%`"
                style="border-radius: 8px; height: 8px"
              ></div>
            </div>
            <div class="flex items-baseline">
              <div style="width: 120px">減量％</div>
              <div
                class="percent1"
                :style="`width:${item.data[2]}%`"
                style="border-radius: 8px; height: 8px"
              ></div>
            </div>
            <div
              class="percent1"
              style="border-radius: 15px; height: 8px; width: 100%"
            >
              <div
                class="percent2"
                style="
                  border-radius: 15px 0 0 15px;
                  width: 80%;
                  background-color: aquamarine;
                  height: 100%;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
      <!-- right box -->
      <div
        class="absolute h-full right-0 top-0 z-2"
        @click="router.push('/s1')"
      >
        <div class="w-[360px]">
          <div class="flex">
            <div
              class="text-center"
              style="flex-grow: 1; background: rgb(0, 105, 92)"
            >
              <div class="text-overline" style="color: #bdbdbd">冰機1</div>
              <div class="text-h6" style="color: #1de9b6">
                {{ test[0] }}
                <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
              </div>
            </div>
            <div
              class="text-center"
              style="flex-grow: 1; background: rgb(0, 105, 92, 0.9)"
            >
              <div class="text-overline" style="color: #bdbdbd">冰機2</div>
              <div class="text-h6" style="color: #1de9b6">
                {{ test[1] }}
                <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
              </div>
            </div>
            <div
              class="text-center"
              style="flex-grow: 1; background: rgb(0, 105, 92, 0.8)"
            >
              <div class="text-overline" style="color: #bdbdbd">冰機3</div>
              <div class="text-h6" style="color: #1de9b6">
                {{ test[2] }}
                <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
              </div>
            </div>
            <div
              class="text-center"
              style="flex-grow: 1; background: rgb(0, 105, 92, 0.7)"
            >
              <div class="text-overline" style="color: #bdbdbd">冰機4</div>
              <div class="text-h6" style="color: #1de9b6">
                {{ test[3] }}
                <span style="font-size: 0.8rem; color: #bdbdbd">%</span>
              </div>
            </div>
          </div>
          <div class="text-center" style="width: 100%; margin-top: 0.2em">
            <div class="flex" style="background: rgba(0, 188, 212, 0.025)">
              <div class="text-center" style="margin-top: -8px">
                <ChartsRadialBarChart></ChartsRadialBarChart>
                <div
                  class="text-overline"
                  style="color: #fff; margin-top: -20px"
                >
                  1F
                </div>
              </div>
              <div class="text-center" style="margin-top: -8px">
                <ChartsRadialBarChart></ChartsRadialBarChart>
                <div
                  class="text-overline"
                  style="color: #fff; margin-top: -20px"
                >
                  2F
                </div>
              </div>
              <div class="text-center" style="margin-top: -8px">
                <ChartsRadialBarChart></ChartsRadialBarChart>
                <div
                  class="text-overline"
                  style="color: #fff; margin-top: -20px"
                >
                  3F
                </div>
              </div>
              <div class="text-center" style="margin-top: -8px">
                <ChartsRadialBarChart></ChartsRadialBarChart>
                <div
                  class="text-overline"
                  style="color: #fff; margin-top: -20px"
                >
                  4F
                </div>
              </div>
            </div>

            <div
              class="container_title"
              @click="router.push('/s1')"
              style="position: relative; z-index: 20; cursor: pointer"
            >
              各樓層用電量
            </div>
            <ChartsBarChart></ChartsBarChart>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom box -->
    <div
      class="absolute bottom-0 flex items-center justify-between no-wrap w-full text-white"
    >
      <div class="container">
        <div class="p-1">1F用電量</div>
        <ChartsLineChart></ChartsLineChart>
      </div>
      <div class="container">
        <div class="p-1">2F用電量</div>
        <ChartsLineChart></ChartsLineChart>
      </div>
      <div class="container">
        <div class="p-1">3F用電量</div>
        <ChartsLineChart></ChartsLineChart>
      </div>
      <div class="container">
        <div class="p-1">4F用電量</div>
        <ChartsLineChart></ChartsLineChart>
      </div>
      <div class="container">
        <div class="p-1">樓層用電量排名</div>
        <ChartsLineChart></ChartsLineChart>
      </div>
    </div>
  </div>
  <Model class="fixed top-0 bg" :modelFile="'building5.glb'"></Model>
</template>
<style>
.container {
  backdrop-filter: blur(5px);
  background: rgba(21, 21, 21, 0.3);
  &_title {
    background: rgba(0, 131, 143, 0.9);
  }
}
.target-label {
  background: -webkit-linear-gradient(left, #00695c, #00acc1);
  background: -o-linear-gradient(right, #00695c, #00acc1);
  background: -moz-linear-gradient(right, #00695c, #00acc1);
  background: linear-gradient(to right, #00695c, #00acc1);
}
.tag1 {
  width: 80px;
}
.tag1::before {
  content: "";
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: #00838f;
  margin-right: 8px;
}
.tag2 {
  width: 80px;
}
.tag2::before {
  content: "";
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: #ffab00;
  margin-right: 8px;
}
.percent1 {
  background: -webkit-linear-gradient(left, #ffab00, #ffeb3b);
  background: -o-linear-gradient(right, #ffab00, #ffeb3b);
  background: -moz-linear-gradient(right, #ffab00, #ffeb3b);
  background: linear-gradient(to right, #ffab00, #ffeb3b);
}
.percent2 {
  background: -webkit-linear-gradient(left, #00838f, #00bfa5);
  background: -o-linear-gradient(right, #00838f, #00bfa5);
  background: -moz-linear-gradient(right, #00838f, #00bfa5);
  background: linear-gradient(to right, #00838f, #00bfa5);
}
.bg {
  /* webpackIgnore: true */
  background-image: url("../assets/background.png");
  background-size: cover;
  background-position: left top;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
