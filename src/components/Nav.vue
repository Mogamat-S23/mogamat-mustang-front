<template>
  <header>
    
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  Toggle static offcanvas
</button>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
     <nav class="navbar navbar-expand-lg navbar-light container">
      <div class="container-fluid">
          <ul>
            <li class="nav-item">
              <router-link to="/">Home  </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">Shop  </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">admin  </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/usertable">user  </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">Login  </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register">Register  </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/myprofile">my profile  </router-link>
            </li>
            
           
          </ul>
        </div>
    </nav>
      </div>
    </div>
  </div>

     <div v-if="user">
              <button
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
    <cart />
  </header>
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
};
</script>

<style scoped>
header {
  background-color: transparent;
  overflow: hidden;
  position: fixed;
}

ul{
  list-style: none;
}

nav{
  z-index: 2;
}
</style>