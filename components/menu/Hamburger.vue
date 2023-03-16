<template>
  <div class="relative w-7 h-6 overflow-hidden flex xl:hidden justify-center">
    <div
      :class="`container cursor-pointer flex flex-col justify-center items-center ${
        showMenu ? 'active' : ''
      }`"
      @click="toggleMenu()"
    >
      <span
        class="absolute transition-transform left-0 duration-500 -translate-y-2 bg-black w-4 h-1 rounded-full"
      ></span>
      <span
        class="absolute bg-black w-full transition duration-500 h-1 rounded-full"
      ></span>
      <span
        class="absolute transition-transform translate-y-2 duration-500 left-0 bg-black w-5 h-1 rounded-full"
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

<style scoped>
.container.active > span:nth-child(2) {
  transform: translateX(40px);
}
.container.active > span:nth-child(1) {
  width: 28px;
  transform: translateY(0) rotate(45deg);
}

.container.active > span:nth-child(3) {
  width: 28px;
    transform: translateY(0) rotate(315deg);
}
</style>
