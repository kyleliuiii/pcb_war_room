<template>
  <div class="w-full bg-black">
    <div class="machine-title">{{deviceName}}</div>
    <div class="flex flex-col justify-between w-full">
      <ChartsLineChart></ChartsLineChart>
      <div class="py-2 text-sm text-bold text-center">
        電能轉換比<span style="color: #1de9b6">（25/32）</span>mV
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:["deviceName"]
}
</script>
<style scoped>
.machine-title {
  z-index: 10;
  width: 100px;
  height: 28px;
  padding: 0em 1em 0.8em 0.2em;
  top: 21px;
  left: 50px;
  transform: translate(-50%, -50%);
  position: relative;
  color: #fff;
  font-size: 0.85rem;
}
.machine-title::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background: rgba(255, 255, 255, 0.1);
  border-right: 3px solid #fff;
  transform-origin: left;
  transform: perspective(0.2em) rotateX(-1deg) scale(1.3);
}
</style>
