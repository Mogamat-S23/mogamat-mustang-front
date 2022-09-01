<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light container">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="text-white">=</span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/">Home | </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products">Shop | </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin">admin | </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/usertable">user | </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">Login | </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register">Register </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link to="/userP">User Profile</router-link>
            </li> -->
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
          </ul>
        </div>
      </div>
    </nav>
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
nav {
  background-color: transparent;
  overflow: hidden;
  position: fixed;
}
</style>