<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="register_index">
      <v-card color="grey lighten-4" flat height="150px" tile>
        <v-toolbar class="toolbar" dense>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <!-- TOOLBAR/NAVIGATION -->
          <v-toolbar-title>REGISTER FORM</v-toolbar-title>

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
      <!-- CREATING ARTICLE FORM  -->
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            name="Name"
            rules="required|max:10"
          >
            <v-text-field
              v-model="name"
              :counter="10"
              :error-messages="errors"
              label="Name"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="Surname"
            rules="required|max:10"
          >
            <v-text-field
              v-model="surname"
              :counter="10"
              :error-messages="errors"
              label="Surname"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="phoneNumber"
            :rules="{
              required: true,
              digits: 7,
              regex: '^(71|72|74|76|81|82|84|85|86|87|88|89)\\d{5}$',
            }"
          >
            <v-text-field
              v-model="phoneNumber"
              :counter="7"
              :error-messages="errors"
              label="Phone Number"
              required
            ></v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="email"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              label="E-mail"
              required
            ></v-text-field>
          </validation-provider>

          <v-btn class="mr-4" type="submit" :disabled="invalid">
            LOGIN
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
  name: "RegisterIndex",
  props: {},
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      title: "",
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
      axios
        .post("http://localhost:9000/api/articles/", {
          title: this.title,
          content: this.content,
        })
        .then((response) => {
          this.articles = response.data;
        });
    },
    clear() {
      this.name = "";
      this.surname = "";
      this.phoneNumber = "";
      this.email = "";
      this.$refs.observer.reset();
    },
  },
};
</script>

<style scoped>
/* CONTAINER */
.container {
  height: 750px;
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
