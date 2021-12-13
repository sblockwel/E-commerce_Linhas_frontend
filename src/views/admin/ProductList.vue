<template>
  <div>
    <div>
      <v-btn href="product" text> Cadastrar Novo </v-btn>
    </div>
    
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductList",
  data() {
    return {
      headers: [
        { text: "Nome", align: "start", value: "name" },
        { text: "Preço", value: "price" },
        { text: "Quantidade em estoque", value: "quantity" },
        { text: "Descrição", value: "description" },
        { text: "Categoria", value: "category.name" },
      ],
      products: [
        {
          name: "Frozen Yogurt",
          price: 15.25,
          quantity: 6,
          description: "hbhabfhjbhdbchsbh",
          category: 1,
        },
        {
          name: "Frozen Yogurt",
          price: 15.25,
          quantity: 6,
          description: "hbhabfhjbhdbchsbh",
          category: 1,
        },
        {
          name: "Frozen Yogurt",
          price: 15.25,
          quantity: 6,
          description: "hbhabfhjbhdbchsbh",
          category: 1,
        },
        {
          name: "Frozen Yogurt",
          price: 15.25,
          quantity: 6,
          description: "hbhabfhjbhdbchsbh",
          category: 1,
        },
        {
          name: "Frozen Yogurt",
          price: 15.25,
          quantity: 6,
          description: "hbhabfhjbhdbchsbh",
          category: 1,
        },
        {
          name: "Frozen Yogurt",
          price: 15.25,
          quantity: 6,
          description: "hbhabfhjbhdbchsbh",
          category: 1,
        },
      ],
    };
  },
  methods: {
      ...mapActions(["GetProducts"]),
  },
  async mounted() {
    this.products = await this.GetProducts();
  },
};
</script>

<style>
</style>