<template>
  <div id="app">
    <v-app>
      <v-app-bar app flat color="white">
        <v-toolbar-title class="text-h4">
          <router-link to="/" class="manoir-font" style="text-decoration: none;">
            Le Manoir <span class="manoir-font" style="font-size:19px;">communauté intentionnelle</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text  color="primary" class="">
            En Images
          </v-btn>
          <v-divider vertical class="ml-2 mr-2"></v-divider>
          <v-btn text  color="primary" class="">
            Nos Caractéristiques
          </v-btn>
          <v-divider vertical class="ml-2 mr-2"></v-divider>
          <v-btn text  color="primary" class="">
            Articles des membres
          </v-btn>
          <v-btn dark color="primary" class="">
            Prêt Solidaire
          </v-btn>
          <v-btn text color="primary" class="">
            Nous recrutons
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <router-view class="pt-12"/>
    </v-app>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');


.primary-color {
  color: #c2794c !important;
}

.secondary-color {
  color: #d5c2b4 !important;
}

//
//.v-application--wrap {
//  background-color: #d5c2b4;
//}

.manoir-font {
  font-family: 'Staatliches', cursive;
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
</style>
