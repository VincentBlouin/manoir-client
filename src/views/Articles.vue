<template>
  <div
      :class="{
      'pt-16': isOnPageFlow,
      'pb-16': isOnPageFlow,
    }"
  >
    <h1 class="manoir-font font-weight-thin mt-12 primary-color">
      Articles des membres
    </h1>
    <v-subheader class="vh-center text-h6 font-weight-regular mb-4">
      <span v-if="tagId">Associés à cette caractéristique</span>
      <span v-else>Passés et présents</span>
    </v-subheader>

    <v-row class="vh-center" v-if="!tagId">
      <v-col cols="12" md="6" lg="4">
        <v-text-field placeholder="Chercher parmis les articles" v-model="searchText" @keyup="search">
          <v-icon
              slot="prepend"
          >
            search
          </v-icon>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          cols="12"
          md="4"
          xl="3"
          v-for="article in articles"
          :key="article.id"
      >
        <v-card
            class="mx-auto my-12"
            max-width="374"
            :to="article.link"
            :class="{
              'mt-0 mb-0': $vuetify.breakpoint.smAndDown
            }"
            style="background: rgb(255 255 255 / 15%)"
        >
          <v-img
              height="250"
              v-if="article.imageUrl"
              :src="article.imageUrl"
          ></v-img>

          <v-card-title
              v-html="article.title.rendered"
              class="text-left secondary-color"
          ></v-card-title>
          <v-card-subtitle class="text-left" v-if="article._embedded.author">
            <span v-if="article._embedded.author[0].name === 'montnoir'">
              Anonyme,
            </span>
            <span v-else> {{ article._embedded.author[0].name }}, </span>
            <span>
              {{ article.dateFormatted }}
            </span>
          </v-card-subtitle>
          <v-card-text
              v-html="article.excerpt.rendered"
              class="body-1 text-left bigger-font"
          ></v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <infinite-loading @infinite="infiniteHandler" :key="searchKey">
      <div slot="no-more">
        <span v-if="tagId"></span>
        <span v-else>Fin des articles</span>
      </div>
      <div slot="no-results">
        <span v-if="tagId"></span>
        <span v-else>Fin des articles</span>
      </div>
    </infinite-loading>
  </div>
</template>

<script>
import Service from "@/Service";
import InfiniteLoading from "vue-infinite-loading";
import PostFormat from "@/PostFormat";

let searchTimeout = null;
export default {
  name: "Articles.vue",
  props: ['tagId'],
  components: {
    InfiniteLoading,
  },
  data: function () {
    return {
      articles: [],
      articlesPage: 0,
      isOnPageFlow: false,
      searchText: null,
      searchKey: Math.random()
    };
  },
  mounted: async function () {
    this.isOnPageFlow = this.$route.name === "Articles";
  },
  methods: {
    infiniteHandler: async function ($state) {
      let searchQueryPart = "";
      let tagQueryPart = "";
      if (this.searchText !== null && this.searchText.trim() !== "") {
        searchQueryPart = '&search=' + this.searchText;
      }
      if (this.tagId) {
        tagQueryPart = "&tags=" + this.tagId;
      }
      const response = await Service.api().get(
          "posts?_embed&per_page=8&offset=" + this.articlesPage * 8 + searchQueryPart + tagQueryPart
      );
      const articles = response.data.map(PostFormat.forThumb);
      if (articles.length) {
        this.articlesPage += 1;
        this.articles.push(...articles);
        $state.loaded();
      } else {
        $state.complete();
      }
    },
    search: function () {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        this.articles = [];
        this.articlesPage = 0;
        this.searchKey = Math.random();
        searchTimeout = null;
      }, 1000);
    }
  },
};
</script>

<style scoped>
</style>