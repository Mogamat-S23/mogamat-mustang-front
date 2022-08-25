<template>
  <div id="singleprod" class="container mt-2 d-flex justify-content-center align-items-center">
    <div class="row" v-if="mustang">
      <div class="col-md-12">
        <div class="card" style="max-width: 70vw;" id="rowidg">
        <div class="row" >
          <div class="col-md-6 col-12">
              <img :src="mustang[0].image2" alt="" class="img-fluid" id="img"/>
              

          </div>

          <div class="col-md-6 col-12">
            <div class="card-body">
              <h1>{{ mustang[0].productName }}</h1>
              <!-- <h5 class="card-title">Card title</h5> -->
              <p class="card-text">
                {{mustang[0].carDescription}}
              
              </p>
              <h5>
                  engin:{{mustang[0].engin}}
              </h5>
              <h5>
                Seat Quantity: {{mustang[0].seatQuantity}}
              </h5>
              <h2>R{{ mustang[0].price }}</h2>
            <p class="card-text">
              <button @click="add" class="button" type="submit"><span>Add to cart</span></button>
            </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product_id"],
  mounted(){
    this.$store.dispatch("getProduct", this.$route.params.id)
  },
  computed: {
    mustang() {
      return this.$store.state.singleProduct;
    },
  },
}
</script>