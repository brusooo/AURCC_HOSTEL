<template>
  <div
    v-if="loading"
    class="relative w-full h-[88%] flex justify-center items-center"
  >
    <Loader />
  </div>
  <div v-else class="flex h-full">
    <div class="flex flex-col w-4/5 border-r-gray-50 border-r-2">
      <div class="flex w-full h-[30%] justify-center items-center gap-10">
        <CardsRoomsCard :cards="resultCards" />
      </div>
      <div
        class="relative flex w-full h-auto flex-wrap flex-basis-0 gap-10 px-10 p-4"
      >
        <CardsAvailableRooms
          :availableRooms="availableRooms"
          :hostelRoomsByCat="hostelRoomsByCat"
        />
      </div>
    </div>
    <div class="relative w-1/5 flex flex-col">
      <div
        class="relative flex flex-col w-full h-[27%] justify-center items-center gap-6"
      >
        <RoomsHostelToggler :hostelRoomsByCat="hostelRoomsByCat" />
        <div
          :class="`relative w-1/2 h-11 flex justify-center items-center rounded-lg cursor-pointer ${
            activeHostel == 'boys' ? 'bg-blue-600' : 'bg-pink-600'
          }`"
        >
          <span
            class="text-white font-bold font-mono"
            @click="fillRoomForm(fillRoom)"
            >Add Room</span
          >
        </div>
      </div>
      <div
        class="relative w-full h-[73%] p-5 gap-8 flex flex-col justify-start items-center"
      >
        <h3 class="font-mono font-bold overflow-hidden">
          Room No {{ activeHostelRoomNo }}
        </h3>
        <div
          class="roomsInmates relative w-full h-96 gap-4 flex flex-col overflow-y-scroll border-2 border-blue-50 p-3"
        >
          <!-- rendering the cards contains register Number alone card -->
          <RoomsInmates :inmates="activeRoomInmates.inmates" />
        </div>
        <div
          :class="`relative w-auto h-11 flex justify-center items-center rounded-lg cursor-pointer ${
            activeHostel == 'boys' ? 'bg-blue-600' : 'bg-pink-600'
          }`"
        >
          <span
            class="text-white font-bold font-mono px-8"
            @click="showAddInmatesForm(addInmatesForm)"
            >Add Inmates</span
          >
        </div>
        <div
          :class="`relative w-auto h-11 flex justify-center items-center rounded-lg cursor-pointer bg-red-500`"
        >
          <span
            class="text-white font-bold font-mono px-8"
            @click="showDeleteDialog(deleteRoom)"
            >Delete Room</span
          >
        </div>
      </div>
    </div>
    <div
      :class="`absolute bottom-0 left-0 w-full h-full flex justify-center items-center bg-white  z-40 ${
        fillRoom || addInmatesForm || deleteRoom ? 'visible' : 'hidden'
      }`"
    >
      <!-- add rooms component -->
      <RoomsAddRoom
        v-if="fillRoom"
        :availableRooms="availableRooms"
        :fillRoomProp="fillRoomForm"
        :hostelRoomsByCat="hostelRoomsByCat"
      />

      <!-- add inmates component -->
      <RoomsAddInmates
        v-if="addInmatesForm"
        :addInmatesProp="showAddInmatesForm"
        :roomInmates="activeRoomInmates.inmates"
        :hostelRoomsByCat="hostelRoomsByCat"
      />

      <RoomsConfirmationDialog
        v-if="deleteRoom"
        :dialogBox="showDeleteDialog"
        :hostelRoomsByCat="hostelRoomsByCat"
      />
    </div>
  </div>
</template>

<script setup>
const loading = ref(true);
const activeHostel = getActiveHostel();
let availableRooms = ref({});

// active hostel roomID
const activeHostelRoomId = ref(getActiveHostelRoomId());

// active hostel roomNo
const activeHostelRoomNo = getActiveHostelRoomNo();

// to invoke the popups
const fillRoom = ref(false);
const addInmatesForm = ref(false);
const deleteRoom = ref(false);

//get active room inmates
let activeRoomInmates = ref({});

// for roomCards like total, boys and girls count

const boysCnt = ref(0);
const girlsCnt = ref(0);
const totalCnt = ref(0);

// get the hostel rooms based on the hostel type like boys or girls
const hostelRoomsByCat = async (hostelType) =>
  await useFetch(
    () => `http://localhost:8000/hostel/category/${hostelType}`
  ).then(({ data }) => {
    availableRooms.value = data.value;
    let returnVal = Object.values(availableRooms.value).find(
      (rooms) => rooms.id == activeHostelRoomId.value
    );
    if (returnVal) {
      activeRoomInmates.value = returnVal;
    }
    loading.value = false;
    totalCnt.value = 0;
    getBoysHostelCnt();
    getGirlsHostelCnt();
  });

hostelRoomsByCat(activeHostel.value);

// display the form to add the rooms to the hostel
const fillRoomForm = (val) => (fillRoom.value = !val);
const showAddInmatesForm = (val) => (addInmatesForm.value = !val);
const showDeleteDialog = (val) => (deleteRoom.value = !val);

// the below things is entirely for roomCards
const getBoysHostelCnt = async () =>
  await useFetch(() => `http://127.0.0.1:8000/hostel/category/boys`).then(
    ({ data }) => {
      let temp = 0;
      for (const roomDetails of data.value) {
        temp += roomDetails.inmates.length;
      }
      totalCnt.value += temp;
      boysCnt.value = temp;
    }
  );

const getGirlsHostelCnt = async () =>
  await useFetch(() => `http://127.0.0.1:8000/hostel/category/girls`).then(
    ({ data }) => {
      let temp = 0;
      for (const roomDetails of data.value) {
        temp += roomDetails.inmates.length;
      }
      totalCnt.value += temp;
      girlsCnt.value = temp;
    }
  );

let resultCards = [
  { cardHeader: "Total", cardValue: totalCnt },
  { cardHeader: "Boys", cardValue: boysCnt },
  { cardHeader: "Girls", cardValue: girlsCnt },
];
</script>

<style scoped></style>
