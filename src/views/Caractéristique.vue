<template>
  <v-row align-content="center" align="center" class="h-center mt-8">
    <v-col cols="6" v-if="caracteristique !== null">
      <h1 v-html="caracteristique.title.rendered" class="pb-6"></h1>
      <div v-html="caracteristique.content.rendered" class="text-left body-1"></div>
    </v-col>
  </v-row>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Caractéristique.vue",
  data: function () {
    return {
      caracteristique: null
    };
  },
  mounted: async function () {
    const response = await Service.api().get('caracteristique?slug=' + this.$route.params.slug);
    this.caracteristique = response.data[0];
  }
}
</script>

<style scoped>

</style>