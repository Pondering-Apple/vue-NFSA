<template>
  <div>Click on a country to find songs from that country.</div>
  <p>Todays country is {{ country }}</p>
  <div>
    <svg viewBox="0 0 1010 666" style="width: 100%; height: auto" @click="handleCountryClick">
      <g v-for="location in worldMap.locations" :key="location.id">
        <path
          :d="location.path"
          :title="location.name"
          :fill="getColor(location.id)"
          stroke="black"
          stroke-width="0.5"
        />
      </g>
    </svg>
    <component :is="currentComponent" v-if="currentComponent" />
  </div>
</template>

<script>
import worldMap from '@svg-maps/world' // Import the default export

export default {
  data() {
    return {
      worldMap, // Store the imported map object
      currentComponent: null,
      country: '',
      populations: {
        ad: 7, // Andorra
        ae: 98241000, // United Arab Emirates
        af: 40218230004, // Afghanistan
        al: 2877790007 // Albania
        // Add more country populations here...
      }
    }
  },
  methods: {
    handleCountryClick(event) {
      const country = event.target.closest('path') // Get the clicked country element
      if (country) {
        let countryName = country.getAttribute('title') // Extract the country name
        const encodedCountryName = encodeURIComponent(countryName) // Encode the country name
        if (encodedCountryName == 'United%20States') {
          this.encodedCountryName = 'U.S.A'
          console.log(`Clicked on: U.S.A`)

          this.$router.push(`/CollectionList/U.S.A`)
        } else {
          this.encodedCountryName = encodedCountryName
          console.log(`Clicked on: ${countryName}`)

          this.$router.push(`/CollectionList/${encodedCountryName}`)
        } // Navigate to the country page

        // Here you can navigate to another page or perform other actions based on the clicked country
      }
    },
    getColor(countryId) {
      const population = this.populations[countryId] || 0 // Get the population, default to 0

      if (population < 100000) return 'lightgreen' // Low population
      if (population < 1000000) return 'orange' // Medium population
      return 'red' // High population
    }
  }
}
</script>

<style>
svg {
  width: 100%; /* Make the SVG responsive */
  height: auto; /* Maintain aspect ratio */
}
</style>
