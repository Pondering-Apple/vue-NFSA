# vue-nfsa

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Rationale

The purpose of this website is to search through the data in the NFSA (National Film and Sound Archive) database, provided by the NFSA API, and filter it to find songs, then sort them by country.

The interactivity and interest this page could bring is due to its search function. Users can click on a highlighted country, and a list of songs from that country will appear. Currently, no media (photos, videos, music) is visible with the information, as the songs did not come with media. If media were available, the song pages would be more visually appealing and engaging.

One of the challenges with the webpage is that if a user refreshes the page while a country's information is displayed, it throws a 404 error. This happens because the page is loaded when the user clicks on a country. When refreshed, the browser "forgets" which country was selected, and since the file technically doesn't exist, the 404 error appears. I plan to address this by creating a better way to display a variety of country-specific information.

Another challenge with this website is that it is not very mobile-friendly. I struggled to make the world map user-friendly but couldn't fix this due to the way I was fetching information from the API. I plan to address this in the future by modifying when and where the API requests are made.
