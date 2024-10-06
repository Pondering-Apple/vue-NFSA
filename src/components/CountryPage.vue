<template>
  <div class="container">
    <div>
      <h2 class="backMap" @click="goBack">&larr; Back to Map</h2>
      <h2 class="countryIntro">Songs from {{ countryName }}:</h2>
      <div class="grid-container">
        <div v-for="song in songs" :key="song.id" class="itemContainer">
          <p><strong>Title:</strong> {{ song.title }}</p>
          <p><strong>Name:</strong> {{ song.name }}</p>
          <p><strong>Countries involved:</strong> {{ formatArray(song.countries) }}</p>
          <p><strong>Language:</strong> {{ formatArray(song.languages) }}</p>
          <p><strong>Art Form:</strong> {{ formatArray(song.forms) }}</p>
        </div>
      </div>
      <div class="pageButtons">
        <button class="previousPage" v-if="currentPage > 1" @click="fetchPreviousPage">
          Previous Page
        </button>
        <button class="nextPage" v-if="currentPage < totalPages" @click="fetchNextPage">
          Next Page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryPage',
  data() {
    return {
      songs: [], // Store the songs
      errorMessages: null,
      currentPage: 1, // Start at page 1
      totalPages: 10 // Total number of pages (to be updated from API)
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
      const url = `https://api.collection.nfsa.gov.au/search?&query=songs&countries=${encodeURIComponent(countryName)}&page=${this.currentPage}` // API url with country name and page number
      // ${encodeURIComponent(countryName)} This goes on the end of the url for dynamic country names, it is here for debugging purposes
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log('Full API Response:', data)
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
        })
    },
    fetchNextPage() {
      this.currentPage += 1 // Increment the current page
      this.fetchSongsByCountry(this.countryName) // Fetch the next page
    },
    fetchPreviousPage() {
      this.currentPage -= 1 // Increment the current page
      this.fetchSongsByCountry(this.countryName) // Fetch the next page
    },
    formatArray(arr) {
      if (!Array.isArray(arr)) return arr // If it's not an array, return as is
      return arr.join(', ') // Join the array into a string with a comma separator
    },
    goBack() {
      window.history.back()
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  text-align: center;
}
.grid-container {
  display: grid; /* Use CSS Grid */
  grid-template-columns: repeat(3, 1fr); /* Create 3 equal columns */
  gap: 20px; /* Add space between the columns */
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
}
.itemContainer {
  display: flex;
  flex-direction: column; /* Stack item details vertically */
  text-align: left;
  justify-content: center; /* Center items vertically */
  max-width: 700px;
  height: auto;
  border-radius: 3px;
  border: 3px solid black;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.itemContainer > p {
  margin-bottom: 10px;
}

.countryIntro {
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}
.backMap {
  cursor: pointer;
  position: absolute;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
}
.pageButtons {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem;
}
.previousPage,
.nextPage {
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid black;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
}
@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablets */
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* Create 3 equal columns */
  }
  .countryIntro {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  .backMap {
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
}
@media (max-width: 767px) {
  /* Styles for phones */
  .grid-container {
    grid-template-columns: repeat(1, 1fr); /* Create 3 equal columns */
  }
  .countryIntro {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  .backMap {
    position: relative;
    font-size: 1.7rem;
    margin: 0;
    margin-top: 1rem;
  }
  .container > div {
    text-align: center;
  }
}
</style>
