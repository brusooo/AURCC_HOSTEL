<template>
    <div class="relative w-full h-full px-8 flex flex-col justify-center rounded-2xl border-2 border-blue-300">
        <table class="table">
            <tbody>

                <!-- Father name  -->
                <tr>
                    <td>Father Name</td>
                    <td>{{ studentDetails.Father_Name }}</td>
                </tr>

                <!-- Mother Name -->
                <tr>
                    <td>Mother Name</td>
                    <td>{{ studentDetails.Mother_Name }}</td>
                </tr>

                <!-- Gaurdian  -->
                <tr>
                    <td>Gaurdian name <span class="text-xs">(if any)</span></td>
                    <td>{{ studentDetails.Gaurdian_Name }}</td>
                </tr>
                <!-- parents mobile No -->
                <tr>
                    <td>Parent Mobile No</td>
                    <td>{{ studentDetails.Parent_Mobile_No }}</td>
                </tr>

                <!-- sudent date of birth -->
                <tr>
                    <td>Address</td>
                    <td class="text-xs">{{ studentDetails.Address }}</td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script setup>
defineProps({
    studentDetails: Object
})
</script>

<style scoped>
td {
    position: relative;
    white-space: normal;
    word-break: break-all;
}

tr>td:nth-child(1) {
    color: #9a998c;
}
</style>