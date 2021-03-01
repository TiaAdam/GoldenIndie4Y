<template>
  <div class="articles_show">
    <!-- <h1>This page will display an article.</h1> -->
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar class="toolbar" dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Specific Article</v-toolbar-title>

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

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleShow",
  data() {
    return {
      article: "",
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    getArticle() {
      console.log(this.$route.params.id);
      axios.get("http://localhost:9000/api/articles/"+this.$route.params.id).then((response) => {
        this.article = response.data;
      });
      console.log(this.article);
    },
  },
};
</script>

<style scoped>
toolbar {
  margin-top: 300px;
}
</style>
