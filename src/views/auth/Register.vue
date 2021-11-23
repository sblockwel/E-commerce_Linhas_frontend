<template>
  <div class="center">
    <div>
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="form.username" :counter="10" :rules="nameRules" label="Nome de usuário" required ></v-text-field>

        <v-text-field v-model="form. full_name" :rules="nameRules" label="Nome completo" required ></v-text-field>

        <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required ></v-text-field>

        <v-text-field v-model="form.document" :rules="documentRules" label="CPF ou CNPJ" required ></v-text-field>

        <v-text-field v-model="form.password" :rules="passwordRules" label="Senha" required ></v-text-field>

        <v-text-field v-model="form.confirmPassword" :rules="confirmPasswordRules" label="Confirme a senha" required ></v-text-field>
        <!--
          <v-select v-model="select" :items="items" :rules="[(v) => !!v || 'Item is required']" label="Item" required ></v-select>
        
        <v-checkbox v-model="checkbox" :rules="[(v) => !!v || 'You must agree to continue!']" label="Do you agree?" required ></v-checkbox>
        -->
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate" >
          Validate
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

        <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>

      </v-form>

      <form @submit.prevent="submit">
        <div>
          <label for="username">Username:</label>
          <input type="text" name="username" v-model="form.username" />
        </div>
        <div>
          <label for="full_name">Full Name:</label>
          <input type="text" name="full_name" v-model="form.name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="document">document:</label>
          <input type="text" name="document" v-model="form.document" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password" />
        </div>
        <div>
          <label for="confirmPassword"> confirmPassword :</label>
          <input
            type="password"
            name="confirmPassword"
            v-model="form.confirmPassword"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
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
      showError: false,
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