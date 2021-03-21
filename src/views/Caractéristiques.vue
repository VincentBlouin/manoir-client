<template>
  <div
      :class="{
      'pt-16': isOnPageFlow,
      'pb-16': isOnPageFlow,
    }"
  >
    <h1 class="manoir-font font-weight-thin mb-4 mt-12 primary-color">
      Ce qui nous caractérise
    </h1>

    <v-row>
      <v-col
          cols="12"
          md="4"
          xl="3"
          v-for="caracteristique in caracteristiques"
          :key="caracteristique.id"
      >
        <v-card
            class="mx-auto my-12"
            max-width="374"
            @click="caracteristiqueClick(caracteristique)"
            style="background: rgb(255 255 255 / 15%)"
        >
          <v-img
              height="250"
              v-if="caracteristique._embedded"
              :src="caracteristique.imageUrl"
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
        <v-btn
            @click="caracteristiquesLoadMore()"
            color="primary"
            text
            :disabled="!caracteristiqueHasMore"
            class="font-weight-bold"
            v-if="!isOnPageFlow"
        >
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
          xl="3"
          v-for="nonCaracteristique in nonCaracteristiques"
          :key="nonCaracteristique.id"
      >
        <v-card
            class="mx-auto my-12"
            max-width="374"
            @click="caracteristiqueClick(nonCaracteristique)"
            style="background: rgb(255 255 255 / 15%)"
        >
          <v-img
              height="250"
              v-if="nonCaracteristique.imageUrl"
              :src="nonCaracteristique.imageUrl"
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
      <v-col cols="12" v-if="nonCaracteristiqueLoading">
        <v-progress-circular color="primary" large></v-progress-circular>
      </v-col>
      <v-col cols="12">
        <v-btn
            @click="nonCaracteristiquesLoadMore()"
            color="primary"
            text
            :disabled="!nonCaracteristiqueHasMore"
            class="font-weight-bold"
            v-if="!isOnPageFlow"
        >
          non caractéristiques suivantes
          <v-icon right>navigate_next</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-snackbar
        v-model="longTextNotAvailableSnackbar"
        timeout="6000"
        light
    >
      Pas encore de long texte.
      <template v-slot:action="{ attrs }">
        <v-btn
            color="secondary"
            text
            v-bind="attrs"
            @click="longTextNotAvailableSnackbar = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import Service from "@/Service";
import PostFormat from "@/PostFormat";

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
      longTextNotAvailableSnackbar: false,
      isOnPageFlow: false,
    };
  },
  mounted: async function () {
    this.isOnPageFlow = this.$route.name === "Caracteristiques";
    if (this.isOnPageFlow) {
      this.nbPerPage = 99;
    }
    this.caracteristiquesLoadMore();
    this.nonCaracteristiquesLoadMore();
  },
  methods: {
    caracteristiqueClick: async function (caracteristique) {
      if (caracteristique.acf["est-ce_que_le_long_texte_est_pret"]) {
        this.$router.push(caracteristique.link);
      } else {
        this.longTextNotAvailableSnackbar = false;
        await this.$nextTick();
        this.longTextNotAvailableSnackbar = true;
      }
    },
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
      const entries = response.data.map(PostFormat.forThumb);

      if (entries.length) {
        this[contentType + "Page"] += 1;
        this[contentType + "s"].push(...entries);
      }
      if (entries.length < this.nbPerPage) {
        this[contentType + "HasMore"] = false;
      }
      this[contentType + "Loading"] = false;
    },
  },
};
</script>

<style scoped>
</style>