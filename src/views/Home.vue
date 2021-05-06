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
            Un mode de vie qui a du sens
          </v-card-title>
          <v-card-subtitle class="text-h6 font-weight-regular text-center">
            Communauté intentionnelle à partage de revenu, dans la Baie des
            Chaleurs.
          </v-card-subtitle>
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
              Nous visons à créer et maintenir un environnement humain
              sain et sécuritaire qui permet et favorise l’égalité de pouvoir,
              le partage et la mise en commun des ressources de manière durable.
              <!--            in the spirit of the <a-->
              <!--              href="https://en.wikipedia.org/wiki/Zettelkasten">Zettelkasten method</a>-->
            </h4>
          </v-card-title>
          <v-card-actions class="pt-8">
            <v-spacer></v-spacer>
            <v-btn color="secondary" text x-large to="/recrutement">Recrutement</v-btn>
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
                to="/pret-solidaire"
            >
              Prêt solidaire
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <v-divider v-if="$vuetify.breakpoint.smAndDown"></v-divider>
          <v-card-actions v-if="$vuetify.breakpoint.smAndDown">
            <v-spacer></v-spacer>
            <v-btn color="secondary" text x-large to="/pret-solidaire"> Prêt solidaire</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <Images></Images>
    <Caracteristiques></Caracteristiques>
    <Articles></Articles>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Caracteristiques: () => import("@/views/Caractéristiques"),
    Articles: () => import("@/views/Articles"),
    Images: () => import("@/views/Images"),
  }
};
</script>
