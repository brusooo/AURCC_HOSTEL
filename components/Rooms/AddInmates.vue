<template>
    <div class="relative w-96 shadow-2xl flex flex-col z-30 rounded-xl bg-crimson font-mono">
        <span class="absolute right-7 top-5 cursor-pointer z-20" @click="() => addInmatesProp(true)">
            <img src="/images/rooms/cancel.svg" width="13" height="13" alt="" color="" />
        </span>
        <div class="relative px-10 py-12 gap-8 flex flex-col">
            <h2 class="relative font-bold">Enter the Register Number</h2>
            <div class="relative flex flex-wrap gap-2">
                <span class="relative bg-black text-white px-5 py-1 rounded-full flex justify-center items-center gap-2"
                    v-for="chip in inmatesIdArray">
                    {{ chip }} <span><img src="/images/rooms/cancel.svg" @click="removeFromArray(chip)"
                            class="invert cursor-pointer" width="13" height="13" alt="" color="" /></span>
                </span>
            </div>
            <div class="relative z-10 flex flex-col gap-5">
                <!-- Hostel Room Number -->
                <input type="text" name="inmateId" id="inmateId" v-model.trim="chipValue" @keydown="addInamtesChip" />
                <input class="font-bold bg-white cursor-pointer" type="submit" value="Add"
                    @click="() => addInmateSubmission()" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const rooms = defineProps({
    addInmatesProp: Function,
    roomInmates: Object,
    hostelRoomsByCat : Function
});

// active hostel from composables
const activeHostel = getActiveHostel();

// input value
const chipValue = ref("")

// chips box arrays
const inmatesIdArray = ref([])

//active hostel room id
const activeHostelRoomId = getActiveHostelRoomId()


// adding inmate to the hostel Rooms
async function addInmateSubmission() {
    const { data } = await useFetch(
        `http://127.0.0.1:8000/add/inmates/${activeHostelRoomId.value}`,
        {
            method: "PUT",
            body: inmatesIdArray.value,
        }
    );

    inmatesIdArray.value = []
    rooms.hostelRoomsByCat(activeHostel.value)
}


const removeFromArray = (truncVa) => {
    inmatesIdArray.value = inmatesIdArray.value.filter(id => id != truncVa);
}


const addInamtesChip = (event) => {
    if (event.keyCode === 13) {
        if (Object.values(rooms.roomInmates).includes(Number(chipValue.value))) {
            console.log("Already exists")
        }
        else if (chipValue.value != "") {
            inmatesIdArray.value.push(chipValue.value)
            chipValue.value = ""
        }
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
  