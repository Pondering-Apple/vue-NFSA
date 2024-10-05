<template>
  <div>
    <h1>{{ countryName }}</h1>
    <p>This is the page for {{ countryName }}</p>
    <!-- <div v-if="errorMessages">{{ errorMessages }}</div> -->
    <div>
      <h2>Songs from {{ countryName }}:</h2>
      <div v-for="song in songs" :key="song.id" class="itemContainer">
        <div v-if="(song.hasMedia = false)">
          <p>This is where the image shall be</p>
        </div>
        <p>{{ song.title }}</p>
        <p>{{ song.countries }}</p>
        <p>{{ song.forms }}</p>
        <!-- <p>{{ song.parentTitle.genres }}</p> -->
        <!-- <p>{{ song.productionDates.type }}</p> -->
      </div>
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
    console.log('Is fetchSongsByCountry available?', typeof this.fetchSongsByCountry)
    this.fetchSongsByCountry(this.countryName)
  },
  methods: {
    fetchSongsByCountry(countryName) {
      const url = `https://api.collection.nfsa.gov.au/search?&query=songs&countries=${encodeURIComponent(countryName)}` // Encode the country name
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

<style scoped>
template {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.collectionContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}
.itemContainer {
  width: 80%;
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
