<template>
  <div>
    <h1>Songs in Movies</h1>
    <div class="menuItems">
      <h2 class="ausMenu">From Australia</h2>
      <h2 class="rowMenu">Rest of the World</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Greet'
}
</script>

<style scoped>
div {
  text-align: center;
  background-color: blue;
}
div.menuItems {
  display: flex;
  justify-content: space-evenly;
}
h2 {
  display: inline;
}
</style>
