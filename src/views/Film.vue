<template>
  <div class="film">
    <h1>This page will display films.</h1>
     <v-card color="grey lighten-4" flat height="200px" tile>
      
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title> Search Films </v-toolbar-title>

        <v-spacer></v-spacer>

    </v-card>
    <!-- Search box for films that are being retrieved of TMDb Api. -->
    <input type="text" v-model="query" @keyup="getResult(query)" />
    <div v-for="result in results" :key="result.id">
      <p>{{ result.title }}</p>
      <img
        v-bind:src="'http://image.tmdb.org/t/p/w500/' + result.poster_path"
        width="100px"
      />
    </div>
    <br />
    <br />
  </div>
</template>

<script>
// Adding TMDb API to the project.
import axios from 'axios'

export default {
  name: "Film",
  props: {
    msg: String,
  },
  data () {
  return {
   query: '',
   results: ''
  }
 },
 methods: {
  getResult(query) {
   axios.get('https://api.themoviedb.org/3/search/movie?api_key=556b76195b45a0a80dab2c28f97a97e0&query=' + query).then(response => { this.results = response.data.results })
     console.log(this.results)
   }
 },
};
</script>

<style></style>
