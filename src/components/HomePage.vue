<template>
  <h2>Home Page</h2>
  <main class="cloudContainer">
    <div class="tagCloud" style="cursor: pointer" @click="directToItemList">
      <h2>Click to view items</h2>
      <h5>number of items</h5>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomePage',

  data() {},
  methods: {
    directToItemList() {
      this.$router.push({
        path: '/CollectionList'
      })
    }
  }
}
</script>

<style scoped>
main {
  width: 100%;
  height: 800px;
  background: blue;
}
.tagCloud {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  background-color: green;
}
</style>
