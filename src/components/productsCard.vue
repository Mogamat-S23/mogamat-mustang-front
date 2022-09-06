<template>
  <!-- <header> -->
   

    

    
    <div class="container" id="filter">
      <div class="row">
        <div class="col-md-6" id="search">
          <form action="" class="search-bar">
      <input
      class="form-control"
        type="search"
        name="search"
        pattern=".*\S.*"
        v-model="search"
        id="searchicon"
        placeholder="search..."
        required
        
      />
      </form>
        </div>
     <div class="col-md-6" id="filter">
      <div>
      <form class="filter">
      <select class="form-control" name="" id="" v-model="gear">
  <option value="All" selected disabled>Sort by Transmission Type</option>
  <option value="All">All</option>
  <option value="Manual">Manual</option>
  <option value="Automatic">Automatic</option>
  </select>
    </form>
    </div>
     </div>
   
      </div>

    </div>
  

    
      <!-- <button class="search-btn" type="submit">
		<span>Search</span>
	</button> -->
  
  <!-- </header> -->

  <div class="container-fluid">
    <div v-if="mustangs" class="row" id="products">
      <div
        v-for="mustang in mustangs"
        :key="mustang.product_id"
        class="card"
        style="width: 18rem"
      >
        <img :src="mustang.mainImage" class="card-img-top" alt="..." />
        <div class="card-body">
          <h3 class="card-title">{{ mustang.productName }}</h3>
          <h5 class="card-text">R{{ mustang.price }}</h5>
          <router-link
            :to="{ name: 'singleProducts', params: { id: mustang.product_id } }"
          >
            <a href="#" class="btn btn-primary" id="btn" >view</a>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else><svg class="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle class="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" stroke-width="8" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle class="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" stroke-width="7" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle class="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" stroke-width="6" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle class="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle class="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" stroke-width="4" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle class="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg></div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      search: "",
      gear: "All",
    };
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  // computed: {
  //   mustangs() {
  //     return this.$store.state.products;
  //   },
  // },
  computed: {
    mustangs() {
      return this.$store.state.products?.filter((mustang) => {
        let isMatch = true;
        if (!mustang.productName.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        if (this.gear !== "All" && this.gear !== mustang.gear) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
};
</script>

<style scoped>
/*  */

.card{
  border-top: 3px solid rgba(251, 75, 2, 1);
  border-bottom: 3px solid rgba(251, 75, 2, 1);
  border-left: 3px solid rgba(255, 151, 0, 1);
  border-right:3px solid rgba(255, 151, 0, 1);
}

#filter{
  margin-top: 25px;
  
}

.form-control {
    display: block;
    width: 75%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background:linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}


header {
  background-color: black;
  height: 13vh;
  margin-bottom: 50px;
}
#btn{
  background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  width: 120px;
  margin-bottom: 5px;

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

* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 
}
:root {
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1920 - 320));
}
body,
button,
input {
  font: 1em Hind, sans-serif;
  line-height: 1.5em;
}
body,
input {
  color: #171717;
}
body,
.search-bar {
  display: flex;
}
body {
  background: #f1f1f1;
  height: 100vh;
}
.search-bar input,
.search-btn,
.search-btn:before,
.search-btn:after {
  transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
  width: 3em;
  height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
  cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid {
  width: 100%;
}
.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
  outline: transparent;
}
.search-bar {
  margin: auto;
  padding: 1.5em;
  justify-content: center;
  max-width: 30em;
}
.search-bar input {
  background: transparent;
  border-radius: 1.5em;
  box-shadow: 0 0 0 0.4em rgba(251, 75, 2, 1) inset !important;
  padding: 0.75em;
  transform: translate(0.5em, 0.5em) scale(0.5);
  transform-origin: 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.search-bar input::-webkit-search-decoration {
  -webkit-appearance: none;
}
.search-bar input:focus,
.search-bar input:valid {
  background: #fff;
  border-radius: 0.375em 0 0 0.375em;
  box-shadow: 0 0 0 0.1em #d9d9d9 inset;
  transform: scale(1);
}
.search-btn {
  background: rgba(255, 151, 0, 1) !important;
  border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
  padding: 0.75em;
  position: relative;
  transform: translate(0.25em, 0.25em) rotate(45deg) scale(0.25, 0.125);
  transform-origin: 0 50%;
}
.search-btn:before,
.search-btn:after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
}
.search-btn:before {
  border-radius: 50%;
  box-shadow: 0 0 0 0.2em #f1f1f1 inset;
  top: 0.75em;
  left: 0.75em;
  width: 1.2em;
  height: 1.2em;
}
.search-btn:after {
  background: #f1f1f1;
  border-radius: 0 0.25em 0.25em 0;
  top: 51%;
  left: 51%;
  width: 0.75em;
  height: 0.25em;
  transform: translate(0.2em, 0) rotate(45deg);
  transform-origin: 0 50%;
}
.search-btn span {
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
  background: rgba(251, 75, 2, 1);
  border-radius: 0 0.375em 0.375em 0;
  transform: scale(1);
}
.search-bar input:focus + .search-btn:before,
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before,
.search-bar input:valid + .search-btn:after {
  opacity: 1;
}
.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
   background: linear-gradient(
    0deg,
    rgba(255, 151, 0, 1) 0%,
    rgba(251, 75, 2, 1) 100%
  ); 
}
.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
  transform: translateY(1px);
}

/* From uiverse.io by @harman-kanda */
/* From cssbuttons.io by @harmankanda.github.io/New */

.pl {
 width: 5em;
 height: 5em;
}

.pl circle {
 transform-box: fill-box;
 transform-origin: 50% 50%;
}

.pl__ring1 {
 animation: ring1 4s 0s ease-in-out infinite;
}

.pl__ring2 {
 animation: ring2 4s 0.04s ease-in-out infinite;
}

.pl__ring3 {
 animation: ring3 4s 0.08s ease-in-out infinite;
}

.pl__ring4 {
 animation: ring4 4s 0.12s ease-in-out infinite;
}

.pl__ring5 {
 animation: ring5 4s 0.16s ease-in-out infinite;
}

.pl__ring6 {
 animation: ring6 4s 0.2s ease-in-out infinite;
}

/* Animations */
@keyframes ring1 {
 from {
  stroke-dashoffset: -376.237129776;
  transform: rotate(-0.25turn);
  animation-timing-function: ease-in;
 }

 23% {
  stroke-dashoffset: -94.247778;
  transform: rotate(1turn);
  animation-timing-function: ease-out;
 }

 46%, 50% {
  stroke-dashoffset: -376.237129776;
  transform: rotate(2.25turn);
  animation-timing-function: ease-in;
 }

 73% {
  stroke-dashoffset: -94.247778;
  transform: rotate(3.5turn);
  animation-timing-function: ease-out;
 }

 96%, to {
  stroke-dashoffset: -376.237129776;
  transform: rotate(4.75turn);
 }
}

@keyframes ring2 {
 from {
  stroke-dashoffset: -329.207488554;
  transform: rotate(-0.25turn);
  animation-timing-function: ease-in;
 }

 23% {
  stroke-dashoffset: -82.46680575;
  transform: rotate(1turn);
  animation-timing-function: ease-out;
 }

 46%, 50% {
  stroke-dashoffset: -329.207488554;
  transform: rotate(2.25turn);
  animation-timing-function: ease-in;
 }

 73% {
  stroke-dashoffset: -82.46680575;
  transform: rotate(3.5turn);
  animation-timing-function: ease-out;
 }

 96%, to {
  stroke-dashoffset: -329.207488554;
  transform: rotate(4.75turn);
 }
}

@keyframes ring3 {
 from {
  stroke-dashoffset: -288.4484661616;
  transform: rotate(-0.25turn);
  animation-timing-function: ease-in;
 }

 23% {
  stroke-dashoffset: -72.2566298;
  transform: rotate(1turn);
  animation-timing-function: ease-out;
 }

 46%, 50% {
  stroke-dashoffset: -288.4484661616;
  transform: rotate(2.25turn);
  animation-timing-function: ease-in;
 }

 73% {
  stroke-dashoffset: -72.2566298;
  transform: rotate(3.5turn);
  animation-timing-function: ease-out;
 }

 96%, to {
  stroke-dashoffset: -288.4484661616;
  transform: rotate(4.75turn);
 }
}

@keyframes ring4 {
 from {
  stroke-dashoffset: -253.9600625988;
  transform: rotate(-0.25turn);
  animation-timing-function: ease-in;
 }

 23% {
  stroke-dashoffset: -63.61725015;
  transform: rotate(1turn);
  animation-timing-function: ease-out;
 }

 46%, 50% {
  stroke-dashoffset: -253.9600625988;
  transform: rotate(2.25turn);
  animation-timing-function: ease-in;
 }

 73% {
  stroke-dashoffset: -63.61725015;
  transform: rotate(3.5turn);
  animation-timing-function: ease-out;
 }

 96%, to {
  stroke-dashoffset: -253.9600625988;
  transform: rotate(4.75turn);
 }
}

@keyframes ring5 {
 from {
  stroke-dashoffset: -225.7422778656;
  transform: rotate(-0.25turn);
  animation-timing-function: ease-in;
 }

 23% {
  stroke-dashoffset: -56.5486668;
  transform: rotate(1turn);
  animation-timing-function: ease-out;
 }

 46%, 50% {
  stroke-dashoffset: -225.7422778656;
  transform: rotate(2.25turn);
  animation-timing-function: ease-in;
 }

 73% {
  stroke-dashoffset: -56.5486668;
  transform: rotate(3.5turn);
  animation-timing-function: ease-out;
 }

 96%, to {
  stroke-dashoffset: -225.7422778656;
  transform: rotate(4.75turn);
 }
}

@keyframes ring6 {
 from {
  stroke-dashoffset: -203.795111962;
  transform: rotate(-0.25turn);
  animation-timing-function: ease-in;
 }

 23% {
  stroke-dashoffset: -51.05087975;
  transform: rotate(1turn);
  animation-timing-function: ease-out;
 }

 46%, 50% {
  stroke-dashoffset: -203.795111962;
  transform: rotate(2.25turn);
  animation-timing-function: ease-in;
 }

 73% {
  stroke-dashoffset: -51.05087975;
  transform: rotate(3.5turn);
  animation-timing-function: ease-out;
 }

 96%, to {
  stroke-dashoffset: -203.795111962;
  transform: rotate(4.75turn);
 }
}

@media screen and (prefers-color-scheme: dark) {
  body,
  input {
    color: #f1f1f1;
  }
  body {
    background: #171717;
  }
  /* .search-bar input {
    box-shadow: 0 0 0 0.4em #f1f1f1 inset;
  } */
  .search-bar input:focus,
  .search-bar input:valid {
    background: #3d3d3d;
    box-shadow: 0 0 0 0.1em #3d3d3d inset;
  }
  .search-btn {
    background: #f1f1f1;
  }
}
.container {
  min-height: fit-content;
}
/*  */
#products {
  justify-content: center;
  gap: 35px;
  margin-top: 20px;

  /* align-items: center; */
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(5.5 * var(--bs-gutter-x));
}

.card-img-top {
  padding: 50px;
  /* width: 10rem; */

  transition: transform 0.2s; /* Animation */
  width: 300px;
  height: 300px;
  margin: 0;
}
@media screen and (min-width: 299px) and (max-width: 301px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 300px;
  }
  .card {
    margin-right: 264px;
  }
  .card-img-top {
    padding: 5px 0 0 0;
    width: 288px;
  }
  #search{
    margin-right: 350px;
  }
  #filter{
    margin-right: 200px;
  }
}

.card-img-top:hover {
  transform: scale(
    1.5
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
img {
  width: 100%;
  height: auto;
}
</style>