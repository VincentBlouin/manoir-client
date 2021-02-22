<template>
  <div>
    <h1 class="manoir-font font-weight-thin mb-4 mt-12 primary-color">
      Ce qui nous caractérise
    </h1>

    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="3"
        v-for="caracteristique in caracteristiques"
        :key="caracteristique.id"
      >
        <v-card
          class="mx-auto my-12"
          max-width="374"
          :to="caracteristique.link"
          style="background: rgb(255 255 255 / 15%)"
        >
          <v-img
            height="250"
            v-if="caracteristique._embedded"
            :src="caracteristique._embedded['wp:featuredmedia']['0'].source_url"
          ></v-img>

          <v-card-title v-html="caracteristique.title.rendered"></v-card-title>

          <v-card-text class="body-1 text-left secondary-color bigger-font">
            <p
              v-html="
                caracteristique.acf
                  .texte_court_pour_lapercu_de_la_caracteristique
              "
            ></p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" v-if="caracteristiqueLoading">
        <v-progress-circular color="primary" large></v-progress-circular>
      </v-col>
      <v-col cols="12">
        <v-btn @click="caracteristiquesLoadMore()" color="primary" text :disabled="!caracteristiqueHasMore" class="font-weight-bold">        
          caractéristiques suivantes        
          <v-icon right>navigate_next</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <h1 class="manoir-font font-weight-thin mb-4 mt-12 primary-color">
      Ce que nous ne sommes pas
    </h1>

    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="3"
        v-for="nonCaracteristique in nonCaracteristiques"
        :key="nonCaracteristique.id"
      >
        <v-card
          class="mx-auto my-12"
          max-width="374"
          :to="nonCaracteristique.link"
          style="background: rgb(255 255 255 / 15%)"
        >
          <v-img
            height="250"
            v-if="nonCaracteristique._embedded"
            :src="
              nonCaracteristique._embedded['wp:featuredmedia']['0'].source_url
            "
          ></v-img>

          <v-card-title
            v-html="nonCaracteristique.title.rendered"
          ></v-card-title>

          <v-card-text class="body-1 text-left secondary-color bigger-font">
            <p
              v-html="
                nonCaracteristique.acf
                  .texte_court_pour_lapercu_de_la_non_caracteristique
              "
            ></p
          ></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Caractéristiques.vue",
  data: function () {
    return {
      caracteristiques: [],
      nonCaracteristiques: [],
      nbPerPage: 4,
      offset: 0,
      caracteristiquePage: 0,
      nonCaracteristiquePage: 0,
      caracteristiqueHasMore: true,
      nonCaracteristiqueHasMore: true,
      caracteristiqueLoading: false,
      nonCaracteristiqueLoading: false,
    };
  },
  mounted: async function () {
    this.caracteristiquesLoadMore();
    this.nonCaracteristiquesLoadMore();
  },
  methods: {
    caracteristiquesLoadMore: async function () {
      this.loadMore("caracteristique");
    },
    nonCaracteristiquesLoadMore: async function () {
      this.loadMore("nonCaracteristique");
    },
    loadMore: async function (contentType) {
      this[contentType + "Loading"] = true;
      const contentTypePath =
        contentType === "caracteristique"
          ? "caracteristique"
          : "non-caracteristique";
      let response = await Service.api().get(
        contentTypePath +
          "?_embed&per_page=" +
          this.nbPerPage +
          "&offset=" +
          this[contentType + "Page"] * this.nbPerPage
      );
      const entries = response.data.map((entry) => {
        const url = new URL(entry.link);
        entry.link = url.pathname;
        return entry;
      });
      if (entries.length) {
        this[contentType + "Page"] += 1;
        this[contentType + "s"].push(...entries);
      } else {
        this[contentType + "HasMore"] = false;
      }
      this[contentType + "Loading"] = false;
    },
  },
};
</script>

<style scoped>
</style>