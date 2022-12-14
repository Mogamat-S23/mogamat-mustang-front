import router from '@/router';
import {
  createStore
} from 'vuex'

//  pull me

export default createStore({
  state: {
    products: null,
    singleProduct: null,
    user: null || JSON.parse(localStorage.getItem('user')),
    msg : null,
    users : null,
    singleUser:null,
    admin : false,
    mustangs: null,
  },
  getters: {},
  mutations: {
    stateProducts(state, products) {
      state.products = products
    },
    stateUser(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
  stateMustangs(state, mustangs) {
      state.mustangs = mustangs
  }
  },
  actions: {
    admincheck(context){
      let user = context.state.user
      if(user != null){
        if(user.userRole === 'admin'){
          context.state.admin = true
        }
        context.dispatch('getMustang')
      }
    },
    fetchProducts: async (context) => {
      // await fetch('http://localhost:3000/products')
      await fetch('https://mogamatmustang.herokuapp.com/products')
        .then(products => products.json())
        .then(productsJson => context.state.products = productsJson.mustangs)
        // .then(console.log(context.state.products))
    },
    getProduct: async (context, id) => {
      // await fetch(`http://localhost:3000/products/${id}`)
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
          // alert(data.msg);
          context.dispatch("fetchProducts");
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
       fetch("https://mogamatmustang.herokuapp.com/login", {
      //  fetch("http://localhost:3000/login", {
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
          router.push('/products')
        }
      });
    },

  //register 
  register: async (context,data) => {
    console.log("Sup")
    // await fetch("http://localhost:3000/register" , {
    await fetch("https://mogamatmustang.herokuapp.com/register" , {
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
      router.push('/login')
  },
  fetchUsers: async (context) => {
    // await fetch('http://localhost:3000/users')
    await fetch('https://mogamatmustang.herokuapp.com/users')
      .then(users => users.json())
      .then(usersJson => context.state.users = usersJson.user)
      
  },
  getUser: async (context, id) => { 
    await fetch(`https://mogamatmustang.herokuapp.com/users/${id}`)
      .then(res => res.json())
      .then(data => context.state.user = data.user)
      .then(console.log(context.state.singleUser))
  },

  // edit user
  editUser: async (context, user) => {
    console.log(user);
    // fetch("http://localhost:3000/products/" + product.id, {
    // fetch("http://localhost:3000/users/" + user.id, {
    fetch("https://mogamatmustang.herokuapp.com/users/" + user.id, {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        }
      })
      .then((res) => res.json())
      .then((data) => {
        // alert(data.msg);
        console.log(data);
        context.dispatch("fetchUsers");
      });
  },

  // Deletes user from db
  deleteUser: async (context, id) => {
    console.log(id);
    // fetch("http://localhost:3000/products/" + id, {
    fetch("https://mogamatmustang.herokuapp.com/users/" + id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.msg)
        context.dispatch("fetchUsers")
        context.state.user = null
        localStorage.clear()
        router.push("/")
      });

  },
  //cart
    
  getMustang: async (context, id) => {
    id = context.state.user.id
    // id = context.state.user.id
    // await fetch("http://localhost:3000/users/" + id + "/cart", {
    await fetch("https://mogamatmustang.herokuapp.com/users/" + id + "/cart", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        context.commit("stateMustangs", data.mustangs);
      });
      
  },
  addTocart: async (context, mustang, id) => {
    id = context.state.user.id;
    console.log(mustang);
    // await fetch("http://localhost:3000/users/" + id + "/cart", {
    await fetch("https://mogamatmustang.herokuapp.com/users/" + id + "/cart", {
      method: "POST",
      body: JSON.stringify(mustang),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getMustang", id);
      });
  },
  clearCart: async (context, id) => {
    id = context.state.user.id
    // await fetch("http://localhost:3000/users/" + id + "/cart", {
    await fetch("https://mogamatmustang.herokuapp.com/users/" + id + "/cart", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getMustang", id)
      });
  },
  deleteFromcart: async (context, car, id) => {
    console.log(car);
    id = context.state.user.id;
    // await fetch(
    //   "http://localhost:3000/users/" + id + "/cart/" + car.cart_id,
    //   {
    await fetch(
      "https://mogamatmustang.herokuapp.com/users/" + id + "/cart/" + car.cart_id,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // "x-auth-token": context.state.token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getMustang", id);
      });
  },
    },
  modules: {},
});
