<template>
  <!-- <h1>{{ countryName }}</h1>
    <p>This is the page for {{ countryName }}</p> -->
  <!-- <div v-if="errorMessages">{{ errorMessages }}</div> -->
  <div class="container">
    <div>
      <h2>Songs from {{ countryName }}:</h2>
      <div class="grid-container">
        <div v-for="song in songs" :key="song.id" class="itemContainer">
          <p>Title: {{ song.title }}</p>
          <p>Name: {{ song.name }}</p>
          <p>Countries involved: {{ formatArray(song.countries) }}</p>
          <p>Art Form: {{ formatArray(song.forms) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryPage',
  data() {
    return {
      songs: [], // Initialize with a dummy song
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
          alert('This country has no songs in the collection \n Please select another country')
          window.history.back()
          // LEAVE THESE COMMENTS IN. FOR SOME UNKNOWN REASON, THEY CHANGE THE BEHAVIOUR OF THE WEBSITE WHICH
          // SHOULD BE ILLEGAL CONSIDERING THE CODE SHOULDN'T BE AFFECTED BY COMMENTS. ONLY GOD KNOWS WHY THIS IS HAPPENING.
          // " I'M NOT EVEN JOKING. I'M NOT EVEN MAD. I'M JUST CONFUSED. I'M NOT EVEN SURE IF THIS
          // IS A JOKE. I'M NOT EVEN SURE IF I'M ALIVE. I'M NOT EVEN SURE IF I'M A HUMAN " - Github Copilot 5/10/2024 after seeing my previous comment
        })
    },
    formatArray(arr) {
      if (!Array.isArray(arr)) return arr // If it's not an array, return as is
      return arr.join(', ') // Join the array into a string with a comma separator
    }
  }
}
</script>

<style scoped>
.container {
  display: flex; /* Use flexbox */
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center horizontally */
  width: 100vw; /* Full width */
  height: auto; /* Adjust height based on content */
  text-align: center; /* Center text inside */
}
.grid-container {
  display: grid; /* Use CSS Grid */
  grid-template-columns: repeat(3, 1fr); /* Create 2 equal columns */
  gap: 20px; /* Add space between the columns */
  width: 100%;
  max-width: 1200px; /* Optional: set a max width */
  margin: 0 auto; /* Center the grid horizontally */
}
.itemContainer {
  display: flex; /* Use flexbox for items */
  flex-direction: column; /* Stack item details vertically */
  justify-content: center; /* Center items vertically */
  max-width: 600px; /* Optional: limit max width */
  height: auto; /* Adjust height based on content */
  background-color: green;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px; /* Add some spacing between items */
}

/* Other styles remain unchanged */
.imagePlaceHolder {
  height: 100%;
  width: 25vh;
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
