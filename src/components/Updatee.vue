<template >
  <div class="container">
    <form class="mt-5" @submit.prevent="updateTravel"> 
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          name="title"
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
          name="description"
          v-model="description"
        />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="image"
          name="image"
          v-model="image"
        />
         <button type="submit" class="btn btn-primary mt-4" 
         >Submit</button>
      </div>
      
    </form>
  </div>
</template>


<script setup>
import {ref, onMounted} from  'vue'
import axios from 'axios'
import {useRoute} from 'vue-router'

let router = useRoute()

let title = ref('')
let description = ref('')
let image = ref('')

  let getTravel = async (id) => {
    let response = await axios.get(`https://yangi-travel.onrender.com/${id}`)
    let travel = response.data.travel
    title.value = travel.title
    description.value = travel.description
    image.value = travel.image
    
  }

  let updateTravel = async () => {

    let id = getIDformURL()
    await axios.put(`https://yangi-travel.onrender.com/${id}`, {
      title :title.value,
      description :description.value,
      image :image.value
    })
  }





let getIDformURL = () => {
  let url = window.location.href
  let parth = url.split('/')
  let id = parth[parth.length - 1]
  return id
}
onMounted(() => {
  let id = getIDformURL()
  getTravel(id)
})



</script>


<style >
</style>