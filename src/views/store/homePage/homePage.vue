<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>

import {getToken} from "@/api/api";
import {ElMessage} from "element-plus";


export default {
  data() {
    return {
      tokenParams: {
        token: undefined
      }
    };
  },
  mounted() {
    // 获取 URL 中的查询参数
    const code = this.$route.query.code;

    // 检查是否存在 code 参数
    if (code) {
      // 执行相应的方法，例如：
      this.handleCode(code);
    }
  },
  methods: {
    handleCode(code) {
      this.tokenParams.token = code;
      console.log(this.tokenParams.token)
      // 可以导航到其他页面或执行其他操作
      getToken(this.tokenParams.token).then(res => {
        // ElMessage.success('发送成功');
        console.log(res)
      }).catch(err => {
        ElMessage.warning(err.msg);
      });
    }

  }
};
</script>

<style scoped>
.home {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
