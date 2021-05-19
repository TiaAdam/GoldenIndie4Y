<template>
  <div id="nav">
    <!-- <v-toolbar class="navbar"> -->
    <!-- TOOLBAR TEST  -->
    <v-card  flat height="200px" tile>
      <v-toolbar color="red lighten 3" class="navbar">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/">GOLDEN INDIE</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-toolbar-items>
          <v-btn text>
            <router-link to="/about">About</router-link>
          </v-btn>
          <v-btn text>
            <router-link :to="{ name: 'articles_index' }">Article</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/film">Films</router-link>
          </v-btn>
          <v-btn text>
            <router-link :to="{ name: 'reviews_index' }">Reviews</router-link>
          </v-btn>
          <v-btn text>
            <router-link :to="{ name: 'register_index' }">Register</router-link>
          </v-btn>
          <v-btn text>
            <router-link :to="{ name: 'login_index' }">Login</router-link>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  align-items: center;
}
</style>
