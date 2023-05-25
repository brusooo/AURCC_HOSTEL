<template>
  <tbody>
    <template v-for="(student, i) in studentDetails" :key="i">
      <tr v-if="activeDept.indexOf('ALL') in activeDept ||
        activeDept.indexOf(student.department) in activeDept
        ">
        <td>{{ i }}</td>
        <!-- <td>{{ student.name }}</td> -->
        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-9 h-9">
                <img src="/images/sidebar/user.jpg" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div>{{ student.name }}</div>
            </div>
          </div>
        </td>
        <td>{{ student.department }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.mobile_number }}</td>
        <td>
          <span :class="`${student.feePaid ? 'bg-green-500' : 'bg-red-500'
            } py-1 px-3 rounded-full text-white`">{{ student.feePaid ? "Paid" : "Pending" }}</span>
        </td>
      </tr>
    </template>
  </tbody>
</template>

<script setup>
import { activeDepartment } from "../../composables";
//from composables
const studentDetails = await useFetch(
  () => "http://127.0.0.1:8000/users/dept/CSE"
).then(({ data }) => data.value);

const feeStatus = "Paid";
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
