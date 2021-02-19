<template>
  <div class="home">
    <v-row
      class="vh-center pb-4"
      :class="{
        'pt-14': $vuetify.breakpoint.lgAndUp,
      }"
    >
      <v-col cols="12" md="8" lg="6">
        <v-card flat class="pt-14 pb-14" color="transparent">
          <v-card-title
            class="pt-0 pb-8 text-center font-weight-thin mt-6 text-center text-h2 vh-center"
          >
            <!--            <h1 class="text-h2  font-weight-light mt-6 text-center" style="">-->
            <!--              Work on your personal <span style="white-space: nowrap">knowledge</span> graph-->
            <!--            </h1>-->
            Un mode de vie qui fait du sens
          </v-card-title>
          <v-card-title class="vh-center">
            <!--            <h4 class="text-h6 font-weight-bold text-center">-->
            <!--              In mindrespect.com, the graph is not just an analogy or a view only feature. Your notes, tags, relationships it's a first class feature becomes a reality and it becomes more intuitive to create links between ideas, to merge them, to restructure them, in short to make them evolve.-->
            <!--            </h4>-->
            <!--            <h4 class="text-h6 font-weight-regular text-justify">-->
            <!--              Benefit from the power of the underlying graph database that allows you to create links between your ideas, to merge them, to restructure them, in short to make them evolve.-->
            <!--            </h4>-->
            <h4
              class="text-h6 font-weight-regular text-justify"
              style="line-height: 2"
            >
              Communauté intentionnelle à partage de revenu, dans la Baie des
              Chaleurs. Nous visons à créer et maintenir un environnement humain
              sain et sécuritaire qui permet et favorise l’égalité de pouvoir et
              le partage et la mise en commun des ressources de manière durable.
              <!--            in the spirit of the <a-->
              <!--              href="https://en.wikipedia.org/wiki/Zettelkasten">Zettelkasten method</a>-->
            </h4>
          </v-card-title>
          <v-card-actions class="pt-8">
            <v-spacer></v-spacer>
            <v-btn color="secondary" text x-large> Nous recrutons </v-btn>
            <v-divider
              vertical
              class="mr-8 ml-8"
              v-if="$vuetify.breakpoint.mdAndUp"
            ></v-divider>
            <v-btn
              color="secondary"
              text
              x-large
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              Prêt solidaire
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
          <v-card-actions v-if="$vuetify.breakpoint.smAndDown">
            <v-spacer></v-spacer>
            <v-btn color="secondary" text x-large> Prêt solidaire </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <h1 class="manoir-font font-weight-thin mb-4 primary-color">En Images</h1>

    <!--    <v-parallax :src="require('@/assets/maison-devant.jpg')" height="1000"></v-parallax>-->

    <v-row class="vh-center">
      <v-col cols="12" lg="7">
        <v-carousel height="700">
          <v-carousel-item
            v-for="(image, i) in images"
            :key="i"
            :src="require('@/assets' + image.src)"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <v-row style="height: 100%" v-if="image.legend">
              <v-col
                cols="12"
                align-self="bottom"
                style="
                  display: flex;
                  align-items: flex-start;
                  justify-content: center;
                "
              >
                <v-sheet
                  tile
                  class="pa-2 font-weight-thin"
                  width="100%"
                  style="background-color: #00000085 !important"
                >
                  {{ image.legend }}
                </v-sheet>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

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

          <v-card-text class="body-1 bigger-font">
            <p
              v-html="
                nonCaracteristique.acf
                  .texte_court_pour_lapercu_de_la_caracteristique
              "
            ></p
          ></v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <h1 class="manoir-font font-weight-thin mt-12 primary-color">
      Articles des membres
    </h1>
    <v-subheader class="vh-center text-h6 font-weight-regular mb-4">
      Passés et présents
    </v-subheader>

    <v-row>
      <v-col
        cols="12"
        md="4"
        lg="3"
        v-for="article in articles"
        :key="article.id"
      >
        <v-card
          class="mx-auto my-12"
          max-width="374"
          :to="article.link"
          style="background: rgb(255 255 255 / 15%)"
        >
          <v-img
            height="250"
            v-if="article._embedded['wp:featuredmedia']"
            :src="article._embedded['wp:featuredmedia']['0'].source_url"
          ></v-img>

          <v-card-title
            v-html="article.title.rendered"
            class="text-left secondary-color"
          ></v-card-title>
          <v-card-subtitle class="text-left" v-if="article._embedded.author">
            <span v-if="article._embedded.author[0].name === 'montnoir'">
              Anonnyme,
            </span>
            <span v-else>
              {{ article._embedded.author[0].name }},
            </span>
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
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from "@/Service";
import InfiniteLoading from "vue-infinite-loading";
import DateUtil from "@/DateUtil";

export default {
  name: "Home",
  components: {
    InfiniteLoading,
  },
  data: function () {
    return {
      articles: [],
      articlesPage: 0,
      caracteristiques: [],
      nonCaracteristiques: [],
      images: [
        {
          src: "/maison-devant.jpg",
          // legend:"Vue de devant"
        },
        {
          src: "/maison-derrière.jpg",
          // legend:"Vue de derrière"
        },
      ],
    };
  },
  methods: {
    infiniteHandler: async function ($state) {
      const response = await Service.api().get(
        "posts?_embed&per_page=8&offset=" + this.articlesPage * 8
      );
      const articles = response.data.map((article) => {
        const url = new URL(article.link);
        article.link = url.pathname;
        article.dateFormatted = DateUtil.fromNow(new Date(article.date));
        return article;
      });
      if (articles.length) {
        this.articlesPage += 1;
        this.articles.push(...articles);
        $state.loaded();
      } else {
        $state.complete();
      }
    },
  },
  mounted: async function () {
    let response = await Service.api().get("caracteristique?_embed");
    this.caracteristiques = response.data.map((caracteristique) => {
      const url = new URL(caracteristique.link);
      caracteristique.link = url.pathname;
      return caracteristique;
    });

    response = await Service.api().get("non-caracteristique?_embed");
    this.nonCaracteristiques = response.data.map((nonCaracteristique) => {
      const url = new URL(nonCaracteristique.link);
      nonCaracteristique.link = url.pathname;
      return nonCaracteristique;
    });
  },
};
</script>
