<template>
  <div>
    <div>
      <v-btn href="category" text> Cadastrar Novo </v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="categories"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CategoryList",
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
  methods: {
    ...mapActions(["GetCategories"]),
  },
  async mounted() {
    this.categories = await this.GetCategories();
  },
};
</script>

<style>
</style>