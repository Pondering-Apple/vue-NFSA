<template>
  <menuBar />
  <CloudContainer />
  <footerContents />
</template>

<script>
import CloudContainer from './components/cloudContainer.vue'
import menuBar from './components/header.vue'
import footerContents from './components/footer.vue'

export default {
  name: 'App',
  components: {
    menuBar,
    footerContents,
    CloudContainer
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body,
template,
div,
h1,
h2,
h3,
h4,
h5,
h6,
a,
p {
  margin: 0;
  padding: 0;
}
</style>
