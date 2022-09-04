<template>    
<div id="navigation">
  <button id="navbutton" class="custom-btn btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <i class="bi bi-list"></i>
</button>
<button id="cartbutton" class="custom-btn btn" type="button" @click="logout">
  logout
</button>
<div  v-if="user">
              <button
                id="cartbutton"
                class="custom-btn btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#carttitile"
                aria-controls="offcanvasExample"
                @click="this.$store.dispatch('getMustang', user.id)"
              >
                <i class="bi bi-cart3">{{ num }}</i>
              </button>
              <!-- <button
                class="btn btn-primary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#carttitile"
                
              >
                Toggle right offcanvas
              </button> -->
            </div>
</div>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <!-- <div>
     <nav class="navbar navbar-expand-lg navbar-light container">
      <div class="container-fluid"> -->
          <ul>
            <li >
              <router-link to="/">Home  </router-link>
            </li>
            <li >
              <router-link to="/products">Shop  </router-link>
            </li>
            <li >
              <router-link to="/admin">admin  </router-link>
            </li>
            <li >
              <router-link to="/usertable">user  </router-link>
            </li>
            <li >
              <router-link to="/login">Login  </router-link>
            </li>
            <li >
              <router-link to="/register">Register  </router-link>
            </li>
            <li >
              <router-link to="/myprofile">my profile  </router-link>
            </li>
            
           
          </ul>
        <!-- </div>
    </nav>
      </div> -->
    </div>
  </div>
    <cart />
  
</template>

<script>
import cart from "../components/Cart.vue";

export default {
  components: {
    cart,
  },
  computed: {
    admin() {
      return this.$store.state.admin;
    },
    user() {
      return this.$store.state.user;
    },

    num: function () {
      let Cnum = this.$store.state.mustangs;
      if (Cnum === null || Cnum === undefined) {
        Cnum = 0;
        return Cnum;
      } else {
        // Cnum.length
        let i = Cnum.length;
        return (i);
      }
    },
  },
  mounted() {
    this.$store.dispatch("admincheck");
  },
  methods:{
    logout(){
      this.$store.state.user = null
      this.$store.state.cart = null
      localStorage.removeItem('user')
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
/* header {
  background-color: transparent;
  overflow: hidden;
  
} */
.custom-btn {
 width: 130px;
 height: 40px;
 color: #fff;
 border-radius: 5px;
 padding: 10px 25px;
 font-family: 'Lato', sans-serif;
 font-weight: 500;
 background: transparent;
 cursor: pointer;
 transition: all 0.3s ease;
 position: relative;
 display: inline-block;
 box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
 outline: none;
}

.btn {
 background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
 line-height: 42px;
 padding: 0;
 border: none;
}

.btn span {
 position: relative;
 display: block;
 width: 100%;
 height: 100%;
}

.btn:before,
.btn:after {
 position: absolute;
 content: "";
 right: 0;
 bottom: 0;
 background: rgba(251, 75, 2, 1);
 box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
 transition: all 0.3s ease;
}

.btn:before {
 height: 0%;
 width: 2px;
}

.btn:after {
 width: 0%;
 height: 2px;
}

.btn:hover {
 color: rgba(251, 75, 2, 1);
 background: transparent;
}

.btn:hover:before {
 height: 100%;
}

.btn:hover:after {
 width: 100%;
}

.btn span:before,
.btn span:after {
 position: absolute;
 content: "";
 left: 0;
 top: 0;
 background: rgba(251, 75, 2, 1);
 box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3);
 transition: all 0.3s ease;
}

.btn span:before {
 width: 2px;
 height: 0%;
}

.btn span:after {
 height: 2px;
 width: 0%;
}

.btn span:hover:before {
 height: 100%;
}

.btn span:hover:after {
 width: 100%;
}
#navigation{
  display: flex;
  justify-content: space-between;
}

ul{
  padding: 0;
  list-style: none;
}

/* nav{
  z-index: 2;
} */

#navbutton{
  width: 150px;
  margin: 10px;
}

#cartbutton{
  margin: 10px;
}

.offcanvas-body{
  background-color: black;
}
</style>