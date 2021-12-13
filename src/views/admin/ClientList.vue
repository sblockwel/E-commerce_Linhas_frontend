<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="clients"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CLientList",
  data() {
    return {
      headers: [
        { text: "Nome", align: "start", value: "name" },
        { text: "Nome de usuário", value: "email" },
        { text: "Email", value: "email" },
        { text: "Documento", value: "document" },
        { text: "Telefone", value: "number" },
        { text: "Tipo", value: "type" },
      ],
      clients: [],
    };
  },
  methods: {
    ...mapActions(["GetClients"]),
  },
  async mounted() {
    this.clients = await this.GetClients();
  },
};
</script>

<style>
</style>