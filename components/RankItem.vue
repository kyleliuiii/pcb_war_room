<script setup>
const props = defineProps(['index'])
</script>
<template>
    <div class="flex p-1 items-center rank-item">
        <div class="text-md text-center rank-item_index">{{index}}</div>
        <div class="p-2">機台{{index}}</div>
    </div>
</template>
<style scoped>
.rank-item {
    height: 25%;
}
.rank-item_index{
    line-height: 40px;
        border:1px solid rgba(0, 255, 166, 0.1);
        background:rgba(0, 255, 166, 0.05);
        width: 40px;
        height: 40px;
}
</style>
