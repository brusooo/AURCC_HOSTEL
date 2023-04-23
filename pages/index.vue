<template>
  <div
    v-if="loading"
    class="relative w-full min-h-screen flex justify-center items-center"
  >
    <Loader />
  </div>
  <div
    v-else
    class="container flex flex-col-reverse px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
  >
    <div class="max-w-6xl px-10 mx-auto mt-20 text-center justify-center p-5">
      <div class="pt-50">
        <img src="/images/sidebar/logo.png" alt="" class="w-28 h-28 mx-auto" />
      </div>
      <div class="text-sm my-5">
        <h1 class="text-xl font-mono font-bold">
          ANNA UNIVERSITY REGIONAL CAMPUS COIMBATORE
        </h1>
      </div>
      <!-- Heading -->
      <h2 class="text-4xl font-bold overflow-hidden">HOSTLR</h2>
      <div class="mt-16">
        <button
          class="bg-[#70e2f3] w-64 mt-4 my-24 py-3 text-white text-xl rounded-lg hover:bg-[#7ee8f8]"
          @click="getToKeycloak()"
        >
          Let's Get Started
        </button>
      </div>
    </div>
    <div class="md:w-1/2 flex flex-row items-center">
      <img src="images/general/illustration.jpg" alt="" class="h-50 w-50" />
    </div>
  </div>
</template>

<script setup>
import Keycloak from "keycloak-js";
const loading = ref(true);
const keycloak = new Keycloak("keycloak.json");
keycloak
  .init({
    onLoad: "check-sso",
    checkLoginIFrame: false,
  })
  .then(async (authenticated) => {
    if (authenticated) {
      if (keycloak.hasRealmRole("admin")) {
        await navigateTo("/admindash");
      } else {
        await navigateTo("/student");
      }
    }
  });

setTimeout(() => {
  loading.value = false
}, 3000);

async function getToKeycloak() {
  keycloak.login({
    redirectUri: "http://localhost:3000/",
  });
}
</script>

<style scoped></style>
