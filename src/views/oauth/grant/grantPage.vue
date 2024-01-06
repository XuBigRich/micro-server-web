<script setup>

const grant = () => {
  // 使用路由导航到登录页
  // 构建OAuth2.0授权链接
  const clientId = 'client1';
  const redirectUri = 'http://localhost:9999/order';
  const authorizationUrl = `http://localhost:8080/user/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;
  // 重定向到授权页面
  window.location.href = authorizationUrl;
}

</script>

<template>
  <div class="centered-container">
    <img src="@/assets/logo.png" alt="Centered Image" class="centered-image">
  </div>
  <div class="button-container">
    <button @click="grant()">授权</button>
    <button @click="handleButtonClick('Button 2')">拒绝</button>
  </div>
</template>

<style scoped>
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.centered-image {
  max-width: 100%;
  max-height: 80vh;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px; /* 按钮之间的间距 */
  /* 你可以在这里添加其他样式，控制按钮的位置等 */
}
</style>
