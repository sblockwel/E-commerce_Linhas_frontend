import axios from "axios";

const state = {
  user: null,
  token: null
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  StateToken: (state) => state.token
};

const actions = {
  async Register({dispatch}, form) {
    console.log('antes')
    await axios.post('register', form)
    console.log("DEPOIS")
    let UserForm = {
      "username": form.username,
      "password": form.password
    } 
    
    await dispatch('LogIn', UserForm)
  },

  async LogIn({commit}, user) {
    let response = await axios.post("login", user)
    if (response.status == 404) {
      throw new Error('Usuário não encontrado');  
    }
    else if(response.status != 200){
      throw new Error('Ocorreu um erro na API');      
    }
    await commit("setUser", user.username);
    await commit("setToken", response.data)
  },

  async LogOut({ commit }) {
    commit("logout");
  },
  
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  setToken(state, token) {
    state.token = token;
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