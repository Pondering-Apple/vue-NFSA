<template>
  <div>
    <h4>Country Name</h4>
    <p>Number of Items</p>
  </div>
</template>

<script>
export default {
  name: 'tagCloud'
}
</script>

<style scoped>
div {
  cursor: pointer;
  height: 120px;
  width: 120px;
  background-color: green;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
