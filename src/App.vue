<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">products</router-link> |
    <router-link to="/admin">admin</router-link> |

  </nav> -->
  <Nav/>
  <router-view/>
 <Footer/>
</template>


<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer"

export default{
  components:{ Nav, Footer }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* overflow-x:hidden; */
}
/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */


</style>
