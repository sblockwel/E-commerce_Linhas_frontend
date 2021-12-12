<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <v-img @click="goToHome()"
          class="shrink mr-2 logo"
          contain
          src="../assets/LINHALE.png"
          transition="scale-transition"
          width="80"
        />

        <v-img @click="goToHome()"
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down logo"
          contain
          min-width="150"
          src="../assets/LINHALd.png"
          width="80"
        />
      </div>

      <v-spacer></v-spacer>
      <login-display/>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import LoginDisplay from '../components/LoginDisplay.vue';

export default {
  components: { LoginDisplay },
  name: "BaseLayout",

  data: () => ({
    //
  }),
  methods: {
    goToHome(){
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push({name: "Home"})        
      }
    }
  },
  
};
</script>

<style scoped>
.logo:hover{
  cursor: pointer;
}
</style>
