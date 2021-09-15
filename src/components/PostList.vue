<template>
  <div>
    <router-link :to="{ name: 'postDetail', params: { id: postId } }">
      <p>{{ post.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["post", "postId"],
};
</script>

<style>
</style>