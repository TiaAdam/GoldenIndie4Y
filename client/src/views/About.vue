<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="about">
      <v-card color="grey lighten-4" flat height="100px" tile>
        <v-toolbar class="toolbar" dense>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>ABOUT PAGE</v-toolbar-title>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-toolbar>
      </v-card>
    </div>
    <div class="title">
      <h1>What is Golden Indie?</h1>
    </div>
    <!-- IMAGES -->
    <v-row class="images">
      <v-col cols="6" sm="4">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </v-col>

      <v-col cols="6" sm="4">
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-col>

      <v-col cols="6" sm="4">
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height repeating-gradient"></div>
        </v-img>
      </v-col>
    </v-row>
    <!-- ABOUT PARAGRAPH -->
    <v-row>
      <v-col>
        <p>
          Golden Indie is a website dedicated to people with interest in Film
          and Film Industry.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
/* CONTAINER */
.container {
  height: 1500px;
  width: 1500px;
}

.images {
  margin-top: 30px;
}

.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 72px
  );
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
