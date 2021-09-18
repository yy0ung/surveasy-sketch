<template>
  <div id="Point">
    <h1>Get point</h1>
    <div class="input-Id">
      <input type="text" placeholder="user ID" v-model="userID">
    </div>
    <div class="input-File">
      <input type="file" class="fileAdd" @change="uploadFiles"/>
    </div>
    <button class="btn-getPoint">포인트 적립하기</button>
    
    
    
  </div>
</template>

<script>
import storage from '../firebase'

export default {
  name: "Point",
  data() {
    return{
      userID: null
    }
    
  },
  methods: {
    uploadFiles(e){
      var fileName = e.target.files[0]
      var storageRef = storage.ref('post_name'+'/'+this.userID)
      storageRef.put(fileName)
    },
    
  }

}
</script>

<style>

</style>