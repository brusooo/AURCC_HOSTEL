<template>
  <div class="relative flex justify-center items-center">
    <input
      type="checkbox"
      :name="props.labelValue"
      :checked="
        props.labelValue == 'ALL' && activeDept.indexOf(props.labelValue) != -1
      "
      @change="change(props.labelValue)"
      class="absolute z-10 opacity-0 top-0 left-0 w-full h-full cursor-pointer"
    />
    <label
      :for="props.labelValue"
      class="relative font-bold font-mono text-sm py-1 px-5 border-2 border-green rounded-full"
      >{{ props.labelValue }}</label
    >
  </div>
</template>

<script setup>
const props = defineProps({ labelValue: String });

//from composables
let activeDept = activeDepartment().value;

//to add the value to array to filter ther students
function change(dept) {
  let idx = activeDept.indexOf(dept);
  if (idx in activeDept) {
    activeDept.splice(idx, 1);
    if (activeDept.length == 0) {
      activeDept.push("ALL");
    }
  } else {
    activeDept.push(dept);
  }
}
</script>

<style scoped>
input[type="checkbox"]:checked ~ label {
  background-color: #52796f;
  color: white;
}
</style>
