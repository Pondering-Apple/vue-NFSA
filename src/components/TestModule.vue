<template>
  <h2>Test Module</h2>
  <WorldMap :fill="fillColor" :stroke="strokeColor" @country-click="onCountryClick" />
</template>

<script>
import WorldMap from 'world-map-vue'

export default {
  name: 'TestModule',
  components: {
    WorldMap
  },
  data() {
    return {
      fillColor: 'red',
      strokeColor: 'black'
    }
  },
  methods: {
    onCountryClick(countryCode) {
      alert(`Country clicked: ${countryCode}`)
    }
  }
}
</script>

<style scoped></style>
