<template>
  <Page>
    <v-row>
      <v-col cols="12" class="h-center">
        <v-card flat color="transparent" max-width="600">
          <v-card-title class="h-center mb-4">
            Prêt solidaire pour l'acquisition du Manoir.
          </v-card-title>
          <v-card-subtitle class="body-1 text-justify">
            Prêtez-nous de l'argent pour que notre coopérative d'habitation devienne propriétaire
            de la maison et du terrain du fameux Manoir.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="h-center">
      <v-col cols="12" xl="6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cICr-qMmp7Q" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </v-col>
      <v-col cols="12" md="7" xl="6" align-self="center">
        <v-card flat color="transparent" class="pl-10">
          <v-card-title class="text-left mb-4 body-1 pl-0">
            <strong class="text-h5 mr-2">{{ formatPrice(moneyReceived) }}$</strong>
            récoltés sur un objectif de {{ formatPrice(objective) }}$
          </v-card-title>
          <v-card-text class="pl-0">
            <v-progress-linear
                v-model="percentageReceived"
                color="secondary"
                height="25"
            >
              <template v-slot:default="">
                <strong class="text-h5">{{ formatPrice(moneyReceived) }}$</strong>
              </template>
            </v-progress-linear>
          </v-card-text>
          <v-card-text class="body-1 pl-0" style="line-height: 1">
            <div class="float-left mr-8 text-left">
              <strong>{{ nbLender }}</strong><br>
              prêteurs
            </div>
            <div class="float-left text-left">
              <strong>{{ daysLeft }}</strong><br>
              jours avant la fin
            </div>
          </v-card-text>
          <v-card-actions class="pl-0 mt-10">
            <v-spacer v-if="$vuetify.breakpoint.lgAndDown"></v-spacer>
            <v-btn color="secondary" x-large @click="action=true">
              Je soutiens ce projet
            </v-btn>
            <v-spacer v-if="$vuetify.breakpoint.lgAndDown"></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="h-center">
      <v-col cols="12">
        <v-tabs background-color="transparent" v-model="tabs" grow>
          <v-tab>
            Campagne
          </v-tab>
          <v-tab>
            FAQ
          </v-tab>
          <v-tab>
            Actualités
          </v-tab>
          <v-tabs-items v-model="tabs" style="background-color:transparent">
            <v-tab-item>
              <v-card color="transparent">
                <v-card-title>
                  Description de la campagne
                </v-card-title>
                <v-card-text>
                  <v-subheader>
                    Pourquoi ?
                  </v-subheader>
                  <p>
                    ...
                  </p>
                  <v-subheader>
                    À quoi ça va servir
                  </v-subheader>
                  <p>
                    ...
                  </p>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="transparent">
                <v-card-title>
                  FAQ
                </v-card-title>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card color="transparent">
                <v-card-title>
                  Actualités
                </v-card-title>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </v-col>
    </v-row>
    <v-dialog v-model="action" fullscreen>
      <v-card :style="{
        background: 'url(' + require('@/assets/noise3.jpg') + ')',
        'background-repeat': 'repeat',
      }">
        <v-toolbar
            color="transparent"
            flat
        >
          <v-btn
              icon
              @click="action = false"
          >
            <v-icon color="secondary">mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Je prête un montant !</v-toolbar-title>
        </v-toolbar>
        <v-card-text class="text-left">
          blabla
        </v-card-text>
      </v-card>
    </v-dialog>
  </Page>
</template>

<script>
export default {
  name: "PretSolidaire",
  components: {
    Page: () => import('@/components/Page')
  },
  data: function () {
    return {
      moneyReceived: 4000,
      objective: 150000,
      percentageReceived: null,
      nbLender: 2,
      daysLeft: 300,
      tabs: null,
      action: false
    }
  },
  mounted: function () {
    this.percentageReceived = Math.ceil(this.moneyReceived / this.objective * 100);
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
}
</script>

<style scoped>

</style>