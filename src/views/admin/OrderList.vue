<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="finalizeOrder(item)">
          fas fa-check
        </v-icon>
        <v-icon small @click="cancelOrder(item)"> fas fa-times </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Atualizar lista </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { OrderFinished, OrderCancelled } from "../../classes/order_status.js";

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
        { text: "Ações", value: "actions", sortable: false },
      ],
      orders: [
      
      ],
    };
  },
  methods: {
    ...mapActions(["SetOrderStatus", "GetOrders"]),
    async finalizeOrder(order) {
      await this.SetOrderStatus(order.id, OrderFinished);
    },
    async cancelOrder(order) {
      await this.SetOrderStatus(order.id, OrderCancelled);
    },
    async initialize(){
      this.orders = await this.GetOrders();
    }
  },
  async mounted() {
    await this.initialize()
  },
};
</script>

<style>
</style>