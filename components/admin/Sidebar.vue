<template>
  <div class="relative top-0 left-0 w-56 min-h-screen flex flex-col">
    <!-- App name with logo -->
    <div
      class="relative top-6 font-mono font-bold text-2xl flex justify-center items-center gap-3"
    >
      <img :src="logoHeader.imgUrl" alt="" class="w-8 h-8" />
      <h2>{{ appName }}</h2>
    </div>

    <!-- sidebar list of functions links -->
    <div class="relative top-32 flex flex-col justify-center items-center">
      <ul class="relative  flex flex-col gap-5">
        <li v-for="elem in sidebar">
          <a
            class="flex justify-start items-center gap-3 p-3 px-6 rounded-md"
            :class="[elem.textContent == 'Dashboard' && 'bg-black text-white']"
          >
            <img
              :src="elem.imgUrl"
              alt=""
              class="w-4 h-4"
              :class="[elem.textContent == 'Dashboard' && 'invert']"
            />
            <h3 class="font-mono">{{ elem.textContent }}</h3>
          </a>
        </li>
      </ul>
    </div>

    <!-- bottom settings -->
    <div class="absolute bottom-7 translate-x-8 bg-black p-2 w-10 h-10 rounded-full flex justify-center items-center overflow-hidden">
      <img src="/images/navbar/settings.svg" class="invert" />
    </div>
  </div>
</template>

<script setup>
import { sidebar, logoHeader, appName } from "../../constants/index";
</script>

<style lang="scss" scoped></style>
