<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="reviews_index">
      <!-- Heigh=100, to decrease the spacing between toolbar and reviews -->
      <v-card color="grey lighten-4" flat height="100px" tile>
        <h1 class="title">REVIEWS</h1>
        <v-btn class="createReview" depressed color="gray"
          ><router-link to="/reviews/create">
            CREATE REVIEW
          </router-link>
        </v-btn>
      </v-card>
      <!-- REVIEWS CARDS -->
      <v-col>
        <v-row v-masonry>
          <v-card
            v-for="review in reviews"
            :key="review._id"
            :loading="loading"
            class="mx-auto my-12 reviews_one"
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
          </v-card>
        </v-row>
      </v-col>
    </div>
  </v-container>
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
.container {
  height: 570px;
  width: 1500px;
}

.reviews_index {
  margin-top: -150px;
}
.title {
  margin-bottom: 20px;
}
.createReview {
  float: inherit;
  margin-top: -10px;
}
.toolbar {
  margin-bottom: 300px;
}
.reviews_one {
  float: left;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 10px;
}

.container {
  height: 2000px;
  width: 1500px;
}
</style>
