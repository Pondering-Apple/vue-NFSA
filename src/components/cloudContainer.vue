<template>
  <div class="title" v-if="tagCloudVisibility">
    <h2 @click="changeVisibility">Back</h2>
    <h2>Songs from [insert Country Here]</h2>
  </div>
  <div class="container" v-if="dynamicPageVisibility">
    <tagCloud @click="changeVisibility" />
  </div>

  <collectionDisplay v-if="tagCloudVisibility" />
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
      tagCloudVisibility: false,
      dynamicPageVisibility: true
    }
  },
  methods: {
    changeVisibility() {
      this.dynamicPageVisibility = !this.dynamicPageVisibility
      this.tagCloudVisibility = !this.tagCloudVisibility
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  border-bottom: 5px;
  text-align: center;
}
.title > h2 {
  display: inline;
}
div.container {
  display: flex;
  flex-wrap: wrap;
  height: 800px;
  width: 100%;
  background-color: red;
}
</style>
