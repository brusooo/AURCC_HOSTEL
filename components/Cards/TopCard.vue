<template>
    <div :class="`relative p-2 w-270 max-sm:w-80 h-44  rounded-lg flex justify-start items-center ${cardContent.cardName}`">
        <h1 class="absolute bottom-4 left-3 text-white text-2xl font-mono font-bold">{{  cardContent.cardHeader }}</h1>
        <h2 class="font-mono font-extralight text-white text-2xl">&#8377{{ cardContent.cardValue }}</h2>
        <img class="relative ml-auto -left-6 -translate-y-10 w-12 h-12" alt="" :src="cardContent.cardIcon"/>
    </div>
</template>

<script setup>
defineProps({cardContent : Object})
</script>

<style lang="scss" scoped>

</style>