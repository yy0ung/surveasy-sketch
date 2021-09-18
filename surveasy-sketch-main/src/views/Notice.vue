<template>
  <div id="Notice">
    <h1>Notice</h1>
    <p>공지사항 게시판</p>
    <div v-for="notice in noticeList" :key="notice.id" class="list-Notice">
      <Notice :notice="notice" :noticeId="notice.id" />
    </div>
  </div>
</template>

<script>
import Notice from "../components/NoticeList.vue";
export default {
  components: { Notice },
  data() {
    return {
      noticeList: [
        { title: "notice one", id: 1 },
        { title: "notice two ", id: 2 },
        { title: "notice three", id: 3 },
      ],
    };
  },
};
</script>

<style>
#Notice .list-Notice a {
  text-decoration: underline;
  color: black;
}
</style>