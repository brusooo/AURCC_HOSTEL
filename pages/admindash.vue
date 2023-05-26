<template>
  <div
    v-if="loading"
    class="relative w-full min-h-screen flex justify-center items-center"
  >
    <Loader />
  </div>
  <div v-else class="relative w-full min-h-screen flex overflow-hidden">
    <div
      :class="`relative ${
        menuToggled ? 'w-[15vw]' : 'w-[4vw]'
      } h-screen z-30 transition-all duration-700`"
    >
      <AdminSidebar />
    </div>

    <div :class="`relative ${menuToggled ? 'w-[85vw]' : 'w-full'} h-screen flex flex-col`">
      <AdminNavbar />
      <!-- Navbar for user and menu -->
      <div class="relative w-full h-full">
        <AdminDashboard v-if="activeComponent == 'Dashboard'" />
        <AdminFees v-if="activeComponent == 'Fees'" />
        <AdminGrocery v-if="activeComponent == 'Grocery'" />
        <AdminRooms v-if="activeComponent == 'Rooms'" />
        <AdminStudents v-if="activeComponent == 'Students'" />
      </div>
    </div>
  </div>
</template>

<script setup>
// from composables
import Keycloak from "keycloak-js";
let loading = ref(true);

const activeComponent = getActiveComponent();
const menuToggled = showMenuToggler();

const keycloak = new Keycloak("keycloak.json");
keycloak
  .init({ onLoad: "check-sso", checkLoginIframe: false })
  .then(async (authenticated) => {
    if (authenticated) loading.value = false;
    else await navigateTo("/");
  });
</script>

<style scoped></style>
