<template>
  <div
    class="relative flex flex-col px-10 py-12 shadow-2xl gap-7 font-mono border-4 border-[#8da9c4]"
  >
    <h1>
      Do you want to delete the room number {{ roomno }} <br />
      from {{ hostelType }} ?
    </h1>
    <span class="gap-3 flex justify-end items-end">
      <span
        class="px-4 py-2 bg-red-500 text-white cursor-pointer"
        @click="
          () => {
            deleteThisRoom();
            dialogBox(true);
          }
        "
      >
        DELETE
      </span>
      <span class="px-4 py-2 cursor-pointer" @click="dialogBox(true)">
        CANCEL
      </span>
    </span>
  </div>
</template>

<script setup>
const dialogProps = defineProps({
  dialogBox: Function,
  hostelRoomsByCat: Function,
});

const roomno = getActiveHostelRoomNo();
const activeHostelType = getActiveHostel();

// delete the active room
const deleteThisRoom = async () => {
  const { data } = await useFetch(
    `http://127.0.0.1:8000/delete/hostelroom/${activeHostelType.value}/${roomno.value}`,
    {
      method: "DELETE",
    }
  );
  dialogProps.hostelRoomsByCat(activeHostelType.value);
  console.log(data);
};
</script>

<style scoped></style>
