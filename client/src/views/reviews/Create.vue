<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="reviews_create">
      <!-- <h1>This page will display an article.</h1> -->
      <v-card width="1000" class="mx-auto mt-5 createReviewForm">
        <v-card-title>
          <h2 class="display-1">CREATE REVIEW</h2>
        </v-card-title>
        <v-card-text>
          <!-- CREATING REVIEW FORM  -->
          <validation-observer ref="observer" v-slot="{}">
            <form class="form_one" @submit.prevent="submit">
              <v-col cols="12" sm="6">
                <v-select :authors="authors" v-model="author">
                  <option
                    v-for="auth in authors"
                    :key="auth._id"
                    :value="auth._id"
                  >
                    {{ auth.firstName }} {{ auth.lastName }}
                  </option>
                </v-select>
              </v-col>
              <validation-provider v-slot="{ errors }" name="Title">
                <v-text-field
                  v-model="title"
                  :error-messages="errors"
                  label="Title"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider v-slot="{ errors }" name="Film">
                <v-text-field
                  v-model="film"
                  :error-messages="errors"
                  label="Film"
                  required
                ></v-text-field>
              </validation-provider>
              <v-col>
                <h3>Related Categories</h3>
                <v-row>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="Film"
                    value="film"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="Directing"
                    value="directing"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="Producing"
                    value="producing"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="New Releases"
                    value="newReleases"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="European Cinema"
                    value="european"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="Asian Cinema"
                    value="asian"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    class="cate"
                    v-model="categories"
                    label="African Cinema"
                    value="african"
                    hide-details
                  ></v-checkbox>
                </v-row>
              </v-col>
              <!-- TEXTAREA FOR THE ARTICLE CONTENT -->
              <v-textarea
                class="textarea"
                clearable
                clear-icon="mdi-close-circle"
                label="Content"
                v-model="content"
                value="This content is clearable."
              ></v-textarea>
               <v-card-actions>
                <v-btn class="mr-4 createButton" type="submit">
                  CREATE
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="clearButton" @click="clear">
                  CLEAR
                </v-btn>
              </v-card-actions>
              <!-- <v-checkbox
                v-model="spoiler"
                label="Contains spoilers!"
                color="red darken-3"
                value="red darken-3"
                hide-details
              ></v-checkbox> -->
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import { required, digits, email, max, regex } from "vee-validate/dist/rules";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "Create",
  props: {},
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      title: "",
      author: "600ecb28396445b0c2afdf35",
      content: "",
      categories: [],
      authors: [],
    };
  },
  mounted() {
    this.getAuthors();
  },
  methods: {
    getAuthors() {
      axios.get("http://localhost:9000/api/authors/").then((response) => {
        console.log(response.data);
        this.authors = response.data;
      });
    },
    submit() {
      this.$refs.observer.validate();
      axios
        .post("http://localhost:9000/api/reviews/", {
          title: this.title,
          author: this.author,
          content: this.content,
          categories: this.categories,
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "reviews_index" });
        });
    },
    clear() {
      this.name = "";
      this.phoneNumber = "";
      this.email = "";
      this.select = null;
      this.checkbox = null;
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
/* CONTAINER */
.container {
  height: 700;
  width: 1500px;
}

.reviews_create {
  margin-top: -150px;
  padding-top: 50px;
}

.createReviewForm {
  margin-bottom: 100px;
  margin-left: 200px;
}

.createButton {
  color: crimson;
}

.clearButton {
  margin-left: 20px;
  color: crimson;
}

.clear {
  margin-left: 20px;
}

h3 {
  text-align: left;
  margin-bottom: 20px;
}

.cate {
  margin-right: 50px;
}
</style>
