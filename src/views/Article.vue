<template>
  <v-row align-content="center" align="center" class="h-center mt-8">
    <v-col cols="6" v-if="article !== null">
      <h1 v-html="article.title.rendered" class="pb-6"></h1>
      <div v-html="article.content.rendered" class="text-left body-1"></div>
    </v-col>
  </v-row>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Article",
  data: function () {
    return {
      article: null
    };
  },
  mounted: async function () {
    const response = await Service.api().get('posts?slug=' + this.$route.params.slug);
    this.article = response.data[0];
  }
}
</script>

<style scoped>

</style>