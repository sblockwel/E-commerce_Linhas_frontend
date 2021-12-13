import axios from "axios";

const state = {
};

const getters = {
};

const actions = {
  async CreateProduct(form) {
    for (const key in form) {
      let value = form[key]
      if (value == "") {
        throw new Error(`Um dos campos está vazio, verifique!`)        
      }
    }
    await axios.post('product', form)
  },

  async GetProducts() {
    let response = await axios.get("products")
    if (response.status == 404) {
      return [] 
    }
    else if(response.status != 200){
      throw new Error('Ocorreu um erro na API');      
    }
    return response.data
  },

  async CreateCategory({state},form) {
    for (const key in form) {
      let value = form[key]
      if (value == "") {
        throw new Error(`Um dos campos está vazio, verifique!`)        
      }
    }
    console.debug(state)
    await axios.post('productCategory', form)   
  },

  async GetCategories() {
    let response = await axios.get("productCategory")
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