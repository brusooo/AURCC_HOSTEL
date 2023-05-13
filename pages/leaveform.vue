<template>
    <div class="min-h-screen p-2 w-screen bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
            <div>
                <h2 class="font-semibold text-xl text-gray-600 pb-8">Leave Form</h2>


                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-3 text-sm grid-cols-1 lg:grid-cols-3">


                        <div class="lg:col-span-2">
                            <div class="grid gap-6 gap-y-6 text-sm grid-cols-1 md:grid-cols-5">
                                <div class="md:col-span-6">

                                    <label for="full_name">Name</label>
                                    <input type="text" name="full_name" id="full_name"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" />
                                </div>


                                <div class="md:col-span-6">
                                    <label class="text-base" for="email">Leave Period</label>
                                    <div class="md:col-span-3 pl-3">
                                        <label for="email">From</label>

                                        <input type="date" name="email" id="email"
                                            :min="new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) > 9 ? '' : '0') + (new Date().getMonth() + 1) + '-' + (new Date().getDate() > 9 ? '' : '0') + new Date().getDate()"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="" />
                                    </div>
                                    <div class="md:col-span-2 pl-3">

                                        <label for="email">To</label>

                                        <input type="date" name="email" id="email"
                                            :min="new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) > 9 ? '' : '0') + (new Date().getMonth() + 1) + '-' + (new Date().getDate() > 9 ? '' : '0') + new Date().getDate()"
                                            class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value=""
                                            placeholder="" />
                                    </div>
                                </div>

                                <div class="md:col-span-6">
                                    <label for="address">Reason</label>
                                    <input type="text" name="address" id="address"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                </div>

                                <div class="md:col-span-6">
                                    <label for="city">Informed Parent On</label>
                                    <input type="time" name="city" id="city"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                </div>






                                <div class="md:col-span-5 text-right pt-3">
                                    <div class="inline-flex items-end ">
                                        <button @click="submitForm"
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>
</template>


<style scoped></style>


<script>
var today = new Date();

console.log(today.getHours())

export default {
  data() {
    return {
      formData: {
        name: '',
        from:'',
        to:'',
        reason:'',
        inforemd_parent_on:'',


        // Initialize other form fields here
      }
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData)
        });

        if (response.ok) {
          this.showSuccessPopup();
        } else {
          throw new Error('Failed to submit form');
        }
      } catch (error) {
        console.error(error);
      }
    },
    showSuccessPopup() {
      alert('Submitted Successfully');
    }
  }
}
</script>
