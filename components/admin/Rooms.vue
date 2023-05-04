<template>
    <div class="flex h-screen">
        <div class="w-4/5 h-full bg-gray-200">
           <!-- <div class="relative w-full h-auto flex flex-wrap md:gap-8 sm:gap-5 gap-3 justify-start items-center "> -->
              <!-- <Checkbox v-for="elem in roomGenderValues " :labelValue="elem" /> -->
            <div class="w-3/5 flex justify-start gap-5 p-3">
                  <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" @click="showBoysRooms = true, showGirlsRooms = false">
                        Boys
                  </div>
                  <div class="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded cursor-pointer" @click="showGirlsRooms = true, showBoysRooms = false">
                        Girls
                  </div>

            </div>
            <div class="relative top-12  flex flex-wrap justify-evenly items-center gap-9 mb-16">
            <span v-for="cardElement in studentRoomCards">
            <CardsRoomsCard :cardContent="cardElement" />

            </span>
            </div>

            
              
            <div class="relative top-12 flex flex-wrap justify-evenly  gap-3">
            <span v-for="cardElement in roomsCards">
            <CardsAvailableRooms :cardContent="cardElement" />
            </span>
            </div>


            
                 
        </div>

        <div class="w-2/5 h-full bg-gray-100 p-4">
            <div v-for="cardElement in student">
                  <CardsStudentsCard :cardContent="cardElement" />
            </div>
           

        </div>
              
    </div>

  

 </template>

<script setup>
import { roomsCards, studentRoomCards,student} from '../../constants/index.ts';


</script>

<style scoped>

</style>
