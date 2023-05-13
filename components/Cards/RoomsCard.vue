<template>
    <div
        :class="`relative p-2 w-72 h-36 max-sm:w-40 rounded-2xl text-white font-mono font-bold flex justify-evenly items-center ${cardContent.cardName}`">
        <span class="relative left-3 text-2xl font-mono font-bold m-1">{{ cardContent.cardHeader }}</span>
        <span class="font-mono font-extralight text-2xl">{{ cardContent.cardValue }}</span>
    </div>
</template>
<script setup>
defineProps({ cardContent: Object })
</script>

<style lang="scss" scoped></style>