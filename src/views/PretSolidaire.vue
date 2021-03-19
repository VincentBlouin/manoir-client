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
      <v-col cols="12" class="text-left body-1">
        <v-card color="transparent" class="mb-6" flat>
          <v-card-title>
            Le projet
          </v-card-title>
          <v-card-text class="body-1 black--text">
            <p>
              Le transfert de propriété, pour que notre coopérative d'habitation devienne propriétaire de la maison et du
              terrain du fameux Manoir.
            </p>
            <p>
              65 acres, 1/3 en champs dont 5 acres en culture maraîchère, et 2/3 en forêt; une maison de 7 chambres, une
              grange, un chalet; une haie-brise-vent en partie comestible, 12 pommiers matures et un jeune verger, plusieurs
              autres arbustes fruitiers et arbres à noix fraîchement planté; et une deuxième terre de 25 acres de forêt
              pionnière (post-coupe-à-blanc).
            </p>
          </v-card-text>
        </v-card>
        <v-card color="transparent" class="mb-6" flat>
          <v-card-title>
            Pourquoi?
          </v-card-title>
          <v-card-text class="body-1 black--text">
            Parce que le Manoir est un projet <strong>collectif !</strong>
            <ul>
              <li>
                Cohérence : c’est sa raison d’être; c’est sa réalité terrain; et c’est l’intention depuis le tout début.
              </li>
              <li>
                Égalité : facilite et offre une meilleure garantie à tous les membres d’un partage du pouvoir et du partage
                des
                responsabilités.
              </li>
              <li>
                Justice : les ressources (temps, argent, etc.) qui ont été investies sont le fruit de la contribution de
                dizaines de personnes. Ces dons et échanges ont été faits dans l’intention de servir une cause plus grande
                et
                durable que la propriété privée de certains individus. La meilleure façon de le reconnaître, c’est
                d’officialiser la propriété collective.
              </li>
              <li>
                Liberté : Parce que c’est notre choix!
              </li>
              <li>
                Innovation : Le système actuel met étonnemment de bâtons dans les roues. Partager la propriété et chercher
                une
                alternative à la propriété privée, c’est se retrouver en tant que minorité face à un monopole. Les
                assurances,
                institutions financières, cadres légaux qui crée les formes légales et les règlements de zonage, ne sont pas
                habituées, ni intéressées, par la diversité, et font preuve d’un grand manque d’ouverture. Il n’y a pas
                beaucoup
                de place pour l’innovation dans cet univers. Or, il faut pouvoir tester autre chose pour trouver des
                solutions
                qui peuvent faire face aux problèmes d’aujourd’hui (inégalités, perturbations climatiques, etc.)
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card color="transparent" class="mb-6" flat>
          <v-card-title>
            Qui nous sommes?
          </v-card-title>
          <v-card-text class="body-1 black--text">
            Le Manoir, c’est :
            <ul>
              <li>
                Une communauté à partage de revenu : une des rares au Québec, mais l’une parmi de nombreuses initiatives en
                Amérique et dans le monde.
              </li>
              <li>
                Un collectif qui existe depuis 5 ans! On possède et on gère ensemble : une ferme bio, un verger, une forêt
                (bois
                de chauffage, de construction, petite érablière en devenir, plantations diverses et sentiers). On a
                accueilli
                une centaine de visiteurs-bénévoles, et plusieurs party!
              </li>
              <li>
                On vit simplement, et on jouit d’une grande qualité de vie : repas sains, frais, locaux… cuisinés! Proximité
                de
                la nature, mode de vie actif, vie sociale active, etc. Et tout ça avec un revenu annuel moyen de 15 000$ par
                personne.
              </li>
              <li>
                4 membres pour l’instant. Nous avons été jusqu’à 7 membres et même temps; nous sommes présentement en
                recrutement, et nous avons une capacité d’accueil de 8 membres en ce moment.
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card color="transparent" class="mb-6" flat>
          <v-card-title>
            À quoi servira le prêt?
          </v-card-title>
          <v-card-text class="body-1 black--text">
            <ul>
              <li>
                L’argent investit dans l’immobilier depuis les débuts est de 260 000$. 70 000$ ont déjà été payés par le
                Manoir;
                65 000$ sont des prêts solidaires de membres. Il reste donc 125 000$ d’hypothèque.
              </li>
              <li>
                Le prêt solidaire, c’est comme une hypothèque solidaire : au lieu d’emprunte à la banque, on emprunte à
                des
                sympathisant-e-s de notre projet… et on leur donne l’argent des intérêts à elleux au lieu d’une banque!
              </li>
              <li>
                Lorsqu’on aura 125 000$ en prêts (ou 125 personnes qui nous prêtent 1000$, ou 25 personnes qui nous
                prêtent
                10
                000$) on pourra passer chez le notaire pour le transfert de propriété! Enfin!
              </li>
              <li>
                D’ici à ce qu’on atteigne ce montant, ça permettra une transition de la banque vers les prêts solidaires
                :
                ceux-ci serviront à rembourser la banque. En accélérant les remboursements, on peut espérer se libérer
                plus
                tôt
                de l’attachement à la banque.
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card color="transparent" class="mb-6" flat>
          <v-card-title>
            Comment ça marche?
          </v-card-title>
          <v-card-text class="body-1 black--text">
            <ul>
              <li>
                Vous choisissez pendant combien d’années vous souhaitez vous engager à nous prêter de l’argent. Plus
                vous
                nous
                prêtez longtemps, plus le taux d’intérêt que vous en tiré sera élevé.
              </li>
              <li>
                Le taux d’intérêt est progressif, c’est-à-dire qu’il augmente à chaque année : 1% la première année, 2%
                la
                2e
                année… c’est simple!
              </li>
              <li>
                Vos intérêts annuels vous serons versés à la même date à chaque année. Votre prêt sera remboursé en 1
                versement
                à son échéance.
              </li>
              <li>
                Nous prévoyons rembourser de 12 à 14 prêts par année, et estimons avoir terminé de rembourser tous nos
                prêts
                d’ici 10 ans.
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card color="transparent" flat>
          <v-card-title class="text-h6">
            Quels sont les risques?
          </v-card-title>
          <v-card-subtitle class="subtitle-1">(et les stratégies auxquelles nous avons pensé)</v-card-subtitle>
          <v-card-text class="body-1 black--text">
            <h4 class="mb-3">
              Pas de capacité de payer
            </h4>
            <p class="mb-0">
              Advenant le scénario où, pour une raison quelconque, nos revenus diminuent drastiquement, ou une grosse
              dépense
              imprévue se présente, et nous n’avons soudainement plus la capacité de rembourser les prêts à échéance.
            </p>
            <ul>
              <li>
                Nous vérifirions avec nos prêteurs s’ils acceptent de nous prêter plus longtemps que prévu.
              </li>
              <li>
                Nous tenterions de trouver de nouveaux-elles prêteurs-eusess solidaires, et remboursons les prêts qui
                arrivent à
                échéance cette année.
              </li>
              <li>
                Quelqu’un pourrait signer et être « garant de notre prêt ».
              </li>
            </ul>
            <h4 class="mb-3 mt-3">
              Feu!
            </h4>
            <ul>
              <li>
                Nous n’avons pas encore trouvé d’assurance qui accepte de nous couvrir dans ce genre de cas. C’est
                d’ailleurs en
                bonne partie ce qui nous pousse à se tourner vers les prêts solidaires (bien que ce soit une belle
                occasion
                d’être plus en cohérence avec notre vision). Si nous passons au feu et que c’est « perte totale », nous
                n’avons
                plus de maison et avons perdu plusieurs de nos biens. Nous devrons probablement rebâtir, et trouver un
                moyen de
                se loger en attendant.
              </li>
              <li>
                Cela risque d’affecter nos capacité de payer, et de rembourser les prêts selon l’échéance.
              </li>
              <li>
                Advenant une dissolution, par exemple, il n’y aurait plus de maison à vendre, seulement une terre et
                possiblement une grange, ce qui risque de diminuer drastiquement la valeur immobilière (!), et
                potentiellement
                nous empêcher de rembourser les prêts.
              </li>
              <li>
                On a des détecteurs de fumée dans chaque chambre, et il y a quelqu’un à la maison presque en tout temps!
              </li>
            </ul>
            <h4 class="mt-3">
              Dissolution
            </h4>
            <ul>
              <li>
                Nous avons adopté un plan en cas de dissolution du collectif du Manoir. En gros, l’idée serait de vendre
                la
                maison et tous les biens, et d’utiliser les sous de la vente pour rembourser nos engagements financiers.
                Nous
                avons aussi réfléchi à comment serait distribué les sous advenant qu’il reste de l’argent après le
                remboursement
                des prêts, d’une manière qui permette de soutenir la continuité de la vision, ainsi que de reconnaître
                équitablement la contribution de ses membres à travers son histoire. Voir le document pour les détails.
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="12">
        <v-btn color="secondary" x-large @click="action=true">
          Je soutiens ce projet
        </v-btn>
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