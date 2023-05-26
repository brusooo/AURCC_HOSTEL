<template>
  <div
    v-for="item in cards"
    :class="`relative p-2 w-72 h-36 max-sm:w-40 rounded-2xl text-white font-mono font-bold flex justify-evenly items-center ${item.cardHeader}`"
  >
    <span class="relative left-3 text-2xl font-mono font-bold m-1">{{
      item.cardHeader
    }}</span>
    <span class="font-mono font-extralight text-2xl">{{ item.cardValue }} {{ cnt }}</span>
  </div>
</template>
<script setup>
defineProps({ cards: Array });


</script>

<style lang="scss" scoped></style>
