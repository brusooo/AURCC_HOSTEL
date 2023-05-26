<template>
  <div
    v-if="loading"
    class="relative w-full min-h-screen flex justify-center items-center"
  >
    <Loader />
  </div>
  <div
    v-else
    class="relative w-full xl:h-screen flex flex-col overflow-y-scroll"
  >
    <!-- navbar -->
    <nav
      class="relative w-full h-[10%] bg-crimson flex justify-center items-center"
    >
      <!-- App name with logo -->
      <div class="relative w-60">
        <MenuAppLogo :headerContent="logoHeader" />
      </div>
      <!-- Each route name with welcome  -->
      <div class="relative flex translate-x-7 max-md:hidden">
        <h1 class="sm:text-3xl text-xl font-mono font-bold">
          Students Profile
        </h1>
      </div>
      <!-- user image -->
      <div
        class="relative ml-auto -left-9 flex justify-center items-center gap-6"
      >
        <h1 class="sm:text-base text-xs font-mono max-md:hidden">
          Welcome, Bursooo
        </h1>
        <div
          class="relative w-10 h-10 flex justify-center items-center rounded-full overflow-hidden"
        >
          <img src="/images/sidebar/user.jpg" alt="" />
        </div>
      </div>
    </nav>

    <div
      class="relative w-full h-[90%] xl:my-0 my-5 flex justify-center items-center"
    >
      <StudentsProfile
        :generalDetails="generalDetails"
        :otherDetails="otherDetails"
        :parentsDetails="parentsDetails"
      />
    </div>
  </div>
</template>

<script setup>
import { logoHeader } from "../constants/index";

const loading = ref(true);
const generalDetails = ref({});
const otherDetails = ref({});
const parentsDetails = ref({});

const activeStudent = getActiveStudent();

// fetching user details from the  database based on the active student Id

const getStudentDetails = async (active_reg_no) =>
  await useFetch(
    () => `http://127.0.0.1:8000/users/regno/${active_reg_no}`
  ).then(({ data }) => {
    let result = data.value;

    if (result) {
      // generalDetails of the user
      generalDetails.value = {
        Name: result.name,
        Course: result.course,
        Department: result.department,
        Reg_No: result.reg_no,
        Year_of_Study: result.year_of_study,
        DOB: result.dob,
      };

      // otherdetails of the user
      otherDetails.value = {
        Religion: result.religion,
        Community: result.community,
        Blood_Group: result.blood_group,
        Nationality: result.nationality,
      };

      // parentsdetails of the user
      parentsDetails.value = {
        Father_Name: result.father_name,
        Mother_Name: result.mother_name,
        Gaurdian_Name: result.gaurdian_name,
        Parent_Mobile_No: result.parent_mobile_no,
        Address: result.address,
      };
    }
    loading.value = false;
  });

getStudentDetails(activeStudent.value);
</script>

<style scoped></style>
