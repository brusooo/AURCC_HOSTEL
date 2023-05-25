<template>
  <div class="relative  top-0 left-0 w-full min-h-screen flex flex-col">
    <!-- App name with logo -->
    <MenuAppLogo :headerContent="logoHeader" />

    <!-- sidebar list of functions links -->
    <div class="relative top-12 flex flex-col justify-center items-center">
      <ul class="relative flex flex-col gap-5">
        <li v-for="elem in sidebar"
          :class="`${activeComp == elem.textContent ? 'active invert delay-200' : ''} cursor-pointer z-20`"
          @click="setActiveComponent(elem.textContent)">
          <a class="flex justify-start items-center gap-6 p-3 px-6 rounded-md transition ease-in-out">
            <img :src="elem.imgUrl" alt="" class="w-4 h-4" />
            <h3 class="font-mono">{{ elem.textContent }}</h3>
          </a>
        </li>
        <div
          class="indicator_box transition duration-300 z-10 rounded-lg absolute first-line:absolute top-0 left-0 w-full h-12 bg-black">
        </div>
      </ul>
    </div>

    <!-- bottom settings -->
    <div
      class="absolute bottom-7 translate-x-8 bg-black p-2 w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
      <img src="/images/navbar/settings.svg" class="invert" />
    </div>
  </div>
</template>

<script setup>
import { sidebar, logoHeader } from "../../constants/index";

//acessing the active component from composables
const activeComp = getActiveComponent();
const toggler = showMenuToggler()

// changing the current active component
function setActiveComponent(componentName) {
  activeComp.value = componentName;
  toggler.value = false
}
</script>

<style scoped>
ul li:nth-child(1).active~.indicator_box {
  transform: translateY(calc(68px * 0));
}

ul li:nth-child(2).active~.indicator_box {
  transform: translateY(calc(68px * 1));
}

ul li:nth-child(3).active~.indicator_box {
  transform: translateY(calc(68px * 2));
}

ul li:nth-child(4).active~.indicator_box {
  transform: translateY(calc(68px * 3));
}

ul li:nth-child(5).active~.indicator_box {
  transform: translateY(calc(68px * 4));
}
</style>
