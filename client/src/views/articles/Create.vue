<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="articles_create">
      <!-- CREATING ARTICLE FORM  -->
      <v-card width="1000" class="mx-auto mt-5 createArticleForm">
        <v-card-title>
          <h2 class="display-1">CREATE ARTICLE</h2>
        </v-card-title>
        <v-card-text>
          <!-- <validation-observer ref="observer" v-slot="{ invalid }"> -->
          <validation-observer ref="observer" v-slot="{}">
            <form class="form_one" @submit.prevent="submit">
              <v-col cols="12" sm="6">
                <v-select
                  v-model="selectedAuthor"
                  :items="authors"
                  item-text="firstName"
                  item-value="_id"
                  label="Author"
                  return-object
                ></v-select>

                <select class="v-select__selections" v-model="author">
                  <option
                    n
                    v-for="auth in authors"
                    :key="auth._id"
                    :value="auth._id"
                  >
                    {{ auth.firstName }} {{ auth.lastName }}
                  </option>
                </select>
              </v-col>
              <validation-provider v-slot="{ errors }" name="Title">
                <v-text-field
                  v-model="title"
                  :error-messages="errors"
                  label="Title"
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
      selectedAuthor: {
        firstName: "Zoran",
        lastName: "Adam",
        _id: "600ecb28396445b0c2afdf35",
      },
      content: "",
      categories: [],
      authors: [],
    };
  },
  created() {
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
        .post("http://localhost:9000/api/articles/", {
          title: this.title,
          author: this.author,
          content: this.content,
          categories: this.categories,
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "articles_index" });
        });
    },
    clear() {
      this.title = "";
      this.author = "";
      this.content = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
/* CONTAINER */
.container {
  height: 600px;
  width: 1500px;
}

.articles_create {
  margin-top: -150px;
  padding-top: 50px;
}
.createArticleForm {
  margin-bottom: 150px;
  margin-left: 200px;
}

.createButton {
  color: crimson;
}

.clearButton {
  margin-left: 20px;
  color: crimson;
}

h3 {
  text-align: left;
  margin-bottom: 20px;
}

.cate {
  margin-right: 50px;
  color: crimson;
}
</style>
