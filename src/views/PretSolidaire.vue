<template>
  <Page class="custom-page">
    <v-row>
      <v-col cols="12" class="h-center">
        <v-card flat color="transparent" max-width="600">
          <v-card-title class="h-center mb-4 text-h6">
            Prêt solidaire pour l'acquisition du Manoir.
          </v-card-title>
          <v-card-subtitle class="subtitle-1 text-justify" style="font-size: 1.1rem !important;">
            Prêtez-nous de l'argent pour que notre coopérative d'habitation devienne propriétaire
            de la maison et du terrain du fameux Manoir.
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="h-center">
      <v-col cols="12" xl="6" class="h-center">
        <v-img
            src="https://manoir.community/wp-content/uploads/2021/02/dessin-judith.jpg"
            max-width="600"
        >
        </v-img>
        <!--        <iframe width="560" height="315" src="https://www.youtube.com/embed/cICr-qMmp7Q" frameborder="0"-->
        <!--                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"-->
        <!--                allowfullscreen></iframe>-->
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
              jours avant la fin (15 septembre 2021)
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="12">
        <v-btn color="secondary" x-large
               href="https://docs.google.com/forms/d/e/1FAIpQLSf0oX-4Pq8Oha0VW3RrBbaO7v0YUkrg-K9TsYi3E_0BEZvtEA/viewform?ts=60622511&gxids=7628">
          Je soutiens ce projet
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="h-center">
      <v-col cols="12" lg="9" class="text-left body-1 post-content">
        <v-card color="transparent" flat>
          <v-card-title>
            Le projet
          </v-card-title>
          <v-card-text class="body-1 black--text pb-0">
            <p>
              Le transfert de propriété, pour que notre coopérative d'habitation devienne propriétaire de la maison et
              du
              terrain du fameux Manoir. La terre a été achetée il y a 6 ans au nom de 2 membres, Arielle et Vincent,
              avec l'intention de transférer la propriété vers une forme légale collective.
            </p>
            <p>
              La propriété fait 65 acres, 1/3 en champs dont 5 acres en culture maraîchère, et 2/3 en forêt; une maison
              de 7 chambres, une
              grange, un chalet; une haie-brise-vent en partie comestible, 12 pommiers matures et un jeune verger,
              plusieurs
              autres arbustes fruitiers et arbres à noix fraîchement planté; et une deuxième terre de 25 acres de forêt
              pionnière (post-coupe-à-blanc).
            </p>
          </v-card-text>
        </v-card>
        <v-card color="transparent" flat>
          <v-card-title>
            Pourquoi?
          </v-card-title>
          <v-card-text class="body-1 black--text pb-0">
            Parce que le Manoir est un projet <strong>collectif !</strong>
            <ul>
              <li>
                Cohérence : c’est sa raison d’être; c’est sa réalité terrain; et c’est l’intention depuis le tout début.
              </li>
              <li>
                Égalité : facilite et offre une meilleure garantie à tous les membres d’un partage du pouvoir et du
                partage
                des
                responsabilités.
              </li>
              <li>
                Justice : les ressources (temps, argent, etc.) qui ont été investies sont le fruit de la contribution de
                dizaines de personnes. Ces dons et échanges ont été faits dans l’intention de servir une cause plus
                grande
                et
                durable que la propriété privée de certains individus. La meilleure façon de le reconnaître, c’est
                d’officialiser la propriété collective.
              </li>
              <li>
                Liberté : Parce que c’est notre choix!
              </li>
              <li>
                Innovation : Le système actuel met étonnemment de bâtons dans les roues. Partager la propriété et
                chercher
                une
                alternative à la propriété privée, c’est se retrouver en tant que minorité face à un monopole. Les
                assurances,
                institutions financières, cadres légaux qui crée les formes légales et les règlements de zonage, ne sont
                pas
                habituées, ni intéressées, par la diversité, et font preuve d’un grand manque d’ouverture. Il n’y a pas
                beaucoup
                de place pour l’innovation dans cet univers. Or, il faut pouvoir tester autre chose pour trouver des
                solutions
                qui peuvent faire face aux problèmes d’aujourd’hui (inégalités, perturbations climatiques, etc.)
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card color="transparent" flat>
          <v-card-title>
            Qui nous sommes?
          </v-card-title>
          <v-card-text class="body-1 black--text pb-0">
            Le Manoir, c’est :
            <ul>
              <li>
                Une communauté à partage de revenu : une des rares au Québec, mais l’une parmi de nombreuses initiatives
                en
                Amérique et dans le monde.
              </li>
              <li>
                Un collectif qui existe depuis 5 ans! On possède et on gère ensemble : une ferme bio, un verger, une
                forêt
                (bois
                de chauffage, de construction, petite érablière en devenir, plantations diverses et sentiers). On a
                accueilli
                une centaine de visiteurs-bénévoles, et plusieurs party!
              </li>
              <li>
                On vit simplement, et on jouit d’une grande qualité de vie : repas sains, frais, locaux… cuisinés!
                Proximité
                de
                la nature, mode de vie actif, vie sociale active, etc. Et tout ça avec un revenu annuel moyen de 15 000$
                par
                personne.
              </li>
              <li>
                4 membres pour l’instant. Nous avons été jusqu’à 7 membres et même temps; nous sommes présentement en
                recrutement, et nous avons une capacité d’accueil de 8 membres en ce moment.
              </li>
            </ul>
          </v-card-text>
        </v-card>
        <v-card color="transparent" flat>
          <v-card-title>
            À quoi servira le prêt?
          </v-card-title>
          <v-card-text class="body-1 black--text pb-0">
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
                Lorsqu’on aura 190 000$ en prêts (ou 190 personnes qui nous prêtent 1000$, ou 19 personnes qui nous
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
        <v-card color="transparent" flat>
          <v-card-title>
            Comment ça marche?
          </v-card-title>
          <v-card-text class="body-1 black--text pb-0">
            <ul>
              <li>
                Vous choisissez pendant combien d’années vous souhaitez vous engager à nous prêter de l’argent. Plus
                vous
                nous
                prêtez longtemps, plus le taux d’intérêt que vous en tirerez sera élevé.
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
                Nous prévoyons rembourser de 6 à 14 prêts par année.
              </li>
            </ul>
            <v-card color="transparent" class="mt-6 mb-6">
              <v-card-title class="subtitle-1">
                Calculateur d'intérêts
              </v-card-title>
              <v-card-text class="pb-0">
                <v-text-field v-model="montant" type="number" label="Montant Prêté"></v-text-field>
                <v-select
                    :items="anneesPret"
                    v-model="nbAnneesPret"
                    label="Années"
                ></v-select>
              </v-card-text>
              <v-card-text class="subtitle-1 font-weight-bold pt-0">
                Intérêts total:
                {{ formatPrice(interetTotal) }}$
              </v-card-text>
            </v-card>
            <v-card color="white" class="mt-4 mb-4">
              <v-card-subtitle class="text-center body-1">
                Voici à quoi ça ressemble pour un prêt de 1000$
              </v-card-subtitle>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-center" colspan="2">
                      Taux d'intérêt progressif
                    </th>
                    <th class="text-center">
                      Intérêt annuel
                    </th>
                    <th class="text-center">
                      Cumul des intérêts
                    </th>
                    <th class="text-center ml-2 mr-2">
                      Taux d'intérêt moyen
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="text-left">
                      1ere année
                    </td>
                    <td class="text-center">
                      1,00%
                    </td>
                    <td class="text-center">
                      10,00$
                    </td>
                    <td class="text-center">
                      10,00$
                    </td>
                    <td class="text-center">
                      1,00%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      2<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      2,00%
                    </td>
                    <td class="text-center">
                      20,00$
                    </td>
                    <td class="text-center">
                      30,00$
                    </td>
                    <td class="text-center">
                      1,50%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      3<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      3,00%
                    </td>
                    <td class="text-center">
                      30,00$
                    </td>
                    <td class="text-center">
                      60,00$
                    </td>
                    <td class="text-center">
                      2,00%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      4<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      4,00%
                    </td>
                    <td class="text-center">
                      40,00$
                    </td>
                    <td class="text-center">
                      100,00$
                    </td>
                    <td class="text-center">
                      2,50%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      5<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      5,00%
                    </td>
                    <td class="text-center">
                      50,00$
                    </td>
                    <td class="text-center">
                      150,00$
                    </td>
                    <td class="text-center">
                      3,00%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      6<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      6,00%
                    </td>
                    <td class="text-center">
                      60,00$
                    </td>
                    <td class="text-center">
                      210,00$
                    </td>
                    <td class="text-center">
                      3,50%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      7<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      7,00%
                    </td>
                    <td class="text-center">
                      70,00$
                    </td>
                    <td class="text-center">
                      280,00$
                    </td>
                    <td class="text-center">
                      4,00%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      8<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      8,00%
                    </td>
                    <td class="text-center">
                      80,00$
                    </td>
                    <td class="text-center">
                      360,00$
                    </td>
                    <td class="text-center">
                      4,50%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      9<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      9,00%
                    </td>
                    <td class="text-center">
                      90,00$
                    </td>
                    <td class="text-center">
                      450,00$
                    </td>
                    <td class="text-center">
                      5,00%
                    </td>
                  </tr>
                  <tr>
                    <td>
                      10<sup>e</sup> année
                    </td>
                    <td class="text-center">
                      10,00%
                    </td>
                    <td class="text-center">
                      100,00$
                    </td>
                    <td class="text-center">
                      550,00$
                    </td>
                    <td class="text-center">
                      5,50%
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card>
          </v-card-text>
        </v-card>
        <v-card color="transparent" flat>
          <v-card-title class="text-h6">
            Quels sont les risques?
          </v-card-title>
          <v-card-subtitle class="subtitle-1">Et les stratégies auxquelles nous avons pensé</v-card-subtitle>
          <v-card-text class="body-1 black--text pb-0">
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
                équitablement la contribution de ses membres à travers son histoire.
              </li>
            </ul>
            <h4 class="mb-3 mt-3">
              Feu
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
                Advenant un tel scénario catastrophe, nous ferions certainement appel à la solidarité de la communauté
                élargie pour aller chercher de l'aide à tous les niveaux.
              </li>
              <li>
                On fait aussi attention à ce qu'il n'y ait pas de feu à la maison: on a des détecteurs de fumée dans
                chaque chambre, et il y a quelqu’un à la maison presque en tout temps!
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="3" class="text-left body-1">
        <h4 class="text-center mb-4">
          Forfaits en tranche de 1000$
        </h4>
        <v-row v-for="forfait in forfaits" :key="forfait.duration">
          <v-col cols="12">
            <v-card color="transparent">
              <v-card-title class="subtitle-1">
                Prêt de {{ forfait.duration }} ans
              </v-card-title>
              <v-card-text>
                <strong>
                  Livraison prévue
                </strong>
                {{ forfait.delivery }}
              </v-card-text>
              <v-card-text>
                <strong>
                  Taux d'intérêt moyen
                </strong>
                {{ forfait.interest }}
              </v-card-text>
              <v-card-text>
                <strong>
                  Stocks limités
                </strong>
                {{ forfait.stock }} sur {{ forfait.totalStock }}
              </v-card-text>
              <v-card-text class="font-italic pt-0" v-if="forfait.condition">
                *Disponible lorsque nous aurons atteint {{ forfait.condition }}% de notre objectif
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-12">
      <v-col cols="12">
        <v-btn color="secondary" x-large
               href="https://docs.google.com/forms/d/e/1FAIpQLSf0oX-4Pq8Oha0VW3RrBbaO7v0YUkrg-K9TsYi3E_0BEZvtEA/viewform?ts=60622511&gxids=7628">
          Je soutiens ce projet
        </v-btn>
      </v-col>
    </v-row>
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
      montant: 0,
      anneesPret: [{
        text: '1',
        value: 1
      },
        {
          text: '2',
          value: 2
        },
        {
          text: '3',
          value: 3
        },
        {
          text: '4',
          value: 4
        },
        {
          text: '5',
          value: 5
        },
        {
          text: '6',
          value: 6
        },
        {
          text: '7',
          value: 7
        },
        {
          text: '8',
          value: 8
        },
        {
          text: '9',
          value: 9
        },
        {
          text: '10',
          value: 10
        },
      ],
      interetMoyen: [1, 1.5, 2.0, 2.5, 3, 3.5, 4, 4.5, 5, 5.5],
      nbAnneesPret: 5,
      moneyReceived: 169000,
      objective: 190000,
      percentageReceived: null,
      nbLender: 23,
      daysLeft: 0,
      tabs: null,
      forfaits: [{
        duration: 10,
        delivery: "Octobre 2031",
        interest: "5,50%",
        stock: 94,
        totalStock: 104
      },
        {
          duration: 9,
          delivery: "Octobre 2030",
          interest: "5,00%",
          stock: 6,
          totalStock: 6
        },
        {
          duration: 8,
          delivery: "Octobre 2029",
          interest: "4,50%",
          stock: 7,
          totalStock: 7
        },
        {
          duration: 7,
          delivery: "Octobre 2028",
          interest: "4,00%",
          stock: 8,
          totalStock: 8
        },
        {
          duration: 6,
          delivery: "Octobre 2027",
          interest: "3,50%",
          stock: 8,
          totalStock: 8
        },
        {
          duration: 5,
          delivery: "Octobre 2026",
          interest: "3,00%",
          stock: 9,
          totalStock: 9
        },
        {
          duration: 4,
          delivery: "Octobre 2025",
          interest: "2,50%",
          stock: 10,
          totalStock: 10
        },
        {
          duration: 3,
          delivery: "Octobre 2024",
          interest: "2,00%",
          stock: 11,
          totalStock: 11
        },
        {
          duration: 2,
          delivery: "Octobre 2023",
          interest: "1,50%",
          stock: 7,
          totalStock: 13
        },
        {
          duration: 1,
          delivery: "Octobre 2022",
          interest: "1,00%",
          stock: 5,
          totalStock: 14
        },
      ]
    }
  },
  mounted: function () {
    this.percentageReceived = Math.ceil(this.moneyReceived / this.objective * 100);
    this.daysLeft = this.daysRemaining(
        new Date(),
        new Date(2021, 8, 15)
    );
  },
  methods: {
    formatPrice(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    daysRemaining: function (firstDate, secondDate) {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const diffDays = Math.ceil((secondDate - firstDate) / oneDay);
      return Math.max(0, diffDays);
    }
  },
  computed: {
    interetTotal: function () {
      return (this.montant * this.nbAnneesPret * (this.interetMoyen[this.nbAnneesPret - 1] / 100)).toFixed(2);
    }
  }
}
</script>

<style scoped>

</style>
