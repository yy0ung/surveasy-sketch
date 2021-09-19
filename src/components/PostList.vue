<template>
  <div>
    <router-link :to="{ name: 'postDetail', params: { id: postId } }">
      <p>{{ post.title }}</p>
    </router-link>
    <router-link :to="{name: 'getPoint', params: {id: postId}}">
      <button class="btn-getPoint">포인트 받기</button>
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