<template>
  <div>
    <v-alert type="error" v-if="showError">
      {{ erro }}
    </v-alert>
    <div class="center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-select v-model="form" :items="users" label="Usuário" dense></v-select>

        <v-btn type="submit" color="success" class="mr-4"> Cadastrar </v-btn>
      </v-form>
    </div>
    <p v-if="showError" id="error">{{ erro }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProductForm",
  components: {},
  data() {
    return {
      users: [],      
      form: {        
      },
      showError: false,
      valid: true,
    };
  },
  methods: {
    ...mapActions(["CreateAdmin"]),
    async submit() {
      try {
        if (this.form != null) {
           return  
        }
        await this.CreateAdmin(this.form.id)
        this.showError = false;
      } catch (error) {
        this.showError = true;
        this.erro = error.message;
      }
    },
  },
  async mounted() {
    this.users = await this.GetUsers();
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