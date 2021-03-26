<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="reviews_show">
      <!-- <h1>This page will display an article.</h1> -->
      <v-card color="grey lighten-4" flat height="100px" tile>
        <v-toolbar class="toolbar" dense>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Specific Review</v-toolbar-title>

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
      <h1>{{ review.title }}</h1>
      <h4>{{ review.fullReview }}</h4>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewShow",
  data() {
    return {
      review: "",
    };
  },
  mounted() {
    this.getReview();
  },
  methods: {
    getReview() {
      console.log(this.$route.params.id);
      axios
        .get("http://localhost:9000/api/reviews/" + this.$route.params.id)
        .then((response) => {
          this.review = response.data;
        });
      console.log(this.review);
    },
  },
};
</script>

<style scoped>
/* CONTAINER */
.container {
  height: 1500px;
  width: 1500px;
}
toolbar {
  margin-top: 300px;
}
</style>
