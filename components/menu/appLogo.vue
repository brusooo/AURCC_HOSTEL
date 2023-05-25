<template>
    <!-- App name with logo -->
    <div class="relative h-20 font-mono font-bold text-2xl flex justify-center items-center gap-6">
        <img :src="headerContent.imgUrl" alt="" class="w-8 h-8" />
        <h2>{{ headerContent.textContent }}</h2>
    </div>
</template>

<script setup>
defineProps({
    headerContent: Object
})
</script>

<style scoped></style>