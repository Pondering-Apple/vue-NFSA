<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
export default {
  name: 'NavMenu'
}
</script>

<template>
  <nav class="navMenu">
    <RouterLink to="/">Home Page</RouterLink>
    <RouterLink to="/test">Test Page</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>
.navMenu {
  background: yellow;
  font-size: 2rem;
  display: flex;
  justify-content: space-between;
}
</style>
