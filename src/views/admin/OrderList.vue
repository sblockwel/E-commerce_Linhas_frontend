<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="orders"
      :items-per-page="5"
      class="elevation-1">
      <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="finalizeOrder(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="cancelOrder(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { OrderFinished, OrderCancelled } from "../../classes/order_status.js"

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
        { text: 'Ações', value: 'actions', sortable: false }
      ],
      orders: [
        {
          orderNumber: "Frozen Yogurt",
          creationDate: 15.25,
          client: {
            name: "sabrina"
          },
          status: "Pendente",
        },
        {
          orderNumber: "Frozen Yogurt",
          creationDate: 15.25,
          client: {
            name: "sabrina"
          },
          status: "Pendente",
        },
        {
          orderNumber: "Frozen Yogurt",
          creationDate: 15.25,
          client: {
            name: "sabrina"
          },
          status: "Pendente",
        },
      ],
    };
  },
  methods:{
    ...mapActions(["SetOrderStatus"]),
    async finalizeOrder(order){
        await this.SetOrderStatus(order.id, OrderFinished)
      },
      async cancelOrder(order){
        await this.SetOrderStatus(order.id, OrderCancelled)
      }
  },
  async mounted() {
     // this.orders = await this.GetOrders();
  },
};
</script>

<style>

</style>