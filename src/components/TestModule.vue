<template>
  <div>
    <h1>API Data Fetch Example</h1>
  </div>
</template>

<script>
export default {
  name: 'ApiDataFetch',
  mounted() {
    // Fetch the API data when the component is mounted
    this.fetchData()
  },
  methods: {
    fetchData() {
      const apiUrl = 'https://api.collection.nfsa.gov.au/search?query=songs&countries=United States' // Define the API URL

      fetch(apiUrl)
        .then((response) => response.json()) // Convert the response to JSON
        .then((data) => {
          console.log('API Data:', data) // Log the fetched data to the console
        })
        .catch((error) => {
          console.error('Error fetching the API:', error) // Handle any errors
        })
    }
  }
}
</script>

<style scoped></style>
