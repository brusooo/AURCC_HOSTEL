<template>
  <div class="relative w-5 h-5 overflow-hidden flex justify-center">
    <div
      class="container cursor-pointer flex flex-col justify-center items-center"
      @click="toggleMenu()"
    >
      <span
        :class="`absolute transition-transform left-0 duration-500 -translate-y-2 bg-white w-3 h-1 rounded-full`"
      ></span>
      <span
        :class="`absolute bg-white w-full transition duration-500 h-1 rounded-full`"
      ></span>
      <span
        :class="`absolute transition-transform translate-y-2 duration-500 left-0 bg-white w-4 h-1 rounded-full`"
      ></span>
    </div>
  </div>
</template>

<script setup>


const showMenu = showMenuToggler();

function toggleMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<style scoped></style>
