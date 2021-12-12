<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "OrderList",
  data() {
    return {
      headers: [
        {
          text: "Número do pedido",
          align: "start",
          value: "orderNumber",
        },
        {
          text: "Data de emissão",
          align: "start",
          value: "creationDate",
        },
        {
          text: "Cliente",
          align: "start",
          value: "client.name",
        },
        {
          text: "Status",
          align: "start",
          value: "status",
        },
      ],
      orders: [],
    };
  },
  methods: {
    ...mapActions(["GetOrders"]),
    async initialize() {
      this.orders = await this.GetOrders();
    },
  },
  async mounted() {
    await this.initialize();
  },
};
</script>

<style>
</style>