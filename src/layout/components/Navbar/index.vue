<template>
  <div id="header">
    <button @click="goToHome">Go to Home</button>
    <button @click="removeLoginApi">注销</button>
  </div>
</template>

<script>
import {removeLogin} from "@/api/api";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  methods: {
    goToHome() {
      this.$router.push('/index');
    },

// import {ElMessage} from "element-plus";

    removeLoginApi: () => {
      removeLogin()
      // removeLogin().then(res => {
      //   ElMessage.success('发送成功'+res);
      // }).catch(err => {
      //   ElMessage.warning(err.msg);
      // });
    }
  }
}
</script>

<style scoped>
#header {
  border: solid crimson;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
}
</style>
