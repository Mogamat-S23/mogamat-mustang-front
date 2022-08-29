<template>
<header>

</header>
  <productsCard/>
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
  header{
    background-color: black;
    height: 10vh;
  }
</style>