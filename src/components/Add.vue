<template >
  <div class="container">
    <h2 class="text-center mt-3">Add new travel</h2>
    <form class="mt-5" @submit.prevent = "addNewTravel"> 
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          
          aria-describedby="emailHelp"
          v-model="title"
        />
        
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
        
          v-model="description"
        />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="image"
         
          v-model="image"
        />
         <button type="submit" class="btn btn-primary mt-4">submit</button>
      </div>
      
    </form>
  </div>
</template>


<script setup>
import axios from "axios"
import {ref} from 'vue'

let title = ref('')
let description = ref('')
let image = ref('')






const addNewTravel = async () => {
  await axios.post('https://yangi-travel.onrender.com/add',{
    title:title.value,
    description:description.value,
    image:image.value
  })
  console.log(title)
 
}
</script>


<style >
</style>