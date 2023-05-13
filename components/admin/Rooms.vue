<template>
      <div class="flex h-[88%]">
            <div class="flex flex-col w-4/5 ">
                  <div class="flex w-full h-[30%] justify-center items-center gap-10">
                        <span v-for="cardElement in studentRoomCards">
                              <CardsRoomsCard :cardContent="cardElement" />
                        </span>

                  </div>
                  <div class="relative flex w-full h-[70%] flex-wrap gap-10 p-10">
                        <span v-for="roomsCards in availableRooms" class="relative w-auto h-10">
                              <CardsAvailableRooms :cardContent="roomsCards" />
                        </span>
                  </div>
            </div>
            <div class="relative w-1/5 flex flex-col">
                  <div class="relative flex flex-col  w-full h-[30%] justify-center items-center gap-6">
                        <RoomsHostelToggler :hostelRoomsByCat="hostelRoomsByCat" />
                        <div
                              :class="`relative w-1/2 h-11 flex justify-center items-center rounded-lg cursor-pointer ${activeHostel == 'boys' ? 'bg-blue-600' : 'bg-pink-600'}`">
                              <span class="text-white font-bold font-mono" @click="fillRoomForm(fillRoom)">Add Room</span>
                        </div>
                  </div>
                  <div class="relative w-full h-[70%] p-10 gap-8  flex flex-col justify-start items-center bg-pink-500">
                        <RoomsInmates :activeRoomInmates="activeRoomInmates" />
                        <div
                              :class="`relative w-auto h-11 flex justify-center items-center rounded-lg cursor-pointer ${activeHostel == 'boys' ? 'bg-blue-600' : 'bg-pink-600'}`">
                              <span class="text-white font-bold font-mono px-8" @click="addInmates">Add Inmates</span>
                        </div>
                  </div>
            </div>
            <div
                  :class="`absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-white  z-40 ${fillRoom ? 'visible' : 'hidden'}`">
                  <RoomsAddRoom :fillRoomProp="fillRoomForm" :availableRooms="availableRooms" />
            </div>
      </div>
</template>

<script setup>
import { roomsCards, studentRoomCards, student } from '../../constants/index.ts';

const activeHostel = ref(getActiveHostel());
let availableRooms = ref(getAvailableRooms());
const activeHostelRoomId = getActiveHostelRoomId()

const fillRoom = ref(false);


//get active room inmates
let activeRoomInmates = {...availableRooms.value.filter((rooms) => rooms.id == activeHostelRoomId.value)};
console.log(activeRoomInmates[0]);

// get the hostel rooms based on the hostel type like boys or girls
const hostelRoomsByCat = async (hostelType) => await useFetch(
      () => `http://localhost:8000/hostel/category/${hostelType}`
).then(({ data }) => {
      availableRooms.value = data.value
}
);
hostelRoomsByCat(activeHostel.value);


// display the form to add the rooms to the hostel
function fillRoomForm(val) {
      fillRoom.value = !val;
}

// adding inmate to the hostel Rooms
const addInmates = async () => {

      const { data } = await useFetch(
            `http://127.0.0.1:8000/add/inmates/${activeHostelRoomId.value}`,
            {
                  method: "PUT",
                  body: [710020104028],
            }
      );

      console.log(data);
}



</script>

<style scoped></style>

<!-- <div class="w-2/5 h-full bg-gray-100 p-4">
      <div v-for="cardElement in student">
            <CardsStudentsCard :cardContent="cardElement" />
      </div>
</div> -->


<!-- 
#C6FEBD 
#FFE8AD
#49454F
-->