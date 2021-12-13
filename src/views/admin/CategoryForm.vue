<template>
  <div>
    <v-alert type="error" v-if="showError">
      {{erro}}
    </v-alert>
    <div class="center">
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">

        <v-text-field v-model="form.name" :rules="nameRules" label="Nome da categoria" required ></v-text-field>

        <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>

        <v-btn type="submit" color="success" class="mr-4"> Cadastrar </v-btn>

      </v-form>   
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CategoryForm",
  components: {},
  data() {
    return {
      form: {
        name: "",
      },
      showError: false,
      valid: true,      
      nameRules: [
        v => !!v || 'Nome é obrigatório!',
      ],
      erro: "",
    };
  },
  methods: {
    ...mapActions(["CreateCategory"]),
    async submit() {
      try {
        await this.CreateCategory(this.form);
        this.showError = false;
      } catch (error) {
        this.showError = true;
        this.erro = error.message
      }
    },
    reset () {
      this.$refs.form.reset()
    },      
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