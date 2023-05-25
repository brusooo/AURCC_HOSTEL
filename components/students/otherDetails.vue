<template>
    <div class="relative w-full h-full px-8 flex flex-col justify-center rounded-2xl border-2 border-blue-300">
        <table class="w-full table">
            <tbody>

                <!-- student religion  -->
                <tr>
                    <td>Religion</td>
                    <td>{{ studentDetails.Religion }}</td>
                </tr>

                <!-- Community -->
                <tr>
                    <td>Community</td>
                    <td>{{ studentDetails.Community }}</td>
                </tr>

                <!-- student blood group -->
                <tr>
                    <td>Blood Group</td>
                    <td>{{ studentDetails.Blood_Group }}</td>
                </tr>

                <!-- sudent date of birth -->
                <tr>
                    <td>Nationality</td>
                    <td>{{ studentDetails.Nationality }}</td>
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
tr>td:nth-child(1) {
    color: #9a998c;
}
</style>