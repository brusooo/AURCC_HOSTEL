<template>
    <div class="relative w-1/2 h-11 text  flex justify-center items-center cursor-pointer"
        @click="hostelRoomsByCat(activeHostel)">
        <div class="absolute top-0 left-0 w-full h-full z-30" @click="setActiveHostel"></div>
        <div
            :class="`absolute flex rounded-md z-20 w-2/5 h-4/5 mx-2 transition-all duration-600  ${activeHostel == 'boys' ? 'right-0 bg-blue-600' : 'left-0 bg-pink-600'}`">
        </div>
        <div
            :class="`absolute top-0 left-0 rounded-lg w-full h-full z-1 transition-all delay-100 ${activeHostel == 'boys' ? 'bg-blue-100' : 'bg-pink-100'}`">
        </div>
        <span v-for="hostel in hostelCat" class="w-1/2 z-10 text-xs font-bold flex justify-center items-center">
            {{ hostel }}
        </span>

    </div>
</template>

<script setup>
defineProps({
    hostelRoomsByCat: Function
})

const activeHostel = getActiveHostel();

const hostelCat = ref(["boys", "girls"])
function setActiveHostel() {
    activeHostel.value == "boys" ? activeHostel.value = "girls" : activeHostel.value = "boys"
}

</script>

<style scoped></style>