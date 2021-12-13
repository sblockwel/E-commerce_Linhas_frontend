<template>
   <div class="center">
    <v-alert type="error" v-if="showError">
      {{erro}}
    </v-alert>
    <div>
      <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">

        <v-text-field v-model="form.email" :rules="emailRules" label="Email" required ></v-text-field>

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

        <v-btn type="submit" color="success" class="mr-4"> Logar </v-btn>

      </v-form>   
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
      },      
      show: false,
      showError: false,
      valid: true,
      passwordRules: {
        required: value => !!value || 'Senha é obrigatória!',
        min: v => v.length >= 8 || 'Minimo 8 caracteres',
      },
      emailRules: [
        v => !!v || 'E-mail é obrigatório!',
        v => /.+@.+\..+/.test(v) || 'E-mail inválido!',
      ],
      erro: "",
    };
  },
  methods: {
    ...mapActions(["LogIn"]),
    async submit() {
      try {        
          await this.LogIn(this.form);
          this.$router.push({name: "Home"});
          this.showError = false
      } catch (error) {
        this.showError = true
        this.erro = error.message
      }
    },
  },
};
</script>

<style scoped>
.center {
  margin: auto;
  width: 20%;
  text-align: center;
  padding: 10px;
}

</style>