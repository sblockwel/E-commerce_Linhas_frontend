<template>
  <div class="center">
    <div class="menu" >
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
    </div>

    <div class="content">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
         <v-text-field v-model="form.username" label="Nome de usuário" required ></v-text-field>

        <v-text-field v-model="form.firstName" label="Nome" required ></v-text-field>
      </v-form>
    </div>

  </div>
</template>

<script>
export default {
  data () {
      return {
        form: {
          username: "",
          firstName: ""
        },
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
};
</script>

<style>
.center {
  margin: auto;
  width: 20%;
  text-align: center;
  padding: 10px;
}

.content {
  background-color: blanchedalmond;
}
</style>