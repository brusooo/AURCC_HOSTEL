<template>
     <div :class="`relative p-2 w-24 h-18 max-sm:w-18 bg-[#99d98c] rounded-lg flex justify-evenly items-center ${cardContent.cardName}`">
        
        <span class="font-mono font-extralight text-2xl">{{ cardContent.cardValue }}</span> 
      
        
    </div>
</template>
<script setup>
defineProps({cardContent : Object})
</script>

<style lang="scss" scoped>

</style>