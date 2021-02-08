<template>
  <v-row align-content="center" align="center" class="h-center mt-8">
    <v-col cols="12" sm="9" md="7" lg="6" xl="5" v-if="article !== null">
      <v-img
        contain
        max-height="600"
        v-if="article._embedded"
        :src="article._embedded['wp:featuredmedia']['0'].source_url"
      ></v-img>
      <h1 v-html="article.title.rendered" class="pb-6 pt-6"></h1>
      <div
        v-html="article.content.rendered"
        class="text-left body-1 post-content bigger-font"
      ></div>
    </v-col>
  </v-row>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Article",
  data: function () {
    return {
      article: null,
    };
  },
  mounted: async function () {
    const response = await Service.api().get(
      "posts?_embed&slug=" + this.$route.params.slug
    );
    this.article = response.data[0];
  },
};
</script>

<style scoped>
</style>