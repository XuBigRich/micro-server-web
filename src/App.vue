<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

// 监听路由信息的变化
router.afterEach((to, from) => {
  console.log('路由信息变化:', to, from);
});
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
