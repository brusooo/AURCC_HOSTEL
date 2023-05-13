<template>
  <div class="flex items-center">
    <div class="w-1/5">
      <img class=" " alt="" :src="cardContent.cardIcon" />

    </div>
    <div class="flex w-4/5 flex-col pl-10">
      <div>
        <h1 class="left-3 text-3 font-mono font-bold">{{ cardContent.CardName }}</h1>
      </div>

      <div>
        <h2 class="font-mono font-extralight text-sm">{{ cardContent.cardEmail }}</h2>
      </div>
    </div>
  </div>

</template>

<script setup>
defineProps({ cardContent: Object })
</script>

<style lang="scss" scoped></style>