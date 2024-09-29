<template>
  <div class="container">
    <tagCloud @click="toggleVisibility" />
    <tagCloud @click="toggleVisibility" />
    <tagCloud @click="toggleVisibility" />
  </div>
  <collectionDisplay v-if="isVisible" />
</template>

<script>
import tagCloud from './tagCloud.vue'
import collectionDisplay from './collectionDisplay.vue'

export default {
  name: 'CloudContainer',
  components: {
    tagCloud,
    collectionDisplay
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
div.container {
  display: flex;
  flex-wrap: wrap;
  height: 800px;
  width: 100%;
  background-color: red;
}
</style>
