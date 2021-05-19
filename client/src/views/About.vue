<template>
  <!-- Adding container -->
  <v-container class="container">
    <div class="about"></div>
    <div class="title">
      <h1>ABOUT GOLDEN INDIE</h1>
    </div>

    <!-- ABOUT PARAGRAPH -->
    <v-row>
      <v-col>
        <p class="description">
          Golden Indie is a website dedicated to people with interest in Film
          and Film Industry.and it is primarily focusing on indie films and
          artistic films rather than mainstream blockbusters. This website would
          allow its users to read film related articles, read reviews, browse
          through the library of films and view actors and directors. Website
          would also allow users to create an account and write their own
          reviews on certain films and like other people’s reviews, as well as
          to connect with people from Film community.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <figure>
          <img
            src="https://lwlies.com/wp-content/uploads/2017/08/the-seventh-seal-chess-scene-1108x0-c-default.jpg"
            alt="Ingmar Bergman's Seventh Seal "
          />
          <figcaption>Scene from Ingmar Bergman's "Seventh Seal".</figcaption>
        </figure>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="description1">
          The company has also expanded into online distribution, through online
          video on demand rental services, first in partnership with MUBI
          (formerly known as The Auteurs), then Hulu. Criterion's Hulu Plus
          subscription channel also offered titles for streaming as-yet
          unreleased on DVD/Blu-ray, including dozens of the Janus-owned films
          produced by London Films. In November 2016, Criterion ended its deal
          with Hulu, and partnered with Turner Classic Movies to launch a
          dedicated streaming service called FilmStruck.[43][44] After two
          years, TCM parent company WarnerMedia restructured its streaming
          offerings, and it was announced that the future online home for
          Criterion's films would be a dedicated channel. The Criterion Channel
          launched on April 8, 2019 and offers subscribers access to both
          'complete' releases from the collection, specially-produced
          supplementary programming and other films controlled by Janus/Voyager,
          alongside limited engagements of select films from other companies,
          particularly Warner/TCM.[45] Criterion Collection content is also
          accessible via the library VOD service Kanopy.
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

.title {
  margin-bottom: 200px;
  margin-top: -20px;
  padding-top: -500px;
  color: crimson;
}

.description {
  margin-top: -150px;
  line-height: 40px;
  font-size: 20px;
  font-family: "Roboto";
  font-style: oblique;
}

.description1 {
  margin-top: 50px;
  line-height: 40px;
  font-size: 20px;
  font-family: "Roboto";
  font-style: oblique;
}
</style>
