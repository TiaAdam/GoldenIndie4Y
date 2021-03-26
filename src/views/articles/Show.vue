<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="articles_show">
      <!-- <h1>This page will display an article.</h1> -->
      <v-card color="brown lighten-4" flat height="100px" tile>
        <v-toolbar class="toolbar" dense>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>ARTICLE</v-toolbar-title>

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
      <h1 clsss="title">{{ article.title }}</h1>
      <subtitle-1 class="text-justify text1" height="200px">{{ article.fullContent }}</subtitle-1>
      <!-- IMAGES -->
      <v-row class="images">
        <v-col cols="6" sm="4">
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          ></v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-col>

        <v-col cols="6" sm="4">
          <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            <div class="fill-height repeating-gradient"></div>
          </v-img>
        </v-col>
      </v-row>
       <subtitle-1 class="text-justify text2" height="200px">{{ article.fullContent2 }}</subtitle-1>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleShow",
  data() {
    return {
      article: {},
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      console.log(this.$route.params.id);
      axios
        .get("http://localhost:9000/api/articles/" + this.$route.params.id)
        .then((response) => {
          this.article = response.data;
        });
      console.log(this.article);
    },
  },
};
</script>

<style scoped>
/* CONTAINER */
.container {
  height: 1000px;
  width: 1500px;
}
.toolbar {
  padding-bottom: 10px;
}
.title {
  padding-top: 300px;
  margin-top: 600px;
}
.images {
  margin-top: 30px;
}
.text1{
  margin-bottom: 200px;
}
.text2{
  margin-bottom: 600px;
  
}
</style>
