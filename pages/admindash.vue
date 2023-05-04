<template>
  <div
    v-if="loading"
    class="relative w-full min-h-screen flex justify-center items-center"
  >
    <Loader />
  </div>
  <div v-else class="relative w-full min-h-screen flex">
    <!-- Sidebar for admin with components-->
    <div
      :class="`w-64 min-h-screen transition ease-in duration-200 bg-crimson max-xl:absolute max-xl:z-10 max-xl:-translate-x-[500px] ${
        menuToggled ? 'max-xl:translate-x-0 shadow-2xl' : ''
      }`"
    >
      <AdminSidebar />
    </div>
    <div class="relative xl:w-[85%] w-full min-h-screen">
      <!-- Navbar for user and menu -->
      <AdminNavbar />
      <AdminDashboard v-if="activeComponent == 'Dashboard'" />
      <AdminFees v-if="activeComponent == 'Fees'" />
      <AdminGrocery v-if="activeComponent == 'Grocery'" />
      <AdminRooms v-if="activeComponent == 'Rooms'" />
      <AdminStudents v-if="activeComponent == 'Students'" />
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
