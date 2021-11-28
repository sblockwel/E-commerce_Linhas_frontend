<template>
  <div class="center">
    <div>
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="form.username" :counter="10" :rules="usernameRules" label="Nome de usuário" required ></v-text-field>

        <v-text-field v-model="form.name" :rules="nameRules" label="Nome completo" required ></v-text-field>

        <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required ></v-text-field>

        <v-text-field v-model="form.document" :rules="documentRules" label="CPF ou CNPJ" required ></v-text-field>

        <v-text-field v-model="form.password"
            :append-icon="show ? 'fas fa-eye' : 'fas fa-eye-slash'"
            :rules="[rules.required, rules.min]"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="minímo 8 caracteres"
            counter
            @click:append = "show = !show"
          ></v-text-field>

        <v-text-field v-model="form.password" label="Senha" required ></v-text-field>

        <v-text-field v-model="form.confirmPassword" label="Confirme a senha" required ></v-text-field>
        
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>

      </v-form>    
    </div>
    <p v-if="showError" id="error">Username already exists</p>
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
      },
      show: false,
      password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      showError: false,
      valid: true,
      usernameRules: [
        v => !!v || 'username is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        //v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      documentRules: [
        v => !!v || 'document is required',
        v => (v && v.length <= 10) || 'documento must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        console.log("antes");
        await this.Register(this.form);
        console.log("depois");
        this.$router.push("/login");
        this.showError = false;
      } catch (error) {
        this.showError = true;
        console.log(error);
      }
    },
    validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  },
};
</script>
<style scoped>
.center {
  margin: auto;
  width: 60%;
  text-align: center;
  padding: 10px;
}
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>