<template>
  <div v-if="isAuthenticated">
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-avatar size="36px">
            <img alt="Avatar" :src="imgProfile" />
          </v-avatar>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          link
          @click="item.action"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
  <div v-else>
    <v-btn href="/login" text> Login </v-btn>
    <v-btn href="/register" text> Registrar-se </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import routes from "../router/adminRoutes.js";
export default {
  name: "LoginDisplay",
  data() {
    return {
      menuItems: [
        {
          title: "Sair",
          icon: "fas fa-sign-out-alt",
          action: this.sair,
        },
      ],
      orders: [],
    };
  },
  methods: {
    ...mapActions(["LogOut"]),
    async sair() {
      await this.LogOut();
      this.$router.push("/login");
    },
    goToPanel() {
      if (this.$router.currentRoute.path != "/admin") {
        this.$router.push({ name: "HomeAdmin" });
      }
    },
    goToStore() {
      if (this.$router.currentRoute.path != "/home") {
        this.$router.push({ name: "Home" });
      }
    },
    isPageAdmin() {
      let pageAdmin = false;
      for (let route in routes) {
        if (this.$router.currentRoute.name == routes[route].name) {
          pageAdmin = true;
        }
      }
      return pageAdmin;
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: "isAuthenticated", isAdmin: "isAdmin", imgProfile: "ProfileImg" }),
  },
  mounted() {
      console.log(this.imgProfile)
    if (this.isAdmin && !this.isPageAdmin()) {
      this.menuItems.splice(0, 0, {
        title: "Painel gerencial",
        icon: "fas fa-sign-out-alt",
        action: this.goToPanel,
      });
    } else if (this.isPageAdmin()) {
      this.menuItems.splice(0, 0, {
        title: "Ir para a loja",
        icon: "fas fa-basket",
        action: this.goToStore,
      });
    }
  },
};
</script>

<style>
</style>