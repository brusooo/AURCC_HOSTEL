<template>
  <div class="relative top-14 h-3/4 px-6 flex flex-col gap-14">
    <div
      class="relative w-full h-auto flex flex-wrap md:gap-8 sm:gap-5 gap-5 justify-start items-center"
    >
      <Checkbox v-for="elem in checkBoxValues" :labelValue="elem" />
    </div>
    <StudentsTable />
  </div>
</template>

<script setup>
//from constants
import { checkBoxValues } from "../../constants";

</script>

<style scoped>

</style>
