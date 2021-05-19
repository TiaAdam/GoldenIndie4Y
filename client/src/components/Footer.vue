// FOOTER FOR THE APPLICATION
<template>
  <!-- Adding container -->
  <v-container class="container">
    <v-footer class="footer">
      <v-card flat tile class="text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="pt-0">
          Get in touch with Golden Inidie over social media! Golden Indie is a
          website which allows filmlover to view, rate, comment and write
          reviews on their favorite films. Knowing that Film community around
          the world is large, Golden Indie provides opportunity for people
          interested in Film to connect with people who have the same interests.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          {{ new Date().getFullYear() }} — <strong>Golden Indie</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>


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
.footer{
  height: 100px;
}
</style>
