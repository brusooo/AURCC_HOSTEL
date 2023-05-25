<template>
    <div class="relative w-full h-full p-7 flex flex-col rounded-2xl border-2 border-blue-300">
        <div class="w-full h-1/2 flex gap-10">
            <img src="/images/general/menwillbemen.jpg" alt="" class=" w-3/4 h-full p-5">
            <div class="w-1/2 h-full flex flex-col font-bold justify-center items-center text-black">
                <span class="text-6xl overflow-hidden text-gray-300">123</span>
                <span class="text-xl overflow-hidden">Boys Hostel</span>
                <span class="text-xl overflow-hidden">I<sup>st</sup> Floor</span>
            </div>
        </div>
        <table class="table w-full">
            <tbody>
                <!-- Student Name-->
                <tr>
                    <td>Name</td>
                    <td>{{ studentDetails.Name }}</td>
                </tr>

                <!-- student course and department  -->
                <tr>
                    <td>Course</td>
                    <td>{{ studentDetails.Course }}</td>
                </tr>

                <tr>
                    <td>Department</td>
                    <td>{{ studentDetails.Department }}</td>
                </tr>

                <!-- student register number and current year of study -->
                <tr>
                    <td>Reg No</td>
                    <td>{{ studentDetails.Reg_No }}</td>
                </tr>

                <tr>
                    <td>Year of Study</td>
                    <td>{{ studentDetails.Year_of_Study }}</td>
                </tr>

                <!-- sudent date of birth -->
                <tr>
                    <td>DOB</td>
                    <td>{{ studentDetails.DOB }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>
import { student } from '~~/constants';

defineProps({
    studentDetails: Object
})

</script>

<style scoped>
tr>td:nth-child(1) {
    color: #9a998c;
}
</style>