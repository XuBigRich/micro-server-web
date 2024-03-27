<template>
  <Navbar/>
  <div class="content">
    <Sidebar/>
    <transition name="fade-transform" mode="out-in">
      <router-view id="body"/>
    </transition>
  </div>
</template>

<script>
import {Sidebar, Navbar} from './components';

export default {
  components: {
    Sidebar,
    Navbar
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: "layout",

}
</script>

<style scoped>
.content {
  display: flex;
}
</style>
