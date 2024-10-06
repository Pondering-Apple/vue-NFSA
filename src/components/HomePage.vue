<template>
  <div class="instructions">
    <p>Click on a coloured in country to find songs from that country.</p>
  </div>
  <div class="svgContainer">
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
      collectionSizes: {
        // Americas
        ar: 18, // Argentina
        br: 5, // Brazil
        ca: 8, // Canada
        cl: 8, // Chile
        cu: 6, // Cuba
        mx: 4, // Mexico
        us: 1, // United States
        uy: 1, // Uruguay
        // Europe
        at: 3, // Austria
        be: 4, // Belgium
        bg: 4, // Bulgaria
        ch: 6, // Switzerland
        de: 1, // Germany
        dk: 2, // Denmark
        es: 1, // Spain
        fi: 4, // Finland
        fr: 8, // France
        gb: 3, // United Kingdom
        gr: 5, // Greece
        hu: 3, // Hungary
        ie: 7, // Ireland
        it: 18, // Italy
        nl: 7, // Netherlands
        no: 6, // Norway
        pl: 3, // Poland
        se: 5, // Sweden
        // Asia-Pacific
        au: 2, // Australia
        cn: 7, // China
        id: 6, // Indonesia
        jp: 7, // Japan
        kh: 1, // Cambodia
        kr: 3, // South Korea
        my: 5, // Malaysia
        nc: 5, // New Caledonia
        nz: 2, // New Zealand
        pg: 1, // Papua New Guinea
        ph: 4, // Philippines
        th: 7, // Thailand
        vn: 2, // Vietnam
        // Middle East
        af: 4, // Afghanistan
        il: 7, // Israel
        in: 5, // India
        pk: 6, // Pakistan
        tr: 6, // Turkey
        // Africa
        ke: 2, // Kenya
        ly: 8, // Libya
        za: 3 // South Africa
      }
    }
  },
  methods: {
    handleCountryClick(event) {
      const country = event.target.closest('path') // Get the clicked country element
      if (country) {
        let countryName = country.getAttribute('title')
        const encodedCountryName = encodeURIComponent(countryName)
        // Due to translation error between the API and the library the country is the United States
        // There must be an if statement to check if the country is the United States and change it to
        // to match the API
        if (encodedCountryName == 'United%20States') {
          this.encodedCountryName = 'U.S.A'
          console.log(`Clicked on: U.S.A`)

          this.$router.push(`/CollectionList/U.S.A`)
        } else {
          this.encodedCountryName = encodedCountryName
          console.log(`Clicked on: ${countryName}`)

          this.$router.push(`/CollectionList/${encodedCountryName}`)
        } // Navigate to the country page
      }
    },
    getColor(countryId) {
      const collectionSize = this.collectionSizes[countryId] || 0 // Get the collectionSize, default to 0

      if (collectionSize < 1) return 'white'
      if (collectionSize == 1) return 'orange'
      if (collectionSize == 2) return 'blue'
      if (collectionSize == 3) return 'green'
      if (collectionSize == 4) return 'yellow'
      if (collectionSize == 5) return 'purple'
      if (collectionSize == 6) return 'pink'
      if (collectionSize == 7) return 'brown'
      if (collectionSize == 8) return 'cyan'
      if (collectionSize == 9) return 'red'
      if (collectionSize == 10) return 'lime'
      if (collectionSize == 11) return 'magenta'
      if (collectionSize == 12) return 'navy'
      if (collectionSize == 13) return 'teal'
      if (collectionSize == 14) return 'olive'
      if (collectionSize == 15) return 'maroon'
      if (collectionSize == 16) return 'turquoise'
      if (collectionSize == 17) return 'indigo'
      if (collectionSize == 18) return 'gold'
      if (collectionSize == 19) return 'coral'
    }
  }
}
</script>

<style>
svg {
  width: 100%; /* Make the SVG responsive */
  height: auto; /* Maintain aspect ratio */
}
path {
  cursor: pointer; /* Change cursor to pointer on hover */
}
.instructions,
.svgContainer {
  background-color: rgba(0, 170, 255, 0.099);
  font-weight: 900;
  font-size: 1.5rem;
  text-align: center;
}
.instructions {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablets */
  .svgContainer {
    width: 120vw;
  }
  .instructions {
    position: sticky;
  }
}
</style>
