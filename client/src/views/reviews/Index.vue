<template>
  <div class="reviews_create">
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar class="toolbar" dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>REVIEWS</v-toolbar-title>

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
        <v-btn depressed color="gray"
          ><router-link to="/reviews/create">
            CREATE REVIEW
          </router-link>
        </v-btn>
      </v-toolbar>
    </v-card>

    <!-- REVIEWS CARDS -->
    <v-card
      v-for="review in reviews"
      :key="review._id"
      :loading="loading"
      class="mx-auto my-12 reviews_one"
      max-width="374"
    >
      <v-col>
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
        ></v-img>

        <v-card-title>
          <router-link
            :to="{ name: 'reviews_show', params: { id: review._id } }"
          >
            {{ review.title }}
          </router-link>
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="3.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>
          </v-row>
          <br />
          <div>{{ review.content }}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ReviewIndex",
  data() {
    return {
      reviews: [],
    };
  },
  mounted() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      axios.get("http://localhost:9000/api/reviews/").then((response) => {
        this.reviews = response.data;
      });
      console.log(this.reviews);
    },
  },
};
</script>

<style scoped>
.toolbar {
  margin-bottom: 10px;
}

.reviews_one {
  float: left;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
}
</style>
