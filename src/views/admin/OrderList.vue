<template>
  <div>
      

    <v-data-table
      :headers="headers"
      :items="categories"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return {
      headers: [
        {
          text: "Nome",
          align: "start",
          value: "name",
        },
      ],
      categories: [
        {
          name: "Frozen Yogurt",
        },
        {
          name: "Ice cream sandwich",
        },
        {
          name: "Eclair",
        },
      ],
    };
  },
  methods:{

  },
  async mounted() {
      this.orders = await this.GetOrders();
  },
};
</script>

<style>

</style>