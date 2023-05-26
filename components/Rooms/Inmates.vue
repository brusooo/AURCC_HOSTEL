<template>
  <div
    class="relative w-full py-3 gap-2 cursor-pointer rounded-md overflow-hidden"
    v-for="inmate in inmates"
    @click="setActiveStudent(inmate)"
  >
    <NuxtLink to="/studentpage">
      <span class="relative gap-2 flex justify-center items-center">
        <img
        src="/images/general/profile1.png"
        alt=""
        class="w-12 h-12 rounded-full"
      />
      <div class="flex flex-col font-mono text-black">
        <!-- <h3 class="font-bold">Brusooo</h3> -->
        <h3 class="text-sm">{{ inmate }}</h3>
      </div>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  inmates: Object,
});

const activeStudent = getActiveStudent();

const setActiveStudent = (reg_no) => {
  activeStudent.value = reg_no;
};
</script>

<style scoped></style>
