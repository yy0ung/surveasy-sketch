<template>
<div>
  <div id="nav">
    <div v-if="!this.$store.state.login">
      <router-link :to="{ name: 'Login' }">
        <button class="btn-Login">Login</button>
      </router-link>
    </div>
    <div v-else>
      <button class="btn-Login" @click="logoutToggle">LOGOUT</button>
    </div>
    <div id="surveasyLogo">
      <router-link to="/">Surveasy</router-link>
    </div>
    <div class="index-Nav">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link :to="{ name: 'Upload' }">Upload</router-link></div>
      <div><router-link :to="{ name: 'About' }">About</router-link></div>
      <div><router-link :to="{ name: 'Notice' }">Notice</router-link></div>
      <div><router-link :to="{ name: 'Post' }">Post</router-link></div>
    </div>
  </div>
  <router-view />
</div>
</template>

<script>
import Login from "./components/Login";

export default {
  components: { Login },
  methods: {
    logoutToggle() {
      this.$store.commit("loginToggle");
      this.$router.push("/");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

#nav .btn-Login {
  position: absolute;
  right: 40px;
  top: 30px;
  font-size: 0.9rem;
  font-weight: lighter;
  background-color: #5a805a;
  color: #fff;
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
}

#nav .btn-Login:hover {
  background-color: #7aa37a;
}

#nav {
  padding: 30px;
}
#nav #surveasyLogo {
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #486948;
}

#nav .index-Nav {
  display: flex;
  justify-content: space-evenly;
  background-color: rgb(166, 201, 172);
  padding: 7px;
  border-radius: 5px;
  font-size: 1.1rem;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav .index-Nav a.router-link-exact-active {
  color: #76917a;
}
</style>
