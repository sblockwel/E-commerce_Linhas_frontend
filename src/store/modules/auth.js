import axios from "axios";
import jwt_decode from "jwt-decode";

const state = {
  user: null,
  token: null,
  role: null
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  StateToken: (state) => state.token,
  StateRole: (state) => state.role
};

const actions = {
  async Register({dispatch}, form) {
    for (const key in form) {
      let value = form[key]
      if (value == "") {
        throw new Error(`Um dos campos está vazio, verifique!`)        
      }
    }
    await axios.post('register', form)
    let UserForm = {
      "username": form.username,
      "password": form.password
    } 
    
    await dispatch('LogIn', UserForm)
  },

  async LogIn({commit}, user) {
    if (user.username == "" || user.password == "" ) {
      throw new Error('Usuário ou senha não pode ser vazio')
    }
    let response = await axios.post("login", user)
    if (response.status == 404) {
      throw new Error('Usuário não encontrado');  
    }
    else if(response.status != 200){
      throw new Error('Ocorreu um erro na API');      
    }
    await commit("setUser", user.username);
    await commit("setToken", response.data);
  },

  async LogOut({ commit }) {
    commit("logout");
  },

  async CreateAdmin({commit}, userId){
    let response = await axios.post("/admin/" + userId)
    if (response == null || response.status != 200) {
      throw new Error('Ocorreu um erro na API');  
    }
    await commit("setToken", state.token)
  },

  async GetsUsers(){
    let response = await axios.get("/clients")
    if (response == null || response.status == 404) {
      return [] 
    }
    else if(response.status != 200){
      throw new Error('Ocorreu um erro na API');      
    }
    return response.data
  }
  
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  setToken(state, token) {
    let decoded = jwt_decode(token);
    console.log(decoded)
    state.token = token;
    state.role = "";
    axios.defaults.headers.common['Authorization'] =  `Bearer ${token}` 
  },
  logout(state) {
    state.user = null;
    state.token = null;
    axios.defaults.headers.common['Authorization'] =  null
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};