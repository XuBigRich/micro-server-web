<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="loginHandler">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="loginParam.username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="loginParam.password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>

import {login} from "@/api/api";
import {reactive} from 'vue';
import {ElMessage} from 'element-plus';
const loginParam = reactive({
  username: '',
  password: ''
});

const loginHandler = () => {
  // 在这里添加登录逻辑
  if (loginParam.username === 'user' && loginParam.password === 'password') {
    // 登录成功
    alert('登录成功！');
    // 可以导航到其他页面或执行其他操作
    login(loginParam).then(res => {
      ElMessage.success('发送成功');
      window.location.href = res.calbackUrl;
    }).catch(err => {
      ElMessage.warning(err.msg);
    });
  } else {
    // 登录失败
    alert('登录失败，请检查用户名和密码。');
  }
};
</script>

<style scoped>
.login {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  font-weight: bold;
}

input {
  padding: 5px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>
