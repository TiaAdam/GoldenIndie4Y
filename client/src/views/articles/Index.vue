<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="articles">
      <!-- <h1>This page will display an article.</h1> -->
      <v-card color="pink lighten-4" flat height="100px" tile>
        <h1 class="title"> ARTICLES </h1>
        <v-btn class="createArticle" depressed color="gray"
          ><router-link to="/articles/create">
            CREATE ARTICLE
          </router-link>
        </v-btn>
      </v-card> 
      <!-- ARTICLES CARDS -->
      <v-col>
        <v-row v-masonry>
          <v-card
            v-for="article in articles"
            :key="article._id"
            :loading="loading"
            class="mx-auto my-12 article_one"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              @load="this.$redrawVueMasonry()"
            ></v-img>
            <v-card-title>
              <router-link
                :to="{ name: 'articles_show', params: { id: article._id } }"
              >
                {{ article.title }}
              </router-link>
            </v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
                <br />
              </v-row>
              <div>{{ article.content }}</div>
              <br />
              <div>{{ article.category }}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
          </v-card>
        </v-row>
      </v-col>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleIndex",
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
/* CONTAINER */
.container {
  height: 2000px;
  width: 1500px;
}
 .articles{
   margin-top: -150px;
 }

 .title{
   margin-bottom: 20px;
 }

 .createArticle{
   float:inherit;
   margin-top: -10px;
 }
.article_one {
  float: left;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
}
</style>
