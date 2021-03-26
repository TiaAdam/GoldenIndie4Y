<template>
  <div class="article">
    <Article msg="This page will display an article." />
  </div>
</template>

<script>
// @ is an alias to /src
import Article from "@/components/Article.vue";

export default {
  name: "article",
  components: {
    Article,
  },
};
</script>
