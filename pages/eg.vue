<template>
    <!-- <div>
        <h1>Create a New Post</h1>
        <form @submit.prevent="createPost">
            <input type="number" v-model="post.id" placeholder="id" />
            <input type="date" v-model="post.to_" placeholder="to" />
            <input type="date" v-model="post.from_" @input="logInputValue" placeholder="from" />
            <input type="text" v-model="post.reason_" placeholder="reason here" />
            <input type="time" v-model="post.informed_parent_on" placeholder="informed parent on" />
            <button type="submit">Create Post</button>
        </form>
    </div> -->
    <div class="container max-w-screen-lg mx-auto">
                <div>
                    <h2 class="font-semibold text-xl text-gray-600 pl-4 lg:pl-40  ">Leave Form</h2>


                    <div class="bg-white rounded  p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-3 text-sm grid-cols-1 lg:grid-cols-3">


                            <div class="lg:col-span-2">
                                <div class="grid gap-6 gap-y-6 text-sm grid-cols-1 lg:pl-32 md:grid-cols-5">
                                    <!-- <input type="number" v-model="post.id" placeholder="id" /> -->


                                    <div class="md:col-span-6">
                                        <label class="text-sm text-slate-600" for="email">Leave Period</label>
                                        <div class="md:col-span-3 pl-3">
                                            <label for="email " class="text-slate-400 text-sm">From</label>
                                            
                                            <input type="date" v-model="post.from_"
                                                :min="new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) > 9 ? '' : '0') + (new Date().getMonth() + 1) + '-' + (new Date().getDate() > 9 ? '' : '0') + new Date().getDate()"
                                                class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" 
                                                 />
                                        </div>
                                        <div class="md:col-span-2 pl-3">

                                            <label class="text-slate-400 text-sm">To</label>

                                            <input type="date" v-model="post.to_" name="email" id="email"
                                                :min="new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) > 9 ? '' : '0') + (new Date().getMonth() + 1) + '-' + (new Date().getDate() > 9 ? '' : '0') + new Date().getDate()"
                                                class="h-8 border mt-1 rounded px-4 w-full bg-gray-50"
                                                placeholder="" />
                                        </div>
                                    </div>

                                    <div class="md:col-span-6">
                                        <label class="text-slate-600 text-sm">Reason</label>
                                        <input type="text" v-model="post.reason_" name="address" id="address"
                                            class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>

                                    <div class="md:col-span-6">
                                        <label class="text-slate-600 text-sm">Informed Parent On</label>
                                        <input type="time" v-model="post.informed_parent_on" name="city" id="city"
                                            class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                    </div>






                                    <div class="md:col-span-5 text-right pt-3">
                                        <div class="inline-flex items-end ">
                                            <button @click="createPost"
                                                class=" bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-8 rounded">Submit</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
</template>

<script>


export default {
    
    setup() {
     
        function logInputValue() {
            console.log(post.from_)
        
        }
       
        
        const post = { id: '', from_: '', to_: '', reason_: '', informed_parent_on: '' };

        const createPost = async () => {
            const response = await fetch('http://127.0.0.1:8000/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            });
            const createdData = await response.json();
            console.log(createdData);
        };

        return {
            post,
            createPost,
        };
    },
};
</script>
