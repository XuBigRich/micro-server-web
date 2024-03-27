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
