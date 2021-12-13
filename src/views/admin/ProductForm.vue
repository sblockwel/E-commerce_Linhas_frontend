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
        <v-text-field
          v-model="form.name"
          :rules="nameRules"
          label="Nome do Produto"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.price"
          :rules="priceRules"
          label="Preço"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.quantity"
          :rules="quantityRules"
          label="Quantidade"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.description"
          :rules="descriptionRules"
          label="Descrição"
          required
        ></v-text-field>

        <v-select v-model="form.categoryId" :items="categories" item-text="name" item-value="id" label="Categoria" dense></v-select>

        <v-file-input accept="image/*" counter label="File input"></v-file-input>

        <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>

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
      categories: [],
      form: {
        name: "",
        price: "",
        quantity: "",
        description: "",
        categoryId: "",
      },
      show: false,
      showError: false,
      valid: true,
      nameRules: [(v) => !!v || "Nome é obrigatório!"],
      priceRules: [(v) => !!v || "Preço é obrigatório!"],
      quantityRules: [(v) => !!v || "Quantidade é obrigatório!"],
      descriptionRules: [(v) => !!v || "Descrição é obrigatória!"],
      erro: "",
    };
  },
  methods: {
    ...mapActions(["CreateProduct", "GetCategories"]),
    async submit() {
      try {
        await this.CreateProduct(this.form);
        this.showError = false;
      } catch (error) {
        this.showError = true;
        this.erro = error.message;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
  async mounted() {
    this.categories = await this.GetCategories();
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