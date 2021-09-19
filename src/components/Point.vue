<template>
  <div id="Point">
    <h1>Get point</h1>
    <div class="input-Id">
      <input type="text" placeholder="user ID" v-model="userID">
      <button class="btn-CheckId" @click="checkID">아이디 확인하기</button>
      <p>{{checkMsg}}</p>
    </div>
    <div class="input-File">
      <button class="uploadFile" @click="uploadData"> Upload Image</button>
      <p>{{uploadMsg}}</p>
      <input type="file" class="fileAdd" ref="fileInput" @change="uploadFiles" style="display: none" />
    </div>
    <router-link :to="{name :'Post'}">
      <button class="btn-getPoint">완료</button>
    </router-link>
    
    
    
    
  </div>
</template>

<script>
import storage from '../firebase'

export default {
  name: "Point",
  data() {
    return{
      userID: null,
      checkMsg:null,
      uploadMsg:null,
    }
    
  },
  methods: {
    checkID(){
      if(!this.userID==''){
        this.checkMsg = "올바른 아이디입니다."
      }
      
    },
    uploadData(){
      this.$refs.fileInput.click()
    },
    uploadFiles(e){
      var fileName = e.target.files[0]
      var storageRef = storage.ref(this.$route.params.id+'/'+this.userID)
      storageRef.put(fileName)
      this.uploadMsg = "포인트가 적립되었습니다."
      
    },
    
  }

}
</script>

<style>

</style>