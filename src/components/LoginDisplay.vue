<template>
  <div v-if="isAuthenticated">
    <v-menu offset-y>
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

          <v-list-item-icon>
            <v-icon> {{ item.icon }} </v-icon>
          </v-list-item-icon>
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
    },
    goToMyAccount() {
      if (this.$router.currentRoute.path != "/minhaConta") {
        this.$router.push({ name: "MyAccount" });
      }
    },
    goToMyOrders() {
      if (this.$router.currentRoute.path != "/meusPedidos") {
        this.$router.push({ name: "MyOrders" });
      }
    },
    insertAt(array, ...elementsArray) {
      array.splice(0, 0, ...elementsArray);
    },
  },
  computed: {
    ...mapGetters({
      isAuthenticated: "isAuthenticated",
      isAdmin: "isAdmin",
      imgProfile: "ProfileImg",
    }),
  },
  mounted() {
    if (!this.isPageAdmin()) {
      this.insertAt(
        this.menuItems,
        {
          title: "Minha conta",
          icon: "fas fa-user",
          action: this.goToMyAccount,
        },
        {
          title: "Meus pedidos",
          icon: "fas fa-clipboard-list",
          action: this.goToMyOrders,
        }
      );
    }
    if (this.isAdmin && !this.isPageAdmin()) {
      this.insertAt(this.menuItems, {
        title: "Painel administrativo",
        icon: "fas  fa-users-cog",
        action: this.goToPanel,
      });
    } else if (this.isPageAdmin()) {
      this.insertAt(this.menuItems, {
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