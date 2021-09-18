<template>
  <div id="postDetail">
    <h1>Post detail</h1>
    <p>Here is post {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "postDetail",
};
</script>

<style>
</style>