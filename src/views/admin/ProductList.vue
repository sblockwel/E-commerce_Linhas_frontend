<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="products"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  data() {
    return {
      headers: [
        { text: "Nome", align: "start", value: "name" },
        { text: "Preço", value: "price" },
        { text: "Quantidade em estoque", value: "quantity" },
        { text: "Descrição", value: "description" },
        { text: "Categoria", value: "category" },
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
      
  },
  async mounted() {
    this.products = await this.GetProducts();
  },
};
</script>

<style>
</style>