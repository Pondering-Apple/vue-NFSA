<template>
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
  </div>
</template>

<script>
import worldMap from '@svg-maps/world' // Import the default export

export default {
  data() {
    return {
      worldMap, // Store the imported map object
      populations: {
        ad: 77000, // Andorra
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
        const countryName = country.getAttribute('title') // Extract the country name
        console.log(`Clicked on: ${countryName}`)
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
