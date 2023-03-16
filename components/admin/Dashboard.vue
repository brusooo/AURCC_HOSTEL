<template>
  <div class="relative top-12  flex flex-wrap  justify-center items-center gap-9">
    <span v-for="cardElement in adminTopCards">
      <CardsTopCard :cardContent="cardElement" />
    </span>
  </div>
</template>

<script setup>
import { adminTopCards } from '~~/constants';
</script>

<style scoped></style>
