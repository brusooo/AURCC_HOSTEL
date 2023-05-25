<template>
    <div
        class="relative max-xl:w-1/2 max-sm:w-full  h-full flex xl:flex-row flex-col gap-5 px-10 justify-center items-center font-mono">
        <!-- general details of the students like their name, photo, dept, dob -->
        <div class="xl:w-1/3 h-[88%] flex justify-center items-center">
            <StudentsGeneralDetails :studentDetails="generalDetails" />
        </div>

        <!-- two boxes one for the other details of the students like their parents -->
        <!-- other for his/her transaction details -->
        <div class="xl:w-1/3 h-[88%]  flex flex-col justify-center items-center gap-5">
            <div class="w-full h-1/2">
                <StudentsOtherDetails :studentDetails="otherDetails"/>
            </div>
            <div class="w-full h-3/4">
                <StudentsParentsDetails :studentDetails="parentsDetails"/>
            </div>
        </div>

        <div class="xl:w-1/3 w-full  h-[88%] flex flex-col justify-center items-center gap-2">
            <div class="w-full h-[82%] flex justify-center items-center">
                <StudentsTransactionDetails />
            </div>
            <div class="w-full h-[18%] p-2 rounded-2xl border-2 border-blue-300 overflow-hidden flex flex-wrap gap-3">
                <span v-for="std in inmates"
                    class="bg-crimson p-2 rounded-xl text-xs font-medium flex justify-center items-center">
                    {{ std }}
                </span>
            </div>
        </div>



    </div>
</template>

<script setup>
defineProps({
    generalDetails: Object,
    otherDetails: Object,
    parentsDetails: Object,
})

const inmates = [
    "710020104012",
]
</script>

<style scoped></style>