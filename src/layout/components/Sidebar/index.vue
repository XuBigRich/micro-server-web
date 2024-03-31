<template>
  <div class="sidebar">
    <el-button @click="goToSpringLogin" round="true">Go to Spring Login</el-button>
    <el-button @click="goToLogin" round="true">Go to Login</el-button>
    <el-button @click="goToOrder" round="true">Go to Order</el-button>
    <el-button @click="goToGrant" round="true">Go to Grant</el-button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  methods: {
    goToSpringLogin() {
      // 使用路由导航到登录页
      // 构建OAuth2.0授权链接

      const clientId = 'messaging-client';
      // const redirectUri = 'http%3A%2F%2F127.0.0.1%3A8080%2Ftoken%2Fauth%2FauthToken';
      const redirectUri = 'http%3A%2F%2Flocalhost%3A9999%2F';
      // const authorizationUrl = `http://localhost:8882/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
      const authorizationUrl = `http://127.0.0.1:8882/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=message.read`;
      // 重定向到授权页面
      window.location.href = authorizationUrl;
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToOrder() {
      this.$router.push("/order");
    },
    goToGrant() {
      this.$router.push("/grant");
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 200px;
}
</style>
