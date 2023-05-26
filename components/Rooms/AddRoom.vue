<template>
  <div class="relative w-96 shadow-2xl rounded-xl bg-crimson font-mono">
    <span
      class="absolute right-7 top-5 cursor-pointer z-20"
      @click="() => fillRoomProp(true)"
    >
      <img
        src="/images/rooms/cancel.svg"
        width="13"
        height="13"
        alt=""
        color=""
      />
    </span>
    <form
      @submit.prevent="
        () => {
          hostelFormSubmission();
        }
      "
      class="relative z-10 flex flex-col px-10 py-11 gap-5"
    >
      <!-- Hostel Room Number -->
      <label class="font-semibold" for="roomno">Room Number</label>
      <input
        type="number"
        name="roomno"
        id="roomno"
        v-model="roomNo"
        step="1"
      />

      <!-- Hostel floor number like 1, 2, and 3rd floor-->
      <label class="font-semibold" for="floorno">Floor</label>
      <select id="floorno" name="floorno" v-model="floor">
        <option value="0">I floor</option>
        <option value="1">II floor</option>
        <option value="2">III floor</option>
      </select>

      <!-- Hostel Type like boys or girls-->
      <label class="font-semibold" for="hostelType">Hostel</label>
      <select id="hostelType" name="hostelType" v-model="hostel">
        <option value="boys">Boys</option>
        <option value="girls">Girls</option>
      </select>

      <!-- Room status like filled or vacant-->
      <label class="font-semibold" for="occupied">Room status</label>
      <div class="flex gap-10">
        <div class="flex justify-center items-center w-56 h-10 gap-5">
          <span
            v-for="item in roomStatus"
            @click="() => changeRoomStatus(item)"
            :class="`relative cursor-pointer overflow-hidden border-[2px] border-blue-600 flex justify-center items-center gap-2  w-1/2 h-full ${
              currentRoomStatus == 'vacant' &&
              item == 'vacant' &&
              'bg-blue-600 border-none text-white'
            } ${
              currentRoomStatus == 'filled' &&
              item == 'filled' &&
              'bg-blue-600 border-none text-white'
            }`"
          >
            <h3>{{ item }}</h3>
          </span>
        </div>
        <div></div>
      </div>
      <input
        class="font-bold bg-white cursor-pointer"
        type="submit"
        value="Add"
      />
    </form>
  </div>
</template>

<script setup>
const rooms = defineProps({
  availableRooms: Object,
  fillRoomProp: Function,
  hostelRoomsByCat: Function,
});

const roomStatus = ref(["vacant", "filled"]);
const currentRoomStatus = ref("vacant");
const activeHostel = getActiveHostel();

const roomNo = ref(0);
const floor = ref(0);
const hostel = ref("boys");
const occupied = ref(0);

function changeRoomStatus(roomVal) {
  currentRoomStatus.value = roomVal;
  roomVal == "vacant" ? (occupied.value = 0) : (occupied.value = 1);
}

async function hostelFormSubmission() {
  console.log(rooms.availableRooms);
  if (
    Object.values(rooms.availableRooms).some(
      (data) => data.roomno == roomNo.value && data.hostel == hostel.value
    )
  ) {
    alert("Already Exists room No");
  } else {
    const { data } = await useFetch(
      "http://127.0.0.1:8000/users/hostel/addroom",
      {
        method: "POST",
        body: {
          roomno: roomNo.value,
          floor: floor.value,
          hostel: hostel.value,
          occupied: occupied.value,
        },
      }
    );

    // pushing the newly added room to the composables
    // available room array
    if (activeHostel == hostel.value)
      rooms.availableRooms.push(data.value.data);

    if (data) {
      floor.value = 0;
      roomNo.value = 0;
      hostel.value = "boys";
      occupied.value = 0;
    }
    rooms.hostelRoomsByCat(activeHostel.value);
  }
}
</script>

<style scoped>
input,
select {
  position: relative;
  padding: 7px 10px;
  outline: none;
  border: none;
}
</style>
