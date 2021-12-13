<template>
  <div class="center">
    <v-alert type="error" v-if="showError">
      {{erro}}
    </v-alert>
    <div>
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">

        <v-text-field v-model="form.username" :counter="10" :rules="usernameRules" label="Nome de usuário" required ></v-text-field>

        <v-text-field v-model="form.name" :rules="nameRules" label="Nome completo" required ></v-text-field>

        <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required ></v-text-field>

        <v-text-field v-model="form.document" :rules="documentRules" label="CPF ou CNPJ" required ></v-text-field>

        <v-text-field v-model="form.zipCode" :rules="zipCodeRules" label="CEP" required ></v-text-field>

        <v-text-field v-model="form.password"
          :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
          :rules="[passwordRules.required, passwordRules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="Senha"
          hint="minímo 8 caracteres"
          counter
          @click:append = "show = !show"
        ></v-text-field>

        <v-text-field v-model="form.confirmPassword"
          :append-icon="showc ? 'fas fa-eye' : 'fas fa-eye-slash'"
          :rules="[confirmPasswordRules.required, confirmPasswordRules.min]"
          :type="showc ? 'text' : 'password'"
          name="input-10-1"
          label="Confirmar senha"
          hint="minímo 8 caracteres"
          counter
          @click:append = "showc = !showc"
        ></v-text-field>

        <v-btn color="error" class="mr-4" @click="reset"> Limpar </v-btn>

        <v-btn type="submit" color="success" class="mr-4"> Cadastrar-se </v-btn>

      </v-form>   
    </div>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        name: "",
        password: "",
        email: "",
        document: "",
        confirmPassword: "",
        zipCode: ""
      },
      show: false,
      showc: false,
      showError: false,
      valid: true,
      passwordRules: {
        required: value => !!value || 'Senha é obrigatória!',
        min: v => v.length >= 8 || 'Minimo 8 caracteres',
      },
      confirmPasswordRules: {
        required: value => !!value || 'Senha é obrigatória!',
        min: v => v.length >= 8 || 'Minimo 8 caracteres',
      },
      usernameRules: [
        v => !!v || 'Usuário é obrigatório!',
        v => (v && v.length <= 15) || 'O nome de usuário deve ter menos de 15 caracteres',
      ],
      nameRules: [
        v => !!v || 'Nome é obrigatório!',
      ],
      documentRules: [
        v => !!v || 'Documento é obrigatório!',
        v => (v && v.length >= 11) || 'Documento deve ser maior que 11 caracteres',
      ],
      zipCodeRules: [
        v => !!v || 'CEP é obrigatório!',
        v => (v && v.length >= 8) || 'CEP deve ser maior que 10 caracteres',
      ],
      emailRules: [
        v => !!v || 'E-mail é obrigatório!',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido!',
      ],
      erro: "",
    };
  },
  methods: {
    ...mapActions(["Register"]),
    formatDocument(document){
      let doc = document.replace(/\D/g,"")
      if (doc.length == 14){
        doc=doc.replace(/^(\d{2})(\d)/,"$1.$2")             //Coloca ponto entre o segundo e o terceiro dígitos
        doc=doc.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
        doc=doc.replace(/\.(\d{3})(\d)/,".$1/$2")           //Coloca uma barra entre o oitavo e o nono dígitos
        doc=doc.replace(/(\d{4})(\d)/,"$1-$2")              //Coloca um hífen depois do bloco de quatro dígitos
      } else {
        doc=doc.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
        doc=doc.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                                //de novo (para o segundo bloco de números)
        doc=doc.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
      }
      return doc
    },
    formatZipcode(zip){
      //var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
      let zipcode = zip.replace(/\D/g,"")
      zipcode=zipcode.replace(/^(d{5})(d)/,"$1-$2") 
      //zipcode.replace(re, "$1.$2-$3")
      return zipcode
    },
    async submit() {
      try {
        this.form.zipCode = this.formatZipcode(this.form.zipCode);
        this.form.document = this.formatDocument(this.form.document);
        console.log(this.form);
        await this.Register(this.form);
        this.$router.push("/");
        this.showError = false;
      } catch (error) {
        this.showError = true
        this.erro = error.message
      }
    },
    reset () {
      this.$refs.form.reset()
    },
      
  },
};
</script>
<style scoped>
.center {
  margin: auto;
  width: 50%;
  text-align: center;
  padding: 10px;
}
</style>