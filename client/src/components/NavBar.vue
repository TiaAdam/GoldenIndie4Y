<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'articles_index' }">Article</router-link>|
    <router-link to="/film">Films</router-link>|
    <router-link :to="{ name: 'reviews_index' }">Reviews</router-link>
    <!-- <router-link :to="{ name: 'reviews_index', params: { id: 123 }}">Reviews</router-link> -->
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
