<template>
  <div id="Post">
    <h1>Post (SurveyList)</h1>
    <p>업로드 된 설문이 모여있는 게시판</p>
    <div v-for="post in postList" :key="post.id" class="list-Post">
      <Post :post="post" :postId="post.id" />
    </div>
    <router-link :to="{name: 'getPoint'}">
      <button class="btn-getPoint">포인트 받기</button>
    </router-link>
    
  </div>
</template>

<script>
import Post from "../components/PostList.vue";

export default {
  components: { Post },
  data() {
    return {
      postList: [
        { title: "post one", id: 1 },
        { title: "post two", id: 2 },
        { title: "post three", id: 3 },
      ],
    };
  },
};
</script>

<style>
#Post .list-Post a {
  text-decoration: underline;
  color: black;
}
</style>