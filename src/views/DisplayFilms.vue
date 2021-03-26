<template>
  <div class="film">
    <Film msg="This page will display films." />
  </div>
</template>

<script>
// @ is an alias to /src
import Film from "@/components/Film.vue";

export default {
  name: "film",
  components: {
    Film,
  },
};
</script>
