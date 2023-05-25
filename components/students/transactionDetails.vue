<template>
    <div class="relative w-full h-full px-8  flex flex-col rounded-2xl border-2 border-blue-300 overflow-hidden">

        <table class="w-full table">
            <thead>
                <tr>
                    <th>SEM</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="student in studentTransactionDetails">
                    <td>{{ student.sem }}</td>
                    <td>{{ student.amount }}</td>
                    <td>
                        <span :class="`${student.status == 'paid' ? 'bg-green-500' : 'bg-red-500'
                            } py-1 px-3 rounded-full text-white`">{{ student.status == 'paid' ? "Paid" : "Pending" }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { studentTransactionDetails } from "../../constants/index";
</script>

<style scoped>
tr > td:nth-child(1){
    color: #9a998c;
}
</style>