<template>
    <div v-if="isAuthenticated">
        <v-btn @click="sair()" text>
          <span class="mr-2">sair </span>
          <v-icon>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn href="/login" text> Login </v-btn>
        <v-btn href="/register" text> Registrar-se </v-btn>
    </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
export default {
    name: "LoginDisplay",
    methods: {
        ...mapActions(["LogOut"]),
        async sair() {
        await this.LogOut();
        this.$router.push("/login");
        },
    },
    computed: {
        ...mapGetters({ isAuthenticated: "isAuthenticated" }),
    },
    }
</script>

<style>

</style>