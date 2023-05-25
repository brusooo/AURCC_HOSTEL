<template >
  <div class="bg-slate-300 gap-5">

   <div class="bg-blue-100 flex gap-16 pl-3 p-2"><button :class="{ 'bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center': accepted == 'accepted' }" @click="setaccepted">accepted</button>
            <button :class="{ 'bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center': denied == 'denied' }" @click="setdenied">denied</button>
            <button :class="{ 'bg-blue-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center': pending == 'pending' }" @click="setpending">pending</button></div>
       <div v-if="pending == 'pending'" class="">
      
        <ul v-for="item in data" :key="item.id" class="flex flex-col lg:flex-row lg:gap-5 gap-3 p-4 bg-white shadow-lg shadow-slate-400">
                   <div class="flex flex-row gap-3 lg:gap-8 ">
                    <div class="">
                        <li>name</li>
                        <li class="text-base text-gray-400">xample@gmail.com</li>
                    </div>
                    <div class="flex flex-col lg:flex-row lg:gap-3" >from:
                        <li class="text-slate-400 text-sm pt-0.5">{{ item.from_ }}</li> </div>
                      <div class="flex flex-col lg:flex-row lg:gap-3">to:
                        <li class="text-slate-400 text-sm pt-0.5"> {{ item.to_ }}</li>
                    <li class="text-slate-400 text-sm pt-0.5 w-16"> {{ item.reason_ }}</li></div>
                   </div>
            
          
                  <div class="flex gap-4 lg:pt-4">
                                                        <button @click="updatePost(item.id, { id: item.id, stuid_: item.stuid_, from_: item.from_, to_: item.to_, accepted_by: 'wadernaccepted', reason_: item.reason_, informed_parent_on: item.informed_parent_on })"
                                                            class=" bg-indigo-500 hover:bg-indigo-600 text-white font-bold lg:py-0 py-1 px-6 rounded">accept</button>
                                                            <button @click="updatePost(item.id, { id: item.id, stuid_: item.stuid_, from_: item.from_, to_: item.to_, accepted_by: 'waderndenied', reason_: item.reason_, informed_parent_on: item.informed_parent_on })"
                                                             class=" bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-6 rounded">deny</button>
                                                    </div>
          

                </ul>
                <div v-if="!data">no items....</div>
       </div>
            
        <div v-if="accepted == 'accepted'" class="">
            
            <ul v-for="item in data1" :key="item.id" class="flex flex-col lg:flex-row lg:gap-5 gap-3 p-4 bg-white shadow-lg shadow-slate-400">
                       <div class="flex flex-row gap-3 lg:gap-8 ">
                        <div class="">
                            <li>name</li>
                            <li class="text-base text-gray-400">xample@gmail.com</li>
                        </div>
                        <div class="flex flex-col lg:flex-row lg:gap-3" >from:
                            <li class="text-slate-400 text-sm pt-0.5">{{ item.from_ }}</li> </div>
                          <div class="flex flex-col lg:flex-row lg:gap-3">to:
                            <li class="text-slate-400 text-sm pt-0.5"> {{ item.to_ }}</li></div>
                            <li class="text-slate-400 text-sm pt-0.5 w-16"> {{ item.reason_ }}</li>
                       </div>
            
          
                      <div class="flex gap-4 lg:pt-4">
                                                            <button 
                                                                class=" bg-green-600 hover:bg-indigo-600 text-white font-bold lg:py-0 py-1 px-6 rounded">accepted</button>
                                                               
                                                        </div>
          

                    </ul>
                    <div v-if="!data1">no items....</div>
           </div>
            
            <div v-if="denied == 'denied'" class="">
                
                <ul v-for="item in data2" :key="item.id" class="flex flex-col lg:flex-row lg:gap-5 gap-3 p-4 bg-white shadow-lg shadow-slate-400">
                           <div class="flex flex-row gap-3 lg:gap-8 ">
                            <div class="">
                                <li>name</li>
                                <li class="text-base text-gray-400">xample@gmail.com</li>
                            </div>
                            <div class="flex flex-col lg:flex-row lg:gap-3" >from:
                                <li class="text-slate-400 text-sm pt-0.5">{{ item.from_ }}</li> </div>
                              <div class="flex flex-col lg:flex-row lg:gap-3">to:
                                <li class="text-slate-400 text-sm pt-0.5"> {{ item.to_ }}</li></div>
                                <li class="text-slate-400 text-sm pt-0.5 w-16"> {{ item.reason_ }}</li>
                           </div>
            
          
                          <div class="flex gap-4 lg:pt-4">
                                                                <button 
                                                                    class=" bg-red-600 hover:bg-indigo-600 text-white font-bold lg:py-0 py-1 px-6 rounded">denied</button>
                                                               
                                                            </div>
          

                        </ul>
                        <div v-if="!denied">no items....</div>
               </div>
       
          
  </div>


    
</template>


<script setup>
import { ref } from 'vue'
const accepted = ref('');
const denied = ref('')
const pending = ref('pending')

// reactive state
const { data } = await useFetch('http://127.0.0.1:8000/users/acceptedhod1')

const { data : data1 } = await useFetch('http://127.0.0.1:8000/users/acceptedwadern')

const { data : data2 } = await useFetch('http://127.0.0.1:8000/users/deniedwadern')
console.log(data)
console.log(data1)
console.log(data2)
// upadte values
// const post = { id: '', from_: '', to_: '', reason_: 'reason 4', informed_parent_on: '' };

const updatePost = async (id, post) => {
    
    const response = await fetch('http://127.0.0.1:8000/updateuser/'+id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
    const createdData = await response.json();
    console.log(createdData);
};

function setaccepted() {
    accepted.value = 'accepted';
    denied.value = 'non'
    pending.value = 'non'
    console.log(pending)
    
}

function setdenied() {
    accepted.value = 'non';
    denied.value = 'denied'
    pending.value = 'non'
    console.log(denied)

}

function setpending() {
    accepted.value = 'non';
    denied.value = 'non'
    pending.value = 'pending'
    console.log(pending)

}

</script>


// <script>


// export default {

//     data() {
//         return {
//             user: {
//                 "0": {
//                     "from_": "2022-05-19",
//                     "to_": "2022-05-19",
//                     "informed_parent_on": "10:30:00",
//                     "id": 1,
//                     "reason_": "rea here"
//                 },
//                 "1": {
//                     "from_": "2022-05-19",
//                     "to_": "2022-05-19",
//                     "informed_parent_on": "10:30:00",
//                     "id": 2,
//                     "reason_": "rea 2 here"
//                 },
//                 "2": {
//                     "from_": "2022-05-19",
//                     "to_": "2022-05-19",
//                     "informed_parent_on": "10:30:00",
//                     "id": 3,
//                     "reason_": "rea 3 here"
//                 },
//                 "3": {
//                     "from_": "2023-06-01",
//                     "to_": "2023-06-01",
//                     "informed_parent_on": "03:02:00",
//                     "id": 4,
//                     "reason_": "grd"
//                 }
//             }
//         };
//     },


//     setup() {
    
       


//         const post = { id: '', from_: '', to_: '', reason_: '', informed_parent_on: '' };

//         const createPost = async () => {
//             const response = await fetch('http://127.0.0.1:8000/users/all', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
               
//             });
//             const users = await response.json();
//             console.log(users);

//             parseJSON() {
//                 try {
//                     this.jsonObject = JSON.parse(this.users);
//                     console.log(jsonObject)
//                 } catch (error) {
//                     console.error(error);
//                 }
//             },


//             function data() {
//                 return {
//                     users: users
//                 };
//             }
//             data();
//         };

//         return {
        
//             createPost,
//         };
//     },
// };
// </script> -->
