<template>
  <!-- App name with logo -->
  <div
    :class="`relative h-full text-white font-mono font-bold text-2xl ${
      toggler ? 'flex' : 'hidden'
    }  justify-center items-center gap-4`"
  >
    <img :src="headerContent.imgUrl" alt="" class="w-7 h-7" />
    <h2>{{ headerContent.textContent }}</h2>
  </div>
</template>

<script setup>
defineProps({
  headerContent: Object,
});

const toggler = showMenuToggler();
</script>

<style scoped></style>
