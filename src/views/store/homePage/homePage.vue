<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>

export default {
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
    handleCode() {
      console.log("发送获取token请求")
    },
    goToSpringLogin() {
      // 使用路由导航到登录页
      // 构建OAuth2.0授权链接

      const clientId = 'mall-id';
      const redirectUri = 'http://localhost:9999/home';
      const authorizationUrl = `http://localhost:8882/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      // 重定向到授权页面
      window.location.href = authorizationUrl;
    }
  },
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
