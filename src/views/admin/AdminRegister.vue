<template>
  <div>
    <v-alert type="error" v-if="showError">
      {{ erro }}
    </v-alert>
    <div class="center">
        <v-select v-model="clientEmail" :items="users" item-text="name" item-value="email" label="Usuário" dense></v-select>
        <v-btn @click="submit" color="success" class="mr-4"> Cadastrar </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AdminRegister",
  components: {},
  data() {
    return {
      users: [],      
      clientEmail: 0,
      showError: false,
      valid: true,
    };
  },
  methods: {
    ...mapActions(["CreateAdmin", "GetClients"]),
    async submit() {
      try {
        if (this.clientEmail == null) {
           return  
        }
        await this.CreateAdmin(this.form.email)
        this.showError = false;
      } catch (error) {
        this.showError = true;
        this.erro = error.message;
      }
    },
  },
  async mounted() {
    this.users = await this.GetClients();
  },
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  text-align: center;
  padding: 10px;
}
</style>