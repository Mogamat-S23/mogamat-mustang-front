<template>
<div class="container">
  <div >
    <div v-if="mustangs" class="row" id="products">
        <div v-for="mustang in mustangs" :key="mustang.product_id" class="card" style="width: 18rem;">
        <img :src="mustang.mainImage" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">{{mustang.productName}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <router-link :to="{name : 'singleProducts',params : {id : mustang.product_id} }">
         <a href="#" class="btn btn-primary">view</a>
    </router-link>
        
       
    </div>
        </div>
    </div>
<div v-else> No mustangs in garage</div >
    </div>
  </div>

  
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch("fetchProducts")
    },
     computed: {
    mustangs() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped>
 #products{
  justify-content: center;
  gap:35px
 }


</style>