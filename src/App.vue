<template>
  <div id="app">
    <v-app
        :style="{
        background: 'url(' + require('@/assets/noise3.jpg') + ')',
        'background-repeat': 'repeat',
      }"
    >
      <v-app-bar
          app
          flat
          :style="{
          background: 'url(' + require('@/assets/noise3.jpg') + ')',
          'background-repeat': 'repeat',
        }"
      >
        <v-toolbar-title class="text-h4">
          <router-link
              to="/"
              class="manoir-font"
              style="text-decoration: none"
              :class="{
              'manoir-font-smaller': $vuetify.breakpoint.smAndDown,
            }"
          >
            Le Manoir
            <span
                class="manoir-font manoir-font-smaller"
                :style="{
                'font-size': communauteFontSize,
              }"
            >communauté intentionnelle</span
            >
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-md-and-down">
          <!--          <v-btn text color="secondary" class="" to="/projet"-->
          <!--                 Le Projet-->
          <!--          </v-btn>-->
          <v-btn text color="secondary" class="" to="/caracteristiques"
                 :small="$vuetify.breakpoint.lgOnly"
          >Nos Caractéristiques
          </v-btn
          >
          <v-divider vertical class="ml-2 mr-2"></v-divider>
          <v-btn text color="secondary" class="" to="/articles" :small="$vuetify.breakpoint.lgOnly">
            Articles des membres
          </v-btn>
          <v-btn dark color="secondary" class="" to="/pret-solidaire" :small="$vuetify.breakpoint.lgOnly">
            Prêt Solidaire
          </v-btn>
          <v-btn text color="secondary" class="" to="/nous-recrutons" :small="$vuetify.breakpoint.lgOnly">
            Nous recrutons
          </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon
            color="secondary"
            v-if="$vuetify.breakpoint.mdAndDown"
            class="mr-1"
            @click.stop="sideMenu = !sideMenu"
        ></v-app-bar-nav-icon>
        <v-app-bar-nav-icon
            color="secondary"
            v-if="$vuetify.breakpoint.lgAndUp"
            class="mr-1"
            @click.stop="desktopSideMenu = !desktopSideMenu"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-navigation-drawer
          v-model="desktopSideMenu"
          fixed
          right
          app
          temporary
          :style="{
          background: 'url(' + require('@/assets/noise3.jpg') + ')',
          'background-repeat': 'repeat',
        }"
      >

        <v-list-item>
          <v-list-item-title>
            <v-btn text color="secondary" class="" to="/liens" :small="$vuetify.breakpoint.lgOnly">
              Initiatives et outils
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item href="mailto:manoir.intentionnel@gmail.com" class="body-1">
          <v-list-item-title class="text-left secondary-color">
            manoir.intentionnel@gmail.com
          </v-list-item-title>
          <v-list-item-action>
            <v-icon color="secondary">
              mail
            </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="https://www.facebook.com/lemanoir.community" class="body-1">
          <v-list-item-title class="text-left secondary-color">
            /lemanoir.community
          </v-list-item-title>
          <v-list-item-action>
            <img
                src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30"
            />
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="https://www.instagram.com/lemanoir.community" class="body-1">
          <v-list-item-title class="text-left secondary-color">
            /lemanoir.community
          </v-list-item-title>
          <v-list-item-action>
            <v-img
                   width="32"
                   :src="require('@/assets/instagram.svg')"
            >
            </v-img>
          </v-list-item-action>
        </v-list-item>
      </v-navigation-drawer>
      <v-navigation-drawer
          v-model="sideMenu"
          fixed
          temporary
          :style="{
          background: 'url(' + require('@/assets/noise3.jpg') + ')',
          'background-repeat': 'repeat',
        }"
      >
        <v-list-item>
          <!--          <v-list-item-title>-->
          <!--            <v-btn text color="secondary" class="" to="/projet">-->
          <!--              Le Projet-->
          <!--            </v-btn>-->
          <!--          </v-list-item-title>-->
          <v-list-item-title>
            <v-btn text color="secondary" class="" to="/caracteristiques">
              Nos Caractéristiques
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text color="secondary" class="" to="/articles">
              Articles des membres
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text color="secondary" class="" to="/pret-solidaire">
              Prêt Solidaire
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <v-btn text color="secondary" class="" to="/nous-recrutons">
              Nous recrutons
            </v-btn>
          </v-list-item-title>
        </v-list-item>
        <v-list-item href="mailto:manoir.intentionnel@gmail.com" class="body-1">
          <v-list-item-title class="text-left secondary-color">
            manoir.intentionnel@gmail.com
          </v-list-item-title>
          <v-list-item-action>
            <v-icon color="secondary">
              mail
            </v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="https://www.facebook.com/lemanoir.community" class="body-1">
          <v-list-item-title class="text-left secondary-color">
            /lemanoir.community
          </v-list-item-title>
          <v-list-item-action>
            <img
                src="https://facebookbrand.com/wp-content/uploads/2016/05/flogo_rgb_hex-brc-site-250.png?w=30&h=30"
            />
          </v-list-item-action>
        </v-list-item>
        <v-list-item href="https://www.instagram.com/lemanoir.community" class="body-1">
          <v-list-item-title class="text-left secondary-color">
            /lemanoir.community
          </v-list-item-title>
          <v-list-item-action>
            <v-img
                width="32"
                :src="require('@/assets/instagram.svg')"
            >
            </v-img>
          </v-list-item-action>
        </v-list-item>
      </v-navigation-drawer>
      <router-view class="pt-12"/>
    </v-app>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      sideMenu: false,
      desktopSideMenu: false
    };
  },
  computed: {
    background: function () {
      return "";
      // return require("@assets/noise-texture.png")
    },
    communauteFontSize: function () {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return "19px";
      } else {
        return "12px";
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

body {
}

.primary-color {
  color: #c2794c !important;
}

.secondary-color {
  color: #c25c4c !important;
}

//
//.v-application--wrap {
//  background-color: #d5c2b4;
//}

.manoir-font {
  font-family: "Staatliches", cursive;
  letter-spacing: 2px;
}

.manoir-font-smaller {
  font-size: 0.7em;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vh-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.h-center {
  display: flex;
  justify-content: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.post-content {
  img {
    max-width: 100%;
  }

  * {
    line-height: 2;
  }
}

.bigger-font {
  &.post-content {
    p,
    li {
      font-size: 1.25em;
    }
  }

  &.v-card__text p {
    font-size: 1.1em;
  }
}

.v-card__title {
  word-break: inherit !important;
}


</style>
