<template>
  <v-layout>
    <v-flex xs12 sm3 offset-sm1>
      <v-card>
        <v-img
          src="../assets/logomarca.png"
          aspect-ratio="1.5"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Linha Algodão</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn text color="orange">Comprar</v-btn>
          <v-btn text color="orange">Descrição</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

  </v-layout>
  
</template>

<script>
  export default {
    data () {
      return {
        card_text: '500gr'
      }
    }
  }
</script>

<style scoped>

</style>
