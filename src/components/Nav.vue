<template>    
<div id="navigation">
  <button id="navbutton" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <i class="bi bi-list"></i>
</button>
<button type="button" @click="logout">
  logout
</button>
<div  v-if="user">
              <button
                id="cartbutton"
                class="btn btn-primary"
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
header {
  background-color: transparent;
  overflow: hidden;
  /* position: fixed; */
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

</style>