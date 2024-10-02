<template>
  <div>
    <h1>{{ countryName }}</h1>
    <p>This is the page for {{ countryName }}.</p>
  </div>
</template>

<script>
export default {
  name: 'CountryPage',
  computed: {
    countryName() {
      return decodeURIComponent(this.$route.params.country)
    }
  }
}
</script>

<style scoped></style>
