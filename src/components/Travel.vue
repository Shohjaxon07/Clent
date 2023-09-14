<template >
    <div class="container mt-4" >
        <div class="card mb-3 " v-for="travel in data" :key="travel"> 
            
  <img :src="travel.image"  class="card-img-top" alt="...">
  <div class="card-body">
    
    <h5 class="card-title">{{travel.title}}</h5>
    <p class="card-text">{{travel.description}}</p>
    <div class="text-center">
        <router-link :to="{
            name: 'update',
            params:{
                id:travel._id
            }
        }"> <button class="btn btn-warning">Update</button> </router-link>
        <form action="" @submit.prevent="deleteTravel(travel._id)">
        <button type="submit" class= "btn btn-danger">delelte</button>

        </form>
        
        
        <!-- <router-link></router-link> -->
        
        
    </div>
  </div>
</div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import axios from "axios"

let data = ref([])
let getData =async () => {
    let result = await axios.get('https://yangi-travel.onrender.com/')

const response = result.data
// console.log(response);

    if(result.data){
         data.value.push(...result.data.travels)
    }
}
   
  getData()

 let deleteTravel = async (id) => {
    await axios.delete(`https://yangi-travel.onrender.com/${id}`)

    data.value = []
     getData()
 }
 

</script>
<style >
    
</style>