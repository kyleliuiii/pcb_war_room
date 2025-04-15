<template>
  <div class="page-wrapper">
    <NuxtPage :key="$route.fullPath" />
  </div>
</template>

<style>
.page-wrapper {
  background-color: black; /* 背景設為黑色 */
  perspective: 1500px; /* 增加 3D 透視效果 */
  overflow: hidden; /* 隱藏滾動條 */
}

/* 定義過渡效果 */
.page-enter-active,
.page-leave-active {
  transition: transform 1.5s ease, opacity 1.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateZ(-1000px) scale(0.8) rotateX(15deg); /* 從遠處進入且稍微傾斜 */
}

.page-enter-to {
  opacity: 1;
  transform: translateZ(0) scale(1) rotateX(0deg); /* 回到正常視角 */
}

.page-leave-from {
  opacity: 1;
  transform: translateZ(0) scale(1);
}

.page-leave-to {
  opacity: 0;
  transform: translateZ(-1000px) scale(0.8) rotateX(-15deg); /* 遠離畫面並稍微傾斜 */
}
</style>
