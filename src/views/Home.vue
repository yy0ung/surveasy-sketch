<template>
  <div id="home">
    <h1>Home</h1>

    <div v-if="!this.$store.state.login">
      <router-link :to="{ name: 'Upload' }">
        <button class="btn-Home">설문 업로드</button>
      </router-link>
      <router-link :to="{ name: 'Cal' }">
        <button class="btn-Home">가격 계산기</button>
      </router-link>
      <p>로그인 안 한 사람이 보는 Home</p>
    </div>
    <div v-if="this.$store.state.login">
      <h1>Logined</h1>
      <p>Dashboard</p>
      <p>로그인 한 사람이 보는 Home</p>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
#home .btn-Home {
  background-color: #fff;
  border: 2px solid rgb(40, 65, 40);
  margin-right: 2px;
  padding: 10px 20px;
  border-radius: 4px;
  color: rgb(40, 65, 40);
  font-size: 1rem;
  font-weight: bold;
}
#home .btn-Home:hover {
  color: #fff;
  background-color: rgb(40, 65, 40);
}
</style>
