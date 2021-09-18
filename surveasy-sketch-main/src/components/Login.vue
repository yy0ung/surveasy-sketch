<template>
  <div id="Login">
    <h1>LOGIN</h1>
    <div>
      <button class="btn-Login" @click="loginToggle">로그인하기</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    loginToggle() {
      this.$store.commit("loginToggle");
      this.$router.go(-1);
    },
  },
};
</script>

<style>
#Login .btn-Login {
  background-color: #fff;
  border: 2px solid rgb(40, 65, 40);
  margin-right: 2px;
  padding: 10px 20px;
  border-radius: 4px;
  color: rgb(40, 65, 40);
  font-size: 1rem;
  font-weight: bold;
}
#Login .btn-Login:hover {
  color: #fff;
  background-color: rgb(40, 65, 40);
}
</style>