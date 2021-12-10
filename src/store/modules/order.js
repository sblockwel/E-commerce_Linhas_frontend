import axios from "axios";

const state = {
};

const getters = {
};

const actions = {
  async GetOrders() {
    let response = await axios.get("orders/pending")
    if (response == null || response.status == 404) {
      return [] 
    }
    else if(response.status != 200){
      throw new Error('Ocorreu um erro na API');      
    }
    return response.data
  },
  
};

const mutations = {
  
};

export default {
  state,
  getters,
  actions,
  mutations,
};