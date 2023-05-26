<template>
  <div
    class="relative w-full h-[10vh] flex justify-center items-center"
  >
    <!-- Each route name with welcome  -->

    <div
      class="relative flex justify-center items-center text-black gap-10 translate-x-10"
    >
      
      <h1 class="sm:text-3xl text-xl font-mono font-bold">
        Property Dashboard
      </h1>
      <!-- <h1 class="sm:text-xl text-base font-mono">Welcome, Bursooo</h1> -->
    </div>
    <!-- user image -->
    <div
      class="relative ml-auto -left-9 flex justify-center items-center gap-6"
    >
      <div
        class="relative w-10 h-10 flex justify-center items-center rounded-full overflow-hidden"
      >
        <img src="/images/sidebar/user.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { logoHeader } from "../../constants/index";

const location = ref("navbar")
</script>

<style scoped></style>
