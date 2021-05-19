<template>
  <!-- Adding container -->
  <v-container class="container">
  <div class="login_index">
    <!-- NEW LOGIN FORM -->
    <v-card width="1000" class="mx-auto mt-5 loginForm">
    <v-card-title>
      <h2 class="display-1"> LOGIN FORM </h2>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field 
        label="Username" 
        prepend-icon="mdi-account-circle" 
        />
        <v-text-field 
        :type="showPassword ? 'text' : 'password'"
        label="Password" 
        prepend-icon="mdi-lock"
        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
        />
        <v-card-actions>
          <v-btn class="regButton"> Register </v-btn>
          <v-spacer></v-spacer>
          <v-btn class="logButton"> Login </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
    </v-card>
    <!-- NEW LOGIN FORM END -->
  </div>
  </v-container>
</template>

 <!-- STILL NEED TO MODIFY THE SCRIPT - HAS A LOT OF UNNECESSARY CODE -->
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
  name: "LoginIndex",
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
      showPassword: false
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
  height: 400px;
  width: 1500px;
}
.login_index{
  margin-top: -150px;
  padding-top: 50px;
}
.loginForm{
  margin-left: 200px;
}

.regButton{
  color: crimson;
}

.logButton{
    color: crimson;
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
