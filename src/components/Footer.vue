// FOOTER FOR THE APPLICATION
<template>
  <!-- Adding container -->
  <v-container class="container">
    <div id="foot">
      <v-footer inset dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="white--text">
            GOLDEN INDIE 2021
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} <strong></strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </div>
  </v-container>
</template>

// Script for footer
<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* CONTAINER */
.container {
  width: 1500px;
}
</style>
