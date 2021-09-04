<template>
  <div>
    <v-row align-content="center" align="center" class="h-center mt-8 mb-12">
      <v-col cols="12" sm="9" md="8" xl="5" v-if="caracteristique !== null">
        <v-img
            contain
            max-height="600"
            v-if="caracteristique._embedded"
            :src="caracteristique._embedded['wp:featuredmedia']['0'].source_url"
        >
          <v-overlay
              absolute
              :value="true"
              opacity="0.15"
              color="transparent"
              v-if="caracteristique.type && caracteristique.type === 'non-caracteristique'"
          >
            <v-icon size="450" color="error" style="opacity: 0.3">highlight_off</v-icon>
          </v-overlay>
        </v-img>
        <h1 v-html="caracteristique.title.rendered" class="pb-6 pt-6"></h1>
        <div
            v-html="caracteristique.content.rendered"
            class="text-left body-1 post-content bigger-font"
        ></div>
      </v-col>
      <v-col cols="12">
        <v-btn to="/caracteristiques" color="secondary" text>
          Toutes les caractéristiques
        </v-btn>
      </v-col>
    </v-row>
    <Articles :tagId="tagId" v-if="tagId !== null"></Articles>
  </div>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Caractéristique.vue",
  data: function () {
    return {
      caracteristique: null,
      tagId: null
    };
  },
  components: {
    Articles: () => import('@/views/Articles')
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
    if (!this.caracteristique.tags || !this.caracteristique.tags.length) {
      return;
    }
    this.tagId = this.caracteristique.tags[0];
  },
  methods: {
    setupRelatedArticles: async function () {
      // let response = await Service.api().get(
      //     "posts?_embed&tags=" + tagId
      // );
      // this.relatedArticles = response.data.map(PostFormat.forThumb);
    }
  }
};
</script>

<style scoped>
</style>
