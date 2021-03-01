<template>
  <div class="article">
    <!-- <h1>This page will display an article.</h1> -->
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar class="toolbar" dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>ARTICLES</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get("http://localhost:9000/api/articles/").then((response) => {
        this.articles = response.data;
      });
      console.log(this.articles);
    },
  },
};
</script>

<style scoped>
toolbar {
  margin-top: 300px;
}
</style>
