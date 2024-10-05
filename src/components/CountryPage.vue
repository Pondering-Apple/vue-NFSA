<template>
  <div>
    <h1>{{ countryName }}</h1>
    <p>This is the page for {{ countryName }}</p>
    <!-- <div v-if="errorMessages">{{ errorMessages }}</div> -->
    <div>
      <h2>Songs from {{ countryName }}:</h2>
      <ul>
        <li v-for="song in songs" :key="song.id">
          {{ song.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryPage',
  data() {
    return {
      songs: [
        { id: 1, title: 'Song 1' },
        { id: 2, title: 'Song 2' },
        { id: 3, title: 'Song 3' }
      ], // Initialize with a dummy song
      errorMessages: null
    }
  },
  computed: {
    countryName() {
      return decodeURIComponent(this.$route.params.country)
    }
  },
  mounted() {
    this.fetchSongsByCountry(this.countryName)
  },
  methods: {
    fetchSongsByCountry() {
      const url = `https://api.collection.nfsa.gov.au/search?&query=songs&countries=Australia` // Encode the country name
      // ${encodeURIComponent(countryName)} This goes on the end of the url for dynamic country names
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('Full API Response:', data) // Log the entire response
          if (data.results && data.results.length) {
            this.songs = data.results
            console.log('Songs Assigned:', this.songs) // Verify songs are assigned
          } else {
            this.errorMessages = 'No songs found for this country'
          }
        })
        .catch((error) => {
          console.error('Error fetching Songs:', error)
          this.errorMessages = 'An error occurred while fetching songs'
        })
    }
  }
}
</script>

<style scoped></style>
