<template>
    <div @click="setHostelRoomId"
        :class="` cursor-pointer relative p-1 w-14 max-sm:w-18 h-full ${cardContent.occupied ? 'bg-crimson' : 'bg-[#C6FEBD]'} rounded-lg flex justify-evenly items-center`">
        <span class="font-mono font-extralight text-lg">{{ cardContent.roomno }}</span>
    </div>
</template>
<script setup>
const room = defineProps({ cardContent: Object, hostelRoomsByCat: Function, })

//active hostel ID
const activeHostelRoomId = getActiveHostelRoomId()
const activeHostelRoomNo = getActiveHostelRoomNo()
const activeHostel = getActiveHostel()

const setHostelRoomId = () => {
    activeHostelRoomId.value = room.cardContent.id;
    activeHostelRoomNo.value = room.cardContent.roomno;
    room.hostelRoomsByCat(activeHostel.value)
}

</script>

<style lang="scss" scoped></style>