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
      <div v-if="isAuthenticated">
        <v-btn @click="sair()" text>
          <span class="mr-2">sair </span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn href="/login" text> Login </v-btn>
        <v-btn href="/register" text> Registrar-se </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["LogOut"]),
    async sair() {
      await this.LogOut();
      this.$router.push("/login");
    },
    goToHome(){
      this.$router.push({name: "Home"})
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: "isAuthenticated" }),
  },
};
</script>

<style scoped>
.logo:hover{
  cursor: pointer;
}
</style>
