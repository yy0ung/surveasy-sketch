<template>
  <div>
    <router-link :to="{ name: 'noticeDetail', params: { id: noticeId } }">
      <p>{{ notice.title }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["notice", "noticeId"],
};
</script>

<style>
</style>