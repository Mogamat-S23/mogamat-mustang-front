import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    products: null,
    singleProduct: null,
    user: null || JSON.parse(localStorage.getItem('user')),
    msg : null,
    admin : false,
  },
  getters: {},
  mutations: {
    stateProducts(state, products) {
      state.products = products
    },
    stateUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    }
  },
  actions: {
    admincheck(context){
      let user = context.state.user
      if(user != null){
        if(user.userRole === 'admin'){
          context.state.admin = true
        }
      }
    },
    fetchProducts: async (context) => {
      await fetch('https://mogamatmustang.herokuapp.com/products')
        .then(products => products.json())
        .then(productsJson => context.state.products = productsJson.mustangs)
        // .then(console.log(context.state.products))
    },
    getProduct: async (context, id) => {
      await fetch(`https://mogamatmustang.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => context.state.singleProduct = data.mustangs)
        .then(console.log(context.state.singleProduct))
    },
/// add product
    addProduct: async (context, payload) => {
      const {
        productName,
        mainImage,
        image2,
        image3,
        image4,
        carDescription,
        price,
        model,
        engine,
        bodyType,
        seatQuantity,
        handling,
        gear

      } = payload;
      fetch("https://mogamatmustang.herokuapp.com/products/", {
          method: "post",
          body: JSON.stringify({
            productName:productName,
            mainImage: mainImage,
            image2: image2,
            image3: image3,
            image4: image4,
            carDescription: carDescription,
            price: price,
            model: model,
            engine: engine,
            bodyType:bodyType,
            seatQuantity: seatQuantity,
            handling: handling,
            gear: gear

          }),
          headers: {
            "content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,

          },

        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("products");
        });
    },
    // updates 
    updateProduct: async (context, product) => {
      // fetch("http://localhost:3000/products/" + product.id, {
      fetch(`https://mogamatmustang.herokuapp.com/products/ ${product.product_id}`, {
          method: "PUT",
          body: JSON.stringify(product),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("fetchProducts");
        });
    },
    
    // Deletes Item from db
    deleteProduct: async (context, id) => {
      // fetch("http://localhost:3000/products/" + id, {
      fetch("https://mogamatmustang.herokuapp.com/products/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.dispatch("fetchProducts")
        });

    },

    //login
    login: async (context, data) => {
      console.log(data);
       fetch("http://localhost:3000/login", {
        // mode:"no-cors",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          // "x-auth-token": context.state.token,
        }
      })
      .then ((res) => res.json())
      .then ((data) => {
        console.log (data)
        let user = data.results
        context.state.msg = data.msg
        context.commit("stateUser",user);
        console.log(user)
        if(user.userRole === 'admin'){
          context.state.admin = true
        }
      });
    },

  //register 
  register: async (context,data) => {
    console.log("Sup")
    await fetch("http://localhost:3000/register" , {
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(userData => {
      context.state.msg = userData.msg
      console.log(userData)})
      // context.dispatch("login",data)
  }
  ,
    },
  modules: {},
});
