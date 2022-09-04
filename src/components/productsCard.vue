<template>
<div class="container">
  <div >
    <div v-if="mustangs" class="row" id="products">
        <div v-for="mustang in mustangs" :key="mustang.product_id" class="card" style="width: 18rem;">
        <img :src="mustang.mainImage" class="card-img-top" alt="...">
    <div class="card-body">
        <h3 class="card-title">{{mustang.productName}}</h3>
        <h5 class="card-text">R{{mustang.price}}</h5>
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

 .card-img-top {
  padding: 50px;
  
  transition: transform .2s; /* Animation */
  width: 280px;
  height: 300px;
  margin: 0;
}

.card-img-top:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>