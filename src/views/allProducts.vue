<template>
<div id="background">
  <productsCard/>
</div>
  
</template>

<script>
import productsCard from "../components/productsCard.vue"

export default {
    components: {
        productsCard,
    }
}
</script>

<style scoped>
 
 #background{
  background-image: url('https://i.postimg.cc/JnFNP4hz/istockphoto-1281323504-170667a.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
 }


</style>