<template>
  <div class="about">
    <h1>Tela Descrição da Linha</h1>

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