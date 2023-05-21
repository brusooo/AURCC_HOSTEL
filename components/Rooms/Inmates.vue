<template>
    <div class="relative w-full py-3 bg-crimson flex justify-center items-center  gap-2  rounded-md overflow-hidden"
        v-for="inmate in inmates">
        <img src="/images/general/profile1.png" alt="" class="w-12 h-12 rounded-full">
        <div class="flex flex-col font-mono text-black">
            <!-- <h3 class="font-bold">Brusooo</h3> -->
            <h3 class="text-sm">{{ inmate }}</h3>
        </div>
    </div>
</template>

<script setup>
defineProps({
    inmates: Object
})


</script>

<style scoped></style>