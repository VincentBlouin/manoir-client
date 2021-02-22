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
          <router-link to="/" class="manoir-font" style="text-decoration: none">
            Le Manoir
            <span
              class="manoir-font"
              :style="{
                'font-size': communauteFontSize,
              }"                        
              >communauté intentionnelle</span
            >
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text color="secondary" class=""> En Images </v-btn>
          <v-divider vertical class="ml-2 mr-2"></v-divider>
          <v-btn text color="secondary" class="" to="/caracteristiques"> Nos Caractéristiques </v-btn>
          <v-divider vertical class="ml-2 mr-2"></v-divider>
          <v-btn text color="secondary" class=""> Articles des membres </v-btn>
          <v-btn dark color="secondary" class=""> Prêt Solidaire </v-btn>
          <v-btn text color="secondary" class=""> Nous recrutons </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <router-view class="pt-12" />
    </v-app>
  </div>
</template>

<script>
export default {
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
