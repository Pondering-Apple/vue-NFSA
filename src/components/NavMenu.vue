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
    <RouterLink to="/">SONGS BY COUNTRY</RouterLink>
    <!-- <RouterLink to="/test">Test Page</RouterLink> -->
  </nav>
  <RouterView />
</template>

<style scoped>
.navMenu {
  background-color: rgba(0, 170, 255, 0.3);
  font-size: 3rem;
  text-align: center;
  padding-top: 2%;
  padding-bottom: 2%;
  text-decoration: none;
  box-shadow: 0px 1px 50px 1px rgba(0, 0, 0, 0.75);
}
.navMenu > a {
  text-decoration: none;
  color: rgb(36, 36, 36);
  font-weight: bold;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .navMenu {
    font-size: 2rem;
  }
}

@media (max-width: 767px) {
  /* Styles for phones */
  .navMenu {
    font-size: 1.5rem;
  }
}
</style>
