<template>
  <!-- <header> -->
    <form action="" class="search-bar">
      <input
      class="form-control"
        type="search"
        name="search"
        pattern=".*\S.*"
        v-model="search"
        required
      />
      <!-- <button class="search-btn" type="submit">
		<span>Search</span>
	</button> -->
  <select class="form-control" name="" id="" v-model="gear">
  <option value="All" selected disabled>Sort by Transmission Type</option>
  <option value="All">All</option>
  <option value="Manual">Manual</option>
  <option value="Automatic">Automatic</option>
  </select>
    </form>
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
            <a href="#" class="btn btn-primary">view</a>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>No mustangs in garage</div>
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
header {
  background-color: black;
  height: 13vh;
  margin-bottom: 50px;
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
  box-shadow: 0 0 0 0.4em rgba(251, 75, 2, 1) inset;
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
  background: rgba(255, 151, 0, 1);
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

@media screen and (prefers-color-scheme: dark) {
  body,
  input {
    color: #f1f1f1;
  }
  body {
    background: #171717;
  }
  .search-bar input {
    box-shadow: 0 0 0 0.4em #f1f1f1 inset;
  }
  .search-bar input:focus,
  .search-bar input:valid {
    background: #3d3d3d;
    box-shadow: 0 0 0 0.1em #3d3d3d inset;
  }
  .search-btn {
    background: #f1f1f1;
  }
}
.contaner {
  min-height: fit-content;
}
/*  */
#products {
  justify-content: center;
  gap: 35px;

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
    width: 268px;
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