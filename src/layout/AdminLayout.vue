<template>
  <v-app>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Linhas Blumenau
          </v-list-item-title>
          <v-list-item-subtitle>
            tudo em linhas para você
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
      <login-display />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark absolute bottom>
      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :to="item.route" :key="item.name" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <main :class="mainClass()">
      <router-view></router-view>
    </main>
  </v-app>
</template>
<script>
import LoginDisplay from "../components/LoginDisplay.vue";
export default {
  name: "AdminLayout",
  components: {
    LoginDisplay,
  },
  data() {
    return {
        drawer: false,
      items: [
        {name: "ProductCreate", title: "Cadastro de produtos", icon: "fas fa-tags", route: "/admin/product"},
        {name: "ProductList", title: "Lista de produtos", icon: "fas fa-list",  route: "/admin/products"},
        {name: "CategoryCreate", title: "Cadastro de categorias", icon: "fas fa-tags",  route: "/admin/category"},
        {name: "CategoryList", title: "Lista de categorias", icon: "fas fa-list",  route: "/admin/categories"},
        {name: "AdminCreate", title: "Cadastro de administrador", icon: "fas fa-users",  route: "/admin/adminRegister"},
        {name: "OrderPending", title: "Lista de edidos pendentes", icon: "fas fa-clipboard-list",  route: "/admin/orderPending"},
        {name: "ClientList", title: "Lista de clientes", icon: "fas fa-clipboard-list",  route: "/admin/clientList"},
        {name: "AdminList", title: "Lista de administardores", icon: "fas fa-clipboard-list",  route: "/admin/adminList"},
      ],
    };
  },
  methods:{
    mainClass(){
        return this.drawer ? "body-main drawer-collapsed" : "body-main"
    }
  },
};
</script>
<style scoped>
.body-main{
    padding: 10px;
}
.drawer-collapsed{
    margin-left: 256px;

}
</style>