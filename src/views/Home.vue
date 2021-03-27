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
              sain et sécuritaire qui permet et favorise l’égalité de pouvoir et
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
            <v-btn color="secondary" text x-large> Prêt solidaire</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <h1 class="manoir-font font-weight-thin mb-4 primary-color">En Images</h1>

    <!--    <v-parallax :src="require('@/assets/maison-devant.jpg')" height="1000"></v-parallax>-->

    <v-row class="vh-center">
      <v-col cols="12" lg="9" xl="7">
        <v-carousel height="700">
          <v-carousel-item
              v-for="(image, i) in images"
              :key="i"
          >
            <div style="min-height: 700px;">
              <v-img :src="image.src">
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="secondary"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
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
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <Caracteristiques></Caracteristiques>
    <Articles></Articles>
  </div>
</template>

<script>
import Service from "@/Service";

export default {
  name: "Home",
  components: {
    Caracteristiques: () => import("@/views/Caractéristiques"),
    Articles: () => import("@/views/Articles"),
  },
  data: function () {
    return {
      images: [],
    };
  },
  mounted: async function () {
    let response = await Service.api().get("image-avant?per_page=30");
    this.images = response.data.map((image) => {
      image.isLoaded = false;
      image.src = image.acf.image_avant.sizes.large;
      return image;
    });
  },
  methods: {
    frontImageLoadedHandler: function (image) {
      console.log(image);
      image.isLoaded = true;
    }
  }
};
</script>
