<template>
  <div class="relative w-full h-full bg-[#8da9c4] flex flex-col">
    <!-- sidebar list of functions links -->
    <div
      :class="`relative w-full h-10  flex justify-start items-center gap-6 px-5 top-4`"
    >
      <MenuHamburger />
      <MenuAppLogo :headerContent="logoHeader" />
    </div>
    <div
      class="relative top-12 py-10 flex flex-col justify-center items-center"
    >
      <ul class="relative flex flex-col gap-5 w-full">
        <li
          v-for="elem in sidebar"
          :class="`${
            activeComp == elem.textContent ? 'active invert delay-200' : ''
          } cursor-pointer z-20`"
          @click="setActiveComponent(elem.textContent)"
        >
          <a
            :class="`flex justify-start items-center gap-6 ${
              toggler ? 'p-3' : 'p-4'
            }  px-5  transition ease-in-out`"
          >
            <img :src="elem.imgUrl" alt="" class="w-4 h-4" />
            <h3 :class="`${toggler ? 'flex' : 'hidden'}  text-white font-mono`">
              {{ elem.textContent }}
            </h3>
          </a>
        </li>
        <div
          class="indicator_box transition duration-300 z-10 absolute top-0 left-0 w-full h-12 bg-white"
        ></div>
      </ul>
    </div>

    <!-- bottom settings -->
    <div
      class="absolute bottom-7 translate-x-4 bg-white p-2 w-8 h-8 rounded-full flex justify-center items-center overflow-hidden"
    >
      <img src="/images/navbar/settings.svg" />
    </div>
  </div>
</template>

<script setup>
import { sidebar, logoHeader } from "../../constants/index";

//acessing the active component from composables
const activeComp = getActiveComponent();
const toggler = showMenuToggler();

// changing the current active component
function setActiveComponent(componentName) {
  activeComp.value = componentName;
}
</script>

<style scoped>
ul li:nth-child(1).active ~ .indicator_box {
  transform: translateY(calc(68px * 0));
}

ul li:nth-child(2).active ~ .indicator_box {
  transform: translateY(calc(68px * 1));
}

ul li:nth-child(3).active ~ .indicator_box {
  transform: translateY(calc(68px * 2));
}

ul li:nth-child(4).active ~ .indicator_box {
  transform: translateY(calc(68px * 3));
}

ul li:nth-child(5).active ~ .indicator_box {
  transform: translateY(calc(68px * 4));
}

/* curves */
.indicator_box::before {
  content: "";
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 30px 35px 0 10px #fff;
  pointer-events: none;
}

.indicator_box::after{
  content: '';
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 30px -35px 0 10px #fff;
  pointer-events: none;
} 
</style>
