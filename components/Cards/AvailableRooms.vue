<template>
    <div
        :class="`relative p-1 w-14 max-sm:w-18 h-full ${cardContent.occupied ? 'bg-crimson' : 'bg-[#C6FEBD]'} rounded-lg flex justify-evenly items-center`">
        <span class="font-mono font-extralight text-lg">{{ cardContent.roomNo }}</span>
    </div>
</template>
<script setup>
defineProps({ cardContent: Object })
</script>

<style lang="scss" scoped></style>