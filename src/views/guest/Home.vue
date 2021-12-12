<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs3 >
      <v-card>
        <v-img
          src="../../assets/ft500pt.png"
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Linhas</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-btn @click="goToCompra()" text color="orange">Produtos</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs3>
    <v-card>
        <v-img
          src="../../assets/agulhas.png"
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Agulhas</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-btn @click="goToCompra()" text color="orange">Produtos</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <v-flex xs3>
    <v-card>
        <v-img
          src="../../assets/pecas.png"
          aspect-ratio="0.8"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Diversos</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions class="justify-center">
          <v-btn  @click="goToCompra()" text color="orange" >Produtos</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

  </v-layout>
   </v-container>
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'Categoria'
      }
    },
     methods: {
    goToDescribe(){
      this.$router.push({name: "About"})
    },
    goToCompra(){
      this.$router.push({name: "Compra"})
    }
  }
  }
</script>

<style>

div.box {
	width: 200px;
	display: inline-block;
}
.container-fluid {
  padding: 50px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 120
  vh;
}
</style>
não consegui 