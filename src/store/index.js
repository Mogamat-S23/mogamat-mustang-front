import { createStore } from 'vuex'

export default createStore({
  state: {
    products : null,
    singleProduct : null
  },
  getters: {
  },
  mutations: {
    stateProducts(state,products){
      state.products = products
    }
  },
  actions: {
    fetchProducts: async (context) => {
      await fetch ('https://mogamatmustang.herokuapp.com/products')
      .then(products => products.json())
      .then(productsJson => context.state.products = productsJson.mustangs)
      .then(console.log(context.state.products))
    },
    getProduct: async (context, id) => {
      await fetch(`https://mogamatmustang.herokuapp.com/products/${id}`)
      .then(res => res.json())
      .then(data => context.state.singleProduct = data.mustangs)
      .then(console.log(context.state.singleProduct))  
    },


  },
  modules: {
  }
})
