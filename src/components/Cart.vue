<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="carttitile">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartmustang">Cart</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="mustangcart">
        <!-- <div > -->
        <div class="card" v-for="mustang in mustangcart" :key="mustang">
          <img :src="mustang.mainImage" alt="">
          <h2>
            {{ mustang.productName }}
          </h2>
          <h4>
            R{{mustang.price}}
          </h4>
          <a
            class="btn"
            @click="this.$store.dispatch('deleteFromcart', mustang)"
          >
            <i class="bi bi-trash3"></i>
          </a>
        </div>
        <div id="total">
          Total: R{{total}}.00
        </div>
<button class="btn btn-light mt-2" @click="this.$store.dispatch('clearCart')">Clear Cart</button>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product_id"],
  computed: {
    mustangcart() {
      return this.$store.state.mustangs;
    },
    total(){
      let prices = this.$store.state.mustangs;
      if(prices != null){
        let sum = prices.reduce((x,cart) => {
          return x + cart.price;
        },0);
        return (parseInt(sum))
      }
    }
  },
 
  mounted() {
    // this.$store.dispatch("getMustang", this.id)
  },
};
</script>

<style scoped>
 .offcanvas-body{
  background-color: black;
  color: white;
 }


h2{
  color: black;
}
h4{
  color: black;
}

.offcanvas-header{
  height: 9.2vh;
  background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  color: white;
}
.card{
  border-top: 3px solid rgba(251, 75, 2, 1);
  border-bottom: 3px solid rgba(251, 75, 2, 1);
  border-left: 3px solid rgba(255, 151, 0, 1);
  border-right:3px solid rgba(255, 151, 0, 1);
}

.btn:before,
.btn:after {
 position: absolute;
 content: "";
 right: 0;
 bottom: 0;
 background: rgba(251, 75, 2, 1);
 /* box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3); */
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
 /* box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, .9),
        -4px -4px 5px 0px rgba(255, 255, 255, .9),
        7px 7px 20px 0px rgba(0, 0, 0, .2),
        4px 4px 5px 0px rgba(0, 0, 0, .3); */
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

</style>