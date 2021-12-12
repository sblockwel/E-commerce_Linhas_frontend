<template>
  <div class="compra">
    <h1> Descrição compra</h1>

     <v-card-actions>
          <v-btn @click="goToVoltar()" text color="orange">Voltar</v-btn>
        </v-card-actions>
  </div>
</template>

<script>
  export default {
    
     methods: {
    goToVoltar(){
      this.$router.push({name: "Home"})
    }
  }
  }
</script>