<template >
  <div class="bg-slate-300 gap-5">


            
        <div class="">
        
                <ul v-for="item in data" :key="item.id" class="flex flex-col lg:flex-row lg:gap-5 gap-3 p-4 bg-white shadow-lg shadow-slate-400">
                           <div class="flex flex-col lg:flex-row gap-3 lg:gap-8 ">

                            <div class="flex flex-row">
                                <div class="">
                                    <li>name</li>
                                    <li class="text-base text-gray-400 pr-2 lg:pr-5">xample@gmail.com</li>
                                </div>
                                <div class="flex flex-col lg:flex-row lg:gap-3" >from:
                                    <li class="text-slate-400 text-sm pt-0.5 pr-2 lg:pr-5">{{ item.from_ }}</li> </div>
                                  <div class="flex flex-col lg:flex-row lg:gap-3">to:
                                    <li class="text-slate-400 text-sm pt-0.5"> {{ item.to_ }}</li></div>
                                    
                            </div>
                            

                                    <div class="flex flex-row">
                                        <div class="flex flex-col lg:flex-row lg:gap-3">
                                            <li class="text-slate-400 text-sm pt-0.5 w-20"> {{ item.reason_ }}</li></div>
                                        <div v-if="item.accepted_by == 'hodaccepted'" class=" text-sm">accepted by HOD</div>
                                    <div v-if="item.accepted_by == 'notaccepted'" class=" text-sm">pending</div>
                                    <div v-if="item.accepted_by == 'hoddenied'" class=" text-sm">denied by HOD</div>
                                    <div v-if="item.accepted_by == 'wadernaccepted'" class=" text-sm">accepted by HOD and Wadern</div>
                                    <div v-if="item.accepted_by == 'waderndenied'" class=" text-sm">denied by wadern</div>
                                    </div>
                                
                                
                           </div>
            
          
          

                        </ul>
                       
               </div>
       
          
  </div>


    
</template>


<script setup>
import { ref } from 'vue'

// reactive state
const { data } = await useFetch('http://127.0.0.1:8000/getpermission/15')


console.log(data)



</script>
