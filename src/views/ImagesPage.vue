<template>
  <div
      :class="{
      'pt-16 pb-16 mt-12': isOnPageFlow
    }"
  >
    <h1 class="manoir-font font-weight-thin mb-4 primary-color">En Images</h1>

    <!--    <v-parallax :src="require('@/assets/maison-devant.jpg')" height="1000"></v-parallax>-->

    <v-row class="vh-center">
      <v-col cols="12" lg="9" xl="7">
        <v-carousel :height="carouselHeight">
          <v-carousel-item
              v-for="(image, i) in images"
              :key="i"
          >
            <div>
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
  </div>
</template>

<script>
import Service from "@/Service";

export default {
  name: "ImagesPage",
  mounted: async function () {
    this.isOnPageFlow = this.$route.name === "Images";
    if (this.$vuetify.breakpoint.smAndDown) {
      this.carouselHeight = 300;
    }
    let response = await Service.api().get("image-avant?per_page=30");
    this.images = response.data.map((image) => {
      image.isLoaded = false;
      image.src = image.acf.image_avant.sizes.large;
      return image;
    });
  },
  data: function () {
    return {
      images: [],
      carouselHeight: 700,
      isOnPageFlow: false
    }
  }
}
</script>

<style scoped>

</style>
