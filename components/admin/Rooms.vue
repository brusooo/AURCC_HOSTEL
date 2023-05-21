<template>
      <div v-if="loading" class="relative w-full  h-[88%] flex justify-center items-center">
            <Loader />
      </div>
      <div v-else class="flex h-[88%]">
            <div class="flex flex-col w-4/5 border-r-gray-50 border-r-2">
                  <div class="flex w-full h-[30%] justify-center items-center gap-10">
                        <span v-for="cardElement in studentRoomCards">
                              <CardsRoomsCard :cardContent="cardElement" />
                        </span>

                  </div>
                  <div class="relative flex w-full h-[70%] flex-wrap gap-10 p-10">
                        <span v-for="roomsCards in availableRooms" class="relative w-auto h-10">
                              <CardsAvailableRooms :cardContent="roomsCards" :hostelRoomsByCat="hostelRoomsByCat" />
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
                  <div class="relative w-full h-[70%] p-5 gap-8  flex flex-col justify-start items-center">
                        <h3 class="font-mono font-bold overflow-hidden">Room No {{ activeHostelRoomNo }}</h3>
                        <div
                              class="roomsInmates relative w-full h-96 gap-4 flex flex-col overflow-y-scroll border-2 border-blue-50 p-3">
                              <!-- rendering the cards contains register Number alone card -->
                              <RoomsInmates :inmates="activeRoomInmates.inmates" />
                        </div>
                        <div
                              :class="`relative w-auto h-11 flex justify-center items-center rounded-lg cursor-pointer ${activeHostel == 'boys' ? 'bg-blue-600' : 'bg-pink-600'}`">
                              <span class="text-white font-bold font-mono px-8"
                                    @click="showAddInmatesForm(addInmatesForm)">Add
                                    Inmates</span>
                        </div>
                  </div>
            </div>
            <div
                  :class="`absolute bottom-0 left-0 w-full h-[88%] flex justify-center items-center bg-white  z-40 ${fillRoom || addInmatesForm ? 'visible' : 'hidden'}`">
                  <RoomsAddRoom v-if="fillRoom" :fillRoomProp="fillRoomForm" :availableRooms="availableRooms" />
                  <RoomsAddInmates v-if="addInmatesForm" :addInmatesProp="showAddInmatesForm"
                        :roomInmates="activeRoomInmates.inmates" :hostelRoomsByCat="hostelRoomsByCat" />
            </div>
      </div>
</template>

<script setup>
import { roomsCards, studentRoomCards, student } from '../../constants/index.ts';
const loading = ref(true);
const activeHostel = getActiveHostel();
let availableRooms = getAvailableRooms();

// active hostel roomID
const activeHostelRoomId = ref(getActiveHostelRoomId())

// active hostel roomNo
const activeHostelRoomNo = getActiveHostelRoomNo()

const fillRoom = ref(false);
const addInmatesForm = ref(false);


//get active room inmates
let activeRoomInmates = ref({});


// get the hostel rooms based on the hostel type like boys or girls
const hostelRoomsByCat = async (hostelType) => await useFetch(

      () => `http://localhost:8000/hostel/category/${hostelType}`
).then(({ data }) => {
      availableRooms.value = data.value
      let returnVal = Object.values(availableRooms.value).find((rooms) => rooms.id == activeHostelRoomId.value)
      if(returnVal){
            activeRoomInmates.value = returnVal
      }
      loading.value = false

}
);
hostelRoomsByCat(activeHostel.value);

// display the form to add the rooms to the hostel
const fillRoomForm = (val) => fillRoom.value = !val;
const showAddInmatesForm = (val) => addInmatesForm.value = !val;

</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
</style>


<!-- .roomsInmates::-webkit-scrollbar {
      display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.roomsInmates {
      -ms-overflow-style: none;
      /* IE and Edge */
      scrollbar-width: none;
      /* Firefox */
} -->