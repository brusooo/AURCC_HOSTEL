<template>
  <div class="relative top-14 h-3/4 px-6 flex flex-col gap-14">
    <div class="relative w-full h-auto flex flex-wrap  md:gap-8 sm:gap-5 gap-3 justify-start items-center">
      <Checkbox v-for="elem in checkBoxValues" :labelValue="elem" />
    </div>
    <div className="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>SNO</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Fee Status</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(student, i) in studentDetails" :key="i">
            <tr
              v-if="activeDept.indexOf('ALL') in activeDept || activeDept.indexOf(student.department) in activeDept" 
            >
              <td>{{ i }}</td>
              <!-- <td>{{ student.name }}</td> -->
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-9 h-9">
                      <img
                        src="/images/sidebar/user.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div>{{ student.name }}</div>
                  </div>
                </div>
              </td>
              <td>{{ student.department }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.mobile }}</td>
              <td>
                <span
                  :class="`${
                    student.feeStatus == feeStatus
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  } py-1 px-3 rounded-full text-white`"
                  >{{ student.feeStatus }}</span
                >
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
//from constants
import { activeDepartment } from "~~/composables";
import { checkBoxValues, studentDetails } from "~~/constants";
const feeStatus = "Paid";

//from composables
let activeDept = activeDepartment().value;
</script>

<style scoped>
tr,
td {
  padding-top: 13px;
  padding-bottom: 13px;
  border-bottom: none;
}

tr:nth-child(even) {
  background-color: #c7f9cc9c;
}

.table th:first-child {
    position: relative;
    z-index: 1;
}
</style>
