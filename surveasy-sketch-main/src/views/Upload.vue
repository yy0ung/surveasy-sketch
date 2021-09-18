<template>
  <div id="Upload">
    <h1>Upload</h1>
    <p>패널 제도, 서베이지 서비스에 대한 자세한 설명</p>

    <button class="btn-Upload" @click="uploadClick">업로드 하러가기</button>
  </div>
</template>

<script>
export default {
  methods: {
    uploadClick() {
      if (!this.$store.state.login) {
        this.$router.push("/login");
      } else {
        this.$router.push("/uploadpage");
      }
    },
  },
};
</script>

<style>
#Upload .btn-Upload {
  background-color: #fff;
  border: 2px solid rgb(40, 65, 40);
  margin-right: 2px;
  padding: 10px 20px;
  border-radius: 4px;
  color: rgb(40, 65, 40);
  font-size: 1rem;
  font-weight: bold;
}
#Upload .btn-Upload:hover {
  color: #fff;
  background-color: rgb(40, 65, 40);
}
</style>