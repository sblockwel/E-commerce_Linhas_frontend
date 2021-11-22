<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img @click="goToHome()"
          alt="Vuetify Logo"
          class="shrink mr-2 logo"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img @click="goToHome()"
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down logo"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
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
      this.$router.push({name: "Home"})
    }
  },
  
};
</script>

<style scoped>
.logo:hover{
  cursor: pointer;
}
</style>
