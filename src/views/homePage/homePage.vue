<template>
  <div class="home">
    <h1>Home Page</h1>
    <button @click="goToLogin">Go to Login</button>
    <button @click="goToOrder">Go to Order</button>
    <button @click="goToGrant">Go to Grant</button>
  </div>
</template>

<script>

export default {
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
