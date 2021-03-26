<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="articles_create">
      <!-- <h1>This page will display an article.</h1> -->
      <v-card color="grey lighten-4" flat height="100px" tile>
        <v-toolbar class="toolbar" dense>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>CREATE YOUR OWN ARTICLE</v-toolbar-title>

          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>

      <!-- CREATING ARTICLE FORM  -->
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          
          <select v-model="author">
            <option v-for="auth in authors" :key="auth._id" :value="auth._id">
              {{ auth.firstName }} {{ auth.lastName }}
            </option>
          </select>
          <validation-provider
            v-slot="{ errors }"
            name="Title"
            rules="required|max:10"
          >
            <v-text-field
              v-model="title"
              :counter="10"
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
                v-model="film"
                label="Film"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="cate"
                v-model="directing"
                label="Directing"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="cate"
                v-model="producing"
                label="Producing"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="cate"
                v-model="newReleases"
                label="New Releases"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="cate"
                v-model="europeanCinema"
                label="European Cinema"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="cate"
                v-model="asianCinema"
                label="Asian Cinema"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
              <v-checkbox
                class="cate"
                v-model="africanCinema"
                label="African Cinema"
                color="category"
                value="ctegory"
                hide-details
              ></v-checkbox>
            </v-row>
          </v-col>
          <!-- TEXTAREA FOR THE ARTICLE CONTENT -->
          <v-container fluid>
            <v-textarea
              class="textarea"
              clearable
              clear-icon="mdi-close-circle"
              label="Content"
              v-model="content"
              value="This content is clearable."
            ></v-textarea>
          </v-container>
          <v-btn class="mr-4" type="submit" :disabled="invalid">
            CREATE
          </v-btn>
          <v-btn class="clear" @click="clear">
            CLEAR
          </v-btn>
        </form>
      </validation-observer>
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
      author: "",
      content: "",
      categories: [],
      authors: []
    };
  },
  mounted() {
    this.getAuthors();
  },
  methods: {
    getAuthors() {
      axios
        .get("http://localhost:9000/api/authors/")
        .then((response) => {
         console.log(response.data)
         this.authors = response.data
        });
    },
    submit() {
      this.$refs.observer.validate();
      axios
        .post("http://localhost:9000/api/articles/", {
          title: this.title,
          author: this.author,
          content: this.content,
          categories: this.categories
        })
        .then((response) => {
         console.log(response.data);
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
  height: 1000px;
  width: 1500px;
}
toolbar {
  margin-top: 300px;
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
