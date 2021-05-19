<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="hello">
      <v-carousel hide-delimiters height="700px" class="carousel">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

      <!-- Reviews -->
      <h1 class="reviewTitle">REVIEWS</h1>
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
import parasite from "@/assets/minari.jpg";
import hollywood from "@/assets/metal.jpg";
import hilly from "@/assets/woman.jpg";
import queen from "@/assets/queen.jpg";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      items: [
        {
          src: parasite,
        },
        {
          src: hollywood,
        },
        {
          src: hilly,
        },
        {
          src: queen,
        },
      ],
      reviews: [],
    };
  },
  mounted() {
    this.getReviews();
  },
  methods: {
    getReviews() {
      axios.get("http://localhost:9000/api/reviews/latest").then((response) => {
        this.reviews = response.data;
      });
      console.log(this.reviews);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* CONTAINER */
.container {
  height: 1500px;
  width: 1500px;
}

.carousel {
  margin-top: -150px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#inspire {
  height: 100vh;
}

.reviewTitle {
  margin-top: 70px;
  margin-bottom: 30px;
}
</style>
