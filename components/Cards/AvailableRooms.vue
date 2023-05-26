<template>
  <div
    v-for="roomsCards in availableRooms"
    :class="` cursor-pointer relative p-1 w-20 max-sm:w-18 h-10 ${
      roomsCards.occupied ? 'bg-crimson' : 'bg-[#C6FEBD]'
    } rounded-lg flex justify-center items-center`"
    @click="
      () => {
        setHostelRoomId(roomsCards);
        hostelRoomsByCat(activeHostel);
      }
    "
  >
    <span class="font-mono font-extralight text-lg">{{
      roomsCards.roomno
    }}</span>
  </div>
</template>
<script setup>
defineProps({
  availableRooms: Object,
  hostelRoomsByCat: Function,
});

//active hostel ID
const activeHostelRoomId = getActiveHostelRoomId();
const activeHostelRoomNo = getActiveHostelRoomNo();
const activeHostel = getActiveHostel();

const setHostelRoomId = (roomDetails) => {
  activeHostelRoomId.value = roomDetails.id;
  activeHostelRoomNo.value = roomDetails.roomno;
};
</script>

<style lang="scss" scoped></style>
