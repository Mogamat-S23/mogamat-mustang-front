<template>
  <div class="single">

  
  <div id="singleprod" class="container mt-2 d-flex justify-content-center align-items-center">
    <div class="row" v-if="mustang">
      <div class="col-md-12">
        <div class="card" style="max-width: 70vw;" id="rowidg">
        <div class="row" >
          <div class="col-md-6 col-12">
              <img :src="mustang[0].mainImage" alt="" class="img-fluid" id="img"/>
              
              <div class="row-md-4">
               
                  <img :src="mustang[0].image2" alt="" style="width:213px; height:160px" class="img-fluid pt-2" id="img"/>
                  <img :src="mustang[0].image3" alt="" style="width:213px; height:160px" class="img-fluid pt-2" id="img"/>
                  <!-- <img :src="mustang[0].image4" alt="" style="width:213px; height:160px" class="img-fluid" id="img"/> -->
                
              </div>

          </div>

          <div class="col-md-6 col-12">
            <div class="card-body">
              <h1>{{ mustang[0].productName }}</h1>
              <!-- <h5 class="card-title">Card title</h5> -->

              <h5>Model:{{mustang[0].model}}</h5>
              <h5>
                  Engin:{{mustang[0].engine}}
              </h5>
              <h5>
                  Body Type:{{mustang[0].bodyType}}
              </h5>
              <h5>
                Seat Quantity: {{mustang[0].seatQuantity}}
              </h5>
              <h5>
                Gear: {{mustang[0].gear}}
              </h5>
              <h2>R{{ mustang[0].price }}</h2>
              <p class="card-text">
                {{mustang[0].carDescription}}
              
              </p>
            <p class="card-text">
              <button @click="this.$store.dispatch('addTocart', mustang[0])" class="btn btn-outline-light" type="submit" id="btn"><span>Add to cart</span></button>
            </p>
            </div>
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
  props: ["id"],
  mounted(){
    this.$store.dispatch("getProduct", this.$route.params.id)
  },
  computed: {
    mustang() {
      return this.$store.state.singleProduct;
    },
  },
  methods:{
    add(){
      this.$store.dispatch("addTocart", this.id)
    }
  }
}
</script>

<style scoped>
  /* header{
    background-color: black;
    height: 10vh;
  } */

#img{
  padding: 5px;
}

.single{
  background-image: url('https://i.postimg.cc/j2Y9pc7k/orza-Horizon-4.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  aspect-ratio: 1;
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


.card{
  border-top: 3px solid rgba(251, 75, 2, 1);
  border-bottom: 3px solid rgba(251, 75, 2, 1);
  border-left: 3px solid rgba(255, 151, 0, 1);
  border-right:3px solid rgba(255, 151, 0, 1);
  margin-top: 20px;
  background-color: black;
  color: white;
}


</style>