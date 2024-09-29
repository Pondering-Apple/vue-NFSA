<template>
  <div>
    <div class="itemContainers">
      <collectionItem />
    </div>
  </div>
</template>

<script>
import collectionItem from './collectionItem.vue'

export default {
  name: 'CollectionDisplay',
  components: {
    collectionItem
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'CloudContainer' })
    }
  }
}
</script>

<style scoped>
.itemContainers {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;

  box-sizing: border-box;
}
</style>
