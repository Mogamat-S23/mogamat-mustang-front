<template>    
<nav class="fixed-top" id="navigation">
  <button id="navbutton" class="custom-btn btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <i class="bi bi-list"></i>
</button>
<button 
v-if="this.$store.state.user != null"
id="cartbutton" class="custom-btn btn " type="button" @click="logout">
 Logout
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
</nav>

<div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h1 class="offcanvas-title" id="staticBackdropLabel">  <img class="img" src="https://i.postimg.cc/pXCh59Ts/Untitlr4teyued-1.png" alt="" width="70px" height="70px"><span>Mogamats </span><span id="mustangs"> Mustangs</span></h1>
    <button id="x" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <!-- <div>
     <nav class="navbar navbar-expand-lg navbar-light container">
      <div class="container-fluid"> -->
          <ul>
            <li id="list">
              <router-link to="/" class="link"><i class="bi bi-house-door-fill"></i> Home</router-link>
            </li>
            <li id="list" v-if="this.$store.state.user != null">
              <router-link to="/products" class="link"><i class="bi bi-speedometer"></i> Garage</router-link>
            </li>
            
           
            <li id="list" v-if="this.$store.state.user == null">
              <router-link to="/login" class="link"><i class="bi bi-box-arrow-in-right"></i> Login  </router-link>
            </li>
            <li id="list" v-if="this.$store.state.user == null">
              <router-link to="/register" class="link"><i class="bi bi-file-text-fill"></i> Register  </router-link>
            </li>
            <li id="list" v-if="this.$store.state.user != null">
              <router-link to="/about" class="link"><i class="bi bi-file-richtext-fill"></i> About Us</router-link>
            </li>
            <li id="list" v-if="this.$store.state.user != null">
              <router-link to="/contact" class="link"><i class="bi bi-telephone-fill"></i> Contact Us  </router-link>
            </li>
            <li id="list" v-if="this.$store.state.user != null">
              <router-link to="/myprofile" class="link"><i class="bi bi-person-circle"></i> My Account  </router-link>
            </li>
            <li id="list" v-if="this.$store.state.user != null">
              <router-link to="/admin" class="link" v-if="this.$store.state.user.userRole == 'admin'"><i class="bi bi-person-video2"></i> Admin  </router-link>
            </li>
            <li id="list" v-if="this.$store.state.user != null">
              <router-link to="/usertable" class="link" v-if="this.$store.state.user.userRole == 'admin'"><i class="bi bi-table"></i> User Table  </router-link>
            </li>
            <br class="break">
            <img v-if="this.$store.state.user != null" id="userimg"
            :src="this.$store.state.user.userProfile" alt="">
            <h5 v-if="this.$store.state.user != null" id="user">
              User:{{this.$store.state.user.firstName}}
            </h5>
            
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


h1{
  color: white;
 font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  
}
img{
 margin-left: 95px;
 margin-right: 75px;
}
span{
  margin-right: 0px;
}
#mustangs{
  margin-left: -10px;
}
.link{
  text-decoration: none;
  color: rgba(251, 75, 2, 1);
  
}
#list{
  margin-top: 30px;
   /* the color  */
   --c: rgba(255, 151, 0, 1);
  /* the height */
  --h: 1.2em;

  line-height: var(--h);  
  color: #0000;
  overflow: hidden;
  text-shadow: 
    0 calc(-1 * var(--h) * var(--_i, 0)) var(--c), 
    0 calc(var(--h) * (1 - var(--_i, 0))) #fff;
  background: 
    linear-gradient(var(--c) 0 0) no-repeat
    calc(200% - var(--_i, 0) * 100%) 100% / 200% calc(100% * var(--_i, 0) + .08em);
  transition: .3s calc(var(--_i, 0) * .3s), background-position .3s calc(.3s - calc(var(--_i, 0) * .3s));
}


#list:hover{
  --_i: 1;
  color: white;
}
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

.line{
  color: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  background-color: black;
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
  background-color: black;
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
  font-size: 30px;
  
}
.offcanvas-header{
  background-color: black;
}

#x{
 background-color: white;
 margin-bottom: 120px;
}


.offcanvas, .offcanvas-lg, .offcanvas-md, .offcanvas-sm, .offcanvas-xl, .offcanvas-xxl {
    --bs-offcanvas-width: 400px;
    --bs-offcanvas-height: 30vh;
    --bs-offcanvas-padding-x: 1rem;
    --bs-offcanvas-padding-y: 1rem;
    --bs-offcanvas-color: ;
    --bs-offcanvas-bg: orangered;
    --bs-offcanvas-border-width: 1px;
    --bs-offcanvas-border-color: var(--bs-border-color-translucent);
    --bs-offcanvas-box-shadow: 0 0.125rem 0.25remrgba(0, 0, 0, 0.075);
}

#userimg{
  width: 70px;
  border-radius: 50%;
  height: 70px;
  margin-top: 20px;
}

#user{
  color: #db6216;
  background-image: -webkit-linear-gradient(0deg, #db6216 55%, #cccf1d 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
}

</style>