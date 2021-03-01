<template>
  <div class="reviews_create">
    <!-- <h1>This page will display an article.</h1> -->
    <v-card color="grey lighten-4" flat height="200px" tile>
      <v-toolbar class="toolbar" dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>CREATE YOUR OWN REVIEW</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <!-- CREATING REVIEW FORM  -->
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form class="form_one" @submit.prevent="submit">
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
        <validation-provider
          v-slot="{ errors }"
          name="Filme"
          rules="required|max:10"
        >
          <v-text-field
            v-model="title"
            :counter="10"
            :error-messages="errors"
            label="Film"
            required
          ></v-text-field>
        </validation-provider>
        <validation-provider
          v-slot="{ errors }"
          name="Author"
          rules="required|max:10"
        >
          <v-text-field
            v-model="title"
            :counter="10"
            :error-messages="errors"
            label="Author"
            required
          ></v-text-field>
        </validation-provider>
        <v-col>
          <h3>Related Categories</h3>
          <v-row>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="Film"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="Directing"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="Producing"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="New Releases"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="European Cinema"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="Asian Cinema"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
            <v-checkbox
              class="cate"
              v-model="ex4"
              label="African Cinema"
              color="category"
              value="ctegory"
              hide-details
            ></v-checkbox>
          </v-row>
        </v-col>
        <!-- TEXTAREA FOR THE REVIEW CONTENT -->
        <v-container fluid>
          <v-textarea
            class="textarea"
            clearable
            clear-icon="mdi-close-circle"
            label="Content"
            value="This content is clearable."
          ></v-textarea>
        </v-container>
        <v-btn class="mr-4" type="submit" :disabled="invalid">
          CREATE
        </v-btn>
        <v-btn class="clear" @click="clear">
          CLEAR
        </v-btn>
         <v-checkbox
              v-model="ex4"
              label="Contains spoilers!"
              color="red darken-3"
              value="red darken-3"
              hide-details
            ></v-checkbox>
      </form>
    </validation-observer>
  </div>
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
  name: "ReviewCreate",
  props: {},
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      phoneNumber: "",
      email: "",
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: null,
    };
  },
  methods: {
    submit() {
      this.$refs.observer.validate();
      axios.post("http://localhost:9000/api/articles/", {}).then((response) => {
        this.reviews = response.data;
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

.form_one{
  margin-bottom:800px;
}
</style>
