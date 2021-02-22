<template>
  <v-row align-content="center" align="center" class="h-center mt-8">
    <v-col cols="5" v-if="caracteristique !== null">
      <v-img
        contain
        max-height="600"
        v-if="caracteristique._embedded"
        :src="caracteristique._embedded['wp:featuredmedia']['0'].source_url"
      ></v-img>
      <h1 v-html="caracteristique.title.rendered" class="pb-6 pt-6"></h1>
      <div
        v-html="caracteristique.content.rendered"
        class="text-left body-1 post-content bigger-font"
      ></div>
    </v-col>
  </v-row>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Caractéristique.vue",
  data: function () {
    return {
      caracteristique: null,
    };
  },
  mounted: async function () {
    const postType =
      this.$route.name === "Caracteristique"
        ? "caracteristique"
        : "non-caracteristique";
    const response = await Service.api().get(
      postType + "?_embed&slug=" + this.$route.params.slug
    );
    this.caracteristique = response.data[0];
  },
};
</script>

<style scoped>
</style>