<template>
  <div class="container">
    <div class="imagePlaceHolder"></div>
    <div class="itemInformation">
      <h3>Item Title</h3>
      <div class="itemLink">
        <p>Start of Description</p>
        <p><strong>Click for more...</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionItem'
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 20vh;
  display: flex;
  padding: 20px;
  background-color: green;
  border-left: 5px solid black;
  border-right: 5px solid black;
  box-sizing: border-box;
}
.imagePlaceHolder {
  height: 100%;
  width: 25vh;
  margin-right: 7%;
  display: inline-block;
  background-color: yellow;
}
.itemInformation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  box-sizing: border-box;
}
.itemLink {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
