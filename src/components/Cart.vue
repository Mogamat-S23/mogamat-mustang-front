<template>
<div class="offcanvas offcanvas-end" tabindex="-1" id="carttitile" >
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="cartmustang">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div v-if="mustangcart">
        <div v-for="mustang in cart" :key="mustang">
            <div classs=card>
                <h2>
                    {{mustang.productName}}
                </h2>
                <a class="btn" @click="this.store.dispatch('deletecartitem', mustang)"><i>
                    <i class="bi bi-trash3"></i>
                </i>

                </a>

            </div>

        </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
    props:["product_id"],
    computed: {
        mustangcart() {
            return this.$store.state.mustangcart
        }
    },
    mounted(){
        // this.$store.dispatch("getMustang", this.id)
    }

}
</script>

<style>

</style>