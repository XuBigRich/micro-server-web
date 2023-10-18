<template>
  <div class="home">
    <h1>Home Page</h1>
    <button @click="goToLogin">Go to Login</button>
    <button @click="goToOrder">Go to Order</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      // 使用路由导航到登录页
      // 构建OAuth2.0授权链接
      const clientId = 'client1';
      const redirectUri = 'http://localhost:9999/order';
      const authorizationUrl = `http://localhost:8882/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      // 重定向到授权页面
      window.location.href = authorizationUrl;
    },
    goToOrder() {
      this.$route.push("/orderr")
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
