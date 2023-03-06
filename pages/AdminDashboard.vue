<template>
  <div class="relative w-full min-h-screen flex">
    <!-- Sidebar for admin with components-->
    <AdminSidebar />
    <div class="relative w-full min-h-screen">
        <!-- Navbar for logout -->
      <AdminNavbar />
      <div class="relative top-[104px] translate-x-6 flex gap-9">
        <span v-for="cardElement in adminTopCards">
            <GeneralTopCard :cardContent ="cardElement" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { adminTopCards } from '~~/constants';
</script>

<style scoped></style>
