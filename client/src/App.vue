<template>
  <div id="app" class="grey lighten-4">
    <v-container class="container">
      <NavBar />
      <router-view />
      <v-footer>
        <Footer />
      </v-footer>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
};
</script>


<style lang="scss">
@import "./scss/style.scss";

.container{
  height: inherit;
  width: 1500px;
}

</style>
