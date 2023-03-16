<template>
  <div class="relative w-full h-24 flex justify-center items-center">
    <!-- Each route name with welcome  -->
    <div class="relative flex flex-col translate-x-7">
      <h1 class="sm:text-3xl text-xl font-mono font-bold">Property Dashboard</h1>
      <h1 class="sm:text-xl text-base font-mono">Welcome, Bursooo</h1>
    </div>
    <!-- user image -->
    <div class="relative ml-auto -left-9 flex justify-center items-center gap-6">
      <div
        class="relative w-10 h-10  flex justify-center items-center rounded-full overflow-hidden"
      >
        <img src="/images/sidebar/user.jpg" alt="" />
      </div>
      <MenuHamburger />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
