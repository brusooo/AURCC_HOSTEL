<template>
    <!-- <div :class="`relative p-2 w-270 max-sm:w-80 h-44  rounded-lg flex justify-start items-center ${cardContent.cardName}`">
        <img class="relative ml-auto -left-6 -translate-y-10 w-12 h-12" alt="" :src="cardContent.cardIcon"/>
        <h1 class="absolute bottom-4 left-3 text-2xl font-mono font-bold">{{  cardContent.cardName }}</h1>
        <h2 class="font-mono font-extralight text-2xl">{{ cardContent.cardEmail }}</h2>
       
    </div> -->
    <div class="flex items-center">
       <div class="w-1/5">
        <img class=" " alt="" :src="cardContent.cardIcon"/>

       </div>
    <div class="flex w-4/5 flex-col pl-10">
        <div> 
            <h1 class="left-3 text-3 font-mono font-bold">{{  cardContent.CardName }}</h1>
        </div>
  
        <div> 
            <h2 class="font-mono font-extralight text-sm">{{ cardContent.cardEmail }}</h2></div>
        </div>
    </div>

<!-- <div class="flex items-center">
  <div class="w-1/5">
    <img src="https://via.placeholder.com/150" alt="Profile Picture">
  </div>
  <div class="w-4/5 pl-4">
    <div class="font-bold text-lg">John Doe</div>
    <div class="text-gray-600">johndoe@example.com</div>
  </div>
</div> -->

</template>

<script setup>
defineProps({cardContent : Object})
</script>

<style lang="scss" scoped>

</style>